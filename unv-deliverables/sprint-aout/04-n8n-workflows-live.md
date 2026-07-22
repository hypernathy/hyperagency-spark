# WORKFLOWS N8N — CONSTRUITS ET DÉPLOYÉS le 22.07.2026

**Instance : `connexaworld.app.n8n.cloud` · Projet : Nathalie (personal)**

---

## 🔑 L'URL DE WEBHOOK POUR PEDRO (Flux A — LIVE ✅)

```
https://connexaworld.app.n8n.cloud/webhook/unv-events
```
- **Workflow publié et actif** — Pedro peut tester immédiatement (POST JSON)
- URL de test (mode éditeur) : `https://connexaworld.app.n8n.cloud/webhook-test/unv-events`
- Vérification HMAC en **mode test** (accepte tout) tant que le SECRET de Pedro n'est pas collé dans le node « Vérifier Signature HMAC »

## 🔑 L'URL DE WEBHOOK POUR WASSENGER (Flux B — à activer après setup Wassenger)

```
https://connexaworld.app.n8n.cloud/webhook/unv-whatsapp
```

---

## Les 4 workflows

| Flux | Nom | ID | Statut | Lien |
|---|---|---|---|---|
| A | Site → Agent (annonces événements) | `6c1adymeeCp2kYjA` | 🟢 **ACTIF** | [ouvrir](https://connexaworld.app.n8n.cloud/workflow/6c1adymeeCp2kYjA) |
| B | Bot WhatsApp (router entrant) | `p0RLX9RvRB5EilDf` | ⚪ Draft (activer après Wassenger) | [ouvrir](https://connexaworld.app.n8n.cloud/workflow/p0RLX9RvRB5EilDf) |
| C | Rappels événements J-7 / J-1 | `B4DGBJKS8UuottrN` | ⚪ Draft (activer après credentials) | [ouvrir](https://connexaworld.app.n8n.cloud/workflow/B4DGBJKS8UuottrN) |
| D | Alerte cotisations trésorier (lundi 08h30) | `TfVWHVQwjvveMZ53` | ⚪ Draft (activer après endpoint /dues/summary confirmé) | [ouvrir](https://connexaworld.app.n8n.cloud/workflow/TfVWHVQwjvveMZ53) |

## Ce que fait chaque flux

**A — Annonce automatique** : le site POST `{type: "event.published", event: {...}}` → vérif HMAC → format annonce (ton de voix UNV ⚓) → broadcast Wassenger → log. Types inconnus loggés sans diffusion.

**B — Bot router** : Wassenger POST le message entrant → normalisation → routage intelligent :
- Code numérique 4-8 chiffres → GET `dues/{code}` (Bearer) → ✅/🟡/🔴 + quittance
- « cotisation » → demande le code personnel
- « événement / prochain / agenda » → GET `events/upcoming?limit=3` → liste formatée
- « contact / comité » → carte contact
- Tout le reste → menu principal
- Code invalide (404 site) → message d'erreur doux + renvoi comité

**C — Rappels** : chaque jour 09h00 → événements à J-7 et J-1 → messages de rappel (v1 : broadcast groupe ; cible les inscrits dès endpoint `attendees` dispo).

**D — Trésorier** : lundi 08h30 → GET `dues/summary` → si retards, WhatsApp à Claude-Alain avec nb + total CHF.

## ✋ Configuration manuelle restante (checklist Nathalie)

1. **Credential « Wassenger API »** (type Header Auth, header `Token`) — dès l'ouverture du compte Wassenger
2. **Credential « UNV Site API Token »** (type Bearer) — dès que Pedro envoie le token
3. **SECRET HMAC** — coller dans le node Code du Flux A dès que Pedro l'envoie
4. **Placeholders destinataires** : groupe/liste membres (A, C) + numéro Claude-Alain (D)
5. **Fuseau instance** : vérifier Europe/Zurich dans Settings n8n
6. **Ajuster « Normaliser Message »** (Flux B) au format réel du payload Wassenger après 1er test
7. **À la MEP 15.08** : remplacer `unv.garcandigital.ch` par `unv.ch` dans les 4 workflows (5 nodes HTTP)
8. **Après visio Pedro** : corriger les URLs/formats d'endpoints selon la doc `/agent` réelle

## Hypothèses à valider contre la doc /agent de Pedro

- Préfixe API : `/wp-json/unv/v1/` — endpoints `dues/{code}`, `events/upcoming`, `events/{id}/rsvp`
- Header signature : `x-unv-signature` (HMAC-SHA256 hex)
- Endpoints `events/{id}/attendees` et `dues/summary` : **demandés à Pedro** (pas confirmés)
