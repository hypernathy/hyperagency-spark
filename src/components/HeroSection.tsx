import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 grid-bg pointer-events-none"
        style={{ y: gridY, opacity: gridOpacity }}
      />
      <motion.div className="absolute inset-0 hero-glow pointer-events-none" style={{ y: glowY }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center py-20 relative z-10">
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-primary mb-8">
            The platform for builder minds
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight max-w-4xl">
            You were never<br />
            <em className="text-primary italic font-light">too much.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="body-text mt-8 max-w-xl text-lg">
            Your mind just needed the right mirror.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/quiz')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono uppercase tracking-wider text-sm px-8 py-4 hover:bg-primary/90 transition-colors min-h-[48px]"
            >
              Discover your Builder Identity →
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
