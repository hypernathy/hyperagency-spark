import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';
import ScrollReveal from '@/components/motion/ScrollReveal';

const langs: Lang[] = ['en', 'fr', 'pt', 'it'];

export default function QuoteFooter() {
  const { lang, setLang, t } = useLang();

  return (
    <>
      {/* Quote */}
      <section className="py-14 sm:py-16 relative overflow-hidden">
        <ScrollReveal variant="scale-up" duration={0.9} className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <span className="font-display text-[120px] text-[rgba(0,196,180,0.08)] leading-none select-none">"</span>
          <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl leading-snug -mt-16">
            {t.quote.line1}<br />
            {t.quote.line2} <span className="text-primary">{t.quote.em}</span>
          </p>
          <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] mt-6 tracking-wider uppercase">{t.quote.attr}</p>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <ScrollReveal variant="fade-in" duration={0.6}>
        <footer className="border-t border-[rgba(255,255,255,0.06)] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
            <div>
              <p className="font-syne font-extrabold text-lg uppercase tracking-wider mb-4 text-foreground">
                HYPER<span className="text-primary">AGENCY</span>
              </p>
              <p className="body-text">{t.footer.bio}</p>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(248,245,240,0.35)] mb-4">{t.footer.workTitle}</p>
              <ul className="space-y-2 body-text">
                <li>SPARK ({t.spark?.freePrice || 'Free'})</li>
                <li>HyperCompanion™ €19/{t.spark?.paidPriceUnit?.replace('/', '') || 'mo'}</li>
                <li>Power Hour €197</li>
                <li>{t.services?.items?.[0]?.price || 'From €29'}</li>
                <li>HyperOS™ Bundle</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(248,245,240,0.35)] mb-4">{t.footer.findTitle}</p>
              <ul className="space-y-2 body-text">
                <li><a href="https://instagram.com/hypernathy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram @hypernathy</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://connexa.ch" className="hover:text-primary transition-colors">connexa.ch</a></li>
                <li><a href="https://hypernathy.ch" className="hover:text-primary transition-colors">hypernathy.ch</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)]">{t.footer.copy}</p>
            <div className="flex items-center gap-2">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`font-mono text-xs uppercase px-2 py-1.5 transition-colors no-min-tap ${
                    lang === l ? 'text-primary' : 'text-[rgba(248,245,240,0.35)] hover:text-foreground'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </>
  );
}
