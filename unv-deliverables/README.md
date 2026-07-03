# UNV — Livrables Nathalie · Sprint 30 juin 2026

**Direction créative + stratégie + WhatsApp + nLPD + contenus**
**HyperAgency (Nathalie Jungi) · Juin 2026**

---

## 📦 Contenu du dossier

Ce dossier contient **tous les livrables produits par HyperAgency** pour le projet de refonte UNV. Chaque fichier est en Markdown, éditable dans n'importe quel éditeur de texte, et prêt à être intégré dans WordPress par Pedro (Garcan Digital) ou converti en PDF pour le comité.

| # | Fichier | Description | Statut |
|---|---|---|---|
| 01 | `01-ton-de-voix-unv.md` | Charte éditoriale complète (do/don't, lexique, exemples) | ✅ Prêt |
| 02 | `02-impressum.md` | Mentions légales conformes nLPD (avec placeholder IDE) | ✅ Prêt |
| 03 | `03-politique-confidentialite.md` | Politique de confidentialité complète nLPD + RGPD | ✅ Prêt |
| 04 | `04-rat-registre-activites-traitement.md` | Registre RAT (12 traitements documentés) | ✅ Prêt |
| 05 | `05-banniere-cookies.md` | Wording bannière cookies (4 catégories granulaires) | ✅ Prêt |
| 06 | `06-copy-10-pages.md` | Copy complet des 10 pages publiques du site | ✅ Prêt |
| 07 | `07-whatsapp-templates-meta.md` | 10 templates Meta prêts à soumettre lundi 22.06 | ✅ Prêt |
| 08 | `08-emails-transactionnels.md` | 8 emails automatiques (adhésion, magic link, réservation…) | ✅ Prêt |
| 09 | `09-procedures-internes-nlpd.md` | Procédures internes (violation 72h, droits, sous-traitants) | ✅ Prêt |
| 10 | `10-dpa-fournisseurs.md` | Statuts DPA des 12 sous-traitants + registre | ✅ Prêt |
| 11 | `11-brief-formation-jacques.md` | Brief atelier 1h post-MEP pour Jacques | ✅ Prêt |
| 12 | `12-guide-utilisateur.md` | Guide utilisateur du site (comité en autonomie) | ✅ Prêt |

---

## 🎯 Placeholders à compléter avant MEP

Certains éléments dépendent d'informations à obtenir des membres du comité UNV. Ils sont marqués `[À COMPLÉTER]` dans les documents. Voici la liste :

### À obtenir d'Eric Schmaltz (Président)
- **IDE / N° CHE de l'UNV** (Impressum) — `CHE-XXX.XXX.XXX`
- **N° de téléphone officiel du club** (Impressum, page Contact)
- **Portrait informel** pour la page Comité

### À obtenir de Jacques Jungi (VP)
- **Horaires officiels du Club House** (page Le Club, page Contact)
- **Photos comité** (6 portraits minimum)
- **10-20 photos d'événements récents** (galerie J1)
- **Numéro fixe Club House** si existe
- **Confirmation publication** des 13 brouillons existants

### À obtenir de Claude-Alain Chapalay (Trésorier)
- **Tarifs cotisation 2026** (membre actif / sympathisant / junior)
- **Sample CSV export Banana** (pour le développement de l'importeur par Pedro)
- **Confirmation rythme mensuel** d'export

### À définir en réunion comité
- **URL webcam Vidy** (webcam Club House ou webcam publique Lausanne)
- **Compte Google Workspace UNV** (existe ou à créer)
- **Ouverture Spreadshop** (maintenant ou post-MEP)
- **Compte Facebook UNV** (accès admin pour Nathalie)

---

## 📅 Timeline de livraison

### Livrés le 16 juin 2026 (aujourd'hui)
Tous les fichiers 01 à 12 ci-dessus, en drafts prêts à valider.

### À livrer entre le 17 et le 22 juin
- Validation des drafts par le comité (Eric + Jacques + Claude-Alain)
- Récolte des placeholders manquants
- Finalisation des visuels IA hero et placeholders galerie
- 13 brouillons articles triés et finalisés pour publication J1

### À livrer entre le 22 et le 30 juin (Meta unlocked)
- Création Meta Business Manager UNV
- Vérification entreprise UNV (3-5j Meta)
- Soumission des 10 templates Meta (lundi + mardi)
- Ouverture compte Wassenger avec numéro WhatsApp Business
- Câblage scénarios Make.com (rappels event, alerte trésorier)
- Test bot end-to-end
- Formation Jacques 1h le jour du MEP ou dans les 3 jours suivants

---

## 🔗 Dépendances avec Pedro (Garcan Digital)

Les éléments suivants attendent que Pedro livre ses parties :

| Livrable Pedro attendu | Impact sur Nathalie | Deadline |
|---|---|---|
| Staging staging.unv.ch en ligne | Test copy en contexte réel | ven 20.06 |
| 10 pages skeleton Kadence créées | Injection du copy | ven 20.06 |
| Endpoint REST `/wp-json/unv/v1/dues/{id}` | Bot « Ma cotisation » fonctionnel | mar 23.06 |
| URL webhook WP + secret signature | Câblage Make.com | mer 24.06 |
| Comptes test membre + comité | Validation espaces privés | ven 26.06 |

---

## 📤 Comment utiliser ces livrables

### Pour Pedro (intégration WordPress)
Chaque fichier `.md` peut être :
1. Copié-collé dans un éditeur WordPress
2. Converti en HTML via un converter Markdown → HTML
3. Utilisé comme référence tout en construisant les pages Kadence

### Pour le comité (validation)
Chaque fichier peut être :
1. Ouvert dans n'importe quel éditeur de texte
2. Converti en PDF via Pandoc, Marked, ou Google Docs
3. Imprimé pour discussion en séance

### Pour Nathalie (suivi)
Les fichiers sont versionnés dans le repo GitHub sur la branche `claude/research-unv-2E2FG`. Toute modification est traçable.

---

## 📚 Documents connexes

En plus de ce dossier, les documents suivants existent dans le repo :

- `UNV_Pilot_Cockpit_Pedro_v1.html` — Cockpit interactif de pilotage
- `UNV_Weekend_Sprint_Playbook.html` — Playbook 4 jours pré-Meta
- `UNV_Brand_Book_v1.html` — Brand book identité visuelle
- `UNV_Strategic_Addon_Proposal.html` — Proposition forfait stratégique

---

## 📞 Contacts

- **Nathalie Jungi (HyperAgency)** — nathalie.luana.jungi@gmail.com
- **Pedro Garcia (Garcan Digital)** — ph@garcandigital.ch · +41 79 732 82 60
- **Eric Schmaltz (Président UNV)** — info@bati-conseils.ch
- **Jacques Jungi (VP UNV)** — jungi.jacques@gmail.com
- **Claude-Alain Chapalay (Trésorier UNV)** — c-a.chapalay@citycable.ch · 078 661 32 09

---

*Package livrables préparé le 16 juin 2026 par HyperAgency (Nathalie Jungi) pour l'Union Nautique de Vidy.*
