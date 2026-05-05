# Agent ecosystem — one bot, fleet of specialized agents

State as of 2026-05-05.

## The picture

```
                  ┌─────────────────────────┐
                  │   SPARK Telegram bot     │   ← single entry surface (today)
                  │   (HyperCompanion ⚡)     │   ← + future: Lovable / iOS share / WhatsApp / Voice
                  └──────────┬──────────────┘
                             │
                  ┌──────────▼──────────┐
                  │  WF01 Ingest+Actions│   ← classifies input, routes to agent
                  └──────────┬──────────┘
                             │
        ┌────────┬───────────┼───────────┬──────────────┐
        ▼        ▼           ▼           ▼              ▼
    ┌───────┬───────┬─────────┬──────────┬──────────────┐
    │WF02   │WF09   │WF10     │WF04 NOVA │ WF06 PULSE   │
    │SPARK  │INSPIRE│ATLAS    │ Scout    │ Digest       │
    │Capture│Scraper│Research │ (daily)  │ (Sunday)     │
    └───┬───┴───────┴─────────┴──────────┴──────────────┘
        │
    ┌───▼───┐
    │WF03   │
    │SPARK  │
    │Respond│
    └───┬───┘
        │ (on Draft button)
    ┌───▼───┐
    │WF07   │
    │Content│
    │Architect
    └───────┘
```

## Agent roster — what each does, when each fires

### 🟢 SPARK Capture (WF01 → WF02 → WF03)
- **What it is**: creative input capture + grounded reply
- **Trigger**: Telegram message (text/link/screenshot/voice)
- **Output**: 3-line honest reply with /draft /save /skip buttons
- **Status**: WF03 v3.1 HONEST MODE live ✅. WF01/WF02 still need paste-edits for screenshot vision + IG oEmbed (see `n8n-fixes/03-`, `04-`)

### 🟢 ATLAS Research (WF10) — NEW this session
- **What it is**: on-demand intelligence/PA agent
- **Trigger**: webhook `POST /webhook/atlas` with body `{topic, source_url?, goal?, entity_type?, user_id?, chat_id?}`
- **Output**: structured Telegram brief (context, key people, live themes, questions to ask, opportunities, sessions to prioritize/skip, post-event moves, red flags)
- **Models**: Perplexity sonar-pro for live research → Claude Opus 4.7 for synthesis
- **Status**: live, active. Anthropic + Perplexity HTTP credentials need attaching in n8n UI on first run.
- **Use cases**: pre-conference brief, meeting prep, person-of-interest research, deep-dive on a topic before posting

### 🟢 INSPIRE Scraper (WF09) — NEW this session
- **What it is**: extract reusable hook archetypes from any post URL
- **Trigger**: executeWorkflowTrigger (callable from WF01 `/inspire <url>` paste-edit)
- **Output**: Telegram digest with hook archetype, viral score, remix-for-hypernathy guidance. Saves to `inspiration_posts` + `hook_library`.
- **Models**: IG oEmbed + Firecrawl → Claude Opus 4.7
- **Status**: live, active. Anthropic + Firecrawl HTTP credentials need attaching.
- **Future**: Apify integration for whole-account scraping (when you add Apify key)

### 🟢 SPARK Content Architect (WF07)
- **What it is**: turn approved sparks into ready-to-publish content per brand+format
- **Trigger**: WF01 `/draft #<id>` button or command
- **Output**: full draft text + hook variations + visual prompt + hashtags, sent as Telegram preview with /approve /skip
- **Status**: live but **uses Sonnet — should upgrade to Opus 4.7**. Doesn't yet use `hook_library`.
- **Pending paste-edits**: model upgrade + load brand_intelligence richer set + reference hook_library

### ⚫ NOVA Scout (WF04) — paused
- **What it is**: daily AI scout, Perplexity scans for relevant news
- **Trigger**: schedule daily 06:00
- **Status**: inactive. Should reactivate after upgrading model to Opus 4.7 + replacing hardcoded chatId with `users` lookup.

### ⚫ PULSE Digest (WF06) — paused
- **What it is**: weekly CEO briefing, Sunday 20:00
- **Trigger**: schedule weekly Sunday 20:00
- **Status**: inactive. Same upgrades as NOVA.

### ⚫ HYPERYOU / HYPERAGENCY workflows
- **HYPERYOU Content Engine** (FOVSJWnG2uLylGCH) — superseded by WF07, archive recommended
- **HYPERYOU Publisher IG** (2jZax2dfOFxT7D83) — paused, activate when ready to auto-publish to @hyperyou.ai
- **HYPERYOU Audit Quiz** (0pRkkYNZCslQ02dA) — standalone ManyChat lead magnet, activate when campaign launches
- **HYPERAGENCY Strategy Generator** (ZH3JhtByGey3mu94) — standalone, activate when offering launches

### Standalone
- **Muse Intake** (qXZP8dki7BtmrfTE) — active but **MCP access disabled in workflow settings** so I cannot inspect it. You enable that toggle when you can.
- **TEST FLUX Hero Visuals** (15S9brQGlRE8NeB9) — wire into WF07's `visual_prompt` output once ready
- **TEST Veo 3 Reels** (QPEP5Yl2F66vvR21) — wire into WF07 once reel format goes live

## Schema map — what each table is for

| Table | Used by | Purpose |
| --- | --- | --- |
| `users` | all | identity + telegram_id + language |
| `conversations` | WF01 | thread management |
| `messages` | WF01 | log of every Telegram message in/out |
| `entries` | WF01→WF02→WF07 | the spark itself (raw_text, link_url, source_type, attachment_url) |
| `entry_analysis` | WF02→WF03→WF07 | category, summary, brand_routes, content_formats, response_text |
| `content_queue` | WF02→WF07→Publisher | per-brand-per-format drafts (hook, body, full_draft, status) |
| `memories` | WF02→WF03 | long-term patterns Nathy keeps coming back to |
| `daily_signals` | WF04 NOVA | morning briefings stored |
| `weekly_digests` | WF06 PULSE | Sunday digests stored |
| `brand_intelligence` | WF03, WF07 | **detailed brand bible (206 rows!) — see coherence note below** |
| `obsession_signals` | WF06 + WF03 context fn | recurring themes |
| **`brand_voice_profiles`** (NEW) | future routing | per-brand metadata: type, formats, languages, platforms |
| **`tracked_accounts`** (NEW) | WF09 | accounts you want to monitor |
| **`inspiration_posts`** (NEW) | WF09 | scraped posts from inspiration accounts |
| **`hook_library`** (NEW) | WF09→WF07 (future wire) | reusable hook archetypes |
| **`pipeline_state`** (NEW) | future step-by-step approval flow | per-entry stage tracking |
| **`briefs`** (NEW) | WF10 ATLAS | every research brief produced |

## Major coherence finding — brand_intelligence is 80% under-used

**The data**: 206 active rows across 42 categories.

**The problem**: WF03 loads only 7 categories (`audience`, `belief`, `ux_rule`, `promise`, `banned_words`, `voice_rules`, `retired_names`). WF07 loads all categories matching language but doesn't filter by relevance to format.

**What's NOT being loaded today** (sample): `voice_v1`, `voice_v2`, `persona_voice_v1`, `linguistic_casting_v1`, `positioning_diff_v1`, `competitor_intelligence_v1`, `design_principles_v1/v2`, `color_palette_v1/v2`, `typography_v1/v2`, `imagery_v1/v2`, `nd_design_laws_v1`, `outfit_codex_v1`, `heroine_self_v1`, `heroine_settings_v1`, etc.

**Implication**: you've built rich brand depth but the agents don't see most of it. They're flying blind on voice nuance and design specifics.

**Fix (paste-edit, WF03)**: change `Load Brand Rules` SQL `WHERE category IN (...)` to include voice variants:
```sql
WHERE active = true AND (category IN ('audience','belief','ux_rule','promise','banned_words_v1','banned_words_v2','voice_rules','voice_v1','voice_v2','persona_voice_v1','linguistic_casting_v1','retired_names') OR category LIKE 'voice_%')
ORDER BY category
```

**Fix (paste-edit, WF07)**: same expansion + add design categories (`design_principles_v1`, `color_palette_v2`, `imagery_v2`, `typography_v2`, `nd_design_laws_v1`, `post_composition_v1`, `layout_v2`).

**Why brand_voice_profiles ALSO exists**: brand_voice_profiles is for ROUTING decisions ("which brand does this spark map to?") and lightweight metadata. brand_intelligence is for VOICE FIDELITY (rules baked into prompts). They're complementary, not duplicate.

## Other coherence findings

### 28 content_queue rows stuck in `status='draft'`
These are entries WF02 marked `should_queue=true` and inserted queue rows for, but WF07 was never triggered for them (or failed). They're sitting waiting.

**Fix options**:
- Run WF07 manually for the most recent 5-10 to test it works
- Build a "queue runner" cron that fires WF07 for any `draft` row older than 5 min
- Delete the old queue rows + only keep going forward

### 4 unanswered entries (response_sent=false)
Older entries scattered across April-May. Now that WF03 v3.1 is live, can be retried via REPROCESS-pattern (delete their entry_analysis row, run REPROCESS).

### Hook library is created but unwired
hook_library has 7 universal archetypes seeded. WF07 doesn't yet read from it. The wire-up: add a `Load Relevant Hooks` Postgres node before `Build Architect Prompt` in WF07, query `SELECT archetype, template, example_hooks FROM hook_library WHERE 'hypernathy' = ANY(brand_compat) AND format_compat @> ARRAY[draft.format] ORDER BY performance_score DESC LIMIT 5`.

## How to call each agent

| Agent | How to invoke today | Future invocation |
| --- | --- | --- |
| SPARK Capture | Send anything to @HyperCompanion bot | Same |
| INSPIRE Scraper (WF09) | Run from n8n UI with input `{inspiration_url, user_id, chat_id}` | Add `/inspire <url>` to WF01 |
| ATLAS Research (WF10) | `curl -X POST <n8n>/webhook/atlas -d '{"topic":"..."}'` | Add `/atlas <topic>` or `/brief <topic>` to WF01 |
| NOVA Scout | Daily 06:00 schedule (currently paused) | Same |
| PULSE Digest | Sunday 20:00 (currently paused) | Same |
| Content Architect | `/draft #<entry_id>` button on SPARK reply | Same |

## What's the next agent to build

Priority queue (subject to your call):
1. **Schema-aware Q&A**: ask SPARK questions about your own data ("show me all hooks I saved last week", "which brand has the most queued drafts"). Read-only. Easy.
2. **Auto-publisher with approval**: when content_queue.status='ready', send 1-tap-publish prompt. Connects to FLUX/Veo + Meta Graph API.
3. **Step-by-step approval flow**: pipeline_state table is ready. Build WF02b/03b/07b that pause at each stage for approval. Bigger but you asked for it.
4. **Auto-archive HYPERYOU Content Engine** (superseded by WF07): cleanup task.
