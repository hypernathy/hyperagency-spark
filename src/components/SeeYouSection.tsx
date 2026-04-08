import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

const cards = [
  { top: 'You ask yourself every week:', bottom: '"Why am I doing this manually again?"' },
  { top: "You've thought more than once:", bottom: '"There has to be a system for this."' },
  { top: 'You feel like:', bottom: '"I\'m too much for most people — and not enough for myself."' },
  { top: 'You know AI is the answer but:', bottom: '"You don\'t know which answer, for which question."' },
  { top: 'You want someone who:', bottom: '"Just gets it. No explanation needed."' },
];

export default function SeeYouSection() {
  const { t } = useLang();

  return (
    <section id="see-you" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6">{t.seeYou.label}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {t.seeYou.h2pre}<em className="text-primary italic">{t.seeYou.h2em}</em>
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{t.seeYou.p1}</p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{t.seeYou.p2}</p>
              <p className="font-mono text-sm text-foreground font-medium leading-relaxed">{t.seeYou.p3}</p>
            </div>
          </ScrollReveal>

          {/* Right - cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {cards.map((card, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-foreground/[0.07] p-5 rounded-sm hover:border-l-2 hover:border-l-primary transition-all group">
                  <p className="font-display italic text-sm text-muted-foreground mb-1">{card.top}</p>
                  <p className="font-mono text-sm text-primary">{card.bottom}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
