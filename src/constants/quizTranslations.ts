import type { Lang } from './translations';

interface QuizQuestion {
  question: string;
  options: { text: string; archetype: number }[];
}

interface QuizResultStrings {
  questionOf: string; // "Question {0} of {1}"
  youAre: string;
  saving: string;
  goToDashboard: string;
  helpSpark: string;
}

type QuizTranslationSet = {
  questions: QuizQuestion[];
  ui: QuizResultStrings;
  archetypeNames: Record<number, { name: string; tagline: string }>;
};

export const quizTranslations: Record<Lang, QuizTranslationSet> = {
  en: {
    ui: {
      questionOf: 'Question {0} of {1}',
      youAre: 'You are...',
      saving: 'Saving...',
      goToDashboard: 'Go to Your Dashboard →',
      helpSpark: 'Help SPARK know you better →',
    },
    archetypeNames: {
      1: { name: 'The Chaotic Creator', tagline: 'You have everything. Except a system.' },
      2: { name: 'The Invisible Expert', tagline: 'You know more than you charge for.' },
      3: { name: 'The Scattered Builder', tagline: "You're building everything. Finishing nothing." },
      4: { name: 'The Monetization-Ready Founder', tagline: "You're closer than you think." },
      5: { name: 'The Dormant Powerhouse', tagline: "You've been building in silence. Time to surface." },
    },
    questions: [
      {
        question: 'How many unfinished projects do you have right now?',
        options: [
          { text: 'Too many to count — ideas everywhere', archetype: 1 },
          { text: 'A few, but none are public yet', archetype: 5 },
          { text: 'Several half-built things', archetype: 3 },
          { text: 'One main thing, almost ready', archetype: 4 },
          { text: 'I have expertise but no product yet', archetype: 2 },
        ],
      },
      {
        question: "What's your biggest challenge right now?",
        options: [
          { text: "I can't focus on one thing", archetype: 1 },
          { text: "People don't know I exist", archetype: 5 },
          { text: 'I start but never finish', archetype: 3 },
          { text: "I'm close but stuck on the last mile", archetype: 4 },
          { text: "I know my stuff but can't monetize it", archetype: 2 },
        ],
      },
      {
        question: 'How would a friend describe your work style?',
        options: [
          { text: 'Creative chaos — genius but scattered', archetype: 1 },
          { text: 'The quiet expert everyone goes to for advice', archetype: 2 },
          { text: 'Always building something new', archetype: 3 },
          { text: 'Focused and almost there', archetype: 4 },
          { text: "Underrated — they're sitting on gold", archetype: 5 },
        ],
      },
      {
        question: 'What would help you most right now?',
        options: [
          { text: 'A system to organize my ideas', archetype: 1 },
          { text: 'A way to package what I know', archetype: 2 },
          { text: 'Accountability to finish one thing', archetype: 3 },
          { text: 'Automations to save time', archetype: 4 },
          { text: 'Confidence to put myself out there', archetype: 5 },
        ],
      },
      {
        question: 'When you imagine success, what does it look like?',
        options: [
          { text: 'All my ideas working together in a system', archetype: 1 },
          { text: "Getting paid what I'm actually worth", archetype: 2 },
          { text: 'One polished product that sells itself', archetype: 3 },
          { text: 'A lean business that runs without me', archetype: 4 },
          { text: 'Being recognized as a leader in my space', archetype: 5 },
        ],
      },
    ],
  },
  fr: {
    ui: {
      questionOf: 'Question {0} sur {1}',
      youAre: 'Vous êtes...',
      saving: 'Enregistrement...',
      goToDashboard: 'Accéder à votre Dashboard →',
      helpSpark: 'Aidez SPARK à mieux vous connaître →',
    },
    archetypeNames: {
      1: { name: 'Le Créateur Chaotique', tagline: 'Vous avez tout. Sauf un système.' },
      2: { name: "L'Expert Invisible", tagline: 'Vous en savez plus que ce que vous facturez.' },
      3: { name: 'Le Bâtisseur Dispersé', tagline: 'Vous construisez tout. Sans rien finir.' },
      4: { name: 'Le Fondateur Prêt à Monétiser', tagline: 'Vous êtes plus proche que vous ne le pensez.' },
      5: { name: 'La Force Dormante', tagline: 'Vous construisez en silence. Il est temps d\'émerger.' },
    },
    questions: [
      {
        question: 'Combien de projets inachevés avez-vous en ce moment ?',
        options: [
          { text: 'Trop pour compter — des idées partout', archetype: 1 },
          { text: 'Quelques-uns, mais aucun n\'est public', archetype: 5 },
          { text: 'Plusieurs choses à moitié construites', archetype: 3 },
          { text: 'Un projet principal, presque prêt', archetype: 4 },
          { text: 'J\'ai l\'expertise mais pas encore de produit', archetype: 2 },
        ],
      },
      {
        question: 'Quel est votre plus grand défi en ce moment ?',
        options: [
          { text: 'Je n\'arrive pas à me concentrer sur une seule chose', archetype: 1 },
          { text: 'Les gens ne savent pas que j\'existe', archetype: 5 },
          { text: 'Je commence mais je ne finis jamais', archetype: 3 },
          { text: 'Je suis proche mais bloqué sur la dernière ligne droite', archetype: 4 },
          { text: 'Je connais mon domaine mais je n\'arrive pas à le monétiser', archetype: 2 },
        ],
      },
      {
        question: 'Comment un ami décrirait-il votre style de travail ?',
        options: [
          { text: 'Chaos créatif — génial mais dispersé', archetype: 1 },
          { text: 'L\'expert discret vers qui tout le monde se tourne', archetype: 2 },
          { text: 'Toujours en train de construire quelque chose de nouveau', archetype: 3 },
          { text: 'Concentré et presque arrivé', archetype: 4 },
          { text: 'Sous-estimé — assis sur une mine d\'or', archetype: 5 },
        ],
      },
      {
        question: 'Qu\'est-ce qui vous aiderait le plus en ce moment ?',
        options: [
          { text: 'Un système pour organiser mes idées', archetype: 1 },
          { text: 'Un moyen de packager ce que je sais', archetype: 2 },
          { text: 'De la responsabilité pour finir une chose', archetype: 3 },
          { text: 'Des automatisations pour gagner du temps', archetype: 4 },
          { text: 'La confiance pour me montrer', archetype: 5 },
        ],
      },
      {
        question: 'Quand vous imaginez le succès, à quoi ressemble-t-il ?',
        options: [
          { text: 'Toutes mes idées fonctionnant ensemble dans un système', archetype: 1 },
          { text: 'Être payé à ma vraie valeur', archetype: 2 },
          { text: 'Un produit abouti qui se vend tout seul', archetype: 3 },
          { text: 'Un business léger qui tourne sans moi', archetype: 4 },
          { text: 'Être reconnu comme leader dans mon domaine', archetype: 5 },
        ],
      },
    ],
  },
  pt: {
    ui: {
      questionOf: 'Pergunta {0} de {1}',
      youAre: 'Você é...',
      saving: 'Salvando...',
      goToDashboard: 'Ir para o seu Dashboard →',
      helpSpark: 'Ajude o SPARK a te conhecer melhor →',
    },
    archetypeNames: {
      1: { name: 'O Criador Caótico', tagline: 'Você tem tudo. Menos um sistema.' },
      2: { name: 'O Especialista Invisível', tagline: 'Você sabe mais do que cobra.' },
      3: { name: 'O Construtor Disperso', tagline: 'Você constrói tudo. Não termina nada.' },
      4: { name: 'O Fundador Pronto pra Monetizar', tagline: 'Você tá mais perto do que imagina.' },
      5: { name: 'A Potência Adormecida', tagline: 'Você vem construindo em silêncio. Hora de aparecer.' },
    },
    questions: [
      {
        question: 'Quantos projetos inacabados você tem agora?',
        options: [
          { text: 'Muitos pra contar — ideias por todo lado', archetype: 1 },
          { text: 'Alguns, mas nenhum é público ainda', archetype: 5 },
          { text: 'Várias coisas pela metade', archetype: 3 },
          { text: 'Um principal, quase pronto', archetype: 4 },
          { text: 'Tenho expertise mas nenhum produto ainda', archetype: 2 },
        ],
      },
      {
        question: 'Qual é o seu maior desafio agora?',
        options: [
          { text: 'Não consigo focar em uma coisa só', archetype: 1 },
          { text: 'As pessoas não sabem que eu existo', archetype: 5 },
          { text: 'Eu começo mas nunca termino', archetype: 3 },
          { text: 'Tô perto mas travado na reta final', archetype: 4 },
          { text: 'Sei meu assunto mas não consigo monetizar', archetype: 2 },
        ],
      },
      {
        question: 'Como um amigo descreveria seu jeito de trabalhar?',
        options: [
          { text: 'Caos criativo — genial mas disperso', archetype: 1 },
          { text: 'O expert quieto que todo mundo procura pra conselho', archetype: 2 },
          { text: 'Sempre construindo algo novo', archetype: 3 },
          { text: 'Focado e quase lá', archetype: 4 },
          { text: 'Subestimado — sentado numa mina de ouro', archetype: 5 },
        ],
      },
      {
        question: 'O que mais te ajudaria agora?',
        options: [
          { text: 'Um sistema pra organizar minhas ideias', archetype: 1 },
          { text: 'Um jeito de empacotar o que eu sei', archetype: 2 },
          { text: 'Responsabilidade pra terminar uma coisa', archetype: 3 },
          { text: 'Automações pra economizar tempo', archetype: 4 },
          { text: 'Confiança pra me colocar lá fora', archetype: 5 },
        ],
      },
      {
        question: 'Quando você imagina sucesso, como é?',
        options: [
          { text: 'Todas as minhas ideias funcionando juntas num sistema', archetype: 1 },
          { text: 'Ser pago pelo que realmente valho', archetype: 2 },
          { text: 'Um produto polido que se vende sozinho', archetype: 3 },
          { text: 'Um negócio enxuto que roda sem mim', archetype: 4 },
          { text: 'Ser reconhecido como líder no meu espaço', archetype: 5 },
        ],
      },
    ],
  },
  it: {
    ui: {
      questionOf: 'Domanda {0} di {1}',
      youAre: 'Tu sei...',
      saving: 'Salvataggio...',
      goToDashboard: 'Vai alla tua Dashboard →',
      helpSpark: 'Aiuta SPARK a conoscerti meglio →',
    },
    archetypeNames: {
      1: { name: 'Il Creatore Caotico', tagline: 'Hai tutto. Tranne un sistema.' },
      2: { name: "L'Esperto Invisibile", tagline: 'Sai più di quanto fai pagare.' },
      3: { name: 'Il Costruttore Disperso', tagline: 'Stai costruendo tutto. Senza finire nulla.' },
      4: { name: 'Il Fondatore Pronto a Monetizzare', tagline: 'Sei più vicino di quanto pensi.' },
      5: { name: 'La Potenza Dormiente', tagline: 'Hai costruito in silenzio. È ora di emergere.' },
    },
    questions: [
      {
        question: 'Quanti progetti incompiuti hai in questo momento?',
        options: [
          { text: 'Troppi per contarli — idee ovunque', archetype: 1 },
          { text: 'Alcuni, ma nessuno è ancora pubblico', archetype: 5 },
          { text: 'Diverse cose a metà', archetype: 3 },
          { text: 'Uno principale, quasi pronto', archetype: 4 },
          { text: 'Ho competenze ma nessun prodotto ancora', archetype: 2 },
        ],
      },
      {
        question: 'Qual è la tua sfida più grande in questo momento?',
        options: [
          { text: 'Non riesco a concentrarmi su una cosa sola', archetype: 1 },
          { text: 'Le persone non sanno che esisto', archetype: 5 },
          { text: 'Inizio ma non finisco mai', archetype: 3 },
          { text: 'Sono vicino ma bloccato nell\'ultimo miglio', archetype: 4 },
          { text: 'Conosco la mia materia ma non riesco a monetizzarla', archetype: 2 },
        ],
      },
      {
        question: 'Come descriverebbe un amico il tuo stile di lavoro?',
        options: [
          { text: 'Caos creativo — geniale ma disperso', archetype: 1 },
          { text: 'L\'esperto discreto a cui tutti chiedono consiglio', archetype: 2 },
          { text: 'Sempre a costruire qualcosa di nuovo', archetype: 3 },
          { text: 'Concentrato e quasi arrivato', archetype: 4 },
          { text: 'Sottovalutato — seduto su una miniera d\'oro', archetype: 5 },
        ],
      },
      {
        question: 'Cosa ti aiuterebbe di più adesso?',
        options: [
          { text: 'Un sistema per organizzare le mie idee', archetype: 1 },
          { text: 'Un modo per impacchettare ciò che so', archetype: 2 },
          { text: 'Responsabilità per finire una cosa', archetype: 3 },
          { text: 'Automazioni per risparmiare tempo', archetype: 4 },
          { text: 'Fiducia per mettermi in gioco', archetype: 5 },
        ],
      },
      {
        question: 'Quando immagini il successo, che aspetto ha?',
        options: [
          { text: 'Tutte le mie idee che funzionano insieme in un sistema', archetype: 1 },
          { text: 'Essere pagato per il mio vero valore', archetype: 2 },
          { text: 'Un prodotto rifinito che si vende da solo', archetype: 3 },
          { text: 'Un business snello che gira senza di me', archetype: 4 },
          { text: 'Essere riconosciuto come leader nel mio settore', archetype: 5 },
        ],
      },
    ],
  },
};
