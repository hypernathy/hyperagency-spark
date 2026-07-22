# BRIEFING GPT (deep work) — Collaboration projet UNV

**Prompt prêt à coller dans un chat GPT dédié. Répartition des rôles pour éviter les doublons avec Claude.**

---

## Répartition Claude ↔ GPT (pour ne pas payer deux fois le même travail)

| Domaine | Owner | Pourquoi |
|---|---|---|
| Workflows n8n (build + modifs) | **Claude** | MCP connecté à ton instance n8n — construit/valide/déploie en direct |
| Emails (drafts Gmail), Drive, calendrier | **Claude** | Outils connectés à tes comptes |
| Repo GitHub (fichiers projet, versionning) | **Claude** | Push direct sur la branche |
| Validation de la doc /agent vs contrat d'intégration | **Claude** | A construit les workflows, applique les corrections directement |
| **Red-team / QA des livrables** | **GPT** | Regard neuf, cherche les failles des textes nLPD, du contrat d'intégration, des messages bot |
| **Script de la séance comité** (démo 4-7 août) | **GPT** | Narration, déroulé minute par minute, anticipation objections comité 60-75 ans |
| **Polish copy FR** (relectures fines, variantes) | **GPT** | Itérations rapides de reformulation |
| **Recherche** (Wassenger QR vs Cloud API, limites, prix, risques ban) | **GPT** | Navigation web libre |
| Visuels IA (prompts Midjourney/DALL-E) | **GPT** ou Claude | Au choix selon où tu génères |

**Règle d'or : GPT produit du texte/de l'analyse → tu colles le résultat à Claude → Claude intègre dans le repo/les workflows.** Jamais deux outils qui modifient la même chose.

---

## Prompt à coller dans GPT (copier tout le bloc)

```
Tu rejoins un projet en cours comme consultant QA + stratège. Contexte :

PROJET : Refonte digitale de l'Union Nautique de Vidy (UNV), club nautique
lausannois fondé en 1962, ~100 membres, comité bénévole senior (60-75 ans).
- Site WordPress refondu par Pedro (Garcan Digital) — staging privé en cours
- Agent WhatsApp construit par Nathalie (HyperAgency) : bot button/keyword-driven
  via Wassenger + n8n (4 flux : annonces événements, router bot avec statut de
  cotisation par code personnel, rappels J-7/J-1, alerte hebdo trésorier)
- Mise en ligne : 15 août 2026. Séance de démo au comité visée semaine du 4 août.
- Contrainte légale : conformité nLPD suisse complète dès le jour 1
  (sanctions personnelles jusqu'à CHF 250'000 sur le comité).
- Ton de marque : chaleureux, maritime, sobre. Vouvoiement. Pas de jargon
  corporate. Signature « UNV ⚓ ». Public senior → simplicité absolue.

REFERENTIEL : le repo GitHub hypernathy/hyperagency-spark, branche
claude/research-unv-2E2FG, dossier unv-deliverables/ contient tous les
livrables (ton de voix, nLPD, copy 10 pages, templates WhatsApp, contrat
d'intégration API, sprint plan). Je te collerai les fichiers pertinents.

TES MISSIONS (une à la fois, je te dirai laquelle) :
1. RED-TEAM : critiquer un livrable que je te colle — failles juridiques
   nLPD, ambiguïtés, formulations faibles, cas limites oubliés. Format :
   liste priorisée (critique/important/mineur) avec correction proposée.
2. SCRIPT DEMO COMITÉ : déroulé minute par minute d'une séance de 45 min
   présentant le nouveau site + le bot WhatsApp en live à un comité senior.
   Inclure : accroche, démo guidée, moment « wow » (le bot répond en direct),
   objections probables + réponses, call-to-action final.
3. RECHERCHE : questions techniques ponctuelles (ex : limites réelles du mode
   passerelle QR de Wassenger vs WhatsApp Cloud API — risques de ban, volumes
   sûrs, bonnes pratiques anti-spam pour ~100 destinataires opt-in).
4. POLISH : variantes de formulation pour messages bot / emails / pages.

Règles : réponds en français. Ne réinvente pas ce qui existe — améliore.
Signale ce qui te semble faux ou risqué même si je ne le demande pas.
Commence par me confirmer le contexte en 3 lignes, puis attends ta première mission.
```

---

## Premières missions suggérées pour GPT (dans l'ordre de valeur)

1. **Recherche Wassenger QR vs Cloud API** — c'est LA décision technique de la semaine (démarrer sans Meta vs attendre la vérification). Un second avis documenté vaut de l'or avant la visio Pedro.
2. **Red-team du contrat d'intégration** (colle `01-integration-contract-agent.md` + la doc /agent de Pedro une fois récupérée) — GPT cherche les cas limites : timeouts, doublons de webhook, codes membres partagés, RGPD des numéros de téléphone dans les logs n8n.
3. **Script séance comité** — à faire cette semaine pour caler la date avec Pedro et Eric (6-7.08).
4. **Red-team de la politique de confidentialité** avant publication au 15.08.
