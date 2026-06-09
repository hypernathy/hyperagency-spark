# hyperagency-spark — SPARK

**SPARK** — *AI Infrastructure for Cross-Border Businesses.* An AI companion app
(chat + HyperYou profiling journeys) with user accounts.

- **Stack:** Vite + React 18 + TypeScript + shadcn/ui + Tailwind · i18n (EN/FR/IT/PT)
- **Backend:** Supabase project `eyrxsrmjcadaaumzhvpy` (managed via Lovable Cloud) ·
  edge functions `spark-chat`, `sync-submissions`
- **Pages:** Auth · Dashboard · Profile · Admin · Quiz · NeurYou / CupidYou / HorsYou journeys

> 📐 **Agents & contributors: read [`CLAUDE.md`](CLAUDE.md) first.** It covers orientation,
> brand discipline, and two open cross-repo questions: (1) the quiz-code overlap with
> `hyperyou-systems`, and (2) the "HyperAgency" vs "Connexa" brand-naming reconciliation.

## Commands

```sh
npm install      # setup
npm run dev      # local dev server
npm run build    # production build
npx vitest run   # tests
```

> `package.json` name is still the Lovable default (`vite_react_shadcn_ts`) —
> rename to `hyperagency-spark` when MCP scope allows.
