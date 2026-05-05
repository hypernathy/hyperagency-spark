# Phase 1 — Surgical fixes to make SPARK actually read

Goal: stop the fake "Proof of read" hallucinations and make the system honest about what it actually fetched. Done by editing 4 nodes across 3 workflows. No schema changes (the DB columns already exist). No new credentials needed.

## Order of application (apply in n8n UI, top to bottom)

### Step 1 — WF03 Respond: kill the fake proof-of-read contract (highest impact, zero risk)

File: `02-WF03-respond-prompt.md`

Edit `SPARK360 · 03 Respond` → `Build SPARK Reply` code node. Replace the prompt so:
- If `cleaned_text` is non-empty → ground the reply in it (current behavior, with stricter language)
- If `cleaned_text` is empty AND no image was OCR'd → the prompt explicitly tells Claude: "you do NOT have the content. Do NOT pretend to have read it. Ask Nathy what's in it, or comment only on what's verifiable from the URL itself (domain, post type)."

This single change will eliminate ~90% of the generic-sounding fabrications immediately, even before Firecrawl/vision are fixed.

Also: switch the model from `claude-sonnet-4-6` to `claude-opus-4-7` for this final reply — Opus is meaningfully better at the kind of nuanced, voice-faithful response Nathy wants, and the cost difference per reply is negligible (one call per spark).

### Step 2 — WF02 Analyze: IG oEmbed fallback + honest empty-content flag (medium risk)

File: `03-WF02-analyze-fixes.md`

Edit `SPARK360 · 02 Analyze`:
- Add an HTTP Request node `IG oEmbed Fallback` after `Firecrawl Scrape` that runs only when Firecrawl returned no markdown AND the URL is `instagram.com`. Calls Instagram's public oEmbed-style endpoint to fetch caption + author + thumbnail.
- Update `Enrich Prompt` code node: combine both Firecrawl markdown + IG fallback caption. If both empty, pass `was_scraped: false` forward.
- Update the Claude Analyze prompt: when `was_scraped=false`, the analysis should set `category='link_blind'` and the summary should be `"link received but content not accessible (Firecrawl + oEmbed both empty)"` — not a fabricated summary.

### Step 3 — WF02 Analyze: vision branch for screenshots (medium risk)

File: `03-WF02-analyze-fixes.md` (same file, second section)

Add a parallel branch in WF02 that triggers when `source_type='screenshot'` or `'image'`:
- Telegram `getFile` to get the file path
- Download as binary
- Convert to base64
- Call Claude with vision input: `{ type: 'image', source: { type: 'base64', media_type, data } }`
- Use the model's response as the equivalent of `cleaned_text` for the rest of the pipeline

This requires `entries.attachment_url` to be populated by WF01 first → see Step 4.

### Step 4 — WF01 Ingest: persist file_id and attachment_url (low risk)

File: `04-WF01-ingest-fixes.md`

Edit `SPARK360 · 01 Ingest + Actions` → `Create Entry` SQL node:
- Add `attachment_url` to the column list
- For non-empty `file_id`, build the value as `'tg://' + file_id` (or run Telegram getFile in WF01 and store the resulting public file URL)

Then WF02's vision branch (Step 3) reads `attachment_url`, calls Telegram `getFile` to resolve it, downloads, and feeds Claude.

### Step 5 — switch all SPARK Claude calls to Opus 4.7 + extended thinking for analysis (zero risk)

File: `02-WF03-respond-prompt.md` (model section)
File: `03-WF02-analyze-fixes.md` (model section)
File: `06-WF07-architect-model.md`

In WF02 Claude Analyze, WF03 Claude SPARK Brain, WF07 Claude Content Architect:
- Change `model: 'claude-sonnet-4-6'` → `model: 'claude-opus-4-7'`
- For WF02 Analyze, add `thinking: { type: 'enabled', budget_tokens: 8000 }` so the analysis call uses extended thinking before producing JSON

Latency goes up ~2x but quality goes up dramatically and Nathy is the only user — throughput is not the bottleneck.

## Risk assessment

| Step | Risk | Reversibility |
| --- | --- | --- |
| 1. WF03 prompt | None — only changes text in a code node | Trivial — restore previous prompt |
| 2. IG oEmbed | Low — adds a new node, existing path unchanged on success | Disable the new node |
| 3. Vision branch | Medium — new code paths, depends on Step 4 | Bypass the new branch |
| 4. WF01 SQL | Low — additive column write | Revert SQL |
| 5. Model swap | None | Change model string back |

Recommended sequence: Step 1 first, observe replies for 24h, then 4→3→2→5 once Step 1 is verified.

## Out of scope for Phase 1

- Multi-LLM router (Perplexity for research links, OpenAI for coding-related sparks, etc.)
- Step-by-step per-stage approval flow with edit/no/confirm
- Voice transcription via Whisper
- Brand voice fine-tuning
- Pattern memory loop tightening

All of the above are in `05-PHASE-2-multi-llm-architecture.md`.
