import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function SeeYouSection() {
  const { t } = useLang();
  const cards: { top: string; bottom: string }[] = t.seeYou.cards;

  return (
    <section id="see-you" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">{t.seeYou.label}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {t.seeYou.h2pre}<em className="text-primary italic">{t.seeYou.h2em}</em>
              </h2>
              <p className="font-mono body-text">{t.seeYou.p1}</p>
              <p className="font-mono body-text">{t.seeYou.p2}</p>
              <p className="font-mono body-text font-medium !text-foreground">{t.seeYou.p3}</p>
            </div>
          </ScrollReveal>

          {/* Right - cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {cards.map((card, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-foreground/[0.07] p-5 rounded-sm hover:border-l-2 hover:border-l-primary transition-all group">
                  <p className="font-display italic body-text mb-1">{card.top}</p>
                  <p className="font-mono text-base text-primary">{card.bottom}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
