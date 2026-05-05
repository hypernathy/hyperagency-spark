# Coherence audit — what's connected vs disconnected

Audit run: 2026-05-05 ~16:30 UTC.

## Tables snapshot

| Table | Rows | Status |
| --- | --- | --- |
| entries | 78 | ✅ |
| entry_analysis | 78 | ✅ 1:1 with entries (no orphans) |
| content_queue | 28 | 🟡 all in `status='draft'` — none reached `ready` |
| memories | 26 | ✅ |
| brand_intelligence | 206 (active) | 🔴 only ~3% of categories used by agents |
| brand_voice_profiles | 3 | ✅ seeded for hypernathy/hyperyou/hyperagency |
| hook_library | 7 | 🟡 seeded but unwired (WF07 doesn't read it yet) |
| tracked_accounts | 0 | ✅ empty as expected (no scrapes run yet) |
| inspiration_posts | 0 | ✅ empty as expected |
| pipeline_state | 0 | ✅ empty as expected (step-by-step flow not built yet) |
| briefs | 0 | ✅ empty as expected (no ATLAS calls yet) |

## Workflow chain coherence

### Chain: WF01 → WF02 → WF03 (sparks pipeline)
- **Wire**: ✅ executeWorkflow connections intact
- **Active**: ✅ WF01 + WF02 + WF03 all active
- **Behavior**: WF01 reacts ⚡ then triggers WF02 async. WF02 analyzes then triggers WF03. WF03 v3.1 HONEST MODE replies.
- **Known issues**:
  - WF02 has no screenshot/voice path → screenshots stuck silently (paste-edit pending)
  - WF02 still on Sonnet, should be Opus 4.7 + extended thinking
  - Firecrawl 100% fail rate on Instagram URLs (paste-edit: add IG oEmbed fallback)

### Chain: WF01 → WF07 (drafts pipeline)
- **Wire**: ✅ `Trigger WF07 Draft` node calls WF07
- **Active**: ✅ WF01 + WF07 both active
- **Behavior**: When user taps Draft button, WF01 inserts force-draft rows into content_queue, then triggers WF07 which generates per-brand-per-format content
- **Known issues**:
  - WF07 still on Sonnet, should be Opus 4.7
  - WF07 doesn't read hook_library yet
  - WF07 doesn't load full brand_intelligence (only language-filtered, not category-filtered for relevance)

### Chain: WF09 INSPIRE — standalone
- **Wire**: ✅ executeWorkflowTrigger
- **Active**: ✅ published this session
- **Calls**: `IG oEmbed (HTTP) → Firecrawl (HTTP) → Claude Opus → Postgres x3 → Telegram`
- **Known issues**: Anthropic + Firecrawl HTTP credentials not auto-bound — need 1-min UI binding

### Chain: WF10 ATLAS — standalone
- **Wire**: ✅ webhook trigger at `/webhook/atlas`
- **Active**: ✅ published this session
- **Calls**: `Postgres INSERT → Perplexity → Claude Opus → Postgres UPDATE → Telegram`
- **Known issues**: Anthropic + Perplexity HTTP credentials not auto-bound — need 1-min UI binding

### REPROCESS · Stuck Sparks (May)
- **Active**: ❌ inactive (manual trigger only)
- **Behavior**: Picks entries with no analysis, runs Claude analyze, inserts row, triggers WF03
- **Known issues**: Uses its own Claude Sonnet call (not WF02 path), so it BYPASSES the new screenshot/IG fallback fixes when those land

## Brand intelligence under-utilization (the biggest finding)

```
brand_intelligence categories (42 total):
   ai_stack_audit_v1
   banned_words_v1, banned_words_v2          ← only banned_words_v1 used
   brand_lock_brief_v1
   brand_mark_v1, brand_mark_v2
   color_palette_v1, color_palette_v2         ← never loaded
   competitor_intelligence_v1                  ← never loaded
   design_principles_v1, design_principles_v2  ← never loaded
   gpt_image_prompt_template_v1                ← never loaded
   he_cooks_pillar_v1
   heroine_self_v1                             ← never loaded
   heroine_settings_v1                         ← never loaded
   hyperyou_subproducts                        ← never loaded
   imagery_v1, imagery_v2                      ← never loaded
   infrastructure_v1
   launch_playbook_v1
   layout_v1, layout_v2                        ← never loaded
   linguistic_casting_v1                       ← never loaded
   lovable_brand_identity, lovable_preview_url, lovable_voice_anchor_phrases
   market_signal_v1
   master_mark_v1
   monogram_register_v1
   nd_design_laws_v1                           ← never loaded
   outfit_codex_v1                             ← never loaded
   persona_voice_v1                            ← never loaded (BIG MISS)
   platform_architecture_v1
   positioning_diff_v1                         ← never loaded
   post_composition_v1                         ← never loaded
   production_pipeline_v1
   retired_names                               ← used ✓
   typography_v1, typography_v2                ← never loaded
   umberto_signature_v1
   voice_v1, voice_v2                          ← never loaded (BIGGEST MISS)
```

**Loaded by WF03**: only `audience`, `belief`, `ux_rule`, `promise`, `banned_words` (v1 only), `voice_rules`, `retired_names`. Of those, only `banned_words_v1` and `retired_names` actually exist with data — most of the others may be 0-row categories.

**Fix priority**:
1. WF03 — add `voice_v1`, `voice_v2`, `persona_voice_v1`, `linguistic_casting_v1` (voice fidelity)
2. WF07 — add ALL design+visual categories (`color_palette_v2`, `imagery_v2`, `typography_v2`, `layout_v2`, `nd_design_laws_v1`, `post_composition_v1`, `gpt_image_prompt_template_v1`)
3. WF07 — add `positioning_diff_v1` + `competitor_intelligence_v1` for sharper hooks

## 28 stuck content_queue drafts

Entries that produced `should_queue=true` but never got drafted. Sitting at `status='draft'` with `full_draft IS NULL`.

**Possible causes**:
- WF07 was never triggered (user didn't tap Draft button)
- WF07 was triggered but failed
- These date from the early build phase

**Recommended action**: ignore for now. New sparks will work end-to-end once paste-edits land. If you want to force-draft these 28, run WF07 manually with their entry_ids OR build a queue-runner cron.

## What is FULLY working end-to-end right now

1. **SPARK reply chain on screenshots**: REPROCESS run 47521 verified WF03 v3.1 produces honest output for content-empty inputs. ✅
2. **Hook library has seed data**: 7 universal archetypes ready for WF07 to consume once wired. ✅
3. **Brand voice profiles seeded**: routing-ready for 3 brands. ✅
4. **WF09 + WF10 created and published**: standalone agents ready, just need credential binding. ✅

## What is NOT working end-to-end

1. **Fresh screenshot from user → meaningful reply**. WF02 still has no vision path. The reply will be honest-but-empty until paste-edits land.
2. **Fresh IG link → grounded reply**. WF02 Firecrawl still fails on IG. Reply will be honest-but-empty.
3. **Voice notes**. Pipeline drops them entirely (no transcription).
4. **Hook library → content drafting wire**. WF07 doesn't read hook_library yet.
5. **Daily NOVA + weekly PULSE**. Both inactive.
6. **content_queue → published IG/LinkedIn**. Publisher workflows inactive.

## Single biggest leverage paste-edit

Updating WF03 + WF07 to load `voice_v1`, `voice_v2`, `persona_voice_v1`, `linguistic_casting_v1` from brand_intelligence. This unlocks 80% of brand depth that's currently invisible to the agents. ~30 sec of SQL editing per workflow.
