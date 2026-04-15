import { useLanguage } from '@/i18n';

interface CavalloIntroScreenProps { onStart: () => void; }

const CavalloIntroScreen = ({ onStart }: CavalloIntroScreenProps) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 pt-24 relative overflow-hidden">
      <div className="absolute -top-20 -left-28 w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,139,111,.08) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-16 -right-20 w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(77,173,160,.06) 0%, transparent 70%)' }} />
      <div className="max-w-[620px] w-full text-center relative z-10">
        <div className="na-animate na-d1 font-mono text-[11px] sm:text-[10px] tracking-[0.25em] text-cavallo-em uppercase mb-4 flex items-center justify-center gap-2.5">
          <span className="w-[18px] h-px bg-cavallo-em inline-block" />{t('cavalloIntroLabel')}
        </div>
        <h1 className="na-animate na-d2 font-display text-[clamp(46px,9vw,86px)] font-light leading-[0.9] tracking-tight mb-5">
          {t('cavalloIntroHeadline1')} <em className="italic text-cavallo-em">{t('cavalloIntroHeadline2')}</em><br />{t('cavalloIntroHeadline3').split('\n').map((l,i) => <span key={i}>{l}{i===0 && <br/>}</span>)}
        </h1>
        <p className="na-animate na-d3 font-sans text-base sm:text-lg text-cream-64 leading-relaxed max-w-[520px] mx-auto mb-6">
          {t('cavalloIntroBody')} <strong className="text-cream-86">{t('cavalloIntroBodyStrong')}</strong> {t('cavalloIntroBodyEnd')}
        </p>
        <div className="na-animate na-d4 flex gap-2 justify-center flex-wrap mb-7">
          <span className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cavallo-gl text-cavallo-em bg-cavallo-gd">{t('cavalloIntroBadge1')}</span>
          {[t('cavalloIntroBadge2'), t('cavalloIntroBadge3')].map(b => (<span key={b} className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cavallo-gl text-cavallo-em bg-cavallo-gd">{b}</span>))}
          <span className="font-mono text-[10px] sm:text-[9px] tracking-[0.14em] uppercase px-3.5 py-2 border border-cream-15 text-cream-42">{t('cavalloIntroBadge4')}</span>
        </div>
        <div className="na-animate na-d5 flex border border-cream-12 w-fit mx-auto mb-8">
          {[{ n: '5', l: t('cavalloIntroStat1') }, { n: '12', l: t('cavalloIntroStat2') }, { n: '30', l: t('cavalloIntroStat3') }].map((s, i) => (
            <div key={i} className="px-5 sm:px-7 py-4 border-r border-cream-12 last:border-r-0 flex flex-col gap-0.5">
              <span className="font-display text-3xl sm:text-2xl font-semibold text-cavallo-em leading-none">{s.n}</span>
              <span className="font-sans text-[11px] sm:text-[10px] text-cream-42">{s.l}</span>
            </div>
          ))}
        </div>
        <div className="na-animate na-d6">
          <button onClick={onStart} className="font-sans text-base sm:text-xs font-bold tracking-[0.16em] uppercase px-10 sm:px-12 py-5 sm:py-4 h-14 sm:h-auto bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)] w-full sm:w-auto">
            {t('cavalloIntroCTA')}
          </button>
        </div>
        <p className="na-animate na-d7 font-mono text-[9px] tracking-[0.14em] uppercase text-cream-15 mt-5">
          {t('cavalloIntroHint')}
        </p>
      </div>
    </div>
  );
};

export default CavalloIntroScreen;
