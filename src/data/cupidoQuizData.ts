// ⚠️ MIRROR — source canonique = repo hyperyou-systems (CONNEXA-HQ D-014a). Ne pas éditer le contenu quiz ici ; synchroniser depuis hyperyou-systems. Voir ./README.md
export interface CupidoAnswer {
  t: 'P' | 'I' | 'F' | 'L' | 'S';
  text: string;
  pts: string;
}

export interface CupidoQuestion {
  q: string;
  sub: string;
  a: CupidoAnswer[];
}

export interface CupidoPower {
  name: string;
  sub: string;
}

export interface CupidoScore {
  l: string;
  p: number;
}

export interface CupidoCompanionData {
  prompts: string[];
  mod1: string;
  mod2: string;
  week1: string;
  week2: string;
  week3: string;
  week4: string;
}

export interface CupidoResultType {
  color: string;
  cd: string;
  cl: string;
  label: string;
  name: string;
  tagline: string;
  tags: string[];
  intro: string;
  desc: string;
  powers: CupidoPower[];
  blinds: CupidoPower[];
  scores: CupidoScore[];
  rel: string;
  companion: CupidoCompanionData;
  reportItems: string[];
}

export const CUPIDO_QUESTIONS: CupidoQuestion[] = [
  {q:"When you meet someone you're attracted to, what's your first reaction?",sub:"Think about how you actually feel — not how you'd like to feel.",a:[
    {t:"P",text:"I feel a deep connection and open up quickly — almost too much",pts:"Attraction: immediate openness"},
    {t:"I",text:"I'm fascinated but keep my distance — first I observe, then I decide",pts:"Attraction: strategic observation"},
    {t:"F",text:"The attraction grows when I feel I can take care of the other person",pts:"Attraction: care as connection"},
    {t:"L",text:"I'm drawn to people who stimulate my mind — conversation is the real foreplay",pts:"Attraction: intellect as intimacy"},
    {t:"S",text:"I light up intensely but fear it will end — I experience everything with urgency",pts:"Attraction: intensity and fear"}
  ]},
  {q:"How do you experience emotional intimacy in relationships?",sub:"There's no right answer here — only your truth.",a:[
    {t:"P",text:"Emotional intimacy is what I seek most of all — I want to be truly seen",pts:"Intimacy: need to be seen"},
    {t:"I",text:"I enjoy intimacy, but sometimes I need to retreat into my own space",pts:"Intimacy: closeness-distance oscillation"},
    {t:"F",text:"I create it through tangible actions — cooking, organizing, solving problems",pts:"Intimacy: acts of service"},
    {t:"L",text:"I build it slowly, through deep conversations and intellectual sharing",pts:"Intimacy: slow and reflective building"},
    {t:"S",text:"I experience it intensely when it's there, but I fear it will suddenly disappear",pts:"Intimacy: anxious intensity"}
  ]},
  {q:"What happens when you feel your partner pulling away?",sub:"Even if you've never admitted it out loud.",a:[
    {t:"S",text:"Panic. I seek reassurance, send messages, I need to know they're still there",pts:"Distance: anxious activation"},
    {t:"I",text:"I pull away too. If they don't want to be close, I find my own space",pts:"Distance: protective withdrawal"},
    {t:"P",text:"I try to understand what I did wrong — and open up more to reconnect",pts:"Distance: vulnerability as a bridge"},
    {t:"F",text:"I intensify care — I do more, offer more, give more",pts:"Distance: care as compensation"},
    {t:"L",text:"I analyze the situation rationally — I try to understand the pattern before reacting",pts:"Distance: analysis before emotion"}
  ]},
  {q:"What is your greatest need in a relationship?",sub:"The need you never negotiate.",a:[
    {t:"P",text:"Authenticity — I want to be completely myself without masks",pts:"Need: radical authenticity"},
    {t:"I",text:"Freedom — loving without losing myself is non-negotiable",pts:"Need: autonomy in love"},
    {t:"F",text:"Security — knowing we're a team, no matter what happens",pts:"Need: stability and partnership"},
    {t:"L",text:"Stimulation — a mind that challenges me and makes me grow",pts:"Need: shared intellectual growth"},
    {t:"S",text:"Presence — feeling the other person is truly there, not just physically",pts:"Need: constant reassurance"}
  ]},
  {q:"How do you express love in daily life?",sub:"Not what you say — what you do.",a:[
    {t:"F",text:"Through concrete actions — I organize, cook, take care of practical things",pts:"Language: service and dedication"},
    {t:"P",text:"With deep words and vulnerability — I say what I feel, even when it's scary",pts:"Language: words and truth"},
    {t:"S",text:"With intensity — when I love, I love with everything. Messages, attention, total presence",pts:"Language: total devotion"},
    {t:"L",text:"By sharing ideas, books, conversations — my love flows through the mind",pts:"Language: mental connection"},
    {t:"I",text:"By giving space — I respect the other's timing and ask the same for myself",pts:"Language: freedom as a gift"}
  ]},
  {q:"What is your pattern in past relationships?",sub:"The pattern that repeats, even when you see it coming.",a:[
    {t:"S",text:"I fall in love intensely, then the fear of abandonment sabotages everything",pts:"Pattern: infatuation-sabotage"},
    {t:"I",text:"I get close then pull away — as soon as it gets too intimate, I need air",pts:"Pattern: approach-withdrawal"},
    {t:"F",text:"I give everything until I have nothing left — then I get angry because I don't receive",pts:"Pattern: give-deplete-resent"},
    {t:"P",text:"I open up too soon and then feel hurt by unreciprocated vulnerability",pts:"Pattern: openness-wound"},
    {t:"L",text:"I analyze the relationship until it becomes a study object instead of an experience",pts:"Pattern: emotional intellectualization"}
  ]},
  {q:"During an argument with your partner, what do you do?",sub:"Be honest with yourself.",a:[
    {t:"L",text:"I try to rationalize — I present logical arguments and seek solutions",pts:"Conflict: rationalization"},
    {t:"P",text:"I become vulnerable — I express how I truly feel, even if it hurts",pts:"Conflict: vulnerability as a weapon"},
    {t:"S",text:"I get agitated — I fear the argument means the end of everything",pts:"Conflict: catastrophizing"},
    {t:"I",text:"I need space — I shut down until I can think clearly",pts:"Conflict: protective closure"},
    {t:"F",text:"I try to solve it concretely — 'what do we do to fix this?'",pts:"Conflict: practical problem-solving"}
  ]},
  {q:"What do the people you've loved tell you?",sub:"The feedback you've heard more than once.",a:[
    {t:"P",text:"'You're too intense — sometimes I feel overwhelmed by your depth'",pts:"Feedback: too much depth"},
    {t:"I",text:"'You're unreachable — I never know what you truly feel'",pts:"Feedback: emotional wall"},
    {t:"F",text:"'You do too much for me — I never asked for all of this'",pts:"Feedback: excessive care"},
    {t:"L",text:"'I wish you'd feel more and think less — I miss you emotionally'",pts:"Feedback: emotional distance"},
    {t:"S",text:"'I need space — your need for reassurance suffocates me'",pts:"Feedback: relational pressure"}
  ]},
  {q:"What is your greatest fear in love?",sub:"The one you never say out loud.",a:[
    {t:"S",text:"Being abandoned — that the other person will leave without warning",pts:"Fear: abandonment"},
    {t:"I",text:"Losing myself — dissolving into the other until I don't recognize myself",pts:"Fear: loss of identity"},
    {t:"P",text:"Not being enough — that my authenticity isn't enough to keep someone",pts:"Fear: inadequacy"},
    {t:"F",text:"Not being reciprocated — giving everything and receiving nothing in return",pts:"Fear: non-reciprocity"},
    {t:"L",text:"Boredom — that the mental connection fades and only routine remains",pts:"Fear: intellectual stagnation"}
  ]},
  {q:"How do you imagine the ideal relationship?",sub:"Not the perfect one — the one that works for you.",a:[
    {t:"P",text:"Two authentic people who choose each other every day — no masks, no games",pts:"Ideal: mutual authenticity"},
    {t:"I",text:"Two full lives that freely choose each other — together but never dependent",pts:"Ideal: shared freedom"},
    {t:"F",text:"A solid partnership — building a life together, day after day",pts:"Ideal: shared life project"},
    {t:"L",text:"Two minds that stimulate each other — an endless conversation that never gets boring",pts:"Ideal: perpetual stimulation"},
    {t:"S",text:"Total and unconditional love — knowing someone will always be there, no matter what",pts:"Ideal: absolute security"}
  ]},
  {q:"What are you avoiding in your love life?",sub:"The most uncomfortable question — and the most important one.",a:[
    {t:"I",text:"That my independence is also a defense — to avoid truly risking pain",pts:"Avoidance: protection disguised as freedom"},
    {t:"S",text:"That my fear of abandonment is creating exactly what I fear",pts:"Avoidance: self-fulfilling prophecy"},
    {t:"P",text:"That opening up completely also means accepting I could be hurt",pts:"Avoidance: cost of vulnerability"},
    {t:"F",text:"That giving everything is also a way to control — not truly to love",pts:"Avoidance: control disguised as care"},
    {t:"L",text:"That analyzing emotions is also a way to avoid feeling them",pts:"Avoidance: thinking as a shield"}
  ]},
  {q:"What do you need most right now to transform your love life?",sub:"The last question — the most important one.",a:[
    {t:"P",text:"The courage to be vulnerable without expecting the other person to save me",pts:"Need: autonomous vulnerability"},
    {t:"I",text:"Learning that closeness isn't a threat — and that I can stay myself",pts:"Need: secure intimacy"},
    {t:"F",text:"Learning to receive — not just give. And to ask for what I need",pts:"Need: reciprocity"},
    {t:"L",text:"Allowing myself to feel — not just understand. Moving from the head to the heart",pts:"Need: emotional intelligence"},
    {t:"S",text:"Building internal security — not seeking it only in someone else's arms",pts:"Need: inner security"}
  ]}
];

export const CUPIDO_RESULT_DATA: Record<string, CupidoResultType> = {
  P: {
    color: '#C83B3B', cd: 'rgba(200,59,59,.1)', cl: 'rgba(200,59,59,.25)',
    label: 'Style 01 · Flame', name: 'The Authentic Flame',
    tagline: 'Loves with everything. Opens up with courage. Transforms vulnerability into strength.',
    tags: ['Courageous vulnerability', 'Radical authenticity', 'Emotional depth'],
    intro: `Your heart operates in <strong>fully open</strong> mode. You love with a depth that most people never reach. Your vulnerability isn't weakness — it's your rarest superpower.`,
    desc: `The problem isn't how you love. It's that the world isn't always ready for your intensity. You open up completely and then get hurt when the other person isn't at the same level.<br><br>You've probably experienced the cycle: total openness → wound → temporary closure → opening up again. This cycle isn't a flaw — it's your nature. But without a system to manage it, it becomes a painful pattern.<br><br>The solution isn't closing yourself off. It's learning to <strong>dose your vulnerability</strong> — opening up gradually, with the right people, at the right pace.`,
    powers: [{name: 'Emotional depth', sub: 'You create connections most people never touch'}, {name: 'Magnetic authenticity', sub: 'Your truth attracts the right people'}, {name: 'Courage to love', sub: 'You show up when others hide'}, {name: 'Transformative empathy', sub: 'You understand others at a level few reach'}],
    blinds: [{name: 'Premature openness', sub: 'You expose yourself too soon with the wrong people'}, {name: 'Reciprocity expectations', sub: 'You love at 100% and expect the same — immediately'}, {name: 'Amplified wounds', sub: "When you're not reciprocated, the pain is 10x"}, {name: 'Speed vs depth', sub: 'True intimacy requires time — not just intensity'}],
    scores: [{l: 'Vulnerability', p: 96}, {l: 'Authenticity', p: 92}, {l: 'Protection', p: 34}, {l: 'Patience', p: 41}, {l: 'Resilience', p: 62}],
    rel: `Your ideal relationship model is based on <strong>progressive vulnerability</strong>. Don't stop opening up — learn to do it gradually. The deepest connections come from patience, not speed.`,
    companion: {
      prompts: ["Did you open up to someone today? How did you dose your vulnerability?", "Identify a moment when your authenticity created a genuine connection.", "What's the line between 'being authentic' and 'expecting too much in return'?"],
      mod1: 'Progressive vulnerability: the method for opening up without burning out',
      mod2: 'How to distinguish people who deserve your openness',
      week1: 'Diagnosis: your openness-wound-closure cycle',
      week2: 'The Gradient method: dosing vulnerability without losing it',
      week3: 'Building authentic relationships that stand the test of time',
      week4: 'Permanent healthy protection system'
    },
    reportItems: ['Your openness-wound cycle and how to break it', 'The Gradient method for dosing vulnerability', 'How to recognize who deserves your depth', 'The 3 signs you\'re confusing speed with intimacy']
  },
  I: {
    color: '#4A7FB5', cd: 'rgba(74,127,181,.1)', cl: 'rgba(74,127,181,.25)',
    label: 'Style 02 · Wind', name: 'The Free Wind',
    tagline: 'Loves without chains. Protects their essence. Transforms freedom into a gift.',
    tags: ['Emotional autonomy', 'Freedom as a value', 'Selective intimacy'],
    intro: `Your heart has a <strong>sophisticated protection system</strong>. You love deeply, but only when you're sure you won't lose yourself. Your independence isn't coldness — it's how you preserve your essence so you can truly share it.`,
    desc: `The problem isn't that you don't love. It's that your love needs space to breathe. When the other person gets too close, your instinct tells you to retreat — not to stop feeling, but to avoid losing yourself.<br><br>You've probably experienced the pattern: getting closer → feeling suffocated → withdrawal → the other person feels rejected → conflict. This cycle isn't selfishness — it's your way of protecting yourself.<br><br>The solution isn't becoming more "open." It's building a type of <strong>intimacy that includes your need for space</strong> — without the other person feeling excluded.`,
    powers: [{name: 'Personal integrity', sub: "You don't lose yourself in relationships — you know who you are"}, {name: 'Non-dependent love', sub: 'You love by choice, not by need'}, {name: 'Emotional stability', sub: "You don't react impulsively — you think first"}, {name: 'Quality of presence', sub: "When you're there, you're fully there — 100%"}],
    blinds: [{name: 'Emotional wall', sub: 'Independence sometimes becomes a barrier'}, {name: 'Automatic withdrawal', sub: 'You shut down when you should stay'}, {name: 'Cold communication', sub: "The other person doesn't know how you feel — because you don't tell them"}, {name: 'Fear of dependence', sub: 'You avoid deep intimacy for fear of losing yourself'}],
    scores: [{l: 'Independence', p: 95}, {l: 'Integrity', p: 90}, {l: 'Openness', p: 36}, {l: 'Communication', p: 42}, {l: 'Intimacy', p: 48}],
    rel: `Your ideal relationship model is based on <strong>shared freedom</strong>. Two complete people who choose each other every day without losing themselves. Ideal intimacy for you includes the right to space.`,
    companion: {
      prompts: ["Today, when you felt the need to retreat, what was happening?", "When was the last time you expressed a vulnerable emotion without protecting yourself?", "What do you lose when you shut down — and what do you think you're protecting?"],
      mod1: "How to stay close without losing yourself",
      mod2: 'The intimacy-freedom framework for the Wind',
      week1: 'Diagnosis: where your independence becomes defense',
      week2: 'Secure intimacy: staying close without losing yourself',
      week3: 'Communicating emotions when your instinct says to shut down',
      week4: 'Permanent gradual opening system'
    },
    reportItems: ["How to distinguish healthy protection from fleeing intimacy", "The framework for staying close without losing yourself", "How to communicate your space needs without hurting others", "The 3 moments when your withdrawal sabotages connection"]
  },
  F: {
    color: '#6B8E6B', cd: 'rgba(107,142,107,.1)', cl: 'rgba(107,142,107,.25)',
    label: 'Style 03 · Root', name: 'The Protective Root',
    tagline: 'Loves by building. Takes care of everything. Transforms dedication into foundations.',
    tags: ['Active care', 'Solid partnership', 'Constructive dedication'],
    intro: `Your heart expresses itself through <strong>hands and actions</strong>. For you, loving is doing — cooking, organizing, building, solving. Your care isn't taken for granted — it's your most powerful love language.`,
    desc: `The problem isn't that you give too much. It's that you give without asking — until you're depleted. And when you finally ask, the other person doesn't understand why you're angry.<br><br>Your pattern: give everything → don't receive → accumulate frustration → explode or shut down. This cycle always leaves you in the same position: exhausted and misunderstood.<br><br>The solution isn't to stop giving. It's learning to <strong>receive with the same ease</strong> you give. And to communicate your needs before reaching the breaking point.`,
    powers: [{name: 'Authentic dedication', sub: 'When you love, you build something concrete and lasting'}, {name: 'Reliability', sub: 'The other person knows they can count on you — always'}, {name: 'Tangible care', sub: 'You transform love into actions that improve life'}, {name: 'Partnership vision', sub: 'You think in terms of "we" — you build for two'}],
    blinds: [{name: 'Giving without receiving', sub: 'The balance is always tipped in your direction'}, {name: 'Care as control', sub: '"Doing for" is sometimes a way to control'}, {name: 'Invisible needs', sub: 'Your needs are always at the bottom of the list'}, {name: 'Accumulated resentment', sub: "You say nothing until you explode"}],
    scores: [{l: 'Dedication', p: 97}, {l: 'Reliability', p: 94}, {l: 'Assertiveness', p: 32}, {l: 'Receiving', p: 28}, {l: 'Balance', p: 40}],
    rel: `Your ideal relationship model is a <strong>balanced partnership</strong> where giving and receiving are in equilibrium. Your superpower is care — but it needs to flow in both directions.`,
    companion: {
      prompts: ["Today, did someone do something for YOU? Did you accept it without resisting?", "Identify a need you've never communicated to your partner. Why?", "What would happen if you asked for help before burning out?"],
      mod1: 'How to learn to receive (and why it\'s harder than giving)',
      mod2: 'The needs-boundaries framework for the Root',
      week1: 'Diagnosis: the give-receive balance in your life',
      week2: 'Communicating needs before the breaking point',
      week3: 'Building real reciprocity in relationships',
      week4: 'Permanent anti-burnout relationship system'
    },
    reportItems: ['How to build real reciprocity in relationships', 'The framework for communicating your needs without guilt', 'The difference between authentic care and care-as-control', 'The 3 signs you\'re giving too much (and how to stop in time)']
  },
  L: {
    color: '#9B7EB8', cd: 'rgba(155,126,184,.1)', cl: 'rgba(155,126,184,.25)',
    label: 'Style 04 · Star', name: 'The Thinking Star',
    tagline: 'Loves with the mind. Seeks intellectual depth. Transforms thought into connection.',
    tags: ['Emotional intellect', 'Conversation as intimacy', 'Deep analysis'],
    intro: `Your heart flows through the <strong>mind</strong>. For you, true intimacy is a conversation that touches the soul. Intellectual attraction is your love language — and it's no less deep than emotional.`,
    desc: `It's not that you don't feel. It's that you feel through thought. When you analyze a relationship, you're not avoiding emotions — you're processing them your way.<br><br>The problem is that the other person often wants to feel, not understand. They want a spontaneous "I love you," not an analysis of why love works.<br><br>The solution isn't to stop thinking. It's learning to <strong>let emotions arrive before analysis</strong> — at least sometimes.`,
    powers: [{name: 'Conversational depth', sub: 'Your conversations create true and lasting intimacy'}, {name: 'Pattern recognition', sub: 'You see relationship dynamics with rare clarity'}, {name: 'Shared growth', sub: 'You bring the other person to think more deeply'}, {name: 'Reflective stability', sub: "You don't react impulsively — you think before acting"}],
    blinds: [{name: 'Emotional distance', sub: 'Analysis sometimes replaces feeling'}, {name: 'Intellectualization', sub: 'You think the relationship instead of living it'}, {name: 'Difficulty with spontaneity', sub: 'Emotional impulsivity makes you uncomfortable'}, {name: 'Cognitive expectations', sub: "You seek logical perfection in something illogical: love"}],
    scores: [{l: 'Intelligence', p: 96}, {l: 'Reflection', p: 91}, {l: 'Spontaneity', p: 33}, {l: 'Emotion', p: 39}, {l: 'Presence', p: 48}],
    rel: `Your ideal relationship model is an <strong>intellectual-emotional connection</strong>. Don't give up mental depth — learn to pair it with emotional depth. The mind and heart aren't in competition.`,
    companion: {
      prompts: ["Today, when you felt a strong emotion, did you express it or analyze it first?", "When was the last time you said 'I love you' without thinking about it first?", "What do you lose when you analyze a moment instead of living it?"],
      mod1: 'How to move from the head to the heart (without losing your mind)',
      mod2: "The emotion-reflection framework for the Star",
      week1: "Diagnosis: where analysis replaces feeling",
      week2: 'Emotional presence: living the moment before understanding it',
      week3: 'Communicating with the heart when the brain wants control',
      week4: 'Permanent mind-heart balance system'
    },
    reportItems: ['How to balance analysis and spontaneity in relationships', 'The framework for expressing emotions without losing depth', 'The difference between understanding a relationship and living it', 'The 3 moments when thinking sabotages connection']
  },
  S: {
    color: '#D4764E', cd: 'rgba(212,118,78,.1)', cl: 'rgba(212,118,78,.25)',
    label: "Style 05 · Wave", name: "The Intense Wave",
    tagline: 'Loves with urgency. Feels everything amplified. Transforms fear into depth.',
    tags: ["Emotional intensity", "Fear of abandonment", "Love as urgency"],
    intro: `Your heart lives at <strong>maximum volume</strong>. When you love, you love with an intensity few know. Your fear of abandonment isn't a flaw — it's a signal of how deeply you connect.`,
    desc: `The problem isn't that you feel too much. It's that the fear of it ending leads you to create exactly what you fear. You seek constant reassurance, interpret every silence as a sign of abandonment, and your intensity sometimes smothers what's trying to grow.<br><br>Your pattern: intense infatuation → fear of abandonment → controlling behaviors → the other person pulls away → confirmation of the fear.<br><br>The solution isn't to love less. It's to build <strong>internal security</strong> — so that the other person's love is a gift, not your only source of stability.`,
    powers: [{name: 'Emotional intensity', sub: "When you love, the other person truly feels loved"}, {name: 'Total presence', sub: "You're completely present — not halfway"}, {name: 'Deep loyalty', sub: 'Whoever has your heart, has all of you'}, {name: 'Amplified empathy', sub: "You feel the other person's emotions as if they were your own"}],
    blinds: [{name: "Fear of abandonment", sub: 'Every silence becomes a danger signal'}, {name: 'Need for reassurance', sub: 'You need to hear "I\'m here" too often'}, {name: 'Self-fulfilling prophecy', sub: 'The fear of it ending creates pressure that makes it end'}, {name: 'Emotional dependence', sub: "Your stability depends too much on the other person's presence"}],
    scores: [{l: 'Intensity', p: 98}, {l: 'Presence', p: 89}, {l: 'Inner security', p: 26}, {l: 'Independence', p: 31}, {l: 'Stability', p: 34}],
    rel: `Your ideal relationship model is based on <strong>inner security</strong>. Don't stop loving intensely — learn to do it from a place of fullness, not fear. When you're full inside, your love becomes a gift instead of a demand.`,
    companion: {
      prompts: ["What emotional state are you in today? (Secure / Anxious / Urgent) — and what can you do FOR YOURSELF?", "When was the last time you sought reassurance? What were you really looking for?", "How can you give yourself the security you're asking from the other person?"],
      mod1: "How to build inner security (and stop seeking it in others)",
      mod2: "The anti-anxiety relationship framework for the Wave",
      week1: "Diagnosis: your fear-control-abandonment loop",
      week2: 'Inner security: daily self-regulation techniques',
      week3: "Communicating intensity without smothering",
      week4: 'Permanent anti-emotional-dependence system'
    },
    reportItems: ["How to break the fear-control-abandonment loop", "The framework for building inner security", "The difference between loving intensely and emotional dependence", "The 3 triggers of your relational anxiety — and how to deactivate them"]
  }
};
