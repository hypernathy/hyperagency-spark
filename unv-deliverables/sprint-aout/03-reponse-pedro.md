# RÉPONSE À PEDRO — email du 22.07

**À envoyer depuis : hypernathy@gmail.com (c'est là qu'il a écrit)**
**Quand : ce soir après review du staging, ou demain matin au plus tard**
**Placeholders à remplir avant envoi : [RETOUR STAGING] et [WEBHOOK_URL]**

---

**Sujet** : Re: UNV - aperçu du site + intégration de l'agent WhatsApp

---

Salut Pedro,

Merci pour ce point complet — beau travail, on est bien alignés. Je réponds point par point.

**1) Le site**

[RETOUR STAGING — 3-5 lignes après ta visite : ce qui est top, 2-3 remarques concrètes max. Exemples de formulation : « La home avec la météo live rend super bien. Deux détails : X et Y. »]

Pour l'envoi au comité : je propose qu'on attende d'avoir l'agent WhatsApp en état de démo, et qu'on fasse **une seule séance de présentation au club avec le site + le bot en action**. L'effet sera bien plus fort qu'un lien envoyé par email. Si on tient le rythme ci-dessous, on peut viser la semaine du 4 août pour cette séance.

**2) Intégration agent**

Le mapping des 4 cas d'usage me convient — il correspond exactement à ce que j'avais préparé de mon côté (templates de messages déjà rédigés, logique conversationnelle documentée). Je lis ta doc `/agent` en détail ce soir et je te signale si un point diverge.

**Mon URL de webhook : [WEBHOOK_URL]**
Tu peux m'envoyer le token et le secret en retour (idéalement par un canal séparé de l'email — WhatsApp ou coffre partagé).

Trois questions techniques pour préparer la visio :
- **Signature des webhooks** que tu pousses vers moi : quel header et quel algo (HMAC-SHA256 ?)
- **Code personnel membre** : quel format, qui le génère, et comment le membre le reçoit ?
- Pour deux automatisations prévues au contrat (rappels J-7/J-1 aux inscrits, alerte hebdo cotisations au trésorier), il me faudrait idéalement : un endpoint **liste des inscrits par événement** et un endpoint **agrégé des cotisations en retard** (nb + total CHF). Dis-moi si c'est déjà dans ta doc ou si on le cale ensemble.

**3) De mon côté — lancé dès demain matin**

- Meta Business Manager UNV + vérification entreprise (délai Meta 3-5 jours ouvrés — d'où l'urgence de le lancer maintenant)
- Compte Wassenger UNV + numéro WhatsApp Business dédié
- Soumission des 10 templates de messages pré-approuvés Meta (24-48h par template — tout est déjà rédigé)
- Ma couche d'automatisation tourne sur n8n (équivalent Make, même logique webhook — transparent pour toi)

**4) Visio**

Je te propose :
- **Vendredi 25.07, 10h-11h**, ou
- **Lundi 28.07, 14h-15h**

Ordre du jour : échange token/secret, validation formats, cas « prochain événement » et « contacter le comité », planning des tests bout-en-bout, et date de la séance comité.

Dis-moi ce qui te va. Dispo sur WhatsApp entre-temps.

À très vite,
Nathalie

---

## Checklist avant envoi

- [ ] Staging visité (unv.garcandigital.ch) → remplir [RETOUR STAGING]
- [ ] Doc /agent lue → confirmer ou nuancer « le mapping me convient »
- [ ] Webhook n8n créé → remplir [WEBHOOK_URL]
- [ ] Copier la doc /agent à Claude (copier-coller ou screenshots) pour validation du contrat d'intégration
