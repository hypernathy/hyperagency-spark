// ⚠️ MIRROR — source canonique = repo hyperyou-systems (CONNEXA-HQ D-014a). Ne pas éditer le contenu quiz ici ; synchroniser depuis hyperyou-systems. Voir ./README.md
import type { CupidoQuestion, CupidoResultType } from './cupidoQuizData';

export const CUPIDO_QUESTIONS_IT: CupidoQuestion[] = [
  {q:"Quando incontri qualcuno che ti attrae, qual è la tua prima reazione?",sub:"Pensa a come ti senti davvero — non a come vorresti sentirti.",a:[
    {t:"P",text:"Sento una connessione profonda e mi apro velocemente — quasi troppo",pts:"Attrazione: apertura immediata"},
    {t:"I",text:"Sono affascinato/a ma mantengo le distanze — prima osservo, poi decido",pts:"Attrazione: osservazione strategica"},
    {t:"F",text:"L'attrazione cresce quando sento di potermi prendere cura dell'altra persona",pts:"Attrazione: cura come connessione"},
    {t:"L",text:"Sono attratto/a da persone che stimolano la mia mente — la conversazione è il vero preliminare",pts:"Attrazione: intelletto come intimità"},
    {t:"S",text:"Mi accendo intensamente ma temo che finirà — vivo tutto con urgenza",pts:"Attrazione: intensità e paura"}
  ]},
  {q:"Come vivi l'intimità emotiva nelle relazioni?",sub:"Non c'è una risposta giusta — solo la tua verità.",a:[
    {t:"P",text:"L'intimità emotiva è ciò che cerco più di tutto — voglio essere visto/a davvero",pts:"Intimità: bisogno di essere visti"},
    {t:"I",text:"Mi piace l'intimità, ma a volte ho bisogno di ritirarmi nel mio spazio",pts:"Intimità: oscillazione vicinanza-distanza"},
    {t:"F",text:"La creo attraverso azioni tangibili — cucinare, organizzare, risolvere problemi",pts:"Intimità: atti di servizio"},
    {t:"L",text:"La costruisco lentamente, attraverso conversazioni profonde e condivisione intellettuale",pts:"Intimità: costruzione lenta e riflessiva"},
    {t:"S",text:"La vivo intensamente quando c'è, ma temo che possa scomparire improvvisamente",pts:"Intimità: intensità ansiosa"}
  ]},
  {q:"Cosa succede quando senti il/la tuo/a partner allontanarsi?",sub:"Anche se non l'hai mai ammesso ad alta voce.",a:[
    {t:"S",text:"Panico. Cerco rassicurazione, mando messaggi, ho bisogno di sapere che c'è ancora",pts:"Distanza: attivazione ansiosa"},
    {t:"I",text:"Mi allontano anch'io. Se non vuole stare vicino, trovo il mio spazio",pts:"Distanza: ritiro protettivo"},
    {t:"P",text:"Cerco di capire cosa ho fatto di sbagliato — e mi apro di più per riconnettermi",pts:"Distanza: vulnerabilità come ponte"},
    {t:"F",text:"Intensifico la cura — faccio di più, offro di più, do di più",pts:"Distanza: cura come compensazione"},
    {t:"L",text:"Analizzo la situazione razionalmente — cerco di capire il pattern prima di reagire",pts:"Distanza: analisi prima dell'emozione"}
  ]},
  {q:"Qual è il tuo bisogno più grande in una relazione?",sub:"Il bisogno su cui non negozi.",a:[
    {t:"P",text:"Autenticità — voglio essere completamente me stesso/a senza maschere",pts:"Bisogno: autenticità radicale"},
    {t:"I",text:"Libertà — amare senza perdermi è non negoziabile",pts:"Bisogno: autonomia nell'amore"},
    {t:"F",text:"Sicurezza — sapere che siamo una squadra, qualunque cosa accada",pts:"Bisogno: stabilità e partnership"},
    {t:"L",text:"Stimolazione — una mente che mi sfida e mi fa crescere",pts:"Bisogno: crescita intellettuale condivisa"},
    {t:"S",text:"Presenza — sentire che l'altra persona c'è davvero, non solo fisicamente",pts:"Bisogno: rassicurazione costante"}
  ]},
  {q:"Come esprimi l'amore nella vita quotidiana?",sub:"Non quello che dici — quello che fai.",a:[
    {t:"F",text:"Attraverso azioni concrete — organizzo, cucino, mi prendo cura delle cose pratiche",pts:"Linguaggio: servizio e dedizione"},
    {t:"P",text:"Con parole profonde e vulnerabilità — dico quello che sento, anche quando fa paura",pts:"Linguaggio: parole e verità"},
    {t:"S",text:"Con intensità — quando amo, amo con tutto. Messaggi, attenzioni, presenza totale",pts:"Linguaggio: devozione totale"},
    {t:"L",text:"Condividendo idee, libri, conversazioni — il mio amore passa attraverso la mente",pts:"Linguaggio: connessione mentale"},
    {t:"I",text:"Dando spazio — rispetto i tempi dell'altro/a e chiedo lo stesso per me",pts:"Linguaggio: libertà come regalo"}
  ]},
  {q:"Qual è il tuo pattern nelle relazioni passate?",sub:"Il pattern che si ripete, anche quando lo vedi arrivare.",a:[
    {t:"S",text:"Mi innamoro intensamente, poi la paura dell'abbandono sabota tutto",pts:"Pattern: infatuazione-sabotaggio"},
    {t:"I",text:"Mi avvicino poi mi ritiro — appena diventa troppo intimo, ho bisogno d'aria",pts:"Pattern: avvicinamento-ritiro"},
    {t:"F",text:"Do tutto fino a non avere più nulla — poi mi arrabbio perché non ricevo",pts:"Pattern: dare-esaurire-risentire"},
    {t:"P",text:"Mi apro troppo presto e poi mi sento ferito/a dalla vulnerabilità non ricambiata",pts:"Pattern: apertura-ferita"},
    {t:"L",text:"Analizzo la relazione finché non diventa un oggetto di studio invece che un'esperienza",pts:"Pattern: intellettualizzazione emotiva"}
  ]},
  {q:"Durante un litigio con il/la tuo/a partner, cosa fai?",sub:"Sii onesto/a con te stesso/a.",a:[
    {t:"L",text:"Cerco di razionalizzare — presento argomenti logici e cerco soluzioni",pts:"Conflitto: razionalizzazione"},
    {t:"P",text:"Divento vulnerabile — esprimo come mi sento davvero, anche se fa male",pts:"Conflitto: vulnerabilità come arma"},
    {t:"S",text:"Mi agito — temo che il litigio significhi la fine di tutto",pts:"Conflitto: catastrofizzazione"},
    {t:"I",text:"Ho bisogno di spazio — mi chiudo finché non riesco a pensare chiaramente",pts:"Conflitto: chiusura protettiva"},
    {t:"F",text:"Cerco di risolverlo concretamente — 'cosa facciamo per sistemare?'",pts:"Conflitto: problem-solving pratico"}
  ]},
  {q:"Cosa ti dicono le persone che hai amato?",sub:"Il feedback che hai sentito più di una volta.",a:[
    {t:"P",text:"'Sei troppo intenso/a — a volte mi sento sopraffatto/a dalla tua profondità'",pts:"Feedback: troppa profondità"},
    {t:"I",text:"'Sei irraggiungibile — non so mai cosa provi davvero'",pts:"Feedback: muro emotivo"},
    {t:"F",text:"'Fai troppo per me — non ho mai chiesto tutto questo'",pts:"Feedback: cura eccessiva"},
    {t:"L",text:"'Vorrei che sentissi di più e pensassi di meno — mi manchi emotivamente'",pts:"Feedback: distanza emotiva"},
    {t:"S",text:"'Ho bisogno di spazio — il tuo bisogno di rassicurazione mi soffoca'",pts:"Feedback: pressione relazionale"}
  ]},
  {q:"Qual è la tua paura più grande in amore?",sub:"Quella che non dici mai ad alta voce.",a:[
    {t:"S",text:"Essere abbandonato/a — che l'altra persona se ne vada senza avviso",pts:"Paura: abbandono"},
    {t:"I",text:"Perdermi — dissolvermi nell'altro/a fino a non riconoscermi più",pts:"Paura: perdita di identità"},
    {t:"P",text:"Non essere abbastanza — che la mia autenticità non basti per trattenere qualcuno",pts:"Paura: inadeguatezza"},
    {t:"F",text:"Non essere ricambiato/a — dare tutto e non ricevere nulla in cambio",pts:"Paura: non reciprocità"},
    {t:"L",text:"La noia — che la connessione mentale svanisca e rimanga solo la routine",pts:"Paura: stagnazione intellettuale"}
  ]},
  {q:"Come immagini la relazione ideale?",sub:"Non quella perfetta — quella che funziona per te.",a:[
    {t:"P",text:"Due persone autentiche che si scelgono ogni giorno — senza maschere, senza giochi",pts:"Ideale: autenticità reciproca"},
    {t:"I",text:"Due vite piene che si scelgono liberamente — insieme ma mai dipendenti",pts:"Ideale: libertà condivisa"},
    {t:"F",text:"Una partnership solida — costruire una vita insieme, giorno dopo giorno",pts:"Ideale: progetto di vita condiviso"},
    {t:"L",text:"Due menti che si stimolano — una conversazione infinita che non annoia mai",pts:"Ideale: stimolazione perpetua"},
    {t:"S",text:"Amore totale e incondizionato — sapere che qualcuno ci sarà sempre, qualunque cosa",pts:"Ideale: sicurezza assoluta"}
  ]},
  {q:"Cosa stai evitando nella tua vita amorosa?",sub:"La domanda più scomoda — e la più importante.",a:[
    {t:"I",text:"Che la mia indipendenza sia anche una difesa — per evitare di rischiare davvero il dolore",pts:"Evitamento: protezione travestita da libertà"},
    {t:"S",text:"Che la mia paura dell'abbandono stia creando esattamente quello che temo",pts:"Evitamento: profezia auto-avverante"},
    {t:"P",text:"Che aprirmi completamente significhi anche accettare che potrei essere ferito/a",pts:"Evitamento: costo della vulnerabilità"},
    {t:"F",text:"Che dare tutto sia anche un modo per controllare — non per amare davvero",pts:"Evitamento: controllo travestito da cura"},
    {t:"L",text:"Che analizzare le emozioni sia anche un modo per evitare di sentirle",pts:"Evitamento: pensiero come scudo"}
  ]},
  {q:"Di cosa hai più bisogno adesso per trasformare la tua vita amorosa?",sub:"L'ultima domanda — la più importante.",a:[
    {t:"P",text:"Il coraggio di essere vulnerabile senza aspettarmi che l'altro/a mi salvi",pts:"Bisogno: vulnerabilità autonoma"},
    {t:"I",text:"Imparare che la vicinanza non è una minaccia — e che posso restare me stesso/a",pts:"Bisogno: intimità sicura"},
    {t:"F",text:"Imparare a ricevere — non solo dare. E chiedere ciò di cui ho bisogno",pts:"Bisogno: reciprocità"},
    {t:"L",text:"Permettermi di sentire — non solo capire. Passare dalla testa al cuore",pts:"Bisogno: intelligenza emotiva"},
    {t:"S",text:"Costruire sicurezza interna — non cercarla solo tra le braccia di qualcun altro",pts:"Bisogno: sicurezza interiore"}
  ]}
];

export const CUPIDO_RESULT_DATA_IT: Record<string, CupidoResultType> = {
  P: {
    color: '#C83B3B', cd: 'rgba(200,59,59,.1)', cl: 'rgba(200,59,59,.25)',
    label: 'Stile 01 · Fiamma', name: 'La Fiamma Autentica',
    tagline: 'Ama con tutto. Si apre con coraggio. Trasforma la vulnerabilità in forza.',
    tags: ['Vulnerabilità coraggiosa', 'Autenticità radicale', 'Profondità emotiva'],
    intro: `Il tuo cuore opera in modalità <strong>completamente aperta</strong>. Ami con una profondità che la maggior parte delle persone non raggiunge mai. La tua vulnerabilità non è debolezza — è il tuo superpotere più raro.`,
    desc: `Il problema non è come ami. È che il mondo non è sempre pronto per la tua intensità. Ti apri completamente e poi ti ferisci quando l'altra persona non è allo stesso livello.<br><br>Probabilmente hai sperimentato il ciclo: apertura totale → ferita → chiusura temporanea → riapertura. Questo ciclo non è un difetto — è la tua natura. Ma senza un sistema per gestirlo, diventa un pattern doloroso.<br><br>La soluzione non è chiuderti. È imparare a <strong>dosare la tua vulnerabilità</strong> — aprendoti gradualmente, con le persone giuste, al ritmo giusto.`,
    powers: [{name: 'Profondità emotiva', sub: 'Crei connessioni che la maggior parte delle persone non tocca mai'}, {name: 'Autenticità magnetica', sub: 'La tua verità attrae le persone giuste'}, {name: 'Coraggio di amare', sub: 'Ti presenti quando gli altri si nascondono'}, {name: 'Empatia trasformativa', sub: 'Comprendi gli altri a un livello che pochi raggiungono'}],
    blinds: [{name: 'Apertura prematura', sub: 'Ti esponi troppo presto con le persone sbagliate'}, {name: 'Aspettative di reciprocità', sub: 'Ami al 100% e ti aspetti lo stesso — immediatamente'}, {name: 'Ferite amplificate', sub: 'Quando non sei ricambiato/a, il dolore è 10x'}, {name: 'Velocità vs profondità', sub: 'La vera intimità richiede tempo — non solo intensità'}],
    scores: [{l: 'Vulnerabilità', p: 96}, {l: 'Autenticità', p: 92}, {l: 'Protezione', p: 34}, {l: 'Pazienza', p: 41}, {l: 'Resilienza', p: 62}],
    rel: `Il tuo modello di relazione ideale si basa sulla <strong>vulnerabilità progressiva</strong>. Non smettere di aprirti — impara a farlo gradualmente. Le connessioni più profonde vengono dalla pazienza, non dalla velocità.`,
    companion: {
      prompts: ["Oggi ti sei aperto/a con qualcuno? Come hai dosato la tua vulnerabilità?", "Identifica un momento in cui la tua autenticità ha creato una connessione genuina.", "Qual è il confine tra 'essere autentico/a' e 'aspettarsi troppo in cambio'?"],
      mod1: 'Vulnerabilità progressiva: il metodo per aprirsi senza bruciarsi',
      mod2: 'Come distinguere le persone che meritano la tua apertura',
      week1: 'Diagnosi: il tuo ciclo apertura-ferita-chiusura',
      week2: 'Il metodo Gradiente: dosare la vulnerabilità senza perderla',
      week3: 'Costruire relazioni autentiche che resistono al tempo',
      week4: 'Sistema di protezione sana permanente'
    },
    reportItems: ['Il tuo ciclo apertura-ferita e come spezzarlo', 'Il metodo Gradiente per dosare la vulnerabilità', 'Come riconoscere chi merita la tua profondità', 'I 3 segnali che stai confondendo velocità con intimità']
  },
  I: {
    color: '#4A7FB5', cd: 'rgba(74,127,181,.1)', cl: 'rgba(74,127,181,.25)',
    label: 'Stile 02 · Vento', name: 'Il Vento Libero',
    tagline: 'Ama senza catene. Protegge la propria essenza. Trasforma la libertà in un regalo.',
    tags: ['Autonomia emotiva', 'Libertà come valore', 'Intimità selettiva'],
    intro: `Il tuo cuore ha un <strong>sistema di protezione sofisticato</strong>. Ami profondamente, ma solo quando sei sicuro/a di non perderti. La tua indipendenza non è freddezza — è come preservi la tua essenza per poterla davvero condividere.`,
    desc: `Il problema non è che non ami. È che il tuo amore ha bisogno di spazio per respirare. Quando l'altra persona si avvicina troppo, il tuo istinto ti dice di ritirarti — non per smettere di sentire, ma per evitare di perderti.<br><br>Probabilmente hai sperimentato il pattern: avvicinarsi → sentirsi soffocato/a → ritiro → l'altra persona si sente rifiutata → conflitto. Questo ciclo non è egoismo — è il tuo modo di proteggerti.<br><br>La soluzione non è diventare più "aperto/a". È costruire un tipo di <strong>intimità che includa il tuo bisogno di spazio</strong> — senza che l'altra persona si senta esclusa.`,
    powers: [{name: 'Integrità personale', sub: 'Non ti perdi nelle relazioni — sai chi sei'}, {name: 'Amore non dipendente', sub: 'Ami per scelta, non per bisogno'}, {name: 'Stabilità emotiva', sub: 'Non reagisci impulsivamente — pensi prima'}, {name: 'Qualità della presenza', sub: 'Quando ci sei, ci sei al 100%'}],
    blinds: [{name: 'Muro emotivo', sub: 'L\'indipendenza a volte diventa una barriera'}, {name: 'Ritiro automatico', sub: 'Ti chiudi quando dovresti restare'}, {name: 'Comunicazione fredda', sub: 'L\'altra persona non sa cosa provi — perché non lo dici'}, {name: 'Paura della dipendenza', sub: 'Eviti l\'intimità profonda per paura di perderti'}],
    scores: [{l: 'Indipendenza', p: 95}, {l: 'Integrità', p: 90}, {l: 'Apertura', p: 36}, {l: 'Comunicazione', p: 42}, {l: 'Intimità', p: 48}],
    rel: `Il tuo modello di relazione ideale si basa sulla <strong>libertà condivisa</strong>. Due persone complete che si scelgono ogni giorno senza perdersi. L'intimità ideale per te include il diritto allo spazio.`,
    companion: {
      prompts: ["Oggi, quando hai sentito il bisogno di ritirarti, cosa stava succedendo?", "Quand'è stata l'ultima volta che hai espresso un'emozione vulnerabile senza proteggerti?", "Cosa perdi quando ti chiudi — e cosa pensi di proteggere?"],
      mod1: "Come restare vicini senza perdersi",
      mod2: 'Il framework intimità-libertà per il Vento',
      week1: 'Diagnosi: dove la tua indipendenza diventa difesa',
      week2: 'Intimità sicura: restare vicini senza perdersi',
      week3: 'Comunicare emozioni quando l\'istinto dice di chiudersi',
      week4: 'Sistema di apertura graduale permanente'
    },
    reportItems: ["Come distinguere protezione sana da fuga dall'intimità", "Il framework per restare vicini senza perdersi", "Come comunicare i tuoi bisogni di spazio senza ferire gli altri", "I 3 momenti in cui il tuo ritiro sabota la connessione"]
  },
  F: {
    color: '#6B8E6B', cd: 'rgba(107,142,107,.1)', cl: 'rgba(107,142,107,.25)',
    label: 'Stile 03 · Radice', name: 'La Radice Protettiva',
    tagline: 'Ama costruendo. Si prende cura di tutto. Trasforma la dedizione in fondamenta.',
    tags: ['Cura attiva', 'Partnership solida', 'Dedizione costruttiva'],
    intro: `Il tuo cuore si esprime attraverso <strong>mani e azioni</strong>. Per te, amare è fare — cucinare, organizzare, costruire, risolvere. La tua cura non è scontata — è il tuo linguaggio d'amore più potente.`,
    desc: `Il problema non è che dai troppo. È che dai senza chiedere — fino a esaurirti. E quando finalmente chiedi, l'altra persona non capisce perché sei arrabbiato/a.<br><br>Il tuo pattern: dare tutto → non ricevere → accumulare frustrazione → esplodere o chiuderti. Questo ciclo ti lascia sempre nella stessa posizione: esausto/a e incompreso/a.<br><br>La soluzione non è smettere di dare. È imparare a <strong>ricevere con la stessa facilità</strong> con cui dai. E comunicare i tuoi bisogni prima di raggiungere il punto di rottura.`,
    powers: [{name: 'Dedizione autentica', sub: 'Quando ami, costruisci qualcosa di concreto e duraturo'}, {name: 'Affidabilità', sub: 'L\'altra persona sa che può contare su di te — sempre'}, {name: 'Cura tangibile', sub: 'Trasformi l\'amore in azioni che migliorano la vita'}, {name: 'Visione di partnership', sub: 'Pensi in termini di "noi" — costruisci per due'}],
    blinds: [{name: 'Dare senza ricevere', sub: 'La bilancia è sempre sbilanciata dalla tua parte'}, {name: 'Cura come controllo', sub: '"Fare per" a volte è un modo per controllare'}, {name: 'Bisogni invisibili', sub: 'I tuoi bisogni sono sempre in fondo alla lista'}, {name: 'Risentimento accumulato', sub: 'Non dici nulla fino a esplodere'}],
    scores: [{l: 'Dedizione', p: 97}, {l: 'Affidabilità', p: 94}, {l: 'Assertività', p: 32}, {l: 'Ricevere', p: 28}, {l: 'Equilibrio', p: 40}],
    rel: `Il tuo modello di relazione ideale è una <strong>partnership equilibrata</strong> dove dare e ricevere sono in equilibrio. Il tuo superpotere è la cura — ma deve fluire in entrambe le direzioni.`,
    companion: {
      prompts: ["Oggi, qualcuno ha fatto qualcosa per TE? L'hai accettato senza resistere?", "Identifica un bisogno che non hai mai comunicato al/alla tuo/a partner. Perché?", "Cosa succederebbe se chiedessi aiuto prima di esaurirti?"],
      mod1: 'Come imparare a ricevere (e perché è più difficile che dare)',
      mod2: 'Il framework bisogni-confini per la Radice',
      week1: 'Diagnosi: l\'equilibrio dare-ricevere nella tua vita',
      week2: 'Comunicare i bisogni prima del punto di rottura',
      week3: 'Costruire vera reciprocità nelle relazioni',
      week4: 'Sistema anti-burnout relazionale permanente'
    },
    reportItems: ['Come costruire vera reciprocità nelle relazioni', 'Il framework per comunicare i tuoi bisogni senza senso di colpa', 'La differenza tra cura autentica e cura-come-controllo', 'I 3 segnali che stai dando troppo (e come fermarti in tempo)']
  },
  L: {
    color: '#9B7EB8', cd: 'rgba(155,126,184,.1)', cl: 'rgba(155,126,184,.25)',
    label: 'Stile 04 · Stella', name: 'La Stella Pensante',
    tagline: 'Ama con la mente. Cerca profondità intellettuale. Trasforma il pensiero in connessione.',
    tags: ['Intelletto emotivo', 'Conversazione come intimità', 'Analisi profonda'],
    intro: `Il tuo cuore passa attraverso la <strong>mente</strong>. Per te, la vera intimità è una conversazione che tocca l'anima. L'attrazione intellettuale è il tuo linguaggio d'amore — e non è meno profondo di quello emotivo.`,
    desc: `Non è che non senti. È che senti attraverso il pensiero. Quando analizzi una relazione, non stai evitando le emozioni — le stai elaborando a modo tuo.<br><br>Il problema è che l'altra persona spesso vuole sentire, non capire. Vuole un "ti amo" spontaneo, non un'analisi del perché l'amore funziona.<br><br>La soluzione non è smettere di pensare. È imparare a <strong>lasciar arrivare le emozioni prima dell'analisi</strong> — almeno qualche volta.`,
    powers: [{name: 'Profondità conversazionale', sub: 'Le tue conversazioni creano intimità vera e duratura'}, {name: 'Riconoscimento di pattern', sub: 'Vedi le dinamiche relazionali con rara chiarezza'}, {name: 'Crescita condivisa', sub: 'Porti l\'altra persona a pensare più profondamente'}, {name: 'Stabilità riflessiva', sub: 'Non reagisci impulsivamente — pensi prima di agire'}],
    blinds: [{name: 'Distanza emotiva', sub: 'L\'analisi a volte sostituisce il sentire'}, {name: 'Intellettualizzazione', sub: 'Pensi la relazione invece di viverla'}, {name: 'Difficoltà con la spontaneità', sub: 'L\'impulsività emotiva ti mette a disagio'}, {name: 'Aspettative cognitive', sub: 'Cerchi perfezione logica in qualcosa di illogico: l\'amore'}],
    scores: [{l: 'Intelligenza', p: 96}, {l: 'Riflessione', p: 91}, {l: 'Spontaneità', p: 33}, {l: 'Emozione', p: 39}, {l: 'Presenza', p: 48}],
    rel: `Il tuo modello di relazione ideale è una <strong>connessione intellettuale-emotiva</strong>. Non rinunciare alla profondità mentale — impara ad abbinarla alla profondità emotiva. Mente e cuore non sono in competizione.`,
    companion: {
      prompts: ["Oggi, quando hai sentito un'emozione forte, l'hai espressa o analizzata prima?", "Quand'è stata l'ultima volta che hai detto 'ti amo' senza pensarci?", "Cosa perdi quando analizzi un momento invece di viverlo?"],
      mod1: 'Come passare dalla testa al cuore (senza perdere la mente)',
      mod2: 'Il framework emozione-riflessione per la Stella',
      week1: 'Diagnosi: dove l\'analisi sostituisce il sentire',
      week2: 'Presenza emotiva: vivere il momento prima di comprenderlo',
      week3: 'Comunicare con il cuore quando il cervello vuole il controllo',
      week4: 'Sistema di equilibrio mente-cuore permanente'
    },
    reportItems: ['Come bilanciare analisi e spontaneità nelle relazioni', 'Il framework per esprimere emozioni senza perdere profondità', 'La differenza tra capire una relazione e viverla', 'I 3 momenti in cui il pensiero sabota la connessione']
  },
  S: {
    color: '#D4764E', cd: 'rgba(212,118,78,.1)', cl: 'rgba(212,118,78,.25)',
    label: "Stile 05 · Onda", name: "L'Onda Intensa",
    tagline: 'Ama con urgenza. Sente tutto amplificato. Trasforma la paura in profondità.',
    tags: ["Intensità emotiva", "Paura dell'abbandono", "Amore come urgenza"],
    intro: `Il tuo cuore vive al <strong>volume massimo</strong>. Quando ami, ami con un'intensità che pochi conoscono. La tua paura dell'abbandono non è un difetto — è il segnale di quanto profondamente ti connetti.`,
    desc: `Il problema non è che senti troppo. È che la paura che finisca ti porta a creare esattamente quello che temi. Cerchi rassicurazione costante, interpreti ogni silenzio come un segnale di abbandono, e la tua intensità a volte soffoca quello che sta cercando di crescere.<br><br>Il tuo pattern: infatuazione intensa → paura dell'abbandono → comportamenti controllanti → l'altra persona si allontana → conferma della paura.<br><br>La soluzione non è amare di meno. È costruire <strong>sicurezza interna</strong> — perché l'amore dell'altra persona sia un regalo, non la tua unica fonte di stabilità.`,
    powers: [{name: 'Intensità emotiva', sub: "Quando ami, l'altra persona si sente davvero amata"}, {name: 'Presenza totale', sub: "Ci sei completamente — non a metà"}, {name: 'Lealtà profonda', sub: 'Chi ha il tuo cuore, ha tutto di te'}, {name: 'Empatia amplificata', sub: "Senti le emozioni dell'altra persona come se fossero le tue"}],
    blinds: [{name: "Paura dell'abbandono", sub: 'Ogni silenzio diventa un segnale di pericolo'}, {name: 'Bisogno di rassicurazione', sub: 'Hai bisogno di sentire "ci sono" troppo spesso'}, {name: 'Profezia auto-avverante', sub: 'La paura che finisca crea la pressione che la fa finire'}, {name: 'Dipendenza emotiva', sub: "La tua stabilità dipende troppo dalla presenza dell'altra persona"}],
    scores: [{l: 'Intensità', p: 98}, {l: 'Presenza', p: 89}, {l: 'Sicurezza interna', p: 26}, {l: 'Indipendenza', p: 31}, {l: 'Stabilità', p: 34}],
    rel: `Il tuo modello di relazione ideale si basa sulla <strong>sicurezza interna</strong>. Non smettere di amare intensamente — impara a farlo da un luogo di pienezza, non di paura. Quando sei pieno/a dentro, il tuo amore diventa un regalo invece che una richiesta.`,
    companion: {
      prompts: ["In che stato emotivo sei oggi? (Sicuro/a / Ansioso/a / Urgente) — e cosa puoi fare PER TE?", "Quand'è stata l'ultima volta che hai cercato rassicurazione? Cosa cercavi davvero?", "Come puoi darti tu la sicurezza che stai chiedendo all'altra persona?"],
      mod1: "Come costruire sicurezza interna (e smettere di cercarla negli altri)",
      mod2: "Il framework anti-ansia relazionale per l'Onda",
      week1: "Diagnosi: il tuo loop paura-controllo-abbandono",
      week2: 'Sicurezza interna: tecniche di auto-regolazione quotidiana',
      week3: "Comunicare l'intensità senza soffocare",
      week4: 'Sistema anti-dipendenza emotiva permanente'
    },
    reportItems: ["Come spezzare il loop paura-controllo-abbandono", "Il framework per costruire sicurezza interna", "La differenza tra amare intensamente e dipendenza emotiva", "I 3 trigger della tua ansia relazionale — e come disattivarli"]
  }
};
