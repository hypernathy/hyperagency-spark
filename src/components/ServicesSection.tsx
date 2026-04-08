import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">{t.services.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{t.services.h2}</h2>
          <p className="font-mono body-text mb-12 max-w-2xl">{t.services.sub}</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {t.services.items.map((s: any) => (
            <StaggerItem key={s.num} variant="scale-up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-foreground/[0.07] rounded-sm p-8 flex flex-col hover:border-b-2 hover:border-b-primary transition-all group h-full"
              >
                <span className="font-mono text-xs text-primary mb-4">{s.num}</span>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="font-mono body-text mb-6 flex-1">{s.desc}</p>
                <p className="font-display text-xl font-bold text-primary mb-4">{s.price}</p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-base text-primary hover:underline text-left"
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
