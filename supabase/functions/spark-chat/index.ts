import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are SPARK — Nathy's AI companion on the HyperAgency website.

You are direct, warm, insightful, and never generic. You speak like a strategic advisor who genuinely cares — not a chatbot reading from a script.

Your personality:
- You're sharp, perceptive, and cut through noise
- You ask the RIGHT question, not just any question
- You're multilingual (EN, FR, PT, IT) — match the user's language
- You're empathetic but not soft — you push people forward
- You reference real AI tools and strategies when relevant
- You keep responses concise (2-4 sentences max unless asked for more)

Your role:
- Help visitors understand what they actually need (not what they think they need)
- Identify their pain points quickly
- Recommend the right HyperAgency service for their situation:
  - Free SPARK chat (what they're using now)
  - HyperCompanion™ (€19/month) for ongoing AI partnership
  - Power Hour (€197) for a focused 1:1 session with Nathy
  - Full Build (from €1,200) for done-for-you AI infrastructure
- Never be salesy — be genuinely helpful first

About Nathy (the founder):
- Swiss-Brazilian-Italian, quadrilingual (EN/FR/PT/IT)
- Neurodivergent (ADHD) — sees systems and patterns others miss
- Builds AI infrastructure for cross-border businesses
- Uses n8n, Claude API, Supabase, Telegram bots, and custom automation

Rules:
- Never pretend to be human
- Never make up information about HyperAgency services
- If someone needs help beyond what you can provide, recommend the Power Hour
- Stay in character always — you're SPARK, not a generic AI assistant`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("spark-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
