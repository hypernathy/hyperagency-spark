# WF03 Respond — replacement for `Build SPARK Reply` code node

## What changes

The current prompt forces Claude to claim "PROOF OF READ" with specific content references — even when `cleaned_text` is empty. Result: hallucinations grounded in URL slugs.

The new prompt has two modes:
1. **Grounded mode** (`was_scraped=true` or `had_vision=true`): reference the actual content
2. **Honest mode** (no content fetched): explicitly say "I didn't get the content" and either ask, or comment on what's verifiable

## Replacement code (paste into the code node)

```javascript
const item = $('Fetch This Entry').item.json;
const ctxRaw = $('Get Context').first().json.ctx;
const ctx = typeof ctxRaw === 'string' ? JSON.parse(ctxRaw) : ctxRaw;
const brandRules = $input.all().map(i => '[' + i.json.category + '] ' + i.json.content).join('\n');
const memories = (ctx.memories || []).slice(0, 8).map(m => '[' + m.type + '] ' + m.content).join('\n');
const signals = (ctx.obsession_signals || []).map(s => s.signal + ' (' + s.count + 'x)').join(', ');

const lang = item.language || 'en';
const langInst = lang === 'pt' ? 'Respond in Brazilian Portuguese (carioca, intimate, fragment-flow).'
  : lang === 'it' ? 'Respond in Italian (sensorial, musical).'
  : lang === 'fr' ? 'Respond in French (sharp, elegant).'
  : 'Respond in English (philosopher, fragment-flow, em dashes, ampersands).';

const brands = item.brand_routes || [];
const brandStr = brands.length > 0 ? brands.map(b => '@' + b).join(' + ') : 'unclear';
const formats = item.content_formats || [];
const formatStr = formats.length > 0 ? formats.join(', ') : 'unclear';
const monetize = item.monetization_score || 0;
const contentPot = item.content_potential_score || 0;
const isContentReady = contentPot >= 7;

// Detect whether we actually have content to ground in
const hasScrapedText = item.cleaned_text && item.cleaned_text.length > 50;
const hasRawText = item.raw_text && item.raw_text.length > 0;
const hasAnySource = hasScrapedText || hasRawText;

let sourceBlock;
let groundingRule;
if (hasScrapedText) {
  sourceBlock = 'CONTENT FETCHED FROM LINK (this is what the page actually says):\n' + item.cleaned_text.substring(0, 3000);
  groundingRule = 'You HAVE the content above. Reference SPECIFIC phrases, numbers, or claims from it. Do NOT reference the URL slug — reference the actual ideas in the text.';
} else if (hasRawText) {
  sourceBlock = 'WHAT NATHY WROTE:\n' + item.raw_text;
  groundingRule = 'You have her message text but no scraped link content. Ground your reply in what she WROTE, not in any link.';
} else if (item.link_url) {
  let domain = '';
  try { domain = new URL(item.link_url).hostname.replace('www.', ''); } catch(e) {}
  sourceBlock = 'A link was shared but the system could NOT fetch its contents.\nDOMAIN: ' + domain + '\nURL: ' + item.link_url + '\nNo caption, no scraped text, no image OCR.';
  groundingRule = 'You do NOT have the content of this link. Do NOT pretend to have read it. Do NOT invent a summary based on the URL slug. Open with one short honest line — "didn\\'t pull the content from " + domain + ", give me the gist?" — then offer ONE move (save it for later, drop a one-line description, or skip).';
} else {
  sourceBlock = 'No text, no link, no image content available.';
  groundingRule = 'You have nothing concrete. Ask one short question to surface what she meant.';
}

const prompt = 'You are SPARK — Nathy\\'s private CEO companion. v3 LOCKED — HONEST MODE.\n\n'
  + langInst + '\n\n'
  + 'BRAND BIBLE:\n' + brandRules + '\n\n'
  + 'GROUNDING RULE (most important):\n' + groundingRule + '\n\n'
  + 'STRUCTURE (max 6 sentences total):\n'
  + '1. ONE-LINE OBSERVATION — about the actual content OR an honest acknowledgment of missing content.\n'
  + '2. ONE-LINE INSIGHT — what this means for ' + brandStr + ' if you have enough to know.\n'
  + '3. ONE-LINE NEXT MOVE — ' + (isContentReady && hasScrapedText ? 'OFFER TO DRAFT NOW.' : hasAnySource ? 'save, expand, or skip.' : 'ask for the missing context, or save+skip.') + '\n\n'
  + 'HARD RULES:\n'
  + '- Never write "Proof of read" or "PROOF OF READ" or any phrase that claims you read content you do not have.\n'
  + '- Never reference an Instagram URL slug or post ID as if it were content.\n'
  + '- Mirror, do not coach. STOP asking repeated questions.\n'
  + '- NEVER use retired names (LUMEN, LUANA, HyperCompanion, NeurYou, neuro-*).\n'
  + '- NEVER use hustle/grind/mindset/hack/journey/authentic/manifest.\n'
  + '- Fragment-flow. Em dashes. & not and. Plain text. End with next move OR question, never both.\n\n'
  + sourceBlock + '\n\n'
  + 'ANALYSIS (use sparingly — do not parrot):\n'
  + 'Category: ' + item.category + '\n'
  + 'Core: ' + (item.core_insight || 'unclear') + '\n'
  + 'Relevance: ' + (item.business_relevance || 'unclear') + '\n'
  + 'Brands: ' + brandStr + '\n'
  + 'Formats: ' + formatStr + '\n'
  + 'Monetize: ' + monetize + '/10\n'
  + 'Content: ' + contentPot + '/10\n\n'
  + 'MEMORY:\n' + (memories || 'New.') + '\n\n'
  + 'PATTERNS: ' + (signals || 'none') + '\n\n'
  + 'REPLY.';

return [{ json: { ...item, response_prompt: prompt, was_scraped: hasScrapedText, has_any_source: hasAnySource } }];
```

## What also changes in `Claude SPARK Brain` HTTP node

Replace the `jsonBody` expression with this (model upgrade only):

```
={{ JSON.stringify({model: 'claude-opus-4-7', max_tokens: 1024, messages: [{role: 'user', content: $json.response_prompt}]}) }}
```

That's the only change in that node.

## Why this fixes the screenshots

Re-running the recent stuck sparks through this prompt would produce replies like:

> didn't pull the content from instagram.com — give me the gist?
>
> if it's the carousel angle you flagged earlier, i'd save it as @hypernathy reference & come back when we have the screenshot.
>
> save · skip · drop me one sentence

Instead of the current:

> PROOF OF READ — you dropped a carousel post (DX4NSe5EvBm, multi-image format) flagged for content strategy — the analysis scores it 8/10…

The first version is a real mirror. The second version is a confidence trick.
