# BANNIÈRE COOKIES · Wording et catégorisation

**Configuration Complianz WordPress · Consentement granulaire · Conformité nLPD + RGPD**

---

## 1. Bandeau initial (premier chargement de page)

### Titre
**Cookies & respect de votre vie privée**

### Corps du message
Nous utilisons des cookies pour faire fonctionner notre site, mesurer son audience et améliorer votre expérience. Vous pouvez tout accepter, tout refuser ou choisir vos préférences.

### Boutons (ordre de gauche à droite)
1. **Personnaliser mes choix** (secondaire, gris)
2. **Refuser tout** (secondaire, gris)
3. **Accepter tout** (primaire, doré / navy)

### Lien discret en bas
« Consultez notre [Politique de cookies](/politique-cookies/) et notre [Politique de confidentialité](/politique-de-confidentialite/) pour plus d'informations. »

---

## 2. Panneau de préférences (après clic « Personnaliser »)

### Titre
**Vos préférences cookies**

### Introduction
Cette page vous permet de choisir précisément quels cookies vous autorisez. Vos choix sont modifiables à tout moment via le lien « Gérer mes cookies » en pied de page.

---

### 🔒 Catégorie 1 · Cookies essentiels
**Toujours actifs — consentement non requis**

**Description :**
Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, la connexion à votre espace membre, la validation des formulaires et la sécurité de vos données.

**Sans ces cookies, le site ne peut pas fonctionner correctement.**

**Exemples de cookies utilisés :**
- `wordpress_logged_in_*` — Session de connexion à l'espace membre
- `wp_lang` — Préférence de langue
- `cmplz_consented_services` — Enregistrement de vos préférences cookies
- Token CSRF — Protection contre les attaques

**Durée** : Session ou 12 mois maximum
**Statut** : ✅ Activé (obligatoire)

---

### ⚙️ Catégorie 2 · Cookies fonctionnels
**Améliorent votre expérience**

**Description :**
Ces cookies mémorisent vos préférences (langue, affichage, taille de texte) pour vous éviter de les redéfinir à chaque visite. Ils ne collectent aucune donnée d'identification.

**Exemples :**
- Préférences d'affichage (thème clair/sombre)
- Préférences de langue
- Fermeture d'alertes non-critiques

**Durée** : 12 mois maximum
**Statut** : ⬜ Case à cocher (opt-in explicite)

---

### 📊 Catégorie 3 · Cookies analytiques
**Nous aident à améliorer le site**

**Description :**
Ces cookies mesurent l'audience du site de manière anonymisée. Ils nous permettent de savoir quelles pages sont consultées, combien de temps, sur quels appareils, afin d'améliorer votre expérience.

**Aucune information permettant de vous identifier n'est collectée.** Les adresses IP sont anonymisées.

**Outils utilisés :**
- **Burst Statistics** — analytics privacy-friendly hébergé chez Infomaniak (Suisse)
- **Google Analytics 4** (avec IP anonymisée, sans partage publicitaire) — Google LLC (États-Unis, transferts encadrés par les Clauses Contractuelles Types)

**Durée** : 14 mois maximum
**Statut** : ⬜ Case à cocher (opt-in explicite)

---

### 📢 Catégorie 4 · Cookies marketing
**Publicités et réseaux sociaux**

**Description :**
Ces cookies permettraient d'afficher des publicités ciblées ou d'intégrer du contenu enrichi provenant de réseaux sociaux (widgets Facebook, Instagram, etc.).

**Actuellement, nous n'utilisons AUCUN cookie de cette catégorie.** Cette option est présente pour transparence et pour anticiper d'éventuels usages futurs (posts embarqués, boutique merchandising).

**Outils potentiels (non activés par défaut) :**
- Widgets Facebook / Instagram embarqués
- Boutons de partage social
- Boutique Spreadshop (redirection uniquement, pas d'intégration)

**Durée** : Selon partenaire (12-24 mois si activé)
**Statut** : ⬜ Case à cocher (opt-in explicite) — **désactivé par défaut**

---

## 3. Boutons du panneau de préférences

### En bas du panneau (ordre)
1. **Refuser tout** (secondaire)
2. **Enregistrer mes choix** (primaire, doré)
3. **Accepter tout** (primaire, navy)

---

## 4. Rappel discret persistant

Une fois les préférences enregistrées, un lien discret reste en pied de page :

**« Gérer mes cookies »** — cliquable, rouvre le panneau de préférences à tout moment.

---

## 5. Message de confirmation (après enregistrement)

**Titre** : Vos préférences ont été enregistrées.

**Corps** : Merci — nous respectons vos choix. Vous pouvez les modifier à tout moment en cliquant sur « Gérer mes cookies » en pied de page.

**Fermeture** : Auto-fermeture après 5 secondes ou clic manuel.

---

## 6. Version courte pour cas d'urgence (fallback)

Si le panneau détaillé ne se charge pas correctement :

### Bandeau minimal
> Ce site utilise des cookies essentiels pour fonctionner. Pour l'analyse d'audience et les fonctionnalités enrichies, vous pouvez activer des cookies supplémentaires. **[Accepter] [Refuser] [En savoir plus]**

---

## 7. Textes légaux à insérer dans Complianz WordPress

### Configuration technique
- **Champ « Titre bannière »** : `Cookies & respect de votre vie privée`
- **Champ « Message principal »** : `Nous utilisons des cookies pour faire fonctionner notre site, mesurer son audience et améliorer votre expérience. Vous pouvez tout accepter, tout refuser ou choisir vos préférences.`
- **Bouton Accepter** : `Accepter tout`
- **Bouton Refuser** : `Refuser tout`
- **Bouton Personnaliser** : `Personnaliser mes choix`
- **Lien Politique** : `/politique-cookies/`
- **Lien Confidentialité** : `/politique-de-confidentialite/`

### Consentement CH-nLPD spécifique
- **Country priority** : Switzerland
- **Region** : Vaud
- **Framework** : `nLPD + GDPR`
- **Consent type** : Opt-in explicite pour catégories 2, 3, 4
- **Cookie policy generator** : Actif
- **Log consents** : Actif (traçabilité juridique)

---

## 8. Cas particuliers

### Bot WhatsApp
Ne relève **pas** du régime cookies (canal séparé). Consentement recueilli au premier contact WhatsApp avec message dédié :
> « Bienvenue sur le bot UNV. Pour utiliser ce service, vous acceptez notre politique de confidentialité. Répondez OUI pour continuer. »

### Iframes tierces (webcam Vidy, Windspot, Google Maps)
- Iframes activées par défaut avec cookies « fonctionnels »
- Si utilisateur refuse cookies fonctionnels → affichage placeholder + bouton « Charger le contenu externe »

### Formulaires
Chaque formulaire (adhésion, contact, bénévolat) inclut son propre consentement RGPD/nLPD **séparé** de la bannière cookies. Case à cocher NON pré-cochée avec texte :
> « J'accepte que mes données soient traitées par l'UNV conformément à sa [Politique de confidentialité](/politique-de-confidentialite/) pour le traitement de ma demande. »

---

## 9. Journalisation des consentements

Complianz enregistre automatiquement :
- Date et heure du consentement
- Version de la politique acceptée
- Choix par catégorie
- Horodatage de chaque modification

**Durée de conservation** : 3 ans (preuves juridiques en cas de contentieux)

---

*Wording préparé par HyperAgency (Nathalie Jungi) le 16 juin 2026. À intégrer dans Complianz WordPress lors de la Phase 4 du chantier Garcan.*
