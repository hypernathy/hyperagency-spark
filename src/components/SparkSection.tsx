import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function SparkSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();
  const [emailInputs, setEmailInputs] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleWaitlist = async (key: string) => {
    const email = emailInputs[key];
    if (!email || !email.includes('@')) {
      toast.error('Enter a valid email');
      return;
    }
    const { error } = await supabase.from('courses_waitlist').insert({ email, user_id: null });
    if (error && !error.message.includes('duplicate')) {
      toast.error('Something went wrong');
      return;
    }
    setSubmitted(p => ({ ...p, [key]: true }));
    toast.success("You're on the list!");
  };

  return (
    <section id="spark" className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary mb-4">{t.spark.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{t.spark.h2}</h2>
          <p className="font-display italic text-[rgba(248,245,240,0.65)] text-xl mb-4">{t.spark.sub}</p>
          <p className="body-text max-w-2xl mb-12">{t.spark.intro}</p>
        </ScrollReveal>

        {/* Pricing strip */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[rgba(255,255,255,0.07)] mb-10">
            {t.spark.pricingStrip.map((item: any, i: number) => (
              <div key={i} className="p-4 text-center border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.07)] last:border-r-0 last:border-b-0">
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">{item.label}</div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[rgba(248,245,240,0.42)] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Two main cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
              <p className="body-text mb-6">{t.spark.freeSub}</p>
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

          {/* Founding Member card - PRIORITY */}
          <ScrollReveal variant="slide-right" delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card border-2 border-primary p-8 flex flex-col h-full relative overflow-hidden"
            >
              <span className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary border border-[rgba(0,196,180,0.3)] px-3 py-1 w-fit mb-6">
                {t.spark.paidTag}
              </span>
              <h3 className="font-display text-3xl font-bold mb-1">{t.spark.paidTitle}</h3>
              <p className="body-text mb-4">{t.spark.paidSub}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {t.spark.paidFeatures.map((f: string, i: number) => (
                  <li key={i} className="body-text flex items-start gap-2">
                    <span className="text-[rgba(248,245,240,0.35)] mt-0.5">→</span>{f}
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div className="bg-[rgba(0,196,180,0.08)] border border-[rgba(0,196,180,0.25)] p-3 mb-6">
                <p className="font-mono text-[0.65rem] text-primary leading-relaxed">{t.spark.paidBadge}</p>
              </div>

              <p className="font-display text-5xl font-bold mb-1">{t.spark.paidPrice}<span className="text-xl text-[rgba(248,245,240,0.35)]">{t.spark.paidPriceUnit}</span></p>
              <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] mb-6">{t.spark.paidPriceSub}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground font-mono uppercase tracking-wider text-sm py-3.5 hover:bg-primary/90 transition-colors min-h-[48px]"
              >
                {t.spark.paidCta}
              </motion.button>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Coming Soon section */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-8">{t.spark.comingSoonTitle}</h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8" staggerDelay={0.12}>
          {t.spark.comingSoonCards.map((card: any, i: number) => (
            <StaggerItem key={i} variant="scale-up">
              <div className="bg-card border border-[rgba(255,255,255,0.05)] p-6 flex flex-col h-full opacity-60">
                <h4 className="font-display text-xl font-bold mb-1 text-[rgba(248,245,240,0.5)]">{card.name}</h4>
                <p className="font-mono text-[0.65rem] text-primary mb-2">{card.price}</p>
                <p className="body-text text-sm mb-6 flex-1 text-[rgba(248,245,240,0.35)]">{card.desc}</p>
                {submitted[`coming-${i}`] ? (
                  <p className="font-mono text-[0.65rem] text-primary">✓ You're on the list!</p>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={emailInputs[`coming-${i}`] || ''}
                      onChange={e => setEmailInputs(p => ({ ...p, [`coming-${i}`]: e.target.value }))}
                      className="flex-1 bg-background border border-[rgba(255,255,255,0.1)] px-3 py-2 font-mono text-xs text-foreground placeholder:text-[rgba(248,245,240,0.25)]"
                    />
                    <button
                      onClick={() => handleWaitlist(`coming-${i}`)}
                      className="font-mono text-[0.6rem] uppercase tracking-wider px-3 py-2 border border-[rgba(255,255,255,0.15)] text-[rgba(248,245,240,0.5)] hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {card.cta}
                    </button>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mystery teaser card */}
        <ScrollReveal delay={0.3}>
          <div className="bg-card border border-[rgba(255,255,255,0.03)] p-8 text-center opacity-40 max-w-lg mx-auto">
            <p className="font-display text-lg italic text-[rgba(248,245,240,0.35)] mb-4">{t.spark.teaserDesc}</p>
            {submitted['teaser'] ? (
              <p className="font-mono text-[0.65rem] text-primary">✓ You're in.</p>
            ) : (
              <div className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={emailInputs['teaser'] || ''}
                  onChange={e => setEmailInputs(p => ({ ...p, teaser: e.target.value }))}
                  className="flex-1 bg-background border border-[rgba(255,255,255,0.07)] px-3 py-2 font-mono text-xs text-foreground placeholder:text-[rgba(248,245,240,0.2)]"
                />
                <button
                  onClick={() => handleWaitlist('teaser')}
                  className="font-mono text-[0.6rem] uppercase tracking-wider px-4 py-2 border border-[rgba(255,255,255,0.1)] text-[rgba(248,245,240,0.35)] hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                >
                  {t.spark.teaserCta}
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
