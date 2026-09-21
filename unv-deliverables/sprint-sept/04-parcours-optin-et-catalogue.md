# Parcours opt-in & catalogue des capacités de Neptune

**21.09.2026 · Conception validée en séance avec Pedro le 17.09**

---

## Partie 1 · Le parcours d'opt-in (double consentement par lien `wa.me`)

### Le problème

La doc `/agent` de Pedro couvre tout sauf un point : **comment l'agent sait à qui il a le droit d'écrire.** L'onglet Consentements de l'espace membre enregistre la case « notifications WhatsApp », mais rien ne transmet cette liste à l'agent. Trois options étaient sur la table :

| Option | Verdict |
|---|---|
| Endpoint `GET /optin-list` exposé par le site | ✗ développement Pedro, liste de numéros qui circule, synchronisation à maintenir |
| Export CSV manuel par le comité | ✗ comité senior, gestion manuelle récurrente, périmé en permanence |
| **Lien `wa.me` + auto-enregistrement par l'agent** | **✓ retenu** |

### Le parcours retenu

```
1. Le membre coche « Je souhaite recevoir les notifications WhatsApp »
   dans l'onglet Consentements de son espace membre
                    ↓
2. Le site affiche immédiatement, sous la case :
   [ Activer les notifications WhatsApp ]
   → https://wa.me/41XXXXXXXXX?text=Bonjour%20Neptune
                    ↓
3. Le membre tape. Son WhatsApp s'ouvre sur un message pré-rempli.
   Il l'envoie.
                    ↓
4. Neptune reçoit le message, reconnaît le mot-clé d'activation,
   enregistre le numéro dans sa Data Table `unv_optin`
   et répond par le message de bienvenue.
```

### Le bloc à intégrer côté site (tout ce que Pedro a à faire)

```html
<a href="https://wa.me/41XXXXXXXXX?text=Bonjour%20Neptune"
   class="unv-btn unv-btn--whatsapp">
  Activer les notifications WhatsApp
</a>
```

Pas d'endpoint, pas d'authentification, pas de synchronisation. Le numéro définitif remplace le placeholder dès qu'il est arrêté avec Éric.

### Pourquoi c'est la bonne réponse nLPD

- **Double consentement** : la case cochée sur le site *et* l'envoi effectif d'un message depuis le téléphone du membre. Deux actes volontaires, deux traces horodatées, sur deux canaux distincts. C'est plus solide qu'une simple case.
- **Minimisation** : aucune liste de numéros ne transite entre le site et l'agent. Chaque système ne détient que ce qu'il a lui-même recueilli.
- **Révocation** : le mot-clé `STOP` supprime la ligne de `unv_optin`. Effet immédiat, côté agent, sans passer par le site.
- **Fenêtre de conversation** : c'est le membre qui écrit le premier. WhatsApp ouvre alors une fenêtre de 24 h pendant laquelle l'agent peut répondre librement, hors template pré-approuvé. Juridiquement et techniquement, c'est le bon sens de l'initiative.

### Message de bienvenue (à l'activation)

> Bienvenue à bord ! ⚓
>
> Je suis Neptune, l'assistant de l'Union Nautique de Vidy. Je vous préviendrai des nouveaux événements du club et vous enverrai un rappel avant chaque sortie.
>
> Vous pouvez me répondre à tout moment — et écrire STOP pour ne plus rien recevoir.
>
> À bientôt sur le lac.
> UNV ⚓

*(72 mots — sous la limite de 80.)*

### Conséquences sur le build

- **Nouvelle Data Table `unv_optin`** : `telephone`, `date_optin`, `source`, `actif`
- **Flux B** : ajouter une branche « activation » en tête de routeur (mot-clé de bienvenue → écriture `unv_optin` → message de bienvenue) et une branche `STOP` (→ `actif = false` + accusé de réception)
- **Flux A et C** : la cible de diffusion devient `unv_optin` où `actif = true`
- **Supprime** la dépendance n°2 de la liste « ce qui reste à obtenir » du contrat d'intégration

---

## Partie 2 · Catalogue des capacités de Neptune

Tout ce que l'agent peut faire, classé par statut. Sert de base à la démonstration au comité et aux discussions d'extension.

### MVP — livré pour la formation comité (28 ou 30.09)

| # | Capacité | Déclencheur | État |
|---|---|---|---|
| 1 | **Annonce d'un nouvel événement** — titre, date, lieu, lien, invitation à répondre | webhook `event.published` | Flux A déployé |
| 2 | **Rappels J-7 et J-1** avant chaque événement | cron quotidien 09h00 sur le registre local | Flux C déployé |
| 3 | **Alerte hebdomadaire au trésorier** — cotisations en retard | cron lundi 08h30 | Flux D — attend l'endpoint agrégé |

### Phase 2 — conçue, activable après la formation

| # | Capacité | Dépendance |
|---|---|---|
| 4 | **Menu à 3 boutons** : prochain événement · ma cotisation · contacter le comité | Flux B + activation Wassenger |
| 5 | **RSVP par WhatsApp** — « Je viens / Peut-être / Non » + nombre de personnes, renvoyé au site | `POST /rsvp` (documenté, téléphone accepté comme clé) |
| 6 | **Statut de cotisation par code personnel** — réponse minimale, sans donnée sensible | `GET /cotisation` + token |
| 7 | **Coordonnées du comité** — réponse statique | aucune |

### Extensions possibles — proposables au comité

| # | Capacité | Coût de développement | Intérêt |
|---|---|---|---|
| 8 | **Météo du lac en direct** — vent, température, conditions | **quasi nul** — `GET /unv/v1/conditions` existe déjà, public, sans token | Le membre qui hésite à sortir demande à Neptune. Effet « wow » garanti en démo |
| 9 | **Prévisions du week-end** — vent moyen, alertes orage et rafales | **quasi nul** — `GET /unv/v1/lake-forecast` existe déjà | Envoi automatique le vendredi matin aux membres inscrits |
| 10 | **Annulation ou report d'une sortie** — diffusion immédiate aux inscrits | faible | La vraie valeur d'un canal WhatsApp : l'urgence. Un email du vendredi soir n'est pas lu |
| 11 | **Confirmation de réservation du Club House** | dépend d'un endpoint réservation | À évaluer selon ce que le site expose |
| 12 | **Rappel individuel de cotisation** — au membre concerné, pas au trésorier | `GET /cotisation` + liste des retards | Sensible : à cadrer avec le comité (ton, fréquence, opt-out) |
| 13 | **Accueil des nouveaux membres** — séquence de bienvenue en 3 messages étalés | faible | Le club accueille peu de membres par an, mais chacun compte |
| 14 | **Sondages rapides** — « Qui vient à la corvée d'automne ? » | moyen | Remplace les relances téléphoniques du comité |
| 15 | **Date anniversaire du club** — message commémoratif (fondé en 1962) | très faible | Attachement, à la main du comité |

### Ce qu'il faut retenir pour la démonstration

Les capacités **8 et 9 ne coûtent rien** : Pedro a déjà livré les deux endpoints météo, publics et sans token. Elles sont hors périmètre de l'offre signée — ce qui en fait exactement le bon cadeau à offrir en séance, et la meilleure illustration de ce que l'agent peut devenir.

La capacité **10** est celle qui justifie le canal. Tout le reste pourrait passer par email ; une annulation la veille au soir, non.
