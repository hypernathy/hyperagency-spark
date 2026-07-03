# DPA FOURNISSEURS · Statuts & procédures signatures

**Document interne · Juin 2026 · V1.0**

---

## Contexte

Conformément à l'article 9 de la nLPD, l'UNV doit conclure des accords de traitement de données (Data Processing Agreements) avec chaque sous-traitant qui traite des données personnelles pour son compte.

Ce document liste chaque fournisseur, statut du DPA, référence, et actions requises.

---

## Statuts des DPA

| # | Fournisseur | Rôle | Localisation | DPA | Statut | Action |
|---|---|---|---|---|---|---|
| 1 | **Infomaniak Network SA** | Hébergement web + email | 🇨🇭 CH | DPA standard téléchargeable | ✅ À signer | Télécharger + signer + archiver |
| 2 | **Cloudflare Inc.** | CDN + protection | 🇺🇸 US | DPA standard + SCC | ✅ À accepter | Via Manager Cloudflare |
| 3 | **Wassenger** | Passerelle WhatsApp | 🇪🇸 UE | DPA standard | ⏳ À signer lundi | Après ouverture compte |
| 4 | **Meta Platforms Ireland** | WhatsApp Cloud API | 🇮🇪 UE | Conditions Meta Business | ⏳ À accepter lundi | Lors de la vérification BM |
| 5 | **Make.com (Celonis)** | Automatisation | 🇨🇿 UE | DPA standard | ⏳ À signer | Lors de l'ouverture compte |
| 6 | **Google LLC (Workspace / Drive)** | Stockage documents comité | 🇺🇸 US | Google Workspace DPA | ✅ À accepter | Via Google Admin Console |
| 7 | **Google Analytics 4** | Analytics site | 🇺🇸 US | GA4 DPA | ✅ À accepter | Via GA4 Admin |
| 8 | **Spreadshirt Group** | Merchandising boutique | 🇩🇪 UE | DPA standard | 🟡 À voir | Lors de l'ouverture Spreadshop |
| 9 | **Garcan Digital (Pedro Garcia)** | Développement + maintenance | 🇨🇭 CH | Contrat signé du 11 juin | ✅ Signé | Aucune action |
| 10 | **HyperAgency (Nathalie Jungi)** | Direction créative + stratégie | 🇨🇭 CH | À intégrer à la proposition strat | ⏳ À signer | Avec proposition add-on |
| 11 | **UpdraftPlus (Updraft LLC)** | Backup WP | 🇬🇧 UK | DPA standard | 🟡 À voir si nécessaire | À évaluer |
| 12 | **Mailgun / Resend** (si utilisé) | Email transactionnel | 🇺🇸 US | DPA fournisseur | 🟡 À évaluer | Si utilisé pour envoi > SMTP Infomaniak |

---

## DPA détaillés — Formulations types

### DPA Infomaniak
**URL** : https://infomaniak.com/fr/legal
**Signataire côté UNV** : Eric Schmaltz (Président)
**Points clés** :
- Serveurs situés en Suisse (Genève)
- Chiffrement des données au repos
- Notification en cas de violation
- Retour ou destruction des données en fin de contrat
- Sous-traitants ultérieurs listés et acceptés

**Procédure** :
1. Télécharger le DPA depuis le Manager Infomaniak
2. Signer et retourner à Infomaniak
3. Archiver la copie signée dans Drive comité

---

### DPA Cloudflare
**URL** : https://www.cloudflare.com/cloudflare-customer-dpa/
**Signataire** : Eric Schmaltz (par acceptation en ligne)
**Points clés** :
- Standard Contractual Clauses (SCC) UE
- Certification EU-US Data Privacy Framework
- Sous-traitants listés
- Notification 72h en cas de violation

**Procédure** :
1. Se connecter au dashboard Cloudflare
2. Accepter le DPA en un clic
3. Télécharger et archiver le certificat

---

### DPA Wassenger
**Contact** : privacy@wassenger.com
**Signataire** : Nathalie Jungi (mandat Eric)
**Points clés** :
- Serveurs UE (Espagne)
- Chiffrement des messages en transit
- Journaux techniques anonymisés
- Suppression des données à la clôture du compte

**Procédure** :
1. Après ouverture du compte UNV lundi 22.06
2. Demander DPA via email support Wassenger
3. Signer et archiver

---

### DPA Meta (WhatsApp Business API)
**URL** : https://www.whatsapp.com/legal/business-solution-terms
**Signataire** : Eric Schmaltz (mandat Nathalie)
**Points clés** :
- Conditions générales WhatsApp Business acceptées par Business Manager
- Transferts US encadrés par SCC + DPF
- Sous-traitants Meta listés (Facebook, Instagram, WhatsApp, etc.)

**Procédure** :
1. Lors de la création du Meta Business Manager UNV
2. Acceptation en ligne lors du parcours de vérification
3. Screenshot d'archive dans Drive comité

---

### DPA Make.com
**URL** : https://www.make.com/en/dpa
**Signataire** : Nathalie Jungi
**Points clés** :
- Serveurs UE (République Tchèque)
- Sub-processeurs listés (AWS US, Google Cloud US)
- Notification 72h
- Rétention des données limitée à la durée du contrat

**Procédure** :
1. Après ouverture du compte
2. Accepter le DPA depuis les settings du compte
3. Archiver la confirmation

---

### DPA Google Workspace + GA4
**URLs** :
- Workspace : https://workspace.google.com/terms/dpa_terms.html
- Analytics : https://support.google.com/analytics/answer/9012600

**Signataire** : Eric Schmaltz (par acceptation admin)
**Points clés** :
- Standard Contractual Clauses UE-US
- Sous-traitants Google listés
- Certification DPF (EU-US Data Privacy Framework)
- Chiffrement au repos et en transit

**Procédure** :
1. Lors de la création du compte Google UNV
2. Accepter le DPA depuis Admin Console
3. Configurer GA4 avec IP anonymisée + pas de signaux Google
4. Archiver confirmation

---

### DPA Spreadshirt (si activation Spreadshop)
**URL** : https://help.spreadshop.com/hc/en-us/articles/900004832646
**Signataire** : Nathalie Jungi (mandat)
**Points clés** :
- Serveurs UE (Allemagne)
- Aucune donnée personnelle UNV traitée directement par UNV (Spreadshirt seul gère les commandes)
- Rapport de commission mensuel envoyé à UNV

**Procédure** :
1. Si Spreadshop activé
2. Signer le DPA lors de la création du shop UNV
3. Archiver

---

### DPA Garcan Digital
**Statut** : Intégré au contrat signé du 11 juin 2026
**Signataire** : Eric Schmaltz (validé par email)
**Points clés (extraits du contrat)** :
- Secret professionnel absolu (Art. 10 Conditions particulières)
- Aucune divulgation à tiers
- Retour ou destruction des données en fin de mission
- Sécurité technique livrée conforme nLPD

**Aucune action supplémentaire requise.**

---

### DPA HyperAgency (Nathalie Jungi)
**Statut** : À intégrer à la proposition strat add-on (voir `UNV_Strategic_Addon_Proposal.html`)
**Signataire** : Eric Schmaltz + Nathalie Jungi
**Points à inclure dans la proposition** :
- Secret professionnel
- Confidentialité perpétuelle
- Retour / destruction des données en fin de mandat
- Sécurité minimale (Drive chiffré, 2FA, machine perso protégée)

**Procédure** :
1. Ajouter clause DPA à la proposition strat add-on
2. Signer avec la proposition
3. Archiver

---

## Registre des DPA signés

| Fournisseur | Date signature | Signataire UNV | Version | Fichier archive |
|---|---|---|---|---|
| Garcan Digital | 11.06.2026 | Eric Schmaltz | Contrat 11/06 | `Drive/UNV/Legal/DPA/2026-Garcan-Contract.pdf` |
| Infomaniak | À faire | Eric Schmaltz | v2024 | `Drive/UNV/Legal/DPA/2026-Infomaniak-DPA.pdf` |
| Cloudflare | À faire | Eric Schmaltz | v2024 | `Drive/UNV/Legal/DPA/2026-Cloudflare-DPA.pdf` |
| Wassenger | Lundi 22.06 | Nathalie Jungi | v2026 | `Drive/UNV/Legal/DPA/2026-Wassenger-DPA.pdf` |
| Meta | Lundi 22.06 | Eric Schmaltz | Conditions BM | `Drive/UNV/Legal/DPA/2026-Meta-Confirmation.pdf` |
| Make.com | Semaine 22-26.06 | Nathalie Jungi | v2026 | `Drive/UNV/Legal/DPA/2026-Make-DPA.pdf` |
| Google Workspace | À faire | Eric Schmaltz | v2024 | `Drive/UNV/Legal/DPA/2026-Google-DPA.pdf` |
| GA4 | À faire | Eric Schmaltz | v2024 | `Drive/UNV/Legal/DPA/2026-GA4-DPA.pdf` |
| HyperAgency | Avec proposition | Nathalie + Eric | v1 juin | `Drive/UNV/Legal/DPA/2026-HyperAgency-DPA.pdf` |
| Spreadshirt | Si activé | Nathalie | v2024 | `Drive/UNV/Legal/DPA/2026-Spreadshirt-DPA.pdf` |

---

## Revue annuelle des DPA

**Fréquence** : chaque juin (anniversaire mise en ligne)
**Responsable** : Secrétariat + HyperAgency

**Points à vérifier** :
- Le DPA est-il toujours en vigueur ?
- Le fournisseur a-t-il changé ses conditions ?
- La liste des sous-traitants est-elle à jour ?
- Y a-t-il un nouveau fournisseur non-couvert ?
- Le RAT reflète-t-il l'état actuel ?

**Livrable annuel** : rapport court au comité (max 2 pages).

---

## Formation de sensibilisation

À chaque nouvelle entrée dans le comité, présenter cette liste et expliquer :
- Pourquoi ces DPA existent
- Qui a signé quoi
- Où sont archivés les documents
- Que faire en cas de suspicion de manquement d'un fournisseur

---

*Registre préparé par HyperAgency (Nathalie Jungi) le 16 juin 2026 en conformité avec l'article 9 de la nLPD suisse.*
