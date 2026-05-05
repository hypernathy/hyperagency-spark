# Workflow audit — every n8n workflow, what it does, current state

Audit date: 2026-05-05
Total workflows: **14** (7 SPARK360, 3 HYPERYOU, 1 HYPERAGENCY, 1 Muse, 2 TEST, 1 REPROCESS — note: SPARK360 numbering jumps 04 → 06 with no WF05)

Legend: 🟢 working · 🟡 working but broken behavior · 🔴 broken · ⚫ inactive (paused/disabled)

## SPARK360 (Nathy's personal CEO companion — single Telegram bot)

### WF01 · Ingest + Actions  🟡  `zziZaaw91A6OdKZi` · active=true
**Role:** Single entry point. Receives every Telegram message + callback. Routes spark/action/command. Saves entry to DB. Fires WF02 async.

**Configured well?**
- ✅ Telegram trigger captures `message + callback_query` correctly
- ✅ Classify Input handles photo/voice/document, extracts `file_id`
- ✅ Action commands (`/draft`, `/save`, `/skip`) parse correctly
- ✅ Edit-via-reply with hashtag detection works
- 🔴 **Bug 1**: `Create Entry` SQL never persists `file_id` → all photos/voice are blind to downstream
- 🟡 **Issue 2**: `React Spark` (⚡) fires *before* `Trigger WF02 Analyze` → user sees ⚡ even when WF02 dies, creating the "only sparkle" complaint
- 🟡 **Issue 3**: No error branch — if WF02 fails, no fallback message to user, just silent ⚡

### WF02 · Analyze  🔴  `PLD5fA1Hw1nXjOHP` · active=true
**Role:** Called by WF01 with `entry_id`. Fetches entry, scrapes link, calls Claude for category/routing/scoring, saves analysis, fires WF03.

**Configured well?**
- ✅ Event-driven (no polling)
- ✅ Claude prompt structure is reasonable for text inputs
- 🔴 **Bug A — screenshots die silently**: Firecrawl is given `url=""` for non-link sources → 400 error → workflow halts mid-stream → entry stuck `status='new'`. **This is why you got only ⚡ at 15:27 today.**
- 🔴 **Bug B — Firecrawl 100% fail rate on Instagram**: 0 of 56 IG links have ever been scraped. Login wall. `onError: continueRegularOutput` masks the failure but leaves `cleaned_text` empty.
- 🔴 **Bug C — No vision call**: even though Claude Sonnet 4.6 supports vision, screenshots are never sent as images.
- 🔴 **Bug D — No transcription**: voice notes never reach a transcription model.
- 🟡 **Issue E — Single model**: every analysis uses `claude-sonnet-4-6` regardless of complexity. No extended thinking. No Perplexity for research-flagged links.
- 🟡 **Issue F — Prompt forces fabrication**: when scraped is empty, prompt still asks for category/insight/relevance → model makes them up from URL slug.

### WF03 · Respond  🟡  `2uuDBAhB6iNV1tBn` · active=true
**Role:** Called by WF02 with entry_id. Loads brand bible + memories + signals. Builds personalized prompt. Calls Claude. Sends formatted reply with action buttons to Telegram.

**Configured well?**
- ✅ Loads brand intelligence + user context properly
- ✅ Header + footer formatting is good
- ✅ Inline keyboard for actions works
- 🔴 **Bug — fake "Proof of read"**: prompt mandates `1. PROOF OF READ (1-2 sentences): reference SPECIFIC content.` even when content is empty → model fabricates by riffing on URL slug. **This is the "sounds generic" complaint.**
- 🟡 **Issue — single model** (Sonnet for everything)
- 🟡 **Issue — 5 entries with `response_sent=false`** scattered over time → likely transient Anthropic/Telegram failures with no retry

### WF04 · NOVA Scout  ⚫  `BQkWi2N8WqlG9u2c` · active=**false** · Daily 06:00
**Role:** AI scout. Each morning, asks Perplexity for 3 fresh signals (AI tools, IG algorithm, Claude news), feeds to Claude for a brief, sends to Telegram, saves to `daily_signals` table.

**Configured well?**
- ✅ Perplexity + Claude pipeline is straightforward
- ✅ Saves to `daily_signals` for later digest
- ⚫ **Currently inactive** — schedule trigger is disabled
- 🟡 **Issue**: Search queries are hardcoded (AI tools / IG algorithm / Claude). No personalization based on Nathy's recent obsession_signals.
- 🟡 **Issue**: Hardcoded `chatId: "976751395"` instead of pulling from `users` table — works for one user, breaks if you add anyone else
- 🟡 **Issue**: Sonnet for daily brief — Opus + extended thinking would give meaningfully better signal-to-noise

### WF06 · PULSE Digest  ⚫  `S1q45PppO3NXQEje` · active=**false** · Sunday 20:00
**Role:** Weekly CEO briefing. Aggregates 7 days of sparks/content/themes/queue. Claude writes 5-section digest. Sends to Telegram. Saves to `weekly_digests`.

**Configured well?**
- ✅ Aggregation SQL is solid (counts entries, by_category, monetization, queue, signals)
- ⚫ **Currently inactive** — schedule trigger is disabled
- 🟡 **Issue**: Hardcoded chatId again
- 🟡 **Issue**: No analytics from real platforms (IG/LinkedIn views, post performance) — could integrate Windsor.ai here
- 🟡 **Issue**: Sonnet for the strategic digest where Opus would shine

### WF07 · Content Architect  🟡  `S1R3KJ59DdDYoMjM` · active=true
**Role:** Called by WF01 Draft button. Pulls all queued drafts for an entry, generates full content (hook, body, CTA, hook variations, visual prompt, hashtags) per brand+format. Saves to `content_queue.full_draft`. Sends preview to Telegram.

**Configured well?**
- ✅ One-draft-at-a-time batching is right for token budget
- ✅ Format specs (carousel/reel/LinkedIn/email/etc.) are well-defined
- ✅ Brand visual guides locked in (terracotta/cream for HyperNathy, dark+gold for HyperYou, monochrome+violet for HyperAgency)
- 🟡 **Issue — depends on broken upstream**: when `cleaned_text` is empty (which is always for IG), the prompt falls back to `raw_text` (also often empty for forwarded links) → generic content
- 🟡 **Issue — single model** (Sonnet)
- 🟡 **Issue — no per-step approval**: generates hook + body + CTA + variations + visual prompt all in one Claude call. No way to approve/edit just the hook before drafting the rest.

### REPROCESS · Stuck Sparks (May)  ⚫  `ICTcO651C98U9kxe` · active=false · manual
**Role:** One-shot recovery. Manually triggered. Finds entries with no analysis row, runs Claude analyze, inserts row, fires WF03.

**Configured well?**
- ✅ Captures Anthropic API error verbatim (`fullResponse: true, neverError: true`)
- ✅ Good for unsticking
- ⚠️ **The fact this exists at all is the alarm**: WF02 is unreliable enough that you needed to build a recovery workflow. Fix WF02 → this becomes obsolete.

### **Missing: WF05**
The numbering jumps 04 → 06. Either WF05 was archived/never built, or it's the gap where step-by-step approval will live. Recommend numbering the new "Inspire Scraper" workflow as WF05 to fill the slot.

---

## HYPERYOU (education brand pipeline)

### Content Engine  ⚫  `FOVSJWnG2uLylGCH` · active=false
**Role:** Telegram spark in → Claude generates IG content package (caption + 6-slide carousel + 30s reel script + 3 image prompts + hashtags) in 4 languages → saves to Supabase → preview with approval buttons to Telegram.

**Configured well?** Inactive — assumed superseded by WF07 (Content Architect) which does similar work for all brands. **Recommend archiving** or merging unique features into WF07.

### Publisher IG  ⚫  `2jZax2dfOFxT7D83` · active=false
**Role:** Pulls `ready_to_ship` posts from Supabase, publishes to @hyperyou.ai via Meta Graph API. Single posts + 3-slide carousels. Updates status to `published`.

**Configured well?** Inactive. This is the "publish" tail. Once content drafting + approval works, activate this. Needs Meta Graph API credentials (probably already configured given it was once active).

### Audit Quiz  ⚫  `0pRkkYNZCslQ02dA` · active=false
**Role:** ManyChat POSTs quiz answers → Supabase RPC scores Builder Type → returns result JSON. Lead-magnet flow.

**Configured well?** Self-contained. Unrelated to SPARK pipeline. Activate when ManyChat campaign goes live.

---

## HYPERAGENCY (B2B services)

### Strategy Generator  ⚫  `ZH3JhtByGey3mu94` · active=false
**Role:** Webhook intake → 5-prompt Claude chain → Supabase storage → structured strategy report. The lead-gen offering.

**Configured well?** Inactive. Standalone feature — activate when you launch the offering. Good candidate for **step-by-step approval flow** test bed since it's a multi-prompt chain already.

---

## Standalone

### Muse Intake — Universal Client Capture  🟢  `qXZP8dki7BtmrfTE` · active=true · **MCP disabled**
**Role:** Universal client capture. (Detailed audit blocked — MCP access disabled in workflow settings.)

**Configured well?** **Cannot inspect via MCP**. Recommend enabling MCP access in n8n UI → Workflow settings → "Available in MCP" so I can audit it.

### TEST · FLUX Hero Visuals  ⚫  `15S9brQGlRE8NeB9` · active=false
**Role:** Phone form → branded prompt → FLUX 1.1 Pro Ultra via Replicate → editorial hero image → Telegram. Best image gen May 2026.

**Configured well?** Inactive (test). Looks correctly configured. Promote to production once you want hero-image generation hooked into WF07's `visual_prompt` output.

### TEST · Veo 3 Reels  ⚫  `QPEP5Yl2F66vvR21` · active=false
**Role:** Phone form → faceless cinematic prompt enrichment → Veo 3 Fast → 8s editorial reel with native audio → Telegram. HyperYou-only branding baked in.

**Configured well?** Inactive (test). Promote when reel generation is needed.

---

## Cross-cutting issues (across multiple workflows)

| Issue | Workflows affected | Fix |
| --- | --- | --- |
| **Hardcoded chatId** `976751395` | WF04, WF06 | Read from `users` table — supports multi-user later |
| **Single model (Sonnet 4.6) everywhere** | WF02, WF03, WF04, WF06, WF07 | Multi-LLM router (Phase 2 architecture doc) — Opus for analysis/respond/architect, Sonnet for fast variations, Perplexity for research |
| **No retry on Claude/Telegram failures** | WF02, WF03, WF04, WF06 | Add retry-on-error or move to a queue-with-retry pattern |
| **No vision/audio handling** | WF01 → WF02 | Phase 1 fix: vision branch in WF02 + persist file_id in WF01 |
| **Brand intelligence loaded fresh each call** | WF03, WF07 | Cache 5min, add `priority` + `applies_to` columns to filter relevant rules |
| **Hardcoded credentials path differences** | WF02 uses `genericCredentialType: httpHeaderAuth` for Anthropic; WF04/WF06 use `predefinedCredentialType: anthropicApi` | Standardize on `anthropicApi` predefined type — cleaner, n8n-managed |

## What works well

- The **event-driven design** (WF01 → WF02 → WF03 via `executeWorkflow` + `waitForSubWorkflow:false`) is the right pattern. No polling, no race conditions in principle.
- The **brand intelligence + memory + obsession_signals** schema is sophisticated and gives the model good grounding (when content is actually present).
- The **inline-keyboard action flow** (Draft / Save / Skip) is clean UX.
- The **REPROCESS workflow** as a recovery hatch is good defensive engineering — keep it even after WF02 is fixed.
- **TEST workflows for FLUX + Veo** show the right instinct: pick best-of-class for visual + reel generation.

## Single highest-leverage fix

If you do nothing else, fix **WF03's prompt** (in `02-WF03-respond-prompt.md`). It changes the system from confidently-fabricating to honestly-asking when content is empty. Zero risk. ~10 min of paste-work. Eliminates ~90% of "sounds generic" complaints immediately.
