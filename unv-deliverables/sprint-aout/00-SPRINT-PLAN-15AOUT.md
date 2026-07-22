# SPRINT MEP 15 AOÛT — Plan de bataille

**Kick-off : 22 juillet 2026 (email Pedro reçu 14:57) · MEP : vendredi 15 août 2026**
**24 jours · Owner volet agent/WhatsApp/Meta : Nathalie (HyperAgency)**

---

## État des lieux au 22 juillet

### Ce que Pedro a livré aujourd'hui
- ✅ Staging : `https://unv.garcandigital.ch` (mdp : voir email Pedro 22.07)
- ✅ Doc technique intégration : `https://unv.garcandigital.ch/agent` — endpoints, auth, formats, « tout implémenté et vérifié »
- ✅ 4 cas d'usage codés côté site (cotisation · RSVP événements · webhook nouvel event · prochain event/contact)
- ⏳ Token + secret : il les fournit **en échange de notre URL de webhook**

### Ce que Pedro attend de nous
1. Retour sur le staging (avant envoi au comité)
2. **URL de webhook de notre côté** ← livrable #1 du sprint
3. Confirmation / ajustement du mapping des 4 cas d'usage
4. Date de visio d'alignement (webhook, token, cas « prochain événement », tests E2E)

### Ce que Pedro gère de son côté (pas notre scope)
- Export Banana + convention nommage quittances (avec Claude-Alain)
- Accès SMTP Infomaniak (envois emails du site)

### Nos acquis (déjà dans le repo depuis le 16 juin — RIEN à refaire)
- 10 templates Meta rédigés (`07-whatsapp-templates-meta.md`)
- Logique conversationnelle bot (3 cas d'usage membre)
- Copy 10 pages · nLPD complète (Impressum, politique, RAT, DPA, procédures)
- Emails transactionnels · guide utilisateur · brief formation Jacques

---

## Calendrier sprint — 4 semaines

### 🔥 S1 · 22–27 juillet — « Brancher les tuyaux »
| Jour | Action | Owner |
|---|---|---|
| Mar 22 soir | Review staging complet + lecture doc `/agent` + notes | Nathalie |
| Mar 22 soir | Création scénario automation + **URL webhook générée** | Nathalie (+Claude) |
| Mer 23 matin | **Réponse à Pedro** : retour staging + URL webhook + visio | Nathalie |
| Mer 23 | Meta Business Manager UNV créé + **vérification entreprise lancée** (3-5 j ouvrés) | Nathalie |
| Mer 23 | Compte Wassenger UNV + numéro WhatsApp Business | Nathalie |
| Jeu 24 | Soumission templates Meta batch 1 (5 templates critiques) | Nathalie |
| Ven 25 ou Lun 27 | **Visio Pedro** : token/secret échangés, mapping validé, format code personnel membres | Joint |
| Ven 25 | Soumission templates batch 2 | Nathalie |

**Jalon S1 : webhook live + Meta en vérification + templates soumis + visio faite.**

### ⚙️ S2 · 28 juillet – 3 août — « Câbler les 4 flux »
- Flux A : webhook site → broadcast annonce nouvel événement (avec templates approuvés)
- Flux B : router WhatsApp entrant → cotisation (code perso → endpoint token) · prochain event · contact comité
- Flux C : rappels J-7 / J-1 automatiques (scheduler)
- Flux D : alerte trésorier hebdo (lundi 08:30)
- Tests unitaires de chaque flux sur staging avec token Pedro
- Relance placeholders comité : IDE, tarifs cotisation, photos, horaires *(si toujours manquants)*

**Jalon S2 : les 4 flux fonctionnels en staging.**

### 🧪 S3 · 4–10 août — « Tests E2E + démo comité »
- Tests bout-en-bout complets avec Pedro (numéros réels, cas limites, opt-out STOP)
- **Séance de présentation au club** (staging + démo bot en live) — proposée par Pedro dans son mail
- Corrections post-démo
- Préparation formation Jacques + guide PDF finalisé
- Préparation annonce MEP (WhatsApp broadcast + email batch SMTP)

**Jalon S3 : validation comité + bot démo-ready.**

### 🚀 S4 · 11–15 août — « Freeze & launch »
- Lun 11–mer 13 : QA finale, contenu final injecté, redirections 301 vérifiées
- Jeu 14 : backup pré-MEP + dernière relecture + go/no-go
- **Ven 15 août : MEP** + formation Jacques + annonce membres

---

## Risques sprint

| Risque | Impact | Mitigation |
|---|---|---|
| Vérification Meta > 5 j ouvrés | Templates bloqués → bot sans notifs | Lancer mer 23 au plus tard ; plan B Twilio si rien au 1er août |
| Doc `/agent` diverge de nos hypothèses | Refonte contrat intégration | Lire la doc AVANT la visio ; valider point par point avec Pedro |
| Format « code personnel » membre non défini | Cas cotisation bloqué | Question posée dans la réponse email + à l'ordre du jour visio |
| Placeholders comité toujours manquants (IDE, tarifs…) | Pages incomplètes à la MEP | Relance S2 avec deadline 3 août |
| Endpoint agrégé « cotisations en retard » absent | Alerte trésorier impossible | Demandé explicitement dans la réponse à Pedro |

---

## Questions ouvertes pour Pedro (ordre du jour visio)

1. **Sécurité webhook** : signature HMAC ? Quel header, quel algo (SHA-256 ?) — pour vérifier ses appels entrants
2. **Code personnel membre** : format, qui le génère, comment le membre le reçoit (email d'onboarding ? courrier ?)
3. **Endpoint agrégé cotisations en retard** : existe-t-il ? (nécessaire pour l'alerte hebdo trésorier — nb + total CHF)
4. **Liste des inscrits par événement** : endpoint disponible ? (nécessaire pour cibler les rappels J-7/J-1)
5. **Cas « Prochain événement »** : endpoint `GET events/upcoming` — combien d'events retournés, format
6. **Cas « Contacter le comité »** : simple carte contact statique ou relay vers formulaire ?
7. **Environnements** : le token staging sera-t-il différent du token prod ? Bascule au 15.08 comment ?
8. **Séance présentation club** : date cible ? (recommandation : semaine du 4 août, avec bot en démo)
