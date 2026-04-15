import { useState } from 'react';
import { Mail, Unlock } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface CavalloEmailScreenProps { onSubmit: (name: string, email: string) => boolean; }

const CavalloEmailScreen = ({ onSubmit }: CavalloEmailScreenProps) => {
  const { t } = useLanguage();
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [error, setError] = useState(false);
  const handleSubmit = () => { if (!email || !email.includes('@')) { setError(true); return; } setError(false); onSubmit(name, email); };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden text-center">
      <div className="absolute top-[10%] -right-16 w-[380px] h-[380px] rounded-full blur-[90px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,139,111,.1) 0%, transparent 70%)' }} />
      <div className="max-w-[460px] w-full relative z-10">
        <div className="font-mono text-[11px] sm:text-[10px] tracking-[0.3em] text-cavallo-em uppercase mb-3 flex items-center justify-center gap-2.5"><span className="w-[18px] h-px bg-cavallo-em inline-block" />{t('cavalloEmailLabel')}</div>
        <h2 className="font-display text-[clamp(30px,6vw,46px)] font-light leading-tight mb-4">{t('cavalloEmailHeadline1')}<br />{t('cavalloEmailHeadline2')} <em className="italic text-cavallo-em">{t('cavalloEmailHeadline3')}</em></h2>
        <p className="font-sans text-base sm:text-lg text-cream-64 leading-relaxed mb-5 mx-auto max-w-[400px]">{t('cavalloEmailBody')}</p>
        <div className="border border-cavallo-gl bg-cavallo-gd p-5 my-5 relative overflow-hidden">
          <div className="blur-md pointer-events-none select-none">
            <p className="font-display text-lg sm:text-[17px] italic text-cream-64 leading-relaxed">{t('cavalloEmailBlurred')}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] sm:text-[9px] tracking-[0.2em] uppercase text-cavallo-em">{t('cavalloEmailLock')}</div>
        </div>
        <div className="mb-3 text-left">
          <label className="font-mono text-[10px] sm:text-[9px] tracking-[0.2em] uppercase text-cavallo-em mb-2 block">{t('emailNameLabel')}</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t('emailNamePlaceholder')} className="w-full h-14 sm:h-auto py-3.5 sm:py-3 px-4 bg-cream-08 border border-cream-15 text-foreground font-sans text-base sm:text-[13px] outline-none transition-colors focus:border-cavallo-em placeholder:text-cream-42" autoComplete="given-name" />
        </div>
        <div className="mb-3 text-left">
          <label className="font-mono text-[10px] sm:text-[9px] tracking-[0.2em] uppercase text-cavallo-em mb-2 block">{t('emailLabel2')}</label>
          <div className="relative">
            <Mail className="w-5 h-5 text-cream-42 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(false); }} placeholder={t('emailPlaceholder')} className={`w-full h-14 sm:h-auto py-3.5 sm:py-3 pl-11 pr-4 bg-cream-08 border text-foreground font-sans text-base sm:text-[13px] outline-none transition-colors focus:border-cavallo-em placeholder:text-cream-42 ${error ? 'border-destructive/60' : 'border-cream-15'}`} autoComplete="email" />
          </div>
        </div>
        <button onClick={handleSubmit} className="w-full mt-3 font-sans text-lg sm:text-[11px] font-bold tracking-[0.16em] uppercase h-14 sm:h-auto py-5 sm:py-4 bg-cavallo-em text-foreground border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(46,139,111,.32)] flex items-center justify-center gap-2">
          <Unlock className="w-5 h-5" /> {t('cavalloEmailCTA')}
        </button>
        <p className="font-sans text-[13px] sm:text-[11px] text-cream-42 mt-3 leading-relaxed">{t('cavalloEmailTrust')}</p>
      </div>
    </div>
  );
};

export default CavalloEmailScreen;
