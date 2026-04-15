import { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface CupidoLoadingScreenProps { onComplete: () => void; }

const CupidoLoadingScreen = ({ onComplete }: CupidoLoadingScreenProps) => {
  const { t } = useLanguage();
  const STEPS = [t('cupidoLoadingStep1'), t('cupidoLoadingStep2'), t('cupidoLoadingStep3'), t('cupidoLoadingStep4'), t('cupidoLoadingStep5')];

  const [activeStep, setActiveStep] = useState(-1);
  const [doneSteps, setDoneSteps] = useState<number[]>([]);
  const triggered = useRef(false);

  useEffect(() => {
    if (triggered.current) return; triggered.current = true;
    STEPS.forEach((_, i) => { setTimeout(() => { if (i > 0) setDoneSteps(prev => [...prev, i - 1]); setActiveStep(i); if (i === STEPS.length - 1) { setTimeout(() => { setDoneSteps(prev => [...prev, i]); onComplete(); }, 600); } }, i * 650 + 350); });
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,59,59,.09) 0%, transparent 70%)' }} />
      <div className="max-w-[280px] sm:max-w-[460px] w-full relative z-10">
        <div className="w-[110px] h-[110px] rounded-full border border-cupido-red-22 flex items-center justify-center mx-auto mb-8 relative" style={{ animation: 'na-pulse 2s ease-in-out infinite' }}>
          <div className="absolute -inset-2 rounded-full border border-cupido-red/10" style={{ animation: 'na-pulse 2s ease-in-out infinite 0.3s' }} />
          <div className="absolute -inset-4 rounded-full border border-cupido-red/5" style={{ animation: 'na-pulse 2s ease-in-out infinite 0.6s' }} />
          <span className="text-[34px]" style={{ animation: 'na-spin 5s linear infinite' }}>♡</span>
        </div>
        <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.3em] text-cupido-red uppercase mb-4 flex items-center justify-center gap-2.5">
          <Heart className="w-4 h-4 text-cupido-red" />
          {t('cupidoLoadingLabel')}
        </div>
        <h2 className="font-display text-[clamp(30px,6vw,46px)] font-light leading-tight mb-4">
          {t('cupidoLoadingHeadline1')}<br />{t('cupidoLoadingHeadline2')} <em className="italic text-cupido-red">{t('cupidoLoadingHeadline3')}</em>
        </h2>
        <div className="my-6 flex flex-col gap-2.5 sm:gap-[7px]">
          {STEPS.map((step, i) => (
            <div key={i} className={`font-mono text-base sm:text-[10px] tracking-[0.14em] uppercase flex items-center gap-2.5 justify-center transition-colors duration-500 ${doneSteps.includes(i) ? 'text-cupido-red' : activeStep === i ? 'text-cream-64' : 'text-cream-15'}`}>
              <div className="w-[6px] h-[6px] sm:w-[5px] sm:h-[5px] rounded-full bg-current flex-shrink-0" />{step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CupidoLoadingScreen;
