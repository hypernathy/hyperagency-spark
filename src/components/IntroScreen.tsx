import { useLanguage } from '@/i18n';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 pt-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-24 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(90,44,140,.14) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[340px] h-[340px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,168,75,.1) 0%, transparent 70%)' }} />

      <div className="max-w-[620px] w-full text-center relative z-10">
        <div className="na-animate na-d1 font-mono text-[11px] sm:text-[10px] tracking-[0.25em] text-gold uppercase mb-4 flex items-center justify-center gap-2.5">
          <span className="w-[18px] h-px bg-gold inline-block" />
          {t('neuroIntroLabel')}
        </div>

        <h1 className="na-animate na-d2 font-display text-[clamp(52px,10vw,86px)] font-light leading-[0.88] tracking-tight mb-5">
          {t('neuroIntroHeadline1')}<br />{t('neuroIntroHeadline2')}<br /><em className="italic text-gold">{t('neuroIntroHeadline3')}<br />{t('neuroIntroHeadline4')}</em>
        </h1>

        <p className="na-animate na-d3 font-sans text-base sm:text-lg text-cream-64 leading-relaxed max-w-[520px] mx-auto mb-6">
          {t('neuroIntroBody')}<br />
          {t('neuroIntroBody').includes('Discover') ? 'Discover' : ''} <strong className="text-cream-86">{t('neuroIntroBodyStrong')}</strong> {t('neuroIntroBodyEnd')}
        </p>

        <div className="na-animate na-d4 flex gap-2 justify-center flex-wrap mb-7">
          {[t('neuroIntroBadge1'), t('neuroIntroBadge2'), t('neuroIntroBadge3')].map(b => (
            <span key={b} className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-gold-22 text-gold bg-gold-09">{b}</span>
          ))}
          <span className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cream-15 text-cream-42">{t('neuroIntroBadge4')}</span>
        </div>

        <div className="na-animate na-d5 flex border border-cream-12 w-fit mx-auto mb-8">
          {[{ n: '5', l: t('neuroIntroStat1') }, { n: '13', l: t('neuroIntroStat2') }, { n: '30', l: t('neuroIntroStat3') }].map((s, i) => (
            <div key={i} className="px-5 sm:px-7 py-4 border-r border-cream-12 last:border-r-0 flex flex-col gap-0.5">
              <span className="font-display text-4xl sm:text-3xl font-semibold text-gold leading-none">{s.n}</span>
              <span className="font-sans text-[11px] sm:text-[10px] text-cream-42">{s.l}</span>
            </div>
          ))}
        </div>

        <div className="na-animate na-d6">
          <button
            onClick={onStart}
            className="font-sans text-base sm:text-xs font-bold tracking-[0.16em] uppercase px-10 sm:px-12 py-5 sm:py-4 h-14 sm:h-auto bg-gold text-background border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,168,75,.32)] w-full sm:w-auto"
          >
            {t('neuroIntroCTA')}
          </button>
        </div>

        <p className="na-animate na-d7 font-mono text-[10px] tracking-[0.14em] uppercase text-cream-15 mt-5">
          {t('neuroIntroHint')}
        </p>
      </div>
    </div>
  );
};

export default IntroScreen;
