import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';
import nathyPortrait from '@/assets/nathy-portrait.jpg';

export default function HeroSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();

  return (
    <section id="hero" className="min-h-screen grid-bg flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Mobile portrait */}
        <ScrollReveal variant="scale-up" delay={0.15} duration={0.7} className="md:hidden flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30">
            <img
              src={nathyPortrait}
              alt={t.hero.photoAlt}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </ScrollReveal>

        {/* Left */}
        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {t.hero.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight">
              {t.hero.h1_1}<br />{t.hero.h1_2}<br />{t.hero.h1_3}<br />
              <em className="text-primary italic">{t.hero.h1_em}</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-mono body-text whitespace-pre-line max-w-lg">
              {t.hero.sub}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-base px-7 py-3.5 rounded-sm hover:bg-primary/90 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary-foreground pulse-dot" />
                {t.hero.cta1}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('power')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-mono text-base px-7 py-3.5 rounded-sm border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {t.hero.cta2}
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right - desktop portrait */}
        <ScrollReveal variant="scale-up" delay={0.3} duration={0.9}>
          <div className="relative hidden md:flex items-center justify-center">
            <div className="w-full aspect-[3/4] max-w-md rounded-lg overflow-hidden">
              <img
                src={nathyPortrait}
                alt={t.hero.photoAlt}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
