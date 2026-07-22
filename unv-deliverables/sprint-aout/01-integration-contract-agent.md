# CONTRAT D'INTÉGRATION · Site UNV ↔ Agent WhatsApp

**Version 0.9 — DRAFT à valider contre la doc officielle `https://unv.garcandigital.ch/agent`**
**⚠️ Les schémas ci-dessous sont des hypothèses de travail alignées sur l'email Pedro du 22.07. Chaque bloc marqué `[HYPOTHÈSE]` doit être confirmé ou corrigé après lecture de la doc `/agent`.**

---

## Vue d'ensemble

```
┌──────────────────────┐         webhook push (event publié)        ┌──────────────────────┐
│   SITE UNV (WP)      │ ─────────────────────────────────────────▶ │  AUTOMATION LAYER    │
│  unv.garcandigital.ch│                                            │  (n8n ou Make)       │
│  → prod : unv.ch     │ ◀───────────────────────────────────────── │  webhook Nathalie    │
│                      │    REST pulls (cotisation, events, RSVP)   └─────────┬────────────┘
│  Auth : Bearer token │                                                      │
└──────────────────────┘                                                      ▼
                                                                    ┌──────────────────────┐
                                                                    │  WASSENGER           │
                                                                    │  WhatsApp Cloud API  │
                                                                    │  Bot button-driven   │
                                                                    └─────────┬────────────┘
                                                                              │
                                                                              ▼
                                                                       Membres UNV (~100)
```

**Échange de clés (confirmé par email Pedro)** :
- Nathalie fournit → **URL de webhook** (générée par la couche automation)
- Pedro fournit → **token** (auth des appels sortants vers le site) + **secret** (vérification des appels entrants du site)

---

## Flux 1 · Statut de cotisation

**Résumé Pedro** : « le membre donne son code personnel, l'agent interroge le site (endpoint sécurisé par token) et reçoit à jour / en attente / en retard »

### `[HYPOTHÈSE]` Requête
```
GET /wp-json/unv/v1/dues/{code_personnel}
Authorization: Bearer {TOKEN}
```

### `[HYPOTHÈSE]` Réponse
```json
{
  "status": "a_jour" | "en_attente" | "en_retard",
  "member": { "first_name": "…" },
  "year": 2026,
  "paid_date": "2026-03-12" | null,
  "receipt_url": "https://…/quittance.pdf" | null
}
```

### Côté bot (déjà écrit — template `unv_bot_cotisation_status`)
- Le bot demande le code personnel (jamais stocké en clair dans les logs)
- Mapping statut → message : ✅ « Payée le {date} » · 🟡 « En attente » · 🔴 « En retard »
- Si `receipt_url` présent → bouton « Télécharger la quittance »
- Code invalide → 1 retry puis « Contactez le comité : info@unv.ch »

### ❓ À valider avec Pedro
- Format exact du code personnel (longueur, alphanumérique ?)
- Qui génère et distribue les codes aux membres (email d'onboarding ?)
- Rate-limiting sur l'endpoint (anti-bruteforce des codes)

---

## Flux 2 · Inscriptions aux événements (RSVP)

**Résumé Pedro** : « les réponses Je viens / Peut-être / Non sont renvoyées au site et fusionnées avec les réponses e-mail ; le comité voit le récap »

### `[HYPOTHÈSE]` Requête (agent → site)
```
POST /wp-json/unv/v1/events/{event_id}/rsvp
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
  "phone": "+417XXXXXXXX",          // ou code_personnel — à confirmer
  "response": "yes" | "maybe" | "no",
  "source": "whatsapp"
}
```

### `[HYPOTHÈSE]` Réponse
```json
{ "ok": true, "event_id": 123, "recorded_at": "2026-07-22T15:00:00Z" }
```

### Côté bot
- Boutons interactifs sur l'annonce d'événement : « ✅ Je viens » · « 🤷 Peut-être » · « ❌ Non »
- Confirmation après clic : « C'est noté — votre place est réservée. À très vite sur le ponton. » (ton de voix v1.0)
- Modification possible : re-cliquer un autre bouton = mise à jour du RSVP

### ❓ À valider
- Identifiant membre côté RSVP : numéro WhatsApp suffit-il ou faut-il le code personnel ?
- Que se passe-t-il si le numéro WhatsApp n'est pas relié à un membre connu ?

---

## Flux 3 · Webhook « nouvel événement publié » (site → nous)

**Résumé Pedro** : « à chaque publication, le site pousse automatiquement un webhook vers ton URL (titre, date, lieu, lien) »

### Notre URL (à générer ce soir puis figée)
```
POST https://[instance-automation]/webhook/unv-events
```

### `[HYPOTHÈSE]` Payload entrant
```json
{
  "type": "event.published",
  "event": {
    "id": 123,
    "title": "Régate du 15 septembre",
    "date": "2026-09-15T10:00:00+02:00",
    "location": "Port de Vidy",
    "url": "https://unv.ch/calendrier/regate-15-septembre/"
  }
}
```

### `[HYPOTHÈSE]` Sécurité
- Header `X-UNV-Signature: sha256=…` — HMAC-SHA256 du body avec le **secret** partagé
- Notre couche automation **vérifie la signature avant tout traitement** ; signature invalide → 401 + log

### Notre traitement (flux automation A)
1. Vérifier signature
2. Formater le message d'annonce (template Meta `unv_event_new` approuvé)
3. Broadcast Wassenger vers liste « Membres opt-in »
4. Log de diffusion (horodatage, nb destinataires)

### ❓ À valider
- Nom exact du header de signature + algo
- Y a-t-il d'autres types d'événements poussés (`event.updated`, `event.cancelled`) ? Si oui, on gère aussi l'annulation (message « événement annulé »)
- Retry policy côté site si notre webhook répond 5xx

---

## Flux 4 · « Prochain événement » + « Contacter le comité »

**Résumé Pedro** : « deux petits points à caler ensemble »

### `[HYPOTHÈSE]` Prochain événement
```
GET /wp-json/unv/v1/events/upcoming?limit=3
Authorization: Bearer {TOKEN}
```
Réponse : liste des 3 prochains events (id, title, date, location, url) → le bot affiche les 3 avec dates + liens (template `unv_bot_menu_main` → bouton 📅).

### `[HYPOTHÈSE]` Contacter le comité
Deux options (à trancher en visio) :
- **Option simple (recommandée V1)** : carte statique — email info@unv.ch + lien formulaire `/contact/` + tél officiel
- Option relay : le message du membre est POSTé vers le site → tableau des formulaires comité

---

## Flux additionnels souhaités (à négocier — pas dans l'email Pedro)

### Rappels J-7 / J-1 (nos templates 2 et 3, prévus au contrat Volet 3)
Besoin : **liste des inscrits « yes/maybe » par événement**
```
[DEMANDE] GET /wp-json/unv/v1/events/{id}/attendees
→ [ { "phone": "+41…", "first_name": "…", "response": "yes" } ]
```

### Alerte trésorier hebdo (notre template 5, prévue au contrat Volet 3)
Besoin : **endpoint agrégé cotisations**
```
[DEMANDE] GET /wp-json/unv/v1/dues/summary
→ { "late_count": 12, "late_total_chf": 1250, "pending_count": 5 }
```

---

## Checklist de validation (après lecture doc `/agent`)

- [ ] URLs exactes des endpoints (préfixe `/wp-json/unv/v1/` confirmé ?)
- [ ] Méthodes HTTP + noms de champs réels
- [ ] Schéma d'auth exact (Bearer ? header custom ?)
- [ ] Signature webhook : header + algo
- [ ] Format code personnel + process de distribution
- [ ] Endpoints attendees + dues/summary : existants ou à développer par Pedro
- [ ] Environnements staging vs prod (tokens séparés, URL de bascule au 15.08)
- [ ] Codes d'erreur (401, 404 code inconnu, 429 rate-limit)
