# État des flux n8n & tests d'intégration

**21.09.2026 · Toutes les modifications prévues au contrat d'intégration sont appliquées et testées.**

---

## Ce qui a été construit

### Data Tables (les registres locaux de Neptune)

| Table | ID | Colonnes | Rôle |
|---|---|---|---|
| `unv_events` | `sBX0OwkaE3FMIJzj` | event_id · title · date_event · venue · url · rsvp_hint · received_at | Registre des événements publiés. Alimenté par le webhook. Source des rappels. |
| `unv_rsvp` | `qqeMroc44duHoXbt` | phone · event_id · reponse · personnes · updated_at | Réponses des membres. Cible les rappels. |
| `unv_optin` | `hpgxKcSQ9LQqjH0M` | phone · actif · date_optin · source | **Nouveau.** Membres ayant activé les notifications via le lien `wa.me`. |

### Flux A — Annonce d'événement (`6c1adymeeCp2kYjA`, ACTIF)

```
Webhook /unv-events → Vérifier Secret → Router Type
                    → Formater Annonce → Enregistrer Événement → Diffusion Wassenger → Log
```

L'enregistrement dans `unv_events` est **en série, avant** la diffusion. C'est délibéré : si WhatsApp est indisponible, l'événement est tout de même enregistré et les rappels J-7 / J-1 partiront quand même. L'upsert se fait sur `event_id`, donc un renvoi manuel depuis la fiche WordPress met la ligne à jour au lieu d'en créer une seconde.

### Flux B — Routeur WhatsApp (`p0RLX9RvRB5EilDf`, 31 nœuds)

Le routeur compte désormais **11 sorties**, évaluées dans cet ordre :

| # | Intention | Déclencheur | Ce que fait Neptune |
|---|---|---|---|
| 0 | `stop` | `stop`, `arrêt`, `désinscription` | `actif = false` dans `unv_optin` + accusé de réception |
| 1 | `activation` | message commençant par « bonjour neptune » | Enregistre l'opt-in + message de bienvenue |
| 2 | `rsvp_viens` | « je viens », « oui », « présent »… | Enregistre, pousse au site, demande « à combien ? » |
| 3 | `rsvp_peut_etre` | « peut-être » | Enregistre et confirme |
| 4 | `rsvp_non` | « non », « je ne viens pas »… | Enregistre et confirme |
| 5 | `nombre_personnes` | un nombre de 1 à 19 | Complète le dernier RSVP du membre |
| 6 | `code_personnel` | 4 à 8 chiffres | Statut de cotisation via l'API du site |
| 7 | `demande_cotisation` | contient « cotisation » | Demande le code personnel |
| 8 | `prochain_event` | « prochain », « événement », « sortie »… | Liste les 3 prochains événements |
| 9 | `contact_comite` | « contact », « comité », « joindre » | Coordonnées du comité |
| 10 | *(défaut)* | tout le reste | Menu principal |

**Le point technique intéressant : « à combien ? » sans session.** WhatsApp ne fournit pas de mémoire de conversation. Quand un membre répond « 3 », Neptune interroge `unv_rsvp` pour retrouver sa dernière réponse et y rattache le nombre. Le registre local remplace un mécanisme de session — et survit à un redémarrage.

Le filtre **liste blanche** reste actif en tête de chaîne : seul le numéro de Pedro (`797328260`) déclenche Neptune. À retirer une fois un numéro dédié relié.

### Flux C — Rappels J-7 / J-1 (`B4DGBJKS8UuottrN`)

```
Cron 09h00 → Lire unv_events → Filtrer J-7/J-1 → Lire unv_optin → Lire unv_rsvp
           → Croiser Destinataires → Envoyer Rappel
```

Plus aucun appel au site : l'ancien nœud pointait vers `/events/upcoming`, un endpoint qui n'existe pas dans la doc de Pedro. Il est supprimé.

**Règle de ciblage** : si au moins un membre a répondu « je viens » ou « peut-être » pour cet événement, seuls ceux-là reçoivent le rappel. Sinon toute la liste opt-in active, moins ceux qui ont répondu « non ».

### Flux D — Alerte trésorier (`TfVWHVQwjvveMZ53`)

Inchangé. En attente de l'endpoint agrégé « cotisations en retard » que Pedro a proposé de livrer. Sans lui, il faudrait boucler sur tous les membres — inacceptable en nLPD comme en performance.

---

## Tests d'intégration exécutés le 21.09

Tous les flux ont été exécutés en mode manuel contre les vraies Data Tables.

| # | Scénario | Résultat |
|---|---|---|
| 1 | « Bonjour Neptune » | Sortie 1 · ligne créée dans `unv_optin` (actif = true, source = wa.me) |
| 2 | Webhook `event.published` | Ligne créée dans `unv_events` · message d'annonce composé avec date, lieu, lien, rsvp_hint |
| 3 | « Je viens » | Dernier événement retrouvé · RSVP enregistré · réponse « Parfait, je vous note pour « … ». Vous venez à combien ? » |
| 4 | « 3 » | Dernier RSVP du membre retrouvé · `personnes` mis à jour sur **la même ligne** · réponse « C'est noté : 3 personnes. » |
| 5 | « STOP » | Même ligne `unv_optin` passée à actif = false, source = stop. Pas de doublon. |
| 6 | Cron rappels, avec un événement à J-1 | Message « C'est demain ! … à 10:00 » composé · 1 destinataire résolu depuis la liste opt-in |

Dans les six cas, la seule erreur est `Credentials not found` sur l'envoi Wassenger — normal, la credential n'existe pas encore. **Aucun message n'a pu partir vers un vrai numéro.**

### Deux défauts trouvés et corrigés par ces tests

1. **Flux A** — le nœud d'enregistrement était branché en parallèle de la diffusion. L'échec de l'envoi Wassenger abortait l'exécution *avant* l'écriture dans le registre : l'événement n'était jamais enregistré. Remis en série, avant la diffusion.
2. **Flux C** — l'ancienne connexion directe « Filtrer J-7/J-1 → Envoyer Rappel » subsistait à côté de la nouvelle chaîne de ciblage. Chaque rappel serait parti **deux fois**, dont une sans destinataire. Connexion retirée, re-testé.

### Lignes de test présentes dans les registres

Deux événements de test portent volontairement un titre explicite. Ils sont sans effet : l'un est daté du passé, l'autre sera dépassé après le 22.09.

| Table | Contenu |
|---|---|
| `unv_events` | `event_id 999` — « TEST INTEGRATION - a ignorer » · `event_id 998` — « TEST J-1 - a ignorer » |
| `unv_rsvp` | 1 ligne pour le numéro de test, événement 999 |
| `unv_optin` | 1 ligne pour le numéro de test |

À supprimer à la main dans l'interface n8n avant la démonstration au comité.

---

## Ce qui reste — et de qui ça dépend

### Nathalie (aucune dépendance externe)

1. **Credential « Wassenger API »** — type Header Auth, nom `Token`, valeur = la clé API Wassenger. À lier aux **8 nœuds d'envoi** : Flux A (Envoyer Broadcast), Flux B (Répondre Cotisation, Répondre Code Invalide, Demander Code Personnel, Répondre Événements, Envoyer Contact Comité, Envoyer Menu Principal, Confirmer Désinscription, Envoyer Bienvenue, Répondre RSVP, Confirmer Personnes), Flux C (Envoyer Rappel).
2. **Credential « UNV Site API »** — type Header Auth, nom `X-UNV-API-Token`, valeur = le token de Pedro. À lier à : Consulter Cotisation Site, Consulter Prochains Événements, Envoyer RSVP au site, Envoyer Personnes au site.
3. **Webhook Wassenger** `message:in:new` → `https://connexaworld.app.n8n.cloud/webhook/unv-whatsapp`
4. **Désactiver la suppression automatique des chats** dans Wassenger (592 / 600).
5. **Activer les Flux B et C** une fois les credentials liées.

### Pedro

- Le **secret** à coller dans « Vérifier Secret Webhook » (Flux A). Tant que le placeholder est là, la vérification accepte tout.
- Le **token** pour la credential ci-dessus.
- Le **format du champ `date`** : une date non parsable est ignorée silencieusement par le filtre J-7 / J-1. C'est le seul point qui peut faire échouer les rappels sans rien signaler.
- L'**URL du flux iCal** → remplace `[URL_ICAL_A_CONFIRMER]` dans « Formater Annonce ».
- L'**endpoint agrégé des cotisations en retard** → débloque le Flux D.

### Éric

- Admin de la page Facebook UNV → portfolio business Meta.
- Le **numéro dédié** (fixe du Club House ou SIM prépayée) → puis retrait du filtre liste blanche et insertion du numéro réel dans le lien `wa.me` du site.
