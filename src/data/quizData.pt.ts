// ⚠️ MIRROR — source canonique = repo hyperyou-systems (CONNEXA-HQ D-014a). Ne pas éditer le contenu quiz ici ; synchroniser depuis hyperyou-systems. Voir ./README.md
import type { Question, ResultType } from './quizData';

export const QUESTIONS_PT: Question[] = [
  {q:"Quando uma ideia nova te atinge, qual é sua primeira reação?",sub:"Escolha a que mais ressoa com você.",a:[
    {t:"V",text:"Eu a arquiteto mentalmente em um sistema completo antes de fazer qualquer coisa",pts:"Orientação: sistemas e estrutura"},
    {t:"K",text:"Eu lanço imediatamente — penso enquanto ajo, a energia é agora",pts:"Orientação: ação e impulso"},
    {t:"C",text:"Falo com alguém sobre isso — entender como pode ajudar os outros me acende",pts:"Orientação: pessoas e relacionamentos"},
    {t:"D",text:"Mergulho em pesquisa profunda até entender tudo",pts:"Orientação: conhecimento e profundidade"},
    {t:"S",text:"Depende do meu ciclo — às vezes explodo de energia, às vezes preciso de silêncio",pts:"Orientação: energia cíclica"}
  ]},
  {q:"O que te bloqueia com mais frequência no seu trabalho?",sub:"Seja honesto/a — esta é a pergunta-chave.",a:[
    {t:"V",text:"Não consigo começar se tudo não estiver perfeito na minha cabeça",pts:"Bloqueio: perfeccionismo paralisante"},
    {t:"K",text:"Fico entediado/a antes de terminar — a empolgação some quando chega a parte chata",pts:"Bloqueio: aversão à linha de chegada"},
    {t:"C",text:"Sempre acabo cuidando dos problemas dos outros em vez dos meus",pts:"Bloqueio: limites porosos"},
    {t:"D",text:"Sei tudo mas não consigo comunicar de forma simples",pts:"Bloqueio: invisível para o mercado"},
    {t:"S",text:"Meus crashes de energia destroem o que construí durante a fase alta",pts:"Bloqueio: gestão de ciclos"}
  ]},
  {q:"Como você descreveria sua relação com energia no trabalho?",sub:"Pense nos últimos 3 meses.",a:[
    {t:"S",text:"Vou em fases: produtividade extrema seguida de recuperação total",pts:"Padrão: ciclos de alta amplitude"},
    {t:"D",text:"Quando encontro algo que me apaixona, posso trabalhar 12 horas sem perceber",pts:"Padrão: hiperfoco profundo"},
    {t:"K",text:"A energia vem em explosões — alta no início de cada projeto, depois some",pts:"Padrão: picos de dopamina"},
    {t:"V",text:"Me energizo quando planejo — a execução me drena",pts:"Padrão: visão sim, execução não"},
    {t:"C",text:"A energia dos outros me carrega — relacionamentos me alimentam",pts:"Padrão: codependência energética"}
  ]},
  {q:"Olhando para os últimos 12 meses, o que aconteceu com seus projetos?",sub:"Escolha a resposta mais honesta.",a:[
    {t:"K",text:"Comecei muitas coisas incríveis que nunca terminei",pts:"Padrão: serial sem completamento"},
    {t:"V",text:"Passei muito tempo planejando — produzi menos do que gostaria",pts:"Padrão: arquitetura sem construção"},
    {t:"C",text:"Ajudei os outros a construir a visão deles mais do que a minha",pts:"Padrão: investindo nos outros"},
    {t:"D",text:"Aprofundei muito mas tenho dificuldade em transformar expertise em oferta concreta",pts:"Padrão: expertise não monetizada"},
    {t:"S",text:"Tive períodos extraordinários e períodos de bloqueio total — forte descontinuidade",pts:"Padrão: montanha-russa produtiva"}
  ]},
  {q:"Como você se relaciona com os outros em contexto profissional?",sub:"Qual frase te descreve melhor?",a:[
    {t:"C",text:"Percebo as necessidades dos outros antes que eles as expressem",pts:"Relação: empatia estrutural"},
    {t:"V",text:"Prefiro trabalhar sozinho/a — colaborações muitas vezes não entendem onde estou indo",pts:"Relação: solidão visionária"},
    {t:"D",text:"Gosto de compartilhar meu conhecimento com quem está genuinamente interessado",pts:"Relação: mentoria e transmissão"},
    {t:"K",text:"Adoro brainstorming — a parte de execução com os outros me atrasa",pts:"Relação: faíscas colaborativas"},
    {t:"S",text:"Nas fases altas sou magnético/a — nas fases baixas preciso me isolar",pts:"Relação: alternância presença-retiro"}
  ]},
  {q:"O que as pessoas que te conhecem bem dizem com mais frequência?",sub:"Escolha o feedback mais recorrente.",a:[
    {t:"V",text:"'Você sempre tem grandes ideias — mas nunca realmente as realiza'",pts:"Feedback: visão sem execução"},
    {t:"K",text:"'Você é cheio/a de energia e ideias — mas nunca termina o que começa'",pts:"Feedback: dispersão criativa"},
    {t:"C",text:"'Você faz tudo por todos — mas nunca cuida de si mesmo/a'",pts:"Feedback: auto-sacrifício relacional"},
    {t:"D",text:"'Você é brilhante — deveria se expor mais'",pts:"Feedback: talento invisível"},
    {t:"S",text:"'Quando você está ON é imparável — mas depois desaparece por semanas'",pts:"Feedback: ciclicidade evidente"}
  ]},
  {q:"Qual é sua relação com dinheiro e o pricing do seu trabalho?",sub:"Esta costuma ser a pergunta mais difícil.",a:[
    {t:"D",text:"Sei que meu trabalho vale muito mas tenho vergonha de cobrar preços altos",pts:"Bloqueio: síndrome do especialista humilde"},
    {t:"V",text:"Tenho dificuldade em monetizar — a visão é clara mas o produto concreto não",pts:"Bloqueio: gap visão-produto"},
    {t:"C",text:"Tendo a oferecer demais por muito pouco — clientes quase viram amigos",pts:"Bloqueio: confusão valor-relação"},
    {t:"K",text:"Lanço ofertas impulsivamente — pricing aleatório, descontos espontâneos",pts:"Bloqueio: pricing reativo"},
    {t:"S",text:"Nos períodos altos ganho bem — nos períodos baixos tudo para",pts:"Bloqueio: faturamento cíclico instável"}
  ]},
  {q:"Quando você está no seu estado de performance máxima, o que está acontecendo?",sub:"Descreva o contexto que te faz funcionar melhor.",a:[
    {t:"D",text:"Estou explorando algo em profundidade — hiperfoco total e pura satisfação",pts:"Pico: imersão total"},
    {t:"V",text:"Estou projetando um sistema complexo — minha mente é cristalina e conecta tudo",pts:"Pico: arquitetura sistêmica"},
    {t:"S",text:"Estou na fase alta do ciclo — energia nas alturas, ideias fluindo, execução rápida",pts:"Pico: momentum cíclico"},
    {t:"C",text:"Estou facilitando algo — trazer pessoas para colaborar, criar sinergias",pts:"Pico: catálise relacional"},
    {t:"K",text:"Estou começando algo novo — a fase de lançamento é minha zona de gênio",pts:"Pico: ignição criativa"}
  ]},
  {q:"Qual é seu principal desafio em construir um negócio?",sub:"Escolha o que sente mais verdadeiro agora.",a:[
    {t:"K",text:"Ir da ideia para oferta concreta — e mantê-la ao longo do tempo sem me entediar",pts:"Desafio: da ideia ao sistema estável"},
    {t:"V",text:"Simplificar o suficiente para comunicar claramente o que ofereço",pts:"Desafio: síntese da complexidade"},
    {t:"C",text:"Construir algo que seja verdadeiramente meu — não a serviço da visão de outra pessoa",pts:"Desafio: ser dono/a da minha visão"},
    {t:"D",text:"Me tornar visível e comunicar o valor real do que sei fazer",pts:"Desafio: marketing da expertise profunda"},
    {t:"S",text:"Construir um sistema que funcione mesmo quando estou em fase baixa",pts:"Desafio: arquitetura anti-burnout"}
  ]},
  {q:"Do que você mais precisa agora para dar um salto?",sub:"A última pergunta — a mais importante.",a:[
    {t:"V",text:"Um método para ir da visão à ação sem esperar a perfeição",pts:"Necessidade: ponte visão-execução"},
    {t:"K",text:"Um sistema que me ajude a terminar o que começo — e construir sobre o que funciona",pts:"Necessidade: completamento estruturado"},
    {t:"C",text:"Aprender a colocar minhas necessidades no centro — construir algo verdadeiramente meu",pts:"Necessidade: centralidade de si"},
    {t:"D",text:"Visibilidade e posicionamento — para que o mercado finalmente saiba que eu existo",pts:"Necessidade: emergência estratégica"},
    {t:"S",text:"Um sistema operativo calibrado nos meus ciclos — que funcione em fase alta e em fase baixa",pts:"Necessidade: sistema cíclico sustentável"}
  ]},
  {q:"Como você costuma tomar decisões importantes?",sub:"Pense na última grande decisão que tomou.",a:[
    {t:"V",text:"Mapeio cada cenário possível e escolho o caminho estrategicamente ótimo",pts:"Decisão: mapeamento estratégico"},
    {t:"K",text:"Sigo meu instinto — pensar demais mata o momentum",pts:"Decisão: guiada pelo instinto"},
    {t:"C",text:"Consulto pessoas de confiança primeiro — as perspectivas delas moldam minha escolha",pts:"Decisão: input coletivo"},
    {t:"D",text:"Pesquiso extensivamente até que a resposta se torne inegável",pts:"Decisão: baseada em evidências"},
    {t:"S",text:"Depende da minha fase — nas altas decido rápido, nas baixas congelo",pts:"Decisão: dependente da fase"}
  ]},
  {q:"Como você gerencia sua energia ao longo do dia?",sub:"Seja honesto/a sobre seus padrões reais, não os ideais.",a:[
    {t:"S",text:"Minha energia é imprevisível — surfo a onda quando vem e descanso quando quebra",pts:"Energia: surfando a onda"},
    {t:"V",text:"Planejo cuidadosamente o trabalho mais criativo para horários de pico e agrupo todo o resto",pts:"Energia: otimização estruturada"},
    {t:"K",text:"Corro atrás do que me empolga — a energia segue o interesse, não o relógio",pts:"Energia: guiada pela empolgação"},
    {t:"D",text:"Uma vez imerso/a, nada quebra meu foco — mas começar é a parte difícil",pts:"Energia: limiar de ativação"},
    {t:"C",text:"Tiro energia de ajudar os outros — trabalho solo me drena mais rápido",pts:"Energia: carregada relacionalmente"}
  ]},
  {q:"Quando você precisa criar algo novo, como é o seu processo?",sub:"Pense em como as ideias realmente se tornam realidade para você.",a:[
    {t:"K",text:"Mergulho e construo conforme avanço — a criação se revela fazendo",pts:"Criativo: criação improvisada"},
    {t:"V",text:"Preciso do quadro completo na minha mente antes de tocar em qualquer coisa",pts:"Criativo: pré-visualização"},
    {t:"D",text:"Estudo como os outros fizeram primeiro, depois construo algo mais profundo",pts:"Criativo: informado pela pesquisa"},
    {t:"C",text:"Co-crio melhor — trocar ideias com os outros melhora tudo",pts:"Criativo: síntese colaborativa"},
    {t:"S",text:"Em explosões de inspiração intensa que capturo antes que desapareçam",pts:"Criativo: captura de inspiração"}
  ]}
];

export const RESULT_DATA_PT: Record<string, ResultType> = {
  V: {
    color: '#C8A84B', cd: 'rgba(200,168,75,.1)', cl: 'rgba(200,168,75,.25)',
    label: 'Tipo 01 · Arquiteto', name: 'Arquiteto Visionário',
    tagline: 'Constrói catedrais na mente. Realiza com o sistema certo.',
    tags: ['Pensamento sistêmico', 'Visão complexa', 'Arquitetura estratégica'],
    intro: `Seu cérebro é um <strong>processador de sistemas</strong>. Onde os outros veem caos, você vê arquiteturas. Onde os outros veem detalhes, você vê conexões. Este é seu superpoder raro — e também a fonte do seu bloqueio principal.`,
    desc: `Não é que você não sabe o que fazer. Sua visão é tão complexa e completa que nenhuma execução faz justiça. Você espera uma perfeição que nunca vai chegar. Enquanto isso, pessoas com 10% da sua visão estão construindo coisas que você imaginou anos atrás.<br><br>A solução não é parar de ser arquiteto/a. É aprender a construir <strong>fundações antes de catedrais</strong>. Um sistema operativo calibrado no seu tipo te dá o método para traduzir visão em ação sem trair a qualidade que você exige.`,
    powers: [{name: 'Arquitetura sistêmica', sub: 'Você vê sistemas completos antes que existam'}, {name: 'Pensamento estratégico', sub: 'Você conecta informações que os outros nunca correlacionam'}, {name: 'Qualidade profunda', sub: 'Seu padrão é raro no mercado'}, {name: 'Visão de longo prazo', sub: 'Você pensa em anos quando os outros pensam em semanas'}],
    blinds: [{name: 'Perfeccionismo paralisante', sub: 'A perfeição é inimiga do feito'}, {name: 'Delegar é difícil', sub: 'Ninguém entende a visão como você — mas isso te isola'}, {name: 'Produtos concretos', sub: 'O gap entre arquitetura e venda é o seu maior'}, {name: 'Completar vs começar', sub: 'Você começou mais coisas do que terminou'}],
    scores: [{l: 'Visão', p: 95}, {l: 'Estratégia', p: 88}, {l: 'Execução', p: 38}, {l: 'Comunicação', p: 52}, {l: 'Energia', p: 64}],
    biz: `O modelo mais adequado para você é aquele que te posiciona como <strong>consultor estratégico ou arquiteto de sistemas</strong>. Seu valor está na direção, design, visão. Você precisa ser pago/a para pensar — e automatizar o fazer.`,
    companion: {
      prompts: ['Qual é a primeira ação concreta que você poderia fazer hoje sem esperar a perfeição?', 'Identifique UM projeto que você poderia completar em 48 horas. Só um.', 'O que aconteceria se você lançasse a versão 80% perfeita esta semana?'],
      mod1: 'O ciclo Visão → MVP → Iteração', mod2: 'Como comunicar complexidade de forma simples',
      week1: 'Diagnóstico: onde sua visão trava', week2: 'O método Bridge: da ideia ao produto em 7 dias', week3: 'Posicionamento e pricing para o Arquiteto', week4: 'Sistema anti-perfeccionismo permanente'
    },
    reportItems: ['Como construir um MVP da sua visão sem traí-la', 'Seu modelo de pricing como arquiteto', 'Como comunicar complexidade ao mercado de forma simples', 'Os 3 gatilhos do seu perfeccionismo — e como desativá-los']
  },
  K: {
    color: '#F4C318', cd: 'rgba(244,195,24,.08)', cl: 'rgba(244,195,24,.25)',
    label: 'Tipo 02 · Caçador', name: 'Caçador de Faíscas',
    tagline: 'O cérebro mais criativo da sala. Com o sistema certo, também o mais produtivo.',
    tags: ['Criatividade explosiva', 'Dopamina e lançamento', 'Conexões laterais'],
    intro: `Seu cérebro funciona com <strong>faíscas de dopamina</strong>. Cada nova ideia é uma ignição total. Você é capaz de conexões criativas que a maioria das pessoas nunca vê.`,
    desc: `Você não tem um problema de ideias. Tem mais em um dia do que a maioria tem em um ano. O problema é que seu sistema nervoso é calibrado em inícios — não em finais. A empolgação do lançamento é sua droga. O trabalho de manutenção é seu tormento.<br><br>Provavelmente você tem 10+ projetos abertos agora. E um cemitério de ideias brilhantes que nunca viram o mercado.<br><br>A solução não é se tornar uma pessoa "disciplinada". É construir um <strong>sistema que aproveita as faíscas em vez de combatê-las</strong> — com sprints curtos e mecanismos de completamento automático.`,
    powers: [{name: 'Ideação explosiva', sub: 'Você gera ideias que os outros nem veem de longe'}, {name: 'Criatividade lateral', sub: 'Você conecta domínios que ninguém havia ligado antes'}, {name: 'Energia de lançamento', sub: 'Na fase inicial você é imparável e magnético/a'}, {name: 'Adaptabilidade rápida', sub: 'Você muda de direção rapidamente quando necessário'}],
    blinds: [{name: '47 projetos abertos', sub: 'O cemitério de boas ideias inacabadas'}, {name: 'Aversão à linha de chegada', sub: '80% feito vale zero sem os 20% finais'}, {name: 'Monetização instável', sub: 'Pricing aleatório, ofertas impulsivas, sem sistema'}, {name: 'Dispersão de foco', sub: 'Muito amplo/a, não profundo/a o suficiente'}],
    scores: [{l: 'Criatividade', p: 98}, {l: 'Lançamento', p: 92}, {l: 'Completamento', p: 22}, {l: 'Sistema', p: 31}, {l: 'Energia', p: 78}],
    biz: `O modelo para você é <strong>sprints curtos com outputs concretos</strong>. Produtos digitais rápidos, cursos intensivos, consultoria criativa. Estruture tudo em no máximo 30-90 dias. Seu negócio deve ser anti-tédio by design.`,
    companion: {
      prompts: ['De todos os projetos abertos, qual — se terminado — mudaria mais sua situação?', 'Qual é o próximo passo mais pequeno possível para seu projeto principal?', 'O que você está evitando terminar há mais tempo?'],
      mod1: 'Sprint-Ship-Repeat: o método para cérebros a faísca', mod2: 'Como filtrar as 3 ideias para terminar (e abandonar o resto)',
      week1: 'Diagnóstico: seu padrão de não-completamento', week2: 'Sprints de 25 minutos: terminar sem se entediar', week3: 'Monetização estável para o Caçador', week4: 'Sistema anti-dispersão permanente'
    },
    reportItems: ['O método Sprint-Ship-Repeat para seu tipo', 'Como identificar as 3 ideias para terminar (e abandonar o resto)', 'O sistema de pricing anti-impulsivo para o Caçador', 'Como construir um sistema que funciona nas partes chatas']
  },
  C: {
    color: '#A87CDC', cd: 'rgba(168,124,220,.1)', cl: 'rgba(168,124,220,.28)',
    label: 'Tipo 03 · Catalisador', name: 'Conector Catalisador',
    tagline: 'O coração do ecossistema. Agora é hora de construir o seu.',
    tags: ['Inteligência emocional', 'Construção de redes', 'Visão para os outros'],
    intro: `Seu cérebro é calibrado nas <strong>pessoas</strong>. Você percebe as necessidades dos outros antes que expressem. Você é a ponte entre visões e as pessoas que as realizam.`,
    desc: `Provavelmente você ajudou muitas pessoas a construir as coisas delas. Foi valioso/a para todos. E enquanto isso, sua visão esperou na fila.<br><br>Não é só altruísmo — é também um mecanismo de evitação. Cuidar dos outros é mais seguro do que se expor com um projeto próprio.<br><br>Mas você chegou a um ponto de virada. Sua capacidade de conectar pessoas e construir redes é uma <strong>competência rara e valiosa para o mercado</strong> — se você colocar a serviço de algo seu.`,
    powers: [{name: 'Inteligência emocional', sub: 'Você lê salas e pessoas com precisão extraordinária'}, {name: 'Construção de redes', sub: 'Você constrói relações que duram e produzem resultados'}, {name: 'Facilitação', sub: 'Você leva as pessoas a trabalharem juntas fluidamente'}, {name: 'Liderança humana', sub: 'As pessoas te seguem porque se sentem compreendidas'}],
    blinds: [{name: 'Limites porosos', sub: 'Os outros entram no seu espaço e você não fecha'}, {name: 'Auto-sacrifício', sub: 'Você sempre coloca suas necessidades por último'}, {name: 'Seu negócio vs o deles', sub: 'Você constrói para os outros melhor do que para si'}, {name: 'Monetizar conexões', sub: 'Fez networking grátis por anos — hora de cobrar'}],
    scores: [{l: 'Empatia', p: 96}, {l: 'Relacionamentos', p: 91}, {l: 'Negócio próprio', p: 41}, {l: 'Limites', p: 35}, {l: 'Visibilidade', p: 58}],
    biz: `Seu modelo ideal é <strong>consultoria de rede, community building ou advisory</strong>. Venda sua capacidade de conectar pessoas e visões. Seu produto é seu ecossistema.`,
    companion: {
      prompts: ['Hoje, o que você fez por VOCÊ — não por outra pessoa?', 'Identifique uma relação profissional onde está dando mais do que recebe.', 'Qual é o limite mais urgente a estabelecer esta semana?'],
      mod1: 'Como construir um negócio de conexões (e cobrar bem por isso)', mod2: 'O framework limites-valor para o Catalisador',
      week1: 'Diagnóstico: onde está investindo sua energia relacional', week2: 'De facilitador a protagonista: construir para si', week3: 'Monetizar conexões — pricing do Catalisador', week4: 'Limites saudáveis e negócio próprio permanente'
    },
    reportItems: ['Como construir um negócio de conexões e cobrar bem por isso', 'O framework limites-valor para o Catalisador', 'Como passar de facilitador dos outros a protagonista do seu', 'Os 3 padrões de auto-sabotagem relacional']
  },
  D: {
    color: '#4DADA0', cd: 'rgba(77,173,160,.1)', cl: 'rgba(77,173,160,.28)',
    label: 'Tipo 04 · Mergulhador', name: 'Mergulhador Profundo',
    tagline: 'Expertise em nível master. O mercado só está esperando te descobrir.',
    tags: ['Hiperfoco', 'Expertise profunda', 'Conhecimento raro'],
    intro: `Seu cérebro <strong>mergulha</strong>. Quando algo te apaixona, você alcança níveis de competência que a maioria nunca toca. Você é um especialista raro e precioso.`,
    desc: `O problema não é o que você sabe. O mercado não sabe. Você está tão ocupado/a mergulhando fundo que não tem tempo — ou vontade — de emergir e se tornar visível.<br><br>Há algo mais profundo: simplificar seu conhecimento parece uma tradução, um empobrecimento.<br><br>Mas a verdade é: o mercado não paga por complexidade que só você entende. Paga por <strong>transformações que qualquer um pode compreender</strong>. Seu trabalho não é simplificar expertise — é traduzí-la em resultados compreensíveis.`,
    powers: [{name: 'Hiperfoco produtivo', sub: 'Em 4 horas você produz o que outros fazem em semanas'}, {name: 'Expertise em nível master', sub: 'Você conhece seu campo em um nível que poucos alcançam'}, {name: 'Qualidade absoluta', sub: 'Seu padrão é sua assinatura'}, {name: 'Soluções não óbvias', sub: 'Você encontra soluções que só quem conhece profundamente pode ver'}],
    blinds: [{name: 'Invisibilidade no mercado', sub: 'Seu talento existe mas ninguém sabe'}, {name: 'Comunicação complexa', sub: 'Você fala em nível especialista quando o mercado quer simplicidade'}, {name: 'Pricing do valor raro', sub: 'Provavelmente está vendendo barato demais'}, {name: 'Emergir da imersão', sub: 'A superfície — onde as vendas acontecem — é desconfortável'}],
    scores: [{l: 'Expertise', p: 97}, {l: 'Profundidade', p: 93}, {l: 'Visibilidade', p: 28}, {l: 'Marketing', p: 34}, {l: 'Comunicação', p: 45}],
    biz: `Seu modelo ideal é <strong>advisory de alto nível, consultoria especializada ou produtos de expertise profunda</strong>. Preços altos. Poucos clientes. Máxima qualidade. Pare de competir por volume e comece pela raridade.`,
    companion: {
      prompts: ['Explique o que você faz em UMA frase que até não-especialistas entendam.', 'Quem resolveu um problema similar com menos expertise? O que pode aprender com eles?', 'Qual é o resultado mais específico que alguém obtém trabalhando com você?'],
      mod1: 'Como se posicionar como especialista raro (não genérico)', mod2: 'O método para comunicar expertise profunda de forma simples',
      week1: 'Diagnóstico: o gap entre expertise e visibilidade', week2: 'Síntese do conhecimento — do profundo ao compreensível', week3: 'Posicionamento e pricing para o Mergulhador', week4: 'Estratégia de emergência permanente'
    },
    reportItems: ['Como se posicionar como especialista raro (não genérico)', 'O método para comunicar expertise profunda de forma simples', 'A estratégia de pricing para o Mergulhador', 'Como se tornar visível sem se sentir um vendedor']
  },
  S: {
    color: '#F4A24A', cd: 'rgba(244,162,74,.1)', cl: 'rgba(244,162,74,.28)',
    label: 'Tipo 05 · Construtor', name: 'Construtor de Tempestades',
    tagline: 'Energia cíclica. Com o sistema certo, cada ciclo é mais poderoso que o anterior.',
    tags: ['Energia de alta amplitude', 'Ciclicidade natural', 'Resiliência profunda'],
    intro: `Seu cérebro tem uma <strong>onda de amplitude extremamente alta</strong>. Quando está na fase ativa, é imparável. Quando o ciclo desce, tudo para. Isso não é um defeito — é sua natureza.`,
    desc: `O sistema de produtividade tradicional é construído para cérebros lineares. Para você é tortura e mentira.<br><br>Na sua fase alta você produz 10 vezes o que uma pessoa "normal" produz em um mês. Na fase baixa precisa de recuperação, silêncio, reconstrução. Este ciclo é biológico e inegociável.<br><br>O problema não é o ciclo — é que você não tem um <strong>sistema projetado para habitá-lo</strong>. Negócio construído só nas fases altas, comunicação parada nas baixas, clientes confusos pela sua irregularidade. A solução não é se tornar regular. É construir um negócio que trabalhe com seu ritmo.`,
    powers: [{name: 'Picos de produtividade extrema', sub: 'Nas fases altas você produz o que outros nunca tocam'}, {name: 'Resiliência pós-crash', sub: 'Cada renascimento te leva mais alto que o anterior'}, {name: 'Visão amplificada', sub: 'Nas fases altas a clareza estratégica é total'}, {name: 'Autenticidade radical', sub: 'A história do seu ciclo é seu marketing mais poderoso'}],
    blinds: [{name: 'Faturamento cíclico instável', sub: 'Os ganhos dependem demais da fase em que está'}, {name: 'Comunicação descontínua', sub: 'Você desaparece quando está em baixa — clientes se confundem'}, {name: 'Burnout recorrente', sub: 'Sem sistemas anti-burnout, o padrão se repete'}, {name: 'Promessas de fase alta', sub: 'Você promete da fase alta, entrega da fase baixa'}],
    scores: [{l: 'Output de pico', p: 98}, {l: 'Resiliência', p: 85}, {l: 'Estabilidade', p: 31}, {l: 'Sistema', p: 38}, {l: 'Sustentabilidade', p: 42}],
    biz: `Seu modelo ideal é <strong>tudo que é automatizável, assíncrono e funciona mesmo quando você está offline</strong>. Produtos digitais, cursos on-demand, assinaturas automatizadas. Seu negócio deve rodar sem você durante as fases baixas.`,
    companion: {
      prompts: ['Em qual fase do ciclo você está hoje? (Alta / Média / Baixa) — e o que é apropriado fazer HOJE com base nesta fase?', 'Qual sistema ou automação você poderia ativar esta semana que funcione mesmo quando você não pode?', 'O que você precisa comunicar aos seus clientes durante as fases baixas para manter a confiança?'],
      mod1: 'O framework ciclo-negócio para o Construtor', mod2: 'Como construir automações que funcionam nas fases baixas',
      week1: 'Diagnóstico: mapear seu ciclo pessoal', week2: 'Modelo de negócio anti-burnout — estrutura cíclica', week3: 'Faturamento automatizado para fases baixas', week4: 'Plano de sustentabilidade e ciclo permanente'
    },
    reportItems: ['O framework ciclo-negócio para o Construtor', 'Como construir automações para fases baixas', 'O plano anti-burnout específico para seu tipo', 'Como comunicar ciclicidade aos clientes (e transformá-la em força)']
  }
};
