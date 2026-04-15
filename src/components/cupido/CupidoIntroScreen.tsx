import { useLanguage } from '@/i18n';

interface CupidoIntroScreenProps {
  onStart: () => void;
}

const CupidoIntroScreen = ({ onStart }: CupidoIntroScreenProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 pt-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-24 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,59,59,.14) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[340px] h-[340px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(228,84,110,.1) 0%, transparent 70%)' }} />

      <div className="max-w-[620px] w-full text-center relative z-10">
        <div className="na-animate na-d1 font-mono text-[11px] sm:text-[10px] tracking-[0.25em] text-cupido-red uppercase mb-4 flex items-center justify-center gap-2.5">
          <span className="w-[18px] h-px bg-cupido-red inline-block" />
          {t('cupidoIntroLabel')}
        </div>

        <h1 className="na-animate na-d2 font-display text-[clamp(52px,10vw,86px)] font-light leading-[0.88] tracking-tight mb-5">
          {t('cupidoIntroHeadline1')}<br /><em className="italic text-cupido-red">{t('cupidoIntroHeadline2')}</em>
        </h1>

        <p className="na-animate na-d3 font-sans text-base sm:text-lg text-cream-64 leading-relaxed max-w-[520px] mx-auto mb-6">
          {t('cupidoIntroBody')}<br />
          <strong className="text-cream-86">{t('cupidoIntroBodyStrong')}</strong> {t('cupidoIntroBodyEnd')}
        </p>

        <div className="na-animate na-d4 flex gap-2 justify-center flex-wrap mb-7">
          <span className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cupido-red-22 text-cupido-red bg-cupido-red-09">{t('cupidoIntroBadge1')}</span>
          {[t('cupidoIntroBadge2'), t('cupidoIntroBadge3')].map(b => (
            <span key={b} className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cream-15 text-cream-42">{b}</span>
          ))}
          <span className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cream-15 text-cream-42">{t('cupidoIntroBadge4')}</span>
        </div>

        <div className="na-animate na-d5">
          <button onClick={onStart} className="font-sans text-base sm:text-xs font-bold tracking-[0.16em] uppercase px-10 sm:px-12 py-5 sm:py-4 h-14 sm:h-auto bg-cupido-red text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,59,59,.32)] w-full sm:w-auto">
            {t('cupidoIntroCTA')}
          </button>
        </div>

        <div className="na-animate na-d6 flex border border-cream-12 w-fit mx-auto mt-8">
          {[{ n: '4.2K', l: t('cupidoIntroStat1Label') }, { n: '92%', l: t('cupidoIntroStat2Label') }, { n: '5', l: t('cupidoIntroStat3Label') }].map((s, i) => (
            <div key={i} className="px-5 sm:px-7 py-4 border-r border-cream-12 last:border-r-0 flex flex-col gap-0.5">
              <span className="font-display text-3xl sm:text-2xl font-semibold text-cupido-red leading-none">{s.n}</span>
              <span className="font-sans text-[11px] sm:text-[10px] text-cream-42">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CupidoIntroScreen;
