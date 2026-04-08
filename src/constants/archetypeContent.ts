import { Lang } from './translations';

export interface ArchetypeRoadmapStep {
  text: string;
}

export interface ArchetypeProduct {
  title: string;
  desc: string;
  emoji: string;
}

type ArchetypeContentMap = Record<Lang, Record<number, {
  roadmap: string[];
  products: ArchetypeProduct[];
}>>;

export const archetypeContent: ArchetypeContentMap = {
  en: {
    1: {
      roadmap: [
        'Install the Daily CEO Briefing prompt — run it every morning before anything else',
        'Pick ONE product from your existing ideas. Just one. Build it this week.',
        'Use the Insight Extractor to process everything you\'ve been saving for later',
        'Set up one automation that handles a task you do manually every day',
      ],
      products: [
        { title: 'Daily CEO Briefing', desc: 'Your morning AI prompt that organizes chaos into clarity', emoji: '📋' },
        { title: 'Insight Extractor', desc: 'Turn saved links, notes & bookmarks into actionable insights', emoji: '🔍' },
        { title: 'Automation Starter Kit', desc: 'One-click templates for your first business automation', emoji: '⚡' },
      ],
    },
    2: {
      roadmap: [
        'Run the Offer Validator prompt on your most-asked-about topic right now',
        'Build one entry product from what you already know — this week',
        'Use the Product Architect prompt to structure your expertise into something sellable',
        'Start posting your knowledge publicly — 3x per week minimum',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Test if your expertise can sell — before you build anything', emoji: '✅' },
        { title: 'Product Architect', desc: 'Structure your knowledge into a sellable digital product', emoji: '🏗️' },
        { title: 'Content Authority Pack', desc: 'Templates to position yourself as the go-to expert', emoji: '👑' },
      ],
    },
    3: {
      roadmap: [
        'Stop all new builds. Audit what you have. Pick one thing that is 80% done.',
        'Run the Offer Validator on it — find out if anyone will pay before you finish it',
        'Use the Weekly Strategy Review every Sunday — stop starting, start finishing',
        'Set a ship date. Tell someone. Ship it.',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Find out if anyone will pay for what you\'re building', emoji: '✅' },
        { title: 'Weekly Strategy Review', desc: 'Sunday ritual to stop starting and start finishing', emoji: '📅' },
        { title: 'Ship Date Accountability', desc: 'Set a deadline, announce it, and ship it', emoji: '🚀' },
      ],
    },
    4: {
      roadmap: [
        'Map your current funnel — where do people enter, where do they drop off',
        'Identify the ONE manual task that costs you the most time — automate it first',
        'Use the System Builder prompt to design your first real automation',
        'Set up your email sequence — even 3 emails is infinitely better than zero',
      ],
      products: [
        { title: 'System Builder', desc: 'Design your first real automation from scratch', emoji: '🔧' },
        { title: 'Funnel Mapper', desc: 'Visualize where people enter and where they drop off', emoji: '🗺️' },
        { title: 'Email Sequence Starter', desc: '3 emails that convert — written and ready to send', emoji: '📧' },
      ],
    },
    5: {
      roadmap: [
        'Write your origin story — 200 words. Why you, why now, why this.',
        'Post it. Somewhere. Anywhere. Today.',
        'Use the Content Engine prompt to build 30 days of content from your story',
        'Pick your one platform and commit to it for 90 days before adding another',
      ],
      products: [
        { title: 'Content Engine', desc: 'Build 30 days of content from your origin story', emoji: '🎯' },
        { title: 'Origin Story Framework', desc: 'Why you, why now, why this — in 200 words', emoji: '📖' },
        { title: 'Platform Commitment Pack', desc: '90-day playbook for one platform dominance', emoji: '🏆' },
      ],
    },
  },
  fr: {
    1: {
      roadmap: [
        'Installe le prompt Daily CEO Briefing — lance-le chaque matin avant tout le reste',
        'Choisis UN SEUL produit parmi tes idées existantes. Un seul. Construis-le cette semaine.',
        'Utilise l\'Insight Extractor pour traiter tout ce que tu as mis de côté « pour plus tard »',
        'Mets en place une automatisation pour une tâche que tu fais manuellement chaque jour',
      ],
      products: [
        { title: 'Daily CEO Briefing', desc: 'Ton prompt matinal qui transforme le chaos en clarté', emoji: '📋' },
        { title: 'Insight Extractor', desc: 'Transforme tes liens, notes et favoris en insights actionnables', emoji: '🔍' },
        { title: 'Automation Starter Kit', desc: 'Templates prêts à l\'emploi pour ta première automatisation', emoji: '⚡' },
      ],
    },
    2: {
      roadmap: [
        'Lance le prompt Offer Validator sur le sujet pour lequel on te demande le plus conseil',
        'Crée un produit d\'entrée à partir de ce que tu sais déjà — cette semaine',
        'Utilise le prompt Product Architect pour structurer ton expertise en produit vendable',
        'Commence à publier ton savoir — 3x par semaine minimum',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Teste si ton expertise peut se vendre — avant de construire quoi que ce soit', emoji: '✅' },
        { title: 'Product Architect', desc: 'Structure ton savoir en produit digital vendable', emoji: '🏗️' },
        { title: 'Content Authority Pack', desc: 'Templates pour te positionner comme l\'experte de référence', emoji: '👑' },
      ],
    },
    3: {
      roadmap: [
        'Arrête tous les nouveaux projets. Fais l\'inventaire. Choisis celui qui est à 80%.',
        'Lance l\'Offer Validator dessus — vérifie si quelqu\'un paiera avant de finir',
        'Utilise la Weekly Strategy Review chaque dimanche — arrête de commencer, commence à finir',
        'Fixe une date de livraison. Dis-le à quelqu\'un. Livre.',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Vérifie si quelqu\'un va payer pour ce que tu construis', emoji: '✅' },
        { title: 'Weekly Strategy Review', desc: 'Rituel du dimanche pour finir ce que tu commences', emoji: '📅' },
        { title: 'Ship Date Accountability', desc: 'Fixe une deadline, annonce-la, et livre', emoji: '🚀' },
      ],
    },
    4: {
      roadmap: [
        'Cartographie ton funnel actuel — par où les gens entrent, où ils décrochent',
        'Identifie LA tâche manuelle qui te coûte le plus de temps — automatise-la en premier',
        'Utilise le prompt System Builder pour concevoir ta première vraie automatisation',
        'Mets en place ta séquence email — même 3 emails c\'est infiniment mieux que zéro',
      ],
      products: [
        { title: 'System Builder', desc: 'Conçois ta première vraie automatisation de zéro', emoji: '🔧' },
        { title: 'Funnel Mapper', desc: 'Visualise par où les gens entrent et où ils décrochent', emoji: '🗺️' },
        { title: 'Email Sequence Starter', desc: '3 emails qui convertissent — écrits et prêts à envoyer', emoji: '📧' },
      ],
    },
    5: {
      roadmap: [
        'Écris ton histoire — 200 mots. Pourquoi toi, pourquoi maintenant, pourquoi ça.',
        'Publie-la. Quelque part. N\'importe où. Aujourd\'hui.',
        'Utilise le prompt Content Engine pour créer 30 jours de contenu à partir de ton histoire',
        'Choisis une plateforme et engage-toi dessus pendant 90 jours avant d\'en ajouter une autre',
      ],
      products: [
        { title: 'Content Engine', desc: 'Crée 30 jours de contenu à partir de ton histoire', emoji: '🎯' },
        { title: 'Origin Story Framework', desc: 'Pourquoi toi, pourquoi maintenant, pourquoi ça — en 200 mots', emoji: '📖' },
        { title: 'Platform Commitment Pack', desc: 'Playbook de 90 jours pour dominer une seule plateforme', emoji: '🏆' },
      ],
    },
  },
  pt: {
    1: {
      roadmap: [
        'Instala o prompt Daily CEO Briefing — roda ele toda manhã antes de qualquer coisa',
        'Escolhe UM produto das tuas ideias existentes. Só um. Constrói ele essa semana.',
        'Usa o Insight Extractor pra processar tudo que tu salvou "pra depois"',
        'Configura uma automação pra uma tarefa que tu faz manualmente todo dia',
      ],
      products: [
        { title: 'Daily CEO Briefing', desc: 'Teu prompt matinal que transforma o caos em clareza', emoji: '📋' },
        { title: 'Insight Extractor', desc: 'Transforma links, notas e favoritos em insights acionáveis', emoji: '🔍' },
        { title: 'Automation Starter Kit', desc: 'Templates prontos pra tua primeira automação de negócio', emoji: '⚡' },
      ],
    },
    2: {
      roadmap: [
        'Roda o prompt Offer Validator no assunto que mais te pedem conselho',
        'Cria um produto de entrada com o que tu já sabe — essa semana',
        'Usa o prompt Product Architect pra estruturar tua expertise em algo vendável',
        'Começa a publicar teu conhecimento — 3x por semana no mínimo',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Testa se tua expertise vende — antes de construir qualquer coisa', emoji: '✅' },
        { title: 'Product Architect', desc: 'Estrutura teu conhecimento em um produto digital vendável', emoji: '🏗️' },
        { title: 'Content Authority Pack', desc: 'Templates pra te posicionar como a referência do teu nicho', emoji: '👑' },
      ],
    },
    3: {
      roadmap: [
        'Para tudo. Faz um inventário. Escolhe uma coisa que tá 80% pronta.',
        'Roda o Offer Validator nela — descobre se alguém vai pagar antes de terminar',
        'Usa a Weekly Strategy Review todo domingo — para de começar, começa a terminar',
        'Define uma data de entrega. Conta pra alguém. Entrega.',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Descobre se alguém vai pagar pelo que tu tá construindo', emoji: '✅' },
        { title: 'Weekly Strategy Review', desc: 'Ritual de domingo pra parar de começar e começar a terminar', emoji: '📅' },
        { title: 'Ship Date Accountability', desc: 'Define um prazo, anuncia e entrega', emoji: '🚀' },
      ],
    },
    4: {
      roadmap: [
        'Mapeia teu funil atual — por onde as pessoas entram, onde elas desistem',
        'Identifica A tarefa manual que te custa mais tempo — automatiza ela primeiro',
        'Usa o prompt System Builder pra desenhar tua primeira automação real',
        'Monta tua sequência de emails — até 3 emails é infinitamente melhor que zero',
      ],
      products: [
        { title: 'System Builder', desc: 'Desenha tua primeira automação real do zero', emoji: '🔧' },
        { title: 'Funnel Mapper', desc: 'Visualiza por onde as pessoas entram e onde desistem', emoji: '🗺️' },
        { title: 'Email Sequence Starter', desc: '3 emails que convertem — escritos e prontos pra mandar', emoji: '📧' },
      ],
    },
    5: {
      roadmap: [
        'Escreve tua história de origem — 200 palavras. Por que tu, por que agora, por que isso.',
        'Publica. Em algum lugar. Qualquer lugar. Hoje.',
        'Usa o prompt Content Engine pra criar 30 dias de conteúdo a partir da tua história',
        'Escolhe uma plataforma e se compromete com ela por 90 dias antes de adicionar outra',
      ],
      products: [
        { title: 'Content Engine', desc: 'Cria 30 dias de conteúdo a partir da tua história de origem', emoji: '🎯' },
        { title: 'Origin Story Framework', desc: 'Por que tu, por que agora, por que isso — em 200 palavras', emoji: '📖' },
        { title: 'Platform Commitment Pack', desc: 'Playbook de 90 dias pra dominar uma plataforma', emoji: '🏆' },
      ],
    },
  },
  it: {
    1: {
      roadmap: [
        'Installa il prompt Daily CEO Briefing — usalo ogni mattina prima di tutto il resto',
        'Scegli UN prodotto dalle tue idee esistenti. Uno solo. Costruiscilo questa settimana.',
        'Usa l\'Insight Extractor per elaborare tutto quello che hai messo da parte "per dopo"',
        'Configura un\'automazione per un compito che fai manualmente ogni giorno',
      ],
      products: [
        { title: 'Daily CEO Briefing', desc: 'Il tuo prompt mattutino che trasforma il caos in chiarezza', emoji: '📋' },
        { title: 'Insight Extractor', desc: 'Trasforma link, appunti e preferiti in insight azionabili', emoji: '🔍' },
        { title: 'Automation Starter Kit', desc: 'Template pronti per la tua prima automazione aziendale', emoji: '⚡' },
      ],
    },
    2: {
      roadmap: [
        'Lancia il prompt Offer Validator sull\'argomento per cui ti chiedono più consiglio',
        'Crea un prodotto d\'ingresso con quello che già sai — questa settimana',
        'Usa il prompt Product Architect per strutturare la tua competenza in qualcosa di vendibile',
        'Inizia a pubblicare le tue conoscenze — 3 volte a settimana come minimo',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Verifica se la tua competenza può vendere — prima di costruire qualsiasi cosa', emoji: '✅' },
        { title: 'Product Architect', desc: 'Struttura le tue conoscenze in un prodotto digitale vendibile', emoji: '🏗️' },
        { title: 'Content Authority Pack', desc: 'Template per posizionarti come l\'esperta di riferimento', emoji: '👑' },
      ],
    },
    3: {
      roadmap: [
        'Ferma tutto. Fai l\'inventario. Scegli una cosa che è all\'80%.',
        'Lancia l\'Offer Validator — scopri se qualcuno pagherà prima di finirlo',
        'Usa la Weekly Strategy Review ogni domenica — smetti di iniziare, inizia a finire',
        'Fissa una data di consegna. Dillo a qualcuno. Consegna.',
      ],
      products: [
        { title: 'Offer Validator', desc: 'Scopri se qualcuno pagherà per quello che stai costruendo', emoji: '✅' },
        { title: 'Weekly Strategy Review', desc: 'Rituale della domenica per smettere di iniziare e iniziare a finire', emoji: '📅' },
        { title: 'Ship Date Accountability', desc: 'Fissa una scadenza, annunciala e consegna', emoji: '🚀' },
      ],
    },
    4: {
      roadmap: [
        'Mappa il tuo funnel attuale — da dove entrano le persone, dove abbandonano',
        'Identifica IL compito manuale che ti costa più tempo — automatizzalo per primo',
        'Usa il prompt System Builder per progettare la tua prima vera automazione',
        'Imposta la tua sequenza email — anche solo 3 email è infinitamente meglio di zero',
      ],
      products: [
        { title: 'System Builder', desc: 'Progetta la tua prima vera automazione da zero', emoji: '🔧' },
        { title: 'Funnel Mapper', desc: 'Visualizza da dove entrano le persone e dove abbandonano', emoji: '🗺️' },
        { title: 'Email Sequence Starter', desc: '3 email che convertono — scritte e pronte da inviare', emoji: '📧' },
      ],
    },
    5: {
      roadmap: [
        'Scrivi la tua storia — 200 parole. Perché tu, perché ora, perché questo.',
        'Pubblicala. Da qualche parte. Ovunque. Oggi.',
        'Usa il prompt Content Engine per creare 30 giorni di contenuto dalla tua storia',
        'Scegli una piattaforma e impegnati per 90 giorni prima di aggiungerne un\'altra',
      ],
      products: [
        { title: 'Content Engine', desc: 'Crea 30 giorni di contenuto dalla tua storia di origine', emoji: '🎯' },
        { title: 'Origin Story Framework', desc: 'Perché tu, perché ora, perché questo — in 200 parole', emoji: '📖' },
        { title: 'Platform Commitment Pack', desc: 'Playbook di 90 giorni per dominare una piattaforma', emoji: '🏆' },
      ],
    },
  },
};
