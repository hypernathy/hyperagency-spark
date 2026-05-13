# Deep research prompts — Sprint 1 unblock

**Purpose:** Two foundational research questions whose answers shape the Nixum Sprint 1 build. To be fired in parallel via Codex and Perplexity. Findings come back into this repo as `docs/research/anac-bdncp-findings.md` and `docs/research/firma-digitale-findings.md` for ingestion by the NIXUM build session.

**Status:** Prompts drafted 2026-05-13. Findings pending.

---

## Prompt 1 — ANAC BDNCP API (run via Codex)

**Goal:** Validate that Nixum can integrate ANAC (Banca Dati Nazionale dei Contratti Pubblici) programmatically. This answers whether we can replicate and surpass Cato's "ChatGPT-like ANAC-aware chat" feature, at what cost and freshness SLA, and what schema we should design our internal data model around.

**Run this prompt:**

```
Conduct a thorough technical research on the public APIs and open datasets
exposed by ANAC (Autorità Nazionale Anticorruzione, Italy) for accessing
public procurement data (BDNCP — Banca Dati Nazionale dei Contratti
Pubblici).

I need a structured report covering:

1. ENDPOINTS
   - Full list of public REST / SOAP / OData / SPARQL endpoints actually
     reachable today (URLs verified, not speculative).
   - For each: HTTP method, path, query parameters, expected response shape.
   - Authentication model: open / API key / OAuth2 / mutual TLS / certificate?
   - Rate limits: requests per second, per day, per IP, per token.
   - Data freshness SLA: how often is the source updated, how delayed is the
     API vs the underlying source.

2. ENTITIES OF INTEREST (priority order)
   - Gare / procedure / appalti — active and historical, with full requisiti
     and atti documents.
   - Piani Triennali OO.PP. (programmi triennali opere pubbliche) per ente.
   - Profilo operatore economico (given P.IVA, return participation history,
     ribassi praticati, ribasso medio, top stazioni appaltanti, win rate).
   - Sentenze TAR / Consiglio di Stato / pareri ANAC, especially in
     materia di lavori pubblici (Codice 36/2023).
   - SOA — public registry of imprese qualificate, with categorie and
     classifiche (if exposed by ANAC or by OdA SOA).
   - Stazioni appaltanti (IPA index) — anagrafica.

3. DATA FORMATS
   - JSON Schema or OpenAPI spec URLs if published.
   - XML schema for DGUE compliance.
   - CSV/Parquet bulk download endpoints (dati.anticorruzione.it
     open data section).

4. MCP / AGENTIC ACCESS
   - Does ANAC expose an MCP server today?
   - Are there community MCP wrappers (e.g. on github) for BDNCP?
   - If not, what would building one require — auth handling, rate
     limit mediation, caching layer?

5. GOTCHAS / COMMUNITY KNOWLEDGE
   - Known stability issues, deprecated endpoints, undocumented behaviour.
   - Italian dev community discussions (forum.italia.it, github org ANAC,
     LinkedIn posts by ANAC tech team).
   - Real-world projects already consuming BDNCP at scale (open source
     or commercial — Cato itself, appalti.guru, openparlamento, etc.).

6. WORKING CODE
   - One concrete Python or TypeScript example: given a P.IVA, fetch the
     operator's last 12 months of partecipazioni e aggiudicazioni, with
     pagination handled. Use only verified endpoints.

Sources to consult:
- dati.anticorruzione.it (open data portal)
- anticorruzione.it (institutional site, sezione "Servizi" / "Sviluppatori")
- github.com/anac-IT or any official ANAC github presence
- forum.italia.it Developers Italia threads
- Italian government developer docs (developers.italia.it)
- Cato's own product (their "chat ANAC-aware" demonstrates what's possible)
- Recent (2024–2026) academic or industry papers on Italian e-procurement

Output format:
- Executive summary (200 words) — feasibility verdict, principal risks,
  recommended integration approach.
- Sections 1–6 above, in order, with verified URLs, code blocks, tables.
- Final section: gaps in publicly available info (what would require a
  request to ANAC's tech team or a procurement of paid API access).

Length: 2000–3500 words. No fluff. If a question has no answer in public
sources, say so explicitly — do not speculate.

When citing URLs, mark each with [VERIFIED-2026-05] if you actually
fetched it during this research, or [UNVERIFIED] if you only have it from
secondary references.
```

---

## Prompt 2 — Firma digitale + Marca temporale + PEC stack (run via Perplexity)

**Goal:** Build the cost model and integration roadmap for the Nixum submission-automation moat. Need to know what firma digitale qualificata, marca temporale qualificata, and PEC programmatic APIs cost across the four major Italian eIDAS-qualified providers.

**Run this prompt:**

```
Build a comparative analysis of the four major Italian eIDAS-qualified
Trust Service Providers (QTSP) for a SaaS product that needs to
programmatically sign documents, apply qualified timestamps, and send
certified email (PEC) at scale.

Providers in scope:
- Aruba (Aruba PEC + Aruba Firma)
- InfoCert
- Namirial
- Poste Italiane (PosteCert / Postemobile PEC)

For each provider, document:

1. FIRMA DIGITALE QUALIFICATA (QES — Qualified Electronic Signature)
   - API offered: REST / SOAP / WSDL endpoints.
   - Signing flows supported: server-side (HSM-based with delegated
     authority), client-side (with user device + OTP/CIE/SPID),
     remote signature (cloud HSM with user authorization).
   - Document formats: PAdES (PDF), CAdES (any), XAdES (XML, mandatory
     for DGUE envelopes).
   - Per-signature pricing: list price + volume tiers (50, 500, 5000 sig/mo).
   - Setup fees, certificate issuance costs, annual fees.
   - Onboarding requirements: KYC, identification method (in-person, video,
     SPID), time-to-active for a new firma.

2. MARCA TEMPORALE QUALIFICATA (QTSA — Qualified Timestamp Authority)
   - API endpoints.
   - Per-timestamp pricing + volume tiers.
   - Maximum lifetime of issued timestamps (typically 20 years for
     qualified ones in EU).
   - Bundle pricing if bought with firma digitale.

3. PEC PROGRAMMATICA (Certified Email)
   - Programmatic API for sending and receiving.
   - Pricing per message sent / received, monthly minimum if any.
   - Storage retention included.
   - Domain options: pec.it / legalmail.it / @<custom-domain> via reseller.

4. RELIABILITY & SLA
   - Published uptime SLA.
   - Support tiers, response times.
   - Italian vs English-language developer docs.
   - Community sentiment (dev forums, reddit r/ItalyInformatica,
     stackoverflow.it, ItaliaOpen).

5. eIDAS QUALIFIED STATUS
   - Confirm presence on EU Trusted List (eIDAS QTSP register).
   - Date of qualification.
   - Cross-border recognition (EU-wide validity).

Output:
- Comparison table covering all four providers across all five dimensions,
  with concrete EUR figures (or ranges where pricing requires a sales
  contact) and explicit "see vendor for quote" notes where no public price
  exists.
- Recommendation section for a SaaS startup with the following profile:
    - Year 1 volume estimate: 50–500 firme/month, 50–500 marche temporali/
      month, 100–1000 PEC/month.
    - Need REST API (no SOAP-only solutions).
    - Italian eIDAS qualified mandatory.
    - Multi-tenant: each end customer is a separate operatore economico
      (the SaaS does NOT sign with its own identity — it orchestrates the
      end customer's firma).
  Recommend: primary provider, secondary fallback, total estimated cost
  for year 1 at 200 firme/month + 200 marche/month + 500 PEC/month.

- Integration complexity assessment (1–5 stars) for each provider
  based on dev docs quality and community evidence.

- Red flags or contractual gotchas to negotiate (auto-renewal, minimum
  commitments, exit clauses, data residency for PEC archives).

Sources: official provider pricing pages, AgID trust list, Italian
regulatory documents on eIDAS transposition (CAD — Codice
Amministrazione Digitale), recent (2024–2026) third-party reviews
in Italian dev community.

Length: 1500–2500 words. Hard data, no marketing copy.
```

---

## How to consume the findings

When Codex / Perplexity output comes back:

1. Paste the full output into the hyperagency-spark session (or share via a file).
2. That session synthesises into:
   - `docs/research/anac-bdncp-findings.md`
   - `docs/research/firma-digitale-findings.md`
3. Pull both into the NIXUM local workspace with the same PowerShell pattern:
   ```powershell
   $dir = "C:\Users\natha\Documents\OpenAI_Codex_NIXUM\context\from-hyperagency-spark"
   $base = "https://raw.githubusercontent.com/hypernathy/hyperagency-spark/claude/eurocogen-platform-analysis-jLrps/docs/research"
   Invoke-WebRequest "$base/anac-bdncp-findings.md"      -OutFile "$dir\anac-bdncp-findings.md"
   Invoke-WebRequest "$base/firma-digitale-findings.md"  -OutFile "$dir\firma-digitale-findings.md"
   ```
4. NIXUM build session uses findings to:
   - Choose ANAC integration approach (direct API / scrape / hybrid).
   - Lock provider for firma+marca+PEC.
   - Refine Sprint 1 day-by-day plan with real cost and complexity numbers.

---

## Out of scope for these two prompts

The following research items are **deliberately not** in this batch — they are either lower priority for Sprint 1, or better answered by direct vendor contact rather than web research:

- Infoplus 2026 pricing and export format (better: Umberto requests export sample from his Infoplus account).
- STR Vision / ACCA Primus integration APIs (Phase 2, not Sprint 1).
- Cassa Edile CNCE format and access (Phase 2, P3.2 of build backlog).
- Specific stazione appaltante submission APIs portal-by-portal (Sprint 2 — needs separate per-portal research, MEPA first).
- Supabase pgvector benchmarks at our scale (we'll measure ourselves once we have real document corpus).
