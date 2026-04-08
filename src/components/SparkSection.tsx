import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function SparkSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();

  return (
    <section id="spark" className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary mb-4">{t.spark.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{t.spark.h2}</h2>
          <p className="font-display italic text-[rgba(248,245,240,0.65)] text-xl mb-4">{t.spark.sub}</p>
          <p className="body-text max-w-2xl mb-12">{t.spark.intro}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free card */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-[rgba(255,255,255,0.07)] p-8 flex flex-col h-full hover:border-[rgba(0,196,180,0.35)] transition-colors"
            >
              <span className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary border border-[rgba(0,196,180,0.3)] px-3 py-1 w-fit mb-6">
                {t.spark.freeTag}
              </span>
              <h3 className="font-display text-3xl font-bold mb-1">{t.spark.freeTitle}</h3>
              <p className="body-text mb-4">{t.spark.freeSub}</p>
              <p className="body-text mb-6">{t.spark.freeDesc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {t.spark.freeFeatures.map((f: string, i: number) => (
                  <li key={i} className="body-text flex items-start gap-2">
                    <span className="text-[rgba(248,245,240,0.35)] mt-0.5">→</span>{f}
                  </li>
                ))}
              </ul>
              <p className="font-display text-5xl font-bold mb-1">{t.spark.freePrice}</p>
              <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] mb-6">{t.spark.freePriceSub}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenChat}
                className="w-full bg-primary text-primary-foreground font-mono uppercase tracking-wider text-sm py-3.5 hover:bg-primary/90 transition-colors min-h-[48px]"
              >
                {t.spark.freeCta}
              </motion.button>
            </motion.div>
          </ScrollReveal>

          {/* Paid card */}
          <ScrollReveal variant="slide-right" delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-[rgba(255,255,255,0.07)] p-8 flex flex-col h-full hover:border-[rgba(0,196,180,0.35)] transition-colors"
            >
              <span className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgba(248,245,240,0.35)] border border-[rgba(255,255,255,0.1)] px-3 py-1 w-fit mb-6">
                {t.spark.paidTag}
              </span>
              <h3 className="font-display text-3xl font-bold mb-1">{t.spark.paidTitle}</h3>
              <p className="body-text mb-4">{t.spark.paidSub}</p>
              <p className="body-text mb-6">{t.spark.paidDesc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {t.spark.paidFeatures.map((f: string, i: number) => (
                  <li key={i} className="body-text flex items-start gap-2">
                    <span className="text-[rgba(248,245,240,0.35)] mt-0.5">→</span>{f}
                  </li>
                ))}
              </ul>
              <p className="font-display text-5xl font-bold mb-1">{t.spark.paidPrice}<span className="text-xl text-[rgba(248,245,240,0.35)]">{t.spark.paidPriceUnit}</span></p>
              <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] mb-6">{t.spark.paidPriceSub}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border border-[rgba(255,255,255,0.2)] text-foreground font-mono uppercase tracking-wider text-sm py-3.5 hover:border-primary hover:text-primary transition-colors min-h-[48px]"
              >
                {t.spark.paidCta}
              </motion.button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
