import { Archetype } from '@/constants/archetypes';
import { archetypeContent } from '@/constants/archetypeContent';
import { useLang } from '@/contexts/LanguageContext';

export default function DashboardProducts({ archetype }: { archetype: Archetype }) {
  const { lang, t } = useLang();

  const content = archetypeContent[lang]?.[archetype.id] || archetypeContent.en[archetype.id];
  const products = content?.products || [];

  return (
    <div>
      <h3 className="font-syne text-lg font-bold text-foreground mb-4">{t.dashboard.recommendedForYou}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {products.map((p, i) => (
          <div key={i} className="bg-card border border-[rgba(255,255,255,0.07)] p-5 hover:border-[rgba(0,196,180,0.35)] transition-colors">
            <span className="text-2xl mb-3 block">{p.emoji}</span>
            <h4 className="font-syne font-bold text-sm text-foreground mb-1">{p.title}</h4>
            <p className="font-syne text-xs text-[rgba(248,245,240,0.65)]">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
