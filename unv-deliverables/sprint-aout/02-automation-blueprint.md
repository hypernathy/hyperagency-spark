# BLUEPRINT AUTOMATION · Les 4 flux de l'agent UNV

**Décision de stack à trancher ce soir — recommandation Fable ci-dessous.**

---

## ⚖️ n8n vs Make.com — recommandation

Le contrat Garcan mentionne Make.com (palier gratuit), mais **le choix de la couche automation est 100% côté Nathalie** — Pedro a seulement besoin d'une URL de webhook, peu importe ce qu'il y a derrière.

| Critère | n8n | Make.com |
|---|---|---|
| Compte Nathalie existant | ✅ actif (MCP connecté) | À (re)créer |
| **Claude peut le construire directement via MCP** | ✅ **OUI — workflows créés/validés/publiés par IA** | ❌ non, clic manuel |
| Webhook URL stable | ✅ | ✅ |
| Coût volume UNV (~500 ops/mois) | ✅ dans le plan actuel | ✅ palier gratuit 1000 ops |
| Transfert futur à UNV | Export JSON + compte à créer | Transfert ownership natif |
| Debug / historique exécutions | ✅ très bon | ✅ bon |

**🎯 Recommandation : n8n.** Raison décisive : je peux construire, valider et publier les 4 workflows **directement via MCP pendant ce sprint** — tu gagnes des jours entiers de clic-clic. Make reste le fallback si le comité exige un jour la portabilité (export JSON n8n documenté de toute façon).

**Impact contrat : aucun.** Le contrat de Pedro promet « scénarios d'automatisation » — l'outil est un détail d'implémentation interne. À mentionner en passant à Pedro pour transparence (« ma couche automation tourne sur n8n »).

---

## Flux A · Annonce nouvel événement (site → membres)

**Trigger** : webhook entrant du site (event.published)

```
[Webhook Trigger]  POST /webhook/unv-events
   │  vérif signature HMAC (secret Pedro) — reject 401 si invalide
   ▼
[Filter]  type == "event.published"
   ▼
[Function]  formater variables template :
   {{1}} = first_name (broadcast → générique "membre")
   {{2}} = event.title   {{3}} = date formatée FR   {{4}} = location
   {{5}} = description courte
   ▼
[Wassenger API]  POST /v1/messages  (template unv_event_new approuvé Meta)
   → liste "Membres UNV opt-in"  + boutons RSVP (✅/🤷/❌)
   ▼
[Log]  n8n Data Table "diffusions" : event_id, timestamp, nb_destinataires
```

**Cas limite** : si templates Meta pas encore approuvés → fallback message session (fenêtre 24h) ou file d'attente.

---

## Flux B · Router WhatsApp entrant (membres → bot → site)

**Trigger** : webhook Wassenger (message entrant / clic bouton)

```
[Webhook Trigger]  POST /webhook/unv-whatsapp   (configuré dans Wassenger)
   ▼
[Switch]  selon payload bouton / mot-clé
   │
   ├─ "menu" ou 1er contact ──▶ [Wassenger] envoyer unv_bot_menu_main (3 boutons)
   │
   ├─ 📅 "Prochain événement" ─▶ [HTTP GET site /events/upcoming (Bearer token)]
   │                              ▶ [Function] formater 3 events
   │                              ▶ [Wassenger] réponse + liens
   │
   ├─ 💳 "Ma cotisation" ──────▶ [Wassenger] "Merci d'indiquer votre code personnel"
   │                              ▶ [Wait for reply] (state: awaiting_code)
   │                              ▶ [HTTP GET site /dues/{code} (Bearer token)]
   │                              ▶ [Switch statut] à_jour / attente / retard
   │                              ▶ [Wassenger] unv_bot_cotisation_status + bouton quittance
   │                              ▶ erreur 404 → 1 retry → renvoi vers comité
   │
   ├─ 📞 "Contacter le comité" ▶ [Wassenger] carte contact (info@unv.ch + form + tél)
   │
   ├─ RSVP ✅/🤷/❌ ───────────▶ [HTTP POST site /events/{id}/rsvp (Bearer token)]
   │                              ▶ [Wassenger] confirmation ("C'est noté…")
   │
   └─ "STOP" ─────────────────▶ [Function] opt-out liste + [Wassenger] confirmation
                                  + [Log] registre consentements (nLPD)
```

**Note state management** : le dialogue « code personnel » nécessite un état conversationnel. Deux options : (a) fonctionnalités bot natives Wassenger (préféré — logique modifiable sans code, comme promis au contrat), (b) state en Data Table n8n. **À trancher après exploration de l'interface Wassenger.**

---

## Flux C · Rappels J-7 / J-1

**Trigger** : Schedule quotidien 09:00 Europe/Zurich

```
[Cron 09:00]
   ▼
[HTTP GET site /events/upcoming?limit=10 (Bearer token)]
   ▼
[Function]  filtrer : date(event) - aujourd'hui == 7  → lot J-7
                      date(event) - aujourd'hui == 1  → lot J-1
   ▼
[HTTP GET site /events/{id}/attendees]   ⚠️ endpoint à demander à Pedro
   ▼
[Loop destinataires (response == yes|maybe)]
   ▼
[Wassenger]  unv_event_reminder_j7  ou  unv_event_reminder_j1
   (J-1 : enrichir {{5}} météo via Open-Meteo API — gratuit, même source que le site)
   ▼
[Log diffusion]
```

---

## Flux D · Alerte trésorier hebdo

**Trigger** : Schedule lundi 08:30 Europe/Zurich

```
[Cron lundi 08:30]
   ▼
[HTTP GET site /dues/summary (Bearer token)]   ⚠️ endpoint à demander à Pedro
   ▼
[IF late_count > 0]
   ▼
[Wassenger]  unv_treasurer_alert_weekly → numéro Claude-Alain (whitelisté)
   {{1}}=semaine ISO  {{2}}=late_count  {{3}}=late_total_chf  {{4}}=pending  {{5}}=URL espace comité
   ▼
[ELSE]  message optionnel "✅ Aucune cotisation en retard cette semaine" (à valider avec C-A)
```

---

## Ordre de construction (dès token/secret reçus)

1. **Ce soir** : Flux A squelette (webhook trigger seul) → **génère l'URL à envoyer à Pedro** ✅ débloque tout
2. Post-visio : Flux A complet (signature + Wassenger) — testable dès 1er template approuvé
3. Flux B menu + prochain événement + contact (pas de dépendance code personnel)
4. Flux B cotisation (dès format code confirmé)
5. Flux C + D (dès endpoints attendees/summary confirmés ou livrés)

## Secrets & config (jamais en dur dans les workflows)
- `UNV_SITE_TOKEN` (Bearer, fourni par Pedro) → credentials n8n
- `UNV_WEBHOOK_SECRET` (HMAC, fourni par Pedro) → credentials n8n
- `WASSENGER_API_KEY` → credentials n8n
- URLs site : variable d'env `UNV_BASE_URL` (staging → prod au 15.08, un seul point de bascule)
