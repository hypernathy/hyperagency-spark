import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

interface Props {
  onComplete: () => void;
}

export default function OnboardingTour({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const { t } = useLang();
  const ob = t.onboarding;
  const slides = ob.slides as { emoji: string; title: string; desc: string }[];
  const total = slides.length;

  const next = () => {
    if (current < total - 1) setCurrent(current + 1);
    else onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-primary'
                  : i < current
                  ? 'w-4 bg-primary/40'
                  : 'w-4 bg-[rgba(255,255,255,0.1)]'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Emoji icon */}
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
              className="w-24 h-24 mx-auto mb-8 flex items-center justify-center text-5xl bg-card border border-[rgba(255,255,255,0.07)]"
            >
              {slides[current].emoji}
            </motion.div>

            {/* Step label */}
            <p className="text-primary font-mono text-[0.65rem] uppercase tracking-[0.18em] mb-3">
              {ob.step.replace('{0}', String(current + 1)).replace('{1}', String(total))}
            </p>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {slides[current].title}
            </h2>

            {/* Description */}
            <p className="text-[rgba(248,245,240,0.65)] font-syne text-sm leading-relaxed mb-10 max-w-sm mx-auto">
              {slides[current].desc}
            </p>

            {/* Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={next}
                className="bg-primary text-primary-foreground px-10 py-4 font-mono uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors min-h-[48px] w-full"
              >
                {current < total - 1 ? ob.next : ob.done}
              </motion.button>
              <button
                onClick={onComplete}
                className="text-sm font-syne text-[rgba(248,245,240,0.25)] hover:text-[rgba(248,245,240,0.5)] transition-colors py-2"
              >
                {ob.skip}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
