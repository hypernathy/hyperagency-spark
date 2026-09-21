# Réservations Club House · Calendrier · Google Agenda

**Note de conception — 21.09.2026, issue du point avec Pedro.**

---

## Ce que dit le contrat, précisément

Il faut séparer trois choses que la discussion mélange facilement.

| Élément | Dans le contrat ? | Qui le livre |
|---|---|---|
| **Formulaire de réservation du Club House** (date, créneau, motif) avec notification automatique au comité pour validation | ✅ Oui — Volet 1, phase 3 | **Pedro** |
| **Tableau de réception des réservations** dans l'espace comité | ✅ Oui — Volet 2, phase 3 | **Pedro** |
| **Calendrier d'événements + abonnement iCal** pour les membres | ✅ Oui — Volet 1, phase 3 | **Pedro** (The Events Calendar) |
| **Google Drive** intégré à l'espace comité | ✅ Oui — Volet 2, phase 3 | **Pedro** |
| **Google Agenda** | ❌ **Non. Nulle part.** | — |
| **Neptune connecté aux réservations** | ❌ Non — l'agent a 3 cas d'usage contractuels, la réservation n'en fait pas partie | — |

**Conséquence commerciale** : connecter l'agent aux réservations et brancher Google Agenda sont des **prestations hors périmètre**. Le contrat prévoit CHF 150/heure pour ça, ou c'est un candidat naturel pour la proposition stratégique complémentaire. À ne pas offrir par réflexe : c'est la fonctionnalité la plus utile au quotidien d'un comité.

---

## Les trois niveaux, du gratuit au payant

### Niveau 0 · Lecture du flux iCal — **gratuit, déjà contracté, à faire tout de suite**

Le calendrier d'événements produit déjà un flux iCal : c'est dans le contrat, Pedro le livre de toute façon.

Neptune peut le lire directement. Ça lui donne :
- « Prochain événement » sans dépendre d'un nouvel endpoint
- Un filet si le registre local `unv_events` repart de zéro
- La détection de conflits de date

**Coût : zéro.** Il suffit de l'URL du flux — **déjà sur la liste des demandes à Pedro**, et qui sert donc maintenant à deux choses.

### Niveau 1 · Neptune informe sur les réservations — **petit**

Le membre écrit « je voudrais réserver le Club House samedi ». Neptune répond avec les créneaux libres et le lien vers le formulaire du site.

Il faut que Pedro expose les réservations existantes : un endpoint en lecture, ou mieux, un webhook `booking.confirmed` que Neptune enregistre dans un registre local — **exactement le même schéma que `unv_events`, qui marche déjà**.

### Niveau 2 · Neptune prend la réservation — **moyen, et c'est là qu'est la valeur**

```
Membre : « Club House samedi après-midi »
   ↓
Neptune vérifie la disponibilité
   ↓
Neptune enregistre la demande
   ↓
Le comité reçoit une notification et valide
   ↓
Neptune confirme au membre
```

C'est le scénario qui remplace les coups de fil et les allers-retours par e-mail. Pour un comité senior, c'est probablement plus utile au quotidien que les trois cas d'usage contractuels réunis.

---

## Où mettre Google Agenda — et pourquoi

### La vraie raison d'en vouloir un

Ce n'est pas technique. C'est que **le comité verrait les réservations et les événements dans l'application agenda de son téléphone**, sans se connecter à quoi que ce soit. Pour des gens qui ne se connecteront pas à un espace comité toutes les semaines, c'est déterminant.

### L'architecture que je recommande

**Google Agenda comme vue partagée, pas comme source de vérité.**

```
Site (formulaire, The Events Calendar)  ──┐
                                          ├──▶  Agenda Google « UNV »  ──▶  téléphones du comité
Neptune (registres unv_events, bookings) ─┘
```

La source de vérité reste le site pour les événements, et les registres locaux pour ce qui transite par WhatsApp. Google Agenda est un **miroir en écriture seule**. Si quelqu'un le supprime par erreur, on le régénère ; aucune donnée n'est perdue.

L'inverse — Google Agenda comme source de vérité — est tentant et fragile : n'importe quel membre du comité peut déplacer un événement dans son téléphone, et le site ne le saurait pas.

**Côté outillage** : n8n a un nœud Google Calendar natif. Une fois le compte et l'autorisation en place, c'est rapide.

---

## ⚠️ Les deux questions de gouvernance à poser

### 1. À qui appartient le compte Google ?

Le comité a une adresse Gmail. **Laquelle exactement, et qui en détient le mot de passe ?**

Si c'est le Gmail personnel d'un membre du comité, le club perd l'agenda le jour où cette personne s'en va — et perd aussi le **Google Drive de l'espace comité**, qui est, lui, contractuel et qui doit héberger les procès-verbaux et les statuts.

C'est le même problème de continuité que l'instance n8n. À régler une fois, pour les deux.

**Recommandation** : un compte Google au nom du club, mot de passe dans le coffre du comité, deux personnes qui y ont accès.

### 2. `info@unv.ch` et le Gmail — lequel sert à quoi ?

Attention à une subtilité du contrat : il prévoit la **suppression du compte générique `info@unv.ch` côté WordPress** (remplacé par un compte administrateur nominatif). Mais **l'adresse e-mail `info@unv.ch` reste** — elle est publiée dans l'Impressum, la politique de confidentialité et les procédures nLPD comme point de contact pour l'exercice des droits.

Donc :
- `info@unv.ch` → adresse **publique** du club, contact officiel, exercice des droits nLPD
- Le compte Google → **outil interne** : Drive du comité, Agenda, autorisation n8n

Ne pas confondre les deux, et surtout ne pas supprimer l'adresse.

---

## Ce que ça change côté nLPD

Une réservation contient un nom, une date et un motif. C'est une donnée personnelle.

Bonne nouvelle : **Google est déjà dans le RAT et dans la liste des DPA** (fournisseur n°6, Workspace/Drive, DPA à accepter). Ajouter Agenda, c'est le même fournisseur et le même contrat — pas de nouveau sous-traitant.

À faire quand même :
- [ ] Ajouter le traitement « réservation du Club House » au RAT
- [ ] Vérifier que le DPA Google est bien accepté (il est marqué « à faire » dans `10-dpa-fournisseurs.md`)
- [ ] Ne pas mettre le motif de la réservation dans le titre de l'événement Agenda si celui-ci est partagé largement — le nom et le créneau suffisent

---

## Ce qu'il faut demander

### À Pedro

- [ ] Le **formulaire de réservation du Club House** existe-t-il déjà en préprod ? Que fait-il aujourd'hui — un simple e-mail, ou un enregistrement en base ?
- [ ] Peut-il exposer les réservations : endpoint en lecture, ou webhook `booking.confirmed` ?
- [ ] L'**URL du flux iCal** — déjà demandée, maintenant doublement utile
- [ ] Le flux iCal est-il public ou protégé ?

### Au comité (Éric)

- [ ] **Quelle adresse Gmail exactement**, et qui détient le mot de passe ?
- [ ] Utilisent-ils déjà un agenda partagé aujourd'hui, même informel ?
- [ ] Accepte-t-on de créer un agenda « UNV — Club House » dédié ?

---

## Ma recommandation, en une phrase

**Faire le niveau 0 tout de suite — il est gratuit et déjà contracté — et présenter les niveaux 1 et 2 avec Google Agenda comme une extension chiffrée**, parce que c'est la fonctionnalité qui changera le plus leur quotidien, et parce que l'offrir gratuitement dévaloriserait ce qui est déjà livré.
