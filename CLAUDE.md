# CLAUDE.md — Projet UNV · Agent WhatsApp

> **Toute session Claude sur ce repo : lire ce fichier puis `UNV-MASTER-INDEX.md` avant d'agir.**
> Dernière mise à jour : 17.09.2026

## Contexte verrouillé

- **Client** : Union Nautique de Vidy (club nautique, Lausanne, ~100 membres, comité senior)
- **Prestataire site** : Pedro Garcia / Garcan Digital — WordPress en préprod `unv.garcandigital.ch` (mdp aperçu : `unv2026`)
- **Nathalie** = Volet 3 de l'offre signée 11.06.2026 : **agent WhatsApp + automatisations** (CHF 1'300/2'800)
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

## Modifications workflows (spécifiées dans `sprint-sept/01-…FINAL.md`)

**✅ APPLIQUÉES le 17.09 via MCP n8n (connecteur revenu) :**
- **A** : payload plat · vérif secret = comparaison header `X-UNV-WA-Secret` (nœud renommé « Vérifier Secret Webhook », secret placeholder `REMPLACER_PAR_SECRET_PEDRO` à coller) · annonce avec rsvp_hint + placeholder `[URL_ICAL_A_CONFIRMER]`
- **B** : `GET /wp-json/unv/v1/cotisation?membre_key=` · auth passée en Header Auth (credential à lier au token Pedro) · réponse cotisation minimale nLPD · menu signé **Neptune** (nom public adopté) · nœud événements pointé sur `/unv/v1/events` (endpoint promis)
- **Data Tables créées** : `unv_events` (sBX0OwkaE3FMIJzj) · `unv_rsvp` (qqeMroc44duHoXbt)

**✅ APPLIQUÉES le 21.09 — build terminé, testé en exécution réelle (voir `sprint-sept/05-etat-des-flux-et-tests.md`) :**
- **A** : write `unv_events` (upsert sur event_id) **en série, avant** la diffusion — un échec Wassenger ne doit pas empêcher l'enregistrement
- **B** : 6 nouvelles intentions (11 sorties au routeur) — activation opt-in, STOP, RSVP viens/peut-être/non, nombre de personnes. Le « à combien ? » se résout via `unv_rsvp` : pas de session, le registre local fait mémoire.
- **C** : source = `unv_events`, ciblage = `unv_optin` × `unv_rsvp`. L'appel à `/events/upcoming` (endpoint inexistant) est supprimé.
- **Data Table créée** : `unv_optin` (hpgxKcSQ9LQqjH0M) — phone · actif · date_optin · source
- **Corrigé grâce aux tests** : write en parallèle du broadcast (A, jamais exécuté en cas d'échec d'envoi) · connexion directe en doublon (C, rappel envoyé deux fois)

## Décision comptes (21.09) — tout sur les comptes Nathalie, bascule après la formation

n8n, Wassenger et le numéro restent sur les comptes personnels de Nathalie jusqu'à la formation du comité. La bascule vers des comptes au nom de l'UNV (Wassenger facturé au club ~CHF 30/mois comme prévu au contrat, numéro dédié, continuité n8n) se fait **après**, en une seule passe. Conséquence à annoncer à Pedro : les URLs et le numéro changeront une fois.

⚠️ Deux clauses du contrat restent ouvertes tant que la bascule n'est pas faite : « numéro dédié distinct des numéros privés du comité » et compte Wassenger « au nom de l'UNV ». Voir `sprint-sept/06-checklist-contractuelle-volet3.md`.

**⏳ RESTE :**
- **D** : attendre l'endpoint agrégé de Pedro
- Supprimer les lignes de test des 3 Data Tables avant la démo (`event_id` 998 et 999)
- Côté Nathalie : credentials « Wassenger API » (Header `Token`) + « UNV Site API » (Header `X-UNV-API-Token`, dès token reçu) · webhook Wassenger `message:in:new` → `/webhook/unv-whatsapp` · activer B et C
- Retirer le filtre « Liste blanche (test) » du Flux B une fois un numéro dédié relié

## Conventions

- Ton de voix : `unv-deliverables/01-ton-de-voix-unv.md` (vouvoiement, chaleureux, maritime, signature « UNV ⚓ », max ~80 mots par message WhatsApp)
- Un seul écrivain : Claude (repo, n8n, Gmail, Drive). GPT/Sol = lecture + analyses via Nathalie (`sprint-aout/06-gpt-collab-briefing.md`)
- Secrets : jamais dans le repo — credentials n8n uniquement
- Bascule prod (post-formation) : remplacer `unv.garcandigital.ch` → `unv.ch` dans les workflows (un seul point à la fois)
