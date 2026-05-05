# WF02 Analyze — fixes

Three changes:
1. Add IG oEmbed fallback when Firecrawl returns empty
2. Add screenshot vision branch (depends on WF01 storing `attachment_url`)
3. Honest analysis when content was not fetched
4. Model upgrade

## 1. IG oEmbed fallback

### Add new HTTP Request node `IG oEmbed` between `Firecrawl Scrape` and `Enrich Prompt`

- Method: GET
- URL:
  ```
  ={{ $('Build Analysis Prompt').item.json.link_url && $('Build Analysis Prompt').item.json.link_url.includes('instagram.com') && (!$json.success || !$json.data || !$json.data.markdown || $json.data.markdown.length < 50) ? 'https://www.instagram.com/api/v1/oembed/?url=' + encodeURIComponent($('Build Analysis Prompt').item.json.link_url) : 'https://httpbin.org/json' }}
  ```
- Send Headers: yes
  - `User-Agent`: `Mozilla/5.0 (compatible; SPARK360-Bot/1.0)`
- `onError`: `continueRegularOutput`
- `options.timeout`: 10000

This calls Instagram's oEmbed endpoint only when Firecrawl was empty for an IG URL. The `httpbin.org/json` fallback URL is a no-op for non-IG cases (returns predictable JSON, ignored downstream). If Instagram blocks oEmbed too (sometimes they require an FB access token), the next step still handles empty gracefully.

### Update `Enrich Prompt` code node

Replace the entire code with:

```javascript
const pd = $('Build Analysis Prompt').item.json;
const fc = $('Firecrawl Scrape').item.json;
const oe = $input.item.json;

let scraped = '';
let scrapeSource = 'none';

try {
  if (fc && fc.success && fc.data && fc.data.markdown && fc.data.markdown.length > 50) {
    scraped = fc.data.markdown.substring(0, 4000);
    scrapeSource = 'firecrawl';
  }
} catch(e) {}

if (!scraped && oe && oe.title) {
  // Instagram oEmbed returned something
  const parts = [];
  if (oe.author_name) parts.push('Author: ' + oe.author_name);
  if (oe.title) parts.push('Caption: ' + oe.title);
  if (oe.thumbnail_url) parts.push('Thumbnail: ' + oe.thumbnail_url);
  scraped = parts.join('\n');
  scrapeSource = 'ig_oembed';
}

const wasScrap = scraped.length > 0;
const honestNote = wasScrap
  ? ''
  : '\n\nNOTE TO ANALYSIS ENGINE: The link content could NOT be fetched (Firecrawl returned empty, oEmbed unavailable). Do NOT fabricate a summary. Set category="link_blind", set summary="link received but content not accessible", set should_queue=false. Score everything 1/10 since we have no signal.';

const enriched = pd.analysis_prompt
  + (scraped ? '\n\nSCRAPED PAGE CONTENT (source: ' + scrapeSource + '):\n' + scraped : '')
  + honestNote;

return [{
  json: {
    entry_id: pd.entry_id,
    user_id: pd.user_id,
    raw_text: pd.raw_text,
    source_type: pd.source_type,
    link_url: pd.link_url,
    first_name: pd.first_name,
    analysis_prompt: enriched,
    scraped_content: scraped,
    was_scraped: wasScrap,
    scrape_source: scrapeSource
  }
}];
```

## 2. Screenshot vision branch

This is a parallel path triggered when `source_type='screenshot'` or `'image'`. Easiest implementation: extend `Enrich Prompt` to also handle screenshot OCR via a separate Claude vision call before the main analysis.

### Prereq

WF01 must populate `entries.attachment_url` with the Telegram `file_id`. See `04-WF01-ingest-fixes.md`.

### Add 3 nodes in WF02 (between `Fetch This Entry` and `Build Analysis Prompt`)

1. **`Is Screenshot` IF node**:
   - Condition: `{{ $json.source_type === 'screenshot' || $json.source_type === 'image' }}` AND `{{ $json.attachment_url && $json.attachment_url.length > 5 }}`
   - True branch → `Get TG File Path` → `Download TG File` → `Vision OCR Claude` → merge back into main flow

2. **`Get TG File Path` HTTP Request**:
   - URL: `https://api.telegram.org/bot{{ $credentials.telegramApi.accessToken }}/getFile?file_id={{ $json.attachment_url.replace(/^tg:\/\//, '') }}`
   - Method: GET
   - Authentication: none (token in URL)
   - Returns `{ok: true, result: { file_path: "photos/file_xxx.jpg" }}`

3. **`Download TG File` HTTP Request**:
   - URL: `https://api.telegram.org/file/bot{{ $credentials.telegramApi.accessToken }}/{{ $json.result.file_path }}`
   - Method: GET
   - Response Format: `file` (binary)

4. **`Vision OCR Claude` HTTP Request**:
   - URL: `https://api.anthropic.com/v1/messages`
   - Auth: `httpHeaderAuth` (existing Anthropic creds)
   - Method: POST
   - Body (JSON):
     ```json
     {
       "model": "claude-opus-4-7",
       "max_tokens": 2048,
       "messages": [{
         "role": "user",
         "content": [
           {
             "type": "image",
             "source": {
               "type": "base64",
               "media_type": "image/jpeg",
               "data": "{{ $binary.data.toString('base64') }}"
             }
           },
           {
             "type": "text",
             "text": "OCR every visible word in this image. Then in 2-3 sentences describe what the image is showing (UI screenshot? IG post? handwritten note?). Output JSON: {\"ocr_text\": \"...\", \"image_summary\": \"...\"}"
           }
         ]
       }]
     }
     ```
   - Output is parsed and treated as `cleaned_text` in the main analysis flow.

### Wire-up

After `Vision OCR Claude`, run a Set/Code node `Inject Vision Result` that takes `ocr_text + image_summary` and writes them into `cleaned_text` of the entry, then continues to `Build Analysis Prompt` exactly as the link path does.

## 3. Honest analysis prompt

In the `Build Analysis Prompt` code node, change the static `RETURN:` template to add a sentence at the end:

```
RULES:
- If the input has SCRAPED PAGE CONTENT below, ground your category/summary/insight in it.
- If the input has NO scraped content (only a URL), set category="link_blind", summary="link received but content not accessible", should_queue=false, all scores=1, brand_routes=[], content_formats=[]. Do NOT fabricate.
- If the input has SCREENSHOT OCR (from vision), treat the OCR text as the source content.
```

## 4. Model upgrade

In the `Claude Analyze` HTTP node, change the `jsonBody`:

```
={{ JSON.stringify({model: 'claude-opus-4-7', max_tokens: 4096, system: 'Return ONLY valid JSON. No markdown.', thinking: { type: 'enabled', budget_tokens: 8000 }, messages: [{role: 'user', content: $('Enrich Prompt').item.json.analysis_prompt}]}) }}
```

Notes:
- `claude-opus-4-7` is the latest Opus model (from system context, knowledge cutoff Jan 2026)
- Extended thinking with 8000 token budget gives the analysis room to actually reason about brand routing instead of pattern-matching keywords
- `max_tokens` raised to 4096 to fit thinking + JSON output

The `Parse Analysis` node downstream needs no change — extended thinking content is in `r.content[0]` (text type) at the end after the thinking block. If parsing breaks, update the code node to skip `content[]` items where `type === 'thinking'` and use the first `type === 'text'` item.

Updated `Parse Analysis` code (defensive against thinking blocks):

```javascript
const prev = $('Enrich Prompt').item.json;
const r = $input.item.json;
let t = '';
if (r.content && Array.isArray(r.content)) {
  const textBlock = r.content.find(c => c.type === 'text');
  t = textBlock ? (textBlock.text || '') : '';
}
t = t.replace(/```json/g, '').replace(/```/g, '').trim();
let a;
try { a = JSON.parse(t); } catch(e) {
  a = { category: 'other', summary: 'parse error: ' + (e.message || 'unknown'), core_insight: '', business_relevance: '', brand_routes: [], content_formats: [], should_queue: false, monetization_score: 1, content_potential_score: 1, urgency_score: 1, dashboard_bucket: 'inbox', suggested_next_action: '', tags: [], pattern_connections: [], memory_writes: [], artifact_suggestion: { should_create: false } };
}
if (!['idea','content','opportunity','research','personal','other','link_blind'].includes(a.category)) a.category = 'other';
const cl = (v, mn, mx) => Math.min(mx, Math.max(mn, Number(v) || mn));
a.monetization_score = cl(a.monetization_score, 1, 10);
a.content_potential_score = cl(a.content_potential_score, 1, 10);
a.urgency_score = cl(a.urgency_score, 1, 10);
if (!Array.isArray(a.brand_routes)) a.brand_routes = [];
if (!Array.isArray(a.content_formats)) a.content_formats = [];
if (typeof a.should_queue !== 'boolean') a.should_queue = a.content_potential_score >= 7;
return [{ json: { ...prev, analysis: a } }];
```

Two new things vs the current code:
- Extracts the `text` block from a multi-block response (skips thinking blocks)
- Adds `'link_blind'` to the allowed category list
