import { motion } from 'framer-motion';
import { Brain, Target, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n';

const HyperYouIntro = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: <Brain className="w-8 h-8 text-gold" />, title: t('landingDiff1Title'), body: t('landingDiff1Body') },
    { icon: <Target className="w-8 h-8 text-gold" />, title: t('landingDiff2Title'), body: t('landingDiff2Body') },
    { icon: <Globe className="w-8 h-8 text-gold" />, title: t('landingDiff3Title'), body: t('landingDiff3Body') },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 w-full flex flex-col items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.25em] text-gold uppercase mb-4 flex items-center justify-center gap-2.5">
            <span className="w-[18px] h-px bg-gold inline-block" />
            {t('landingWhyLabel')}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-light leading-tight tracking-tight mb-8">
            {t('landingWhyHeadline1')}{' '}
            <em className="italic text-gold">{t('landingWhyHeadline2')}</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 mb-10"
        >
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed">
            {t('landingWhyP1')}
          </p>
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed">
            {t('landingWhyP2')}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl sm:text-3xl font-semibold text-center text-cream my-10 leading-tight"
        >
          {t('landingWhyCallout')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-14"
        >
          {t('landingWhyP3')}
        </motion.p>

        {/* HOW WE'RE DIFFERENT — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-gold-22 bg-background/60 backdrop-blur-sm p-6 text-left"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="font-display text-lg font-light text-cream mb-2">{card.title}</h3>
              <p className="font-sans text-base text-cream-64 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* TRANSITION INTO QUIZ CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.25em] text-gold uppercase mb-2 flex items-center justify-center gap-2.5">
            <span className="w-[18px] h-px bg-gold inline-block" />
            {t('landingChooseLabel')}
          </div>
          <p className="font-sans text-base sm:text-lg text-cream-42 leading-relaxed">
            {t('landingChooseSub')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HyperYouIntro;
