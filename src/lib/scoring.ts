// ============================================================
// src/lib/scoring.ts
// HyperYou — NAOSIS Scoring Engine
// What this does: takes quiz answers → calculates 7 axes →
// determines archetype → generates HyperID
// No UI here. Pure logic only.
// ============================================================

import type { QuizAnswer, CognitiveAxes } from "@/types/assessment"

// ─────────────────────────────────────────────────────────────
// PART 1: THE 5 HYPERYOU ARCHETYPES
// These are the locked names + codes from your system.
// Never rename these. Never add new ones without updating scoring.
// ─────────────────────────────────────────────────────────────

export interface HyperArchetype {
  code: "VS" | "DD" | "SA" | "IG" | "RE"
  name: string
  tagline: string
  description: string
  primaryAxis: keyof CognitiveAxes   // the axis this archetype scores highest on
  secondaryAxis: keyof CognitiveAxes // second strongest axis
  accentColor: string                // for the result card UI
}

export const ARCHETYPES: HyperArchetype[] = [
  {
    code: "VS",
    name: "Visionary Sprinter",
    tagline: "Sees everything. Moves fast. Needs containment.",
    description: "You see the whole picture before anyone else draws the first line. Your challenge is channeling that vision into one direction.",
    primaryAxis: "idea_generation",
    secondaryAxis: "opportunity_perc",
    accentColor: "#E9C824", // yellow
  },
  {
    code: "DD",
    name: "Deep Diver",
    tagline: "Goes deep. Slow start. Unstoppable once in.",
    description: "You don't skim. You go all the way in. Your slow start isn't a bug — it's the engine loading.",
    primaryAxis: "focus_dynamics",
    secondaryAxis: "decision_intel",
    accentColor: "#4fa8c3", // blue
  },
  {
    code: "SA",
    name: "Spiral Architect",
    tagline: "Builds complex systems. Gets lost in them.",
    description: "You think in systems before anyone else sees there's a system to build. Your challenge is knowing when the architecture is good enough.",
    primaryAxis: "creative_intel",
    secondaryAxis: "decision_intel",
    accentColor: "#9B6ED4", // violet
  },
  {
    code: "IG",
    name: "Igniter",
    tagline: "Starts everything. Finishes selectively. High energy.",
    description: "Your energy is contagious. You light the fire. The challenge is staying in the room after the spark.",
    primaryAxis: "execution_energy",
    secondaryAxis: "idea_generation",
    accentColor: "#e87878", // coral
  },
  {
    code: "RE",
    name: "Reactor",
    tagline: "Responsive genius. Best under pressure. Needs triggers.",
    description: "You're not slow — you're calibrating. When the signal comes, you move with precision no planner can match.",
    primaryAxis: "decision_intel",
    secondaryAxis: "execution_energy",
    accentColor: "#4fc38a", // green
  },
]

// ─────────────────────────────────────────────────────────────
// PART 2: TAG → AXIS SCORE MAP
// Each quiz answer has a hidden "tag" (like "visionary" or "burst").
// This map says: "if someone picks this tag, add these scores
// to these cognitive axes."
// Values are 0-100. They get averaged across all answers.
// ─────────────────────────────────────────────────────────────

const TAG_SCORES: Record<string, Partial<CognitiveAxes>> = {

  // ── Builder identity tags (Q1, Q2, Q3, Q4) ──
  visionary:      { idea_generation: 88, opportunity_perc: 75 },
  executor:       { execution_energy: 95, idea_generation: 55 },
  analyst:        { decision_intel: 92, idea_generation: 65 },
  connector:      { collab_arch: 95, opportunity_perc: 80 },

  // ── Idea volume tags (Q5) ──
  infinite:       { idea_generation: 100, execution_energy: 30 },
  abundant:       { idea_generation: 85, execution_energy: 45 },
  deep:           { idea_generation: 70, decision_intel: 85 },
  focused:        { idea_generation: 65, execution_energy: 80 },

  // ── Execution style tags (Q6) ──
  rapid:          { execution_energy: 90, focus_dynamics: 70 },
  planner:        { execution_energy: 75, decision_intel: 88 },
  pressure:       { execution_energy: 85, decision_intel: 60 },
  collaborative:  { collab_arch: 85, execution_energy: 65 },

  // ── Finishing pattern tags (Q7) ──
  completionist:  { execution_energy: 80, decision_intel: 72 },
  gardener:       { opportunity_perc: 75, decision_intel: 70 },
  disciplined:    { execution_energy: 88, focus_dynamics: 82 },
  explorer:       { opportunity_perc: 88, idea_generation: 80 },

  // ── Creative domain tags (Q8) ──
  tech:           { creative_intel: 78, decision_intel: 75 },
  human:          { collab_arch: 88, creative_intel: 75 },
  systems:        { creative_intel: 88, idea_generation: 82 },
  identity:       { creative_intel: 85, opportunity_perc: 80 },

  // ── Focus & time tags (Q9) ──
  morning:        { focus_dynamics: 78, execution_energy: 72 },
  night:          { focus_dynamics: 82 },
  burst:          { focus_dynamics: 92 },
  steady:         { focus_dynamics: 85, execution_energy: 80 },

  // ── Overwhelm response tags (Q10) ──
  recluse:        { focus_dynamics: 88, decision_intel: 70 },
  structured:     { execution_energy: 85, decision_intel: 80 },
  pivot:          { opportunity_perc: 82, decision_intel: 65 },
  social:         { collab_arch: 85, opportunity_perc: 72 },

  // ── Learning style tags (Q11) ──
  kinesthetic:    { execution_energy: 80, creative_intel: 75 },
  conceptual:     { decision_intel: 85, idea_generation: 78 },
  observational:  { opportunity_perc: 80, decision_intel: 76 },
  // note: "social" is already defined above — shared tag, same scores

  // ── Self-description tags (Q12) ──
  pattern:        { decision_intel: 88, idea_generation: 80 },
  selective:      { decision_intel: 82, execution_energy: 70 },
  adaptive:       { decision_intel: 78, collab_arch: 80 },
  // note: "systems" is already defined above — shared tag, same scores
}

// ─────────────────────────────────────────────────────────────
// PART 3: CALCULATE THE 7 AXES
// Takes all 12 answers.
// For each answer's tag, looks up the axis scores.
// Averages them. Returns a score 0-100 for each of the 7 axes.
// ─────────────────────────────────────────────────────────────

export function calculateAxes(answers: QuizAnswer[]): CognitiveAxes {
  // Start all axes at 0
  const totals: CognitiveAxes = {
    idea_generation:  0,
    execution_energy: 0,
    focus_dynamics:   0,
    decision_intel:   0,
    creative_intel:   0,
    collab_arch:      0,
    opportunity_perc: 0,
  }
  // Track how many answers hit each axis (for averaging)
  const counts = { ...totals }

  answers.forEach((answer) => {
    const tagScores = TAG_SCORES[answer.answer_tag]
    if (!tagScores) return // unknown tag — skip safely

    Object.entries(tagScores).forEach(([axis, value]) => {
      totals[axis as keyof CognitiveAxes] += value ?? 0
      counts[axis as keyof CognitiveAxes]++
    })
  })

  // Average each axis. If no answers hit it, default to 50 (neutral).
  return Object.fromEntries(
    Object.entries(totals).map(([axis, total]) => [
      axis,
      counts[axis as keyof CognitiveAxes] > 0
        ? Math.round(total / counts[axis as keyof CognitiveAxes])
        : 50,
    ])
  ) as unknown as CognitiveAxes
}

// ─────────────────────────────────────────────────────────────
// PART 4: DETERMINE THE ARCHETYPE
// Each archetype has a primary axis and a secondary axis.
// We score each archetype: (primary × 0.6) + (secondary × 0.4)
// Highest score = primary archetype.
// ─────────────────────────────────────────────────────────────

export function rankArchetypes(axes: CognitiveAxes): HyperArchetype[] {
  return [...ARCHETYPES]
    .map((archetype) => ({
      archetype,
      score:
        axes[archetype.primaryAxis] * 0.6 +
        axes[archetype.secondaryAxis] * 0.4,
    }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.archetype)
}

// ─────────────────────────────────────────────────────────────
// PART 5: GENERATE THE HYPERID
// Format: ⚡VS-7429
// The number = last 4 digits of the current timestamp.
// This makes it unique per user (practically impossible to collide).
// ─────────────────────────────────────────────────────────────

export function generateHyperID(archetypeCode: string): string {
  const timestamp = Date.now()
  const suffix = String(timestamp).slice(-4)
  return `⚡${archetypeCode}-${suffix}`
}

// ─────────────────────────────────────────────────────────────
// PART 6: THE MASTER FUNCTION — scoreQuiz()
// This is the one you call when the quiz is complete.
// Feed it 12 answers. Get back everything.
// ─────────────────────────────────────────────────────────────

export interface QuizResult {
  axes: CognitiveAxes           // 7 cognitive scores (0-100 each)
  archetype: HyperArchetype     // primary archetype (the result)
  secondary: HyperArchetype     // second-highest (used in AI report for nuance)
  hyper_id: string              // e.g. ⚡VS-7429
  agency_signal: boolean        // true = show Connexa upsell on result page
}

export function scoreQuiz(answers: QuizAnswer[]): QuizResult {
  // Step 1 — calculate axes
  const axes = calculateAxes(answers)

  // Step 2 — rank archetypes
  const ranked = rankArchetypes(axes)
  const archetype = ranked[0]
  const secondary = ranked[1]

  // Step 3 — generate HyperID
  const hyper_id = generateHyperID(archetype.code)

  // Step 4 — agency signal
  // VS and SA users are most likely to benefit from Connexa
  const agency_signal = archetype.code === "VS" || archetype.code === "SA"

  return {
    axes,
    archetype,
    secondary,
    hyper_id,
    agency_signal,
  }
}
