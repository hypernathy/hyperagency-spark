# Ordre du jour · Point avec Pedro

**Checklist de travail — à parcourir en direct, dans cet ordre.**
Base : contrat signé 11.06 · doc `/agent` · état des flux au 21.09.

> **Décision prise côté Nathalie** : tout reste sur ses comptes (n8n, Wassenger, numéro) jusqu'à la formation du comité. La bascule vers les comptes de l'UNV se fait après, en une passe. Pedro doit le savoir : les URLs et le numéro changeront une fois.

---

## ① Les cinq premières minutes — ne rien faire d'autre avant

**Demander le token et le secret. Par WhatsApp, jamais par email.**

- [ ] `X-UNV-API-Token` (staging) → à coller dans la credential n8n « UNV Site API »
- [ ] `X-UNV-WA-Secret` → à coller dans le nœud « Vérifier Secret Webhook » du Flux A

Tant que le secret est le placeholder, la vérification accepte tout. Dès qu'il est collé, le webhook est réellement protégé.

**URL du webhook à lui redonner :**
```
https://connexaworld.app.n8n.cloud/webhook/unv-events
```

---

## ② La démonstration — dans cet ordre

- [ ] Pedro publie un événement de test depuis son admin (ou utilise le renvoi manuel depuis la fiche)
- [ ] Ouvrir l'onglet **Executions** de n8n : l'appel arrive, son vrai payload s'affiche
- [ ] L'événement s'inscrit dans le registre `unv_events`
- [ ] Si la credential Wassenger est en place : **son téléphone sonne**
- [ ] Il répond « Je viens » → Neptune demande « à combien ? » → il répond « 2 » → c'est enregistré et renvoyé au site

**À dire** : l'agent tient ses propres registres, il ne fait aucun polling du site. C'est lui qui l'a validé le 17.

---

## ③ Les quatre choses qui bloquent, et que lui seul débloque

| # | Question à poser | Pourquoi ça bloque | Réponse |
|---|---|---|---|
| 1 | **Quel est le format exact du champ `date`** du webhook ? ISO 8601 avec heure et fuseau, ou une chaîne déjà formatée en français ? | Une date non parsable est **ignorée silencieusement** par le filtre J-7/J-1. Les rappels ne partiraient pas, sans aucune erreur. C'est le seul point qui peut casser la démo sans prévenir. | |
| 2 | **L'URL du flux iCal** d'un événement existe-t-elle ? | Elle remplace `[URL_ICAL_A_CONFIRMER]` dans l'annonce. Le membre ajoute la date à son agenda en un tap. | |
| 3 | **L'endpoint agrégé des cotisations en retard** — quand ? | C'est lui qui débloque le Flux D, la 3ᵉ automatisation du contrat. Sans lui, il faudrait boucler sur tous les membres : inacceptable en nLPD comme en perf. | |
| 4 | **`GET /unv/v1/events?limit=3`** — confirmé ? | Alimente « prochain événement » et sert de filet si le registre local repart de zéro. | |

---

## ④ L'opt-in — bonne nouvelle à lui annoncer

**Il n'a aucun endpoint à développer.** Un lien suffit, affiché dans l'onglet Consentements une fois la case WhatsApp cochée :

```html
<a href="https://wa.me/41XXXXXXXXX?text=Bonjour%20Neptune">
  Activer les notifications WhatsApp
</a>
```

Le membre tape, son WhatsApp s'ouvre pré-rempli, Neptune reçoit, confirme et l'enregistre lui-même.

- Double consentement : la case **et** l'envoi effectif du message. Deux actes, deux traces, deux canaux.
- Aucune liste de numéros ne circule entre les deux systèmes.
- C'est le geste qui ouvre légalement la fenêtre de conversation WhatsApp.

- [ ] Lui donner le placeholder maintenant, le numéro définitif suivra

---

## ⑤ Les templates — l'arbitrage à lui poser

Les 10 templates Meta ont été écrits **avant** sa documentation. Son API ne renvoie **ni prénom, ni date de paiement, ni quittance** — minimisation nLPD voulue, et c'est très bien. Mais neuf templates sur dix ouvrent par « Bonjour {{Prénom}} ».

Ils sont donc à réécrire, ce qui est notre travail. **Trois posent une question qui est la sienne :**

| Template | Ce qui manque | La question |
|---|---|---|
| 7 · Adhésion validée | Aucun déclencheur | Peux-tu émettre un webhook `membership.approved` ? Sinon on déscope. |
| 8 · Accusé de résiliation | Aucun déclencheur | Idem : webhook à la réception du formulaire, ou on déscope. |
| 6 · Magic link login | Relève de l'authentification du site | C'est le Volet 2, donc toi — ou on le sort du périmètre de l'agent ? |

- [ ] Trancher les trois, noter la décision

---

## ⑥ Les deux clauses du contrat qui nous engagent tous les deux

C'est **son** contrat autant que le nôtre. À traiter ensemble, pas chacun dans son coin.

**« Agent button-driven (sans NLP libre) »**
Les boutons interactifs WhatsApp exigent l'API officielle Meta — donc l'accès Facebook d'Éric. En mode QR, ils ne sont pas fiables.
→ Proposition : démontrer le 28 en mots-clés, annoncer les boutons avec le passage à l'API officielle.

**« Logique conversationnelle modifiable depuis l'interface Wassenger, sans intervention technique »**
La logique vit dans n8n, que le comité ne peut pas éditer.
→ Proposition : sortir tous les textes de Neptune dans une table éditable, et reformuler la clause en une phrase pendant la formation. Honnêtement, pas dans leur dos.

- [ ] Accord sur la façon de le présenter au comité

**Make.com → n8n** : le contrat nomme Make.com, tout est sur n8n. Fonctionnellement équivalent, aucun coût supplémentaire.
- [ ] Une phrase convenue pour le comité

---

## ⑦ Le numéro — et le fixe du Club House

- [ ] A-t-il le **numéro du fixe du Club House** ? (il manque aussi pour l'Impressum et la page Contact)
- [ ] Est-ce une ligne **VoIP** ? WhatsApp les refuse parfois.

WhatsApp Business accepte les fixes : vérification par **appel vocal**, une voix dicte un code. Il faut juste quelqu'un pour décrocher sur place.

Le contrat exige un **numéro dédié au club, distinct des numéros privés du comité**. C'est explicite, et c'est le blocage n°1.

---

## ⑧ Logistique

- [ ] **Date de formation : 28 ou 30 septembre ?** Sophia coordonne — lui demander de trancher.
- [ ] Proposer une **démonstration à deux** : il publie depuis l'admin, le téléphone du comité sonne dans la seconde.
- [ ] Acter par écrit que la vérification du webhook est une **comparaison simple**, pas une signature HMAC — c'est son choix, la clause du contrat dit « signature ».
- [ ] Lui rappeler que **les URLs et le numéro changeront une fois**, à la bascule sur les comptes de l'UNV après la formation.

---

## Ce qu'il faut ressortir de ce point

1. Le token et le secret, sur le téléphone
2. Le format de `date` — c'est le plus insidieux
3. Une date de formation ferme
4. Trois arbitrages templates
5. Un accord sur la façon de présenter les deux clauses au comité
