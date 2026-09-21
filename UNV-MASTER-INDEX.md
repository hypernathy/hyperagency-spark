# 🧭 UNV — MASTER INDEX · Source de vérité unique

**Projet : Refonte digitale Union Nautique de Vidy · Volet 3 — agent WhatsApp « Neptune »**
**Échéance active : formation comité 28 ou 30.09.2026**
**Dernière mise à jour : 21 septembre 2026**

> ⚠️ **RÈGLE POUR TOUT COLLABORATEUR (humain ou IA — GPT/Sol inclus)** :
> Ce repo, branche `claude/research-unv-2E2FG`, est LA source de vérité du projet.
> Lecture libre. **Écriture : uniquement via Nathalie → Claude** (qui intègre et push).
> GPT/Sol produit analyses et textes → Nathalie les colle à Claude → Claude les versionne ici.
> Ne jamais travailler depuis une copie locale non synchronisée sans vérifier le dernier commit.

---

## 0. À lire en premier

1. `CLAUDE.md` — mémoire projet : contexte verrouillé, état réel, conventions
2. **`unv-deliverables/sprint-sept/01-contrat-integration-FINAL.md`** — **LA référence API**, transcrite de la page `/agent` réelle de Pedro. Remplace toutes les hypothèses de juillet.
3. Ce fichier — index + décisions + actions

---

## 1. Où est quoi

### 📂 Dans CE repo (branche `claude/research-unv-2E2FG`)

| Chemin | Contenu |
|---|---|
| `CLAUDE.md` | Mémoire projet — à lire au début de chaque session |
| `UNV-MASTER-INDEX.md` | **Ce fichier** — index + état + décisions |
| `unv-deliverables/README.md` | Index des 12 livrables de juin |
| `unv-deliverables/01-…-12-*.md` | Ton de voix · Impressum · Politique nLPD · RAT · Cookies · Copy 10 pages · Templates WhatsApp Meta · Emails transactionnels · Procédures nLPD · DPA · Formation Jacques · Guide utilisateur |
| `unv-deliverables/sprint-aout/00-SPRINT-PLAN-15AOUT.md` | Plan de sprint 4 semaines (historique — MEP repoussée) |
| `unv-deliverables/sprint-aout/01-integration-contract-agent.md` | ⚠️ **Périmé** — hypothèses de juillet, remplacé par `sprint-sept/01` |
| `unv-deliverables/sprint-aout/02-automation-blueprint.md` | Blueprint des 4 flux + décision n8n vs Make |
| `unv-deliverables/sprint-aout/03-reponse-pedro.md` | Email de réponse à Pedro (juillet) |
| `unv-deliverables/sprint-aout/04-n8n-workflows-live.md` | Les 4 workflows déployés : IDs, URLs, config restante |
| `unv-deliverables/sprint-aout/05-checklist-review-staging.md` | Grille de review du staging en 15 min |
| `unv-deliverables/sprint-aout/06-gpt-collab-briefing.md` | Briefing GPT/Sol + répartition des rôles |
| **`unv-deliverables/sprint-sept/01-contrat-integration-FINAL.md`** | **Contrat d'intégration définitif — source de vérité API** |
| `unv-deliverables/sprint-sept/02-SYNTHESE-PEDRO-17sept.html` | One-pager client : preuves d'avancement, maquettes WhatsApp, demandes |
| `unv-deliverables/sprint-sept/03-email-pedro-webhook.md` | **Email à envoyer à Pedro** : URL webhook + 4 demandes |
| `unv-deliverables/sprint-sept/04-parcours-optin-et-catalogue.md` | Parcours d'opt-in double consentement + catalogue des 15 capacités |
| `unv-deliverables/sprint-sept/POINT-ETAPE-PEDRO-17sept.html` | One-pager de la réunion du 17.09 |
| `UNV_Brand_Book_v1.html` | **Brand book** : palette, typo, voix, iconographie, photo, applications |
| `UNV_Strategic_Addon_Proposal.html` | Proposition forfait stratégique (2'500/4'800/8'500 CHF) |
| `UNV_Pilot_Cockpit_Pedro_v1.html` · `UNV_Weekend_Sprint_Playbook.html` | Cockpit + playbook de juin (historique) |

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
| Dossier « Projet 1 - files shared from GARCAN » | **Contrat signé 11.06** · facture acompte · 5 fichiers Banana `.ac2` |
| Dossier « Offre » (partagé par Pedro) | Offre de travail Pedro · présentation comité · pitch pptx |
| `STATUTS_UNV_200227.pdf` | Statuts officiels (pour vérification Meta) |

### ⚙️ Dans n8n (`connexaworld.app.n8n.cloud`, projet `Nzl6gEv1rnE0XpgN`)

| Flux | Workflow ID | Statut au 21.09 |
|---|---|---|
| A — Site → annonce d'événement | `6c1adymeeCp2kYjA` | 🟢 ACTIF · 9 nœuds · écriture `unv_events` en série avant diffusion · testé |
| B — Routeur WhatsApp | `p0RLX9RvRB5EilDf` | ⚪ prêt · 31 nœuds · 11 intentions (opt-in, STOP, RSVP, nombre) · **filtre liste blanche actif (numéro de Pedro uniquement)** · testé |
| C — Rappels J-7/J-1 | `B4DGBJKS8UuottrN` | ⚪ prêt · source `unv_events`, ciblage `unv_optin` × `unv_rsvp` · testé |
| D — Alerte trésorier lundi | `TfVWHVQwjvveMZ53` | ⚪ en attente de l'endpoint agrégé de Pedro |

Détail du build et des 6 tests d'intégration : `unv-deliverables/sprint-sept/05-etat-des-flux-et-tests.md`

| Data Table | ID | Rôle |
|---|---|---|
| `unv_events` | `sBX0OwkaE3FMIJzj` | Registre local des événements publiés |
| `unv_rsvp` | `qqeMroc44duHoXbt` | Réponses des membres (viens / peut_être / non) |
| `unv_optin` | `hpgxKcSQ9LQqjH0M` | Numéros ayant activé les notifications |

**URL webhook pour Pedro : `https://connexaworld.app.n8n.cloud/webhook/unv-events`**
**URL webhook pour Wassenger : `https://connexaworld.app.n8n.cloud/webhook/unv-whatsapp`**

### 📧 Emails clés (Gmail)

| Date | De/À | Objet |
|---|---|---|
| 11.06 | Pedro → info@unv.ch (cc Nathalie) | Offre + facture acompte (CHF 2'800 signé) |
| 11.06 | Pedro → Nathalie | Fw: UNV Trésorier (contact Claude-Alain + fichiers Banana) |
| 22.07 | Pedro → hypernathy@ | Staging + doc /agent + demande URL webhook |
| 10.09 | Pedro → hypernathy@ | Reprise · Sophia en coordination · dates de formation comité |

⚠️ Pedro écrit à **hypernathy@gmail.com**. Le connecteur Gmail de la session est branché sur **nathalie.luana.jungi@gmail.com** → transférer manuellement.

---

## 2. Décisions verrouillées (ne pas rouvrir sans raison majeure)

1. **Stack site** : 100% WordPress + Gutenberg natif — contrat Pedro 11.06
2. **Contrat** : CHF 2'800 tout compris · Volet 3 (agent WhatsApp) = CHF 1'300, périmètre Nathalie
3. **Stack agent** : **n8n** (instance Nathalie) + **Wassenger** + Meta portfolio business au nom de l'UNV. Make.com mentionné au contrat = détail d'implémentation. Sans vérification Meta : 250 contacts/24h, suffisant pour ~100 membres.
4. **Échéance** : formation comité **28 ou 30.09.2026** (~17h30, au club) — l'agent doit y être démontrable
5. **Périmètre MVP (28.09)** : PUSH uniquement — annonce d'événement · rappels J-7/J-1 · alerte hebdo trésorier. Le reste = Phase 2.
6. **Rôles** : Pedro = WordPress, infra, endpoints · Nathalie = tout WhatsApp/Meta/automations + créatif + nLPD + contenu. On informe Pedro, on ne lui demande pas la permission.
7. **Nom public de l'agent : Neptune** ⚓
8. **Architecture : l'agent est sa propre base.** Le webhook alimente `unv_events`, les réponses alimentent `unv_rsvp`. Aucun polling du site. Validé par Pedro le 17.09.
9. **Opt-in : lien `wa.me` + auto-enregistrement** (voir `sprint-sept/04`). Supprime toute dépendance à un endpoint de liste côté site.
10. **Ton de voix / palette / typo** : verrouillés dans le Brand Book v1 (navy #0B1F3A · lake #2E7FA0 · red #D32F2F · gold #C8A44A · cream #F5F0E8 · Bodoni Moda + Inter · vouvoiement · signature « UNV ⚓ » · max ~80 mots par message)
11. **Bascule prod** (post-formation) : remplacer `unv.garcandigital.ch` → `unv.ch` dans les workflows, un seul point à la fois.

---

## 3. Chaînes de dépendances (ce qui bloque quoi)

**Chaîne Pedro** — débloque l'intégration site ↔ agent
```
Email du 21.09  →  token + secret  →  test webhook bout en bout
                →  format `date`   →  rappels J-7/J-1 exacts
                →  URL iCal        →  annonces complètes
                →  endpoint retards →  Flux D opérationnel
```

**Chaîne Éric** — débloque l'envoi vers les membres
```
Admin page Facebook UNV  →  portfolio business Meta au nom de l'UNV
                         →  templates soumis (24-48 h par template)
Numéro dédié (fixe Club House ou SIM prépayée)
                         →  liaison Wassenger  →  photo + nom de profil Neptune
                         →  numéro définitif dans le lien `wa.me` du site
```

Les deux chaînes sont **indépendantes**. L'email à Pedro part sans attendre Éric.

---

## 4. Actions en cours (21.09)

### Nathalie
- [ ] **Envoyer l'email à Pedro** (`sprint-sept/03`) depuis hypernathy@gmail.com — prioritaire
- [ ] Demander token + secret à Pedro **par WhatsApp** (jamais par email)
- [ ] Confirmer la date de formation auprès de Sophia (28 ou 30.09)
- [ ] Relancer Éric : admin page Facebook UNV + numéro fixe du Club House
- [ ] Créer les credentials n8n : « Wassenger API » (header `Token`) et « UNV Site API » (header `X-UNV-API-Token`)
- [ ] Désactiver la suppression automatique des chats dans Wassenger (592/600)

### Claude
- [x] Flux A : écriture dans `unv_events` (en série, avant la diffusion)
- [x] Flux B : branches opt-in / STOP / RSVP / nombre de personnes
- [x] Flux C : rebranché sur les Data Tables
- [x] Data Table `unv_optin` créée
- [x] 6 tests d'intégration exécutés · 2 défauts trouvés et corrigés
- [ ] Réviser les 10 templates Meta (réponse cotisation minimale, lien iCal)
- [ ] Supprimer les lignes de test des Data Tables avant la démo

### En attente
- Flux D : endpoint agrégé « cotisations en retard » de Pedro
- Numéro définitif → placeholder `41XXXXXXXXX` dans le lien `wa.me`

---

## 5. Points encore ouverts

- **Numéro fixe du Club House** — inconnu. Manque aussi pour l'Impressum et la page Contact. À obtenir d'Éric. WhatsApp Business accepte la vérification d'un fixe par appel vocal → candidat sérieux pour le numéro de Neptune.
- **Composition exacte du comité** — Laurence Chapalay n'apparaît plus dans les échanges récents ; Nicole et Sophia apparaissent dans l'email du 10.09. Sophia = assistante/coordinatrice de Pedro, pas membre du comité. À clarifier avant la formation (le brief formation et les procédures nLPD nomment encore Laurence au secrétariat).
- **Date de formation** : 28 ou 30.09 — non tranchée.

---

## 6. Protocole de collaboration multi-IA

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

- **GPT ne peut physiquement rien écraser** : aucun accès en écriture. Le seul risque est le contexte périmé → lui redonner les fichiers après chaque push (ou indiquer le hash du dernier commit).
- Un sujet = un owner. Vérifier `unv-deliverables/sprint-aout/06-gpt-collab-briefing.md` avant de lancer un travail.
- **Secrets : jamais dans le repo.** Token et secret vivent uniquement dans les credentials n8n.
