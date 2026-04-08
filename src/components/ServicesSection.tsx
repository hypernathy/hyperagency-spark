import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-14 sm:py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary mb-4">{t.services.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{t.services.h2}</h2>
          <p className="body-text mb-12 max-w-2xl">{t.services.sub}</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {t.services.items.map((s: any) => (
            <StaggerItem key={s.num} variant="scale-up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-[rgba(255,255,255,0.07)] p-8 flex flex-col hover:border-[rgba(0,196,180,0.35)] transition-all group h-full"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgba(248,245,240,0.35)] mb-4">{s.num}</span>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="body-text mb-6 flex-1">{s.desc}</p>
                <p className="font-display text-xl font-bold text-primary mb-4">{s.price}</p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-syne text-base text-[rgba(248,245,240,0.65)] hover:text-primary text-left transition-colors"
                >
                  {s.cta} →
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
