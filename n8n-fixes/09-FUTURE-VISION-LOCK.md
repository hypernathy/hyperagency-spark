# Future vision lock — "AI as the interface, before others build it"

Captured: 2026-05-05. Ratified by Nathy via the businessbulls.in carousel insight ("AI becomes the interface, apps disappear").

## The principle

**Brain stays put. Surfaces are pluggable.**

The product is the agent ecosystem (n8n workflows + Claude Opus 4.7 + Postgres). The interface is whatever the user is already in: Telegram today, Lovable cockpit + iOS share + WhatsApp + Apple Intelligence tomorrow. Each new surface is an additional webhook into the same `entries` table — backend never rebuilt.

## What this means concretely

### Today (week 1)
- **Telegram** = the universal forward-from-anywhere capture surface. Phone-first, conversational, zero friction.
- **n8n** = orchestration brain. Each workflow is an agent.
- **Supabase** = single source of truth (entries, brand_voice_profiles, hook_library, content_queue, pipeline_state).
- **Claude Opus 4.7** = reasoning engine (analysis, response, content drafting).

### Week 2-4 — add Lovable cockpit
Lovable web/mobile app at `spark.<your-domain>` — connects to the same Supabase. Reads entries + drafts. Provides:
- Visual carousel preview + slide-by-slide editing before publishing
- Draft calendar (drag drafts onto post dates)
- Hook library browser ("show me all `authority_reveal` hooks I have")
- Brand voice profile editor (no more SQL inserts to update brand bible)
- Performance dashboard (once Replicate FLUX/Veo metrics + IG insights wire up)

Lovable is NOT the entry. Telegram still is. Lovable is the cockpit you open when you have 15 min at your desk.

### Month 2-3 — multi-surface expansion
Each of these adds one webhook into the existing `WF01 Ingest` pattern:

1. **iOS Share Extension** (custom): long-press any URL → "Send to SPARK". Bypasses Telegram. Native iOS, no Telegram dependency. Built once via TestFlight.
2. **WhatsApp Business Bot**: same agent, second surface. Brazilian audience uses WhatsApp more than Telegram.
3. **Voice via Siri Shortcut**: "Hey Siri, send to SPARK" → records audio → Whisper → analysis. Becomes the fastest input.
4. **Browser extension**: right-click any page → "Spark this". Captures URL + page text + screenshot in one shot.
5. **Apple Intelligence intent** (when iOS exposes it): the OS-level AI agent learns to dispatch to SPARK based on intent. This is the endpoint of the "AI as interface" prediction.

### Month 6 — productize for clients
The schema is already multi-tenant ready (`users` + `brand_voice_profiles` are keyed). Onboarding agency client #1:
1. Create new `users` row
2. Insert their `brand_voice_profiles` (their voice, banned words, visual guides)
3. Generate them their own Telegram bot (or WhatsApp number)
4. Same backend, different surface, different brand context

Each new client = ~30 min of setup. The engine is the moat.

## What this rules OUT

- **Rebuilding the backend in a different platform.** n8n stays. The "should we use Managed Agents instead" question is settled: hybrid (n8n orchestration + Claude inside the boxes). Don't rebuild what works.
- **Replacing Telegram before the cockpit is shipped.** Telegram works today. Don't break the working surface to chase a shinier one.
- **Custom mobile app from scratch.** Use Lovable for the cockpit. Don't burn 3 months on SwiftUI.
- **Building a "general AI assistant".** SPARK has a specific purpose: ingest creative inputs → produce publish-ready content for 3 brands. Resist scope creep into calendar, email, project management, etc. (those are separate workflows that can hit the same Supabase if needed, but not part of SPARK's identity).

## What this commits TO

- **Every new surface gets evaluated against this principle**: does it just write into `entries` (good — pluggable) or does it require backend rewrite (bad — reject)?
- **No surface lock-in**. Stay one webhook away from any new entry point.
- **Speed of integration > polish of any single surface.** A janky iOS share extension that works in week 4 beats a beautiful one in month 4.
- **Build before others.** The bet: by month 6, every solopreneur will want this. By being live with 3 surfaces and a working hook library, SPARK is the obvious choice.

## Open architectural decisions (low-priority, capture for later)

- Vector store for `inspiration_posts` + `hook_library` to enable semantic "find me hooks like this one"
- Multi-language brand voice tuning (PT-BR carioca vs PT-PT vs IT vs FR — voice profiles need per-language overrides)
- Public API for external tools to trigger drafts without going through Telegram (would help build a "SPARK for teams" later)
- Consent + data-handling story when client #1 onboards (GDPR-shaped concerns even if EU isn't the primary market)

These don't block anything today. Capture, defer, revisit at month 3 review.
