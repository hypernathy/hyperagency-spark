import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

const includes = [
  'You bring the problem. I bring the architecture.',
  'Full session recording delivered within 24h',
  'Written action plan — 3 concrete next moves',
  'Option to upgrade to ongoing work after',
  'Available in EN · FR · PT · IT',
];

export default function PowerHourSection() {
  const { t } = useLang();

  return (
    <section id="power" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-up" duration={0.8}>
          <div className="bg-[#0F1014] rounded-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              {/* Left */}
              <div className="space-y-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{t.power.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">
                  The Power Hour.
                </h2>
                <p className="font-display italic text-primary text-lg">One session. Real answers.</p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  You have a specific problem. A decision to make. A system to design. You don't want a discovery call that turns into a sales pitch — you want 60 minutes of raw, undivided strategic intelligence.
                </p>
                <p className="font-mono text-sm text-foreground font-medium leading-relaxed">
                  This is the only way to get me on a call. Because I don't do free calls. My energy is worth something — and so is yours.
                </p>
              </div>

              {/* Right - price box */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-muted border border-primary/20 rounded-sm p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Investment</p>
                <p className="font-display text-6xl font-black text-primary mb-2">€197</p>
                <p className="font-mono text-[10px] text-muted-foreground mb-8">60-minute session · recorded · no fluff</p>

                <ul className="space-y-3 mb-8">
                  {includes.map((item, i) => (
                    <li key={i} className="font-mono text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">◆</span>{item}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground font-mono text-sm py-3 rounded-sm hover:bg-primary/90 transition-colors"
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
