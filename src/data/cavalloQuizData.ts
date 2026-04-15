export interface CavalloAnswer {
  t: 'F' | 'T' | 'M' | 'A' | 'L';
  text: string;
  pts: string;
}

export interface CavalloQuestion {
  q: string;
  sub: string;
  a: CavalloAnswer[];
}

export interface CavalloPower {
  name: string;
  sub: string;
}

export interface CavalloScore {
  l: string;
  p: number;
}

export interface CavalloCompanionData {
  prompts: string[];
  mod1: string;
  mod2: string;
  week1: string;
  week2: string;
  week3: string;
  week4: string;
}

export interface CavalloResultType {
  color: string;
  cd: string;
  cl: string;
  label: string;
  name: string;
  tagline: string;
  tags: string[];
  intro: string;
  desc: string;
  cosmicMsg: string;
  powers: CavalloPower[];
  blinds: CavalloPower[];
  scores: CavalloScore[];
  biz: string;
  companion: CavalloCompanionData;
  reportItems: string[];
}

export const CAVALLO_ELEMENTS: Record<string, string> = { F: 'Fire', T: 'Earth', M: 'Metal', A: 'Water', L: 'Wood' };
export const CAVALLO_ICONS: Record<string, string> = { F: '🔥', T: '🌍', M: '⚔️', A: '🌊', L: '🌿' };
export const CAVALLO_SEASONS: Record<string, string> = { F: 'Summer of Combustion', T: 'Center of Sedimentation', M: 'Autumn of Crystallization', A: 'Winter of Dissolution', L: 'Spring of Germination' };
export const CAVALLO_ALLIES: Record<string, string> = { F: 'Earth', T: 'Fire', M: 'Water', A: 'Metal', L: 'Earth' };
export const CAVALLO_SHADOWS: Record<string, string> = { F: 'Metal', T: 'Wood', M: 'Fire', A: 'Earth', L: 'Metal' };

export const CAVALLO_QUESTIONS: CavalloQuestion[] = [
  {q:"The Year of the Horse amplifies your deepest energy. Which phrase resonates with your essence right now?",sub:"Don't overthink it. Your body knows before your mind.",a:[
    {t:"F",text:"I feel a fire inside burning for freedom — something must change, and it must change now",pts:"Element: Fire · Liberation impulse"},
    {t:"T",text:"I have an inner solidity the world doesn't see yet — I know who I am, but I remain invisible",pts:"Element: Earth · Hidden depth"},
    {t:"M",text:"My ambition is a blade — I cut everything superfluous to reach excellence",pts:"Element: Metal · Precision and power"},
    {t:"A",text:"I adapt to those around me so well that sometimes I forget who I really am",pts:"Element: Water · Fluidity and dissolution"},
    {t:"L",text:"Something in me is dying and something new is growing — I'm in full metamorphosis",pts:"Element: Wood · Growth and rebirth"}
  ]},
  {q:"When you introduce yourself to someone new, what energy do you bring into the room?",sub:"Observe your automatic energy pattern.",a:[
    {t:"M",text:"I talk about what I've built — results, projects, skills. My value is in my output",pts:"Metal: identity in performance"},
    {t:"A",text:"I become what the other person wants to see — a perfect chameleon",pts:"Water: fluid and adaptive identity"},
    {t:"F",text:"I'm direct and authentic — I'm not interested in pleasing everyone, I'm interested in being real",pts:"Fire: direct and untamable identity"},
    {t:"T",text:"I'm reserved — I reveal little until I trust. My depth isn't for everyone",pts:"Earth: protected and deep identity"},
    {t:"L",text:"I struggle to say who I am — I'm in such a deep moment of transition that my name isn't enough anymore",pts:"Wood: identity in germination"}
  ]},
  {q:"2026 brings an energy of radical transformation. What's your relationship with change?",sub:"The most honest answer, not the most spiritual one.",a:[
    {t:"F",text:"I actively seek it — I break everything that doesn't work, even when it hurts",pts:"Fire: catalyst of change"},
    {t:"L",text:"I'm living it now — I didn't choose it but it's transforming me completely",pts:"Wood: traversing metamorphosis"},
    {t:"T",text:"I grow in silence — my change is slow, deep, almost invisible from outside",pts:"Earth: underground evolution"},
    {t:"A",text:"I adapt to everything — maybe too much. I change shape with the environment but lose my center",pts:"Water: adaptation without anchors"},
    {t:"M",text:"I plan it — change for me is a project with goals, timelines, and results",pts:"Metal: engineered change"}
  ]},
  {q:"Every element has a shadow. What's your strongest energy block right now?",sub:"The shadow is where the greatest growth lives.",a:[
    {t:"A",text:"The fear of judgment — I'm afraid of being rejected if I show who I really am",pts:"Water Shadow: dissolution in others' judgment"},
    {t:"M",text:"I can't stop — I run toward the next goal without ever feeling I've arrived",pts:"Metal Shadow: infinite performance trap"},
    {t:"F",text:"I run from anything that feels like a cage — but sometimes I also run from what I need",pts:"Fire Shadow: flight as default energy"},
    {t:"T",text:"I don't let myself be seen — I have a universe inside that stays blocked, invisible, unexpressed",pts:"Earth Shadow: chronic invisibility"},
    {t:"L",text:"I don't know who I'm becoming yet — the old me is dead but the new one hasn't taken shape yet",pts:"Wood Shadow: the limbo of transformation"}
  ]},
  {q:"How do you relate to your personal value?",sub:"This is often the most uncomfortable question in the blueprint.",a:[
    {t:"A",text:"My value depends too much on how others see me — I know it, but I can't change it",pts:"Water: externalized value"},
    {t:"M",text:"I only feel valuable when I produce results — without output, the void scares me",pts:"Metal: value tied to production"},
    {t:"T",text:"I know I have immense value but I struggle to communicate it — the world sees 10% of who I am",pts:"Earth: present but invisible value"},
    {t:"F",text:"My value lies in my freedom and authenticity — but sometimes I wonder if the world recognizes it",pts:"Fire: value in independence"},
    {t:"L",text:"I'm rebuilding my sense of value from scratch — the old one collapsed with the crisis",pts:"Wood: value under reconstruction"}
  ]},
  {q:"When you're under pressure, which elemental energy activates automatically?",sub:"Think about the last time your system went into overload.",a:[
    {t:"A",text:"I disappear — I become what others need and my center dissolves completely",pts:"Water under stress: dissolution of self"},
    {t:"M",text:"I stiffen — I become a war machine, cut emotions, and produce",pts:"Metal under stress: cold hyper-functioning"},
    {t:"F",text:"I flee — my first reaction is to distance myself from everything and find space to breathe",pts:"Fire under stress: protective flight"},
    {t:"L",text:"I collapse... then I rise again. Every crisis destroys and rebuilds me stronger",pts:"Wood under stress: cyclical death and rebirth"},
    {t:"T",text:"I retreat into silence — I process everything internally, deeply, before acting",pts:"Earth under stress: underground processing"}
  ]},
  {q:"What do people who know you well tell you most often?",sub:"Recurring feedback reveals your element.",a:[
    {t:"F",text:"'You're too independent — sometimes it seems like you don't need anyone'",pts:"Fire feedback: autonomy perceived as distance"},
    {t:"M",text:"'You don't need to prove anything to anyone — you're already enough as you are'",pts:"Metal feedback: unrequested performance"},
    {t:"A",text:"'Stop worrying about what others think — just be yourself finally'",pts:"Water feedback: dependence visible from outside"},
    {t:"T",text:"'You're stronger and more capable than you believe — you should trust your power more'",pts:"Earth feedback: unexpressed hidden potential"},
    {t:"L",text:"'You've changed so much lately — I barely recognize you (in a good way)'",pts:"Wood feedback: transformation visible to others"}
  ]},
  {q:"When you imagine the highest version of yourself — the 2026 version — what do you see?",sub:"Don't censor yourself. Your highest element speaks through this vision.",a:[
    {t:"F",text:"Someone completely free — living on their own terms without compromises or cages",pts:"Fire vision: total freedom as destiny"},
    {t:"T",text:"Someone powerful and silent — who doesn't need to prove anything because presence is enough",pts:"Earth vision: natural authority and magnetic presence"},
    {t:"M",text:"Someone who has built something extraordinary — recognized as a master in their field",pts:"Metal vision: recognized excellence"},
    {t:"L",text:"Someone completely new — a version of me I don't know yet but feel arriving like a tide",pts:"Wood vision: pure becoming"},
    {t:"A",text:"Someone who knows who they are without asking anyone for confirmation — centered, solid, internally indestructible",pts:"Water vision: inner stability finally achieved"}
  ]},
  {q:"The 2026 Fire Horse carries a specific message for each element. What do you need most in this phase?",sub:"The element you choose here reveals your next season.",a:[
    {t:"F",text:"Transform my freedom into construction — no more flight, but architecting a free life",pts:"Fire need: from flight to free construction"},
    {t:"M",text:"Separate my value from my productivity — discover who I am with the engine off",pts:"Metal need: intrinsic value beyond output"},
    {t:"A",text:"Find my center — stop seeking validation and start giving it to myself",pts:"Water need: self-validation as daily practice"},
    {t:"T",text:"Make myself visible — bring out my inner universe without fear of being misunderstood",pts:"Earth need: emergence and authentic expression"},
    {t:"L",text:"A system to guide me through rebirth — I don't want to go back, I want to build the new",pts:"Wood need: structure for metamorphosis"}
  ]},
  {q:"Which cosmic cycle do you feel you're living right now?",sub:"The five cycles alternate through life. One is active now.",a:[
    {t:"L",text:"Germination Cycle — something is being born in me that doesn't have a name yet",pts:"Wood cycle: inner spring, beginning of the new"},
    {t:"F",text:"Combustion Cycle — everything is burning and what remains will be pure",pts:"Fire cycle: radical summer, purification"},
    {t:"T",text:"Sedimentation Cycle — I'm becoming more solid, deeper, more rooted",pts:"Earth cycle: transition, deep integration"},
    {t:"M",text:"Crystallization Cycle — I'm refining who I am, cutting the superfluous forever",pts:"Metal cycle: autumn of essence, purity"},
    {t:"A",text:"Dissolution Cycle — the old is dying to make space for the new, and I'm scared but also trusting",pts:"Water cycle: winter of ego, renewal"}
  ]},
  {q:"Every element has an ally and an antagonist. Which elemental relationship resonates most with you?",sub:"The ally amplifies you. The antagonist challenges you to grow.",a:[
    {t:"F",text:"I need roots (Earth) to not burn out — but structure suffocates me. My conflict is freedom vs stability",pts:"Fire seeks Earth: fundamental conflict"},
    {t:"T",text:"I need expression (Fire) to not stay invisible — but exposing myself terrifies me",pts:"Earth seeks Fire: visibility conflict"},
    {t:"M",text:"I need flexibility (Water) to not break — but letting go of control anguishes me",pts:"Metal seeks Water: control conflict"},
    {t:"A",text:"I need structure (Metal) to not scatter — but every form feels like a cage",pts:"Water seeks Metal: identity conflict"},
    {t:"L",text:"I need patience (Earth) to not force growth — but waiting consumes me",pts:"Wood seeks Earth: timing conflict"}
  ]},
  {q:"The Year of the Horse ends February 16, 2027. If you could choose ONE transformation completed by that date, what would it be?",sub:"The last question — the most powerful in the blueprint.",a:[
    {t:"F",text:"Living completely on my own terms — authentic freedom, not flight. Construction, not destruction",pts:"Fire 2026 destination: constructive freedom"},
    {t:"M",text:"Aligning who I am with what I do — enough empty performance. Excellence with soul",pts:"Metal 2026 destination: identity alignment"},
    {t:"A",text:"Knowing who I am without asking anyone for permission — total inner sovereignty",pts:"Water 2026 destination: personal sovereignty"},
    {t:"T",text:"That the world discovers who I really am — total emergence, without fear of shining",pts:"Earth 2026 destination: emergence and visibility"},
    {t:"L",text:"Completing the rebirth — closing the old chapter and opening the new one with all my strength",pts:"Wood 2026 destination: complete rebirth"}
  ]}
];

export const CAVALLO_RESULT_DATA: Record<string, CavalloResultType> = {
  F:{
    color:'#E85C3A',cd:'rgba(232,92,58,.1)',cl:'rgba(232,92,58,.25)',
    label:'Element 01 · Fire 🔥',name:'Fire Horse',
    tagline:'The untamable spirit. With the right system, your flame becomes construction — not destruction.',
    tags:['Dominant Fire','Radical freedom','Wild authenticity','Cycle: Combustion'],
    intro:`Your dominant element is <strong>Fire</strong>. The Year of the Horse 2026 amplifies your already incandescent energy — this is your year of maximum power, but also maximum risk.`,
    desc:`You are the Horse in its purest form: <strong>free, untamable, impossible to domesticate</strong>. Your authenticity is your rarest superpower — in a world of conformists, you are a fire that doesn't go out.<br><br>But Fire has a shadow: it burns. You break relationships, leave jobs, change cities. Every time something feels like a cage — even when it isn't — your automatic reaction is to run. And every escape gives you a moment of pure freedom... followed by emptiness.<br><br>The cosmic message of 2026 for you is clear: <strong>you don't need to extinguish the fire. You need to give it direction.</strong> A Fire Horse that learns to run where it matters becomes unstoppable. Your blueprint is to move from combustion to construction.`,
    cosmicMsg:`The Year of the Fire Horse is your double year — Fire on Fire. Explosive energy, but it needs a structure to contain it without extinguishing it. Your elemental ally is <strong>Earth</strong>: roots, depth, patience. Your antagonist is <strong>Metal</strong>: too much structure kills you.`,
    powers:[{name:'Radical authenticity',sub:"You can't fake it — and that's your purest form of magnetism"},{name:'Courage to break',sub:'You break what doesn\'t work when everyone else stays stuck'},{name:'Elemental independence',sub:'Your system works without needing external validation'},{name:'Instinctive vision',sub:'You see the truth before others — your instinct is your oracle'}],
    blinds:[{name:'Flight as default',sub:'You run from good things too when they get too close'},{name:'Structural solitude',sub:'Extreme independence isolates you from powerful allies'},{name:'Building is hard',sub:'Every structure feels like a cage — even the ones you need'},{name:'Burning bridges',sub:'You destroy connections for the need for air — then you regret it'}],
    scores:[{l:'Fire',p:96},{l:'Freedom',p:94},{l:'Authenticity',p:92},{l:'Stability',p:32},{l:'Patience',p:35}],
    biz:`Your 2026 blueprint is to <strong>build a structurally free life</strong> — not freedom from structure, but the structure of freedom. The Fire Horse runs where it decides, not where the wind takes it.`,
    companion:{
      prompts:['The freedom you seek: is it freedom FROM something or freedom FOR something? Fire that burns to destroy is different from Fire that burns to illuminate.','What are you avoiding under the name of "freedom"? What structure could you accept without feeling caged?','Write a letter to your inner Earth element — the part of you that desires roots. What would you tell it?'],
      mod1:'The Fire-Earth framework for free construction',mod2:'How to create structure without extinguishing the flame',
      week1:'Elemental diagnosis: where Fire protects you and where it burns you',week2:'The structure-freedom framework for the Fire Horse',week3:'Relationships and roots for untamable spirits',week4:'The permanent cosmic system of your Fire'
    },
    reportItems:['Your complete Fire cosmic blueprint for 2026','How to transform flight into free construction','The 3 structures that work for the Fire Horse','Elemental map: allies, antagonists, and cycles of your year']
  },
  T:{
    color:'#C8A84B',cd:'rgba(200,168,75,.1)',cl:'rgba(200,168,75,.25)',
    label:'Element 02 · Earth 🌍',name:'Earth Horse',
    tagline:'The silent power. The world is waiting to discover the depth you hide.',
    tags:['Dominant Earth','Natural authority','Hidden depth','Cycle: Sedimentation'],
    intro:`Your dominant element is <strong>Earth</strong>. You're the mountain in a world that runs — but the Year of the Horse 2026 asks you to move. Not change who you are. Show who you are.`,
    desc:`You've built an inner world of rare depth. Clear values, firm principles, defined vision. But all of this stays <strong>beneath the surface</strong>. The world sees 10% of who you are — and that 10% doesn't do you justice.<br><br>It's not shyness. It's an energy choice: Earth doesn't expose itself. It accumulates, sediments, integrates. But this protection has a cosmic cost: opportunities don't find you, people don't truly know you, your value stays buried.<br><br>The 2026 Horse's message for Earth is powerful: <strong>the Year of the Horse brings movement to the most static element</strong>. It's the perfect cosmic moment to emerge — not by shouting, but with the dignity that characterizes you. The mountain doesn't need to run. It needs to become visible.`,
    cosmicMsg:`The Year of the Horse brings Fire energy to your Earth — the warmth that melts resistance to exposure. Your elemental ally is <strong>Fire</strong>: expression, visibility, the courage to show yourself. Your antagonist is <strong>Wood</strong>: growth that's too rapid destabilizes your foundations.`,
    powers:[{name:'Inner solidity',sub:"Your sense of self doesn't waver with opinions — you're the rock"},{name:'Natural authority',sub:'When you speak, people listen — because you speak rarely and well'},{name:'Relational depth',sub:'Your connections are few but extraordinarily deep'},{name:'Incorruptible integrity',sub:"You can't be bought — your values are your element"}],
    blinds:[{name:'Chronic invisibility',sub:"Your value exists but the world can't see it"},{name:'Blocked expression',sub:'You have a universe inside that struggles to find words'},{name:'Slow to trust',sub:'Your protection keeps you safe but also isolated'},{name:'Buried opportunities',sub:"You don't apply, don't expose yourself — and the world passes by"}],
    scores:[{l:'Earth',p:97},{l:'Depth',p:93},{l:'Stability',p:90},{l:'Expression',p:32},{l:'Visibility',p:28}],
    biz:`Your 2026 blueprint is to <strong>bring out what you have inside</strong> — without forcing, without shouting, with the dignity of the mountain. The Horse gives you speed. Earth gives you direction.`,
    companion:{
      prompts:['What would you tell the world if you knew it would be understood exactly as you mean it? Write without filters.','Which part of you are you protecting that deserves to be seen? Earth hides gems — what are yours?','Who is one person you could show 10% more of yourself to this week? The Fire ally asks for a small act of courage.'],
      mod1:'The Emergence method for the Earth Horse',mod2:'How to communicate your essence without betraying depth',
      week1:'Elemental diagnosis: the gap between who you are inside and who they see outside',week2:'Authentic expression for the Earth element',week3:'Dignified visibility: Fire ally as the engine',week4:'The permanent cosmic system of your Earth'
    },
    reportItems:['Your complete Earth cosmic blueprint for 2026','How to build visibility without losing depth','The Emergence method for bringing out your inner universe','Elemental map: allies, antagonists, and cycles of your year']
  },
  M:{
    color:'#A0A0B0',cd:'rgba(160,160,176,.1)',cl:'rgba(160,160,176,.28)',
    label:'Element 03 · Metal ⚔️',name:'Metal Horse',
    tagline:'Excellence incarnate. It\'s time to discover who you are when you stop running.',
    tags:['Dominant Metal','Performance and precision','Ambition as armor','Cycle: Crystallization'],
    intro:`Your dominant element is <strong>Metal</strong>. The sharpest blade in the room — but the Year of the Horse 2026 asks you: what happens when the blade stops?`,
    desc:`You've built an impressive life. Results, skills, recognition — you're the person who produces, the machine that never stops. People admire you and seek you for your effectiveness. But there's a secret almost no one knows: <strong>without output, you feel empty</strong>.<br><br>Metal is the element of purification and form. Everything you touch takes structure. But you've fused your identity with your performance so deeply that stopping equals disappearing. If you're not producing, who are you?<br><br>The 2026 Fire Horse's message for Metal is the most uncomfortable: <strong>Fire melts Metal</strong>. This year will ask you to melt — not to destroy you, but to reforge you into a more authentic form. A form that exists even with the engine off.`,
    cosmicMsg:`The Year of the Horse brings Fire that melts Metal — your cosmic antagonist is at maximum power. But this isn't an attack: it's an opportunity for reforging. Your ally is <strong>Water</strong>: flexibility, emotion, letting go of control.`,
    powers:[{name:'Execution capacity',sub:'You do more in a day than others do in a week'},{name:'Excellence standards',sub:'Your work is always superior quality — quality is your brand'},{name:'Elemental discipline',sub:"You don't need motivation — you have structure and willpower"},{name:'Results magnetism',sub:'People seek you because you achieve things impossible for others'}],
    blinds:[{name:'Identity = output',sub:"If you don't produce, you feel you don't exist — the void terrifies you"},{name:'Impossible rest',sub:'Stopping feels like failure, not a conscious choice'},{name:'Emotional armor',sub:'Performance hides fragilities you show to no one'},{name:'Functional relationships',sub:'You tend to connect for utility — true intimacy exposes you too much'}],
    scores:[{l:'Metal',p:98},{l:'Discipline',p:92},{l:'Performance',p:95},{l:'Intrinsic value',p:28},{l:'Rest',p:24}],
    biz:`Your 2026 blueprint is to <strong>separate who you are from what you do</strong>. Discover that your value exists even in stillness. Don't stop running — learn to run for the right reasons.`,
    companion:{
      prompts:["If you couldn't work for an entire month tomorrow, who would you be? The Water ally asks you to feel yourself, not do.",'When was the last time you felt valuable without having produced anything? If you can\'t remember, that\'s the signal.','What are you trying to prove — and to whom? Metal cuts all the superfluous. Cut this illusion too.'],
      mod1:'The Metal-Water framework for intrinsic value',mod2:'How to find who you are with the engine off',
      week1:'Elemental diagnosis: where performance protects you and where it imprisons you',week2:'Identity beyond output for the Metal Horse',week3:'Authentic relationships and Water as ally',week4:'The permanent cosmic system of your Metal'
    },
    reportItems:['Your complete Metal cosmic blueprint for 2026','How to stop confusing value with productivity','The reforging framework: who you are when Fire melts you','Elemental map: allies, antagonists, and cycles of your year']
  },
  A:{
    color:'#5B8FB9',cd:'rgba(91,143,185,.1)',cl:'rgba(91,143,185,.28)',
    label:'Element 04 · Water 🌊',name:'Water Horse',
    tagline:'Cosmic adaptability. It\'s time to stop asking permission to exist.',
    tags:['Dominant Water','Deep empathy','Fluid identity','Cycle: Dissolution'],
    intro:`Your dominant element is <strong>Water</strong>. Fluid, adaptive, empathetic — but the Year of the Horse 2026 asks you to find a form that is yours and yours alone.`,
    desc:`You're probably the most empathetic person in the room. You feel others so deeply that you know exactly what they want to see — and you give it to them. With the boss you're professional, with friends you're light, with the partner you're whatever's needed. <strong>But none of these versions is completely you.</strong><br><br>Water is the most powerful element: it adapts to any container, erodes any mountain, always finds the way. But without its own container, it disperses. And in moments of silence — when you're alone — Water no longer knows what shape it has.<br><br>The 2026 Horse's message for Water is this: <strong>the Horse runs in a precise direction</strong>. Water that flows everywhere goes nowhere. Your blueprint is to find your course — a center that doesn't change with the room you enter.`,
    cosmicMsg:`The Year of the Horse brings Fire to Water — energy that evaporates dispersion and forces you to choose a direction. Your elemental ally is <strong>Metal</strong>: structure, form, clear boundaries. Your antagonist is <strong>Earth</strong>: too much rigidity suffocates you, but zero form dissolves you.`,
    powers:[{name:'Cosmic empathy',sub:'You read people with a precision others don\'t possess'},{name:'Universal adaptability',sub:'You function in any context — your fluidity is a superpower'},{name:'Natural diplomacy',sub:'You resolve conflicts and create harmony everywhere — you\'re the social glue'},{name:'Emotional intelligence',sub:'You understand dynamics before they become visible to others'}],
    blinds:[{name:'Unstable center',sub:'Your identity changes with the company — and you lose yourself in the current'},{name:'Validation dependence',sub:'You need others to confirm that your form is okay'},{name:'Dissolved boundaries',sub:"You say yes when you should say no — for fear of being rejected"},{name:'Submerged own voice',sub:'Others\' opinions cover your inner voice like a tide'}],
    scores:[{l:'Water',p:96},{l:'Empathy',p:94},{l:'Adaptability',p:92},{l:'Stable center',p:25},{l:'Boundaries',p:30}],
    biz:`Your 2026 blueprint is to <strong>build a solid identity center</strong> — a nucleus that doesn't dissolve with the current. Don't lose the fluidity. Add a shore.`,
    companion:{
      prompts:['Who are you when no one is watching? Water without a container: what shape does it have? Describe that shape without judging it.','Which opinion did you change today to please someone? The Metal ally asks you to observe without judging yourself.','What is ONE thing you truly think but never say out loud? Write it here — this is your safe container.'],
      mod1:'The Water-Metal framework for a stable center',mod2:'How to build self-validation without losing empathy',
      week1:'Elemental diagnosis: your forms and the center beneath them',week2:'Building the shore: the nucleus that doesn\'t move',week3:'Boundaries, own voice, and Metal as ally',week4:'The permanent cosmic system of your Water'
    },
    reportItems:['Your complete Water cosmic blueprint for 2026','How to build self-validation without isolating from the current','The 3 adaptation patterns that make you lose your form','Elemental map: allies, antagonists, and cycles of your year']
  },
  L:{
    color:'#6AAF5C',cd:'rgba(106,175,92,.1)',cl:'rgba(106,175,92,.25)',
    label:'Element 05 · Wood 🌿',name:'Wood Horse',
    tagline:'The old bark has fallen. The new trunk is growing. This is the most powerful moment.',
    tags:['Dominant Wood','Cyclical rebirth','Active metamorphosis','Cycle: Germination'],
    intro:`Your dominant element is <strong>Wood</strong>. You're in full germination — and the Year of the Horse 2026 is the cosmic wind that carries your seed where it needs to be planted.`,
    desc:`This is the most uncomfortable and most powerful moment of your life. You're no longer who you were — the job, relationships, certainties of the old version are over. But you're not yet who you'll be. <strong>You're the seed in the dark earth, before the sprout breaks the surface.</strong><br><br>Wood is the element of growth, rebirth, becoming. Every great tree was first a seed in the dark. But the dark is scary — and the temptation to return to the old form is constant.<br><br>The 2026 Horse's message for Wood is the most important: <strong>the Horse brings speed to your growth</strong>. What in other years would be a slow process, in 2026 accelerates. Don't force it, but don't stop it. Your blueprint is to inhabit the transition with trust and build the new piece by piece.`,
    cosmicMsg:`The Year of the Horse brings Fire to Wood — and Fire feeds Wood (wood burns, but heat makes seeds germinate). Amplified growth energy. Your elemental ally is <strong>Earth</strong>: patience, nurturing, grounding. Your antagonist is <strong>Metal</strong>: cutting too early kills the sprout.`,
    powers:[{name:'Cyclical resilience',sub:'Every time you fall, you rise stronger and clearer — it\'s in your DNA'},{name:'Forced authenticity',sub:'Crisis has eliminated the superfluous — you\'re more real than ever'},{name:'Empathy from experience',sub:'Those who\'ve traversed darkness understand others at a level no one else reaches'},{name:'Vision of the new',sub:'You see possibilities that those who\'ve never lost anything can\'t even imagine'}],
    blinds:[{name:'Identity limbo',sub:"You don't know who you are — and the uncertainty is paralyzing like frost"},{name:'Dangerous nostalgia',sub:'The temptation to return to the old bark is strong and constant'},{name:'Sprout fragility',sub:'Every day is a delicate balance between growth and relapse'},{name:'Cosmic impatience',sub:'You want the new to arrive now — but Wood grows at its own pace'}],
    scores:[{l:'Wood',p:92},{l:'Resilience',p:88},{l:'Authenticity',p:87},{l:'Stability',p:28},{l:'Clarity',p:35}],
    biz:`Your 2026 blueprint is to <strong>inhabit the transition with cosmic trust</strong> and build the new identity with intention. The Horse accelerates. Earth nurtures. You grow.`,
    companion:{
      prompts:['What from the old version of you do you want to keep — and what should be left in the earth as nourishment for the new? Wood transforms everything.','What is one new thing you\'ve discovered about yourself in the last 30 days? The sprout grows every day — even when you don\'t see it.','Write a letter to the person you\'re becoming. You don\'t know them yet — but Wood already knows its form. Trust it.'],
      mod1:'The Germination framework for identities in metamorphosis',mod2:'How to build the new without nostalgia for the old bark',
      week1:'Elemental diagnosis: what has died, what is being born, what nurtures',week2:'Inhabiting the dark: surviving the transition with Earth as ally',week3:'Building the new: identity piece by piece, branch by branch',week4:'The permanent cosmic system of your Wood'
    },
    reportItems:['Your complete Wood cosmic blueprint for 2026','How to build the new identity without nostalgia for the past','The 3 cosmic signs that your germination is working','Elemental map: allies, antagonists, and cycles of your year']
  }
};
