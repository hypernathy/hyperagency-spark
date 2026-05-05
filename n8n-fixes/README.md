# SPARK360 — n8n fixes

Started: 2026-05-05 · Branch: `claude/fix-n8n-workflows-1AKIi`

## Read in this order

1. **`00-DIAGNOSIS.md`** — what's broken and the DB evidence (0 of 56 links ever scraped successfully)
2. **`01-PHASE-1-FIX-PLAN.md`** — surgical fixes you can paste into n8n today
3. **`02-WF03-respond-prompt.md`** — replace the `Build SPARK Reply` code node (kills "fake proof of read")
4. **`03-WF02-analyze-fixes.md`** — IG oEmbed fallback + screenshot vision branch + Opus 4.7 + extended thinking
5. **`04-WF01-ingest-fixes.md`** — persist Telegram `file_id` to `entries.attachment_url`
6. **`05-PHASE-2-multi-llm-architecture.md`** — the bigger vision: best-LLM-per-task + step-by-step approval

## Why I didn't apply changes via the n8n MCP directly

The n8n MCP `update_workflow` requires submitting a complete SDK rewrite. For three live, active workflows with complex SQL and JS expressions, a single escaping bug would silently break production.

Safer path: paste the snippets in each `0X-*.md` file into the relevant n8n nodes via the UI. Each fix is independently reversible.

## TL;DR of the bug

The WF03 prompt requires the model to claim "PROOF OF READ" with specific content references — but Firecrawl can't scrape Instagram (the source of most of your sparks), so the model is forced to fabricate by riffing on the URL slug.

The smallest possible fix is just the prompt change in `02-WF03-respond-prompt.md`. Apply that one node edit and ~90% of the generic-sounding replies disappear immediately. The rest of the docs build from there.
