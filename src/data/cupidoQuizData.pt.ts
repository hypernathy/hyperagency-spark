// ⚠️ MIRROR — source canonique = repo hyperyou-systems (CONNEXA-HQ D-014a). Ne pas éditer le contenu quiz ici ; synchroniser depuis hyperyou-systems. Voir ./README.md
import type { CupidoQuestion, CupidoResultType } from './cupidoQuizData';

export const CUPIDO_QUESTIONS_PT: CupidoQuestion[] = [
  {q:"Quando você conhece alguém que te atrai, qual é sua primeira reação?",sub:"Pense em como você realmente se sente — não como gostaria de sentir.",a:[
    {t:"P",text:"Sinto uma conexão profunda e me abro rapidamente — quase demais",pts:"Atração: abertura imediata"},
    {t:"I",text:"Fico fascinado/a mas mantenho distância — primeiro observo, depois decido",pts:"Atração: observação estratégica"},
    {t:"F",text:"A atração cresce quando sinto que posso cuidar da outra pessoa",pts:"Atração: cuidado como conexão"},
    {t:"L",text:"Sou atraído/a por pessoas que estimulam minha mente — a conversa é o verdadeiro preliminar",pts:"Atração: intelecto como intimidade"},
    {t:"S",text:"Me acendo intensamente mas temo que vai acabar — vivo tudo com urgência",pts:"Atração: intensidade e medo"}
  ]},
  {q:"Como você vive a intimidade emocional nos relacionamentos?",sub:"Não existe resposta certa — só a sua verdade.",a:[
    {t:"P",text:"Intimidade emocional é o que mais busco — quero ser visto/a de verdade",pts:"Intimidade: necessidade de ser visto"},
    {t:"I",text:"Gosto de intimidade, mas às vezes preciso me recolher no meu espaço",pts:"Intimidade: oscilação proximidade-distância"},
    {t:"F",text:"Crio através de ações tangíveis — cozinhar, organizar, resolver problemas",pts:"Intimidade: atos de serviço"},
    {t:"L",text:"Construo lentamente, através de conversas profundas e compartilhamento intelectual",pts:"Intimidade: construção lenta e reflexiva"},
    {t:"S",text:"Vivo intensamente quando está ali, mas temo que possa desaparecer de repente",pts:"Intimidade: intensidade ansiosa"}
  ]},
  {q:"O que acontece quando sente seu/sua parceiro/a se afastando?",sub:"Mesmo que nunca tenha admitido em voz alta.",a:[
    {t:"S",text:"Pânico. Busco reasseguramento, mando mensagens, preciso saber que ainda está ali",pts:"Distância: ativação ansiosa"},
    {t:"I",text:"Me afasto também. Se não quer ficar perto, encontro meu espaço",pts:"Distância: recuo protetor"},
    {t:"P",text:"Tento entender o que fiz de errado — e me abro mais para reconectar",pts:"Distância: vulnerabilidade como ponte"},
    {t:"F",text:"Intensifico o cuidado — faço mais, ofereço mais, dou mais",pts:"Distância: cuidado como compensação"},
    {t:"L",text:"Analiso a situação racionalmente — tento entender o padrão antes de reagir",pts:"Distância: análise antes da emoção"}
  ]},
  {q:"Qual é sua maior necessidade em um relacionamento?",sub:"A necessidade sobre a qual você não negocia.",a:[
    {t:"P",text:"Autenticidade — quero ser completamente eu mesmo/a sem máscaras",pts:"Necessidade: autenticidade radical"},
    {t:"I",text:"Liberdade — amar sem me perder é inegociável",pts:"Necessidade: autonomia no amor"},
    {t:"F",text:"Segurança — saber que somos uma equipe, aconteça o que acontecer",pts:"Necessidade: estabilidade e parceria"},
    {t:"L",text:"Estimulação — uma mente que me desafie e me faça crescer",pts:"Necessidade: crescimento intelectual compartilhado"},
    {t:"S",text:"Presença — sentir que a outra pessoa realmente está ali, não só fisicamente",pts:"Necessidade: reasseguramento constante"}
  ]},
  {q:"Como você expressa amor no dia a dia?",sub:"Não o que diz — o que faz.",a:[
    {t:"F",text:"Através de ações concretas — organizo, cozinho, cuido das coisas práticas",pts:"Linguagem: serviço e dedicação"},
    {t:"P",text:"Com palavras profundas e vulnerabilidade — digo o que sinto, mesmo quando assusta",pts:"Linguagem: palavras e verdade"},
    {t:"S",text:"Com intensidade — quando amo, amo com tudo. Mensagens, atenção, presença total",pts:"Linguagem: devoção total"},
    {t:"L",text:"Compartilhando ideias, livros, conversas — meu amor flui pela mente",pts:"Linguagem: conexão mental"},
    {t:"I",text:"Dando espaço — respeito o tempo do/a outro/a e peço o mesmo para mim",pts:"Linguagem: liberdade como presente"}
  ]},
  {q:"Qual é seu padrão em relacionamentos passados?",sub:"O padrão que se repete, mesmo quando você o vê chegando.",a:[
    {t:"S",text:"Me apaixono intensamente, depois o medo do abandono sabota tudo",pts:"Padrão: paixão-sabotagem"},
    {t:"I",text:"Me aproximo depois me afasto — quando fica íntimo demais, preciso de ar",pts:"Padrão: aproximação-afastamento"},
    {t:"F",text:"Dou tudo até não ter mais nada — depois fico com raiva porque não recebo",pts:"Padrão: dar-esgotar-ressentir"},
    {t:"P",text:"Me abro cedo demais e depois me sinto ferido/a pela vulnerabilidade não retribuída",pts:"Padrão: abertura-ferida"},
    {t:"L",text:"Analiso o relacionamento até ele virar um objeto de estudo em vez de uma experiência",pts:"Padrão: intelectualização emocional"}
  ]},
  {q:"Durante uma discussão com seu/sua parceiro/a, o que você faz?",sub:"Seja honesto/a consigo mesmo/a.",a:[
    {t:"L",text:"Tento racionalizar — apresento argumentos lógicos e busco soluções",pts:"Conflito: racionalização"},
    {t:"P",text:"Fico vulnerável — expresso como realmente me sinto, mesmo que doa",pts:"Conflito: vulnerabilidade como arma"},
    {t:"S",text:"Fico agitado/a — temo que a discussão signifique o fim de tudo",pts:"Conflito: catastrofização"},
    {t:"I",text:"Preciso de espaço — me fecho até conseguir pensar claramente",pts:"Conflito: fechamento protetor"},
    {t:"F",text:"Tento resolver concretamente — 'o que fazemos para consertar isso?'",pts:"Conflito: resolução prática"}
  ]},
  {q:"O que as pessoas que você amou te dizem?",sub:"O feedback que ouviu mais de uma vez.",a:[
    {t:"P",text:"'Você é intenso/a demais — às vezes me sinto sobrecarregado/a pela sua profundidade'",pts:"Feedback: profundidade demais"},
    {t:"I",text:"'Você é inalcançável — nunca sei o que realmente sente'",pts:"Feedback: muro emocional"},
    {t:"F",text:"'Você faz demais por mim — nunca pedi tudo isso'",pts:"Feedback: cuidado excessivo"},
    {t:"L",text:"'Queria que sentisse mais e pensasse menos — sinto sua falta emocionalmente'",pts:"Feedback: distância emocional"},
    {t:"S",text:"'Preciso de espaço — sua necessidade de reasseguramento me sufoca'",pts:"Feedback: pressão relacional"}
  ]},
  {q:"Qual é seu maior medo no amor?",sub:"Aquele que nunca diz em voz alta.",a:[
    {t:"S",text:"Ser abandonado/a — que a outra pessoa vá embora sem aviso",pts:"Medo: abandono"},
    {t:"I",text:"Me perder — me dissolver no outro até não me reconhecer mais",pts:"Medo: perda de identidade"},
    {t:"P",text:"Não ser suficiente — que minha autenticidade não baste para manter alguém",pts:"Medo: inadequação"},
    {t:"F",text:"Não ser retribuído/a — dar tudo e não receber nada em troca",pts:"Medo: não reciprocidade"},
    {t:"L",text:"O tédio — que a conexão mental desapareça e só sobre a rotina",pts:"Medo: estagnação intelectual"}
  ]},
  {q:"Como você imagina o relacionamento ideal?",sub:"Não o perfeito — o que funciona para você.",a:[
    {t:"P",text:"Duas pessoas autênticas que se escolhem todo dia — sem máscaras, sem jogos",pts:"Ideal: autenticidade mútua"},
    {t:"I",text:"Duas vidas plenas que se escolhem livremente — juntos mas nunca dependentes",pts:"Ideal: liberdade compartilhada"},
    {t:"F",text:"Uma parceria sólida — construir uma vida juntos, dia após dia",pts:"Ideal: projeto de vida compartilhado"},
    {t:"L",text:"Duas mentes que se estimulam — uma conversa infinita que nunca entedia",pts:"Ideal: estimulação perpétua"},
    {t:"S",text:"Amor total e incondicional — saber que alguém sempre estará ali, não importa o quê",pts:"Ideal: segurança absoluta"}
  ]},
  {q:"O que você está evitando na sua vida amorosa?",sub:"A pergunta mais desconfortável — e a mais importante.",a:[
    {t:"I",text:"Que minha independência é também uma defesa — para evitar realmente arriscar a dor",pts:"Evitação: proteção disfarçada de liberdade"},
    {t:"S",text:"Que meu medo do abandono está criando exatamente o que temo",pts:"Evitação: profecia auto-realizável"},
    {t:"P",text:"Que me abrir completamente significa também aceitar que posso ser ferido/a",pts:"Evitação: custo da vulnerabilidade"},
    {t:"F",text:"Que dar tudo é também uma forma de controlar — não de amar de verdade",pts:"Evitação: controle disfarçado de cuidado"},
    {t:"L",text:"Que analisar emoções é também uma forma de evitar senti-las",pts:"Evitação: pensamento como escudo"}
  ]},
  {q:"Do que você mais precisa agora para transformar sua vida amorosa?",sub:"A última pergunta — a mais importante.",a:[
    {t:"P",text:"A coragem de ser vulnerável sem esperar que a outra pessoa me salve",pts:"Necessidade: vulnerabilidade autônoma"},
    {t:"I",text:"Aprender que proximidade não é ameaça — e que posso continuar sendo eu",pts:"Necessidade: intimidade segura"},
    {t:"F",text:"Aprender a receber — não só dar. E pedir o que preciso",pts:"Necessidade: reciprocidade"},
    {t:"L",text:"Me permitir sentir — não só entender. Ir da cabeça ao coração",pts:"Necessidade: inteligência emocional"},
    {t:"S",text:"Construir segurança interna — não buscá-la só nos braços de outra pessoa",pts:"Necessidade: segurança interior"}
  ]}
];

export const CUPIDO_RESULT_DATA_PT: Record<string, CupidoResultType> = {
  P: {
    color: '#C83B3B', cd: 'rgba(200,59,59,.1)', cl: 'rgba(200,59,59,.25)',
    label: 'Estilo 01 · Chama', name: 'A Chama Autêntica',
    tagline: 'Ama com tudo. Se abre com coragem. Transforma vulnerabilidade em força.',
    tags: ['Vulnerabilidade corajosa', 'Autenticidade radical', 'Profundidade emocional'],
    intro: `Seu coração opera em modo <strong>totalmente aberto</strong>. Você ama com uma profundidade que a maioria nunca alcança. Sua vulnerabilidade não é fraqueza — é seu superpoder mais raro.`,
    desc: `O problema não é como você ama. É que o mundo nem sempre está pronto para sua intensidade. Você se abre completamente e depois se machuca quando a outra pessoa não está no mesmo nível.<br><br>Provavelmente já experimentou o ciclo: abertura total → ferida → fechamento temporário → abertura novamente. Esse ciclo não é um defeito — é sua natureza. Mas sem um sistema para gerenciá-lo, vira um padrão doloroso.<br><br>A solução não é se fechar. É aprender a <strong>dosar sua vulnerabilidade</strong> — se abrindo gradualmente, com as pessoas certas, no ritmo certo.`,
    powers: [{name: 'Profundidade emocional', sub: 'Você cria conexões que a maioria nunca toca'}, {name: 'Autenticidade magnética', sub: 'Sua verdade atrai as pessoas certas'}, {name: 'Coragem de amar', sub: 'Você aparece quando os outros se escondem'}, {name: 'Empatia transformadora', sub: 'Você entende os outros em um nível que poucos alcançam'}],
    blinds: [{name: 'Abertura prematura', sub: 'Você se expõe cedo demais com as pessoas erradas'}, {name: 'Expectativas de reciprocidade', sub: 'Ama a 100% e espera o mesmo — imediatamente'}, {name: 'Feridas amplificadas', sub: 'Quando não é retribuído/a, a dor é 10x'}, {name: 'Velocidade vs profundidade', sub: 'Intimidade real requer tempo — não só intensidade'}],
    scores: [{l: 'Vulnerabilidade', p: 96}, {l: 'Autenticidade', p: 92}, {l: 'Proteção', p: 34}, {l: 'Paciência', p: 41}, {l: 'Resiliência', p: 62}],
    rel: `Seu modelo de relacionamento ideal é baseado em <strong>vulnerabilidade progressiva</strong>. Não pare de se abrir — aprenda a fazer isso gradualmente. As conexões mais profundas vêm da paciência, não da velocidade.`,
    companion: {
      prompts: ["Você se abriu com alguém hoje? Como dosou sua vulnerabilidade?", "Identifique um momento em que sua autenticidade criou uma conexão genuína.", "Qual é a linha entre 'ser autêntico/a' e 'esperar demais em troca'?"],
      mod1: 'Vulnerabilidade progressiva: o método para se abrir sem se queimar',
      mod2: 'Como distinguir pessoas que merecem sua abertura',
      week1: 'Diagnóstico: seu ciclo abertura-ferida-fechamento',
      week2: 'O método Gradiente: dosar vulnerabilidade sem perdê-la',
      week3: 'Construir relacionamentos autênticos que resistem ao tempo',
      week4: 'Sistema de proteção saudável permanente'
    },
    reportItems: ['Seu ciclo abertura-ferida e como quebrá-lo', 'O método Gradiente para dosar vulnerabilidade', 'Como reconhecer quem merece sua profundidade', 'Os 3 sinais de que está confundindo velocidade com intimidade']
  },
  I: {
    color: '#4A7FB5', cd: 'rgba(74,127,181,.1)', cl: 'rgba(74,127,181,.25)',
    label: 'Estilo 02 · Vento', name: 'O Vento Livre',
    tagline: 'Ama sem correntes. Protege sua essência. Transforma liberdade em presente.',
    tags: ['Autonomia emocional', 'Liberdade como valor', 'Intimidade seletiva'],
    intro: `Seu coração tem um <strong>sistema de proteção sofisticado</strong>. Você ama profundamente, mas só quando tem certeza de que não vai se perder. Sua independência não é frieza — é como preserva sua essência para poder realmente compartilhá-la.`,
    desc: `O problema não é que não ama. É que seu amor precisa de espaço para respirar. Quando a outra pessoa chega perto demais, seu instinto diz para recuar — não para parar de sentir, mas para evitar se perder.<br><br>Provavelmente já experimentou o padrão: se aproximar → se sentir sufocado/a → recuo → a outra pessoa se sente rejeitada → conflito. Esse ciclo não é egoísmo — é seu jeito de se proteger.<br><br>A solução não é se tornar mais "aberto/a". É construir um tipo de <strong>intimidade que inclua sua necessidade de espaço</strong> — sem que a outra pessoa se sinta excluída.`,
    powers: [{name: 'Integridade pessoal', sub: 'Você não se perde nos relacionamentos — sabe quem é'}, {name: 'Amor não dependente', sub: 'Ama por escolha, não por necessidade'}, {name: 'Estabilidade emocional', sub: 'Não reage impulsivamente — pensa primeiro'}, {name: 'Qualidade de presença', sub: 'Quando está ali, está 100% ali'}],
    blinds: [{name: 'Muro emocional', sub: 'Independência às vezes vira barreira'}, {name: 'Recuo automático', sub: 'Se fecha quando deveria ficar'}, {name: 'Comunicação fria', sub: 'A outra pessoa não sabe o que sente — porque não conta'}, {name: 'Medo da dependência', sub: 'Evita intimidade profunda por medo de se perder'}],
    scores: [{l: 'Independência', p: 95}, {l: 'Integridade', p: 90}, {l: 'Abertura', p: 36}, {l: 'Comunicação', p: 42}, {l: 'Intimidade', p: 48}],
    rel: `Seu modelo de relacionamento ideal é baseado em <strong>liberdade compartilhada</strong>. Duas pessoas completas que se escolhem todo dia sem se perder. A intimidade ideal para você inclui o direito ao espaço.`,
    companion: {
      prompts: ["Hoje, quando sentiu necessidade de recuar, o que estava acontecendo?", "Quando foi a última vez que expressou uma emoção vulnerável sem se proteger?", "O que você perde quando se fecha — e o que acha que está protegendo?"],
      mod1: "Como ficar perto sem se perder", mod2: 'O framework intimidade-liberdade para o Vento',
      week1: 'Diagnóstico: onde sua independência vira defesa', week2: 'Intimidade segura: ficar perto sem se perder',
      week3: 'Comunicar emoções quando o instinto diz para se fechar', week4: 'Sistema de abertura gradual permanente'
    },
    reportItems: ["Como distinguir proteção saudável de fuga da intimidade", "O framework para ficar perto sem se perder", "Como comunicar suas necessidades de espaço sem magoar", "Os 3 momentos em que seu recuo sabota a conexão"]
  },
  F: {
    color: '#6B8E6B', cd: 'rgba(107,142,107,.1)', cl: 'rgba(107,142,107,.25)',
    label: 'Estilo 03 · Raiz', name: 'A Raiz Protetora',
    tagline: 'Ama construindo. Cuida de tudo. Transforma dedicação em fundação.',
    tags: ['Cuidado ativo', 'Parceria sólida', 'Dedicação construtiva'],
    intro: `Seu coração se expressa através de <strong>mãos e ações</strong>. Para você, amar é fazer — cozinhar, organizar, construir, resolver. Seu cuidado não é dado como certo — é sua linguagem de amor mais poderosa.`,
    desc: `O problema não é que dá demais. É que dá sem pedir — até se esgotar. E quando finalmente pede, a outra pessoa não entende por que está com raiva.<br><br>Seu padrão: dar tudo → não receber → acumular frustração → explodir ou se fechar. Esse ciclo sempre te deixa na mesma posição: exausto/a e incompreendido/a.<br><br>A solução não é parar de dar. É aprender a <strong>receber com a mesma facilidade</strong> com que dá. E comunicar suas necessidades antes de chegar ao ponto de ruptura.`,
    powers: [{name: 'Dedicação autêntica', sub: 'Quando ama, constrói algo concreto e duradouro'}, {name: 'Confiabilidade', sub: 'A outra pessoa sabe que pode contar com você — sempre'}, {name: 'Cuidado tangível', sub: 'Transforma amor em ações que melhoram a vida'}, {name: 'Visão de parceria', sub: 'Pensa em "nós" — constrói para dois'}],
    blinds: [{name: 'Dar sem receber', sub: 'A balança está sempre pendendo pro seu lado'}, {name: 'Cuidado como controle', sub: '"Fazer por" às vezes é uma forma de controlar'}, {name: 'Necessidades invisíveis', sub: 'Suas necessidades estão sempre no final da lista'}, {name: 'Ressentimento acumulado', sub: 'Não diz nada até explodir'}],
    scores: [{l: 'Dedicação', p: 97}, {l: 'Confiabilidade', p: 94}, {l: 'Assertividade', p: 32}, {l: 'Receber', p: 28}, {l: 'Equilíbrio', p: 40}],
    rel: `Seu modelo de relacionamento ideal é uma <strong>parceria equilibrada</strong> onde dar e receber estão em equilíbrio. Seu superpoder é o cuidado — mas precisa fluir nas duas direções.`,
    companion: {
      prompts: ["Hoje alguém fez algo por VOCÊ? Aceitou sem resistir?", "Identifique uma necessidade que nunca comunicou ao/à parceiro/a. Por quê?", "O que aconteceria se pedisse ajuda antes de se esgotar?"],
      mod1: 'Como aprender a receber (e por que é mais difícil que dar)', mod2: 'O framework necessidades-limites para a Raiz',
      week1: 'Diagnóstico: o equilíbrio dar-receber na sua vida', week2: 'Comunicar necessidades antes do ponto de ruptura',
      week3: 'Construir reciprocidade real nos relacionamentos', week4: 'Sistema anti-burnout relacional permanente'
    },
    reportItems: ['Como construir reciprocidade real nos relacionamentos', 'O framework para comunicar suas necessidades sem culpa', 'A diferença entre cuidado autêntico e cuidado-como-controle', 'Os 3 sinais de que está dando demais (e como parar a tempo)']
  },
  L: {
    color: '#9B7EB8', cd: 'rgba(155,126,184,.1)', cl: 'rgba(155,126,184,.25)',
    label: 'Estilo 04 · Estrela', name: 'A Estrela Pensante',
    tagline: 'Ama com a mente. Busca profundidade intelectual. Transforma pensamento em conexão.',
    tags: ['Intelecto emocional', 'Conversa como intimidade', 'Análise profunda'],
    intro: `Seu coração flui pela <strong>mente</strong>. Para você, intimidade real é uma conversa que toca a alma. Atração intelectual é sua linguagem de amor — e não é menos profunda que a emocional.`,
    desc: `Não é que não sente. É que sente através do pensamento. Quando analisa um relacionamento, não está evitando emoções — está processando do seu jeito.<br><br>O problema é que a outra pessoa muitas vezes quer sentir, não entender. Quer um "te amo" espontâneo, não uma análise de por que o amor funciona.<br><br>A solução não é parar de pensar. É aprender a <strong>deixar as emoções chegarem antes da análise</strong> — pelo menos às vezes.`,
    powers: [{name: 'Profundidade conversacional', sub: 'Suas conversas criam intimidade verdadeira e duradoura'}, {name: 'Reconhecimento de padrões', sub: 'Você vê dinâmicas relacionais com rara clareza'}, {name: 'Crescimento compartilhado', sub: 'Leva a outra pessoa a pensar mais profundamente'}, {name: 'Estabilidade reflexiva', sub: 'Não reage impulsivamente — pensa antes de agir'}],
    blinds: [{name: 'Distância emocional', sub: 'Análise às vezes substitui o sentir'}, {name: 'Intelectualização', sub: 'Pensa o relacionamento em vez de vivê-lo'}, {name: 'Dificuldade com espontaneidade', sub: 'Impulsividade emocional te incomoda'}, {name: 'Expectativas cognitivas', sub: 'Busca perfeição lógica em algo ilógico: o amor'}],
    scores: [{l: 'Inteligência', p: 96}, {l: 'Reflexão', p: 91}, {l: 'Espontaneidade', p: 33}, {l: 'Emoção', p: 39}, {l: 'Presença', p: 48}],
    rel: `Seu modelo de relacionamento ideal é uma <strong>conexão intelectual-emocional</strong>. Não abra mão da profundidade mental — aprenda a combiná-la com profundidade emocional. Mente e coração não competem.`,
    companion: {
      prompts: ["Hoje, quando sentiu uma emoção forte, expressou ou analisou primeiro?", "Quando foi a última vez que disse 'te amo' sem pensar?", "O que perde quando analisa um momento em vez de vivê-lo?"],
      mod1: 'Como ir da cabeça ao coração (sem perder a mente)', mod2: 'O framework emoção-reflexão para a Estrela',
      week1: 'Diagnóstico: onde a análise substitui o sentir', week2: 'Presença emocional: viver o momento antes de entendê-lo',
      week3: 'Comunicar com o coração quando o cérebro quer controle', week4: 'Sistema de equilíbrio mente-coração permanente'
    },
    reportItems: ['Como equilibrar análise e espontaneidade nos relacionamentos', 'O framework para expressar emoções sem perder profundidade', 'A diferença entre entender um relacionamento e vivê-lo', 'Os 3 momentos em que o pensamento sabota a conexão']
  },
  S: {
    color: '#D4764E', cd: 'rgba(212,118,78,.1)', cl: 'rgba(212,118,78,.25)',
    label: "Estilo 05 · Onda", name: "A Onda Intensa",
    tagline: 'Ama com urgência. Sente tudo amplificado. Transforma medo em profundidade.',
    tags: ["Intensidade emocional", "Medo do abandono", "Amor como urgência"],
    intro: `Seu coração vive no <strong>volume máximo</strong>. Quando ama, ama com uma intensidade que poucos conhecem. Seu medo do abandono não é um defeito — é um sinal de quão profundamente se conecta.`,
    desc: `O problema não é que sente demais. É que o medo de acabar te leva a criar exatamente o que teme. Busca reasseguramento constante, interpreta cada silêncio como sinal de abandono, e sua intensidade às vezes sufoca o que está tentando crescer.<br><br>Seu padrão: paixão intensa → medo do abandono → comportamentos controladores → a outra pessoa se afasta → confirmação do medo.<br><br>A solução não é amar menos. É construir <strong>segurança interna</strong> — para que o amor da outra pessoa seja um presente, não sua única fonte de estabilidade.`,
    powers: [{name: 'Intensidade emocional', sub: "Quando ama, a outra pessoa realmente se sente amada"}, {name: 'Presença total', sub: "Está completamente ali — não pela metade"}, {name: 'Lealdade profunda', sub: 'Quem tem seu coração, tem tudo de você'}, {name: 'Empatia amplificada', sub: "Sente as emoções da outra pessoa como se fossem suas"}],
    blinds: [{name: "Medo do abandono", sub: 'Cada silêncio vira sinal de perigo'}, {name: 'Necessidade de reasseguramento', sub: 'Precisa ouvir "estou aqui" demais'}, {name: 'Profecia auto-realizável', sub: 'O medo de acabar cria a pressão que faz acabar'}, {name: 'Dependência emocional', sub: "Sua estabilidade depende demais da presença da outra pessoa"}],
    scores: [{l: 'Intensidade', p: 98}, {l: 'Presença', p: 89}, {l: 'Segurança interna', p: 26}, {l: 'Independência', p: 31}, {l: 'Estabilidade', p: 34}],
    rel: `Seu modelo de relacionamento ideal é baseado em <strong>segurança interna</strong>. Não pare de amar intensamente — aprenda a fazer isso de um lugar de plenitude, não de medo. Quando está cheio/a por dentro, seu amor se torna presente em vez de exigência.`,
    companion: {
      prompts: ["Que estado emocional está hoje? (Seguro/a / Ansioso/a / Urgente) — e o que pode fazer POR SI?", "Quando foi a última vez que buscou reasseguramento? O que realmente procurava?", "Como pode dar a si mesmo/a a segurança que pede à outra pessoa?"],
      mod1: "Como construir segurança interna (e parar de buscá-la nos outros)",
      mod2: "O framework anti-ansiedade relacional para a Onda",
      week1: "Diagnóstico: seu loop medo-controle-abandono",
      week2: 'Segurança interna: técnicas de autorregulação diária',
      week3: "Comunicar intensidade sem sufocar",
      week4: 'Sistema anti-dependência emocional permanente'
    },
    reportItems: ["Como quebrar o loop medo-controle-abandono", "O framework para construir segurança interna", "A diferença entre amar intensamente e dependência emocional", "Os 3 gatilhos da sua ansiedade relacional — e como desativá-los"]
  }
};
