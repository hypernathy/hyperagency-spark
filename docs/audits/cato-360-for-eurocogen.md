# CATO 360° AUDIT FOR EUROCOGEN — Decision Pack + Strategic & Legal Companion

**Document classification:** Internal working document. Three parts with distinct audiences (see header of each part).
**Subject:** Cato (AZMB Srl) commercial offer to Eurocogen S.R.L. via Filippo Cagol, decorrenza 2026-06-03.
**Decision deadline communicated to Cato:** 2026-05-20 (Umberto's feedback window — 7 days from today).
**Prepared:** 2026-05-13. **Version:** 1.0.
**Sources synthesised:** Cato pitch deck (PDF), Cato T&C v1.1 + commercial contract (PDF), Modjo call recording 2026-05-13 (~49'40"), 360° intelligence audit v1, call-audit v2, legal risk audit.

> **⚠️ Reading guide.**
> **Part A** is the only section that should ever be shown to (or paraphrased for) Umberto Petruzzelli or anyone outside Nixum's core. It is written to help Eurocogen make a clean commercial decision on the Cato offer, and contains zero references to a competing build.
> **Part B** is internal-only Nixum competitive intelligence and product strategy.
> **Part C** is internal-only legal/corporate framework. It is **not legal advice** — it is a structured brief to bring to a real avvocato/commercialista. All material decisions must be validated by a qualified Italian (and, where relevant, Swiss) professional before signature.

---

# PART A — CLIENT-SAFE DECISION PACK (for Umberto Petruzzelli)

**Audience:** Umberto Petruzzelli, Responsabile Ufficio Gare, Eurocogen S.R.L.
**Tone:** Direct, commercial, neutral. No reference to alternative platforms in development.
**Objective:** Give Eurocogen a clear answer to the question "do we sign with Cato on 2026-06-03, and on what terms?"

## A.1 — One-page executive summary

Cato is a credible, well-funded (≈€1,6M raised in 30 giorni, lead Italian Founders Fund) AI-native tender-management platform built in Milano. Today it has ~61 clienti attivi, concentrati pesantemente nel settore Medical/Lab/Pharma. È un prodotto reale, non vaporware: la demo live mostra discovery nazionale, schede gara auto-generate, motore di inconsistenze multi-agente, archivio storico, chat agentica connessa ad ANAC. Per un ufficio gare di 5–6 persone con 90% pubblico l'utility immediata è alta.

**MA** il prodotto è chiaramente costruito per il "tender management documentale orizzontale" — il loro stesso SDR ha dichiarato in call: *"non siamo ancora sviluppati nel construction"* e *"voi sareste il secondo cliente nel construction"*. Per un General Contractor con categorie SOA OG1-VII / OG3-V / OG6-VIII / OG8-IVbis / OG12-IVbis e portfolio in lavori pubblici, mancano oggi: motore SOA cross-reference, DURC integration, gestione subappalto/avvalimento, ATI/RTI matching, livello cantiere, specificità PNRR/CAM, automazione invio buste sui portali (resta manuale).

**L'offerta commerciale** è standard SaaS mid-market italiano: €700+IVA/mese, 3 utenze, 1.200 crediti AI/mese con auto-refill, contratto 12 mesi con tacito rinnovo, preavviso recesso 60 giorni, billing SDD mensile, "prova di 2 mesi" che è in realtà fatturazione anticipata con clausola di rimborso. TCO annuo nominale: €8.400+IVA ≈ €10.250 IVA inclusa.

**La leva di negoziazione è significativa.** Cato ha bisogno di Eurocogen come logo di riferimento per aprire la verticale costruzioni: il loro SDR (Filippo Cagol) ha background familiare in edilizia (azienda Edilcagol), pressione di quota, autorità riconosciuta a scontare. Eurocogen è in posizione di chiedere termini sostanzialmente migliori del listino.

**Raccomandazione di principio:** **non firmare il listino così com'è.** O si rinegozia ottenendo first-client construction package, o si declina a favore di un setup interno con un partner che parta nativamente dal construction. Le tre opzioni operative sono mappate in A.7.

## A.2 — Cosa fa Cato, esattamente (read-out dalla demo del 13 maggio)

Verificato live durante la call, non solo da deck:

| Modulo | Stato osservato | Note operative per ufficio gare |
|---|---|---|
| **Dati azienda + Contesto AI** | Funzionante. Upload documenti per categoria (cataloghi, certificazioni, certificati esperienze pregresse, visure, bilancio, dati societari). Free-text per profiling AI. | Cataloghi e certificati esperienze pregresse vanno caricati a inizio onboarding. Le esperienze pregresse migrate da Infoplus vanno rimappate. |
| **Ricerca / Discovery** | Funzionante. Claim: copertura nazionale tutte le stazioni appaltanti. Scansione di tutti i documenti del bando, non solo metadata. Sinonimi e keyword expansion. | Real value-add vs Infoplus: il pre-scoring (es. "33 gare trovate / 6 di interesse") riduce il triage manuale. |
| **Scheda gara auto-generata** | Funzionante. Estrae: valore, criterio aggiudicazione, procedura, lotti, CPV, **Categorie SOA** (visto chiaramente nello screenshot Saronno ferroviario), durata, prorogabilità, termini, stazione appaltante, requisiti obbligatori e di idoneità professionale, sopralluoghi, penali, campionature. Cita le fonti documentali. | L'estrazione SOA è già implementata. Manca però il cross-check automatico verso le categorie possedute dall'azienda e il flagging "scorporabile/prevalente". |
| **TAR / giurisprudenza** | Funzionante. Sentenze TAR ultimi 2 anni integrate nella scheda gara. | Layer orizzontale, non specifico lavori pubblici. Utile ma non sostituisce la consulenza di un avvocato amministrativista per gare complesse. |
| **Motore inconsistenze (3 agenti)** | Funzionante. Agenti: procedurale, economico, legale. Severità Alta/Media/Bassa/Chiarimento/Alert. Esempio mostrato: importo €3.459.350 vs €3.448.476 nei documenti, rilevato e proposto chiarimento. Genera bozza chiarimento per la stazione appaltante. | Feature di alto valore. Risparmia ore di lettura incrociata su capitolato + disciplinare + allegati. |
| **Compilazione buste** | Funzionante. Checklist 3 buste (amministrativa / tecnica / economica). Pre-compila DGUE, Allegato A, Patto Integrità, Tracciabilità flussi, bollo, Prospetto Offerta, **calcolo automatico garanzia provvisoria**. "Compila con AI" su singolo documento. Task tracking (da fare / in corso / completata). | La pre-compilazione amministrativa è solida. Per buste tecnica/economica genera draft ma resta lavoro manuale qualificato. |
| **Archivio / BI** | Funzionante. Dopo aggiudicazione importa determina, atti, offerte degli altri partecipanti (solo se primi classificati). Dashboard: fatturato nel tempo, win-rate, distribuzione regionale, tipo procedura. | Per costruire la curva storica servono 6–12 mesi di gare. Migrazione storico Infoplus → Cato non è banale, da chiarire con loro in onboarding. |
| **Workspace Kanban** | Funzionante. Stati: In Valutazione / Nuove / In Corso / Completate. Multi-utente, assegnazione, calendario, lista. | Adeguato per ufficio 5–6 persone. Non è un PM strumento sostitutivo di project management cantieri. |
| **Chat agentica ANAC-aware** | Funzionante e impressionante. Connessione diretta ANAC. Casi mostrati: "perché abbiamo vinto/perso questa gara", competitor profile via ANAC ("Eurocogen" → ribassi, ribasso medio, top stazioni, gare vinte), Piani Triennali per stazione appaltante. | Layer veramente differenziante in demo. Da verificare in trial: freschezza dati ANAC, completezza, tempo di risposta. |
| **Monitoraggio attivo** | Funzionante. Rettifiche, chiarimenti, sospensioni, proroghe, revoche, aggiudicazioni: push notification + auto-update della scheda gara. | Sostituisce il check manuale quotidiano sui portali. |
| **Invio buste / submission** | **NON automatizzato.** Confermato in call: "il cliente, manualmente". L'utente scarica i documenti firmati, zippa, carica sul portale della stazione appaltante. | Gap operativo significativo. Il "tempo guadagnato" sulla compilazione si paga in parte alla fine, in fase di trasmissione. |

## A.3 — Cosa NON copre (o copre poco) per un General Contractor edile

Lista factual derivata dal feature inventory + dichiarazioni esplicite del fornitore in call. **Non un giudizio competitivo, una mappatura di gap operativi:**

- **Cross-check SOA → bando.** Cato estrae le categorie SOA dal bando ma non confronta automaticamente con le categorie + classifiche possedute dall'azienda. Il giudizio "possiamo partecipare in proprio / serve subappalto / serve ATI / serve avvalimento" resta sull'ufficio gare.
- **DURC online.** Nessuna integrazione INPS/INAIL/Cassa Edile. La verifica validità DURC alla data presentazione resta manuale.
- **Antimafia.** Nessun tracking comunicazione vs informazione, scadenze, white list.
- **Cassa Edile / CCNL applicato.** Nessuna integrazione né validazione.
- **Subappalto qualificato.** Nessuna rubrica di subappaltatori per categoria SOA. Nessun matching automatico.
- **ATI/RTI partner matching.** Nessuna funzione per trovare mandanti/mandatarie con categorie complementari.
- **Avvalimento.** Nessuna gestione contratti di avvalimento, banca dati ausiliari, calcolo limiti.
- **PSC / POS / DUVRI.** Nessuna parsing/generazione specifica. Sono trattati come documenti generici.
- **Computo metrico estimativo, cronoprogramma.** Nessuna estrazione strutturata dal capitolato tecnico.
- **PNRR specifics.** Nessun controllo automatico quote femminile/giovanile (30%), Criteri Ambientali Minimi (CAM edilizia), milestone PNRR.
- **Consorzio stabile.** Nessun layer multi-azienda. Per Eurocogen ↔ Consorzio RESEARCH (CF 05041951210) ogni profilo va gestito separatamente.
- **Profondità regionale Sud.** Copertura nazionale dichiarata, ma roadmap del prodotto è Milano-centrica. Piattaforme come EmpulIA (Puglia), SardegnaCAT, MEPA Calabria, START Toscana sono integrate ma il livello di profondità (filtri specifici, mapping requisiti regionali) va testato in trial.
- **Invio buste automatizzato.** Esplicitamente fuori scope oggi.
- **Mezzi d'opera, squadre, disponibilità cantieri.** Non è ERP cantiere — non è la sua mission, ma per un GC è un livello operativo che deve vivere altrove (Infoplus, foglio Excel, o ERP edile dedicato) con interconnessione zero verso Cato.

**Quale di questi 16 punti è davvero bloccante** dipende dal mix di gare Eurocogen sta inseguendo. Se 90% sono lavori pubblici OG1/OG3/OG6, almeno 8 di questi gap pesano in ogni singola gara.

## A.4 — L'offerta economica disassemblata

Dal contratto Cato condiviso il 2026-05-13, decorrenza prevista 2026-06-03:

| Voce | Valore | Note di lettura |
|---|---|---|
| Canone mensile | €700 + IVA | €233/utenza/mese, allineato SaaS italiano mid-market |
| TCO annuo nominale | €8.400 + IVA ≈ €10.248 IVA inclusa | Da confrontare con costo Infoplus attuale + costo ore-uomo risparmiate |
| Utenze concorrenti | 3 | Su ufficio 5–6 persone, copre solo il nucleo. 2–3 persone resterebbero senza account proprio o in tempo-condiviso. |
| Crediti AI / mese | 1.200 | Conversione dichiarata da Filippo: ~20–30 gare/mese. Per un GC che monitora 100+ bandi/mese, fascia bassa. |
| Auto-refill crediti | Attivo | **Meccanismo di leak.** Quando i 1.200 finiscono, ricarica automatica. Da disattivare o capper esplicitamente in contratto. |
| Durata | 12 mesi | Standard |
| Tacito rinnovo | Sì, automatico | Standard SaaS, ma combinato con preavviso 60gg è un soft-lock |
| Preavviso recesso | 60 giorni | Se Eurocogen vuole uscire a fine 12° mese, va comunicato entro il 10° mese |
| Trial | "60 giorni paid refundable" | **Non è un free trial.** È fatturazione anticipata con clausola di rimborso se recesso entro 60gg. Cash-out reale di €1.400+IVA da gestire. |
| Billing | SDD mensile | Mandato SEPA Direct Debit |
| Onboarding | Incluso, "1 persona dedicata, durata TBD" | Verosimilmente Francesca Gottero (unica risorsa Customer Success in Cato). Risorsa scarsa — chiedere garanzia SLA scritta. |
| T&C applicabili | v1.1 dell'8 aprile 2026 | Disponibili su URL pubblico — vanno lette per intero **prima** della firma. Particolarmente artt. 5, 6, 10, 14, 15. |

**Costo reale primo anno se rinnovo automatico parte:**
- 12 mesi × €700 = €8.400 + IVA = €10.248
- Eventuale auto-refill crediti (stimato +15% in caso di uso intensivo): +€1.250 ≈ totale €11.500 IVA inclusa
- Più ore di onboarding e migrazione dati da Infoplus (interne, non fatturate da Cato ma reali): 40–80h ufficio gare = €2.000–4.000 di costo opportunità.

**TCO realistico primo anno: €13.500–15.500 IVA inclusa, costo opportunità interno compreso.**

## A.5 — Soft-lock e clausole da rivedere prima della firma

Da leggere riga per riga nel T&C v1.1 e nel commerciale prima di apporre firma:

1. **Tacito rinnovo + preavviso 60gg combinati.** Se la firma è il 2026-06-03 e Eurocogen non disdice entro il 2027-04-03, parte un secondo anno integrale a €8.400. Mettere subito promemoria a calendario per **inizio marzo 2027** con decisione "rinnovare / rinegoziare / recedere".

2. **Auto-refill crediti.** Chiedere esplicitamente la **disattivazione di default** dell'auto-refill, oppure un **cap massimo mensile** scritto in contratto (es. "non oltre 500 crediti extra/mese, comunque previa autorizzazione email del referente Eurocogen"). Senza questo, il canone effettivo è variabile e non controllabile.

3. **Mandato SDD.** Verificare conto corrente di addebito, IBAN, possibilità di revoca. Lo SDD SEPA è revocabile, ma con tempi e procedure precisi (massimo 8 settimane retroattive per addebiti autorizzati, 13 mesi per non autorizzati).

4. **Trial "refundable".** Capire **esattamente** quando e come si chiede il rimborso. Tipicamente serve comunicazione formale entro il 60° giorno solare con causale specifica. Mettere data limite a calendario il **giorno +55** dall'attivazione per attivare eventuale recesso con margine.

5. **Art. 14 versioning T&C.** Cato si riserva probabilmente di modificare unilateralmente i termini con preavviso. Verificare che ci sia diritto di recesso di Eurocogen in caso di modifiche peggiorative, e che il preavviso non sia inferiore a 30 giorni.

6. **Foro competente.** Probabilmente Milano (sede AZMB Srl). Per Eurocogen (Basilicata) significa che eventuali controversie vanno gestite fuori sede. Non rinegoziabile in pratica, ma da sapere.

7. **Limitazioni di responsabilità.** Verificare il massimale di responsabilità di Cato in caso di malfunzionamenti che causino la perdita di una gara per problemi di piattaforma (es. mancata notifica di una rettifica, errore nel calcolo della garanzia provvisoria). Tipicamente i SaaS limitano a 12 mensilità del canone — accettabile come standard ma da conoscere.

8. **Riservatezza dei dati delle gare.** Eurocogen carica documenti di gara, strategia di partecipazione, ribassi pensati. Verificare in artt. 10 e DPA: storage location (S3 Frankfurt → GDPR EU ok), data residency, sub-processor list, finestra di esportazione dati alla cessazione (Cato deve garantire export completo + cancellazione certificata).

9. **Anti-train su dati cliente.** Verificare che i dati e le offerte caricate da Eurocogen **non** vengano usati per training di modelli AI generici. Dovrebbe essere esplicitato. Se non c'è, chiederlo per iscritto.

10. **Uso del nome a fini marketing (art. 13).** Quasi certamente Cato vuole il logo Eurocogen sul proprio sito. Negoziabile: o si concede (in cambio di sconto/co-marketing), o si nega, ma deve essere chiaro nel contratto.

## A.6 — Leve di negoziazione effettive

Dalla call si è capito chiaramente che Cato è in modalità outbound aggressivo, l'SDR ha quota di fine mese, e c'è una motivazione personale e strategica a chiudere Eurocogen come logo construction. Le leve sono concrete:

| # | Leva | Cosa chiedere | Probabilità di ottenere |
|---|---|---|---|
| 1 | **"First construction client" discount** | 30–40% sconto primi 6 mesi (€420–490/mese), poi listino | Alta |
| 2 | **Trial esteso** | 90 giorni invece di 60, con identica clausola refund | Alta |
| 3 | **Crediti extra** | 1.800 o 2.000 crediti/mese invece di 1.200, stessa fee | Media |
| 4 | **Utenze extra** | 4 o 5 utenze invece di 3, stessa fee | Media |
| 5 | **Onboarding garantito** | 20h dedicate Customer Success + 10h on-demand entro primi 90 giorni, SLA scritto | Alta |
| 6 | **Disattivazione auto-refill** | Capping esplicito o off di default, ricarica solo previa autorizzazione email | Alta |
| 7 | **Roadmap input rights** | Eurocogen prioritizza 3 feature construction nei primi 6 mesi (es. SOA cross-check, DURC tracker, PSC parser) | Alta — loro lo *vogliono* per aprire il verticale |
| 8 | **Co-marketing limitato** | Logo Eurocogen su sito Cato + 1 case study + 1 reference call/quarter, ma **niente quote pubbliche di Petruzzelli** né interviste senza autorizzazione caso per caso | Alta — mutual benefit |
| 9 | **Migrazione dati Infoplus inclusa** | Cato fornisce import dello storico (gare partecipate, vinte, perse, archivio) senza costo extra | Media — dipende dal formato export Infoplus |
| 10 | **Recesso anticipato condizionato** | Diritto di recesso senza penali al 6° mese se KPI concordati non sono raggiunti (es. "se motore inconsistenze produce <X chiarimenti utili", "se discovery non copre piattaforme X/Y/Z") | Bassa-Media, ma vale la richiesta |
| 11 | **Riduzione durata** | 6 mesi invece di 12, stesso canone, niente tacito rinnovo, decisione esplicita al 6° mese | Media |
| 12 | **Esclusiva di zona** | Niente competitor diretto stessa SOA OG3 area PZ/MT per 6 mesi | Bassa — non ragionevole, worth asking 1 volta |

**Pacchetto realistico massimo** (chiedere insieme, accettare un sottoinsieme):
- Sconto 30% primi 6 mesi
- 90-day trial refundable
- 4 utenze invece di 3
- 1.800 crediti/mese
- Auto-refill OFF di default
- 20h onboarding garantite con SLA
- Roadmap input scritto su 3 feature construction
- Logo + case study sì, intervista no

Se Cato accetta 5 di queste 8 voci, l'offerta diventa difendibile. Se ne accetta meno di 3, l'offerta resta nel territorio del listino standard.

## A.7 — Tre scenari operativi

**Scenario 1 — Firma del listino così com'è (sconsigliato).**
Eurocogen entra a €700/mese standard, 12 mesi con tacito rinnovo, 60gg preavviso. Beneficio: piattaforma attiva dal 2026-06-03, possibile uplift su pipeline Q3 grazie al motore inconsistenze e alla discovery. Costo: €10.250 IVA inclusa nominali + ~€2.000–4.000 di costo opportunità interno. Rischio: dopo 60 giorni si è dentro un contratto annuale, e il prodotto resterà documentale-orizzontale per i 12 mesi successivi (la roadmap construction di Cato è dichiarata ma non garantita).

**Scenario 2 — Rinegoziazione con pacchetto first-construction-client (raccomandato se si firma).**
Eurocogen presenta il pacchetto della tabella A.6, fissa scadenza decisionale a 5 giorni, accetta un sottoinsieme realistico. Se ottiene ≥5 voci → firma. Beneficio: stessa piattaforma a costo ridotto, con commitment di Cato sulla roadmap construction. Rischio: residuo, gestibile.

**Scenario 3 — Decline e ricerca di partner alternativo construction-native.**
Eurocogen ringrazia, posticipa la decisione. Costo: pipeline Q3 senza acceleratore digitale, ufficio gare resta su Infoplus + processi attuali. Beneficio: nessun impegno annuale, opzione aperta per soluzione costruita con DNA construction-first. Tempo da considerare: 60–120 giorni per valutare alternative serie.

**Raccomandazione di Part A (perimetro decisione Eurocogen):** **Scenario 2 con due binari di uscita.** Si presenta il pacchetto entro il 2026-05-20. Se Cato accetta ≥5/8 voci, si firma il trial pagato a 60gg con cap di spesa €1.400 e si valuta a metà luglio sulla base di evidenze reali. Se Cato accetta meno di 3 voci, si va su Scenario 3. La data critica è il **giorno 55 dall'attivazione** per decidere se confermare o recedere (memo a calendario obbligatorio).

## A.8 — Checklist operativa pre-firma (Umberto, 7 giorni)

- [ ] **2026-05-14 – 15:** scaricare e leggere integralmente Cato T&C v1.1 (URL S3 nell'email contrattuale). Annotare ogni clausola dubbia.
- [ ] **2026-05-15:** scaricare DPA (Data Processing Agreement) di Cato, verificare lista sub-processor, data residency, finestra esportazione dati.
- [ ] **2026-05-15 – 16:** stimare costo realistico Infoplus attuale (canone + ore-uomo). Calcolare punto di pareggio Cato.
- [ ] **2026-05-16 – 18:** intervistare 2 persone dell'ufficio gare per identificare i 3 workflow più costosi oggi (es. cross-check SOA, monitoraggio rettifiche, compilazione DGUE). Verificare se Cato li copre davvero.
- [ ] **2026-05-19:** preparare email di rinegoziazione con pacchetto A.6, deadline risposta 24h.
- [ ] **2026-05-20:** inviare. Comunicazione formale a Filippo Cagol con CC suo team lead (Matteo Monge) o AE (Andrea Mennitto) per dare segnale di serietà.
- [ ] **2026-05-21 – 22:** valutare risposta. Se accettazione ≥5/8 → confermare decorrenza 2026-06-03. Altrimenti → decline gentile, opzione riaperta a Q4.

## A.9 — Quattro domande da fare a Cato prima di firmare (anche se rispondono per email)

1. *"Migrazione storico Infoplus → Cato: tempi, formato accettato, eventuali costi, garanzia di completezza?"*
2. *"SOA cross-check (categorie possedute vs richieste dal bando, classifiche, scorporabile/prevalente): è in roadmap? Tempi?"*
3. *"Submission automatica almeno su MEPA Consip e PortaleTrasparenza: è in roadmap? Tempi? In assenza, che workflow consigliate per ridurre il manuale di trasmissione?"*
4. *"Onboarding: chi è la persona dedicata, quante ore garantite nei primi 90 giorni, SLA risposta per chiarimenti tecnici?"*

Le risposte a queste 4 domande **per iscritto** sono parte integrante della decisione. Se due o più tornano vaghe o "lo vediamo dopo", il segnale è chiaro.

---

# PART B — NIXUM COMPETITIVE INTELLIGENCE & BUILD STRATEGY (INTERNAL)

**Audience:** Nathy + Nixum core only.
**Tone:** Strategic, operative, no-bullshit.
**Objective:** Decidere posizionamento, prioritizzare backlog, dimensionare moat.

## B.1 — Tesi strategica in tre frasi

1. **Cato ha validato il willingness-to-pay** delle PMI italiane per AI tender management (€700/mese × 61 clienti × 30 giorni di raccolta capitali a €1,6M lead Italian Founders Fund). Il mercato c'è.
2. **Cato è orizzontale documentale.** Il suo DNA è Medical/Lab/Pharma (~60% dei logo). Costruzioni oggi = 1 cliente atipico (BuildRock, "Edilizia 4.0" digital-native). Eurocogen sarebbe il **secondo**. Il founder team non ha DNA construction (UK Treasury / AP-HP / agency AI / pharma). Hanno **6–12 mesi di finestra** prima di poter hardenare il verticale, e probabilmente lo faranno per primo via Edilcagol (la famiglia di Filippo Cagol).
3. **Nixum vince se claima il verticale in 90 giorni con moat che Cato non può chiudere in <18 mesi**. Il moat non è il LLM né il discovery — è la combinazione di **submission automation portale-per-portale + SOA engine + multi-tenant consorzio + integrazione DURC/Cassa Edile**. Costruito su Anthropic + Supabase + n8n.

## B.2 — Il mercato edilizia tender 2026

Dimensioni (stima da ANAC / dati pubblici):
- **Spesa pubblica lavori 2025:** ≈ €60 miliardi banditi (Codice Appalti D.Lgs. 36/2023, PNRR coda).
- **GC fascia mid (fatturato €2–50M, ufficio gare 2–10 persone):** stima 8.000–12.000 aziende in Italia, di cui ~3.000 attivamente bidding su gare pubbliche regolarmente.
- **TAM SaaS tender per construction PMI:** se 3.000 × €500–1.500/mese = **€18M–€54M ARR annuali**, mercato realisticamente penetrabile dal 5% nei primi 24 mesi = **€1M–€2,7M ARR realistici** per il primo player verticale.
- **Crescita:** Codice 36/2023 + PNRR + obbligo digitalizzazione gare = tailwind regolatorio. Il manuale resterà manuale per i prossimi 24–36 mesi senza una soluzione AI verticale.

ICP archetipo Nixum:
- Fatturato €5–30M.
- Ufficio gare 3–8 persone.
- Categorie SOA: OG1, OG3, OG6, OG8, OG12, OS18A, OS20B, OS21, OS22 (le più frequenti per GC medio).
- 70–95% pubblico.
- Già su Infoplus o Presidia o foglio Excel.
- **Eurocogen è ICP perfetto.** 6–7M€ fatturato, 5–6 persone ufficio gare, 90% pubblico, SOA OG1-VII / OG3-V, già su Infoplus.

## B.3 — Cato strategic read

Stack tecnico dedotto (allineato per fare scelte coerenti):
- LLM: **Claude (primary)** — dichiarato da Filippo in call: *"il primo è Claude perché è il migliore"*. Probabile Sonnet 4 con fallback OpenAI per redundancy.
- RAG: vector DB su materiali cliente + per-bando doc set (verosimile pgvector o Pinecone).
- Data ingestion: API ANAC BDNCP + acquistinretepa + scraping piattaforme regionali.
- TAR: scraping giustizia-amministrativa.it.
- Frontend: Linear/Notion-inspired.
- Compliance: T&C v1.1 hostato S3 eu-central-1 (Frankfurt), GDPR-aligned.
- Sales tooling: Modjo.ai (call recording), PandaDoc (e-sign), LinkedIn outbound.

Organico (~14 persone) e fragilità:
- 5/14 sono in track SDR/GTM → modalità outbound growth-at-all-costs.
- **1 sola Customer Success (Francesca Gottero)** → single point of failure. Ogni cliente perso pesa. **Vulnerability operativa sfruttabile in fase di acquisition: se Nixum offre onboarding white-glove con 2 dedicate, è un differenziatore concreto.**
- 3 AI Engineers per 61 clienti = produttività alta ma roadmap construction sarà necessariamente in coda al lavoro sul core orizzontale.

GTM motion:
- LinkedIn outreach primario.
- Demo registrata via Modjo.
- Contratto custom, e-sign PandaDoc.
- "Trial 2 mesi paid refundable" come standard di chiusura.
- Discount authority all'SDR (confermato da Filippo in call: "sconto first construction client" disponibile).

**Punti deboli sistemici di Cato che Nixum può convertire in posizionamento:**

| Debolezza | Sfruttamento Nixum |
|---|---|
| Customer Success monoperson | Nixum onboarding white-glove dichiarato, 30h garantite primo trimestre |
| Vertical concentration pharma | Nixum si presenta come "costruito da chi vende a costruttori" |
| Submission manuale | Moat #1 di Nixum: automation top 5 portali in 90 giorni |
| Nessun cross-SOA engine | Moat #2: SOA matching native |
| Nessun multi-tenant consorzio | Moat #3: dashboard consorzio stabile |
| Nessuna copertura DURC/Cassa Edile | Moat #4: compliance edile automatica |
| Roadmap Milano-centric | Nixum gioca la carta Sud + Basilicata + lavori pubblici regionali |
| Auto-refill credits opaco | Nixum pricing modulare trasparente, senza leak |

## B.4 — Posizionamento di Nixum: 4 angoli, scegliere D + B

**Angle A — "Cato per l'edilizia" (lookalike).** Stessa UX, contenuto verticale, prezzo più basso. **Sconsigliato.** Perde se Cato aggiunge modulo costruzioni in 6 mesi. Sales cycle competitivo su prezzo, margine basso, nessun moat.

**Angle B — "OS del cantiere + gare" (ERP-light).** Connette gare → cantiere → subappalto → DURC → fatturazione. ACV €1.500–3.000/mese. Sales cycle più lungo (3–6 mesi). Moat alto: nessun competitor copre il loop completo. **Long-term play. Sì, ma da impostare in fase 2 (mesi 6–18).**

**Angle C — "Cato Companion" (parassita).** Layer construction compliance che si attacca a Cato via API/import. Position: "rendiamo Cato 10x per l'edilizia". **Tatticamente interessante per acquisition path (potenziale exit verso Cato in 18–36 mesi).** Ma vincola la roadmap a Cato e mette Nixum in posizione di subordinato. Sì come backup strategico, non come main play.

**Angle D — Consorzio-first.** Vendere prima ai consorzi stabili (es. Consorzio RESEARCH CF 05041951210). Dashboard multi-azienda, SOA aggregata cross-consorziate, lavori distribution engine. **Cato ha zero qui.** ACV €5k–15k/mese. Pochi clienti necessari per validare (5–10 logo = €600k–€1,5M ARR). **Sì, primo angolo.**

**Strategia definitiva:** **D → B** in 18 mesi. Eurocogen è cuneo D (entry via Petruzzelli, espansione verso Consorzio RESEARCH). Mesi 6–18 espansione verso angle B (cantiere operational layer). Angle C resta opzione di exit secondaria.

## B.5 — Build backlog priorizzato

### Tier 1 — Moat builders (sprint 1, primi 90 giorni)

**P1.1 — Submission automation portale-per-portale**
- Portali fase 1: **MEPA Consip + EmpulIA + SinTel + SardegnaCAT + PortaleTrasparenza generic**.
- Componenti: integrazione firma digitale (Aruba / InfoCert / Namirial API), PEC programmatica (Aruba / Legalmail / Postemobile), generatore DGUE XML envelope, marca temporale, parsing ricevuta + archiviazione.
- **Effort:** 8–12 settimane developer + 4 settimane testing su gare reali.
- **Vantaggio competitivo:** Cato non chiude questo in <18 mesi (motivi tecnici: ogni portale ha API/UI diverso, firma digitale, PEC, marca temporale, legal liability su trasmissione).

**P1.2 — SOA cross-reference engine**
- Componenti: registro SOA cliente (categorie, classifiche, scadenza), parser requisiti SOA da bando (Cato già lo fa al livello display, Nixum lo fa al livello logic), feasibility scoring automatico, flagging scorporabile/prevalente, suggestion subappalto/avvalimento.
- Data: Argentasoa + altre OdA SOA (verificare disponibilità feed strutturato; in alternativa scraping del registro pubblico SOA).
- **Effort:** 6–8 settimane developer.

**P1.3 — Consorzio stabile multi-tenant**
- Dashboard multi-azienda con SOA aggregata, work distribution engine, shared resource pool.
- Eurocogen ↔ Consorzio RESEARCH è il primo banco di prova reale.
- **Effort:** 8–10 settimane (architettura multi-tenant è invasiva, va impostata subito).
- **Pricing:** €5k–15k/mese ACV.

### Tier 2 — Parity features (mesi 3–6)

- P2.1 Discovery nazionale completo (match coverage Cato) — 6–8 settimane scraping + dedup + dataset.
- P2.2 Qualification semaforo (verde/arancio/rosso) con layer SOA + DURC + esperienze + fatturato specifico — 3 settimane.
- P2.3 Buste compilation checklist con auto-fill busta amministrativa + draft tecnica/economica — 4–6 settimane.
- P2.4 Specialist agents (procedurale, economico, legale, **+ SOA, + tecnico cantiere**) — 4 settimane.
- P2.5 Archivio + BI (win rate, ribassi, regional, competitor) — 4 settimane.
- P2.6 Chat agentica ANAC-aware con memoria — 4–6 settimane (dipende da ANAC API/MCP availability).

### Tier 3 — Differentiators (mesi 6–18)

- P3.1 Cantiere operational graph (mezzi, squadre, subappaltatori, materiali) con integrazione STR Vision / ACCA Primus / ERP custom.
- P3.2 DURC monitoring real-time + Cassa Edile via API INPS/INAIL/CNCE.
- P3.3 Piani Triennali OO.PP. radar — 12–24 mesi forward pipeline per ente.
- P3.4 Jurisprudence verticale TAR + Consiglio di Stato + pareri ANAC lavori pubblici, Codice 36/2023 + allegati + linee guida operative ANAC.
- P3.5 PSC/POS/DUVRI parsing strutturato.
- P3.6 PNRR compliance (quote femminile/giovanile, CAM edilizia, milestone).

## B.6 — Stack tecnico raccomandato

- **LLM primary:** Claude Sonnet 4 (parità Cato — stessa qualità, meno costo per token rispetto a Opus su long context).
- **LLM fallback:** GPT-4o per redundancy (riduzione rischio vendor lock-in).
- **Vector DB:** Supabase pgvector (già nello stack Nathy, costa zero in più, ottimo per RAG su materiali cliente).
- **Document parsing:** Anthropic Files API + fallback Unstructured.io per PDF complessi.
- **Backend:** Supabase (Postgres + RLS + Auth + Storage + Edge Functions).
- **Workflow automation:** n8n self-hosted su connexaworld.com (orchestrazione submission, monitoring rettifiche, notifiche).
- **Frontend:** Next.js + shadcn/ui (Linear/Notion-inspired per parità di feel con Cato).
- **Firma digitale:** Aruba API (più economica) o InfoCert (più enterprise). Da valutare costi per firma + marca temporale.
- **PEC:** Aruba PEC API o Legalmail.
- **ANAC integration:** BDNCP REST endpoint (verificare disponibilità OAuth, rate limit, freshness SLA — task di deep research prioritario).
- **Hosting:** Supabase EU-Central + edge functions Vercel. Data residency Europa (mandatory per GDPR + posizionamento "Swiss-EU compliant").

## B.7 — GTM lessons da Cato (copiare ciò che funziona)

- **Single-pane-of-glass narrative.** Cato vende "non sostituiamo il tuo stack, lo integriamo". Funziona. Nixum copia ma con focus integration su Infoplus + Presidia + ERP edile (STR/ACCA).
- **Demo registrata via Modjo.** Buona pratica. Nixum adotta (o equivalente: Tella, Loom Premium).
- **"Trial 2 mesi paid refundable".** Framing efficace, ma è un soft-lock. Nixum può differenziarsi con un **trial gratis 30 giorni** vero (più rischioso per Nixum su churn, ma vince in posizionamento "trasparente vs trappola SaaS").
- **LinkedIn outbound + SDR.** Replicabile, ma su scala più piccola: Nixum non ha 5 SDR, ha Nathy + 1 outreach part-time per i primi 6 mesi. Target: 30 demo Q3 2026.
- **Logo wall + case study.** Replicabile, ma in nicchia construction = pochi loghi pesano di più. Eurocogen logo = signal forte per i prossimi 20 GC.
- **Pricing modulare.** Cato dice "siamo agli inizi, modulare disponibile". Nixum lo fa standard di listino: 3 tier (Starter €350, Pro €700, Consorzio €1.500–3.000).

## B.8 — Cosa NON fare (anti-pattern)

- **Non costruire un "Cato killer".** È il framing più rischioso legalmente (vedi Part C) e commercialmente è una posizione debole (essere il "noi ma con meno features").
- **Non assumere ex-Cato nei primi 12 mesi.** Solleva immediati red flag IP + non-solicitation.
- **Non citare Cato per nome in nessun materiale di marketing Nixum.** Mai. Si parla di "the legacy AI tender platforms" se proprio serve. Tipicamente non serve.
- **Non replicare prompt visibili di Cato verbatim.** I prompt sono trade secret. Si studiano i pattern, si scrivono i propri.
- **Non promettere submission automation funzionante prima del giorno 90.** È il moat — se prometti e fallisci, lo perdi.
- **Non lanciare con un client solo.** Eurocogen è cliente 1. Servono altri 2–3 ICP (consigliato: 1 GC veneto + 1 consorzio + 1 GC Sud) entro mese 6 per validare il go-to-market e non legarsi a un singolo logo.

## B.9 — Roadmap 18 mesi (timeline indicativa)

| Quarter | Milestone | KPI di uscita |
|---|---|---|
| Q2 2026 (mag–giu) | Audit completato. Decisione Eurocogen su Cato. Sprint 1 setup: branca, stack, Anthropic + Supabase + n8n live. | 1 cliente trial firmato (Eurocogen o equivalente). |
| Q3 2026 (lug–set) | MVP Sprint 1: submission automation MEPA + EmpulIA. SOA engine v1. Discovery nazionale. | 1 gara end-to-end submitted via Nixum. 3 ICP attivi in pilot. |
| Q4 2026 (ott–dic) | Multi-tenant consorzio. Specialist agents 5. Buste compilation. Chat ANAC v1. | 5 clienti paganti. ARR €30k. |
| Q1 2027 (gen–mar) | Submission automation SinTel + SardegnaCAT + PortaleTrasparenza. DURC monitoring v1. Onboarding standard. | 10 clienti. ARR €100k. Eurocogen rinnova. |
| Q2 2027 (apr–giu) | Cantiere operational graph v1. Integrazioni STR/ACCA. PSC/POS parser. | 15 clienti. ARR €200k. Primo cliente Consorzio paying. |
| Q3 2027 (lug–set) | Piani Triennali radar. Jurisprudence verticale. PNRR compliance. | 25 clienti. ARR €400k. |
| Q4 2027 (ott–dic) | Espansione angle B (cantiere OS). Series Pre-A pitch readiness. | 35–40 clienti. ARR €700k–€1M. Pitch deck per round. |

## B.10 — Singular next move

**Sprint 1 — 21 giorni dal go**, in parallelo alla decisione Eurocogen su Cato:

1. Setup branca `claude/nixum-mvp-sprint-1` su repo Nixum (separato da hyperagency-spark, vedi Part C su entity separation).
2. Provision Supabase project (separato da quello di hyperagency).
3. n8n self-hosted instance dedicata.
4. Anthropic API key dedicata + budget tracking.
5. Deep research: ANAC BDNCP API endpoint, OAuth, rate limit, data freshness — produrre nota tecnica entro giorno 7.
6. Deep research: Aruba firma digitale + marca temporale API + pricing — entro giorno 7.
7. Schema database iniziale: clients, gare, soa_categories, soa_client, soa_gara_required, documents, submissions.
8. End-to-end PoC: ricezione URL gara MEPA → parsing documenti → estrazione requisiti SOA + scadenze → calcolo feasibility vs SOA cliente (hardcoded Eurocogen) → generazione checklist documenti.
9. Day 21 demo interna: 1 gara reale Eurocogen processata end-to-end (lettura + qualification, NON ancora submission).

Quello che NON va fatto durante Sprint 1: marketing pubblico, sito, lead gen, sales. Solo build + test su 1 cliente referente.

---

# PART C — LEGAL & CORPORATE STRUCTURE FRAMEWORK (INTERNAL)

**Audience:** Nathy + commercialista + avvocato.
**Tone:** Strutturato, framework, non-prescrittivo.
**Objective:** Dare un quadro completo dei trade-off corporate, contrattuali, regolatori, prima di andare in studio legale.

> **⚠️ DISCLAIMER OBBLIGATORIO.** Questa Parte C **non è una consulenza legale né fiscale**. È un brief di lavoro per impostare la conversazione con professionisti qualificati. Ogni scelta di forma societaria, residenza fiscale, perimetro contrattuale, compliance regolatoria, deve essere validata da:
> - **Commercialista italiano** abilitato (per IVA, IRES, IRAP, ROL deducibili, transfer pricing IT-CH se applicabile).
> - **Avvocato IT/tech italiano** (per T&C, DPA, IP, contrattualistica clienti).
> - **Studio legale svizzero** se si procede con incorporazione CH (per Sagl/SA, FADP, contratti CH).
> - **Eventualmente fiscalista cross-border** (per ottimizzazione IT-CH lecita, ruling).
> Budget realistico setup completo: €6.000–€12.000 in fees professionali una tantum + €2.000–€4.000/anno running.

## C.1 — Le forme societarie italiane (sintesi comparativa)

| Forma | Capitale minimo | Tassazione corporate | Pro | Contro | Quando usarla |
|---|---|---|---|---|---|
| **SRL ordinaria** | €10.000 (versabile 25% subito) | IRES 24% + IRAP 3,9% ≈ 28% effettivo | Forma standard PMI, credibilità, scalabile, ammette soci diversi, governance flessibile via statuto | Setup ~€2–3k notaio + registro, contabilità ordinaria, costi running €3–6k/anno | Default per Nixum se si sta in Italia. |
| **SRL semplificata (SRLS)** | €1–€9.999 | Come SRL | Setup molto economico (~€200–500), zero costi notarili in regime ordinario | Statuto standard non modificabile, soci solo persone fisiche, percepita come "junior" | Sconsigliata per Nixum: limita governance, e i clienti enterprise non amano la SRLS. |
| **SpA** | €50.000 (25% versabile) | IRES 24% + IRAP 3,9% | Credibilità massima, ammette emissione azioni, ideale per round equity grandi | Costi setup €5–10k, collegio sindacale obbligatorio, contabilità complessa, running €15–25k/anno | Solo a partire da Serie A. Non per fase iniziale. |
| **Startup Innovativa (status su SRL)** | Stesso di SRL | IRES 24% ma con benefici | Esenzione imposta registro, deduzioni R&D maggiorate, smart capital, no diritto camerale, lavoro flessibile, work for equity facilitato, **detrazione IRPEF 30% (50% in alcuni casi) per investitori**, esclusione perdite primi 4 anni dal calcolo per riduzione capitale | Requisiti stringenti: ≥1/3 spese R&D OPPURE ≥1/3 dipendenti dottorato/ricerca OPPURE titolare di brevetto/software registrato. Iscrizione sezione speciale RI. Durata max 5 anni status. | **Forma raccomandata per fase 0–24 mesi.** Nixum qualifica facilmente: software registrato SIAE + spese R&D dominanti. |
| **Startup Innovativa a Vocazione Sociale (SIAVS)** | Stesso di SRL/SpA | Come Startup Innovativa | Tutti i benefici + percepita come impact | Settori limitati (ambiente, cultura, salute, educazione) | Non applicabile a Nixum (B2B SaaS). |
| **PMI Innovativa** | Stesso di SRL | IRES 24% con benefici simili a Startup Innovativa ma meno generosi | Per chi è uscito dallo status Startup Innovativa (post-5 anni) ma resta innovation-driven | Requisiti R&D, brevetti o personale qualificato | Successione naturale dopo i 5 anni. |

**Raccomandazione fase 0 (Nixum entity Italia):** **SRL con status Startup Innovativa**. Setup pulito, benefici fiscali significativi, segnale agli investitori, costi running gestibili.

## C.2 — Le forme societarie svizzere (sintesi)

| Forma | Capitale minimo | Tassazione | Pro | Contro |
|---|---|---|---|---|
| **Sàrl / GmbH / Sagl** | CHF 20.000 (versato integralmente) | Cantone-dipendente. Zug ~12%, Vaud ~14%, Ticino ~17%, Ginevra ~14% | Setup ~CHF 2.500–5.000, gestione semplice, credibilità "Swiss-made", FADP compliance | Capitale immobilizzato, residenza fiscale richiede sostanza reale (uffici, dipendenti) per evitare contestazioni "esterovestizione" |
| **SA / AG** | CHF 100.000 (CHF 50.000 versabile subito) | Stessa di Sàrl | Massima credibilità, azioni al portatore non più possibili (FATCA/CRS), buona per round | Capitale alto, costi setup CHF 5–10k |

**Importante — sostanza fiscale CH:** Per essere fiscalmente svizzeri e non venire riqualificati esterovestiti dal Fisco italiano (art. 73 TUIR comma 5-bis), serve **sostanza reale**:
- Sede effettiva di amministrazione in CH (board meetings in CH).
- Almeno 1 director residente in CH.
- Conto bancario CH attivo.
- Idealmente: 1 dipendente o ufficio fisico (anche coworking) in CH.
- Decisioni strategiche documentate come prese in CH.

Senza queste condizioni, una Sàrl CH controllata da residente italiano viene quasi certamente riqualificata fiscalmente italiana → si pagano tasse in Italia su utili CH + sanzioni. **La residenza fiscale non si compra, si dimostra.**

## C.3 — Strutture cross-border IT-CH: i pattern principali

### Pattern 1 — "Single OpCo IT (Startup Innovativa)"

```
[Nathy + co-founders] ─────► NIXUM Innovation SRL (Italy)
                              ├─ tutto il business
                              ├─ contratti clienti
                              ├─ IP detenuto
                              ├─ dipendenti
                              └─ status Startup Innovativa
```

**Pro:** Setup più semplice. Benefici Startup Innovativa diretti. Nessuna complessità transfer pricing.
**Contro:** Nessun layer di protezione patrimoniale. Niente data-residency CH. Tutta esposizione fiscale italiana.
**Quando usarla:** Fase 0–18 mesi, ARR <€500k, no investitori esteri. **Raccomandato come default per partire.**

### Pattern 2 — "HoldCo CH + OpCo IT"

```
[Nathy + co-founders] ─────► NIXUM Holding Sàrl (Switzerland, Zug/Ticino)
                              │  cantone con tassa bassa
                              │  detiene 100% NIXUM IT
                              │
                              └─► NIXUM Innovation SRL (Italy, Startup Innovativa)
                                  ├─ business operativo
                                  ├─ contratti clienti
                                  ├─ dipendenti IT
                                  └─ IP licenziato DA HoldCo CH
```

**Pro:**
- HoldCo CH può detenere IP (marchio, software registrato, brevetti) e licenziarlo a OpCo IT con royalty (deducibile in IT, tassata bassa in CH).
- Eventuale futura exit / round può avvenire al livello HoldCo CH con vantaggi fiscali sulla plusvalenza.
- Marketing positioning: "Swiss-incorporated, EU-operational".

**Contro:**
- Transfer pricing IT-CH richiede documentazione robusta (royalty rate "at arm's length", studio TP, ~€5–10k setup + €2–3k/anno aggiornamento).
- Convenzione contro doppia imposizione IT-CH applicabile ma con condizioni (ritenuta su royalty 5–10%).
- **Sostanza CH obbligatoria** (vedi C.2).
- Setup totale: €15–25k tra notaio CH, commercialisti IT+CH, TP study.

**Quando usarla:** ARR €500k+, presenza investitori, IP significativo registrato. **Da considerare in fase 18–36 mesi, non subito.**

### Pattern 3 — "Dual entity, no holding"

```
[Nathy + co-founders] ─┬───► NIXUM Innovation SRL (Italy)
                       │     business IT, clienti IT/EU
                       │
                       └───► NIXUM Swiss Sàrl (Switzerland)
                             business CH, clienti CH/internazionali
                             data residency clienti sensibili
```

**Pro:** Separazione mercati. Data residency CH per clienti che lo richiedono.
**Contro:** Doppia complessità contabile + legale. Duplicazione costi. Inter-company agreements complessi.
**Quando usarla:** Solo se c'è una vera ragione commerciale di servire CH separatamente. **Non raccomandato in fase iniziale.**

### Raccomandazione di Part C

**Fase 0 (mese 0–6):** Pattern 1. SRL Startup Innovativa, Nathy + eventuali co-founder, statuto con vesting, IP detenuto direttamente dalla SRL.

**Fase 1 (mese 6–18):** Restare Pattern 1. Costruire metriche, primi clienti paganti, prepararsi a un eventuale ristrutturazione.

**Fase 2 (mese 18–36 se traction):** Valutare conversione a Pattern 2 (HoldCo CH) in preparazione di round o di posizionamento internazionale. La conversione richiede ~6 mesi e ~€15–20k di fees + tassazione su trasferimento IP da IT a CH (da gestire con cautela, possibile esit tax).

**Da non fare:** Costituire una Sàrl CH oggi senza sostanza reale. Il rischio di esterovestizione + sanzioni fiscali italiane è elevato e visibile in qualsiasi audit. **Switzerland non è un "trucco fiscale", è una giurisdizione operativa che richiede presenza reale.**

## C.4 — Il perimetro regolatorio in cui Nixum opera

Mappatura delle normative che si applicano (o potenzialmente si applicano) al business Nixum:

### GDPR (Reg. UE 2016/679)
**Applicabile:** Sì, sempre. Nixum tratta dati personali di utenti aziendali (nomi, email, ruoli ufficio gare) e potenzialmente dati personali presenti nei documenti di gara (es. nominativi tecnici proposti).
**Adempimenti:**
- Privacy Policy + Informativa art. 13 GDPR.
- DPA (Data Processing Agreement) firmato con ogni cliente (Nixum è data processor; il cliente è data controller).
- Registro dei trattamenti (art. 30).
- Misure tecniche e organizzative (cifratura at rest + in transit, access logging, backup, retention policy).
- Nomina DPO **non obbligatoria** per Nixum oggi (non rientra nei casi art. 37: PA, monitoraggio sistematico large-scale, dati sensibili large-scale), ma raccomandata.
- Sub-processor list pubblicata (Supabase, Anthropic, Vercel, n8n provider, Aruba, etc.) con DPA firmati a cascata.
- Data Breach Notification: 72h al Garante.
- Diritti interessati: meccanismo per accesso, rettifica, cancellazione, portabilità.

### FADP (Federal Act on Data Protection, Switzerland, revisionata 1 sept 2023)
**Applicabile:** Sì se Nixum ha entità CH o tratta dati CH residents.
**Sostanzialmente equivalente al GDPR**, con alcune specificità:
- Nomina representative CH se Nixum è EU-only ma offre servizi a CH residents.
- Obbligo registro dei trattamenti.
- Notification breach al PFPDT (Preposto federale alla protezione dei dati) entro tempo congruo.

### eIDAS (Reg. UE 910/2014, eIDAS 2 in transizione)
**Applicabile:** Sì se Nixum offre firma digitale o automazione sottomissione che richiede firma qualificata.
**Implicazioni:**
- Firma digitale qualificata (QES) richiede integrazione con QTSP (Qualified Trust Service Provider) — in IT: Aruba, InfoCert, Namirial, Poste, etc.
- Marca temporale qualificata (QTSA) idem.
- Nixum **non diventa QTSP** — si integra a QTSP esistenti. Questo è importante: essere QTSP richiede certificazione AgID + audit ~€100–300k.
- eIDAS 2 introduce European Digital Identity Wallet → opportunità futura, non priorità oggi.

### AgID (Agenzia per l'Italia Digitale)
**Applicabile:** Parzialmente.
- Se Nixum offre servizi alla PA come fornitore qualificato → iscrizione MEPA Consip come fornitore di servizi software, eventualmente qualificazione AgID per cloud SaaS (se si vende a PA, non al privato).
- Eurocogen è privato — non triggera AgID per Nixum.
- Diventa rilevante se in futuro Nixum vende direttamente a PA (stazioni appaltanti).

### NIS2 (Direttiva UE 2022/2555, recepita IT con D.Lgs. 138/2024)
**Applicabile:** Probabilmente sì in 12–24 mesi, a seconda della dimensione e del settore di Nixum.
**Logica:**
- Soggetti essenziali / importanti basato su settore + dimensione.
- "Digital services" include cloud computing providers, managed services.
- Nixum oggi è sotto soglia (PMI), ma diventa target appena raggiunge >50 dipendenti o €10M turnover.
- Obblighi: cybersecurity risk management, incident reporting (24h+72h), board accountability.
**Azione fase 0:** monitorare. Implementare best practices ora (logging, MFA, segmentazione) costa meno che adeguarsi sotto pressione poi.

### AI Act (Reg. UE 2024/1689)
**Applicabile:** Sì, classificazione necessaria.
**Categorie AI Act:**
- **Prohibited AI:** social scoring, manipulation. Non applicabile a Nixum.
- **High-risk AI:** sistemi che decidono in modo significativo su persone, infrastrutture critiche, giustizia, etc. Nixum tender management **non è high-risk** secondo Annex III, perché non decide su persone fisiche e non è infrastruttura critica.
- **Limited risk:** obbligo trasparenza. Nixum **rientra qui**: deve dichiarare all'utente che sta interagendo con AI (chat agentica, generazione documenti).
- **Minimal risk:** la maggior parte del feature set (RAG, search, classification).

**Obblighi per limited risk:**
- Trasparenza: "Stai chattando con un AI" deve essere chiaro.
- Eventuale watermarking di output generati (es. bozza chiarimento generata).
- Documentazione tecnica modello (più rilevante se Nixum sviluppasse propri modelli — invece Nixum usa Claude di Anthropic, che è già compliant a monte).

**Importante:** Anthropic è il provider, Nixum è il deployer. Le obbligazioni di provider (registrazione GPAI, technical documentation) sono di Anthropic. Nixum eredita obbligazioni di deployer (uso conforme, trasparenza utente, monitoraggio).

### AGCM (Autorità Garante Concorrenza e Mercato)
**Applicabile:** Indirettamente.
- Pratiche commerciali scorrette → T&C di Nixum non possono avere clausole vessatorie per consumatori. Per B2B il rischio è basso ma il principio resta.
- Pubblicità ingannevole → claim "AI-powered" o "saves X hours" devono essere supportati da evidenza.
- Concorrenza sleale (art. 2598 c.c.) → vedi Part C.5 sotto, è il framework rilevante per scenario Cato.

### AGCOM (telecomunicazioni / media)
**Non applicabile** a Nixum oggi (non è ISP, non è media).

### Codice degli Appalti (D.Lgs. 36/2023)
**Applicabile indirettamente.** Nixum è uno strumento che supporta operatori economici nella partecipazione alle gare. Non è un soggetto del Codice. Ma deve **conoscere il Codice** per fare un prodotto utile. In particolare:
- Articoli 94–98 (cause di esclusione, ex art. 80 del vecchio Codice 50/2016).
- Allegati II.12 (qualificazione SOA).
- Linee guida ANAC operative.
- Disciplinari MEPA.

### Codice Privacy (D.Lgs. 196/2003 + modifiche post-GDPR)
**Applicabile:** Sì in supplemento al GDPR per le specificità italiane.

### Codice Consumo (D.Lgs. 206/2005)
**Non applicabile in B2B puro** (Nixum vende a imprese). Diventa rilevante solo se Nixum aprisse offerte a partita IVA individuali consumer-like.

## C.5 — Lo scenario Cato — sintesi del rischio legale (cross-ref Part B)

Sintesi della legal risk audit allegata, con focus operativo per Nixum:

**Il rischio principale:**
- Eurocogen è cliente Cato → vincolato da T&C Cato (Art. 5, 6, 10 verosimilmente: no reverse engineering, no sviluppo prodotti concorrenti, riservatezza, IP a Cato).
- Eurocogen è cliente potenziale di Nixum → relazione contrattuale separata.
- **Se le informazioni protette dal T&C Cato fluiscono da Eurocogen a Nixum**, scatta il rischio di Art. 99 1-bis CPI (responsabilità del terzo "che sapeva o avrebbe dovuto sapere") + Art. 4(4) Direttiva UE 2016/943.

**La difesa primaria — Independent Creation (Art. 99 CPI esplicito, Art. 3 EU Directive):**
- "Independent discovery or creation" è **lecita per legge**.
- Nixum costruisce da **fonti pubbliche** (get-cato.com, deck di marketing, articoli stampa, ANAC, normativa, Codice 36/2023, know-how generale di settore).
- Nessun materiale Cato confidential entra nei design brief Nixum.

**Le regole operative di information firewall:**
1. Umberto può dare feedback a Nathy nella forma **"questo workflow non funziona per me, mi servirebbe X"** (feedback utente generico, lecito).
2. Umberto **non può** condividere screenshot interni di Cato, prompt visti dentro la chat agentica, materiali di training, comunicazioni di onboarding, prezzi di altri clienti.
3. Nathy / team Nixum **non accede mai** a Cato (nessun login condiviso, nessuna demo del trial Eurocogen).
4. Nathy **non scarica** i T&C Cato come supporto operativo per scrivere quelli di Nixum (li può leggere come cittadino — sono pubblici — ma li scrive da zero con avvocato proprio).
5. Nessun ex-dipendente Cato assunto in Nixum nei primi 12 mesi minimo.
6. Eurocogen non ha equity, board seat, advisor agreement, o rev-share in Nixum. È un cliente. Pagamento a prezzo di mercato (eventuale early-adopter discount uguale a quello che si darebbe a qualunque altro early customer).
7. Nessun materiale di marketing Nixum cita "Cato" o usa framing comparativo diretto.

**Clean room evidence to maintain:**
- Log datato delle fonti pubbliche consultate per ogni feature Nixum (URL + data + screenshot).
- Design decision log con rationale che non riferisce Cato.
- Repository git con commit storici che mostrano evoluzione indipendente.
- Eventuali domain expert interviews (oltre Umberto) per validare che le feature derivano da bisogni di settore, non da Cato.

**Lo Scenario "1 settimana di accesso gratuito Cato per valutarlo" → DA NON FARE.** È classificato come pretext access / improper means sotto Art. 4(2)(b) Direttiva 2016/943 e Art. 2598 n.3 c.c. Costo-beneficio terribile. Vedi legal audit completa per dettaglio.

**Lo scenario "Eurocogen firma trial 60gg legitimately + Nixum build indipendente in parallelo" → workable con disciplina ferrea.** È lo Scenario 2 di Part A unito al firewall sopra.

**Lo scenario "Eurocogen non firma Cato + Nixum build puro da public info" → safest legalmente, slower commercialmente.**

## C.6 — Contract stack che Nixum deve avere prima del primo cliente pagante

Pacchetto minimo (da preparare con avvocato IT/tech):

| Documento | Funzione | Note di drafting |
|---|---|---|
| **Master Subscription Agreement (MSA) / T&C v1.0 Nixum** | Termini d'uso del SaaS, durata, recesso, SLA, limitazione responsabilità, foro | Scritto da avvocato dedicato. **Non copiare da Cato** o altri SaaS. Versionare (v1.0, v1.1) su URL pubblico. |
| **DPA (Data Processing Agreement)** | Conforme art. 28 GDPR. Definisce Nixum come data processor. Sub-processor list. | Template SCC EU 2021 dove applicabile. |
| **Order Form / Pricing Schedule** | Allegato al MSA. Definisce piano, utenze, crediti, fee, decorrenza. | Personalizzato per cliente. |
| **NDA mutuale standard** | Per conversazioni pre-vendita con prospect enterprise | Template standard, breve, scadenza 3 anni. |
| **Privacy Policy + Cookie Policy** | Web. Articoli 13–14 GDPR. | Generabile via tool tipo Iubenda o redatto custom. |
| **Acceptable Use Policy** | Cosa il cliente non può fare con la piattaforma | Importa per limitare responsabilità Nixum. |
| **SLA (Service Level Agreement)** | Uptime, response time supporto, escalation | Inizialmente moderato (99% uptime, response 24h). |
| **Sub-processor list pubblica** | Trasparenza GDPR | Aggiornare ad ogni nuovo provider. |
| **Vesting agreement** (se co-founder) | Capitale di Nixum vincolato a permanenza | 4 anni con 1 anno cliff è standard. |
| **IP assignment agreement** | Codice scritto da Nathy + collaboratori è di Nixum | Da firmare con ogni developer/contractor da day 0. **Critico.** |
| **Patti parasociali** (se co-founder) | Decision rights, tag-along, drag-along, IP, non-compete soci | Da impostare se si superano 2 founder. |

**Stima totale fees legali setup:** €4.000–€8.000 per il pacchetto completo, una volta.

## C.7 — IP strategy

Componenti dell'IP di Nixum da proteggere:

| Componente | Strategia di protezione |
|---|---|
| **Codice sorgente** | Diritto d'autore automatico. Registrazione SIAE software (opzionale, ~€150) come prova di anteriorità. |
| **Database (gare, sentenze, profili)** | Diritto sui generis del database (art. 102-bis Legge Diritto Autore). Documentare investimento sostanziale. |
| **Marchio "NIXUM"** | Registrazione UIBM Italia (~€150–250 in 1 classe) + EUIPO Europa (~€850 in 1 classe) + classe estesa (35, 42, 9). |
| **Logo + visual identity** | Diritto d'autore + marchio figurativo. |
| **Architettura sistema, prompt engineering, modelli AI custom** | Trade secret (no public disclosure, NDA su dipendenti, accesso ristretto repo). |
| **Eventuale brevetto** | Sconsigliato in fase 0. Costo €5–15k per brevetto IT, +€20–50k per estensione EP. Software pure è raramente brevettabile in Italia/UE (servono effetto tecnico, soluzione tecnica). Valutare solo se metodologia specifica e dimostrabile (es. algoritmo proprietario SOA matching). |
| **Domain names** | nixum.it, nixum.com, nixum.eu, nixum.io, nixum.ch — registrare in fascio. ~€100–300 totale. |

**Action item:** registrare marchio NIXUM + logo + dominii entro mese 3.

## C.8 — IVA e flusso fiscale

Cenni operativi, da validare con commercialista:

- **IVA SaaS B2B nazionale (cliente IT con P.IVA):** 22% standard.
- **IVA SaaS B2B intra-UE (es. cliente DE con P.IVA):** reverse charge. Nixum fattura senza IVA, cliente autoliquida. VIES verification obbligatoria.
- **IVA SaaS B2B extra-UE (es. cliente CH, USA):** fuori campo IVA art. 7-ter DPR 633/72.
- **IVA SaaS B2C UE:** OSS (One Stop Shop) — Nixum applica IVA del paese del consumatore se >€10k cross-border B2C. Probabilmente non applicabile a Nixum nei primi 12 mesi (B2B puro).
- **Fatturazione elettronica:** obbligatoria via SdI per clienti italiani. Provider: Aruba, Fattura24, Fatture in Cloud, etc. ~€100–300/anno.
- **Forfettario:** Nathy come individuale può essere in forfettario se sotto soglia €85k/anno e altre condizioni. **Ma per Nixum SaaS si va in SRL Startup Innovativa da subito** — il forfettario non scala.

## C.9 — Compliance ongoing (checklist annuale)

- [ ] Bilancio annuale + nota integrativa (entro 30/4).
- [ ] Dichiarazioni fiscali (Modello Redditi SC + IRAP, entro 31/10).
- [ ] LIPE (Liquidazione Periodica IVA) trimestrale o mensile.
- [ ] LIPE annuale.
- [ ] Modello 770 (sostituto d'imposta) se ha dipendenti.
- [ ] Iscrizione INPS + INAIL per dipendenti/collaboratori.
- [ ] Comunicazione semestrale Startup Innovativa al Registro Imprese (entro 30/6 e 31/12) — **obbligatorio per mantenere lo status**.
- [ ] Aggiornamento registro trattamenti GDPR ad ogni cambio sostanziale.
- [ ] Aggiornamento sub-processor list.
- [ ] Rinnovo marchi (10 anni, ma promemoria a 9).
- [ ] Cyber insurance review annuale.
- [ ] Backup test e disaster recovery test (almeno semestrale).
- [ ] Penetration test annuale (consigliato a partire dal 10° cliente).

## C.10 — 90-day legal sprint

| Giorno | Azione | Owner | Costo stimato |
|---|---|---|---|
| 0–7 | Selezione commercialista + avvocato IT/tech. Brief iniziale (~2h call ciascuno). | Nathy | €500–1.000 advance |
| 7–14 | Decisione forma societaria. Costituzione SRL con clausola Startup Innovativa nello statuto. | Notaio | €2.000–3.000 |
| 14–21 | Iscrizione sezione speciale Startup Innovativa Registro Imprese. Apertura conto corrente business. Apertura P.IVA. | Commercialista | Incluso fees registro |
| 21–35 | Drafting MSA + DPA + Privacy Policy + AUP + SLA. | Avvocato + Nathy | €3.000–5.000 |
| 35–50 | Registrazione marchio NIXUM (IT + EU classi 9, 35, 42). | Consulente marchi | €1.500–2.500 |
| 50–65 | Setup contratti con sub-processor (Supabase, Anthropic, Vercel, Aruba). Firma DPA a cascata. | Nathy | tempo interno |
| 65–80 | Setup cyber insurance (per copertura responsabilità IP + data breach). | Broker | €1.500–3.000/anno |
| 80–90 | Primo cliente pagante (Eurocogen o equivalente) firma MSA + DPA + Order Form. | Nathy + Avvocato review | tempo interno |

**Totale fees una tantum:** €7.500–€14.500.
**Totale running:** €1.500–€3.000/anno (commercialista) + €1.500–€3.000/anno (avvocato retainer) + €1.500–€3.000/anno (cyber insurance) ≈ €4.500–€9.000/anno.

## C.11 — Singular legal next step

**Settimana 1:** chiamare 3 studi a Milano per quote scoping (es. Portolano Cavallo, DLA Piper startup desk, Studio Legale Adamo, Bonelli Erede tech). Sceglierne 1 con quote scritta entro giorno 10. Brief di 1h sul caso Nixum + scenario Eurocogen-Cato.

**Quello che NON va fatto:** firmare la SRL prima di avere chiaro lo status Startup Innovativa nello statuto. Una SRL ordinaria convertita dopo è più costosa di una nata già Startup Innovativa.

---

# APPENDICE — RAPID DECISION MATRIX

Vista d'insieme su una pagina, per discussione con Nathy.

| Decisione | Opzione A | Opzione B | Opzione C | Raccomandazione |
|---|---|---|---|---|
| **Eurocogen firma Cato?** | Listino così com'è | Rinegoziato 5/8 voci | Decline | **B** se rinegoziabile, altrimenti **C** |
| **Quando inizia Nixum MVP?** | Dopo decisione Eurocogen | In parallelo (now) | Dopo trial 60gg | **B** — sprint 1 parte ora, in parallelo |
| **Forma societaria Nixum?** | SRL ordinaria | SRL Startup Innovativa | Sàrl CH | **B** — fase 0 |
| **Sede operativa?** | Italia | Svizzera | Dual | **A** fase 0, valutare **B** fase 2 |
| **IP holding?** | OpCo IT | HoldCo CH | Misto | **A** fase 0, valutare **B** fase 2 |
| **Primo angolo di posizionamento?** | Lookalike Cato | OS Cantiere | Cato Companion | **D — Consorzio-first**, poi OS Cantiere |
| **LLM primary?** | Claude | GPT-4o | Multi | **Claude** + fallback GPT-4o |
| **Cliente 1?** | Eurocogen | Consorzio RESEARCH | Altro GC | **Eurocogen** come cuneo, poi RESEARCH |
| **Trial Nixum?** | Free 30gg | Paid refundable 60gg | Listino diretto | **Free 30gg** come differenziatore vs Cato |
| **Scope sprint 1?** | Discovery + analysis | Submission automation | Multi-tenant consorzio | **Submission MEPA + EmpulIA** = moat |

---

**END AUDIT 360° — v1.0**

*Tre parti, una decisione: Eurocogen non firma il listino così com'è; rinegozia con pacchetto first-construction-client; Nixum parte in parallelo con sprint 1 submission automation; legalmente, SRL Startup Innovativa fase 0 con information firewall ferreo verso Cato; CH si valuta a fase 2 con sostanza reale, non come trucco.*
