import { useEffect, useRef, useState } from 'react';
import type { ResultType } from '@/data/quizData';
import { User, Star, EyeOff, Briefcase, BarChart2, Map, Share2, FileText, MessageCircle, BookOpen, Layers, Wrench } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface ResultScreenProps {
  result: ResultType;
  userName: string;
  onRetake: () => void;
}

const ResultScreen = ({ result: d, userName, onRetake }: ResultScreenProps) => {
  const { t } = useLanguage();
  const [animatedScores, setAnimatedScores] = useState(false);
  const scoresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScores(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const copyResult = () => {
    navigator.clipboard.writeText(
      `I discovered my brain type with NeurYou™: ${d.name} 🧠\nDiscover your type for free on HyperYou!`
    ).then(() => alert('Copied! ✓'));
  };

  const waShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`I took the NeurYou™ quiz and my brain type is: *${d.name}* 🧠✨\nDiscover yours too → [link]`)}`, '_blank');
  };

  const dayGrid = Array.from({ length: 30 }, (_, i) => {
    if (i < 18) return { type: 'done', label: '✓' };
    if (i === 18) return { type: 'today', label: String(i + 1) };
    return { type: 'future', label: String(i + 1) };
  });

  return (
    <div className="min-h-screen flex flex-col items-stretch pt-24 px-4 sm:px-6 pb-20 relative overflow-hidden [&_p.font-sans]:text-base [&_p.font-sans]:sm:text-lg [&_p.font-sans]:leading-relaxed">
      <div className="max-w-[740px] w-full mx-auto">
        {/* HERO */}
        <div className="na-animate na-d1 p-6 sm:p-10 mb-[3px] relative overflow-hidden border" style={{ borderColor: d.cl, background: d.cd }}>
          <div className="relative z-10">
            <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: d.color }}>{d.label}</div>
            <div className="font-display text-[clamp(38px,8vw,60px)] font-semibold leading-[0.95] mb-2" style={{ color: d.color }}>{d.name}</div>
            <div className="font-display text-lg sm:text-[17px] italic text-cream-64 mb-5 leading-snug">{d.tagline}</div>
            <div className="flex flex-wrap gap-2 sm:gap-1.5">
              {d.tags.map(tg => (
                <span key={tg} className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase px-3 py-2 sm:py-1.5 border" style={{ borderColor: d.cl, color: d.color }}>{tg}</span>
              ))}
            </div>
          </div>
        </div>

        {/* GREETING */}
        <Block color={d.color} borderColor={d.cl} bg={d.cd} label={`${t('resultGreeting')} ${userName}`} icon={<User className="w-4 h-4" />} className="na-animate na-d2">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.intro }} />
        </Block>

        {/* PROFILE */}
        <Block color={d.color} label={t('resultProfile')} icon={<User className="w-4 h-4" />} className="na-animate na-d3">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.desc }} />
        </Block>

        {/* SCORES */}
        <Block color={d.color} label={t('resultScores')} icon={<BarChart2 className="w-4 h-4" />} className="na-animate na-d3">
          <div ref={scoresRef}>
            {d.scores.map(s => (
              <div key={s.l} className="flex items-center gap-3 mb-3 sm:mb-2">
                <span className="font-mono text-sm sm:text-[9px] tracking-[0.1em] uppercase text-cream-42 w-[90px] sm:w-[86px] flex-shrink-0">{s.l}</span>
                <div className="flex-1 h-[4px] sm:h-[3px] bg-cream-12">
                  <div className="h-full transition-all duration-1000 ease-out" style={{ width: animatedScores ? `${s.p}%` : '0%', background: d.color, transitionDelay: '0.4s' }} />
                </div>
                <span className="font-mono text-sm sm:text-[9px] text-cream-42 w-8 sm:w-7 text-right flex-shrink-0">{s.p}%</span>
              </div>
            ))}
          </div>
        </Block>

        {/* POWERS */}
        <Block color={d.color} label={t('resultStrengths')} icon={<Star className="w-4 h-4" />} className="na-animate na-d4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-[7px]">
            {d.powers.map(p => (
              <div key={p.name} className="p-4 sm:p-3 border flex gap-2.5 items-start" style={{ borderColor: d.cl, background: d.cd }}>
                <div className="w-[6px] h-[6px] sm:w-[5px] sm:h-[5px] rounded-full flex-shrink-0 mt-[7px]" style={{ background: d.color }} />
                <div>
                  <div className="font-sans text-base sm:text-sm font-semibold text-foreground mb-1">{p.name}</div>
                  <div className="font-sans text-base sm:text-[13px] text-cream-42 leading-snug">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* BLINDS */}
        <Block label={t('resultBlindSpots')} icon={<EyeOff className="w-4 h-4" />} className="na-animate na-d4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-[7px]">
            {d.blinds.map(b => (
              <div key={b.name} className="p-4 sm:p-3 border border-cream-12 bg-cream-06 flex gap-2.5 items-start">
                <div className="w-[6px] h-[6px] sm:w-[5px] sm:h-[5px] rounded-full bg-cream-42 flex-shrink-0 mt-[7px]" />
                <div>
                  <div className="font-sans text-base sm:text-sm font-semibold text-foreground mb-1">{b.name}</div>
                  <div className="font-sans text-base sm:text-[13px] text-cream-42 leading-snug">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* BUSINESS MODEL */}
        <Block color={d.color} borderColor={d.cl} label={t('resultBizModel')} icon={<Briefcase className="w-4 h-4" />} className="na-animate na-d4">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.biz }} />
        </Block>

        {/* JOURNEY STRIP */}
        <Block color={d.color} label={t('resultJourney')} icon={<Map className="w-4 h-4" />} className="na-animate na-d5">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-4">{t('resultJourneyDesc')}</p>
          <div className="flex flex-col sm:flex-row border border-cream-15 overflow-hidden">
            {[
              { num: t('tier01'), name: 'Deep Profile', price: '€13', active: false },
              { num: t('tier02'), name: 'NeurYou Companion', price: '€7/mo', active: true, useColor: true },
              { num: t('tier03'), name: 'Blueprint', price: t('tier3Badge'), active: false },
              { num: t('tierFullOS'), name: 'Everything', price: t('tierOSBadge'), active: false },
            ].map((tier, i) => (
              <div key={i} className={`flex-1 p-4 border-b sm:border-b-0 sm:border-r border-cream-12 last:border-r-0 last:border-b-0 text-center flex flex-col gap-1 ${tier.active ? 'bg-gold-09' : ''}`}
                style={tier.active ? { borderBottom: `2px solid ${d.color}` } : {}}>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase" style={{ color: tier.useColor ? d.color : 'hsl(var(--cream-42))' }}>{tier.num}</div>
                <div className="font-display text-base sm:text-sm font-semibold text-foreground leading-none">{tier.name}</div>
                <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.05em]" style={{ color: tier.useColor ? d.color : 'hsl(var(--gold))' }}>{tier.price}</div>
              </div>
            ))}
          </div>
        </Block>

        {/* TIER 1: REPORT */}
        <div className="na-animate na-d5">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 py-0 pb-2 flex items-center gap-2.5">
            <span style={{ color: d.color }}>01</span> {t('tier1Label')}
          </div>
          <div className="border p-5 sm:p-7 mb-[3px] flex flex-col gap-5" style={{ borderColor: d.cl }}>
            <div className="flex-1">
              <FileText className="w-6 h-6 mb-2" style={{ color: d.color }} />
              <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase mb-2" style={{ color: d.color }}>{t('tier1Format')}</div>
              <div className="font-display text-[24px] sm:text-[22px] font-semibold text-foreground mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: t('tier1Headline').replace('\n', '<br />') }} />
              <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed">{t('tier1Desc')}</p>
              <div className="mt-3 flex flex-col gap-1.5 sm:gap-1">
                {d.reportItems.map(r => (
                  <div key={r} className="font-sans text-base sm:text-[13px] text-cream-64 flex items-start gap-[7px]">
                    <span className="text-gold text-[10px] mt-0.5 flex-shrink-0">—</span>{r}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:items-end sm:min-w-[120px]">
              <div>
                <div className="font-display text-[42px] font-semibold leading-none" style={{ color: d.color }}>€13</div>
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase text-cream-42 mt-1">{t('tier1PriceSub')}</div>
              </div>
              <button onClick={() => alert('→ Checkout Deep Profile €13')} className="mt-3 w-full font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-6 sm:px-4 bg-gold text-background border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,168,75,.32)]">{t('tier1CTA')}</button>
            </div>
          </div>
        </div>

        {/* TIER 2: COMPANION */}
        <div className="na-animate na-d5 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 pb-2 flex items-center gap-2.5">
            <span style={{ color: d.color }}>02</span> {t('tier2Label')}
          </div>
          <div className="border mb-[3px] overflow-hidden" style={{ borderColor: d.cl }}>
            <div className="p-5 sm:p-7 flex flex-col gap-4" style={{ background: d.cd }}>
              <div className="flex-1">
                <MessageCircle className="w-6 h-6 mb-2" style={{ color: d.color }} />
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase mb-2" style={{ color: d.color }}>{t('tier2Format')}</div>
                <div className="font-display text-xl font-semibold text-foreground">{t('tier2Headline')}</div>
                <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mt-2" dangerouslySetInnerHTML={{ __html: t('tier2Desc').replace('\n', '<br />') }} />
                <div className="flex flex-wrap gap-2 sm:gap-1.5 mt-3">
                  {['1 prompt/day', 'Progress tracker', 'WhatsApp recap', '4 modules', 'Unlock at 100%'].map(tag => (
                    <span key={tag} className="font-mono text-[9px] sm:text-[8px] tracking-[0.12em] uppercase px-3 py-1.5 sm:py-1 border" style={{ borderColor: d.cl, color: d.color }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-end">
                <div>
                  <div className="font-display text-[50px] font-semibold leading-none" style={{ color: d.color }}>€7</div>
                  <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase text-cream-42 mt-0.5">{t('tier2PriceSub')}</div>
                </div>
                <button onClick={() => alert('→ Checkout NeurYou Companion €7/mo')} className="font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-6 sm:px-5 bg-gold text-background border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,168,75,.32)]">{t('tier2CTA')}</button>
              </div>
              <div className="font-sans text-[12px] sm:text-[10px] text-cream-42 text-center">{t('tier2CancelAnytime')}</div>
            </div>

            {/* Preview */}
            <div className="border-t" style={{ borderColor: d.cl }}>
              <div className="px-5 py-3 border-b border-cream-12">
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.18em] uppercase flex items-center gap-[7px]" style={{ color: d.color }}>
                  <span className="w-3 h-px bg-current" />{t('companionHowItWorks')}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-5 sm:p-5 border-b md:border-b-0 md:border-r border-cream-12">
                  <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-[7px]" style={{ color: d.color }}>
                    <span className="w-3 h-px bg-current" />{t('companionEveryMorning')}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.1em] uppercase text-cream-42 mb-2">8:00 AM · {t('companionDayPrompt')}</div>
                  <div className="p-3 border bg-cream-06 mb-2" style={{ borderColor: d.cl }}>
                    <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.15em] uppercase mb-2" style={{ color: d.color }}>Day 19 · Module 3</div>
                    <div className="font-display text-lg sm:text-base italic text-cream-86 leading-snug mb-2">{d.companion.prompts[1]}</div>
                    <textarea className="w-full min-h-[60px] sm:min-h-[52px] bg-cream-08 border border-cream-15 text-cream-64 font-sans text-[13px] sm:text-[11px] p-2.5 sm:p-2 resize-none outline-none placeholder:text-cream-42" placeholder="..." rows={3} />
                    <button className="w-full mt-2 py-2.5 sm:py-2 font-mono text-[10px] sm:text-[9px] tracking-[0.15em] uppercase border bg-transparent cursor-pointer transition-all duration-200 hover:bg-gold-09" style={{ color: d.color, borderColor: d.cl }}>{t('companionSaveAnswer')}</button>
                  </div>
                  <p className="font-sans text-[12px] sm:text-[10px] text-cream-42 leading-snug">{t('companionJournalNote')}</p>
                </div>

                <div className="flex-1 p-5 sm:p-5 border-b md:border-b-0 md:border-r border-cream-12">
                  <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-[7px]" style={{ color: d.color }}>
                    <span className="w-3 h-px bg-current" />{t('companionYourProgress')}
                  </div>
                  <div className="flex justify-between font-mono text-[10px] sm:text-[9px] text-cream-42 mb-2">
                    <span>Day 19 / 30</span>
                    <span style={{ color: d.color }}>63%</span>
                  </div>
                  <div className="h-2 sm:h-1.5 bg-cream-12 overflow-hidden mb-2">
                    <div className="h-full transition-all duration-1000 ease-out" style={{ width: animatedScores ? '63%' : '0%', background: d.color, transitionDelay: '0.6s' }} />
                  </div>
                  <p className="font-sans text-[12px] sm:text-[10px] text-cream-42 mb-3">11 {t('companionDaysTo')} <strong style={{ color: d.color }}>{t('companionBonus')}</strong></p>
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-1 mb-2">
                    {dayGrid.map((day, i) => (
                      <div key={i} className={`aspect-square border flex items-center justify-center font-mono text-[8px] sm:text-[7px]
                        ${day.type === 'done' ? 'text-background' : day.type === 'today' ? 'border-gold text-gold' : 'border-cream-15 text-cream-42'}
                      `} style={day.type === 'done' ? { background: d.color, borderColor: d.color } : {}}>
                        {day.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[32px] sm:text-[28px] font-semibold" style={{ color: d.color }}>6</span>
                    <span className="font-sans text-[12px] sm:text-[10px] text-cream-42 leading-tight">{t('companionConsecutiveDays')}<br /><span style={{ color: d.color }}>{t('companionActiveStreak')}</span></span>
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-5">
                  <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.18em] uppercase mb-3.5 flex items-center gap-[7px]" style={{ color: d.color }}>
                    <span className="w-3 h-px bg-current" />{t('companionModules')}
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-1.5">
                    {[
                      { num: 'W1', name: 'Deep diagnosis', status: t('companionDone'), done: true },
                      { num: 'W2', name: 'Operating system', status: t('companionDone'), done: true },
                      { num: 'W3', name: d.companion.mod2, status: t('companionInProgress'), active: true },
                      { num: 'W4', name: 'Sustainability & cycles', status: t('companionLocked'), locked: true },
                    ].map((mod, i) => (
                      <div key={i} className={`px-3 py-2.5 sm:py-2 border flex items-center gap-2.5 ${mod.locked ? 'opacity-[0.38]' : mod.done ? 'opacity-70' : ''}`}
                        style={{ borderColor: mod.done ? d.color : mod.active ? d.cl : 'hsl(var(--cream-15))', color: mod.done ? d.color : undefined }}>
                        <span className="font-mono text-[10px] sm:text-[9px] w-5 flex-shrink-0" style={{ color: mod.done ? d.color : 'hsl(var(--cream-42))' }}>{mod.num}</span>
                        <span className="font-sans text-[13px] sm:text-[11px] text-cream-86 flex-1">{mod.name}</span>
                        <span className="font-mono text-[9px] sm:text-[8px] flex-shrink-0" style={{ color: mod.done || mod.active ? d.color : 'hsl(var(--cream-42))' }}>{mod.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 sm:mt-3 pt-3 sm:pt-2.5 border-t border-cream-12">
                    <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.1em] uppercase text-cream-42 mb-2">{t('companionWhatsApp')}</div>
                    <div className="flex flex-col gap-2">
                      <div className="max-w-[88%] px-3 py-2.5 bg-cream-08 border border-cream-12 font-sans text-sm sm:text-xs text-cream-86 leading-snug self-start">
                        <span>📊 <strong>{t('companionWeekRecap')}</strong><br />5/7 · <em>{d.companion.mod2}</em> 🔥</span>
                        <div className="font-mono text-[9px] sm:text-[8px] text-cream-42 mt-1">Friday · 6:00 PM</div>
                      </div>
                      <div className="max-w-[88%] px-3 py-2.5 bg-gold-09 border border-gold-22 font-sans text-sm sm:text-xs text-foreground leading-snug self-end text-right">
                        💪
                        <div className="font-mono text-[9px] sm:text-[8px] text-cream-42 mt-1">Friday · 6:23 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIER 3: COMING SOON */}
        <div className="na-animate na-d6 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-cream-42 pb-2 flex items-center gap-2.5">
            <span className="text-gold">03</span> {t('tier3Label')}
          </div>
          <div className="border border-cream-15 mb-[3px] overflow-hidden">
            <div className="p-5 sm:p-7 flex flex-col gap-5">
              <div className="flex-1">
                <BookOpen className="w-6 h-6 text-gold mb-2" />
                <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase text-gold mb-2">{t('tier3Badge')}</div>
                <div className="font-display text-[24px] sm:text-[22px] font-semibold text-foreground">{t('tier3Headline')}</div>
                <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mt-2 max-w-[420px]">{t('tier3Desc')}</p>
              </div>
              <button onClick={() => alert('→ Join waitlist for NeurYou Blueprint €33')} className="w-full font-sans text-base sm:text-[10px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-3.5 sm:py-3 px-6 sm:px-5 border border-gold-22 text-gold bg-transparent cursor-pointer transition-all duration-200 hover:bg-gold-09">{t('tier3CTA')}</button>
            </div>
          </div>
        </div>

        {/* FULL OS — COMING SOON */}
        <div className="na-animate na-d7 mt-4">
          <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.22em] uppercase text-gold pb-2 flex items-center gap-2.5">
            <span>💎</span> {t('tierOSLabel')}
          </div>
          <div className="border border-gold-22 bg-gold-09 overflow-hidden mb-[3px] relative">
            <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,168,75,.07) 0%, transparent 65%)' }} />
            <div className="p-6 sm:p-8 relative z-10">
              <Layers className="w-6 h-6 text-gold mb-3" />
              <div className="font-display text-[clamp(30px,6vw,42px)] font-light leading-none mb-3" dangerouslySetInnerHTML={{ __html: `${t('tierOSHeadline1')} <em class="italic text-gold">${t('tierOSHeadline2')}</em><br />${t('tierOSHeadline3').replace('\n', '<br />')}` }} />
              <p className="font-sans text-base sm:text-lg text-cream-64 max-w-[480px] leading-relaxed mb-7" dangerouslySetInnerHTML={{ __html: t('tierOSDesc').replace('\n', '<br />') }} />
              <div className="font-mono text-[9px] sm:text-[8px] tracking-[0.2em] uppercase text-gold mb-4">{t('tierOSBadge')}</div>
              <button onClick={() => alert('→ Join waitlist for Full OS €133')} className="w-full font-sans text-base sm:text-[13px] font-bold tracking-[0.16em] uppercase px-10 sm:px-14 h-14 sm:h-auto py-5 border border-gold text-gold bg-transparent cursor-pointer transition-all duration-200 hover:bg-gold hover:text-background">{t('tierOSCTA')}</button>
            </div>
          </div>
        </div>

        {/* SHARE + RETAKE */}
        <Block color={d.color} label={t('resultShare')} icon={<Share2 className="w-4 h-4" />} className="na-animate na-d7 mt-[3px]">
          <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-4">
            {t('resultShareBody')} <strong className="text-cream-86">{d.name}</strong>{t('resultShareBodyEnd')}
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-[7px]">
            <button onClick={copyResult} className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-4 py-2.5 sm:py-2 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all duration-200 hover:border-gold-22 hover:text-gold">{t('resultCopy')}</button>
            <button onClick={waShare} className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-4 py-2.5 sm:py-2 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all duration-200 hover:border-gold-22 hover:text-gold">{t('resultWhatsApp')}</button>
            <button onClick={onRetake} className="font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-4 py-2.5 sm:py-2 border border-cream-15 text-cream-64 bg-transparent cursor-pointer transition-all duration-200 hover:border-gold-22 hover:text-gold">{t('resultRetake')}</button>
          </div>
        </Block>
      </div>
    </div>
  );
};

function Block({ color, borderColor, bg, label, icon, className, children }: {
  color?: string; borderColor?: string; bg?: string; label: string; icon?: React.ReactNode; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={`p-5 sm:p-7 border border-cream-12 bg-cream-06 mb-[3px] ${className || ''}`}
      style={borderColor || bg ? { borderColor: borderColor || undefined, background: bg || undefined } : {}}>
      <div className="font-mono text-[10px] sm:text-[9px] tracking-[0.25em] uppercase text-cream-42 mb-3.5 sm:mb-3 flex items-center gap-2.5" style={color ? { color } : {}}>
        {icon}{label}
        <span className="flex-1 h-px bg-cream-12" />
      </div>
      {children}
    </div>
  );
}

export default ResultScreen;
