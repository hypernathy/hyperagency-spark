# CLAUDE.md — Projet UNV · Agent WhatsApp

> **Toute session Claude sur ce repo : lire ce fichier puis `UNV-MASTER-INDEX.md` avant d'agir.**
> Dernière mise à jour : 17.09.2026

## Contexte verrouillé

- **Client** : Union Nautique de Vidy (club nautique, Lausanne, ~100 membres, comité senior)
- **Prestataire site** : Pedro Garcia / Garcan Digital — WordPress en préprod `unv.garcandigital.ch` (mdp aperçu : `unv2026`)
- **Nathalie (HyperAgency)** = Volet 3 de l'offre signée 11.06.2026 : **agent WhatsApp + automatisations** (CHF 1'300/2'800)
- **Répartition** : l'agent, ses messages, ses scénarios = périmètre Nathalie (on informe Pedro, on ne demande pas). Pedro = site + endpoints.
- **Échéance** : formation comité **28 ou 30.09.2026** (~17h30, au club, coordinatrice : Sophia) — l'agent doit y être démontrable
- **MVP (28.09)** = PUSH uniquement : ① annonce nouvel événement (webhook site, avec lien iCal + rsvp_hint) ② rappels J-7/J-1 ③ alerte hebdo trésorier. **Phase 2** = menu 3 boutons (prochain événement / cotisation par code / contact comité) + éventuel « météo du lac » (endpoints publics bonus, hors offre)
- **Stack** : **n8n** (instance `connexaworld.app.n8n.cloud`, projet perso Nathalie) + **Wassenger** (compte créé 17.09, essai démarre au lien du numéro) + Meta portfolio business **au nom de l'UNV** (page Facebook existante ; sans vérification : 250 contacts/24h, suffisant). Make.com mentionné au contrat = détail d'implémentation, n8n choisi (workflows déjà construits).
- **nLPD** : opt-in obligatoire via l'onglet Consentements de l'espace membre du site · opt-out STOP · templates pré-approuvés Meta

## État réel (17.09.2026)

- ✅ 4 workflows n8n déployés (22.07) : A annonce (ACTIF, webhook `https://connexaworld.app.n8n.cloud/webhook/unv-events`) · B router (`/webhook/unv-whatsapp`) · C rappels · D trésorier — **à adapter aux formats réels** (voir ci-dessous)
- ✅ Doc `/agent` de Pedro capturée et transcrite → **`unv-deliverables/sprint-sept/01-contrat-integration-FINAL.md`** (source de vérité API : auth `X-UNV-API-Token`, secret retour `X-UNV-WA-Secret` comparaison simple, `GET /cotisation?membre_key=`, `POST /rsvp` (téléphone accepté), webhook payload PLAT avec `event_id/title/date/venue/url/rsvp_hint`)
- ✅ Pedro propose et on accepte : `GET /unv/v1/events?limit=3` + endpoint agrégé cotisations en retard
- ✅ 10 templates Meta rédigés (`unv-deliverables/07-…`) — à réviser : réponse cotisation minimale (pas de date/quittance), + lien iCal dans annonces
- ⏳ Attendus de Pedro : token + secret (par WhatsApp) · accès liste opt-in (non couvert par sa doc) · format `date` + URL iCal · les 2 endpoints promis
- ⏳ Eric : invitation page Facebook UNV (message envoyé) · idée à discuter : **le fixe du Club House comme numéro WhatsApp** (vérification par appel vocal possible avec WhatsApp Business)
- ⚠️ Connecteur n8n MCP : configuré côté claude.ai (`…/mcp-server/http`) mais pas encore visible en session — re-tester ; sinon guider Nathalie champ par champ dans l'UI

## Architecture décidée (17.09) — l'agent est sa propre base

Le webhook `event.published` alimente une Data Table locale `unv_events` ; les réponses RSVP WhatsApp (qui transitent par l'agent avant `POST /rsvp`) alimentent `unv_rsvp`. Rappels J-7/J-1 et « prochain événement » lisent **le local** — aucun polling du site.

## Modifications workflows à appliquer (spécifiées dans `sprint-sept/01-…FINAL.md`)

- **A** : payload plat · vérif = IF sur header `X-UNV-WA-Secret` · message + rsvp_hint + iCal · write `unv_events`
- **B** : auth Header `X-UNV-API-Token` (remplace Bearer) · `GET /cotisation?membre_key=` · réponse minimale · **+ branche RSVP** (mots-clés viens/peut-être/non → `POST /rsvp` avec téléphone, question « à combien ? » si viens) · write `unv_rsvp`
- **C** : source `unv_events`, cibles `unv_rsvp`
- **D** : attendre l'endpoint agrégé de Pedro

## Conventions

- Ton de voix : `unv-deliverables/01-ton-de-voix-unv.md` (vouvoiement, chaleureux, maritime, signature « UNV ⚓ », max ~80 mots par message WhatsApp)
- Un seul écrivain : Claude (repo, n8n, Gmail, Drive). GPT/Sol = lecture + analyses via Nathalie (`sprint-aout/06-gpt-collab-briefing.md`)
- Secrets : jamais dans le repo — credentials n8n uniquement
- Bascule prod (post-formation) : remplacer `unv.garcandigital.ch` → `unv.ch` dans les workflows (un seul point à la fois)
