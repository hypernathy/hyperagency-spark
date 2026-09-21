# Inventaire complet · Ce qu'on a, ce qui manque

**21.09.2026 — état à jour après le point avec Pedro.**

---

## 🟢 Ce qu'on a — construit, testé, à nous

### Les automatisations (n8n, instance Nathalie)

| Flux | ID | État |
|---|---|---|
| A · Annonce d'événement | `6c1adymeeCp2kYjA` | **Actif.** Webhook live. Enregistre dans `unv_events` avant de diffuser. Testé. |
| B · Routeur WhatsApp | `p0RLX9RvRB5EilDf` | 31 nœuds, 11 intentions. Opt-in, STOP, RSVP, nombre de personnes, cotisation, événements, contact, menu. Testé. |
| C · Rappels J-7 / J-1 | `B4DGBJKS8UuottrN` | Lit les registres locaux, cible les répondants puis la liste opt-in. Testé. |
| D · Alerte trésorier | `TfVWHVQwjvveMZ53` | Construit, en attente de l'endpoint de Pedro. |

### Les registres locaux (l'agent est sa propre base)

| Table | ID | Contenu |
|---|---|---|
| `unv_events` | `sBX0OwkaE3FMIJzj` | Événements publiés, alimentés par le webhook |
| `unv_rsvp` | `qqeMroc44duHoXbt` | Réponses des membres + nombre de personnes |
| `unv_optin` | `hpgxKcSQ9LQqjH0M` | Numéros ayant activé les notifications |

### Les documents

Ton de voix · Impressum · Politique de confidentialité · RAT (12 traitements) · Bannière cookies · Copy des 10 pages · 10 templates Meta *(à refaire, voir plus bas)* · 8 emails transactionnels · Procédures nLPD · DPA fournisseurs · Brief formation site · Guide utilisateur · Contrat d'intégration API transcrit · Checklist contractuelle · Parcours d'opt-in · État des flux et tests.

### L'infrastructure

Compte Wassenger **opérationnel**, appareil en ligne, renommé « Neptune⚓ », suppression automatique des chats désactivée. **Essai gratuit 30 jours depuis le 17.09 → gratuit jusqu'au ~17 octobre.**

---

## 🔴 Ce qui manque — de Pedro

### Bloquant immédiat

| # | Quoi | Débloque |
|---|---|---|
| 1 | **Token** `X-UNV-API-Token` | Cotisation + RSVP vers le site |
| 2 | **Secret** `X-UNV-WA-Secret` | La vraie protection du webhook (aujourd'hui en mode test, accepte tout) |
| 3 | **Format exact du champ `date`** | Les rappels J-7 / J-1. ⚠️ Une date non parsable est ignorée **sans aucune erreur** — c'est la panne silencieuse. |
| 4 | **URL du flux iCal** | Le « ajouter à mon agenda » dans l'annonce |

### Promis, à livrer

| # | Quoi | Débloque |
|---|---|---|
| 5 | Endpoint agrégé **cotisations en retard** | Le Flux D — la 3ᵉ automatisation du contrat |
| 6 | `GET /unv/v1/events?limit=3` | « Prochain événement » + filet de sécurité |
| 7 | Bloc **lien `wa.me`** dans l'onglet Consentements | Tout le parcours d'opt-in |

### Arbitrages à trancher avec lui

| # | Quoi |
|---|---|
| 8 | Webhook `membership.approved` — ou on déscope le template « adhésion validée » |
| 9 | Webhook à la réception du formulaire de résiliation — ou on déscope |
| 10 | Le magic link relève du Volet 2 (site) : on le sort du périmètre de l'agent ? |
| 11 | Acter **par écrit** que la vérification du webhook est une comparaison simple, pas une signature HMAC (la clause du contrat dit « signature ») |

### Nouveau, sorti du point d'aujourd'hui

| # | Quoi |
|---|---|
| 12 | **Portefeuille Meta de l'UNV** : qui le détient ? Puis WABA ID, Phone Number ID, token System User permanent |
| 13 | **L'API Infomaniak IA** qu'il doit créer : clé, endpoint, `product_id`, modèle retenu |
| 14 | **Numéro du fixe du Club House** — manque aussi pour l'Impressum et la page Contact. Et : est-ce du VoIP ? |
| 15 | **Date de formation ferme** : 28 ou 30 septembre (via Sophia) |

### Ce qui n'est plus attendu de lui

~~La liste opt-in~~ — le parcours `wa.me` la supprime. Il n'a qu'un lien à poser.

---

## 🔴 Ce qui manque — d'Éric

- Accès administrateur à la **page Facebook UNV** → portefeuille Meta business au nom du club
- Arbitrage sur le **numéro dédié** (fixe du Club House ou SIM)

---

## 💰 Wassenger à CHF 39/mois — la vraie analyse

### Le fait qui change tout

**L'essai est gratuit jusqu'à mi-octobre.** La formation est le 28 ou le 30 septembre. **Wassenger ne coûte rien pour la démonstration.** La décision n'a pas à être prise aujourd'hui.

### Si on le supprime, ce qu'on gagne

CHF 468 par an pour le club, et une dépendance en moins.

### Si on le supprime, ce qu'on perd — et c'est le point dur

Sans Wassenger, on passe en **API Cloud officielle de Meta**. Et là une règle change du tout au tout :

> En mode QR (Wassenger), l'agent peut envoyer **du texte libre**.
> En API Cloud, **tout message à l'initiative du club doit être un template pré-approuvé par Meta.**

Or les annonces d'événement et les rappels J-7 / J-1 sont exactement ça : des messages à l'initiative du club.

**Conséquence** : supprimer Wassenger transforme la dépendance à Éric, aujourd'hui souple, en **dépendance bloquante à sept jours de la formation**. Sans portefeuille Meta, sans templates soumis et approuvés (24 à 48 h chacun), il n'y a plus d'annonce ni de rappel possible.

Trois clauses du contrat tombent aussi : la diffusion manuelle depuis l'interface Wassenger, la modification des réponses du bot sans technicien, et l'historique avec statistiques d'engagement.

### Recommandation

**Garder Wassenger jusqu'au 28, puisqu'il est gratuit. Trancher début octobre, avant le 17.**

Ça laisse le temps d'ouvrir le portefeuille Meta avec Éric, de faire approuver les templates sans pression, et de décider en connaissance de cause. Si on bascule ensuite sur l'API Cloud, il me faut une demi-heure sur le Flux B : la vérification d'URL que Meta exige en GET, la lecture du payload entrant, le format d'envoi. Le reste — registres, RSVP, opt-in, rappels — ne bouge pas.

---

## 🧠 Le modèle IA Infomaniak

### Pourquoi c'est une bonne idée

L'UNV est **déjà client Infomaniak**, déjà dans le RAT, déjà couvert par un DPA. Ajouter leur service IA, c'est **le même fournisseur, le même contrat, la même juridiction suisse**. Aucune donnée de membre ne quitte la Suisse.

À comparer avec un modèle américain, qui imposerait : nouveau sous-traitant, nouveau DPA, clauses contractuelles types, mise à jour du RAT et de la politique de confidentialité. Pour un club dont le comité risque des sanctions personnelles jusqu'à CHF 250'000, l'argument suisse n'est pas cosmétique.

### Quel modèle

⚠️ *Le site d'Infomaniak est inaccessible depuis mon environnement (blocage réseau). Les tarifs ci-dessous viennent d'un annuaire tiers et sont à **vérifier dans la console avec Pedro**.*

| Modèle | Taille | Entrée / Sortie (CHF / M tokens) | Verdict |
|---|---|---|---|
| **Mistral Small 4** | 119B | 0.20 / 0.75 | ✅ **Le bon choix.** Modèle français, excellent en multilingue, largement suffisant pour classer un message court. Le moins cher. |
| Apertus v1.5 | 70B | 0.70 / 2.50 | 🇨🇭 Le modèle **suisse** (EPFL/ETH). Argument de souveraineté imbattable devant un comité. 3× le prix, mais voir ci-dessous. |
| Qwen 3.5 | 397B | 0.80 / 3.60 | ❌ Surdimensionné pour la tâche, 4× le prix. |

**Le coût est un non-sujet.** Pour ~100 membres, disons 200 messages par mois, aller-retour de 300 tokens : environ **60'000 tokens par mois**, soit **quelques centimes**. Autrement dit : l'IA coûtera environ CHF 0.10 par mois là où Wassenger en coûte 39. Le choix du modèle ne se joue pas sur le prix.

**Donc** : Mistral Small 4 pour travailler, et si le comité est sensible à la souveraineté, Apertus est défendable pour quelques centimes de plus.

### ⚠️ Mais le contrat dit l'inverse

> « Agent WhatsApp **button-driven (sans NLP libre**, pour éviter les ambiguïtés et garantir la fiabilité des réponses) »

Ajouter un modèle de langage, c'est littéralement ce que la clause exclut. **À ne pas ignorer.**

### La façon de le faire sans trahir le contrat

Utiliser le modèle comme **classificateur d'intention**, jamais comme source de vérité.

```
Message du membre
      ↓
Modèle Infomaniak → renvoie UNE intention parmi la liste connue (JSON)
      ↓
Les branches déterministes existantes s'exécutent
      ↓
Les faits viennent de l'API de Pedro et des registres locaux
```

- Le modèle **ne génère jamais** un montant, une date, un statut de cotisation.
- Il traduit seulement « est-ce que j'ai payé ma cotise ? » en `demande_cotisation`.
- Si le modèle tombe ou renvoie n'importe quoi, **le routeur par mots-clés reprend la main**.

On gagne la vraie robustesse — un comité senior n'écrit pas les mots-clés qu'on a prévus — sans introduire l'ambiguïté que la clause voulait éviter. C'est défendable devant le comité, et honnête.

**À valider avec Pedro**, puisque c'est son contrat aussi.

---

## Les cinq choses à ressortir du point

1. Token + secret, sur le téléphone
2. Format du champ `date` — la panne silencieuse
3. Qui détient le portefeuille Meta de l'UNV
4. Accord sur : Wassenger reste jusqu'au 28 (c'est gratuit), on tranche avant le 17 octobre
5. Accord sur : le modèle IA en classificateur seulement, et on le dit au comité
