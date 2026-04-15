import { useState } from 'react';
import type { CavalloIntakeData } from '@/hooks/useCavalloQuiz';
import { useLanguage } from '@/i18n';

interface CavalloIntakeScreenProps { onComplete: (data: CavalloIntakeData) => void; }

const CavalloIntakeScreen = ({ onComplete }: CavalloIntakeScreenProps) => {
  const { t } = useLanguage();

  const STEPS = [
    { id: 'intent', q: t('cavalloIntentQ'), sub: t('cavalloIntentSub'), type: 'list' as const, opts: [
      { val: 'understand', icon: '🔍', text: t('cavalloIntentUnderstand'), sub: t('cavalloIntentUnderstandSub') },
      { val: 'change', icon: '🔥', text: t('cavalloIntentChange'), sub: t('cavalloIntentChangeSub') },
      { val: 'direction', icon: '🧭', text: t('cavalloIntentDirection'), sub: t('cavalloIntentDirectionSub') },
      { val: 'curious', icon: '✨', text: t('cavalloIntentCurious'), sub: t('cavalloIntentCuriousSub') },
    ]},
    { id: 'gender', q: t('cavalloGenderQ'), sub: t('cavalloGenderSub'), type: 'row' as const, opts: [
      { val: 'feminine', icon: '♀', text: t('cavalloGenderFeminine') },
      { val: 'masculine', icon: '♂', text: t('cavalloGenderMasculine') },
      { val: 'other', icon: '◯', text: t('cavalloGenderOther') },
    ]},
    { id: 'phase', q: t('cavalloPhaseQ'), sub: t('cavalloPhaseSub'), type: 'list' as const, opts: [
      { val: 'transition', icon: '🌱', text: t('cavalloPhaseTransition'), sub: t('cavalloPhaseTransitionSub') },
      { val: 'building', icon: '🏗️', text: t('cavalloPhaseBuilding'), sub: t('cavalloPhaseBuildingSub') },
      { val: 'crisis', icon: '⚡', text: t('cavalloPhaseCrisis'), sub: t('cavalloPhaseCrisisSub') },
      { val: 'stable', icon: '🏔️', text: t('cavalloPhaseStable'), sub: t('cavalloPhaseStableSub') },
    ]},
  ];

  const [step, setStep] = useState(0);
  const [data, setData] = useState<CavalloIntakeData>({ intent: '', gender: '', phase: '', dob: '' });
  const [dobDay, setDobDay] = useState(''); const [dobMonth, setDobMonth] = useState(''); const [dobYear, setDobYear] = useState('');
  const [selected, setSelected] = useState('');

  const pickOption = (val: string) => {
    setSelected(val); const key = STEPS[step].id as keyof CavalloIntakeData; const newData = { ...data, [key]: val }; setData(newData);
    setTimeout(() => { setSelected(''); if (step < STEPS.length - 1) { setStep(step + 1); } else { setStep(STEPS.length); } }, 350);
  };

  const finishIntake = () => { const dob = dobDay && dobMonth && dobYear ? `${dobDay}/${dobMonth}/${dobYear}` : ''; onComplete({ ...data, dob }); };
  const skipDob = () => { onComplete({ ...data, dob: 'skip' }); };
  const isDobStep = step >= STEPS.length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 pt-24 relative overflow-hidden">
      <div className="absolute top-[5%] -right-24 w-[400px] h-[400px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,139,111,.1) 0%, transparent 70%)' }} />
      <div className="max-w-[560px] w-full relative z-10">
        <div className="flex gap-1 mb-7">
          {[0, 1, 2, 3].map(i => (<div key={i} className={`h-[3px] flex-1 transition-colors duration-300 ${i < step ? 'bg-cavallo-em' : i === step ? 'bg-cavallo-gl' : 'bg-cream-15'}`} />))}
        </div>
        {!isDobStep && STEPS[step] && (
          <div key={step} className="na-animate na-d1">
            <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.3em] text-cavallo-em uppercase mb-2 flex items-center gap-2.5"><span className="w-[18px] h-px bg-cavallo-em inline-block" />{t('cavalloIntakeLabel')}</div>
            <h2 className="font-display text-2xl sm:text-[28px] font-light leading-tight mb-1" dangerouslySetInnerHTML={{ __html: STEPS[step].q.replace(/<em>/g, '<em class="italic text-cavallo-em">') }} />
            <p className="font-sans text-base sm:text-lg text-cream-42 mb-4 leading-relaxed">{STEPS[step].sub}</p>
            <div className={`flex ${STEPS[step].type === 'row' ? 'flex-row gap-1.5' : 'flex-col gap-1.5'}`}>
              {STEPS[step].opts.map(opt => (
                <button key={opt.val} onClick={() => pickOption(opt.val)} className={`text-left p-4 border cursor-pointer transition-all duration-150 flex items-center gap-3 ${STEPS[step].type === 'row' ? 'flex-1 flex-col text-center py-5' : ''} ${selected === opt.val ? 'border-cavallo-em bg-cavallo-gd' : 'border-cream-12 bg-cream-06 hover:border-cavallo-gl hover:bg-cavallo-gd'}`}>
                  <span className={`${STEPS[step].type === 'row' ? 'text-2xl' : 'text-lg w-6 text-center flex-shrink-0'}`}>{opt.icon}</span>
                  <div>
                    <div className="font-sans text-base sm:text-[15px] text-cream-86 leading-normal">{opt.text}</div>
                    {'sub' in opt && opt.sub && (<div className="font-sans text-sm sm:text-[13px] text-cream-42 mt-0.5">{opt.sub}</div>)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        {isDobStep && (
          <div className="na-animate na-d1">
            <h2 className="font-display text-2xl sm:text-[28px] font-light leading-tight mb-1" dangerouslySetInnerHTML={{ __html: t('cavalloDOBHeadline').replace(/<em>/g, '<em class="italic text-cavallo-em">') }} />
            <p className="font-sans text-base sm:text-lg text-cream-42 mb-4 leading-relaxed">{t('cavalloDOBSub')}</p>
            <div className="flex gap-2 items-center mb-2">
              <input value={dobDay} onChange={e => { setDobDay(e.target.value); if (e.target.value.length >= 2) document.getElementById('cavallo-dob-mm')?.focus(); }} placeholder="DD" maxLength={2} inputMode="numeric" className="flex-1 h-12 px-4 bg-cream-08 border border-cream-15 text-foreground font-sans text-base text-center outline-none transition-colors focus:border-cavallo-em placeholder:text-cream-42" />
              <span className="text-cream-42 text-lg">/</span>
              <input id="cavallo-dob-mm" value={dobMonth} onChange={e => { setDobMonth(e.target.value); if (e.target.value.length >= 2) document.getElementById('cavallo-dob-yy')?.focus(); }} placeholder="MM" maxLength={2} inputMode="numeric" className="flex-1 h-12 px-4 bg-cream-08 border border-cream-15 text-foreground font-sans text-base text-center outline-none transition-colors focus:border-cavallo-em placeholder:text-cream-42" />
              <span className="text-cream-42 text-lg">/</span>
              <input id="cavallo-dob-yy" value={dobYear} onChange={e => setDobYear(e.target.value)} placeholder="YYYY" maxLength={4} inputMode="numeric" className="flex-[1.6] h-12 px-4 bg-cream-08 border border-cream-15 text-foreground font-sans text-base text-center outline-none transition-colors focus:border-cavallo-em placeholder:text-cream-42" />
            </div>
            <button onClick={skipDob} className="font-sans text-sm sm:text-[11px] text-cream-42 cursor-pointer text-center w-full mb-4 hover:text-cavallo-em transition-colors">{t('cavalloDOBSkip')}</button>
            <button onClick={finishIntake} className="w-full font-sans text-base sm:text-xs font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-5 sm:py-4 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)]">{t('cavalloDOBCTA')}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CavalloIntakeScreen;
