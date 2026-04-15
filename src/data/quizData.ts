export interface Answer {
  t: 'V' | 'K' | 'C' | 'D' | 'S';
  text: string;
  pts: string;
}

export interface Question {
  q: string;
  sub: string;
  a: Answer[];
}

export interface Power {
  name: string;
  sub: string;
}

export interface Score {
  l: string;
  p: number;
}

export interface CompanionData {
  prompts: string[];
  mod1: string;
  mod2: string;
  week1: string;
  week2: string;
  week3: string;
  week4: string;
}

export interface ResultType {
  color: string;
  cd: string;
  cl: string;
  label: string;
  name: string;
  tagline: string;
  tags: string[];
  intro: string;
  desc: string;
  powers: Power[];
  blinds: Power[];
  scores: Score[];
  biz: string;
  companion: CompanionData;
  reportItems: string[];
}

export const QUESTIONS: Question[] = [
  {q:"When a new idea hits you, what's your first reaction?",sub:"Pick the one that resonates most.",a:[
    {t:"V",text:"I mentally architect it into a complete system before doing anything",pts:"Orientation: systems & structure"},
    {t:"K",text:"I launch it immediately — I think while I act, the energy is now",pts:"Orientation: action & impulse"},
    {t:"C",text:"I talk to someone about it — understanding how it can help others lights me up",pts:"Orientation: people & relationships"},
    {t:"D",text:"I dive into deep research until I understand everything",pts:"Orientation: knowledge & depth"},
    {t:"S",text:"It depends on my cycle — sometimes I explode with energy, sometimes I need silence",pts:"Orientation: cyclical energy"}
  ]},
  {q:"What blocks you most often in your work?",sub:"Be honest — this is the key question.",a:[
    {t:"V",text:"I can't start unless everything is perfect in my head first",pts:"Block: paralyzing perfectionism"},
    {t:"K",text:"I get bored before finishing — the excitement fades when the boring part arrives",pts:"Block: finish line aversion"},
    {t:"C",text:"I always end up dealing with other people's problems instead of my own",pts:"Block: porous boundaries"},
    {t:"D",text:"I know everything but can't communicate it simply",pts:"Block: invisible to the market"},
    {t:"S",text:"My energy crashes destroy what I built during the high phase",pts:"Block: cycle management"}
  ]},
  {q:"How would you describe your relationship with energy at work?",sub:"Think about the last 3 months.",a:[
    {t:"S",text:"I go in phases: extreme productivity followed by total recovery",pts:"Pattern: high-amplitude cycles"},
    {t:"D",text:"When I find something I'm passionate about, I can work 12 hours without noticing",pts:"Pattern: deep hyperfocus"},
    {t:"K",text:"Energy comes in bursts — high at the start of every project, then fades",pts:"Pattern: dopamine spikes"},
    {t:"V",text:"I'm energized when planning — execution drains me",pts:"Pattern: vision yes, execution no"},
    {t:"C",text:"Other people's energy charges me — relationships fuel me",pts:"Pattern: energetic co-dependency"}
  ]},
  {q:"Looking at the last 12 months, what happened with your projects?",sub:"Choose the most honest answer.",a:[
    {t:"K",text:"I started many great things that I never finished",pts:"Pattern: serial without completion"},
    {t:"V",text:"I spent a lot of time planning — I produced less than I would have liked",pts:"Pattern: architecture without construction"},
    {t:"C",text:"I helped others build their vision more than my own",pts:"Pattern: investing in others"},
    {t:"D",text:"I deepened a lot but struggle to turn expertise into a concrete offer",pts:"Pattern: unmonetized expertise"},
    {t:"S",text:"I had extraordinary periods and periods of total blockage — strong discontinuity",pts:"Pattern: productive roller coaster"}
  ]},
  {q:"How do you relate to others in a professional context?",sub:"Which phrase describes you best?",a:[
    {t:"C",text:"I sense other people's needs before they even express them",pts:"Relationship: structural empathy"},
    {t:"V",text:"I prefer working alone — collaborations often don't understand where I'm going",pts:"Relationship: visionary solitude"},
    {t:"D",text:"I enjoy sharing my knowledge with those who are genuinely interested",pts:"Relationship: mentoring & transmission"},
    {t:"K",text:"I love brainstorming — the execution part with others slows me down",pts:"Relationship: collaborative sparks"},
    {t:"S",text:"In high phases I'm magnetic — in low phases I need to isolate",pts:"Relationship: presence-retreat alternation"}
  ]},
  {q:"What do people who know you well say most often?",sub:"Choose the most recurring one.",a:[
    {t:"V",text:"'You always have grand ideas — but you never actually realize them'",pts:"Feedback: vision without execution"},
    {t:"K",text:"'You're full of energy and ideas — but you never finish what you start'",pts:"Feedback: creative dispersion"},
    {t:"C",text:"'You do everything for everyone — but you never take care of yourself'",pts:"Feedback: relational self-sacrifice"},
    {t:"D",text:"'You're brilliant — you should put yourself out there more'",pts:"Feedback: invisible talent"},
    {t:"S",text:"'When you're ON you're unstoppable — but then you disappear for weeks'",pts:"Feedback: evident cyclicality"}
  ]},
  {q:"What is your relationship with money and pricing your work?",sub:"This is often the hardest question.",a:[
    {t:"D",text:"I know my work is worth a lot but I feel embarrassed asking for high prices",pts:"Block: humble expert syndrome"},
    {t:"V",text:"I struggle to monetize — the vision is clear but the concrete product isn't",pts:"Block: vision-product gap"},
    {t:"C",text:"I tend to offer too much for too little — clients almost become friends",pts:"Block: value-relationship confusion"},
    {t:"K",text:"I launch offers impulsively — random pricing, spontaneous discounts",pts:"Block: reactive pricing"},
    {t:"S",text:"In high periods I earn well — in low periods everything stops",pts:"Block: unstable cyclical revenue"}
  ]},
  {q:"When you're in your peak performance state, what's happening?",sub:"Describe the context that makes you function best.",a:[
    {t:"D",text:"I'm exploring something in depth — total hyperfocus and pure satisfaction",pts:"Peak: total immersion"},
    {t:"V",text:"I'm designing a complex system — my mind is crystal clear and connects everything",pts:"Peak: systemic architecture"},
    {t:"S",text:"I'm in the high phase of the cycle — sky-high energy, flowing ideas, fast execution",pts:"Peak: cyclical momentum"},
    {t:"C",text:"I'm facilitating something — bringing people to collaborate, creating synergies",pts:"Peak: relational catalysis"},
    {t:"K",text:"I'm starting something new — the launch phase is my zone of genius",pts:"Peak: creative ignition"}
  ]},
  {q:"What is your main challenge in building a business?",sub:"Choose the one that feels most true right now.",a:[
    {t:"K",text:"Going from idea to concrete offer — and maintaining it over time without getting bored",pts:"Challenge: from idea to stable system"},
    {t:"V",text:"Simplifying enough to clearly communicate what I offer",pts:"Challenge: synthesis of complexity"},
    {t:"C",text:"Building something that is truly mine — not in service of someone else's vision",pts:"Challenge: owning my own vision"},
    {t:"D",text:"Making myself visible and communicating the real value of what I can do",pts:"Challenge: marketing deep expertise"},
    {t:"S",text:"Building a system that works even when I'm in a low phase",pts:"Challenge: anti-burnout architecture"}
  ]},
  {q:"What do you need most right now to make a leap?",sub:"The last question — the most important.",a:[
    {t:"V",text:"A method to go from vision to action without waiting for perfection",pts:"Need: vision-execution bridge"},
    {t:"K",text:"A system that helps me finish what I start — and build on what works",pts:"Need: structured completion"},
    {t:"C",text:"Learning to put my needs at the center — building something that's truly mine",pts:"Need: self-centrality"},
    {t:"D",text:"Visibility and positioning — so the market finally knows I exist",pts:"Need: strategic emergence"},
    {t:"S",text:"An operating system calibrated on my cycles — that works in high and low phases",pts:"Need: sustainable cyclical system"}
  ]},
  // 3 NEW QUESTIONS (11-13)
  {q:"How do you typically make important decisions?",sub:"Think about the last big decision you made.",a:[
    {t:"V",text:"I map every possible scenario and choose the strategically optimal path",pts:"Decision: strategic mapping"},
    {t:"K",text:"I go with my gut — overthinking kills momentum",pts:"Decision: instinct-driven"},
    {t:"C",text:"I consult trusted people first — their perspectives shape my choice",pts:"Decision: collective input"},
    {t:"D",text:"I research extensively until the answer becomes undeniable",pts:"Decision: evidence-based"},
    {t:"S",text:"It depends on my phase — in highs I decide fast, in lows I freeze",pts:"Decision: phase-dependent"}
  ]},
  {q:"How do you manage your energy throughout the day?",sub:"Be honest about your actual patterns, not your ideal ones.",a:[
    {t:"S",text:"My energy is unpredictable — I ride the wave when it comes and rest when it crashes",pts:"Energy: wave-riding"},
    {t:"V",text:"I carefully plan my most creative work for peak hours and batch everything else",pts:"Energy: structured optimization"},
    {t:"K",text:"I chase whatever excites me — energy follows interest, not the clock",pts:"Energy: excitement-driven"},
    {t:"D",text:"Once I'm locked in, nothing can break my focus — but starting is the hard part",pts:"Energy: activation threshold"},
    {t:"C",text:"I draw energy from helping others — solo work drains me faster",pts:"Energy: relationally charged"}
  ]},
  {q:"When you need to create something new, what does your process look like?",sub:"Think about how ideas actually become reality for you.",a:[
    {t:"K",text:"I jump in and build as I go — the creation reveals itself through doing",pts:"Creative: improvised creation"},
    {t:"V",text:"I need the full picture in my mind before I touch anything",pts:"Creative: pre-visualization"},
    {t:"D",text:"I study how others have done it first, then build something deeper",pts:"Creative: research-informed"},
    {t:"C",text:"I co-create best — bouncing ideas with others makes everything better",pts:"Creative: collaborative synthesis"},
    {t:"S",text:"In bursts of intense inspiration that I capture before they fade",pts:"Creative: inspiration capture"}
  ]}
];

export const RESULT_DATA: Record<string, ResultType> = {
  V: {
    color: '#C8A84B', cd: 'rgba(200,168,75,.1)', cl: 'rgba(200,168,75,.25)',
    label: 'Type 01 · Architect', name: 'Visionary Architect',
    tagline: 'Builds cathedrals in the mind. Realizes them with the right system.',
    tags: ['Systems thinking', 'Complex vision', 'Strategic architecture'],
    intro: `Your brain is a <strong>systems processor</strong>. Where others see chaos, you see architectures. Where others see details, you see connections. This is your rare superpower — and also the source of your main block.`,
    desc: `It's not that you don't know what to do. Your vision is so complex and complete that no execution does it justice. You wait for a perfection that will never come. Meanwhile, people with 10% of your vision are building things you imagined years ago.<br><br>The solution isn't to stop being an architect. It's to learn to build <strong>foundations before cathedrals</strong>. An operating system calibrated on your type gives you the method to translate vision into action without betraying the quality you demand.`,
    powers: [{name: 'Systemic architecture', sub: 'You see complete systems before they exist'}, {name: 'Strategic thinking', sub: 'You connect information others never correlate'}, {name: 'Deep quality', sub: 'Your standard is rare in the market'}, {name: 'Long-term vision', sub: 'You think in years when others think in weeks'}],
    blinds: [{name: 'Paralyzing perfectionism', sub: 'Perfection is the enemy of done'}, {name: 'Delegating is hard', sub: 'No one understands the vision like you — but it isolates you'}, {name: 'Concrete products', sub: 'The gap between architecture and selling is your biggest'}, {name: 'Completing vs starting', sub: "You've started more things than you've finished"}],
    scores: [{l: 'Vision', p: 95}, {l: 'Strategy', p: 88}, {l: 'Execution', p: 38}, {l: 'Communication', p: 52}, {l: 'Energy', p: 64}],
    biz: `The model best suited to you is one that positions you as a <strong>strategic consultant or systems architect</strong>. Your value is in direction, design, vision. You need to get paid to think — and automate the doing.`,
    companion: {
      prompts: ['What is the first concrete action you could take today without waiting for perfection?', 'Identify ONE project you could complete in 48 hours. Just one.', 'What would happen if you launched the 80% perfect version this week?'],
      mod1: 'The Vision → MVP → Iteration cycle', mod2: 'How to communicate complexity simply',
      week1: 'Diagnosis: where your vision gets stuck', week2: 'The Bridge method: from idea to product in 7 days', week3: "Positioning and pricing for the Architect", week4: 'Permanent anti-perfectionism system'
    },
    reportItems: ['How to build an MVP of your vision without betraying it', 'Your architect pricing model', 'How to communicate complexity to the market simply', 'The 3 triggers of your perfectionism — and how to disable them']
  },
  K: {
    color: '#F4C318', cd: 'rgba(244,195,24,.08)', cl: 'rgba(244,195,24,.25)',
    label: 'Type 02 · Hunter', name: 'Spark Hunter',
    tagline: 'The most creative brain in the room. With the right system, also the most productive.',
    tags: ['Explosive creativity', 'Dopamine & launch', 'Lateral connections'],
    intro: `Your brain runs on <strong>dopamine sparks</strong>. Every new idea is a total ignition. You're capable of creative connections that most people never see.`,
    desc: `You don't have an idea problem. You have more in a day than most people have in a year. The problem is your nervous system is calibrated on beginnings — not endings. The excitement of launching is your drug. Maintenance work is your torment.<br><br>You probably have 10+ open projects right now. And a graveyard of brilliant ideas that never saw the market.<br><br>The solution isn't to become a "disciplined" person. It's to build a <strong>system that leverages sparks instead of fighting them</strong> — with short sprints and automatic completion mechanisms.`,
    powers: [{name: 'Explosive ideation', sub: 'You generate ideas others can\'t even see from afar'}, {name: 'Lateral creativity', sub: 'You connect domains no one had linked before'}, {name: 'Launch energy', sub: 'In the starting phase you\'re unstoppable and magnetic'}, {name: 'Rapid adaptability', sub: 'You change direction quickly when needed'}],
    blinds: [{name: '47 open projects', sub: 'The graveyard of good unfinished ideas'}, {name: 'Finish line aversion', sub: '80% done is worth zero without the final 20%'}, {name: 'Unstable monetization', sub: 'Random pricing, impulsive offers, no system'}, {name: 'Focus dispersion', sub: 'Too broad, not deep enough'}],
    scores: [{l: 'Creativity', p: 98}, {l: 'Launch', p: 92}, {l: 'Completion', p: 22}, {l: 'System', p: 31}, {l: 'Energy', p: 78}],
    biz: `The model for you is <strong>short sprints with concrete outputs</strong>. Fast digital products, intensive courses, creative consulting. Structure everything in 30-90 days max. Your business must be anti-boredom by design.`,
    companion: {
      prompts: ['Of all open projects, which one — if finished — would change your situation the most?', 'What is the smallest next possible step for your main project?', 'What have you been avoiding finishing for the longest?'],
      mod1: 'Sprint-Ship-Repeat: the method for spark brains', mod2: 'How to filter the 3 ideas to finish (and abandon the rest)',
      week1: 'Diagnosis: your non-completion pattern', week2: '25-minute sprints: finishing without getting bored', week3: 'Stable monetization for the Hunter', week4: 'Permanent anti-dispersion system'
    },
    reportItems: ['The Sprint-Ship-Repeat method for your type', 'How to identify the 3 ideas to finish (and abandon the rest)', 'The anti-impulsive pricing system for the Hunter', 'How to build a system that works in the boring parts']
  },
  C: {
    color: '#A87CDC', cd: 'rgba(168,124,220,.1)', cl: 'rgba(168,124,220,.28)',
    label: 'Type 03 · Catalyst', name: 'Connector Catalyst',
    tagline: "The heart of the ecosystem. Now it's time to build your own.",
    tags: ['Emotional intelligence', 'Network building', 'Vision for others'],
    intro: `Your brain is calibrated on <strong>people</strong>. You sense others' needs before they even express them. You're the bridge between visions and the people who realize them.`,
    desc: `You've probably helped many people build their things. You've been valuable for everyone. And while doing so, your vision waited in line.<br><br>It's not just altruism — it's also an avoidance mechanism. Taking care of others is safer than exposing yourself with your own project.<br><br>But you've reached a turning point. Your ability to connect people and build networks is a <strong>rare and valuable market skill</strong> — if you put it in service of something of your own.`,
    powers: [{name: 'Emotional intelligence', sub: 'You read rooms and people with extraordinary precision'}, {name: 'Network building', sub: 'You build relationships that last and deliver results'}, {name: 'Facilitation', sub: 'You bring people to work together fluidly'}, {name: 'Human leadership', sub: 'People follow you because they feel understood'}],
    blinds: [{name: 'Porous boundaries', sub: "Others enter your space and you don't close it"}, {name: 'Self-sacrifice', sub: 'You always put your needs last'}, {name: 'Your biz vs theirs', sub: 'You build for others better than for yourself'}, {name: 'Monetizing connections', sub: "You've networked for free for years — time to charge"}],
    scores: [{l: 'Empathy', p: 96}, {l: 'Relationships', p: 91}, {l: 'Own business', p: 41}, {l: 'Boundaries', p: 35}, {l: 'Visibility', p: 58}],
    biz: `Your ideal model is <strong>network consulting, community building, or advisory</strong>. Sell your ability to connect people and visions. Your product is your ecosystem.`,
    companion: {
      prompts: ['Today, what did you do for YOU — not for someone else?', 'Identify a professional relationship where you\'re giving more than you receive.', 'What is the most urgent boundary to set this week?'],
      mod1: 'How to build a connections business (and charge well for it)', mod2: 'The boundaries-value framework for the Catalyst',
      week1: 'Diagnosis: where you\'re investing your relational energy', week2: 'From facilitator to protagonist: building for yourself', week3: 'Monetizing connections — Catalyst pricing', week4: 'Healthy boundaries and your own business permanently'
    },
    reportItems: ['How to build a connections business and charge well for it', 'The boundaries-value framework for the Catalyst', 'How to go from facilitating others to starring in your own', 'The 3 relational self-sabotage patterns']
  },
  D: {
    color: '#4DADA0', cd: 'rgba(77,173,160,.1)', cl: 'rgba(77,173,160,.28)',
    label: 'Type 04 · Diver', name: 'Deep Diver',
    tagline: 'Master-level expertise. The market is just waiting to discover you.',
    tags: ['Hyperfocus', 'Deep expertise', 'Rare knowledge'],
    intro: `Your brain <strong>immerses</strong>. When you're passionate about something, you reach levels of competence most never touch. You're a rare and precious expert.`,
    desc: `The problem isn't what you know. The market doesn't know it. You're so busy diving deep that you have no time — or desire — to surface and make yourself visible.<br><br>There's something deeper: simplifying your knowledge feels like a translation, an impoverishment.<br><br>But the truth is: the market doesn't pay for complexity only you understand. It pays for <strong>transformations anyone can understand</strong>. Your job isn't to simplify expertise — it's to translate it into comprehensible results.`,
    powers: [{name: 'Productive hyperfocus', sub: 'In 4 hours you produce what others do in weeks'}, {name: 'Master-level expertise', sub: 'You know your field at a level few reach'}, {name: 'Absolute quality', sub: 'Your standard is your signature'}, {name: 'Non-obvious solutions', sub: 'You find solutions only deep knowers can see'}],
    blinds: [{name: 'Market invisibility', sub: 'Your talent exists but no one knows'}, {name: 'Complex communication', sub: 'You speak at expert level when the market wants simplicity'}, {name: 'Pricing rare value', sub: "You're probably selling too cheap"}, {name: 'Surfacing from immersion', sub: 'The surface — where sales happen — is uncomfortable'}],
    scores: [{l: 'Expertise', p: 97}, {l: 'Depth', p: 93}, {l: 'Visibility', p: 28}, {l: 'Marketing', p: 34}, {l: 'Communication', p: 45}],
    biz: `Your ideal model is <strong>high-level advisory, specialized consulting, or deep expertise products</strong>. High prices. Few clients. Maximum quality. Stop competing on volume and start on rarity.`,
    companion: {
      prompts: ['Explain what you do in ONE sentence that even non-experts understand.', 'Who solved a similar problem with less expertise? What can you learn from them?', 'What is the most specific result someone gets working with you?'],
      mod1: 'How to position yourself as a rare expert (not generic)', mod2: 'The method to communicate deep expertise simply',
      week1: 'Diagnosis: the gap between expertise and visibility', week2: 'Knowledge synthesis — from deep to understandable', week3: 'Positioning and pricing for the Diver', week4: 'Permanent emergence strategy'
    },
    reportItems: ['How to position yourself as a rare expert (not generic)', 'The method to communicate deep expertise simply', 'The pricing strategy for the Diver', 'How to become visible without feeling like a salesperson']
  },
  S: {
    color: '#F4A24A', cd: 'rgba(244,162,74,.1)', cl: 'rgba(244,162,74,.28)',
    label: 'Type 05 · Builder', name: 'Storm Builder',
    tagline: 'Cyclical energy. With the right system, every cycle is more powerful than the last.',
    tags: ['High-amplitude energy', 'Natural cyclicality', 'Deep resilience'],
    intro: `Your brain has an <strong>extremely high amplitude wave</strong>. When you're in the active phase, you're unstoppable. When the cycle drops, everything stops. This isn't a flaw — it's your nature.`,
    desc: `The traditional productivity system is built for linear brains. For you it's torture and a lie.<br><br>In your high phase you produce 10 times what a "normal" person produces in a month. In the low phase you need recovery, silence, reconstruction. This cycle is biological and non-negotiable.<br><br>The problem isn't the cycle — it's that you don't have a <strong>system designed to inhabit it</strong>. Business built only in high phases, communication stopped in lows, clients confused by your irregularity. The solution isn't to become regular. It's to build a business that works with your rhythm.`,
    powers: [{name: 'Extreme productivity peaks', sub: "In high phases you produce what others never touch"}, {name: 'Post-crash resilience', sub: 'Every rebirth takes you higher than the last'}, {name: 'Amplified vision', sub: 'In high phases strategic clarity is total'}, {name: 'Radical authenticity', sub: 'Your cycle story is your most powerful marketing'}],
    blinds: [{name: 'Unstable cyclical revenue', sub: 'Earnings depend too much on what phase you\'re in'}, {name: 'Discontinuous communication', sub: 'You disappear when you\'re low — clients get confused'}, {name: 'Recurring burnout', sub: 'Without anti-burnout systems, the pattern repeats'}, {name: 'High-phase promises', sub: 'You promise from high, deliver from low'}],
    scores: [{l: 'Peak output', p: 98}, {l: 'Resilience', p: 85}, {l: 'Stability', p: 31}, {l: 'System', p: 38}, {l: 'Sustainability', p: 42}],
    biz: `Your ideal model is <strong>everything that's automatable, asynchronous, and works even when you're offline</strong>. Digital products, on-demand courses, automated subscriptions. Your business must run without you during low phases.`,
    companion: {
      prompts: ['What phase of the cycle are you in today? (High / Medium / Low) — and what is appropriate to do TODAY based on this phase?', 'What system or automation could you activate this week that works even when you can\'t?', 'What do you need to communicate to your clients during low phases to maintain trust?'],
      mod1: 'The cycle-business framework for the Builder', mod2: 'How to build automations that work in low phases',
      week1: 'Diagnosis: mapping your personal cycle', week2: 'Anti-burnout business model — cyclical structure', week3: 'Automated revenue for low phases', week4: 'Permanent sustainability and cycle plan'
    },
    reportItems: ['The cycle-business framework for the Builder', 'How to build automations for low phases', 'The anti-burnout plan specific to your type', 'How to communicate cyclicality to clients (and turn it into strength)']
  }
};
