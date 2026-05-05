# SPARK360 Diagnosis — Why every reply sounds generic

Date: 2026-05-05
Branch: `claude/fix-n8n-workflows-1AKIi`

## TL;DR

SPARK is hallucinating "proof of read" on every Instagram link because **0 of 56 links have ever been successfully scraped** by Firecrawl, and the WF03 prompt **requires** the model to claim it read the content even when nothing was fetched. The model fills the gap by riffing on the URL slug.

Screenshots and OCR are not handled at all — `file_id` is captured in WF01 but never persisted, never fetched, never sent to a vision model.

## Evidence (from production DB on 2026-05-05)

| Metric | Count |
| --- | --- |
| Total entries | 77 |
| Links | 56 |
| Screenshots | 4 |
| Voice notes | 0 |
| Entries with `cleaned_text` populated (Firecrawl succeeded) | **0** |
| Entries with `attachment_url` populated | **0** |

### Sample of recent Instagram replies (all with `scraped_chars=0`)

> **PROOF OF READ — you dropped a carousel post (DX4NSe5EvBm, multi-image format) flagged for content strategy — the analysis scores it 8/10 on content value & routes it to both @hypernathy + @hyperyou as…**

> **Proof of read — a raw Instagram URL landed with no caption, no context, no voice attached to it. The analysis flags it as saved content for potential repurposing…**

> **DXumy48CV4E flagged — bookmarked as reference, system read it as format or concept resonance worth extracting for @hypernathy…**

The second example literally admits there's no content — yet still leads with "Proof of read".

## Root causes (in order of severity)

### 1. WF03 prompt forces fabrication

`SPARK360 · 03 Respond` → `Build SPARK Reply` code node, line in the system prompt:

> CONTRACT:
> 1. PROOF OF READ (1-2 sentences): reference SPECIFIC content.

There is no escape clause for the case where `cleaned_text` is empty. Claude can't write "I didn't get the content" — the contract forces it to fake specificity. Result: it grabs the URL slug ("DX4NSe5EvBm") and pretends.

### 2. Firecrawl is silently failing for 100% of Instagram URLs

`SPARK360 · 02 Analyze` → `Firecrawl Scrape` HTTP node:
- `onError: continueRegularOutput` — failures pass through silently
- No fallback strategy when scrape returns empty
- Instagram blocks unauthenticated scraping; Firecrawl can't get past the login wall on `instagram.com/p/*` and `/reel/*`
- The DB confirms: **0 successful scrapes ever**

### 3. Screenshots are dropped on the floor

`SPARK360 · 01 Ingest + Actions` → `Classify Input` code node correctly extracts `file_id` from `msg.photo[…].file_id`. Then:
- `Create Entry` SQL inserts only `user_id, conversation_id, source_type, raw_text, link_url, telegram_message_id, status` — **`file_id` is never persisted**
- The `entries.attachment_url` column exists in the schema but is never written to
- WF02 has no branch for `source_type='screenshot'`, no Telegram getFile, no vision call

So when Nathy sends a screenshot, the only thing that reaches Claude is the caption text (often empty). The image content is never seen.

### 4. Voice notes — same as screenshots

No `file_id` persisted, no transcription. Empty pipeline.

### 5. Single-model architecture

Every Claude call uses `claude-sonnet-4-6`. No model selection by task. No extended thinking. No Perplexity for research. No Whisper for audio. No vision routing for images.

## What the screenshots show

The Telegram chat screenshots all show the same pattern:
- Sender (Nathy) forwards an Instagram link with no caption
- SPARK reacts with ⚡ (good)
- A few seconds later, a structured reply arrives with "Proof of read" or "PROOF OF READ" as the opening line
- The reply references the URL slug as if it were content
- The reply ends with confident-sounding routing decisions and quality scores that are entirely fabricated

This is not a model quality issue. The model is doing exactly what the prompt asks. The prompt is the bug.

## See next

- `01-PHASE-1-FIX-PLAN.md` — surgical, low-risk fixes that can be pasted directly into n8n nodes
- `02-WF03-respond-prompt.md` — exact replacement for the `Build SPARK Reply` code node
- `03-WF02-analyze-fixes.md` — IG oEmbed fallback + screenshot vision branch
- `04-WF01-ingest-fixes.md` — persist `file_id` and `attachment_url`
- `05-PHASE-2-multi-llm-architecture.md` — full vision: best-LLM-per-task router + step-by-step approval
