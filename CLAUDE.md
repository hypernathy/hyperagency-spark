# 🤖 CLAUDE.md — instructions auto-chargées · hyperagency-spark

> Lu à chaque session ouverte dans ce repo. **Point d'entrée canonique.**
> Repo = **SPARK** : l'app "compagnon IA". ⚠️ Lire la section **Chevauchement & questions ouvertes** : ce repo partage du code avec `hyperyou-systems` — ne pas dupliquer aveuglément.

## 🏢 Le projet en 30 secondes
- **SPARK by HyperAgency** — *« AI Infrastructure for Cross-Border Businesses »* · compagnon IA (chat `spark-chat`) + parcours de profilage **HyperYou** intégrés (NeurYou / CupidYou / HorsYou).
- App à comptes : `Auth` · `Dashboard` · `Profile` · `Admin` · `Quiz`.
- **Supabase** : projet `eyrxsrmjcadaaumzhvpy` (⚠️ **différent** de hyperyou-systems `pddbftpsdozyasxitpqy`) · géré via **Lovable Cloud**.
- **Langues** : EN · FR · IT · PT (`src/i18n/translations/`). Garder les 4 en sync.

## 🧱 Stack
- **Vite + React 18 + TypeScript + shadcn/ui** (Tailwind) · i18n custom (`src/i18n`).
- `package.json` name = `vite_react_shadcn_ts` (défaut Lovable — **à renommer `hyperagency-spark`** quand le scope MCP le permet).
- `supabase/functions/` : `spark-chat` · `sync-submissions`. Intégration `src/integrations/lovable/`.

## 📂 Repères dans `src/`
- `pages/` : `Index` · `Auth` · `Dashboard` · `Profile` · `Admin` · `Quiz` · `NeuryouIndex` · `CupidoIndex` · `CavalloIndex`.
- `components/` : `cupido/` · `cavallo/` · `dashboard/` · `motion/` · `ui/` (shadcn — ne pas éditer à la main).
- `data/` : quiz data + gender overlays (cupido/cavallo) en 4 langues.
- `integrations/supabase/` : client + types **auto-générés** (ne pas éditer).

## ✅ Réconciliation cross-repo — TRANCHÉ (CONNEXA-HQ D-014 · 2026-06-09)
1. **Quiz HyperYou = source unique `hyperyou-systems`.** Les parcours `neuryou`/`cupido`/`cavallo` (internes : `neuro`/`cupido`/`cavallo`) existent dans les 2 repos (Supabase différents : ici `eyrxsrmjcadaaumzhvpy`, HyperYou `pddbftpsdozyasxitpqy`). **`hyperyou-systems` fait foi pour le contenu quiz. Ici on REFLÈTE / synchronise — ne plus éditer le contenu quiz dans ce repo** (sinon on re-diverge). SPARK reste un produit distinct (compagnon IA + comptes).
2. **Marque = « SPARK by Connexa ».** « HyperAgency » est **retiré** (D-007 + D-014 : l'agence = Connexa, jamais HyperAgency). **Appliqué 2026-06-09** : 34 occurrences `HyperAgency → Connexa` (translations 4 langues, sparkPrompt, edge fn `spark-chat`, Auth, manifest, index.html). Le sprint B2B = « Connexa Strategy Sprint ». (Renommage du *repo* différé pour continuité MCP.)
   - ⚠️ **À trancher** : le domaine **`hyperagency.ch`** subsiste dans les footers (`translations.ts`) — laissé tel quel car je ne devine pas ton domaine Connexa. Donne-le et je remplace.

## 🎨 Brand / design (hérité de l'univers HyperYou)
- Dark luxury : near-black ink, cream, accents **gold** + **violet**. Coins nets (radius 0). Pas de drop-shadows.
- Typo : `DM Serif Display` (display) + `DM Sans` (sans). **Tokens sémantiques only** — pas de hex brut dans le JSX.
- Discipline de marque : **NeurYou™ / CupidYou™ / HorsYou™** = lignes produit ; ne pas les confondre. (Réf. complète : `hyperyou-systems/CLAUDE.md`.)

## 🔄 Workflow Git
- Branche `claude/<sujet>` → **PR vers `main`**. `npm run dev` · `npm run build` · `vitest run` avant push.
- Lovable auto-sync : **pull avant d'éditer, push après commit**. Ne jamais committer de secret (Lovable secrets manager).
- Ne pas éditer : `src/integrations/supabase/*`, `src/components/ui/*`, `.env`, `supabase/config.toml` (project_id).

## 🎯 Owner
**Nathalie (Connexa)** — founder.

*(1) et (2) tranchés le 2026-06-09 → `CONNEXA-HQ/_SYSTEM/DECISIONS.md` D-014.*
