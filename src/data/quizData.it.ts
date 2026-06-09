// ⚠️ MIRROR — source canonique = repo hyperyou-systems (CONNEXA-HQ D-014a). Ne pas éditer le contenu quiz ici ; synchroniser depuis hyperyou-systems. Voir ./README.md
import type { Question, ResultType } from './quizData';

export const QUESTIONS_IT: Question[] = [
  {q:"Quando ti arriva una nuova idea, qual è la tua prima reazione?",sub:"Scegli quella che ti risuona di più.",a:[
    {t:"V",text:"La architettizzo mentalmente in un sistema completo prima di fare qualsiasi cosa",pts:"Orientamento: sistemi e struttura"},
    {t:"K",text:"La lancio immediatamente — penso mentre agisco, l'energia è adesso",pts:"Orientamento: azione e impulso"},
    {t:"C",text:"Ne parlo con qualcuno — capire come può aiutare gli altri mi accende",pts:"Orientamento: persone e relazioni"},
    {t:"D",text:"Mi immergo in una ricerca profonda finché non capisco tutto",pts:"Orientamento: conoscenza e profondità"},
    {t:"S",text:"Dipende dal mio ciclo — a volte esplodo di energia, a volte ho bisogno di silenzio",pts:"Orientamento: energia ciclica"}
  ]},
  {q:"Cosa ti blocca più spesso nel tuo lavoro?",sub:"Sii onesto/a — questa è la domanda chiave.",a:[
    {t:"V",text:"Non riesco a iniziare se tutto non è perfetto nella mia testa",pts:"Blocco: perfezionismo paralizzante"},
    {t:"K",text:"Mi annoio prima di finire — l'eccitazione svanisce quando arriva la parte noiosa",pts:"Blocco: avversione al traguardo"},
    {t:"C",text:"Finisco sempre per occuparmi dei problemi degli altri invece dei miei",pts:"Blocco: confini porosi"},
    {t:"D",text:"So tutto ma non riesco a comunicarlo in modo semplice",pts:"Blocco: invisibile al mercato"},
    {t:"S",text:"I miei crolli energetici distruggono quello che ho costruito durante la fase alta",pts:"Blocco: gestione dei cicli"}
  ]},
  {q:"Come descriveresti il tuo rapporto con l'energia nel lavoro?",sub:"Pensa agli ultimi 3 mesi.",a:[
    {t:"S",text:"Vado a fasi: produttività estrema seguita da recupero totale",pts:"Pattern: cicli ad alta ampiezza"},
    {t:"D",text:"Quando trovo qualcosa che mi appassiona, posso lavorare 12 ore senza accorgermene",pts:"Pattern: iperfocus profondo"},
    {t:"K",text:"L'energia arriva a scoppi — alta all'inizio di ogni progetto, poi svanisce",pts:"Pattern: picchi di dopamina"},
    {t:"V",text:"Mi energizzo quando pianifico — l'esecuzione mi prosciuga",pts:"Pattern: visione sì, esecuzione no"},
    {t:"C",text:"L'energia degli altri mi carica — le relazioni mi alimentano",pts:"Pattern: co-dipendenza energetica"}
  ]},
  {q:"Guardando gli ultimi 12 mesi, cosa è successo con i tuoi progetti?",sub:"Scegli la risposta più onesta.",a:[
    {t:"K",text:"Ho iniziato molte cose fantastiche che non ho mai finito",pts:"Pattern: seriale senza completamento"},
    {t:"V",text:"Ho passato molto tempo a pianificare — ho prodotto meno di quanto avrei voluto",pts:"Pattern: architettura senza costruzione"},
    {t:"C",text:"Ho aiutato gli altri a costruire la loro visione più della mia",pts:"Pattern: investire negli altri"},
    {t:"D",text:"Ho approfondito molto ma faccio fatica a trasformare l'expertise in un'offerta concreta",pts:"Pattern: expertise non monetizzata"},
    {t:"S",text:"Ho avuto periodi straordinari e periodi di blocco totale — forte discontinuità",pts:"Pattern: montagne russe produttive"}
  ]},
  {q:"Come ti relazioni con gli altri in un contesto professionale?",sub:"Quale frase ti descrive meglio?",a:[
    {t:"C",text:"Percepisco i bisogni degli altri prima che li esprimano",pts:"Relazione: empatia strutturale"},
    {t:"V",text:"Preferisco lavorare da solo/a — le collaborazioni spesso non capiscono dove sto andando",pts:"Relazione: solitudine visionaria"},
    {t:"D",text:"Mi piace condividere la mia conoscenza con chi è genuinamente interessato",pts:"Relazione: mentoring e trasmissione"},
    {t:"K",text:"Amo il brainstorming — la parte esecutiva con gli altri mi rallenta",pts:"Relazione: scintille collaborative"},
    {t:"S",text:"Nelle fasi alte sono magnetico/a — nelle fasi basse ho bisogno di isolarmi",pts:"Relazione: alternanza presenza-ritiro"}
  ]},
  {q:"Cosa dicono più spesso le persone che ti conoscono bene?",sub:"Scegli il feedback più ricorrente.",a:[
    {t:"V",text:"'Hai sempre grandi idee — ma non le realizzi mai davvero'",pts:"Feedback: visione senza esecuzione"},
    {t:"K",text:"'Sei pieno/a di energia e idee — ma non finisci mai quello che inizi'",pts:"Feedback: dispersione creativa"},
    {t:"C",text:"'Fai tutto per tutti — ma non ti prendi mai cura di te'",pts:"Feedback: auto-sacrificio relazionale"},
    {t:"D",text:"'Sei brillante — dovresti metterti più in gioco'",pts:"Feedback: talento invisibile"},
    {t:"S",text:"'Quando sei ON sei inarrestabile — ma poi sparisci per settimane'",pts:"Feedback: ciclicità evidente"}
  ]},
  {q:"Qual è il tuo rapporto con il denaro e il pricing del tuo lavoro?",sub:"Questa è spesso la domanda più difficile.",a:[
    {t:"D",text:"So che il mio lavoro vale molto ma mi vergogno a chiedere prezzi alti",pts:"Blocco: sindrome dell'esperto umile"},
    {t:"V",text:"Faccio fatica a monetizzare — la visione è chiara ma il prodotto concreto no",pts:"Blocco: gap visione-prodotto"},
    {t:"C",text:"Tendo a offrire troppo per troppo poco — i clienti diventano quasi amici",pts:"Blocco: confusione valore-relazione"},
    {t:"K",text:"Lancio offerte impulsivamente — pricing casuale, sconti spontanei",pts:"Blocco: pricing reattivo"},
    {t:"S",text:"Nei periodi alti guadagno bene — nei periodi bassi tutto si ferma",pts:"Blocco: fatturato ciclico instabile"}
  ]},
  {q:"Quando sei nel tuo stato di massima performance, cosa sta succedendo?",sub:"Descrivi il contesto che ti fa funzionare al meglio.",a:[
    {t:"D",text:"Sto esplorando qualcosa in profondità — iperfocus totale e pura soddisfazione",pts:"Picco: immersione totale"},
    {t:"V",text:"Sto progettando un sistema complesso — la mia mente è cristallina e collega tutto",pts:"Picco: architettura sistemica"},
    {t:"S",text:"Sono nella fase alta del ciclo — energia alle stelle, idee fluide, esecuzione rapida",pts:"Picco: momentum ciclico"},
    {t:"C",text:"Sto facilitando qualcosa — portare le persone a collaborare, creare sinergie",pts:"Picco: catalisi relazionale"},
    {t:"K",text:"Sto iniziando qualcosa di nuovo — la fase di lancio è la mia zona di genio",pts:"Picco: ignizione creativa"}
  ]},
  {q:"Qual è la tua sfida principale nel costruire un business?",sub:"Scegli quella che senti più vera adesso.",a:[
    {t:"K",text:"Passare dall'idea all'offerta concreta — e mantenerla nel tempo senza annoiarmi",pts:"Sfida: dall'idea al sistema stabile"},
    {t:"V",text:"Semplificare abbastanza da comunicare chiaramente cosa offro",pts:"Sfida: sintesi della complessità"},
    {t:"C",text:"Costruire qualcosa che sia davvero mio — non al servizio della visione di qualcun altro",pts:"Sfida: possedere la mia visione"},
    {t:"D",text:"Rendermi visibile e comunicare il vero valore di quello che so fare",pts:"Sfida: marketing dell'expertise profonda"},
    {t:"S",text:"Costruire un sistema che funzioni anche quando sono in fase bassa",pts:"Sfida: architettura anti-burnout"}
  ]},
  {q:"Di cosa hai più bisogno adesso per fare un salto?",sub:"L'ultima domanda — la più importante.",a:[
    {t:"V",text:"Un metodo per passare dalla visione all'azione senza aspettare la perfezione",pts:"Bisogno: ponte visione-esecuzione"},
    {t:"K",text:"Un sistema che mi aiuti a finire quello che inizio — e costruire su quello che funziona",pts:"Bisogno: completamento strutturato"},
    {t:"C",text:"Imparare a mettere i miei bisogni al centro — costruire qualcosa che sia davvero mio",pts:"Bisogno: centralità di sé"},
    {t:"D",text:"Visibilità e posizionamento — perché il mercato sappia finalmente che esisto",pts:"Bisogno: emersione strategica"},
    {t:"S",text:"Un sistema operativo calibrato sui miei cicli — che funzioni in fase alta e in fase bassa",pts:"Bisogno: sistema ciclico sostenibile"}
  ]},
  {q:"Come prendi di solito le decisioni importanti?",sub:"Pensa all'ultima grande decisione che hai preso.",a:[
    {t:"V",text:"Mappo ogni scenario possibile e scelgo il percorso strategicamente ottimale",pts:"Decisione: mappatura strategica"},
    {t:"K",text:"Seguo il mio istinto — pensarci troppo uccide il momentum",pts:"Decisione: guidata dall'istinto"},
    {t:"C",text:"Consulto prima le persone di fiducia — le loro prospettive plasmano la mia scelta",pts:"Decisione: input collettivo"},
    {t:"D",text:"Ricerco a fondo finché la risposta non diventa innegabile",pts:"Decisione: basata sull'evidenza"},
    {t:"S",text:"Dipende dalla mia fase — nelle alte decido veloce, nelle basse mi blocco",pts:"Decisione: dipendente dalla fase"}
  ]},
  {q:"Come gestisci la tua energia durante la giornata?",sub:"Sii onesto/a sui tuoi pattern reali, non quelli ideali.",a:[
    {t:"S",text:"La mia energia è imprevedibile — cavalco l'onda quando arriva e riposo quando crolla",pts:"Energia: cavalcare l'onda"},
    {t:"V",text:"Pianifico con cura il lavoro più creativo per le ore di picco e raggruppo tutto il resto",pts:"Energia: ottimizzazione strutturata"},
    {t:"K",text:"Inseguo quello che mi eccita — l'energia segue l'interesse, non l'orologio",pts:"Energia: guidata dall'eccitazione"},
    {t:"D",text:"Una volta che sono immerso/a, nulla può rompere il mio focus — ma iniziare è la parte difficile",pts:"Energia: soglia di attivazione"},
    {t:"C",text:"Traggo energia dall'aiutare gli altri — il lavoro in solitaria mi prosciuga più velocemente",pts:"Energia: caricata relazionalmente"}
  ]},
  {q:"Quando devi creare qualcosa di nuovo, com'è il tuo processo?",sub:"Pensa a come le idee diventano realtà per te.",a:[
    {t:"K",text:"Mi tuffo e costruisco man mano — la creazione si rivela facendo",pts:"Creativo: creazione improvvisata"},
    {t:"V",text:"Ho bisogno del quadro completo nella mia mente prima di toccare qualsiasi cosa",pts:"Creativo: pre-visualizzazione"},
    {t:"D",text:"Studio prima come l'hanno fatto gli altri, poi costruisco qualcosa di più profondo",pts:"Creativo: informato dalla ricerca"},
    {t:"C",text:"Co-creo meglio — far rimbalzare le idee con gli altri migliora tutto",pts:"Creativo: sintesi collaborativa"},
    {t:"S",text:"In esplosioni di ispirazione intensa che catturo prima che svaniscano",pts:"Creativo: cattura dell'ispirazione"}
  ]}
];

export const RESULT_DATA_IT: Record<string, ResultType> = {
  V: {
    color: '#C8A84B', cd: 'rgba(200,168,75,.1)', cl: 'rgba(200,168,75,.25)',
    label: 'Tipo 01 · Architetto', name: 'Architetto Visionario',
    tagline: 'Costruisce cattedrali nella mente. Le realizza con il sistema giusto.',
    tags: ['Pensiero sistemico', 'Visione complessa', 'Architettura strategica'],
    intro: `Il tuo cervello è un <strong>processore di sistemi</strong>. Dove gli altri vedono caos, tu vedi architetture. Dove gli altri vedono dettagli, tu vedi connessioni. Questo è il tuo superpotere raro — e anche la fonte del tuo blocco principale.`,
    desc: `Non è che non sai cosa fare. La tua visione è così complessa e completa che nessuna esecuzione le rende giustizia. Aspetti una perfezione che non arriverà mai. Nel frattempo, persone con il 10% della tua visione stanno costruendo cose che tu avevi immaginato anni fa.<br><br>La soluzione non è smettere di essere un architetto. È imparare a costruire <strong>fondamenta prima di cattedrali</strong>. Un sistema operativo calibrato sul tuo tipo ti dà il metodo per tradurre la visione in azione senza tradire la qualità che pretendi.`,
    powers: [{name: 'Architettura sistemica', sub: 'Vedi sistemi completi prima che esistano'}, {name: 'Pensiero strategico', sub: 'Colleghi informazioni che gli altri non correlano mai'}, {name: 'Qualità profonda', sub: 'Il tuo standard è raro nel mercato'}, {name: 'Visione a lungo termine', sub: 'Pensi in anni quando gli altri pensano in settimane'}],
    blinds: [{name: 'Perfezionismo paralizzante', sub: 'La perfezione è nemica del fatto'}, {name: 'Delegare è difficile', sub: 'Nessuno capisce la visione come te — ma questo ti isola'}, {name: 'Prodotti concreti', sub: 'Il gap tra architettura e vendita è il tuo più grande'}, {name: 'Completare vs iniziare', sub: 'Hai iniziato più cose di quante ne hai finite'}],
    scores: [{l: 'Visione', p: 95}, {l: 'Strategia', p: 88}, {l: 'Esecuzione', p: 38}, {l: 'Comunicazione', p: 52}, {l: 'Energia', p: 64}],
    biz: `Il modello più adatto a te è quello che ti posiziona come <strong>consulente strategico o architetto di sistemi</strong>. Il tuo valore è nella direzione, nel design, nella visione. Devi farti pagare per pensare — e automatizzare il fare.`,
    companion: {
      prompts: ['Qual è la prima azione concreta che potresti fare oggi senza aspettare la perfezione?', 'Identifica UN progetto che potresti completare in 48 ore. Solo uno.', 'Cosa succederebbe se lanciassi la versione perfetta all\'80% questa settimana?'],
      mod1: 'Il ciclo Visione → MVP → Iterazione', mod2: 'Come comunicare la complessità in modo semplice',
      week1: 'Diagnosi: dove la tua visione si blocca', week2: 'Il metodo Bridge: dall\'idea al prodotto in 7 giorni', week3: 'Posizionamento e pricing per l\'Architetto', week4: 'Sistema anti-perfezionismo permanente'
    },
    reportItems: ['Come costruire un MVP della tua visione senza tradirla', 'Il tuo modello di pricing da architetto', 'Come comunicare la complessità al mercato in modo semplice', 'I 3 trigger del tuo perfezionismo — e come disattivarli']
  },
  K: {
    color: '#F4C318', cd: 'rgba(244,195,24,.08)', cl: 'rgba(244,195,24,.25)',
    label: 'Tipo 02 · Cacciatore', name: 'Cacciatore di Scintille',
    tagline: 'Il cervello più creativo della stanza. Con il sistema giusto, anche il più produttivo.',
    tags: ['Creatività esplosiva', 'Dopamina e lancio', 'Connessioni laterali'],
    intro: `Il tuo cervello funziona a <strong>scintille di dopamina</strong>. Ogni nuova idea è un'accensione totale. Sei capace di connessioni creative che la maggior parte delle persone non vede mai.`,
    desc: `Non hai un problema di idee. Ne hai più in un giorno di quante ne abbiano molti in un anno. Il problema è che il tuo sistema nervoso è calibrato sugli inizi — non sui finali. L'eccitazione del lancio è la tua droga. Il lavoro di mantenimento è il tuo tormento.<br><br>Probabilmente hai 10+ progetti aperti in questo momento. E un cimitero di idee brillanti che non hanno mai visto il mercato.<br><br>La soluzione non è diventare una persona "disciplinata". È costruire un <strong>sistema che sfrutta le scintille invece di combatterle</strong> — con sprint brevi e meccanismi di completamento automatico.`,
    powers: [{name: 'Ideazione esplosiva', sub: 'Generi idee che gli altri non vedono nemmeno da lontano'}, {name: 'Creatività laterale', sub: 'Colleghi domini che nessuno aveva connesso prima'}, {name: 'Energia di lancio', sub: 'Nella fase iniziale sei inarrestabile e magnetico/a'}, {name: 'Adattabilità rapida', sub: 'Cambi direzione velocemente quando serve'}],
    blinds: [{name: '47 progetti aperti', sub: 'Il cimitero delle buone idee non finite'}, {name: 'Avversione al traguardo', sub: 'L\'80% fatto vale zero senza il 20% finale'}, {name: 'Monetizzazione instabile', sub: 'Pricing casuale, offerte impulsive, nessun sistema'}, {name: 'Dispersione del focus', sub: 'Troppo ampio/a, non abbastanza profondo/a'}],
    scores: [{l: 'Creatività', p: 98}, {l: 'Lancio', p: 92}, {l: 'Completamento', p: 22}, {l: 'Sistema', p: 31}, {l: 'Energia', p: 78}],
    biz: `Il modello per te è <strong>sprint brevi con output concreti</strong>. Prodotti digitali veloci, corsi intensivi, consulenza creativa. Struttura tutto in massimo 30-90 giorni. Il tuo business deve essere anti-noia by design.`,
    companion: {
      prompts: ['Di tutti i progetti aperti, quale — se finito — cambierebbe di più la tua situazione?', 'Qual è il prossimo passo più piccolo possibile per il tuo progetto principale?', 'Cosa stai evitando di finire da più tempo?'],
      mod1: 'Sprint-Ship-Repeat: il metodo per cervelli a scintilla', mod2: 'Come filtrare le 3 idee da finire (e abbandonare il resto)',
      week1: 'Diagnosi: il tuo pattern di non-completamento', week2: 'Sprint da 25 minuti: finire senza annoiarsi', week3: 'Monetizzazione stabile per il Cacciatore', week4: 'Sistema anti-dispersione permanente'
    },
    reportItems: ['Il metodo Sprint-Ship-Repeat per il tuo tipo', 'Come identificare le 3 idee da finire (e abbandonare il resto)', 'Il sistema di pricing anti-impulsivo per il Cacciatore', 'Come costruire un sistema che funziona nelle parti noiose']
  },
  C: {
    color: '#A87CDC', cd: 'rgba(168,124,220,.1)', cl: 'rgba(168,124,220,.28)',
    label: 'Tipo 03 · Catalizzatore', name: 'Connettore Catalizzatore',
    tagline: 'Il cuore dell\'ecosistema. Ora è il momento di costruire il tuo.',
    tags: ['Intelligenza emotiva', 'Costruzione di reti', 'Visione per gli altri'],
    intro: `Il tuo cervello è calibrato sulle <strong>persone</strong>. Percepisci i bisogni degli altri prima che li esprimano. Sei il ponte tra le visioni e le persone che le realizzano.`,
    desc: `Probabilmente hai aiutato molte persone a costruire le loro cose. Sei stato/a prezioso/a per tutti. E nel frattempo, la tua visione ha aspettato in coda.<br><br>Non è solo altruismo — è anche un meccanismo di evitamento. Prendersi cura degli altri è più sicuro che esporsi con un proprio progetto.<br><br>Ma hai raggiunto un punto di svolta. La tua capacità di connettere persone e costruire reti è una <strong>competenza rara e preziosa per il mercato</strong> — se la metti al servizio di qualcosa di tuo.`,
    powers: [{name: 'Intelligenza emotiva', sub: 'Leggi le stanze e le persone con precisione straordinaria'}, {name: 'Costruzione di reti', sub: 'Costruisci relazioni che durano e producono risultati'}, {name: 'Facilitazione', sub: 'Porti le persone a lavorare insieme fluidamente'}, {name: 'Leadership umana', sub: 'Le persone ti seguono perché si sentono comprese'}],
    blinds: [{name: 'Confini porosi', sub: 'Gli altri entrano nel tuo spazio e tu non lo chiudi'}, {name: 'Auto-sacrificio', sub: 'Metti sempre i tuoi bisogni per ultimi'}, {name: 'Il tuo biz vs il loro', sub: 'Costruisci per gli altri meglio che per te'}, {name: 'Monetizzare le connessioni', sub: 'Hai fatto networking gratis per anni — è ora di farti pagare'}],
    scores: [{l: 'Empatia', p: 96}, {l: 'Relazioni', p: 91}, {l: 'Business proprio', p: 41}, {l: 'Confini', p: 35}, {l: 'Visibilità', p: 58}],
    biz: `Il tuo modello ideale è <strong>consulenza di rete, community building o advisory</strong>. Vendi la tua capacità di connettere persone e visioni. Il tuo prodotto è il tuo ecosistema.`,
    companion: {
      prompts: ['Oggi, cosa hai fatto per TE — non per qualcun altro?', 'Identifica una relazione professionale dove stai dando più di quello che ricevi.', 'Qual è il confine più urgente da stabilire questa settimana?'],
      mod1: 'Come costruire un business di connessioni (e farti pagare bene)', mod2: 'Il framework confini-valore per il Catalizzatore',
      week1: 'Diagnosi: dove stai investendo la tua energia relazionale', week2: 'Da facilitatore a protagonista: costruire per te', week3: 'Monetizzare le connessioni — pricing del Catalizzatore', week4: 'Confini sani e business proprio in modo permanente'
    },
    reportItems: ['Come costruire un business di connessioni e farti pagare bene', 'Il framework confini-valore per il Catalizzatore', 'Come passare dal facilitare gli altri a essere protagonista del tuo', 'I 3 pattern di auto-sabotaggio relazionale']
  },
  D: {
    color: '#4DADA0', cd: 'rgba(77,173,160,.1)', cl: 'rgba(77,173,160,.28)',
    label: 'Tipo 04 · Sommozzatore', name: 'Sommozzatore Profondo',
    tagline: 'Expertise a livello master. Il mercato sta solo aspettando di scoprirti.',
    tags: ['Iperfocus', 'Expertise profonda', 'Conoscenza rara'],
    intro: `Il tuo cervello <strong>si immerge</strong>. Quando sei appassionato/a di qualcosa, raggiungi livelli di competenza che la maggior parte non tocca mai. Sei un esperto raro e prezioso.`,
    desc: `Il problema non è quello che sai. Il mercato non lo sa. Sei così impegnato/a a immergerti in profondità che non hai tempo — o voglia — di emergere e renderti visibile.<br><br>C'è qualcosa di più profondo: semplificare la tua conoscenza sembra una traduzione, un impoverimento.<br><br>Ma la verità è: il mercato non paga per la complessità che solo tu capisci. Paga per <strong>trasformazioni che chiunque può comprendere</strong>. Il tuo lavoro non è semplificare l'expertise — è tradurla in risultati comprensibili.`,
    powers: [{name: 'Iperfocus produttivo', sub: 'In 4 ore produci quello che altri fanno in settimane'}, {name: 'Expertise a livello master', sub: 'Conosci il tuo campo a un livello che pochi raggiungono'}, {name: 'Qualità assoluta', sub: 'Il tuo standard è la tua firma'}, {name: 'Soluzioni non ovvie', sub: 'Trovi soluzioni che solo chi conosce in profondità può vedere'}],
    blinds: [{name: 'Invisibilità nel mercato', sub: 'Il tuo talento esiste ma nessuno lo sa'}, {name: 'Comunicazione complessa', sub: 'Parli a livello esperto quando il mercato vuole semplicità'}, {name: 'Pricing del valore raro', sub: 'Probabilmente stai vendendo troppo a poco'}, {name: 'Emergere dall\'immersione', sub: 'La superficie — dove avvengono le vendite — è scomoda'}],
    scores: [{l: 'Expertise', p: 97}, {l: 'Profondità', p: 93}, {l: 'Visibilità', p: 28}, {l: 'Marketing', p: 34}, {l: 'Comunicazione', p: 45}],
    biz: `Il tuo modello ideale è <strong>advisory di alto livello, consulenza specializzata o prodotti di expertise profonda</strong>. Prezzi alti. Pochi clienti. Massima qualità. Smetti di competere sul volume e inizia sulla rarità.`,
    companion: {
      prompts: ['Spiega quello che fai in UNA frase che anche i non-esperti capiscono.', 'Chi ha risolto un problema simile con meno expertise? Cosa puoi imparare da loro?', 'Qual è il risultato più specifico che qualcuno ottiene lavorando con te?'],
      mod1: 'Come posizionarti come esperto raro (non generico)', mod2: 'Il metodo per comunicare l\'expertise profonda in modo semplice',
      week1: 'Diagnosi: il gap tra expertise e visibilità', week2: 'Sintesi della conoscenza — dal profondo al comprensibile', week3: 'Posizionamento e pricing per il Sommozzatore', week4: 'Strategia di emersione permanente'
    },
    reportItems: ['Come posizionarti come esperto raro (non generico)', 'Il metodo per comunicare l\'expertise profonda in modo semplice', 'La strategia di pricing per il Sommozzatore', 'Come diventare visibile senza sentirti un venditore']
  },
  S: {
    color: '#F4A24A', cd: 'rgba(244,162,74,.1)', cl: 'rgba(244,162,74,.28)',
    label: 'Tipo 05 · Costruttore', name: 'Costruttore di Tempeste',
    tagline: 'Energia ciclica. Con il sistema giusto, ogni ciclo è più potente del precedente.',
    tags: ['Energia ad alta ampiezza', 'Ciclicità naturale', 'Resilienza profonda'],
    intro: `Il tuo cervello ha un'<strong>onda ad ampiezza estremamente alta</strong>. Quando sei nella fase attiva, sei inarrestabile. Quando il ciclo scende, tutto si ferma. Questo non è un difetto — è la tua natura.`,
    desc: `Il sistema di produttività tradizionale è costruito per cervelli lineari. Per te è una tortura e una bugia.<br><br>Nella tua fase alta produci 10 volte quello che una persona "normale" produce in un mese. Nella fase bassa hai bisogno di recupero, silenzio, ricostruzione. Questo ciclo è biologico e non negoziabile.<br><br>Il problema non è il ciclo — è che non hai un <strong>sistema progettato per abitarlo</strong>. Business costruito solo nelle fasi alte, comunicazione fermata nelle basse, clienti confusi dalla tua irregolarità. La soluzione non è diventare regolare. È costruire un business che lavora con il tuo ritmo.`,
    powers: [{name: 'Picchi di produttività estrema', sub: 'Nelle fasi alte produci quello che altri non toccano mai'}, {name: 'Resilienza post-crollo', sub: 'Ogni rinascita ti porta più in alto della precedente'}, {name: 'Visione amplificata', sub: 'Nelle fasi alte la chiarezza strategica è totale'}, {name: 'Autenticità radicale', sub: 'La storia del tuo ciclo è il tuo marketing più potente'}],
    blinds: [{name: 'Fatturato ciclico instabile', sub: 'I guadagni dipendono troppo dalla fase in cui ti trovi'}, {name: 'Comunicazione discontinua', sub: 'Sparisci quando sei in basso — i clienti si confondono'}, {name: 'Burnout ricorrente', sub: 'Senza sistemi anti-burnout, il pattern si ripete'}, {name: 'Promesse da fase alta', sub: 'Prometti dalla fase alta, consegni dalla fase bassa'}],
    scores: [{l: 'Output di picco', p: 98}, {l: 'Resilienza', p: 85}, {l: 'Stabilità', p: 31}, {l: 'Sistema', p: 38}, {l: 'Sostenibilità', p: 42}],
    biz: `Il tuo modello ideale è <strong>tutto ciò che è automatizzabile, asincrono e funziona anche quando sei offline</strong>. Prodotti digitali, corsi on-demand, abbonamenti automatizzati. Il tuo business deve girare senza di te durante le fasi basse.`,
    companion: {
      prompts: ['In quale fase del ciclo sei oggi? (Alta / Media / Bassa) — e cosa è appropriato fare OGGI in base a questa fase?', 'Quale sistema o automazione potresti attivare questa settimana che funzioni anche quando tu non puoi?', 'Cosa devi comunicare ai tuoi clienti durante le fasi basse per mantenere la fiducia?'],
      mod1: 'Il framework ciclo-business per il Costruttore', mod2: 'Come costruire automazioni che funzionano nelle fasi basse',
      week1: 'Diagnosi: mappare il tuo ciclo personale', week2: 'Modello di business anti-burnout — struttura ciclica', week3: 'Fatturato automatizzato per le fasi basse', week4: 'Piano di sostenibilità e ciclo permanente'
    },
    reportItems: ['Il framework ciclo-business per il Costruttore', 'Come costruire automazioni per le fasi basse', 'Il piano anti-burnout specifico per il tuo tipo', 'Come comunicare la ciclicità ai clienti (e trasformarla in forza)']
  }
};
