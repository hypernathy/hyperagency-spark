import { useState, FormEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  const questions = [
    { num: '01', label: t.contact.q1 },
    { num: '02', label: t.contact.q2 },
    { num: '03', label: t.contact.q3 },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{t.contact.label}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{t.contact.h2}</h2>
          <p className="font-display italic text-primary text-lg mb-4">{t.contact.sub}</p>
          <p className="font-mono text-sm text-muted-foreground mb-12">{t.contact.intro}</p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal variant="scale-up">
            <div className="bg-card border border-foreground/[0.07] rounded-sm p-12 text-center">
              <span className="text-4xl mb-4 block">💫</span>
              <h3 className="font-display text-2xl font-bold mb-3">{t.contact.confirmTitle}</h3>
              <p className="font-mono text-sm text-muted-foreground">{t.contact.confirmText}</p>
            </div>
          </ScrollReveal>
        ) : (
          <StaggerContainer as="div" className="space-y-8" staggerDelay={0.12}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {questions.map((q) => (
                <StaggerItem key={q.num}>
                  <div>
                    <label className="block mb-2">
                      <span className="font-mono text-[10px] text-primary tracking-wider">{q.num} ——</span>{' '}
                      <span className="font-display italic text-sm">{q.label}</span>
                    </label>
                    <textarea
                      name={`q${q.num}`}
                      placeholder={t.contact.placeholder}
                      rows={4}
                      className="w-full bg-card border border-foreground/[0.07] rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 resize-none transition-colors"
                    />
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-primary-foreground font-mono text-sm px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? '...' : t.contact.submit}
                </motion.button>
              </StaggerItem>
            </form>
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
