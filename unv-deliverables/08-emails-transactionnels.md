# EMAILS TRANSACTIONNELS · 8 templates prêts à intégrer WordPress

**Format : sujet + corps HTML/texte**
**Adresse d'envoi : info@unv.ch**
**Signature commune : Union Nautique de Vidy — depuis 1962**
**Charte : ton chaleureux + vouvoiement + palette navy/gold en HTML**

---

## Email 1 · Confirmation de candidature d'adhésion

**Déclencheur** : Nouveau formulaire d'adhésion soumis
**Destinataire** : Le candidat
**Envoyé par** : Automatique (Fluent Forms → WP mail)

**Sujet** :
`Votre candidature d'adhésion à l'UNV a bien été reçue`

**Corps** :
```
Bonjour {prénom},

Votre candidature d'adhésion à l'Union Nautique de Vidy a bien été reçue.

Voici un récapitulatif :
• Type d'adhésion demandée : {type_adhésion}
• Date de soumission : {date}

Le comité examinera votre candidature lors de sa prochaine séance et vous recontactera dans un délai maximum de 15 jours.

En attendant, n'hésitez pas à consulter notre site pour découvrir les prochains événements du club.

Au plaisir de vous accueillir prochainement.

—
Le Comité
Union Nautique de Vidy
Allée du Bornan 10A · 1007 Lausanne
info@unv.ch

Un endroit convivial au bord de notre magnifique Lac Léman — depuis 1962.
```

---

## Email 2 · Notification comité — Nouvelle candidature reçue

**Déclencheur** : Nouveau formulaire d'adhésion soumis
**Destinataire** : Comité UNV
**Envoyé par** : Automatique

**Sujet** :
`[UNV] Nouvelle candidature d'adhésion — {prénom} {nom}`

**Corps** :
```
Bonjour,

Une nouvelle candidature d'adhésion a été soumise sur le site.

Informations candidat :
• Nom : {prénom} {nom}
• Date de naissance : {date_naissance}
• Adresse : {adresse}, {cp} {ville}
• Email : {email}
• Téléphone : {tel}
• Type d'adhésion : {type_adhésion}
• Bateau : {bateau}
• Message : {message}

Consentements donnés :
• Statuts UNV : {consent_statuts}
• Politique de confidentialité : {consent_rgpd}
• Newsletter : {consent_newsletter}
• Droit à l'image : {consent_photos}

▶ Accéder au tableau des candidatures : {url_admin}

Merci de traiter cette candidature lors de la prochaine séance.

—
Système UNV
```

---

## Email 3 · Adhésion validée par le comité

**Déclencheur** : Admin valide une candidature dans WP
**Destinataire** : Le nouveau membre
**Envoyé par** : Semi-automatique (bouton « Valider » dans admin WP)

**Sujet** :
`Bienvenue à bord de l'UNV — votre adhésion est validée`

**Corps** :
```
Bonjour {prénom},

Excellente nouvelle : votre candidature d'adhésion à l'Union Nautique de Vidy a été validée par le comité.

Vous êtes officiellement membre {type_adhésion} pour l'année 2026.

Prochaines étapes :

1. Créez votre accès à l'espace membre
   Cliquez sur ce lien pour accéder à votre espace personnel — pas besoin de mot de passe :
   → {url_espace_membre}

2. Réglez votre cotisation
   Montant : CHF {montant_cotisation}
   Vous trouverez le QR-bill de paiement directement dans votre espace membre.

3. Rejoignez-nous
   Notre Club House vous est ouvert. Consultez les prochains événements pour organiser votre première venue.

Toute l'équipe UNV vous souhaite la bienvenue.

—
Eric Schmaltz
Président de l'Union Nautique de Vidy
info@unv.ch
```

---

## Email 4 · Magic Link — Connexion espace membre

**Déclencheur** : Membre demande son lien de connexion
**Destinataire** : Le membre
**Envoyé par** : Automatique (Passwordless Login WP)

**Sujet** :
`Votre lien de connexion à l'espace membre UNV`

**Corps** :
```
Bonjour {prénom},

Voici votre lien de connexion sécurisé à votre espace membre UNV :

→ {url_magic_link}

Ce lien est valable 15 minutes et à usage unique.

Si vous n'êtes pas à l'origine de cette demande, ignorez simplement ce message. Aucune action n'est requise.

—
Union Nautique de Vidy
info@unv.ch
```

---

## Email 5 · Confirmation réservation Club House

**Déclencheur** : Membre soumet une demande de réservation Club House
**Destinataire** : Le membre
**Envoyé par** : Automatique

**Sujet** :
`Votre demande de réservation du Club House a été reçue`

**Corps** :
```
Bonjour {prénom},

Votre demande de réservation du Club House a bien été enregistrée.

Détails :
• Date : {date_réservation}
• Créneau : {créneau}
• Motif : {motif}
• Nombre de personnes : {nb_personnes}

Le comité validera votre demande dans un délai de 48h ouvrées et vous recontactera pour confirmation.

—
Union Nautique de Vidy
info@unv.ch
```

---

## Email 6 · Confirmation résiliation

**Déclencheur** : Membre soumet une demande de résiliation
**Destinataire** : Le membre
**Envoyé par** : Automatique

**Sujet** :
`Votre demande de résiliation a bien été reçue`

**Corps** :
```
Bonjour {prénom},

Nous avons bien reçu votre demande de résiliation d'adhésion à l'UNV.

Le comité l'examinera lors de sa prochaine séance et vous confirmera la date de prise d'effet par email.

Récapitulatif :
• Date de demande : {date}
• Motif indiqué : {motif}
• Prise d'effet demandée : {date_prise_effet}

Vos données seront conservées durant 3 ans à compter de la prise d'effet, conformément à notre politique de confidentialité, puis définitivement supprimées.

Nous vous remercions pour ces années passées à bord de l'UNV.

—
Le Comité
Union Nautique de Vidy
info@unv.ch
```

---

## Email 7 · Formulaire de contact — Confirmation d'envoi

**Déclencheur** : Message reçu via formulaire contact
**Destinataire** : L'auteur du message
**Envoyé par** : Automatique

**Sujet** :
`Nous avons bien reçu votre message`

**Corps** :
```
Bonjour {prénom},

Merci pour votre message.

Nous vous répondrons dans les meilleurs délais — généralement sous 3 jours ouvrés.

Récapitulatif de votre demande :
• Sujet : {sujet}
• Date d'envoi : {date}

En cas d'urgence, vous pouvez également nous joindre par téléphone au {tel_officiel}.

—
Union Nautique de Vidy
Allée du Bornan 10A · 1007 Lausanne
info@unv.ch
```

---

## Email 8 · Newsletter mensuelle (template)

**Déclencheur** : Envoi manuel mensuel par HyperAgency ou comité
**Destinataire** : Membres opt-in newsletter
**Envoyé par** : Manuel via WP ou service externe (Mailgun/Resend)

**Sujet** :
`Les nouvelles de l'UNV — {mois} {année}`

**Structure du corps** :

```
[HERO IMAGE — 600x300 — photo du mois]

Bonjour {prénom},

[EDITO — 3-4 lignes du Président]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 EN BREF CE MOIS-CI

• {événement 1}
• {événement 2}
• {événement 3}

▶ Voir le calendrier complet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 ZOOM SUR

[Photo + titre + 2-3 lignes]
[Un portrait de membre / un événement passé / une actualité clé]

▶ Lire l'article complet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌊 LE LAC EN {SAISON}

[Info pratique saisonnière : météo, particularités du mois, conseils navigation]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📢 À NOTER

• Prochaine assemblée / séance comité
• Rappel administratif (cotisation, etc.)
• Appel bénévoles pour tel événement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Naviguons ensemble depuis 1962.

—
Le Comité
Union Nautique de Vidy
Allée du Bornan 10A · 1007 Lausanne
info@unv.ch

[Se désabonner de la newsletter]
[Politique de confidentialité]
```

---

## Configuration technique WordPress

### SMTP obligatoire (pas WP mail natif)
- Installer plugin **WP Mail SMTP** ou **FluentSMTP**
- Configurer avec :
  - **Option A** : SMTP Infomaniak (limite 50/jour — OK pour transactionnels du quotidien)
  - **Option B** : Mailgun ou Resend (20'000 emails/mois gratuits — recommandé pour newsletter et volume)
- Domaine expéditeur : `info@unv.ch`
- SPF / DKIM / DMARC à configurer sur DNS Infomaniak (Pedro)

### Charte visuelle emails HTML
- Largeur max : 600px
- Fond général : **cream** (#F5F0E8)
- Header : bandeau **navy** (#0B1F3A) avec logo UNV blanc
- Corps : fond blanc, texte navy, Inter 15px
- CTAs : boutons **gold** (#C8A44A) avec texte navy
- Footer : navy avec texte cream 12px + liens désabonnement obligatoire

### Variables Fluent Forms / Passwordless Login
Chaque `{variable}` correspond à un merge tag configuré dans le plugin de formulaire ou d'authentification. À mapper avec Pedro lors de l'intégration.

### Test avant MEP
Envoyer chaque email de test à `nathalie.luana.jungi@gmail.com` AVANT mise en ligne, pour valider :
- Rendu HTML sur Gmail, Outlook, Apple Mail
- Rendu mobile
- Liens fonctionnels
- SPF/DKIM valides (pas en spam)

---

*Emails préparés par HyperAgency (Nathalie Jungi) le 16 juin 2026. Prêts pour intégration WP dès Kadence en place.*
