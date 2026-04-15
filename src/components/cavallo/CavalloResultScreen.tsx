import { useEffect, useState } from 'react';
import type { CavalloResultType } from '@/data/cavalloQuizData';
import { CAVALLO_ELEMENTS, CAVALLO_ICONS, CAVALLO_SEASONS, CAVALLO_ALLIES, CAVALLO_SHADOWS } from '@/data/cavalloQuizData';
import type { CavalloIntakeData } from '@/hooks/useCavalloQuiz';
import { User, Star, EyeOff, Briefcase, BarChart2, Map, Share2, FileText, MessageCircle, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface CavalloResultScreenProps {
  result: CavalloResultType;
  userName: string;
  intake: CavalloIntakeData;
  scores: Record<string, number>;
  secondaryElement: string;
  onRetake: () => void;
}

function Block({ color, borderColor, bg, label, icon, className, children }: {
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

const CavalloResultScreen = ({ result: d, userName, intake, scores, secondaryElement, onRetake }: CavalloResultScreenProps) => {
  const { t } = useLanguage();
  const [animatedScores, setAnimatedScores] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScores(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const domKey = sorted[0][0];
  const secKey = secondaryElement || sorted[1][0];

  const phaseLabel = intake.phase === 'transition' ? t('intakeTransition') : intake.phase === 'building' ? t('intakeBuilding') : intake.phase === 'crisis' ? t('intakeCrisis') : intake.phase === 'stable' ? t('intakeStable') : '';
  const genderLabel = intake.gender === 'feminine' ? t('intakeFeminine') : intake.gender === 'masculine' ? t('intakeMasculine') : '';
  const profileTags = [genderLabel, phaseLabel].filter(Boolean);
  const dobTag = intake.dob && intake.dob !== 'skip' ? `🌙 ${intake.dob}` : '';

  const dayGrid = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col items-stretch pt-24 px-4 sm:px-6 pb-20 relative overflow-hidden">
      <div className="max-w-[740px] w-full mx-auto">
        {/* HERO */}
        <div className="na-animate na-d1 p-8 sm:p-10 mb-[3px] relative overflow-hidden" style={{ background: d.cd, border: `1px solid ${d.cl}` }}>
          <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${d.cd} 0%, transparent 70%)` }} />
          <div className="relative z-10">
            <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: d.color }}>{d.label}</div>
            <div className="font-display text-[clamp(34px,7vw,60px)] font-semibold leading-[0.95] mb-2" style={{ color: d.color }}>{d.name}</div>
            <div className="font-display text-[17px] italic text-cream-64 mb-5 leading-relaxed max-w-[540px]">{d.tagline}</div>
            <div className="flex flex-wrap gap-1.5">
              {d.tags.map(tag => (
                <span key={tag} className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase px-3 py-1.5 border" style={{ borderColor: d.cl, color: d.color }}>{tag}</span>
              ))}
              {profileTags.map(tag => (
                <span key={tag} className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase px-3 py-1.5 border border-cream-15 text-cream-42">{tag}</span>
              ))}
              {dobTag && <span className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase px-3 py-1.5 border border-cream-15 text-cream-42">{dobTag}</span>}
            </div>
          </div>
        </div>

        {/* COSMIC CARD */}
        <div className="na-animate na-d2 border p-6 sm:p-7 mb-[3px] relative overflow-hidden" style={{ borderColor: d.cl, background: `linear-gradient(135deg, ${d.cd} 0%, rgba(8,8,8,.4) 50%, rgba(77,173,160,.04) 100%)` }}>
          <div className="absolute -top-16 -right-16 w-[200px] h-[200px] pointer-events-none" style={{ background: `radial-gradient(circle, ${d.cd} 0%, transparent 70%)` }} />
          <div className="relative z-10">
            <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.25em] uppercase text-cream-42 mb-4 flex items-center gap-2.5" style={{ color: d.color }}>
              {t('cavalloResultElementalMap')} · {d.name}
              <span className="flex-1 h-px bg-cream-12" />
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-1 mb-4">
              {Object.entries(CAVALLO_ELEMENTS).map(([key, name]) => (
                <div key={key} className={`text-center p-2.5 border ${domKey === key ? 'border-current' : 'border-cream-15'}`} style={domKey === key ? { borderColor: d.color, background: d.cd, color: d.color } : {}}>
                  <div className="text-lg mb-1">{CAVALLO_ICONS[key]}</div>
                  <div className="font-mono text-[8px] tracking-[0.12em] uppercase">{name}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 mt-3">
              <div className="flex-1 min-w-[140px]">
                <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream-42 mb-1">{t('cavalloResultDominant')}</div>
                <div className="font-display text-[22px] font-semibold" style={{ color: d.color }}>{CAVALLO_ICONS[domKey]} {CAVALLO_ELEMENTS[domKey]}</div>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream-42 mb-1">{t('cavalloResultSecondary')}</div>
                <div className="font-sans text-sm text-cream-64">{CAVALLO_ICONS[secKey]} {CAVALLO_ELEMENTS[secKey]}</div>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream-42 mb-1">{t('cavalloResultSeason')}</div>
                <div className="font-sans text-sm text-cream-64">{CAVALLO_SEASONS[domKey]}</div>
              </div>
              <div className="flex-1 min-w-[100px]">
                <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream-42 mb-1">{t('cavalloResultAlly')}</div>
                <div className="font-sans text-sm text-cavallo-em">{CAVALLO_ALLIES[domKey]}</div>
              </div>
              <div className="flex-1 min-w-[100px]">
                <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream-42 mb-1">{t('cavalloResultAntagonist')}</div>
                <div className="font-sans text-sm text-cream-42">{CAVALLO_SHADOWS[domKey]}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <Block color={d.color} borderColor={d.cl} bg={d.cd} label={`${t('cavalloResultHi')} ${userName} · ${t('cavalloResultGreeting')}`} icon={<User className="w-4 h-4" />} className="na-animate na-d2">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.intro }} />
        </Block>

        {/* Cosmic Message */}
        <Block color={d.color} borderColor={d.cl} label={t('cavalloResultCosmicMsg')} icon={<Star className="w-4 h-4" />} className="na-animate na-d3">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.cosmicMsg }} />
        </Block>

        {/* Profile */}
        <Block color={d.color} label={t('cavalloResultProfile')} icon={<User className="w-4 h-4" />} className="na-animate na-d3">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.desc }} />
        </Block>

        {/* Scores */}
        <Block color={d.color} label={t('cavalloResultScores')} icon={<BarChart2 className="w-4 h-4" />} className="na-animate na-d3">
          {d.scores.map(s => (
            <div key={s.l} className="flex items-center gap-3 mb-2.5">
              <div className="font-mono text-sm sm:text-[9px] tracking-[0.1em] uppercase text-cream-42 w-[100px] flex-shrink-0">{s.l}</div>
              <div className="flex-1 h-[3px] bg-cream-12">
                <div className="h-full transition-all duration-1000 ease-out" style={{ width: animatedScores ? `${s.p}%` : '0%', background: d.color }} />
              </div>
              <div className="font-mono text-sm sm:text-[9px] text-cream-42 w-7 text-right flex-shrink-0">{s.p}%</div>
            </div>
          ))}
        </Block>

        {/* Powers */}
        <Block color={d.color} label={t('cavalloResultPowers')} icon={<Star className="w-4 h-4" />} className="na-animate na-d4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {d.powers.map(p => (
              <div key={p.name} className="p-3 border flex gap-2.5 items-start" style={{ borderColor: d.cl, background: d.cd }}>
                <div className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2" style={{ background: d.color }} />
                <div>
                  <div className="font-sans text-base sm:text-sm font-semibold text-foreground mb-0.5">{p.name}</div>
                  <div className="font-sans text-base sm:text-[13px] text-cream-42 leading-snug">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Blinds */}
        <Block label={t('cavalloResultBlinds')} icon={<EyeOff className="w-4 h-4" />} className="na-animate na-d4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {d.blinds.map(b => (
              <div key={b.name} className="p-3 border border-cream-12 bg-cream-06 flex gap-2.5 items-start">
                <div className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2 bg-cream-42" />
                <div>
                  <div className="font-sans text-base sm:text-sm font-semibold text-foreground mb-0.5">{b.name}</div>
                  <div className="font-sans text-base sm:text-[13px] text-cream-42 leading-snug">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Blueprint */}
        <Block color={d.color} borderColor={d.cl} label={t('cavalloResultBlueprint')} icon={<Briefcase className="w-4 h-4" />} className="na-animate na-d4">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.biz }} />
        </Block>

        {/* Journey strip */}
        <Block color={d.color} label={t('cavalloResultJourney')} icon={<Map className="w-4 h-4" />} className="na-animate na-d5">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-4">{t('cavalloResultJourneyDesc')}</p>
          <div className="flex flex-col sm:flex-row border border-cream-15 overflow-hidden">
            {[
              { num: 'Tier 01', name: t('cavalloResultJourneyTier1'), price: '€13', active: false },
              { num: 'Tier 02', name: t('cavalloResultJourneyTier2'), price: '€7/mo', active: true, useColor: true },
              { num: 'Tier 03', name: t('cavalloResultJourneyTier3'), price: '€33', active: false },
              { num: 'Full OS', name: t('cavalloResultJourneyFullOS'), price: '€133', active: true, useGreen: true },
            ].map((tier, i) => (
              <div key={i} className={`flex-1 p-4 border-b sm:border-b-0 sm:border-r border-cream-12 last:border-r-0 last:border-b-0 text-center flex flex-col gap-1 ${tier.active ? 'bg-cavallo-gd' : ''}`}
                style={tier.active ? { borderBottom: `2px solid ${tier.useGreen ? 'hsl(var(--cavallo-em))' : d.color}` } : {}}>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase" style={{ color: tier.useColor ? d.color : tier.useGreen ? 'hsl(var(--cavallo-em))' : 'hsl(var(--cream-42))' }}>{tier.num}</div>
                <div className="font-display text-base sm:text-sm font-semibold text-foreground leading-none">{tier.name}</div>
                <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.05em]" style={{ color: tier.useColor ? d.color : 'hsl(var(--cavallo-em))' }}>{tier.price}</div>
              </div>
            ))}
          </div>
        </Block>

        {/* Tier 1 - Cosmic Report */}
        <div className="na-animate na-d5">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 pb-2 flex items-center gap-2.5">
            <span style={{ color: d.color }}>01</span> {t('cavalloResultTier1Label')}
          </div>
          <div className="border p-5 sm:p-7 mb-[3px] flex flex-col sm:flex-row gap-5" style={{ borderColor: d.cl }}>
            <div className="flex-1">
              <FileText className="w-6 h-6 mb-2" style={{ color: d.color }} />
              <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase mb-2" style={{ color: d.color }}>{t('cavalloResultTier1Delivery')}</div>
              <div className="font-display text-[24px] sm:text-[22px] font-semibold text-foreground mb-2 leading-tight">{t('cavalloResultTier1Name')}<br />{d.name}</div>
              <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed">{t('cavalloResultTier1Desc')}</p>
              <div className="mt-3 flex flex-col gap-1.5 sm:gap-1">
                {d.reportItems.map(r => (
                  <div key={r} className="font-sans text-base sm:text-[13px] text-cream-64 flex items-start gap-[7px]">
                    <span className="text-cavallo-em text-[10px] mt-0.5 flex-shrink-0">—</span>{r}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 sm:text-right sm:min-w-[120px]">
              <div className="font-display text-[42px] font-semibold leading-none" style={{ color: d.color }}>€13</div>
              <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase text-cream-42 mt-1">{t('cavalloResultTier1Price')}</div>
              <button onClick={() => alert('→ Checkout Cosmic Report €13')} className="mt-3.5 w-full font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-6 sm:px-4 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)]">{t('cavalloResultTier1CTA')}</button>
            </div>
          </div>
        </div>

        {/* Tier 2 - HorsYou Companion */}
        <div className="na-animate na-d5 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 pb-2 flex items-center gap-2.5">
            <span style={{ color: d.color }}>02</span> {t('cavalloResultTier2Label')}
          </div>
          <div className="border overflow-hidden mb-[3px]" style={{ borderColor: d.cl }}>
            <div className="p-5 sm:p-7 flex flex-col sm:flex-row gap-4" style={{ background: d.cd }}>
              <div className="flex-1">
                <MessageCircle className="w-6 h-6 mb-2" style={{ color: d.color }} />
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: d.color }}>{t('cavalloResultTier2Sub')}</div>
                <div className="font-display text-[20px] font-semibold text-foreground mb-2 leading-tight">HorsYou Companion™</div>
                <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed max-w-[420px]">
                  {t('cavalloResultTier2Desc')}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {[t('cavalloResultTier2Tag1'), t('cavalloResultTier2Tag2'), t('cavalloResultTier2Tag3'), t('cavalloResultTier2Tag4')].map(tag => (
                    <span key={tag} className="font-mono text-[8px] tracking-[0.12em] uppercase px-3 py-1.5 border" style={{ borderColor: d.cl, color: d.color }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 sm:text-right">
                <div className="font-display text-[50px] font-semibold leading-none" style={{ color: d.color }}>€7</div>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase text-cream-42 mt-0.5">{t('cavalloResultTier2PerMonth')}</div>
                <button onClick={() => alert('→ Checkout HorsYou Companion €7/mo')} className="mt-3.5 w-full font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-5 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)]">{t('cavalloResultTier2CTA')}</button>
                <div className="font-sans text-[10px] text-cream-42 mt-2 text-center">{t('cavalloResultTier2Cancel')}</div>
              </div>
            </div>
            {/* Companion Preview */}
            <div className="border-t border-cream-12">
              <div className="px-5 py-3 border-b border-cream-12">
                <div className="font-mono text-[8px] tracking-[0.18em] uppercase flex items-center gap-2" style={{ color: d.color }}>
                  <span className="w-3 h-px" style={{ background: d.color }} />{t('cavalloResultCompanionHow')}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                {/* Panel 1: Daily prompt */}
                <div className="flex-1 p-5 border-r border-cream-12 sm:border-b-0 border-b">
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-2" style={{ color: d.color }}>
                    <span className="w-3 h-px" style={{ background: d.color }} />{t('cavalloResultCompanionMorning')}
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-cream-42 mb-2">8:00 AM · {t('cavalloResultCompanionPromptDay')} 19</div>
                  <div className="p-3 border mb-1.5" style={{ borderColor: d.cl }}>
                    <div className="font-mono text-[8px] tracking-[0.15em] uppercase mb-1.5" style={{ color: d.color }}>Day 19 · {d.companion.week3}</div>
                    <div className="font-display text-[16px] italic text-cream-86 leading-relaxed mb-2">{d.companion.prompts[1]}</div>
                    <textarea className="w-full min-h-[52px] bg-cream-08 border border-cream-15 text-cream-64 font-sans text-[11px] p-2 resize-none outline-none placeholder:text-cream-42" placeholder={t('cavalloResultCompanionPlaceholder')} rows={3} />
                    <button className="w-full mt-1.5 py-2 font-mono text-[9px] tracking-[0.15em] uppercase border" style={{ color: d.color, borderColor: d.cl }}>{t('cavalloResultCompanionSave')}</button>
                  </div>
                </div>
                {/* Panel 2: Progress */}
                <div className="flex-1 p-5 border-r border-cream-12 sm:border-b-0 border-b">
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-2" style={{ color: d.color }}>
                    <span className="w-3 h-px" style={{ background: d.color }} />{t('cavalloResultCompanionProgress')}
                  </div>
                  <div className="flex justify-between font-mono text-[9px] text-cream-42 mb-2">
                    <span>Day 19 / 30</span><span style={{ color: d.color }}>63%</span>
                  </div>
                  <div className="h-1.5 bg-cream-12 overflow-hidden mb-3">
                    <div className="h-full transition-all duration-1000 ease-out" style={{ width: animatedScores ? '63%' : '0%', background: d.color }} />
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-3">
                    {dayGrid.map(day => (
                      <div key={day} className={`aspect-square border flex items-center justify-center font-mono text-[8px] ${day <= 18 ? '' : day === 19 ? '' : 'text-cream-42'}`}
                        style={day <= 18 ? { background: d.color, borderColor: d.color, color: '#080808' } : day === 19 ? { borderColor: d.color, color: d.color } : { borderColor: 'hsl(var(--cream-15))' }}>
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <div className="font-display text-[28px] font-semibold" style={{ color: d.color }}>6</div>
                    <div className="font-sans text-[10px] text-cream-42 leading-tight">{t('cavalloResultCompanionStreak')}<br /><span style={{ color: d.color }}>streak 🔥</span></div>
                  </div>
                </div>
                {/* Panel 3: Modules */}
                <div className="flex-1 p-5">
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-2" style={{ color: d.color }}>
                    <span className="w-3 h-px" style={{ background: d.color }} />{t('cavalloResultCompanionModules')}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { key: 'W1', name: d.companion.week1, status: '✓', done: true },
                      { key: 'W2', name: d.companion.week2, status: '✓', done: true },
                      { key: 'W3', name: d.companion.week3, status: '→', active: true },
                      { key: 'W4', name: d.companion.week4, status: '🔒', locked: true },
                    ].map(m => (
                      <div key={m.key} className={`p-2.5 border flex items-center gap-2.5 ${m.locked ? 'opacity-40' : ''}`}
                        style={m.done ? { borderColor: d.color, color: d.color } : m.active ? { borderColor: d.cl } : { borderColor: 'hsl(var(--cream-15))' }}>
                        <div className="font-mono text-[9px] text-cream-42 w-5 flex-shrink-0" style={m.done ? { color: d.color } : {}}>{m.key}</div>
                        <div className="font-sans text-[11px] text-cream-86 flex-1">{m.name}</div>
                        <div className="font-mono text-[8px] text-cream-42 flex-shrink-0" style={m.done || m.active ? { color: d.color } : {}}>{m.status}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-cream-12">
                    <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-cream-42 mb-2">{t('cavalloResultCompanionWhatsApp')}</div>
                    <div className="flex flex-col gap-2">
                      <div className="max-w-[88%] p-2.5 bg-cream-08 border border-cream-15 self-start rounded-sm">
                        <div className="font-sans text-[12px] text-cream-86 leading-relaxed">📊 <strong>{t('cavalloResultCompanionWeekRecap')}</strong><br />{t('cavalloResultCompanionRecapBody')} <em>{d.companion.mod2}</em> 🔥</div>
                        <div className="font-mono text-[8px] text-cream-42 mt-1">Fri · 6:00 PM</div>
                      </div>
                      <div className="max-w-[88%] p-2.5 border self-end rounded-sm text-right" style={{ background: d.cd, borderColor: d.cl }}>
                        <div className="font-sans text-[12px] text-foreground leading-relaxed">{t('cavalloResultCompanionUserReply')}</div>
                        <div className="font-mono text-[8px] text-cream-42 mt-1">Fri · 6:23 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3 - HorsYou Program */}
        <div className="na-animate na-d6 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 pb-2 flex items-center gap-2.5">
            <span className="text-cavallo-em">03</span> {t('cavalloResultTier3Label')}
          </div>
          <div className="border border-cream-15 overflow-hidden mb-[3px]">
            <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-7">
              <div className="flex-1">
                <BookOpen className="w-6 h-6 text-cavallo-em mb-2" />
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase text-cavallo-em mb-1.5">{t('cavalloResultTier3Sub')}</div>
                <div className="font-display text-[22px] font-semibold text-foreground mb-2 leading-tight">HorsYou Program™</div>
                <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed max-w-[420px]">
                  {t('cavalloResultTier3Desc')}
                </p>
              </div>
              <div className="flex-shrink-0 sm:text-right">
                <div className="font-display text-[50px] font-semibold text-cavallo-em leading-none">€33</div>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase text-cream-42 mt-0.5">{t('cavalloResultTier3Price')}</div>
                <button onClick={() => alert('→ Waitlist HorsYou Program €33')} className="mt-3.5 w-full font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-5 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)]">{t('cavalloResultTier3CTA')}</button>
              </div>
            </div>
            <div className="border-t border-cream-12 p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {[
                { num: 'Module 01', name: t('cavalloResultTier3Mod1'), sub: t('cavalloResultTier3Mod1Sub') },
                { num: 'Module 02', name: t('cavalloResultTier3Mod2'), sub: t('cavalloResultTier3Mod2Sub') },
                { num: 'Module 03', name: t('cavalloResultTier3Mod3'), sub: t('cavalloResultTier3Mod3Sub') },
                { num: 'Module 04', name: t('cavalloResultTier3Mod4'), sub: t('cavalloResultTier3Mod4Sub') },
                { num: 'Module 05', name: t('cavalloResultTier3Mod5'), sub: t('cavalloResultTier3Mod5Sub') },
                { num: 'Module 06', name: t('cavalloResultTier3Mod6'), sub: t('cavalloResultTier3Mod6Sub') },
                { num: 'Module 07', name: t('cavalloResultTier3Mod7'), sub: t('cavalloResultTier3Mod7Sub') },
                { num: `Module 08 🐴`, name: t('cavalloResultTier3Mod8'), sub: t('cavalloResultTier3Mod8Sub'), bonus: true },
              ].map(m => (
                <div key={m.num} className={`p-3 border ${m.bonus ? 'border-cavallo-gl bg-cavallo-gd' : 'border-cream-12 bg-cream-06'}`}>
                  <div className={`font-mono text-[8px] tracking-[0.15em] uppercase mb-1 ${m.bonus ? 'text-cavallo-em' : 'text-cream-42'}`}>{m.num}</div>
                  <div className="font-sans text-[12px] font-semibold text-cream-86 mb-0.5">{m.name}</div>
                  <div className={`font-sans text-[10px] ${m.bonus ? 'text-cavallo-em' : 'text-cream-42'}`}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full OS */}
        <div className="na-animate na-d7 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cavallo-em pb-2 flex items-center gap-2.5">
            <span>🐴</span> {t('cavalloResultFullOSLabel')}
          </div>
          <div className="border border-cavallo-gl bg-cavallo-gd overflow-hidden mb-[3px] relative">
            <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,139,111,.07) 0%, transparent 65%)' }} />
            <div className="p-6 sm:p-8 relative z-10">
              <Layers className="w-6 h-6 text-cavallo-em mb-3" />
              <div className="font-display text-[clamp(28px,5vw,42px)] font-light leading-none mb-2">
                {t('cavalloResultFullOSThe')} <em className="italic text-cavallo-em">Full OS</em><br />{t('cavalloResultFullOSHeadline')}
              </div>
              <p className="font-sans text-base sm:text-lg text-cream-64 max-w-[480px] leading-relaxed mb-7">
                {t('cavalloResultFullOSDesc')}
              </p>

              <div className="flex flex-col border border-cavallo-gl mb-6">
                {[
                  { icon: '📄', name: `${t('cavalloResultTier1Name')} ${d.name}`, sub: t('cavalloResultFullOSCompletePDF'), price: '€13' },
                  { icon: '🐴', name: t('cavalloResultFullOSCompanionLine'), sub: t('cavalloResultFullOSCompanionSub'), price: '€21' },
                  { icon: '🎓', name: 'HorsYou Program™', sub: t('cavalloResultFullOSProgramSub'), price: '€33' },
                  { icon: '⚡', name: t('cavalloResultFullOSSessionName'), sub: t('cavalloResultFullOSSessionSub'), price: '€66' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-4 py-3 border-b border-cream-12 last:border-b-0">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm w-[22px] text-center flex-shrink-0">{row.icon}</span>
                      <div>
                        <div className="font-sans text-[12px] text-cream-86">{row.name}</div>
                        <div className="font-mono text-[8px] tracking-[0.08em] uppercase text-cream-42 mt-0.5">{row.sub}</div>
                      </div>
                    </div>
                    <div className="font-display text-[15px] text-cream-42 line-through flex-shrink-0">{row.price}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center px-4 py-3 bg-cavallo-em/5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm w-[22px] text-center flex-shrink-0 text-cavallo-em">✦</span>
                    <div className="font-sans text-[12px] text-cavallo-em font-semibold">{t('cavalloResultFullOSTotalValue')}</div>
                  </div>
                  <div className="font-display text-[20px] text-cream-42 line-through flex-shrink-0">€133+</div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="font-display text-[clamp(48px,9vw,72px)] font-semibold text-cavallo-em leading-none">€133</div>
                <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.18em] uppercase text-cream-42 mt-2">{t('cavalloResultFullOSAllInclusive')}</div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <button onClick={() => alert('→ Full OS waitlist €133')} className="w-full font-sans text-base sm:text-[13px] font-bold tracking-[0.16em] uppercase px-10 sm:px-14 h-14 sm:h-auto py-5 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)]">{t('cavalloResultFullOSCTA')}</button>
                <div className="font-sans text-[13px] sm:text-[11px] text-cream-42">{t('cavalloResultFullOSGuarantee')}</div>
                <div className="font-sans text-[10px] text-cream-42 flex items-center gap-2 flex-wrap justify-center">
                  <span style={{ color: d.color }}>✓</span> {t('cavalloResultFullOSCheck1')}
                  <span style={{ color: d.color }}>✓</span> {t('cavalloResultFullOSCheck2')}
                  <span style={{ color: d.color }}>✓</span> {t('cavalloResultFullOSCheck3')}
                  <span style={{ color: d.color }}>✓</span> {t('cavalloResultFullOSCheck4')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share */}
        <Block color={d.color} label={t('cavalloResultShareLabel')} icon={<Share2 className="w-4 h-4" />} className="na-animate na-d7 mt-[3px]">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-4">
            {t('cavalloResultShareBody1')} <strong className="text-foreground">{d.name}</strong>{t('cavalloResultShareBody2')}
          </p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => { navigator.clipboard.writeText(`${t('cavalloResultShareCopyMsg')} ${d.name} 🐴✨\n${t('cavalloResultShareWAEnd')}`); alert(t('cavalloResultCopied')); }}
              className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-5 py-2.5 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all hover:border-cavallo-gl hover:text-cavallo-em">
              {t('resultCopy')}
            </button>
            <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${t('cavalloResultShareWAMsg')} *${d.name}* 🐴✨\n${t('cavalloResultShareWAEnd')}`)}`, '_blank')}
              className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-5 py-2.5 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all hover:border-cavallo-gl hover:text-cavallo-em">
              {t('resultWhatsApp')}
            </button>
            <button onClick={onRetake}
              className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-5 py-2.5 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all hover:border-cavallo-gl hover:text-cavallo-em">
              {t('resultRetake')}
            </button>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default CavalloResultScreen;
