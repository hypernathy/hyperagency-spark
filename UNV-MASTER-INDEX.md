# 🧭 UNV — MASTER INDEX · Source de vérité unique

**Projet : Refonte digitale Union Nautique de Vidy · MEP 15 août 2026**
**Dernière mise à jour : 22 juillet 2026**

> ⚠️ **RÈGLE POUR TOUT COLLABORATEUR (humain ou IA — GPT/Sol inclus)** :
> Ce repo, branche `claude/research-unv-2E2FG`, est LA source de vérité du projet.
> Lecture libre. **Écriture : uniquement via Nathalie → Claude** (qui intègre et push).
> GPT/Sol produit analyses et textes → Nathalie les colle à Claude → Claude les versionne ici.
> Ne jamais travailler depuis une copie locale non synchronisée sans vérifier le dernier commit.

---

## 1. Où est quoi

### 📂 Dans CE repo (branche `claude/research-unv-2E2FG`)

| Chemin | Contenu |
|---|---|
| `UNV-MASTER-INDEX.md` | **Ce fichier** — index + état + décisions |
| `unv-deliverables/README.md` | Index des 12 livrables de juin + placeholders |
| `unv-deliverables/01-…-12-*.md` | Ton de voix · Impressum · Politique nLPD · RAT · Cookies · Copy 10 pages · Templates WhatsApp Meta · Emails transactionnels · Procédures nLPD · DPA · Formation Jacques · Guide utilisateur |
| `unv-deliverables/sprint-aout/00-SPRINT-PLAN-15AOUT.md` | Plan de sprint 4 semaines → MEP |
| `unv-deliverables/sprint-aout/01-integration-contract-agent.md` | Contrat d'intégration API site↔agent (hypothèses à valider vs doc /agent) |
| `unv-deliverables/sprint-aout/02-automation-blueprint.md` | Blueprint des 4 flux + décision n8n vs Make |
| `unv-deliverables/sprint-aout/03-reponse-pedro.md` | Email de réponse à Pedro (v2 avec URL webhook) |
| `unv-deliverables/sprint-aout/04-n8n-workflows-live.md` | Les 4 workflows déployés : IDs, URLs, config restante |
| `unv-deliverables/sprint-aout/05-checklist-review-staging.md` | Grille de review du staging en 15 min |
| `unv-deliverables/sprint-aout/06-gpt-collab-briefing.md` | Briefing GPT/Sol + répartition des rôles |
| `UNV_Pilot_Cockpit_Pedro_v1.html` | Cockpit interactif pilotage (dates de juin, à rafraîchir) |
| `UNV_Weekend_Sprint_Playbook.html` | Playbook sprint juin (historique) |
| `UNV_Brand_Book_v1.html` | **Brand book** : palette, typo, voix, iconographie, photo, applications |
| `UNV_Strategic_Addon_Proposal.html` | Proposition forfait stratégique HyperAgency (2'500/4'800/8'500 CHF) |

### ☁️ Dans le Google Drive de Nathalie (fichiers historiques mars-juin)

| Dossier / fichier | Contenu clé |
|---|---|
| Dossier « UNV — Refonte 2026 » | Dossier projet principal (mai) |
| `MASTER_AUDIT.md` | Audit complet 60 problèmes + audit interne WP |
| `UNV_DEV_HANDOFF_PEDRO.pdf/.md/.docx` | Handoff technique 15 points → stack → tasks |
| `CAHIER_DE_CHARGES_V2.md` | Analyse multi-angle des 15 points comité |
| `UNV_PROPOSITION_PEDRO.pdf` | Proposition formelle mai (pré-contrat) |
| `UNV_Site_Demo.html` | Prototype interactif (Open-Meteo live, GSAP) |
| `UNV_360_Cockpit.html` · `UNV_Decision_Interface.html` | Cockpit 13 sections · matrice 60 items votable |
| Dossier « Projet 1 - files shared from GARCAN » | **Contrat signé 11.06** (`offre_UNV_…_signed.pdf`) · facture acompte · 5 fichiers Banana `.ac2` |
| Dossier « Offre » (partagé par Pedro) | Offre de travail Pedro · présentation comité · pitch pptx |
| `STATUTS_UNV_200227.pdf` | Statuts officiels (pour vérification Meta) |

### ⚙️ Dans n8n (`connexaworld.app.n8n.cloud`, projet Nathalie)

| Flux | Workflow ID | Statut |
|---|---|---|
| A — Site → annonces événements | `6c1adymeeCp2kYjA` | 🟢 ACTIF — webhook live |
| B — Bot WhatsApp router | `p0RLX9RvRB5EilDf` | ⚪ prêt (attend Wassenger) |
| C — Rappels J-7/J-1 | `B4DGBJKS8UuottrN` | ⚪ prêt (attend credentials) |
| D — Alerte trésorier lundi | `TfVWHVQwjvveMZ53` | ⚪ prêt (attend endpoint summary) |

**URL webhook donnée à Pedro : `https://connexaworld.app.n8n.cloud/webhook/unv-events`**
**URL webhook pour Wassenger : `https://connexaworld.app.n8n.cloud/webhook/unv-whatsapp`**

### 📧 Emails clés (Gmail)

| Date | De/À | Objet |
|---|---|---|
| 11.06 | Pedro → info@unv.ch (cc Nathalie) | Offre + facture acompte (CHF 2'800 signé) |
| 11.06 | Pedro → Nathalie | Fw: UNV Trésorier (contact Claude-Alain + fichiers Banana) |
| **22.07** | **Pedro → hypernathy@** | **Staging + doc /agent + demande URL webhook** ← email actif |
| 22.07 | Draft V2 dans Gmail nathalie.luana | Réponse à Pedro (à envoyer depuis hypernathy@) |

---

## 2. Décisions verrouillées (ne pas rouvrir sans raison majeure)

1. **Stack site** : 100% WordPress + Gutenberg natif (pas Kadence Builder, pas Next.js) — contrat Pedro 11.06
2. **Contrat** : CHF 2'800 tout compris (site + espaces privés + agent WhatsApp), tarif famille, signé
3. **Stack agent** : Wassenger + n8n + Meta Cloud API — **n8n choisi contre Make** (buildable par Claude via MCP, instance Nathalie existante) ; Make = fallback documenté
4. **MEP : 15 août 2026** (reportée du 30.06 pour cause d'accès tardifs)
5. **Rôles** : Pedro = WordPress/infra/code site · Nathalie = tout WhatsApp/Meta/automations + créatif + nLPD + contenu
6. **Démo comité** : une seule séance site + bot en action, visée semaine du 4 août (Nathalie sur place 6-7.08)
7. **Eric absent jusqu'au 01.08** : non bloquant — Wassenger mode QR démarre sans Meta BM ; Facebook admin + CI/mandat à la réu 06-07.08
8. **Ton de voix / palette / typo** : verrouillés dans le Brand Book v1 (navy #0B1F3A · lake #2E7FA0 · red #D32F2F · gold #C8A44A · cream #F5F0E8 · Bodoni Moda + Inter · vouvoiement · signature « UNV ⚓ »)

## 3. Questions ouvertes (pour la visio Pedro — ven 25.07 ou lun 28.07)

- Header + algo de signature des webhooks (hypothèse : `x-unv-signature`, HMAC-SHA256)
- Format du code personnel membre + qui le génère + comment le membre le reçoit
- Endpoints manquants : `GET /events/{id}/attendees` et `GET /dues/summary`
- **RSVP par WhatsApp** (« Je viens / Peut-être / Non ») : pas encore de branche dans le Flux B — besoin du mécanisme de contexte événement (à caler avec Pedro)
- Environnements : token staging vs prod, procédure de bascule au 15.08

## 4. Actions en cours (22.07 soir)

- [ ] Nathalie : review staging (checklist 05) + coller la doc `/agent` à Claude
- [ ] Claude : valider/corriger les 4 workflows contre la doc réelle
- [ ] Nathalie : envoyer l'email V2 à Pedro depuis hypernathy@gmail.com
- [ ] GPT/Sol : Mission 3 — recherche Wassenger QR vs Cloud API (risques ban, volumes sûrs)
- [ ] Demain : Meta BM + vérification entreprise + compte Wassenger + soumission templates

## 5. Protocole de collaboration multi-IA

```
        ┌──────────────┐   analyses, scripts,     ┌──────────────┐
        │  GPT (Sol)   │──── recherches, QA ─────▶│   NATHALIE   │
        │  lecture     │                          │   (décide)   │
        └──────────────┘                          └──────┬───────┘
              ▲                                          │ colle les
              │ fichiers du repo                         │ conclusions
              │ (ZIP ou connector)                       ▼
        ┌─────┴────────────────────────────────────────────────┐
        │  CLAUDE — seul à écrire : repo, n8n, Gmail, Drive    │
        └──────────────────────────────────────────────────────┘
```

- **GPT ne peut physiquement rien écraser** : il n'a aucun accès en écriture. Le seul risque est le contexte périmé → toujours lui redonner les fichiers après un push de Claude (ou indiquer le hash du dernier commit).
- Un sujet = un owner. Vérifier ce tableau avant de lancer un travail : `unv-deliverables/sprint-aout/06-gpt-collab-briefing.md`
