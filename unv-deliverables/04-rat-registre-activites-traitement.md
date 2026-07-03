# REGISTRE DES ACTIVITÉS DE TRAITEMENT (RAT)

**Union Nautique de Vidy · Document interne · Article 12 nLPD**
**Dernière mise à jour : 16 juin 2026 · Version 1.0**
**Responsable de traitement : Eric Schmaltz, Président**

---

## Préambule

Le présent registre recense l'ensemble des activités de traitement de données personnelles opérées par l'Union Nautique de Vidy, conformément à l'article 12 de la nLPD. Il est tenu à jour par le responsable de traitement et présenté sur demande au Préposé Fédéral à la Protection des Données et à la Transparence (PFPDT).

---

## Traitement N°1 — Gestion des adhésions

| Rubrique | Description |
|---|---|
| **Finalité** | Gestion administrative des adhésions, tenue à jour du fichier des membres |
| **Base légale** | Contrat (statuts de l'association) — art. 31 nLPD |
| **Catégories de personnes** | Membres actifs, sympathisants, juniors, candidats à l'adhésion |
| **Catégories de données** | Identité (nom, prénom, date naissance), coordonnées (adresse, email, tél), informations nautiques (bateau, port), photo (avec consentement) |
| **Destinataires internes** | Comité UNV (Président, VP, Trésorier, Secrétaire) |
| **Sous-traitants** | Infomaniak (hébergement), Garcan Digital (maintenance) |
| **Transferts hors CH/UE** | Aucun |
| **Durée de conservation** | Durée de l'adhésion + 3 ans post-résiliation |
| **Mesures de sécurité** | HTTPS + 2FA admin + Wordfence + backup hebdomadaire |

---

## Traitement N°2 — Encaissement des cotisations

| Rubrique | Description |
|---|---|
| **Finalité** | Encaissement des cotisations annuelles, émission de quittances, comptabilité |
| **Base légale** | Obligation légale (Code des Obligations, tenue comptable) |
| **Catégories de personnes** | Membres actifs, sympathisants, juniors |
| **Catégories de données** | Identité, montant cotisation, date de paiement, statut, quittance PDF |
| **Destinataires internes** | Trésorier (Claude-Alain Chapalay), Président |
| **Sous-traitants** | Banana Accounting (logiciel local trésorier), Infomaniak |
| **Transferts hors CH/UE** | Aucun (Banana = local · Infomaniak = CH) |
| **Durée de conservation** | 10 ans (art. 958f Code des Obligations) |
| **Mesures de sécurité** | Accès Banana restreint au Trésorier, upload CSV WordPress via compte admin nominatif |

---

## Traitement N°3 — Organisation des événements

| Rubrique | Description |
|---|---|
| **Finalité** | Organisation des régates, formations, sorties, événements sociaux (Baptême annuel, Fête nationale, brunches) |
| **Base légale** | Contrat (statuts), consentement pour photos |
| **Catégories de personnes** | Membres, invités, bénévoles |
| **Catégories de données** | Identité, coordonnées, participation, choix repas/allergies, photos (avec consentement) |
| **Destinataires internes** | Comité UNV, organisateur événement (Yannick Morand) |
| **Sous-traitants** | Infomaniak, Wassenger (notifs WhatsApp) |
| **Transferts hors CH/UE** | Meta (Wassenger) — SCC + Adéquation UE |
| **Durée de conservation** | 3 ans après événement (historique participation) |
| **Mesures de sécurité** | Accès restreint via WP admin, notifications automatiques uniquement à membres inscrits |

---

## Traitement N°4 — Communication (newsletter, réseaux sociaux, WhatsApp)

| Rubrique | Description |
|---|---|
| **Finalité** | Information des membres et sympathisants sur la vie du club |
| **Base légale** | Consentement (opt-in explicite) |
| **Catégories de personnes** | Abonnés newsletter, membres opt-in WhatsApp, followers réseaux sociaux |
| **Catégories de données** | Nom, prénom, email, tél (WhatsApp), préférences de communication, statut ouverture emails |
| **Destinataires internes** | Comité, HyperAgency (délégation communication) |
| **Sous-traitants** | Wassenger, Meta (WhatsApp Cloud API), Make.com, Mailgun/Resend (emails), Meta Facebook/Instagram (à venir), LinkedIn (à venir) |
| **Transferts hors CH/UE** | UE et USA (SCC en vigueur) |
| **Durée de conservation** | Jusqu'à désabonnement (immédiat sur demande) |
| **Mesures de sécurité** | Opt-in confirmé, lien désabonnement dans chaque email/message, révocation traçable |

---

## Traitement N°5 — Bot WhatsApp

| Rubrique | Description |
|---|---|
| **Finalité** | Interaction bot avec les membres (informations événements, statut cotisation, contact comité) |
| **Base légale** | Consentement (opt-in au premier contact) |
| **Catégories de personnes** | Membres inscrits au service bot |
| **Catégories de données** | Numéro téléphone WhatsApp, contenu des interactions, PIN cotisation (chiffré) |
| **Destinataires internes** | Comité (pour supervision) |
| **Sous-traitants** | Wassenger (ES), Meta (IE/US), Make.com (CZ), Infomaniak (CH) |
| **Transferts hors CH/UE** | UE et USA (SCC en vigueur) |
| **Durée de conservation** | 6 mois glissants (interactions), permanent tant que membre actif (opt-in) |
| **Mesures de sécurité** | Webhook signé, PIN chiffré, journalisation des accès admin |

---

## Traitement N°6 — Espace comité (procès-verbaux et documents internes)

| Rubrique | Description |
|---|---|
| **Finalité** | Gestion documentaire interne du comité, archivage des procès-verbaux |
| **Base légale** | Obligation légale (tenue documentation associative), contrat statuts |
| **Catégories de personnes** | Membres du comité, sujets d'ordre du jour concernant des membres |
| **Catégories de données** | PV séances, décisions votées, documents joints (contrats, statuts, archives) |
| **Destinataires internes** | Membres du comité exclusivement (rôle « Comité » sur WordPress) |
| **Sous-traitants** | Google Drive (US — DPA Workspace), Infomaniak |
| **Transferts hors CH/UE** | USA (Google — SCC + DPF) |
| **Durée de conservation** | Archives permanentes pour PV (obligation statutaire), 10 ans pour docs administratifs |
| **Mesures de sécurité** | Iframe Google Drive avec permissions natives, RLS sur rôle Comité, 2FA obligatoire |

---

## Traitement N°7 — Analyse d'audience du site

| Rubrique | Description |
|---|---|
| **Finalité** | Amélioration de l'expérience utilisateur, comptage anonymisé des visites |
| **Base légale** | Consentement (bannière cookies) pour GA4 · Intérêt légitime + anonymisation pour Burst Statistics |
| **Catégories de personnes** | Visiteurs du site unv.ch |
| **Catégories de données** | Adresse IP anonymisée, pages visitées, durée, source, appareil, navigateur |
| **Destinataires internes** | Comité, HyperAgency |
| **Sous-traitants** | Burst Statistics (self-hosted, CH), Google Analytics 4 (US), Cloudflare (US) |
| **Transferts hors CH/UE** | USA (GA4, Cloudflare — SCC) |
| **Durée de conservation** | 14 mois maximum (GA4), 12 mois (Burst) |
| **Mesures de sécurité** | Anonymisation IP, opt-in granulaire via Complianz |

---

## Traitement N°8 — Formulaire de contact et demandes externes

| Rubrique | Description |
|---|---|
| **Finalité** | Réception et traitement des demandes de contact, bénévolat, questions générales |
| **Base légale** | Intérêt légitime (relation avec le public) |
| **Catégories de personnes** | Toute personne remplissant un formulaire (membres et non-membres) |
| **Catégories de données** | Nom, prénom, email, tél (facultatif), message, consentement |
| **Destinataires internes** | Comité (routing selon type de demande) |
| **Sous-traitants** | Infomaniak, Wordfence Anti-spam |
| **Transferts hors CH/UE** | Aucun |
| **Durée de conservation** | 24 mois après dernière interaction, sauf transformation en adhésion |
| **Mesures de sécurité** | Captcha anti-spam, validation email, journalisation |

---

## Traitement N°9 — Réservation Club House

| Rubrique | Description |
|---|---|
| **Finalité** | Gestion des réservations du Club House par les membres |
| **Base légale** | Contrat (accès Club House statutaire) |
| **Catégories de personnes** | Membres actifs |
| **Catégories de données** | Identité, créneau réservé, motif, nb personnes attendues |
| **Destinataires internes** | Comité (validation), autres membres (calendrier partagé) |
| **Sous-traitants** | Infomaniak (hébergement WP) |
| **Transferts hors CH/UE** | Aucun |
| **Durée de conservation** | 12 mois après le créneau réservé |
| **Mesures de sécurité** | Accès restreint aux membres logged-in, notification comité |

---

## Traitement N°10 — E-commerce merchandising (Spreadshop)

| Rubrique | Description |
|---|---|
| **Finalité** | Vente de produits dérivés UNV (casquettes, polos, t-shirts) via boutique externe |
| **Base légale** | Contrat de vente (Spreadshirt), commission perçue par UNV |
| **Catégories de personnes** | Acheteurs merchandising (membres et non-membres) |
| **Catégories de données** | Aucune donnée personnelle transitant par UNV (traitement Spreadshirt uniquement) |
| **Destinataires internes** | Comité (rapport commission mensuel/trimestriel) |
| **Sous-traitants** | Spreadshirt Group (DE) — DPA fournisseur applicable |
| **Transferts hors CH/UE** | UE (Adéquation) |
| **Durée de conservation** | N/A (données non traitées par UNV) |
| **Mesures de sécurité** | Redirection vers spreadshop.com/unv, aucun traitement interne |

---

## Traitement N°11 — Résiliation digitale d'adhésion

| Rubrique | Description |
|---|---|
| **Finalité** | Recueillir et traiter les demandes de résiliation d'adhésion |
| **Base légale** | Contrat (statuts) |
| **Catégories de personnes** | Membres démissionnaires |
| **Catégories de données** | Identité, motif de résiliation, date effet |
| **Destinataires internes** | Comité |
| **Sous-traitants** | Infomaniak |
| **Transferts hors CH/UE** | Aucun |
| **Durée de conservation** | 3 ans après résiliation, sauf obligations comptables (10 ans) |
| **Mesures de sécurité** | Formulaire authentifié espace membre, accusé de réception automatique |

---

## Traitement N°12 — Sauvegardes techniques

| Rubrique | Description |
|---|---|
| **Finalité** | Sauvegarde technique du site et de la base de données pour restauration en cas d'incident |
| **Base légale** | Intérêt légitime (continuité de service) + obligation légale (sécurité art. 8 nLPD) |
| **Catégories de personnes** | Toutes les catégories de personnes présentes en base |
| **Catégories de données** | Copie complète de la base de données WordPress |
| **Destinataires internes** | Pedro (Garcan Digital), Nathalie (accès admin) |
| **Sous-traitants** | UpdraftPlus, Infomaniak, Google Drive (destination stockage backup) |
| **Transferts hors CH/UE** | USA (Google Drive — SCC) |
| **Durée de conservation** | 30 jours de rétention rolling |
| **Mesures de sécurité** | Backup chiffré AES-256, accès restreint 2FA |

---

## Suivi et mises à jour

- Ce registre est **revu au minimum une fois par an** par le responsable de traitement
- Il est **mis à jour à chaque nouveau traitement** ou modification substantielle
- Il est **conservé sous forme électronique** dans le Drive du comité
- Il peut être **présenté aux autorités** sur simple demande (48h de délai)

## Contact

Pour toute question relative à ce registre :

**Eric Schmaltz** — Président
Union Nautique de Vidy
info@unv.ch

---

*Registre établi par HyperAgency (Nathalie Jungi) le 16 juin 2026 en conformité avec l'article 12 de la nLPD suisse.*
