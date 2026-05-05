# Session 2026-05-05 PM — autonomous upgrade round

## What shipped LIVE this round (via n8n MCP)

### WF03 v3.2 — full brand depth
- Now loads ~30 brand_intelligence categories (was 7) via LIKE patterns covering voice_*, persona_*, linguistic_*, positioning_*, lovable_voice*
- Honors linguistic_casting rule + persona_voice arborescence in the prompt
- Already on Opus 4.7
- activeVersionId: `ff3eaa4e-1fae-492f-9d71-c1044cef2f7f`

### WF07 v2 — full brand depth + Opus 4.7
- Loads ~30 brand_intelligence categories (was language-filter only) — voice + design + persona + heroine_self + nd_design_laws + post_composition + imagery + typography + color_palette + layout + linguistic_casting + positioning + competitor + market_signal + launch_playbook + lovable
- **Model upgraded to claude-opus-4-7** (was Sonnet)
- max_tokens raised to 4096
- timeout raised to 120s
- Defensive parse handling (skips thinking blocks)
- Honors heroine_self face-safety rule for visual prompts
- activeVersionId: `847900e2-36d8-45fa-a6bb-b5ac6e9f6f46`

### WF04 NOVA Scout v2 — Opus 4.7 + dynamic chatId + 4 topics
- Model upgraded to **claude-opus-4-7** (was Sonnet)
- Perplexity model upgraded to **sonar-pro** (was sonar)
- Search queries expanded from 3 to 4 (added "AI-as-interface and agent platforms market signals" — Nathy's current strategic thesis)
- ChatId now pulled from `users` table (was hardcoded `976751395`)
- **Workflow published — but not yet active.** Schedule will fire daily 06:00 once you toggle Active.
- activeVersionId: `d3803021-c37b-47d6-b23c-4e37863f1bff`

## What's pending (not done this round)

### Tier 2 paste-edits/MCP updates remaining
- **WF06 PULSE Digest** — same pattern as NOVA (Opus 4.7 + dynamic chatId). Quick to do next session.
- **WF02 Analyze** — biggest remaining item. Needs: IG oEmbed fallback when Firecrawl returns empty + screenshot vision branch (Telegram getFile + Claude Vision) + Opus 4.7 + extended thinking + honest prompt. Documented in `n8n-fixes/03-WF02-analyze-fixes.md`.
- **WF01 Ingest** — `file_id` persistence to `entries.attachment_url`. Documented in `n8n-fixes/04-WF01-ingest-fixes.md`. Risk: WF01 has the live Telegram trigger (webhookId-sensitive) — this is the ONE workflow I deliberately won't rewrite via MCP. Paste-edit to one SQL field, ~60 sec for you in the UI.

### Credentials Nathy needs to bind (1-click each in n8n UI)
On each of these HTTP nodes, attach the existing credential from the dropdown:
- WF03 → `Claude SPARK Brain` → Anthropic Header (httpHeaderAuth)
- WF07 → `Claude Content Architect` → Anthropic Header (httpHeaderAuth)
- WF04 → `Perplexity Search` → Perplexity API
- WF04 → `Claude NOVA Brief` → Anthropic API (predefinedCredentialType)
- WF09 → `IG oEmbed`, `Firecrawl Scrape`, `Claude Inspire Analyze` → Firecrawl + Anthropic
- WF10 → `Perplexity Research`, `Claude ATLAS Synthesize` → Perplexity + Anthropic

## State snapshot

- 14 workflows total, 8 active (WF01, WF02, WF03 v3.2, WF07 v2, WF09, WF10, Muse Intake, REPROCESS Manual)
- 6 inactive (NOVA v2 ready to activate, PULSE pending update, HYPERYOU x3, HYPERAGENCY, TEST FLUX, TEST Veo)
- 11 Supabase tables (5 new this session)
- 78 entries, 78 analyses (1:1, no orphans)
- 3 launch drafts in content_queue with status='ready' (HyperYou carousel + reel + HyperAgency LinkedIn)
- 28 historical stuck drafts (status='draft', full_draft IS NULL) — try running WF07 on one when ready

## Recommended next session order

1. **Run WF07 manually on entry `01f90f71-e8ff-4489-b98c-b70ac13efd6b`** (one of the 28 stuck) to verify the Opus 4.7 + brand depth upgrade actually produces good output. ~30s.
2. **Update + reactivate WF06 PULSE** (mirror of NOVA upgrade). ~10 min.
3. **Update WF02** (the big one — IG oEmbed + screenshot vision + Opus 4.7). ~30 min.
4. **You apply WF01 paste-edit** (`file_id` persistence). ~60s.
5. **Bind credentials** to the HTTP nodes listed above. ~5 min.
6. **Toggle NOVA Active** in n8n UI. 1 click.
7. Send a fresh test spark to your Telegram bot. Verify the full pipeline produces a grounded, brand-faithful, multilingual reply.
