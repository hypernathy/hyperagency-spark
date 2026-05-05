# Autonomous build log — 2026-05-05 session

Started: ~16:00 UTC. Branch: `claude/fix-n8n-workflows-1AKIi`.

User briefed me to take the lead, build the engine, work autonomously while she was offline. This log documents what shipped LIVE vs what's still paste-edits she applies on return.

## ✅ SHIPPED LIVE (working in production NOW)

### 1. WF03 SPARK Respond — v3.1 HONEST MODE
- **What changed:** Replaced fake "PROOF OF READ" prompt with honest mode. When `cleaned_text` is empty AND no image OCR'd, the model is explicitly forbidden from fabricating analysis. It either acknowledges missing content + asks for the gist, OR (when content exists) grounds reply in actual source material.
- **Model:** `claude-sonnet-4-6` → `claude-opus-4-7`
- **Verified:** REPROCESS run 47521 produced reply for the 15:27 stuck screenshot:
  > "Can't see what's in the screenshot — only got the timestamp, no caption or image rendered. Drop the caption or the link?"
- **Bug discovered + fixed mid-session:** v3.0 had an apostrophe-escape syntax error that broke the JS sandbox. v3.1 scrubs all apostrophes from inner string literals (uses "could not" instead of "couldn't", "Nathy" instead of "Nathy's" in the prompt template).
- **activeVersionId**: `df500935-eda7-466d-8381-e55c20827a37`

### 2. WF09 Inspire Scraper — NEW workflow
- **What it does:** Takes a single post URL (any platform — IG/TikTok/LinkedIn/YouTube) plus user_id and chat_id, fetches via IG oEmbed + Firecrawl, calls Claude Opus 4.7 to extract a hook archetype + reusable template + viral score + remix instructions for `@hypernathy`, saves to `inspiration_posts` + `hook_library`, sends digest to Telegram.
- **workflowId:** `6eTNGEeKVABIEL6m`
- **Status:** LIVE. Postgres + Telegram credentials auto-bound. Anthropic + Firecrawl HTTP nodes need credential binding on first run (n8n UI → workflow → click each HTTP node → select existing Anthropic / Firecrawl credential).
- **How to call:** From WF01 add `/inspire <url>` command (paste-edit), OR call `Execute Workflow` node referencing this ID with input `{ inspiration_url, user_id, chat_id }`.

### 3. Supabase migrations — 5 new tables + seed data
Applied migration `spark360_engine_v2_tables`:
- `tracked_accounts` — accounts you want to monitor (IG/TikTok/LinkedIn/YouTube/Twitter)
- `inspiration_posts` — every scraped post with hook archetype, themes, language, OCR text, thumbnail
- `hook_library` — reusable hook templates with example hooks, performance score, brand compat
- `brand_voice_profiles` — multi-tenant ready voice config per brand. Seeded for `hypernathy` (personal), `hyperyou` (product), `hyperagency` (service)
- `pipeline_state` — for step-by-step approval flow (when WF02b/03b/04b ship)

Plus 7 universal hook archetypes seeded into `hook_library`:
1. authority_reveal — "A {profession} explained why {counterintuitive_claim}"
2. numbered_secret_list — "{Person} could never {control_X} you again if you learned these {N} {category}"
3. counterintuitive_reveal — "When {common_behavior}, most people think {wrong_assumption}. It is not."
4. silence_strategy
5. reverse_gatekeep
6. one_word_reframe
7. deadline_provocation

### 4. REPROCESS run — cleared the stuck screenshot
- Execution 47517 (first run, cleared 1 stuck entry)
- Execution 47521 (test run after WF03 fix, validated the new prompt produces honest output)

## 📋 PASTE-EDITS YOU APPLY ON RETURN (~10-15 min total)

These I documented in earlier files but did NOT apply to live workflows. Reasons: WF01 is the live Telegram trigger (webhook-id-sensitive — too risky to MCP-rewrite); WF02 is large with many escapes (lower-risk to UI-edit one node at a time).

### A. WF01 — persist `file_id` to `entries.attachment_url`
**File:** `n8n-fixes/04-WF01-ingest-fixes.md`
**Change:** ONE node (`Create Entry` SQL). Adds `attachment_url` to the column list, writes `tg://<file_id>` when image/voice present.
**Time:** 60 seconds.

### B. WF02 — IG oEmbed fallback when Firecrawl empty
**File:** `n8n-fixes/03-WF02-analyze-fixes.md`, section 1
**Change:** Add ONE new HTTP Request node `IG oEmbed` between Firecrawl Scrape and Enrich Prompt. Plus update Enrich Prompt code to use it.
**Time:** 5 min.

### C. WF02 — screenshot vision branch
**File:** `n8n-fixes/03-WF02-analyze-fixes.md`, section 2
**Change:** Add 4 new nodes (Is Screenshot IF + Get TG File Path + Download TG File + Vision OCR Claude). Wires them as a parallel branch.
**Time:** 8-10 min.
**Prereq:** A above.

### D. WF02 + WF07 — model upgrade to Opus 4.7
**File:** `n8n-fixes/03-WF02-analyze-fixes.md`, section 4
**Change:** TWO HTTP nodes. Change `model: 'claude-sonnet-4-6'` → `model: 'claude-opus-4-7'`. Add `thinking: { type: 'enabled', budget_tokens: 8000 }` to WF02's Claude Analyze.
**Time:** 2 min.

### E. WF09 — bind Anthropic + Firecrawl credentials
n8n didn't auto-bind them since they're generic HTTP nodes. Open WF09 → click each HTTP node → select credentials from dropdown.
**Time:** 1 min.

## 🧪 LIVE CREDENTIALS YOU CAN ADD WHEN YOU WANT (no rush)

You confirmed in the AskUserQuestion you'll add these:
- ✅ **OpenAI** (Whisper) — voice notes will work as soon as added + WF02 voice branch built (next session)
- ✅ **Apify** (IG account scraping) — WF09 will scale from "single post" to "scrape last 50 posts of @account"
- ✅ **Google Drive OAuth** — currently deprioritized (you said "skip Drive for now")
- ✅ **Replicate** — confirmed exists (your TEST · FLUX + TEST · Veo workflows use it)

## 🔀 ARCHITECTURE DECISIONS LOCKED THIS SESSION

From your AskUserQuestion answers:
1. **End state:** "Owned-brands first, multi-tenant ready" (my recommendation, you said "your recommendation and why")
2. **Bot architecture:** ONE bot (SPARK), agents behind. Confirmed.
3. **Brands:** Personal (hypernathy) / Product (hyperyou) / Service (hyperagency).
4. **Budget:** Opus 4.7 everywhere, quality first.
5. **Routines/Agent SDK:** Hybrid — tool-use+thinking for fixed pipelines, Agent SDK for autonomous research/scrape steps.
6. **Drive:** Deprioritized.
7. **Future surfaces:** Lovable cockpit + iOS share + WhatsApp + voice — see `09-FUTURE-VISION-LOCK.md`.

## 🐛 BUGS DISCOVERED + RESOLVED

1. **WF03 v3.0 syntax error** (apostrophe escape in JS sandbox) — fixed in v3.1 by scrubbing apostrophes.
2. **REPROCESS calls Sonnet** while WF02 should also upgrade to Opus — REPROCESS has its own analyze node, change it too on return (paste-edit not in current docs, easy).

## 📍 STATE SNAPSHOT FOR NEXT SESSION

- **78 entries total** (was 77 at session start; user sent 1 screenshot during session)
- **Stuck count: 0** ✅
- **Unanswered count:** 5 (the 4 historical from before May 5 + 0 new — last screenshot got an answer via REPROCESS+v3.1)
- **WF03 v3.1:** ✅ live + tested working
- **WF09 Inspire Scraper:** ✅ live, awaiting credential binding
- **Tables ready:** ✅ tracked_accounts, inspiration_posts, hook_library (7 archetypes seeded), brand_voice_profiles (3 brands seeded), pipeline_state

## 🎯 WHAT TO DO NEXT (PRIORITIZED)

When you have 30 min:
1. **Apply paste-edits A→D above** — unlocks screenshots + IG oEmbed + Opus everywhere. ~15 min.
2. **Bind WF09 credentials** (E above) — 1 min.
3. **Test WF09**: from n8n UI, run WF09 manually with `{ inspiration_url: "https://www.instagram.com/p/<some-post>/", user_id: 1, chat_id: "976751395" }`. Should send a Telegram digest with hook archetype.
4. **Send a real spark to SPARK Telegram** — verify the new WF03 v3.1 reply is honest + grounded.

When you have 2 hours:
5. **Build /inspire and /scrape commands in WF01** — short paste edits to `Classify Input` so SPARK routes URLs to WF09.
6. **Reactivate WF04 NOVA Scout + WF06 PULSE Digest** after upgrading their models too.

When you have a day:
7. **Lovable cockpit v0** — read entries + drafts from Supabase, Telegram-style approval UI but in browser. See `09-FUTURE-VISION-LOCK.md` for scope.
