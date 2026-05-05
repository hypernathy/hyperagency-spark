# Final state — everything I could set up before you test

## What's LIVE in production right now

| Workflow | Status | Model | Notes |
| --- | --- | --- | --- |
| **WF01 Ingest+Actions** | 🟢 active | n/a | Untouched — Telegram trigger too risky to MCP-rewrite. Needs paste-edit (file_id persistence). |
| **WF02 Analyze v2** | 🟢 active | **Opus 4.7** | NEW: IG oEmbed fallback when Firecrawl empty + HONESTY RULE prompt (link_blind/image_blind/voice_blind categories instead of fabrication) + reads attachment_url + defensive parse. activeVersion `cf4172bf`. |
| **WF03 Respond v3.2** | 🟢 active | **Opus 4.7** | NEW: loads ~30 brand_intelligence categories (was 7) + linguistic_casting + persona arborescence. activeVersion `ff3eaa4e`. |
| **WF04 NOVA Scout v2** | 🟢 **active** | **Opus 4.7** + sonar-pro | NEW: 4 search topics + dynamic chatId. Will fire daily 06:00 UTC. activeVersion `d3803021`. |
| **WF06 PULSE Digest v2** | 🟡 published, check active | **Opus 4.7** | NEW: aggregates hook_library + briefs + dynamic chatId. activeVersion `d2bba536`. |
| **WF07 Content Architect v2** | 🟢 active | **Opus 4.7** | NEW: ~30 brand_intelligence categories + heroine_self face-safety in visual prompts + defensive parse. activeVersion `847900e2`. |
| **WF09 Inspire Scraper** | 🟢 active | Opus 4.7 | NEW (this session). `executeWorkflow` callable. |
| **WF10 ATLAS Research** | 🟢 active | Opus 4.7 + sonar-pro | NEW (this session). Webhook `POST /webhook/atlas`. |
| REPROCESS | ⚫ manual | Sonnet | Recovery hatch, untouched. |
| Muse Intake | 🟢 active | unknown | **MCP disabled — toggle "Available in MCP" in workflow settings so I can audit it**. |
| HYPERYOU Content Engine | ⚫ inactive | — | Superseded by WF07. Recommend archive. |
| HYPERYOU Publisher IG / Audit Quiz | ⚫ inactive | — | Activate when ready to ship. |
| HYPERAGENCY Strategy Generator | ⚫ inactive | — | Activate when offering launches. |
| TEST FLUX / TEST Veo | ⚫ inactive | — | Wire into WF07 visual_prompt later. |

## Database state

| Table | Rows |
| --- | --- |
| entries | 79 (1 added by autonomous draft) |
| entry_analysis | 78 |
| content_queue | 31 (3 ready, 28 stuck old drafts) |
| memories | 26 |
| brand_intelligence | 206 active (now used by all upgraded prompts) |
| brand_voice_profiles | 3 (hypernathy, hyperyou, hyperagency) |
| hook_library | 7 universal archetypes |
| tracked_accounts | 0 (empty until /inspire fires) |
| inspiration_posts | 0 |
| pipeline_state | 0 (step-by-step approval flow not built yet) |
| briefs | 0 (empty until ATLAS called) |

## What you need to do — IN ORDER

### 1. Bind HTTP credentials in n8n UI (~3 min total)

Open each workflow, click each HTTP node in the list below, attach the existing credential from the dropdown. n8n will save automatically.

| Workflow | Node | Credential to attach |
| --- | --- | --- |
| WF02 Analyze | Firecrawl Scrape | Firecrawl |
| WF02 Analyze | IG oEmbed Fallback | none (no auth needed) |
| WF02 Analyze | Claude Analyze | Anthropic Header (httpHeaderAuth) |
| WF03 Respond | Claude SPARK Brain | Anthropic Header (httpHeaderAuth) |
| WF04 NOVA | Perplexity Search | Perplexity API |
| WF04 NOVA | Claude NOVA Brief | Anthropic API (predefined) |
| WF06 PULSE | Claude Digest | Anthropic API (predefined) |
| WF07 Architect | Claude Content Architect | Anthropic Header (httpHeaderAuth) |
| WF09 Inspire | IG oEmbed | none |
| WF09 Inspire | Firecrawl Scrape | Firecrawl |
| WF09 Inspire | Claude Inspire Analyze | Anthropic API (predefined) |
| WF10 ATLAS | Perplexity Research | Perplexity API |
| WF10 ATLAS | Claude ATLAS Synthesize | Anthropic API (predefined) |

### 2. Apply WF01 paste-edit (~60 sec) — see `n8n-fixes/04-WF01-ingest-fixes.md`

Open WF01 in n8n UI → click `Create Entry` Postgres node → replace the SQL query with the version in the doc. This adds `attachment_url` to the column list so screenshots/voice notes get their `file_id` persisted.

Why I didn't do this via MCP: WF01's Telegram trigger has a webhookId Telegram is calling. Rewriting via MCP would generate a new webhookId and break the bot.

### 3. Verify PULSE active toggle in n8n UI

Open WF06 PULSE → top right → check the "Active" toggle is ON. Should fire next Sunday 20:00.

### 4. Toggle "Available in MCP" on Muse Intake

n8n UI → Muse Intake → settings → flip "Available in MCP" → save. So I can audit it next session.

### 5. Test sequence (5 min)

1. **Test WF03 fix**: send any message to your Telegram bot. New reply should be honest + brand-faithful.
2. **Test WF09 INSPIRE**: in n8n UI, open WF09 → Execute Workflow → input `{"inspiration_url": "https://www.instagram.com/p/<some-real-post>/", "user_id": 1, "chat_id": "976751395"}`. Should send a Telegram digest with hook archetype.
3. **Test WF10 ATLAS**: from terminal, `curl -X POST <your-n8n-host>/webhook/atlas -H "Content-Type: application/json" -d '{"topic":"AI agents 2026","entity_type":"topic","goal":"prep talking points for hyperagency","user_id":1,"chat_id":"976751395"}'`. Should send a Telegram brief.
4. **Test WF07 on a stuck draft**: in n8n UI, open WF07 → Execute Workflow → input `{"entry_id": "01f90f71-e8ff-4489-b98c-b70ac13efd6b"}`. Will produce 5 ready drafts for that entry. (Sends 5 Telegram messages — be ready.)

### 6. Approve / edit / publish the 3 launch drafts

In Supabase or via Telegram, you have:
- Carousel `0c61f03e` (HyperYou EN)
- Reel `5f22084d` (HyperYou PT)
- LinkedIn `bad291f2` (HyperAgency EN)

Edit them in `n8n-fixes/12-HYPERYOU-LAUNCH-PACK.md`. Lock launch dates, send.

## What's STILL not handled (genuine remaining gaps)

1. **Voice transcription**: OpenAI Whisper not added → voice notes still die silently. Add OpenAI cred in n8n + I'll wire in next session.
2. **Screenshot vision**: WF01 paste-edit + WF02 vision branch not yet built. The honesty rule will at least make screenshots produce honest "couldn't see" replies instead of fabrications.
3. **Apify whole-account scraping**: WF09 only does single posts via Firecrawl + IG oEmbed. Add Apify cred + I'll add the account-scrape branch.
4. **Step-by-step approval flow**: pipeline_state table exists, workflows pending.
5. **Auto-archive HYPERYOU Content Engine** redundant workflow.
