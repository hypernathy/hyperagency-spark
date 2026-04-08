import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const entries = [
  {
    year: 'ORIGIN',
    text: 'I grew up between three countries before I could choose one. Swiss by passport. Brazilian by heart. Italian by love. Four languages weren\'t an achievement — they were just how I survived different rooms.',
  },
  {
    year: 'THE DIAGNOSIS',
    text: 'ADHD. Late diagnosis. Finally — a name for why I see the architecture before others see the problem. Why I build ecosystems when everyone else is building features. I stopped calling it a limitation the day I understood it was my operating system.',
  },
  {
    year: 'THE BUILD',
    text: 'I started automating because I had no choice. Too many ideas, not enough hands. n8n workflows. Claude API. Supabase. Telegram bots. I built systems for my own chaos first — then realized other people had the exact same chaos.',
  },
  {
    year: 'THE PIVOT',
    text: "I stopped asking 'how do I do this myself?' and started asking 'how do I build a version of myself that runs when I don't?' That's when HyperAgency was born.",
  },
  {
    year: 'NOW',
    text: 'I build AI infrastructure for cross-border businesses. And I made a version of myself — trained on everything I know — that you can access for €19/month. Because not everyone can afford me. But everyone deserves the clarity I can give.',
  },
];

export default function FounderSection() {
  const { t } = useLang();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="founder" className="py-24 sm:py-32 bg-card">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-12">{t.founder.label}</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/20" />

          <div className="space-y-12">
            {entries.map((entry, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">{entry.year}</p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
