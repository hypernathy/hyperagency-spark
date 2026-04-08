import { Archetype } from '@/constants/archetypes';
import { useLang } from '@/contexts/LanguageContext';

const productsByArchetype: Record<number, { title: string; desc: string; emoji: string }[]> = {
  1: [
    { title: 'Daily CEO Briefing', desc: 'Your morning AI prompt that organizes chaos into clarity', emoji: '📋' },
    { title: 'Insight Extractor', desc: 'Turn saved links, notes & bookmarks into actionable insights', emoji: '🔍' },
    { title: 'Automation Starter Kit', desc: 'One-click templates for your first business automation', emoji: '⚡' },
  ],
  2: [
    { title: 'Offer Validator', desc: 'Test if your expertise can sell — before you build anything', emoji: '✅' },
    { title: 'Product Architect', desc: 'Structure your knowledge into a sellable digital product', emoji: '🏗️' },
    { title: 'Content Authority Pack', desc: 'Templates to position yourself as the go-to expert', emoji: '👑' },
  ],
  3: [
    { title: 'Offer Validator', desc: 'Find out if anyone will pay for what you\'re building', emoji: '✅' },
    { title: 'Weekly Strategy Review', desc: 'Sunday ritual to stop starting and start finishing', emoji: '📅' },
    { title: 'Ship Date Accountability', desc: 'Set a deadline, announce it, and ship it', emoji: '🚀' },
  ],
  4: [
    { title: 'System Builder', desc: 'Design your first real automation from scratch', emoji: '🔧' },
    { title: 'Funnel Mapper', desc: 'Visualize where people enter and where they drop off', emoji: '🗺️' },
    { title: 'Email Sequence Starter', desc: '3 emails that convert — written and ready to send', emoji: '📧' },
  ],
  5: [
    { title: 'Content Engine', desc: 'Build 30 days of content from your origin story', emoji: '🎯' },
    { title: 'Origin Story Framework', desc: 'Why you, why now, why this — in 200 words', emoji: '📖' },
    { title: 'Platform Commitment Pack', desc: '90-day playbook for one platform dominance', emoji: '🏆' },
  ],
};

export default function DashboardProducts({ archetype }: { archetype: Archetype }) {
  const products = productsByArchetype[archetype.id] || [];
  const { t } = useLang();

  return (
    <div>
      <h3 className="font-syne text-lg font-bold text-foreground mb-4">{t.dashboard.recommendedForYou}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {products.map((p, i) => (
          <div key={i} className="bg-card border border-foreground/[0.07] rounded-xl p-5 hover:border-primary/30 transition-colors">
            <span className="text-2xl mb-3 block">{p.emoji}</span>
            <h4 className="font-syne font-bold text-sm text-foreground mb-1">{p.title}</h4>
            <p className="font-mono text-xs text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
