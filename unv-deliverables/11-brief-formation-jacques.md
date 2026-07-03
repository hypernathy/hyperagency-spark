# BRIEF FORMATION JACQUES · Atelier 1h post-MEP

**Bénéficiaire : Jacques Jungi (Vice-Président UNV, éditeur principal du site)**
**Format : visio 1h**
**Date cible : après-midi du 30 juin 2026 ou dans les 3 jours suivants**
**Animation : Pedro (site) + Nathalie (contenus, bot)**

---

## Objectifs pédagogiques

À l'issue de cette session, Jacques est capable seul de :

1. Se connecter à l'espace admin WordPress avec son compte nominatif
2. Modifier n'importe quel texte de n'importe quelle page du site
3. Ajouter, modifier, supprimer un événement dans le calendrier
4. Publier une actualité (article de blog)
5. Uploader des photos dans la galerie
6. Consulter les demandes reçues via formulaires (adhésion, réservation, bénévolat, contact)
7. Comprendre le workflow d'importation CSV Banana (côté trésorier)
8. Envoyer un message WhatsApp de diffusion via Wassenger

**Objectif secondaire** : rassurer Jacques (70+) sur sa capacité à gérer le site sans support technique quotidien.

---

## Structure de la session — 60 minutes

### 00:00 → 00:05 · Accueil et setup (5 min)
- Vérifier la connexion visio
- Partage d'écran de Jacques (pour qu'il fasse lui-même)
- Rappel du contexte : « Le site est à toi maintenant. On va s'assurer que tu peux tout faire seul. »

### 00:05 → 00:10 · Connexion admin (5 min)
- Ouvrir `www.unv.ch/wp-login.php`
- Saisir son login nominatif + mot de passe
- Validation 2FA (installer app Authenticator si pas déjà fait)
- Arriver sur le tableau de bord WordPress

**Point clé** : le tableau de bord est son « poste de commandement ». Tout part de là.

### 00:10 → 00:20 · Éditer une page (10 min)
- Aller dans **Pages** → **Toutes les pages**
- Cliquer sur « Accueil » → **Modifier**
- **Démo pratique** : changer le titre du hero, sauver, prévisualiser
- **Démo pratique** : changer un paragraphe dans « Le Club », sauver, publier
- Montrer le bouton **Prévisualiser** avant de publier
- Montrer l'**historique des révisions** (Ctrl+Z ultime)

**Point clé** : « Tu ne peux rien casser. Tu peux toujours revenir en arrière. »

### 00:20 → 00:30 · Ajouter un événement au calendrier (10 min)
- Aller dans **Événements** → **Ajouter un événement**
- Remplir les champs :
  - Titre : « Régate de septembre »
  - Date de début / fin
  - Lieu : Port de Vidy
  - Description (bref)
  - Catégorie
- Enregistrer → **Publier**
- Aller voir sur `/calendrier/` que l'événement apparaît
- Montrer comment **modifier** ou **supprimer** un événement existant

**Point clé** : « L'événement se retrouve automatiquement sur la homepage + le calendrier + iCal + notifications WhatsApp aux membres inscrits. »

### 00:30 → 00:40 · Publier une actualité (10 min)
- Aller dans **Articles** → **Ajouter un article**
- Titre : « Baptême 2026 : une belle réussite »
- Corps : rédiger 2-3 paragraphes courts
- Ajouter une image mise en avant
- Catégorie : « Actualités »
- Bouton **Publier**
- Aller voir sur `/actualites/`

**Point clé** : « C'est aussi simple que d'écrire un email. Tu écris. Tu ajoutes une photo. Tu cliques publier. »

**Bonus** : montrer comment revenir sur les **13 brouillons existants** et les publier un par un si voulu.

### 00:40 → 00:47 · Uploader des photos dans la galerie (7 min)
- Aller dans **Photos** (Modula Lite)
- Sélectionner « Galerie Régates » (ou autre catégorie)
- Bouton **Ajouter des images**
- Sélection multiple depuis son disque dur
- Upload automatique + redimensionnement + WebP conversion
- Vérifier sur `/galerie/`

**Point clé** : « Drag and drop. C'est tout. La galerie s'organise automatiquement. »

### 00:47 → 00:53 · Consulter les demandes reçues (6 min)
- Aller dans **Fluent Forms** → **Entries**
- Voir la liste des demandes d'adhésion, réservations Club House, bénévolats, contacts
- Filtrer par type de formulaire
- Marquer une demande comme « Traitée » après vérification
- Exporter en CSV si besoin (pour le comité)

**Point clé** : « Toutes les demandes arrivent ici. Elles sont aussi envoyées par email au comité, mais tu peux tout retrouver ici. »

### 00:53 → 00:58 · Vue rapide Banana + WhatsApp (5 min)
**Import CSV Banana (rôle du Trésorier)** :
- Montrer où se trouve la page admin d'import CSV
- « Toi tu n'as pas à le faire, mais tu sais que Claude-Alain le fait chaque mois. »

**WhatsApp Wassenger** :
- Montrer l'interface Wassenger
- Comment envoyer un message ponctuel à tous les membres (broadcast)
- Comment consulter les statistiques d'engagement

**Point clé** : « Le bot fonctionne tout seul. Toi tu peux juste envoyer une annonce ponctuelle si besoin. »

### 00:58 → 01:00 · Récap et documents (2 min)
- Rappel du **guide PDF** envoyé par email (fournit tous les pas-à-pas)
- Rappel des contacts en cas de problème :
  - Pedro (technique) : ph@garcandigital.ch
  - Nathalie (contenus, bot, communication) : nathalie.luana.jungi@gmail.com
- Rappel : Umbrella + Wordfence tournent en background 24/7, on n'a rien à faire

**Question finale** : « De quoi tu ne te sens pas encore à l'aise ? On fait un tour dessus avant de terminer. »

---

## Matériel préparatoire

### À envoyer à Jacques 3 jours avant
- Login admin nominatif + mot de passe temporaire (à changer à la première connexion)
- Guide PDF utilisateur final (fichier `12-guide-utilisateur.md` converti en PDF stylé)
- Lien de la visio (Zoom / Google Meet / Jitsi)
- Rappel : installer une app Authenticator (Google Authenticator, Authy) sur son téléphone

### À avoir sous la main pendant la formation
- Le cockpit `UNV_Pilot_Cockpit_Pedro_v1.html` ouvert pour référence
- Le staging du site ouvert dans un onglet
- Ce brief ouvert dans un autre onglet

---

## Points d'attention avec Jacques

### Adapter le ton
- Pas de jargon tech (« déploiement », « endpoint », « API » → à éviter)
- Utiliser des métaphores concrètes (« comme dans Word », « comme sur Facebook »)
- Prendre le temps — pas de « c'est simple », dire plutôt « on va faire ensemble »

### Rassurer sur les fausses peurs
- « Je vais tout casser » → « Non, les révisions te permettent de revenir en arrière, et Umbrella fait des sauvegardes tous les jours »
- « Je ne me souviendrai pas » → « Le guide PDF est là pour ça. Et je suis un email pour toute question »
- « C'est trop compliqué pour moi » → « Tu écris un email, tu peux gérer ce site »

### Anticiper les blocages classiques
- Perte de mot de passe → « Cliquez sur `mot de passe oublié` sur la page de login, ça marche toujours »
- 2FA téléphone perdu → « Appelle Pedro, il peut désactiver le 2FA depuis l'admin »
- Photo trop lourde → « Le site redimensionne tout seul, pas de souci »

---

## Follow-up après la formation

### J+1
- Email de Nathalie : « Comment ça s'est passé de ton côté ? »
- Encourager à faire un premier acte concret (publier un article ou modifier une page)

### J+7
- Vérifier via WhatsApp que tout roule
- Proposer un mini-recap 15 min si besoin

### J+30
- Point comité : Jacques présente au comité comment il gère le site
- Renforcement positif

---

## Message-type post-formation

**Sujet** : « Bravo — tu es maintenant maître à bord du site UNV »

```
Bonjour Jacques,

Merci pour la session de tout à l'heure — j'ai été impressionnée par ta rapidité de prise en main.

Petit récap :
- Ton login admin : [login]
- Ton mot de passe : [le nouveau que tu as choisi]
- Guide PDF : ci-joint
- Ton URL admin : www.unv.ch/wp-login.php

Le site est à toi. Tu peux publier, éditer, ajouter des événements en toute autonomie.

Ma seule demande : essaie de publier un premier article ou d'ajouter un événement dans les 7 prochains jours, même petit. C'est le meilleur moyen d'ancrer les gestes.

Je reste dispo à tout moment par mail ou WhatsApp pour la moindre question — même toute petite.

Belle continuation à bord de l'UNV.

—
Nathalie
```

---

*Brief préparé par HyperAgency (Nathalie Jungi) le 16 juin 2026.*
