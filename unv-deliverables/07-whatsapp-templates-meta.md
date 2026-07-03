# TEMPLATES META WHATSAPP · 10 templates prêts à soumettre

**Catégorie principale : UTILITY · Langue : fr**
**À soumettre via Meta Business Manager puis Wassenger dès accès lundi 22.06**

**Délai d'approbation Meta : 24-48h par template**
**Volume UNV : < 1000 conversations/mois = palier gratuit**

---

## Convention de nommage

Format : `unv_[fonction]_[detail]`
- Tout en minuscule
- Underscore uniquement
- Ex : `unv_event_reminder_j7`

---

## Variables Meta

Format : `{{1}}`, `{{2}}`, `{{3}}` etc.
Toujours documenter le mapping variable ↔ contenu dans le champ « Description » du template Meta.

---

## Template 1 · Confirmation inscription événement

**Nom** : `unv_event_confirmation`
**Catégorie** : UTILITY
**Langue** : fr

**Header (optionnel)** :
🎉 Inscription confirmée

**Corps** :
```
Bonjour {{1}},

Votre inscription à l'événement *{{2}}* est confirmée.

📅 Date : {{3}}
📍 Lieu : {{4}}

Au plaisir de vous y retrouver.

Union Nautique de Vidy
```

**Footer** :
Pour vous désinscrire de ces notifications, répondez STOP.

**Variables** :
- {{1}} = Prénom membre
- {{2}} = Nom de l'événement
- {{3}} = Date au format « JJ mois AAAA »
- {{4}} = Lieu (ex: Port de Vidy, Club House)

---

## Template 2 · Rappel événement J-7

**Nom** : `unv_event_reminder_j7`
**Catégorie** : UTILITY
**Langue** : fr

**Corps** :
```
Bonjour {{1}},

Petit rappel : l'événement *{{2}}* aura lieu dans 7 jours, le {{3}} à {{4}}.

Vous êtes inscrit·e — au plaisir de vous y voir !

Union Nautique de Vidy
```

**Footer** :
Répondez STOP pour vous désinscrire.

**Boutons interactifs (optionnel)** :
- « Voir le détail » (URL vers `/calendrier/[event]`)
- « Me désinscrire » (Quick Reply)

**Variables** :
- {{1}} = Prénom
- {{2}} = Nom événement
- {{3}} = Date
- {{4}} = Heure

---

## Template 3 · Rappel événement J-1

**Nom** : `unv_event_reminder_j1`
**Catégorie** : UTILITY
**Langue** : fr

**Header** :
⏰ Rappel : demain

**Corps** :
```
Bonjour {{1}},

L'événement *{{2}}* a lieu demain, {{3}} à {{4}}.

Météo prévue : {{5}}
Rendez-vous : {{6}}

Bonne préparation !

Union Nautique de Vidy
```

**Variables** :
- {{1}} = Prénom
- {{2}} = Nom événement
- {{3}} = Jour (ex: samedi)
- {{4}} = Heure
- {{5}} = Météo courte (ex: « Ensoleillé, 22°C, vent NE 8 km/h »)
- {{6}} = Lieu précis (ex: « Ponton principal Port de Vidy »)

---

## Template 4 · Nouvel événement publié (notification opt-in)

**Nom** : `unv_event_new`
**Catégorie** : UTILITY
**Langue** : fr

**Header** :
📅 Nouvel événement UNV

**Corps** :
```
Bonjour {{1}},

Un nouvel événement vient d'être ajouté au calendrier :

*{{2}}*
📅 {{3}}
📍 {{4}}

{{5}}

Inscrivez-vous depuis votre espace membre ou en cliquant ci-dessous.

Union Nautique de Vidy
```

**Boutons** :
- « M'inscrire » (URL espace membre)
- « Voir le détail » (URL page événement)

**Variables** :
- {{1}} = Prénom
- {{2}} = Nom événement
- {{3}} = Date
- {{4}} = Lieu
- {{5}} = Description courte (max 100 caractères)

---

## Template 5 · Alerte trésorier cotisations en retard (hebdo)

**Nom** : `unv_treasurer_alert_weekly`
**Catégorie** : UTILITY
**Langue** : fr

**Header** :
⚠️ Cotisations en retard — semaine {{1}}

**Corps** :
```
Bonjour Claude-Alain,

Rapport hebdomadaire des cotisations :

🔴 En retard : {{2}} membres — total dû CHF {{3}}
🟡 À venir : {{4}} membres

Consultez le détail dans l'espace comité :
{{5}}

Union Nautique de Vidy — Système automatique
```

**Variables** :
- {{1}} = Numéro semaine ISO (ex: « 26 »)
- {{2}} = Nombre membres en retard
- {{3}} = Total CHF (format « 1'250 »)
- {{4}} = Nombre membres à venir
- {{5}} = URL espace comité

**Destinataire** : Trésorier uniquement (whitelisté)

---

## Template 6 · Magic link login espace membre

**Nom** : `unv_magic_link_login`
**Catégorie** : AUTHENTICATION
**Langue** : fr

**Corps** :
```
Bonjour {{1}},

Voici votre lien de connexion sécurisé à votre espace membre UNV :

{{2}}

Ce lien est valable 15 minutes et à usage unique.

Si vous n'êtes pas à l'origine de cette demande, ignorez ce message.

Union Nautique de Vidy
```

**Variables** :
- {{1}} = Prénom
- {{2}} = URL magic link (générée par Passwordless Login WP)

**Note** : catégorie AUTHENTICATION requise chez Meta pour les liens de connexion. Plus rapide à approuver.

---

## Template 7 · Confirmation adhésion validée

**Nom** : `unv_membership_approved`
**Catégorie** : UTILITY
**Langue** : fr

**Header** :
🎉 Bienvenue à bord

**Corps** :
```
Bonjour {{1}},

Votre candidature d'adhésion à l'Union Nautique de Vidy a été validée par le comité.

Vous êtes officiellement membre {{2}} pour l'année {{3}} 🎉

Prochaines étapes :
1. Consultez votre espace membre : {{4}}
2. Réglez votre cotisation ({{5}}) par QR-bill (disponible dans votre espace)
3. Rejoignez-nous au Club House

Toute l'équipe UNV vous souhaite la bienvenue.

Union Nautique de Vidy — depuis 1962
```

**Variables** :
- {{1}} = Prénom
- {{2}} = Type d'adhésion (« actif », « sympathisant », « junior »)
- {{3}} = Année (ex: « 2026 »)
- {{4}} = URL espace membre
- {{5}} = Montant cotisation (ex: « CHF 250 »)

---

## Template 8 · Accusé réception demande de résiliation

**Nom** : `unv_resignation_ack`
**Catégorie** : UTILITY
**Langue** : fr

**Corps** :
```
Bonjour {{1}},

Nous avons bien reçu votre demande de résiliation.

Le comité l'examinera lors de sa prochaine séance et vous confirmera la prise d'effet dans les meilleurs délais.

Vos données seront conservées durant 3 ans conformément à notre politique, puis supprimées.

Merci pour ces années passées ensemble.

Union Nautique de Vidy
```

**Variables** :
- {{1}} = Prénom

---

## Template 9 · Bot menu principal (button-driven)

**Nom** : `unv_bot_menu_main`
**Catégorie** : UTILITY
**Langue** : fr

**Corps** :
```
Bonjour {{1}} ⚓

Je suis l'assistant de l'Union Nautique de Vidy.

Sélectionnez ci-dessous ce qui vous intéresse :
```

**Boutons interactifs** (3 max) :
1. `📅 Prochain événement`
2. `💳 Ma cotisation`
3. `📞 Contacter le comité`

**Variables** :
- {{1}} = Prénom (si membre reconnu) OU « visiteur »

---

## Template 10 · Réponse bot — Statut cotisation

**Nom** : `unv_bot_cotisation_status`
**Catégorie** : UTILITY
**Langue** : fr

**Corps** :
```
Bonjour {{1}},

Voici le statut de votre cotisation {{2}} :

Statut : {{3}}
{{4}}

Vous pouvez consulter le détail et télécharger vos quittances depuis votre espace membre :

{{5}}

Union Nautique de Vidy
```

**Variables** :
- {{1}} = Prénom
- {{2}} = Année (ex: « 2026 »)
- {{3}} = Statut (« ✅ Payée le JJ.MM.AAAA », « 🟡 En attente », « 🔴 En retard depuis JJ.MM.AAAA »)
- {{4}} = Message contextuel (ex: « Merci pour votre paiement. » ou « Un rappel a été envoyé par email. »)
- {{5}} = URL magic link espace membre

---

## Notes importantes pour Meta soumission

### Catégories Meta
- **UTILITY** (utilitaire) — pour toutes les notifications transactionnelles
- **AUTHENTICATION** (auth) — pour les codes et liens de connexion (plus rapide à approuver)
- **MARKETING** (marketing) — ÉVITER pour cette V1 (approbation plus difficile + comptes gratuit limité)

### Règles à respecter pour éviter les refus
1. **Pas de contenu promotionnel** dans les templates UTILITY
2. **Pas de langage vague** — chaque template a un objectif transactionnel clair
3. **Variables toutes utilisées** — jamais de {{5}} qui n'apparaît pas dans le corps
4. **Ponctuation propre** — pas de caractères spéciaux non standards
5. **Footer désabonnement** obligatoire pour les templates non-authentification
6. **Longueur max** : 1024 caractères pour le corps

### Boutons interactifs
- Maximum 3 quick replies OU 2 URL buttons OU 1 phone number
- Ne pas mélanger types de boutons dans le même template

### Header (optionnel)
- Texte simple, image, document ou vidéo
- Maximum 60 caractères pour un header texte
- **Recommandation** : emojis en header pour identification visuelle rapide

---

## Ordre de priorité de soumission

**Lundi 22.06 (batch 1 — arriveront jeudi 25.06 au plus tard) :**
1. `unv_bot_menu_main` (nécessaire pour le bot de base)
2. `unv_bot_cotisation_status` (use case principal)
3. `unv_magic_link_login` (auth, priorité haute)
4. `unv_event_reminder_j7` (notification event)
5. `unv_event_reminder_j1` (notification event)

**Mardi 23.06 (batch 2) :**
6. `unv_event_confirmation`
7. `unv_event_new`
8. `unv_membership_approved`
9. `unv_treasurer_alert_weekly`
10. `unv_resignation_ack`

Ainsi tous les templates critiques sont approuvés d'ici jeudi 25.06 = câblage Make possible vendredi.

---

*Templates préparés par HyperAgency (Nathalie Jungi) le 16 juin 2026. Ready to submit via Wassenger dès accès Meta Business Manager lundi 22 juin.*
