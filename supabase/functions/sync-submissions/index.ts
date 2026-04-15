import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Source (Lovable Cloud)
    const srcUrl = Deno.env.get("SUPABASE_URL");
    const srcKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!srcUrl || !srcKey) throw new Error("Source Supabase credentials missing");

    // Destination (external)
    const dstUrl = Deno.env.get("EXTERNAL_SUPABASE_URL");
    const dstKey = Deno.env.get("EXTERNAL_SUPABASE_SERVICE_ROLE_KEY");
    if (!dstUrl) throw new Error("EXTERNAL_SUPABASE_URL not configured");
    if (!dstKey) throw new Error("EXTERNAL_SUPABASE_SERVICE_ROLE_KEY not configured");

    const src = createClient(srcUrl, srcKey);
    const dst = createClient(dstUrl, dstKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Fetch all submissions from source
    const { data: submissions, error: fetchErr } = await src
      .from("quiz_submissions")
      .select("*")
      .order("created_at", { ascending: true });

    if (fetchErr) throw new Error(`Fetch error: ${fetchErr.message}`);
    if (!submissions || submissions.length === 0) {
      return new Response(
        JSON.stringify({ success: true, synced: 0, message: "No submissions to sync" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Upsert into destination (assumes same table schema exists there)
    const { error: upsertErr, count } = await dst
      .from("quiz_submissions")
      .upsert(submissions, { onConflict: "id", count: "exact" });

    if (upsertErr) throw new Error(`Upsert error: ${upsertErr.message}`);

    return new Response(
      JSON.stringify({ success: true, synced: count ?? submissions.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Sync error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
