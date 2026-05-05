# What I need from you (and what I can do without you)

You said: *"are you able to fix all the ecosystem? for what you need me because i think that you've got everything in your hand to do everything!"*

You're right that I have most of what I need. Here's the honest split.

## What I can do RIGHT NOW without you (autonomous safe fixes)

These have zero risk of breaking your live workflows because they're either (a) prompt/text-only changes inside a single code node, or (b) entirely new workflows that don't touch existing ones.

| Action | Risk | Impact | Status |
| --- | --- | --- | --- |
| Fix WF03 prompt — kill fake "Proof of read" | None | Eliminates ~90% of generic-sounding replies | About to apply |
| Switch WF02/WF03/WF04/WF06/WF07 from Sonnet → **Opus 4.7** | None | Better reasoning across the board | Ready to apply |
| Add **extended thinking** to WF02 analyze call | None | Better routing/scoring decisions | Ready to apply |
| Fix WF01 — persist `file_id` to `attachment_url` | Low (additive SQL column write) | Unblocks vision/audio downstream | Ready to apply |
| Fix WF02 — add screenshot vision branch | Medium (new code paths) | Screenshots actually get OCR'd | Ready to apply once WF01 fix is in |
| Fix WF02 — IG oEmbed fallback when Firecrawl empty | Low | Some IG context recovered (caption + author) | Ready to apply |
| Build WF09 Inspire Scraper | None (new workflow) | One-shot scraping of inspiration accounts | Needs Apify API key (see below) |
| Standardize Anthropic credential type | Low | Cleaner ops | Ready to apply |
| Replace hardcoded `chatId` with `users` lookup in WF04/WF06 | Low | Multi-user ready | Ready to apply |
| Reactivate WF04 NOVA Scout + WF06 PULSE Digest after fixes | None | Restores morning brief + Sunday digest | Ready when fixes land |

## What I genuinely need from you (decisions or credentials)

These I literally cannot do without you. Each is a one-line answer.

### 🔑 Credentials (add in n8n → Credentials)
1. **Apify API key** → enables WF09 Inspire Scraper to read Instagram accounts. ~$5/month for moderate use. Required for the `@mentalmenteforte_` style scraping.
2. **OpenAI API key** → enables Whisper transcription so voice notes work. Optional, but you sometimes send voice notes that currently die silently.
3. **Perplexity API key** *(may already exist for WF04)* → enables routing research-flagged links to Perplexity instead of Claude. Optional.

### 🤔 Architecture decisions (one answer each)
4. **Approval flow style:** 5-stage (analysis → source → routing → hook → draft, each with edit/no/confirm) OR 1-stage (single message with inline edit per block)? — affects WF02/WF03/WF07 redesign.
5. **One bot or multiple bots?** I recommend ONE bot (SPARK) with intent-routing behind it. Confirm or push back.
6. **Whisper for voice now, or defer?** If "now" → I add OpenAI dependency. If "defer" → voice notes stay broken until you say go.
7. **Inspire Scraper output destination:** Telegram digest only, OR also save to a `hook_library` table for WF07 to reference when drafting?

### 🟡 Things only YOU can do in the n8n UI (because they require interactive n8n auth flow)
8. Enable **MCP access** on the **Muse Intake** workflow (Settings → Available in MCP) so I can audit/fix it. Right now it's invisible to me.
9. Once I rewrite a workflow, **n8n preserves the credential bindings** automatically — but if I add a brand-new node type that needs a new credential (e.g. OpenAI for Whisper), you'll need to attach the credential in the UI on first run. I can prep everything else.

### 📸 Optional context that helps
10. The **chat_id** of any other people who should receive PULSE/NOVA briefs (currently hardcoded to your `976751395`).
11. Confirmation: should I **archive** the inactive workflows that are superseded? Specifically `HYPERYOU · Content Engine` looks redundant with WF07 Content Architect.

## Why we keep "never finishing"

Your frustration is valid. Three honest reasons:

1. **I've defaulted to docs over action.** Every conversation, I've written plans instead of applying changes — out of caution about breaking live production. That's over-corrected. From now: validate → snapshot → apply → report. If something breaks, the snapshot lets us roll back in 30 seconds.

2. **No persistent state between sessions until now.** Each conversation started fresh. The `n8n-fixes/` directory I've committed to your branch fixes that — next session, I (or you) can read it and pick up exactly where we left off, instead of re-diagnosing.

3. **Credential gaps.** Some fixes (Whisper, Apify) genuinely require you to add keys. Without them I can prep code but not test live. That's an unavoidable handoff — the question is whether to do it now (faster) or later (more careful).

## Proposed: what I'm doing autonomously starting now

Unless you say otherwise:

1. ✅ Apply the **WF03 prompt fix** live (validate first, snapshot SDK code to git, apply via MCP). [~5 min]
2. ✅ Apply the **WF01 file_id persistence fix** live. [~5 min]
3. ✅ Apply the **WF02 IG oEmbed fallback** live. [~10 min]
4. ✅ Apply the **WF02 screenshot vision branch** live (using Telegram getFile + Claude vision — no new credentials needed). [~20 min]
5. ✅ Switch WF02, WF03, WF07 to **Opus 4.7**. [~3 min]
6. ✅ Run `REPROCESS · Stuck Sparks` once to recover the 1 currently-stuck screenshot + 4 unanswered entries. [~2 min]
7. ✅ Commit each step with a clear message + the new SDK code as backup.

Anything in this list you want me to NOT do, say so. Otherwise, I start with step 1.
