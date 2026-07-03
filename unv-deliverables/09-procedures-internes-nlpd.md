# PROCÉDURES INTERNES nLPD

**Document interne UNV · Confidentiel · Version 1.0 · Juin 2026**
**À conserver dans l'espace comité (Drive)**

---

## 1. Procédure de notification de violation de données (72h)

### Objet
Conformément à l'article 24 nLPD, l'UNV doit notifier le PFPDT toute violation de données présentant un risque pour les droits fondamentaux des personnes concernées, dans un délai maximum de 72 heures.

### Étapes

**Étape 1 · Détection (H0)**
Toute personne ayant connaissance d'une violation possible informe **immédiatement** le Président par téléphone ou email, en précisant :
- Nature de l'incident
- Date et heure de découverte
- Systèmes concernés
- Estimation initiale des personnes touchées

**Étape 2 · Évaluation initiale (H0 → H6)**
Le Président convoque une cellule de crise incluant :
- Vice-Président (Jacques Jungi)
- Trésorier (Claude-Alain Chapalay)
- Prestataire technique (Pedro Garcia — Garcan Digital)
- Direction créative (Nathalie Jungi — HyperAgency)

Cette cellule évalue :
- Réalité et ampleur de la violation
- Types de données concernés
- Risques pour les personnes (identité, financier, réputation)
- Nécessité de notifier le PFPDT (si risque élevé)
- Nécessité d'informer les personnes concernées

**Étape 3 · Mesures conservatoires (H0 → H12)**
Pedro et l'équipe technique appliquent immédiatement :
- Isolation du système compromis
- Révocation des accès suspects
- Changement des mots de passe / tokens
- Sauvegarde forensique de l'état
- Journalisation détaillée de l'incident

**Étape 4 · Notification PFPDT (H0 → H72)**
Si risque élevé confirmé :
- Rédaction de la notification (template fourni par PFPDT)
- Envoi via [portail officiel PFPDT](https://databreach.edoeb.admin.ch)
- Signature du Président

Contenu minimum de la notification :
- Nature de la violation
- Nombre de personnes concernées
- Types de données
- Conséquences probables
- Mesures prises ou envisagées

**Étape 5 · Information des personnes concernées (H0 → H96)**
Si la violation présente un risque élevé pour les droits des personnes :
- Email individuel à chaque personne concernée
- Contenu : nature de la violation + mesures prises + recommandations
- Contact dédié : `info@unv.ch`

**Étape 6 · Documentation et rétrospective (H72 → J30)**
- Rapport interne complet dans le registre des violations
- Analyse des causes racines
- Plan d'action pour éviter récurrence
- Point comité lors de la prochaine séance

### Contacts d'urgence
- **PFPDT** : +41 58 462 43 95 · portail en ligne
- **Pedro Garcia (Garcan)** : +41 79 732 82 60
- **Nathalie Jungi (HyperAgency)** : [téléphone à ajouter]

### Registre des violations
Un registre est tenu dans le Drive comité, protégé par accès restreint. Chaque violation, même mineure, y est consignée avec :
- Date, heure, nature
- Personnes impliquées dans la découverte
- Mesures prises
- Suite donnée

---

## 2. Procédure d'exercice des droits des personnes

### Droits couverts
Conformément à la nLPD et au RGPD :
- **Droit d'accès** (art. 25 nLPD)
- **Droit de rectification** (art. 32 nLPD)
- **Droit d'effacement** (art. 32 nLPD)
- **Droit d'opposition** (art. 30 nLPD)
- **Droit à la portabilité** (art. 28 nLPD)

### Réception des demandes
Toutes les demandes arrivent à **info@unv.ch**.
Elles sont traitées par le **Secrétariat** (Laurence Chapalay) en coordination avec le **Président**.

### Étapes de traitement

**Étape 1 · Accusé de réception (J+2 max)**
Email automatique confirmant la réception et rappelant le délai de traitement (30 jours max).

**Étape 2 · Vérification de l'identité**
Le demandeur doit fournir :
- Copie de pièce d'identité (recto uniquement, informations non-essentielles masquables)
- OU authentification via son espace membre

**Étape 3 · Traitement (J+30 max)**

**Pour un droit d'accès** :
- Extraire les données du membre depuis WP admin + Banana
- Compiler dans un document PDF structuré
- Envoyer par email chiffré ou lien téléchargement sécurisé
- Journaliser dans le registre

**Pour un droit de rectification** :
- Confirmer les données à corriger
- Effectuer la mise à jour dans WordPress + Banana
- Envoyer confirmation au demandeur

**Pour un droit d'effacement** :
- Vérifier obligations légales de conservation (ex: comptabilité = 10 ans obligatoire)
- Si effacement possible : supprimer des systèmes actifs, marquer comme anonymisé en base
- Confirmer au demandeur avec liste des données supprimées et éventuelles données conservées + base légale
- Journaliser l'opération

**Pour un droit d'opposition** :
- Suspendre le traitement contesté (ex: newsletter)
- Modifier consentements dans les systèmes
- Confirmer au demandeur

**Pour un droit à la portabilité** :
- Extraire les données au format CSV/JSON
- Fournir un fichier téléchargeable sécurisé
- Confirmer au demandeur

**Étape 4 · Traçabilité**
Chaque demande + traitement + réponse est archivée dans le registre des demandes, conservé 3 ans.

### Cas de refus
Si la demande ne peut être satisfaite (ex: obligation légale de conservation) :
- Motiver le refus par écrit
- Rappeler le droit de saisir le PFPDT

---

## 3. Procédure de gestion des consentements

### Types de consentement
- **Consentement adhésion** (statuts + traitement données)
- **Consentement newsletter** (opt-in séparé)
- **Consentement droit à l'image** (photos publiées)
- **Consentement WhatsApp** (bot + notifications)
- **Consentement cookies** (bannière granulaire)

### Modalités
Chaque consentement est :
- **Explicite** (case à cocher non pré-cochée)
- **Séparé** (un consentement = une finalité)
- **Traçable** (journalisation avec date + version de la politique)
- **Révocable** (à tout moment, sans justification)

### Révocation
Modalités :
- Newsletter : lien « désabonnement » dans chaque email
- WhatsApp bot : mot-clé STOP
- Droit à l'image : email à info@unv.ch
- Cookies : bouton « Gérer mes cookies » en pied de page

Prise d'effet : **immédiate** (max 24h)

### Journalisation
Chaque consentement et chaque révocation sont journalisés dans WordPress via Complianz + tables custom UNV.

---

## 4. Procédure de gestion des sous-traitants (DPA)

### Sous-traitants actuels
Voir document `10-dpa-fournisseurs.md` pour la liste complète et les statuts.

### Avant tout nouveau sous-traitant
- Évaluation nLPD :
  - Type de données transférées
  - Localisation
  - Niveau de sécurité
  - Base juridique du transfert (adéquation UE / SCC / autre)
- Signature d'un DPA formalisé
- Ajout au RAT
- Ajout à la politique de confidentialité publique

### Revue annuelle
- Vérification que chaque DPA est toujours actif
- Contrôle des mises à jour des politiques fournisseurs
- Mise à jour du RAT si évolution
- Point en séance comité annuel

---

## 5. Procédure de sauvegarde et restauration

### Sauvegarde
- **Fréquence** : quotidienne pour la base WP, hebdomadaire pour l'ensemble du site
- **Outil** : UpdraftPlus (WP) + éventuellement backup Infomaniak
- **Destination** : Google Drive UNV (chiffré)
- **Rétention** : 30 jours glissants
- **Test de restauration** : une fois par trimestre par Pedro

### Restauration
En cas d'incident nécessitant restauration :
1. Décision par Président + Pedro
2. Notification aux membres si downtime > 2h
3. Restauration par Pedro depuis backup le plus récent (avant incident)
4. Vérification intégrité des données
5. Communication de rétablissement
6. Rapport d'incident dans registre

---

## 6. Procédure de fin de mandat / départ du comité

### Membres du comité sortants
À chaque renouvellement du comité (assemblée générale) :
- Révocation des accès WP admin et espace comité
- Récupération de tout document confidentiel
- Signature d'un engagement de confidentialité continu (art. 60 nLPD)
- Journalisation de la révocation

### Prestataires en fin de mandat
En cas de fin de collaboration avec Pedro (Garcan) ou Nathalie (HyperAgency) :
- Récupération de tous les accès et codes sources
- Récupération complète du site + base + assets
- Signature d'un accord de non-divulgation continu
- Certificat de destruction des copies chez le prestataire

---

## 7. Procédure de mise à jour de la politique de confidentialité

### Cas nécessitant révision
- Ajout d'un nouveau traitement
- Ajout d'un nouveau sous-traitant
- Changement de finalité d'un traitement existant
- Évolution législative (mise à jour nLPD)

### Modalités
1. Rédaction par HyperAgency (Nathalie) ou responsable désigné
2. Validation par le comité en séance
3. Publication de la nouvelle version sur `/politique-de-confidentialite/`
4. Notification aux membres par email si changement substantiel
5. Bandeau visible sur le site pendant 30 jours
6. Archivage de la version précédente

### Historique
Toutes les versions successives sont archivées dans le Drive comité avec horodatage.

---

## 8. Formation des membres du comité

### Objectif
Chaque membre du comité doit être sensibilisé aux principes nLPD et aux procédures ci-dessus.

### Modalités
- **Session initiale** : 30 min lors de l'entrée en fonction
- **Rappel annuel** : lors de la première séance comité de chaque année
- **Documentation** : ce document + politique conf + RAT accessibles dans espace comité

### Points clés à connaître
- L'UNV traite des données personnelles → responsabilité collective
- Sanctions personnelles jusqu'à CHF 250'000 pour manquements graves
- Toute suspicion de fuite = notification immédiate au Président
- Confidentialité absolue sur les données consultées dans le cadre du mandat

---

*Procédures rédigées par HyperAgency (Nathalie Jungi) le 16 juin 2026 en conformité avec la nLPD suisse. À valider par le comité UNV avant intégration officielle dans les documents internes.*
