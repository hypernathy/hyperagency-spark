# Email à Pedro · Webhook + 4 demandes

**À envoyer depuis `hypernathy@gmail.com` → `ph@garcandigital.ch`**
**Date : 21.09.2026 · À envoyer immédiatement — ne dépend ni de Meta, ni de Wassenger, ni du numéro dédié.**

> **Pourquoi l'envoyer maintenant ?** Le webhook `event.published` est une requête HTTP site → n8n. Il ne passe pas par WhatsApp. L'URL est live depuis le 22.07 et la vérification de secret est déjà codée côté agent. À l'inverse, les 4 éléments demandés ci-dessous sont bloquants pour la suite du build — la formation comité est dans 7 à 9 jours.

---

## Objet

`UNV — URL du webhook + 4 points pour boucler l'intégration`

## Corps

Bonjour Pedro,

Merci pour la page `/agent` — elle est claire et complète, j'ai construit toute l'intégration dessus.

**L'URL du webhook `event.published`, côté agent :**

```
https://connexaworld.app.n8n.cloud/webhook/unv-events
```

Elle est active. Le flux lit le payload à plat (`type`, `event_id`, `title`, `date`, `venue`, `url`, `rsvp_hint`) et vérifie le header `X-UNV-WA-Secret` avant tout traitement, comme décrit dans ta doc. Dès que tu me passes le secret, tu peux publier un événement de test (ou utiliser le renvoi manuel depuis la fiche) et je vois arriver l'appel en direct.

**Tes deux propositions : c'est oui pour les deux.**

- `GET /unv/v1/events?limit=3` — utile pour le menu « prochain événement » et comme filet si le registre local de l'agent repart de zéro.
- La liste agrégée des cotisations en retard — indispensable : sans elle, l'alerte hebdo au trésorier devrait boucler sur tous les membres, ce qui n'est acceptable ni en perf ni en nLPD.

**Ce qu'il me manque de ton côté (4 points) :**

1. **Le token `X-UNV-API-Token` et le secret `X-UNV-WA-Secret`** (staging) — par WhatsApp, pas par email.
2. **Le format exact du champ `date`** du webhook : ISO 8601 avec heure et fuseau, ou chaîne déjà formatée en français ? J'ai besoin de le savoir pour calculer les rappels J-7 / J-1.
3. **L'URL du flux iCal** d'un événement, si elle existe — j'aimerais la glisser dans l'annonce WhatsApp pour que le membre ajoute la date à son agenda en un tap.
4. **L'onglet Consentements** — et là j'ai une bonne nouvelle : **tu n'as pas d'endpoint à développer.**

**Sur l'opt-in, la solution la plus simple pour nous deux**

Plutôt qu'une liste à exposer et à synchroniser, il suffit d'un lien dans l'onglet Consentements, affiché une fois la case WhatsApp cochée :

```html
<a href="https://wa.me/41XXXXXXXXX?text=Bonjour%20Neptune">
  Activer les notifications WhatsApp
</a>
```

Le membre tape dessus, son WhatsApp s'ouvre sur un message pré-rempli, l'agent le reçoit, confirme et l'enregistre lui-même. Avantages : double consentement (case + envoi effectif du message) — ce qui est exactement ce que la nLPD attend ; c'est aussi le geste qui ouvre légalement la fenêtre de conversation WhatsApp ; et aucune liste de numéros ne circule entre nos deux systèmes.

Je te donne le numéro définitif dès qu'il est arrêté avec Éric — en attendant, un placeholder suffit pour intégrer le bloc.

**Côté agent, où on en est**

Les quatre automatisations sont déployées et adaptées à ta doc : annonce d'événement, rappels J-7 / J-1, alerte hebdo au trésorier, et le routeur de réponses WhatsApp. L'agent tient ses propres registres des événements et des réponses — il ne fait donc aucun polling sur le site. Il s'appelle **Neptune**.

Il reste à relier la passerelle WhatsApp et à arrêter le numéro avec Éric, mais côté intégration avec ton site, avec les 4 points ci-dessus je suis débloquée.

**Formation comité**

Sophia évoque le 28 ou le 30 septembre. Peux-tu me confirmer la date retenue ? Je veux que Neptune soit démontrable en direct ce soir-là — idéalement avec toi : tu publies un événement depuis l'admin, et le téléphone du comité sonne dans la seconde.

Bien à toi,
Nathalie

---

## Checklist avant envoi

- [ ] Envoyer depuis `hypernathy@gmail.com` (c'est l'adresse que Pedro utilise)
- [ ] **Ne pas** mettre token ni secret dans l'email — demander par WhatsApp
- [ ] Mettre `info@unv.ch` en copie ? → **non** : échange technique entre prestataires, pas besoin de charger le comité
- [ ] Relancer par WhatsApp le lendemain si pas de réponse (échéance courte)
