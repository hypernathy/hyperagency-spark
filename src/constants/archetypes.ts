export interface Archetype {
  id: number;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  roadmap: string[];
}

export const archetypes: Archetype[] = [
  {
    id: 1,
    name: 'The Chaotic Creator',
    emoji: '🌊',
    color: '#E9C824',
    tagline: 'You have everything. Except a system.',
    roadmap: [
      'Install the Daily CEO Briefing prompt — run it every morning before anything else',
      'Pick ONE product from your existing ideas. Just one. Build it this week.',
      'Use the Insight Extractor to process everything you\'ve been saving for later',
      'Set up one automation that handles a task you do manually every day',
    ],
  },
  {
    id: 2,
    name: 'The Invisible Expert',
    emoji: '💎',
    color: '#00C4B4',
    tagline: 'You know more than you charge for.',
    roadmap: [
      'Run the Offer Validator prompt on your most-asked-about topic right now',
      'Build one entry product from what you already know — this week',
      'Use the Product Architect prompt to structure your expertise into something sellable',
      'Start posting your knowledge publicly — 3x per week minimum',
    ],
  },
  {
    id: 3,
    name: 'The Scattered Builder',
    emoji: '⚡',
    color: 'rgba(248,245,240,0.5)',
    tagline: "You're building everything. Finishing nothing.",
    roadmap: [
      'Stop all new builds. Audit what you have. Pick one thing that is 80% done.',
      'Run the Offer Validator on it — find out if anyone will pay before you finish it',
      'Use the Weekly Strategy Review every Sunday — stop starting, start finishing',
      'Set a ship date. Tell someone. Ship it.',
    ],
  },
  {
    id: 4,
    name: 'The Monetization-Ready Founder',
    emoji: '🚀',
    color: 'rgba(248,245,240,0.4)',
    tagline: "You're closer than you think.",
    roadmap: [
      'Map your current funnel — where do people enter, where do they drop off',
      'Identify the ONE manual task that costs you the most time — automate it first',
      'Use the System Builder prompt to design your first real automation',
      'Set up your email sequence — even 3 emails is infinitely better than zero',
    ],
  },
  {
    id: 5,
    name: 'The Dormant Powerhouse',
    emoji: '🦂',
    color: 'rgba(248,245,240,0.3)',
    tagline: "You've been building in silence. Time to surface.",
    roadmap: [
      'Write your origin story — 200 words. Why you, why now, why this.',
      'Post it. Somewhere. Anywhere. Today.',
      'Use the Content Engine prompt to build 30 days of content from your story',
      'Pick your one platform and commit to it for 90 days before adding another',
    ],
  },
];

export const quizQuestions = [
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
      { text: 'I can\'t focus on one thing', archetype: 1 },
      { text: 'People don\'t know I exist', archetype: 5 },
      { text: 'I start but never finish', archetype: 3 },
      { text: 'I\'m close but stuck on the last mile', archetype: 4 },
      { text: 'I know my stuff but can\'t monetize it', archetype: 2 },
    ],
  },
  {
    question: 'How would a friend describe your work style?',
    options: [
      { text: 'Creative chaos — genius but scattered', archetype: 1 },
      { text: 'The quiet expert everyone goes to for advice', archetype: 2 },
      { text: 'Always building something new', archetype: 3 },
      { text: 'Focused and almost there', archetype: 4 },
      { text: 'Underrated — they\'re sitting on gold', archetype: 5 },
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
      { text: 'Getting paid what I\'m actually worth', archetype: 2 },
      { text: 'One polished product that sells itself', archetype: 3 },
      { text: 'A lean business that runs without me', archetype: 4 },
      { text: 'Being recognized as a leader in my space', archetype: 5 },
    ],
  },
];
