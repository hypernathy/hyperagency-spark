import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function FounderSection() {
  const { t } = useLang();
  const entries: { year: string; text: string }[] = t.founder.entries;

  return (
    <section id="founder" className="py-24 sm:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-12">{t.founder.label}</p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/20" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {entries.map((entry, i) => (
              <StaggerItem key={i} variant="slide-left">
                <div className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">{entry.year}</p>
                  <p className="font-mono body-text">{entry.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
