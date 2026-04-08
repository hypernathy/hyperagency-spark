import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function SparkSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();

  const freeFeatures = [
    'Available 24/7 directly on this site',
    'Speaks EN · FR · PT · IT',
    'Gives real advice, not hedged responses',
    'Catches your pattern after 2–3 exchanges',
    'Recommends your exact next step',
  ];

  const paidFeatures = [
    'Full memory of your context & history',
    'Proactive check-ins & accountability',
    'Strategy sessions — not just Q&A',
    'Multilingual — follows your flow',
    'Monthly briefing: your patterns + next moves',
  ];

  return (
    <section id="spark" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{t.spark.label}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{t.spark.h2}</h2>
          <p className="font-display italic text-primary text-lg mb-4">{t.spark.sub}</p>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl mb-12">{t.spark.intro}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free card */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-foreground/[0.07] rounded-sm p-8 flex flex-col h-full"
            >
              <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-primary border border-primary/30 px-3 py-1 rounded-full w-fit mb-6">
                Free · Entry
              </span>
              <h3 className="font-display text-2xl font-bold mb-1">SPARK</h3>
              <p className="font-mono text-sm text-muted-foreground mb-4">Real advice. No filter. Available now.</p>
              <p className="font-mono text-xs text-muted-foreground mb-6">
                A free AI companion on this site that gives you real answers, asks the right question, and helps you figure out what you actually need before you spend a single euro.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {freeFeatures.map((f, i) => (
                  <li key={i} className="font-mono text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>{f}
                  </li>
                ))}
              </ul>
              <p className="font-display text-4xl font-bold mb-1">FREE</p>
              <p className="font-mono text-[10px] text-muted-foreground mb-6">No signup. Start talking now.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenChat}
                className="w-full bg-primary text-primary-foreground font-mono text-sm py-3 rounded-sm hover:bg-primary/90 transition-colors"
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
              className="bg-card border border-foreground/[0.07] rounded-sm p-8 flex flex-col h-full"
            >
              <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-violet border border-violet/30 px-3 py-1 rounded-full w-fit mb-6">
                Paid · Full Clone
              </span>
              <h3 className="font-display text-2xl font-bold mb-1">HyperCompanion™</h3>
              <p className="font-mono text-sm text-muted-foreground mb-4">Memory of you. Your AI co-founder.</p>
              <p className="font-mono text-xs text-muted-foreground mb-6">
                Full memory of your context. Knows your business, your blocks, your patterns. The strategic partner who never burns out, never judges you, and is always available.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {paidFeatures.map((f, i) => (
                  <li key={i} className="font-mono text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-violet mt-0.5">→</span>{f}
                  </li>
                ))}
              </ul>
              <p className="font-display text-4xl font-bold text-primary mb-1">€19<span className="text-lg text-muted-foreground">/month</span></p>
              <p className="font-mono text-[10px] text-muted-foreground mb-6">Less than Netflix. More than any coach you've had. Cancel anytime.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-violet text-secondary-foreground font-mono text-sm py-3 rounded-sm hover:bg-violet/90 transition-colors"
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
