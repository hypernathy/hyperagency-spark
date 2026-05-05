# Phase 2 — Multi-LLM router + step-by-step approval flow

This is the architecture you described:

> "behind our LLMs hyper intelligent and each generation would use my best LLM tool for it. to get back with reasoning. context. brand intelligence. voice. etc. then content generated. examples. where I can edit or say no or confirm for every step."

Phase 1 (the surgical fixes in `01-PHASE-1-FIX-PLAN.md`) makes SPARK honest. Phase 2 makes it powerful.

## Best LLM per task

| Task | Model | Why |
| --- | --- | --- |
| Spark analysis (categorize, route, score) | `claude-opus-4-7` + extended thinking (8k budget) | Best reasoning for nuanced brand routing |
| Vision/OCR (screenshots, IG screenshots) | `claude-opus-4-7` (vision) | Best multimodal reading + reasoning combined |
| Voice transcription | OpenAI Whisper (`whisper-1`) or AssemblyAI | Cheap, accurate, fast — Claude doesn't currently take audio |
| Research-flagged links (category=research) | Perplexity `sonar-pro` or `sonar-reasoning` | Built-in web search + citations |
| Content drafting — first pass | `claude-opus-4-7` | Quality over speed, this is the hero output |
| Content drafting — variations (5 hooks) | `claude-sonnet-4-6` | Fast parallel calls for breadth |
| Visual prompts (DALL-E/FLUX/Veo prep) | `claude-opus-4-7` | Knows brand visual guides |
| Image generation | FLUX 1.1 Pro Ultra (already in TEST workflow `15S9brQGlRE8NeB9`) | Best photo realism May 2026 |
| Reels | Veo 3 Fast (already in TEST workflow `QPEP5Yl2F66vvR21`) | Best 8s editorial reel May 2026 |

## Router as a code node

A single `LLM Router` code node at the top of WF02 inspects `source_type`, `link_url`, and any explicit user flags, then sets a `model_route` field that downstream HTTP nodes read with `={{ $json.model_route.analysis_model }}`, etc.

Example output:

```json
{
  "model_route": {
    "analysis_model": "claude-opus-4-7",
    "analysis_thinking": true,
    "research_model": null,
    "vision_model": "claude-opus-4-7",
    "transcription_model": null
  }
}
```

For a research-flagged link, `research_model` becomes `sonar-pro` and a parallel branch fires Perplexity for live web context before analysis.

## Required new credentials

| Credential | Used for | Notes |
| --- | --- | --- |
| OpenAI API | Whisper transcription | Add via n8n credentials → "OpenAi" |
| Perplexity API | Research-link enrichment | Add via "HTTP Header Auth" — header `Authorization: Bearer pplx-...` |
| Replicate (already exists for FLUX/Veo) | Image + reel generation | Reuse |

Without OpenAI/Perplexity, Phase 2 falls back to Claude-only behavior — which is still better than Phase 1.

## Step-by-step approval flow

Currently the only approval points are: Draft / Save / Skip on the SPARK reply, and Approve / Skip on the WF07 content preview. You want to insert checkpoints at every stage.

Proposed five-stage flow:

```
Spark received
   ↓
[Stage 1] ANALYSIS PREVIEW
   Telegram message: "Here's what I think — category: idea, brands: @hypernathy, content: 8/10. Continue?"
   Buttons: [✓ Continue] [✏️ Edit analysis] [⏭ Skip]
   ↓ (on Continue)
[Stage 2] SOURCE READ-BACK
   Telegram: "I read this from the link: <first 300 chars>. Looks right?"
   Buttons: [✓ Right] [✏️ Add context] [⏭ Skip]
   ↓
[Stage 3] BRAND ROUTING DECISION
   Telegram: "Routing this to @hypernathy as carousel + reel. OK?"
   Buttons: [✓ OK] [@hyperyou] [@hyperagency] [Multi-route] [⏭ Skip]
   ↓
[Stage 4] HOOK PREVIEWS (5 variations from cheap model)
   Telegram: "Pick a hook angle: 1. ... 2. ... 3. ... 4. ... 5. ..."
   Buttons: [1] [2] [3] [4] [5] [✏️ Custom]
   ↓
[Stage 5] FULL DRAFT
   Telegram: "Here's the full piece. Approve to publish, edit, or scrap?"
   Buttons: [✓ Publish] [✏️ Edit] [♻️ Regenerate] [⏭ Scrap]
```

### Implementation pattern

Each stage:
1. Saves intermediate state to a new table `spark_pipeline_state` keyed by `entry_id`
2. Sends a Telegram message with `callback_data: "stage:<entry_id>:<stage>:<action>"`
3. WF01's callback handler parses the stage + action, updates state, fires the next-stage workflow

### New table

```sql
CREATE TABLE spark_pipeline_state (
  entry_id UUID PRIMARY KEY REFERENCES entries(id) ON DELETE CASCADE,
  current_stage TEXT NOT NULL DEFAULT 'analyzed',  -- analyzed, source_confirmed, routed, hook_picked, drafted, published
  stage_history JSONB DEFAULT '[]'::jsonb,
  user_overrides JSONB DEFAULT '{}'::jsonb,  -- e.g. {"brand_route": "@hyperagency", "format": "linkedin_post"}
  hooks JSONB,
  selected_hook TEXT,
  draft TEXT,
  edits JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### New workflows needed

- WF02a — Stage 1 (Analysis Preview) — replaces current WF02 → WF03 trigger
- WF02b — Stage 2 (Source Read-back)
- WF02c — Stage 3 (Routing Decision)
- WF02d — Stage 4 (Hook Variations) — N parallel cheap-model calls
- WF02e — Stage 5 (Full Draft) — replaces current WF07

This is significant work — probably a 2-day refactor. Worth it because it gives you exactly what you described: "edit or say no or confirm for every step".

### Lighter alternative (1-stage approval)

If 5 stages feels heavy, a lighter version is one consolidated approval message that lets you edit each block inline:

```
[ANALYSIS] idea · @hypernathy · carousel · 8/10
[SOURCE] <first 200 chars of cleaned_text>
[HOOK PICKED] "The silence is the strategy"
[FULL DRAFT] <draft text>
---
✓ Approve all  |  ✏️ Edit analysis  |  ✏️ Edit hook  |  ✏️ Edit draft  |  ⏭ Scrap
```

Reply with `/edit-hook <new hook>` or `/edit-draft <new draft>` to override any block.

## Brand intelligence loop tightening

Currently `brand_intelligence` is loaded fresh on every WF03 and WF07 call from Postgres. That's wasteful and the prompt can't tell which rules are most relevant.

Improvements:
- Add `priority INT` column to `brand_intelligence`, sort highest-first
- Add `applies_to TEXT[]` column (e.g. `['carousel', 'reel']`) so format-specific rules only load when relevant
- Cache the loaded rules in a Redis/n8n static-data field for 5min to reduce DB load
- Add a weekly "brand drift detector" workflow that scans last 50 generated drafts vs the brand bible and flags rule violations

## Memory loop

The `memories` table is written to but rarely read in a meaningful way. Improvements:
- Add semantic embedding column (pgvector) so `get_spark_360_context` can pull the **3 most semantically relevant** memories for the current spark, not just the latest 8
- Add memory consolidation: a Sunday workflow that takes the week's `pattern` memories and merges duplicates / promotes recurring ones

## Pattern detection (the obsession_signals path)

`get_spark_360_context` already returns `obsession_signals`. Surface them more aggressively:
- When 3+ sparks share a tag, suggest creating a "campaign" automatically
- When the same brand_route appears 5 days in a row, suggest a content series

## Windsor.ai integration (separate workflow)

For the Windsor.ai onboarding screenshot you sent — this is its own workflow, not SPARK. Skeleton:

- Trigger: Sunday 18:00 (before WF06 PULSE Digest)
- Pull: HYPERYOU IG metrics, HYPERAGENCY LinkedIn metrics, HYPERNATHY IG metrics from Windsor's API
- Aggregate: top performing post per brand, week-over-week growth, best-performing format
- Pipe into WF06 PULSE Digest as the analytics block

This solves analytics-on-your-own-accounts, which is what Windsor is good at. It does NOT help SPARK read random Instagram links from accounts you don't own — Phase 1's screenshot/oEmbed fixes handle that.

## Cost estimate (per spark, full pipeline)

| Phase | Cost per spark |
| --- | --- |
| Phase 1 (Opus analysis + Opus reply) | ~$0.04 |
| Phase 2 (+ vision + Perplexity for research links + 5 hook variations) | ~$0.12 |
| Phase 2 + step-by-step approval (extra Telegram round-trips, no model cost) | ~$0.12 |

At 5–20 sparks/day this is $0.60–$2.40/day. Negligible relative to the leverage.

## Suggested order of execution

1. Phase 1 (4-step plan in `01-PHASE-1-FIX-PLAN.md`) — get SPARK honest, ~2 hours of paste-into-n8n work
2. Observe replies for 48h, confirm the generic tone is gone
3. Phase 2 part A: Opus 4.7 + extended thinking everywhere, vision branch for screenshots — ~half day
4. Phase 2 part B: Perplexity routing + Whisper for voice — ~half day, needs new credentials
5. Phase 2 part C: step-by-step approval flow — ~2 days, biggest UX shift
6. Windsor.ai analytics workflow (separate from SPARK) — half day once Windsor account is set up

## Open questions for Nathy when back

- Do you want 5-stage approval or 1-stage with inline edit? (The latter is lighter, the former is what you described.)
- OpenAI credential for Whisper — add to n8n? Or are voice notes low-priority?
- Perplexity credential — same question, only matters for research-flagged links
- Windsor account: TRIAL is fine for testing, but the 0/10 connectors limit will bite — what's the budget for the paid plan?
