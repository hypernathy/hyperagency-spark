import { useEffect, useState } from 'react';
import { User, Map, Share2 } from 'lucide-react';
import type { CupidoResultType } from '@/data/cupidoQuizData';
import type { IntakeData } from '@/components/cupido/CupidoIntakeScreen';
import CupidoResultHero from '@/components/cupido/result/CupidoResultHero';
import CupidoResultProfile from '@/components/cupido/result/CupidoResultProfile';
import CupidoResultTier1 from '@/components/cupido/result/CupidoResultTier1';
import CupidoResultTier2 from '@/components/cupido/result/CupidoResultTier2';
import CupidoResultTier3 from '@/components/cupido/result/CupidoResultTier3';
import CupidoResultFullOS from '@/components/cupido/result/CupidoResultFullOS';
import CupidoResultShare from '@/components/cupido/result/CupidoResultShare';
import { useLanguage } from '@/i18n';

interface CupidoResultScreenProps {
  result: CupidoResultType;
  userName: string;
  intake: IntakeData;
  onRetake: () => void;
}

const CupidoResultScreen = ({ result: d, userName, intake, onRetake }: CupidoResultScreenProps) => {
  const { t } = useLanguage();
  const [animatedScores, setAnimatedScores] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScores(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const genderLabel = intake.gender === 'feminine' ? t('intakeFeminine') : intake.gender === 'masculine' ? t('intakeMasculine') : '';
  const statusLabel = intake.status === 'single' ? t('intakeSingle') : intake.status === 'relationship' ? t('intakeRelationship') : intake.status === 'complicated' ? t('intakeComplicated') : '';
  const intentLabel = intake.intent === 'understand' ? t('intakeUnderstand') : intake.intent === 'fix' ? t('intakeFix') : intake.intent === 'find' ? t('intakeFind') : intake.intent === 'curious' ? t('intakeCurious') : '';
  const profileTags = [genderLabel, statusLabel, intentLabel].filter(Boolean);
  const dobTag = intake.dob && intake.dob !== 'skip' ? `🌙 ${intake.dob}` : '';

  return (
    <div className="min-h-screen flex flex-col items-stretch pt-24 px-4 sm:px-6 pb-20 relative overflow-hidden">
      <div className="max-w-[740px] w-full mx-auto">
        <CupidoResultHero d={d} profileTags={profileTags} dobTag={dobTag} />

        <Block color={d.color} borderColor={d.cl} bg={d.cd} label={`${userName} · ${t('cupidoResultGreeting')}`} icon={<User className="w-4 h-4" />} className="na-animate na-d2">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.intro }} />
        </Block>

        <CupidoResultProfile d={d} animatedScores={animatedScores} />

        <Block color={d.color} borderColor={d.cl} label={t('cupidoResultRelModel')} icon={<User className="w-4 h-4" />} className="na-animate na-d4">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.rel }} />
        </Block>

        {/* Journey strip */}
        <Block color={d.color} label={t('cupidoResultJourney')} icon={<Map className="w-4 h-4" />} className="na-animate na-d5">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-4">{t('resultJourneyDesc')}</p>
          <div className="flex flex-col sm:flex-row border border-cream-15 overflow-hidden">
            {[
              { num: t('tier01'), name: 'Love Report', price: '€13', active: false },
              { num: t('tier02'), name: 'CupidYou Companion™', price: '€7/mo', active: true, useColor: true },
              { num: t('tier03'), name: 'CupidYou Program', price: '€33', active: false },
              { num: t('tierFullOS'), name: 'All-inclusive', price: '€133', active: true, useRed: true },
            ].map((tier, i) => (
              <div key={i} className={`flex-1 p-4 border-b sm:border-b-0 sm:border-r border-cream-12 last:border-r-0 last:border-b-0 text-center flex flex-col gap-1 ${tier.active ? 'bg-cupido-red-09' : ''}`}
                style={tier.active ? { borderBottom: `2px solid ${tier.useRed ? 'hsl(var(--cupido-red))' : d.color}` } : {}}>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase" style={{ color: tier.useColor ? d.color : tier.useRed ? 'hsl(var(--cupido-red))' : 'hsl(var(--cream-42))' }}>{tier.num}</div>
                <div className="font-display text-base sm:text-sm font-semibold text-foreground leading-none">{tier.name}</div>
                <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.05em]" style={{ color: tier.useColor ? d.color : 'hsl(var(--cupido-red))' }}>{tier.price}</div>
              </div>
            ))}
          </div>
        </Block>

        <CupidoResultTier1 d={d} />
        <CupidoResultTier2 d={d} />
        <CupidoResultTier3 d={d} />
        <CupidoResultFullOS d={d} />
        <CupidoResultShare d={d} onRetake={onRetake} />
      </div>
    </div>
  );
};

export function Block({ color, borderColor, bg, label, icon, className, children }: {
  color?: string; borderColor?: string; bg?: string; label: string; icon?: React.ReactNode; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={`p-5 sm:p-7 border border-cream-12 bg-cream-06 mb-[3px] ${className || ''}`}
      style={borderColor || bg ? { borderColor, background: bg } : {}}>
      <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.25em] uppercase text-cream-42 mb-3.5 sm:mb-3 flex items-center gap-2.5" style={color ? { color } : {}}>
        {icon}{label}
        <span className="flex-1 h-px bg-cream-12" />
      </div>
      {children}
    </div>
  );
}

export default CupidoResultScreen;
