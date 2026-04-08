import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function PowerHourSection() {
  const { t } = useLang();

  return (
    <section id="power" className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-up" duration={0.8}>
          <div className="bg-card p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[rgba(255,255,255,0.07)]">
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              {/* Left */}
              <div className="space-y-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">{t.power.eyebrow}</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold">
                  {t.power.h2}
                </h2>
                <p className="font-display italic text-[rgba(248,245,240,0.65)] text-xl">{t.power.sub}</p>
                <p className="body-text">
                  {t.power.desc}
                </p>
                <p className="body-text font-medium !text-foreground">
                  {t.power.bold}
                </p>
              </div>

              {/* Right - price box */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-[rgba(255,255,255,0.07)] p-8"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(248,245,240,0.35)] mb-2">{t.power.investLabel}</p>
                <p className="font-display text-7xl font-black text-primary mb-2">€197</p>
                <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] mb-8">{t.power.priceSub}</p>

                <ul className="space-y-3 mb-8">
                  {t.power.includes.map((item: string, i: number) => (
                    <li key={i} className="body-text flex items-start gap-2">
                      <span className="text-[rgba(248,245,240,0.35)] mt-0.5">◆</span>{item}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground font-mono uppercase tracking-wider text-sm py-3.5 hover:bg-primary/90 transition-colors min-h-[48px]"
                >
                  {t.power.cta}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
