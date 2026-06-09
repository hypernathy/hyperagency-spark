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

## ⚠️ Chevauchement & questions ouvertes (NE PAS inventer la réponse)
1. **Doublon de code quiz avec `hyperyou-systems`** : les parcours `neuryou`/`cupido`/`cavallo` (internes : `neuro`/`cupido`/`cavallo`) existent **dans les deux repos**, sur **deux projets Supabase différents**. → Décision founder requise : lequel est canonique ? SPARK *importe-t-il* de HyperYou ou en est-il un fork assumé ? **En attendant : ne pas diverger davantage le contenu quiz.**
2. **Marque « HyperAgency »** : dans `CONNEXA-HQ` (D-007), l'agence de Nathy = **« Connexa »**, *jamais « HyperAgency »*. Le nom de ce repo/produit (« SPARK by HyperAgency ») est donc un **point de réconciliation de marque** ouvert. Ne pas propager « HyperAgency » comme nom d'agence sans validation.

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

*Une fois (1) et (2) tranchés, les inscrire ici et dans `CONNEXA-HQ/_SYSTEM/DECISIONS.md`.*
