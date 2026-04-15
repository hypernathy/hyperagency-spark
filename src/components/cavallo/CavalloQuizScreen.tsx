import { ChevronRight } from 'lucide-react';
import type { CavalloQuestion } from '@/data/cavalloQuizData';
import { useLanguage } from '@/i18n';

interface CavalloQuizScreenProps { currentQ: number; question: CavalloQuestion; totalQuestions: number; progress: number; picks: number[]; onTogglePick: (index: number) => void; onNext: () => void; }

const CavalloQuizScreen = ({ currentQ, question, totalQuestions, progress, picks, onTogglePick, onNext }: CavalloQuizScreenProps) => {
  const { t } = useLanguage();
  const getRank = (index: number) => { const pos = picks.indexOf(index); if (pos === 0) return 'p1'; if (pos === 1) return 'p2'; return ''; };
  const isOff = (index: number) => picks.length >= 2 && !picks.includes(index);
  const isLast = currentQ === totalQuestions - 1;

  return (
    <div className="min-h-screen flex flex-col items-center pt-[72px] px-4 sm:px-6 pb-12 relative overflow-hidden">
      <div className="absolute top-[15%] -right-20 w-[360px] h-[360px] rounded-full blur-[90px] pointer-events-none opacity-80" style={{ background: 'radial-gradient(circle, rgba(46,139,111,.09) 0%, transparent 70%)' }} />
      <div className="max-w-[660px] w-full pt-7 relative z-10">
        <div className="mb-9">
          <div className="flex justify-between mb-2.5">
            <span className="font-mono text-[11px] sm:text-[10px] tracking-[0.2em] text-cavallo-em uppercase">HorsYou™</span>
            <span className="font-mono text-[11px] sm:text-[10px] text-cream-42">{t('neuroQuizLabel')} {currentQ + 1} {t('neuroQuizOf')} {totalQuestions}</span>
          </div>
          <div className="h-0.5 bg-cream-12 relative overflow-visible">
            <div className="h-full relative transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, hsl(var(--cavallo-em)), hsl(var(--cavallo-mint)))' }}>
              <div className="w-[9px] h-[9px] rounded-full bg-cavallo-em absolute -right-1 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(46,139,111,.6)]" />
            </div>
          </div>
        </div>
        <div key={currentQ}>
          <div className="na-animate na-d1 font-mono text-[10px] sm:text-[9px] tracking-[0.25em] text-cavallo-em uppercase mb-2.5">{t('neuroQuizLabel')} {String(currentQ + 1).padStart(2, '0')}</div>
          <div className="na-animate na-d2 font-display text-xl sm:text-2xl font-light leading-tight mb-2">{question.q}</div>
          <p className="na-animate na-d2 font-sans text-base sm:text-lg text-cream-42 mb-7">{question.sub}</p>
          <div className="na-animate na-d3 flex flex-col gap-2.5 sm:gap-[7px] mb-7">
            {question.a.map((a, i) => { const rank = getRank(i); const off = isOff(i); return (
              <button key={i} onClick={() => onTogglePick(i)} className={`text-left p-4 border cursor-pointer transition-all duration-150 flex items-start gap-3.5 relative overflow-hidden ${rank === 'p1' ? 'border-cavallo-em bg-cavallo-gd' : rank === 'p2' ? 'border-cavallo-mint/45 bg-cavallo-forest/10' : 'border-cream-12 bg-cream-06 hover:border-cavallo-gl hover:bg-cavallo-gd'} ${off ? 'opacity-30 pointer-events-none' : ''}`}>
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-transform duration-200 origin-bottom ${rank === 'p1' ? 'bg-cavallo-em scale-y-100' : rank === 'p2' ? 'bg-cavallo-mint scale-y-100' : 'bg-cavallo-em scale-y-0'}`} />
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[10px] sm:text-[9px] mt-0.5 transition-all duration-150 ${rank === 'p1' ? 'bg-cavallo-em border-cavallo-em text-foreground font-bold' : rank === 'p2' ? 'bg-cavallo-mint border-cavallo-mint text-foreground' : 'border-cream-15 text-cream-42'}`}>{rank === 'p1' ? '1' : rank === 'p2' ? '2' : '·'}</div>
                <div>
                  <div className="font-sans text-base sm:text-[15px] text-cream-86 leading-normal">{a.text}</div>
                  <div className={`font-mono text-[10px] sm:text-[9px] tracking-[0.08em] uppercase mt-1 ${rank === 'p1' ? 'text-cavallo-em' : rank === 'p2' ? 'text-cavallo-mint' : 'text-cream-42'}`}>{a.pts}</div>
                </div>
              </button>
            ); })}
          </div>
        </div>
        <p className="font-sans text-[13px] sm:text-[11px] text-cream-42 text-center mb-5" dangerouslySetInnerHTML={{ __html: t('cavalloQuizSelectHint') }} />
        <button onClick={onNext} disabled={picks.length === 0} className="w-full font-sans text-base sm:text-[11px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-5 sm:py-4 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)] disabled:opacity-25 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2">
          {isLast ? t('seeResults') : t('next')} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CavalloQuizScreen;
