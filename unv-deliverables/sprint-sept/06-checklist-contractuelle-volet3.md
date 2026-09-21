# Checklist contractuelle · Volet 3 — Agent WhatsApp et automatisations

**Relecture clause par clause du contrat signé le 11.06.2026 (`offre_UNV_SiteWeb-AgentIA_11062026_gGARCAN_signed.pdf`), confrontée à l'état réel au 21.09.2026.**

Montant du volet : **CHF 1'300** sur CHF 2'800.

---

## Verdict en une ligne

Le **cœur fonctionnel est fait et testé** — les trois automatisations du contrat tournent. Ce qui manque n'est pas du code : c'est l'**infrastructure au nom du club** (numéro dédié, compte, Meta), les **textes refaits contre l'API réelle**, et les **livrables de formation**. Deux clauses posent une vraie question et demandent une décision, pas du travail.

---

## Phase 1 · Infrastructure WhatsApp

| Clause du contrat | État | Détail |
|---|---|---|
| Compte Wassenger **au nom de l'UNV** | 🟠 Partiel | Le compte existe et fonctionne, mais il est au nom de Nathalie. Le contrat prévoit une facturation d'environ CHF 30/mois **directement à l'UNV** après 30 jours d'essai. Il faut donc le basculer au nom du club avec sa facturation. |
| **Numéro WhatsApp Business dédié**, distinct des numéros privés du comité | 🔴 Non fait | C'est aujourd'hui le numéro personnel de Nathalie. La clause est explicite : le numéro doit être celui du club. C'est le blocage n°1. |
| Webhooks bidirectionnels site ↔ passerelle via API REST | 🟢 Fait | `event.published` du site vers l'agent (actif), et l'agent vers le site pour la cotisation et le RSVP. |
| Authentification et sécurisation : signature des webhooks, journalisation | 🟠 Partiel | Authentification : ✅ `X-UNV-API-Token` sortant, `X-UNV-WA-Secret` entrant. Signature : Pedro a retenu une **comparaison simple**, pas une signature HMAC — c'est son choix d'architecture, à acter par écrit. Journalisation : Pedro journalise côté site (IP hachée) ; côté agent, seul le Flux A journalise. **À compléter.** |

## Phase 2 · Notifications automatisées

| Clause du contrat | État | Détail |
|---|---|---|
| Notification des membres à la publication d'un nouvel événement | 🟢 Fait et testé | Flux A. Registre local `unv_events`. |
| Rappels automatiques **J-7 et J-1 aux membres inscrits** | 🟢 Fait et testé | Flux C. Le mot « inscrits » est respecté : le ciblage part des réponses RSVP, avec repli sur la liste opt-in. |
| Alerte hebdomadaire au Trésorier, cotisations en retard, basée sur l'import CSV Banana | 🟠 Construit, bloqué | Flux D existe. Il attend l'endpoint agrégé que Pedro a proposé de livrer. Sans lui, il faudrait boucler sur tous les membres : inacceptable en nLPD comme en performance. |
| Scénarios construits via **Make.com** | ⚠️ Écart assumé | Tout est sur **n8n**. Fonctionnellement équivalent et sans coût supplémentaire, mais le contrat nomme Make.com. **Deux points à traiter** : le dire au comité en une phrase lors de la formation ; et surtout, l'instance n8n est le compte **personnel** de Nathalie — si elle s'arrête, l'agent s'arrête. Pour un club, c'est un risque de continuité à régler (compte au nom de l'UNV, ou clause de réversibilité écrite). |

## Phase 3 · Agent conversationnel

| Clause du contrat | État | Détail |
|---|---|---|
| Agent **button-driven (sans NLP libre)** | 🔴 Écart | Notre routeur fonctionne par **mots-clés**, pas par boutons. « Sans NLP libre » est respecté, « button-driven » ne l'est pas. ⚠️ Contrainte technique : les boutons interactifs WhatsApp ne sont fiables que via l'**API officielle Meta**, pas en mode QR. Donc cette clause dépend elle aussi d'Éric. |
| Cas d'usage 1 · « Prochain événement » — 3 prochains, date, lieu, lien | 🟠 Construit | Dépend de `GET /unv/v1/events?limit=3`, promis par Pedro. Repli possible sur le registre local. |
| Cas d'usage 2 · « Ma cotisation est-elle payée ? » — code personnel → statut | 🟠 Construit | Dépend du token de Pedro. |
| Cas d'usage 3 · « Contacter le comité » | 🟢 Fait | Réponse statique, aucune dépendance. |
| Templates de messages **pré-approuvés par Meta** | 🔴 Non fait | Bloqué sur Éric (portefeuille Meta). **Et les 10 templates rédigés en juin sont à refaire** — voir la section suivante. |
| Logique conversationnelle documentée **et modifiable depuis l'interface Wassenger sans intervention technique** | 🔴 Écart | La logique vit dans n8n, que le comité ne peut pas éditer. Le contrat promet une modification **sans technicien**. C'est la clause la plus exposée. Trois issues possibles, à trancher — voir plus bas. |
| Atelier de prise en main **d'une heure** pour la gestion quotidienne du bot et l'envoi de messages groupés | 🔴 Non fait | Le brief de formation existant (`11-brief-formation-jacques.md`) est celui du **site**, avec un bloc WhatsApp de 5 minutes. Le contrat prévoit **deux ateliers d'une heure**, dont un entièrement consacré à l'agent. Ce livrable reste à écrire. |

## Clauses « Ce que vous pourrez gérer en autonomie » — volet communication

| Clause | État | Détail |
|---|---|---|
| Envoyer un message ponctuel à tous les membres ou à un groupe depuis Wassenger | 🔴 Non fait | Il faut constituer la **liste de contacts / le groupe UNV** dans Wassenger. Rien n'existe aujourd'hui. |
| Modifier les réponses du bot et les templates sans intervention technique | 🔴 Écart | Même sujet que la logique conversationnelle. |
| Consulter l'historique des conversations et les statistiques d'engagement | 🟢 Natif Wassenger | Rien à construire, à montrer en formation. |

---

## 🔍 La découverte importante : les 10 templates sont incompatibles avec l'API réelle

Les templates ont été rédigés **le 16 juin**, avant que la documentation `/agent` de Pedro n'existe. Ils supposent des données que l'API ne renvoie pas.

**Ce que l'API fournit réellement** — et c'est tout :

- Webhook événement : `event_id`, `title`, `date`, `venue`, `url`, `rsvp_hint`
- `GET /cotisation` : `membre_id`, `annee`, `statut` — **aucun prénom, aucune date de paiement, aucune quittance** (minimisation nLPD voulue par Pedro)
- `POST /rsvp` : `ok`, `membre_id`, `reponse`
- Publics : `/conditions`, `/lake-forecast`

**Conséquence, template par template :**

| Template | Problème | Correction |
|---|---|---|
| 1 · Confirmation inscription | `{{1}}` = Prénom — **indisponible** | Retirer le prénom, ouvrir par « Bonjour, » |
| 2 · Rappel J-7 | Prénom indisponible · heure dépend du format de `date` | Retirer le prénom · confirmer le format à Pedro |
| 3 · Rappel J-1 | Prénom indisponible · `{{5}}` météo | 💎 La météo est **disponible gratuitement** via `/lake-forecast`. À câbler : c'est le template le plus valorisant du lot. |
| 4 · Nouvel événement | Prénom · `{{5}}` description courte **absente du payload** | Remplacer la description par `rsvp_hint`, déjà fourni |
| 5 · Alerte trésorier | `{{3}}` total CHF dû — probablement non exposé | À caler avec l'endpoint agrégé de Pedro |
| 6 · Magic link login | Relève de l'**authentification du site (Volet 2)**, pas de l'agent | À sortir du périmètre agent, ou à confirmer avec Pedro |
| 7 · Adhésion validée | Toutes les variables sont côté site, **aucun endpoint ne les expose** | Nécessiterait un nouveau webhook `membership.approved` — à demander ou à déscoper |
| 8 · Accusé résiliation | Prénom · déclencheur = formulaire du site, **aucun webhook** | Même chose : nouveau webhook ou hors périmètre |
| 9 · Menu principal | Prénom indisponible | « Bonjour ⚓ » sans nom — déjà le cas dans le Flux B |
| 10 · Statut cotisation | Prénom · **date de paiement et quittances explicitement non renvoyées** | Réécriture minimale : année + statut uniquement |

**Donc : 10 templates sur 10 à réviser, et 3 (6, 7, 8) à arbitrer** — soit Pedro expose de nouveaux webhooks, soit ils sortent du périmètre de l'agent.

C'est la réponse concrète à « il manque des textes ». Il en manque, et pour une raison précise : ils ont été écrits contre une API imaginée, pas contre l'API livrée.

---

## ⚖️ Les deux clauses qui demandent une décision, pas du travail

### 1. « Modifiable depuis l'interface Wassenger sans intervention technique »

Le contrat promet au comité de pouvoir changer les réponses du bot lui-même. Notre logique vit dans n8n. Trois issues :

- **(a) Table de textes éditable** — sortir tous les messages de Neptune dans une Data Table, que le comité modifie sans toucher aux workflows. Honnête, réalisable, mais l'édition se fait dans n8n, pas dans Wassenger.
- **(b) Réponses automatiques natives de Wassenger** pour les cas simples (menu, contact comité), n8n pour le reste. Respecte la lettre du contrat sur une partie seulement.
- **(c) Reformuler la clause avec le comité** : la logique est documentée et modifiable **sur demande**, la formation couvre l'envoi groupé et les réponses manuelles.

**Recommandation : (a) + (c).** La table de textes est peu coûteuse et sincère ; la reformulation se fait en une phrase pendant la formation, pas dans le dos du client.

### 2. « Agent button-driven »

Les boutons interactifs exigent l'API officielle Meta. Tant qu'on est en mode QR, ils ne sont pas fiables.

**Recommandation** : démontrer le 28 en mots-clés (qui fonctionnent, et que des membres seniors tapent aussi bien qu'ils cliquent), annoncer les boutons comme livrés avec le passage à l'API officielle, une fois le portefeuille Meta ouvert par Éric.

---

## 📋 Ce qui reste à faire, par ordre de priorité

### Bloquants pour la conformité au contrat

1. **Numéro dédié** au nom du club (fixe du Club House ou SIM) — clause explicite
2. **Compte Wassenger au nom de l'UNV**, facturation au club après l'essai
3. **Portefeuille Meta** via la page Facebook (Éric) → templates pré-approuvés + boutons
4. **Réviser les 10 templates** contre l'API réelle
5. **Brief de l'atelier d'une heure** dédié à l'agent
6. **Section WhatsApp du guide écrit** à mettre à jour (Neptune, opt-in, STOP, RSVP)

### Bloquants dépendant de Pedro

7. Token et secret
8. Format du champ `date` + URL iCal
9. Endpoint agrégé des cotisations en retard → débloque le Flux D
10. Arbitrage sur les templates 6, 7, 8 (nouveaux webhooks ou déscopage)

### À décider

11. Table de textes éditable + reformulation de la clause « sans technicien »
12. Boutons : reportés à l'API officielle, à annoncer
13. **Continuité n8n** : l'agent tourne sur le compte personnel de Nathalie. À régler pour un club.
14. Acter par écrit la comparaison simple à la place de la signature HMAC

### Confort, non contractuel mais payant

15. Liste de contacts / groupe UNV dans Wassenger (nécessaire pour la diffusion ponctuelle — clause 15, donc en réalité contractuel)
16. Quelques réponses statiques hors des 3 cas d'usage : horaires du Club House, tarifs de cotisation, comment devenir membre, réservation. Aujourd'hui tout cela retombe sur le menu.
17. Météo du lac (`/conditions`, `/lake-forecast`) — gratuit, déjà livré par Pedro, hors périmètre : le meilleur cadeau à offrir en séance.
18. Journal des envois côté agent (clause « journalisation »)

---

## Ce qui est fait — pour remettre les choses à leur place

- Les **trois automatisations du contrat** sont construites et **testées en exécution réelle** (6 scénarios, deux défauts trouvés et corrigés)
- L'**architecture** est arrêtée et validée par Pedro : l'agent tient ses propres registres, aucun polling du site
- Le **contrat d'intégration API** est transcrit et fait foi
- Le **parcours d'opt-in** est conçu et supprime une dépendance à Pedro
- Le **ton de voix, l'Impressum, la politique de confidentialité, le RAT, les procédures nLPD, les DPA, le guide utilisateur** existent
- Wassenger est **connecté, opérationnel**, renommé « Neptune⚓ », suppression automatique des chats désactivée

Le travail fait est réel. Ce qui manque est concentré sur trois choses : **un numéro, un accès Meta, et des textes à refaire contre l'API livrée.**
