# CONTRAT D'INTÉGRATION FINAL · Site UNV ↔ Agent WhatsApp

**Source : page `/agent` officielle de Pedro (capturée le 17.09.2026) — remplace toutes les hypothèses de juillet (`sprint-aout/01`).**

---

## Constantes

| Clé | Valeur |
|---|---|
| Base URL (staging) | `https://unv.garcandigital.ch/wp-json/` |
| Namespace | `unv/v1` |
| Auth agent → site | Header `X-UNV-API-Token: <token>` · HTTPS exigé (sinon 403) · token rotatable côté site |
| Auth site → agent | Header `X-UNV-WA-Secret: <secret>` — **comparaison simple** (pas de HMAC) — à vérifier avant tout traitement |
| Transport | HTTPS · JSON |
| `membre_key` | code personnel **ou** n° de membre ; **+ téléphone ou e-mail acceptés pour le RSVP**. Gérés par le comité dans la fiche WordPress du membre |
| nLPD | Appels statut journalisés (IP hashée SHA-256), réponses `no-store`, données minimales (aucun nom/email renvoyé) |
| Bascule prod | Remplacer le domaine à la MEP — un seul point de changement |

## 1 · Statut de cotisation (agent → site)

```
GET /wp-json/unv/v1/cotisation?membre_key=<code|numero>
Headers: X-UNV-API-Token: <token>
```
**200** : `{ "membre_id": 42, "annee": 2026, "statut": "a_jour" }`
Mapping affichage : `a_jour` → « à jour » · `en_attente` → « en attente » · `en_retard` → « en retard »
**Erreurs** : 401 token manquant/invalide · 403 non-HTTPS · 404 membre inconnu
⚠️ Réponse minimale par design : **pas de date de paiement, pas de quittance, pas de prénom** → messages du bot à formuler en conséquence.

## 2 · RSVP événement (agent → site)

```
POST /wp-json/unv/v1/rsvp
Headers: X-UNV-API-Token · Content-Type: application/json
Body: { "event_id": 123, "membre_key": "<code|n°|tél|email>", "reponse": "viens"|"peut_etre"|"non", "personnes": 2 }
```
`personnes` pris en compte si `reponse=viens`.
**200** : `{ "ok": true, "membre_id": 42, "reponse": "viens" }`
**Erreurs** : 400 réponse invalide / événement inconnu · 404 membre non trouvé
💎 **Le téléphone suffit comme `membre_key`** → le membre WhatsApp est identifié par son numéro, zéro friction. Fusionné côté site avec les réponses e-mail, visible par le comité sur la fiche événement.

## 3 · Webhook « nouvel événement » (site → agent)

```
POST <URL webhook agent>
Headers: X-UNV-WA-Secret: <secret>
```
**Déclencheur** : 1ʳᵉ publication d'un événement · **renvoyable manuellement par le comité depuis la fiche** (parfait pour tests et démo).
**Payload (plat)** :
```json
{
  "type": "event.published",
  "event_id": 123,
  "title": "Sortie voile du printemps",
  "date": "…",
  "venue": "…",
  "url": "https://…/evenement/…",
  "rsvp_hint": "Répondez : Je viens / Peut-être / Non"
}
```
⚠️ Diffère de l'hypothèse de juillet : champs **à plat** (pas d'objet `event` imbriqué), `venue` (pas `location`), + `event_id` et `rsvp_hint`.

## 4 · Bonus publics (sans token)

- `GET /unv/v1/conditions` — météo & vent du lac en direct (proxy Open-Meteo)
- `GET /unv/v1/lake-forecast` — prévisions multi-jours (vent moyen + alertes orage/rafales)
→ Suggestion de Pedro pour une réponse bot « Météo du lac » — hors périmètre de l'offre = **candidat idéal en extra/Phase 2** (ou moment wow à la démo).

---

## 🏗️ Conséquence architecturale majeure : l'agent devient sa propre source

La doc ne fournit **ni** endpoint « prochains événements », **ni** liste d'inscrits — et n'en a pas besoin :

1. **Registre événements local** — chaque `event.published` reçu est stocké par l'agent (Data Table n8n : event_id, title, date, venue, url). Les rappels J-7/J-1 et le futur menu « prochain événement » lisent **ce registre local**. Zéro polling du site.
2. **Registre RSVP local** — toutes les réponses WhatsApp transitent par l'agent avant d'aller au site → l'agent garde (téléphone, event_id, réponse, personnes). Les rappels J-7/J-1 ciblent les « viens / peut_être » **depuis ses propres données**.

## Modifications à appliquer aux 4 workflows n8n de juillet

| WF | Modifications |
|---|---|
| **A · Annonce** | Payload à plat (`$json.body.title`, `.venue`, `.event_id`…) · vérif signature = simple comparaison header `X-UNV-WA-Secret` (nœud IF suffit, exit le Code HMAC) · message avec `rsvp_hint` + lien iCal · **ajouter** : écriture dans Data Table `unv_events` |
| **B · Router** | Auth : `httpHeaderAuth` avec header `X-UNV-API-Token` (remplace Bearer) · cotisation : `GET /cotisation?membre_key=` · réponse minimale (annee + statut, sans date/quittance) · **ajouter branche RSVP** : mots-clés « je viens / peut-être / non » → `POST /rsvp` avec le téléphone comme membre_key + question « à combien ? » si viens → écrire dans Data Table `unv_rsvp` |
| **C · Rappels J-7/J-1** | Source = Data Table `unv_events` (plus d'appel site) · cibles = Data Table `unv_rsvp` (viens/peut_être) — fallback liste opt-in complète si aucun RSVP |
| **D · Trésorier** | ⛔ Aucun endpoint agrégé documenté → **demander à Pedro** ou déscoper en Phase 2 |

## 5 · « Points à caler ensemble » (fin de la doc Pedro — il propose lui-même les extensions)

1. **« Prochain événement » à la demande** — le webhook pousse déjà tout à chaque publication (« tu peux les mémoriser » — Pedro valide lui-même le registre local). Pour un « 3 prochains » propre, **il propose de livrer rapidement `GET /unv/v1/events?limit=3`** (date/lieu/lien). → **RÉPONSE : oui, on prend** (utile en Phase 2 menu + robustesse si le registre local repart de zéro).
2. **« Contacter le comité »** — réponse statique côté agent (coordonnées + lien `/contact`). Aucun endpoint. → ✅ conforme au workflow B existant.
3. **Alerte hebdo cotisations en retard** — prévue côté automation dans l'offre ; le site fournit le statut par membre (endpoint 1) ; **il propose d'ajouter une « liste des retards » en un seul appel** si ça arrange. → **RÉPONSE : oui, on prend** (sinon il faudrait boucler sur tous les membres = interdit nLPD/perf).

## Ce qui reste à obtenir (liste finale — 3 choses)

1. **Token + secret** (transmis séparément — jamais dans la doc) — par WhatsApp
2. **Liste opt-in WhatsApp** (onglet Consentements) : endpoint, export, ou webhook à chaque nouveau consentement ? — LE manquant n°1 pour cibler les diffusions *(seul point que sa doc ne couvre pas)*
3. **Format exact du champ `date`** du webhook (ISO 8601 ? avec heure ?) + **URL du flux iCal** à insérer dans les annonces
+ Confirmer les 2 « oui » ci-dessus (`events?limit=3` et liste des retards) pour qu'il les code.
