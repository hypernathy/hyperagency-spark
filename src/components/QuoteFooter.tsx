import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';
import ScrollReveal from '@/components/motion/ScrollReveal';

const langs: Lang[] = ['en', 'fr', 'pt', 'it'];

export default function QuoteFooter() {
  const { lang, setLang, t } = useLang();

  return (
    <>
      {/* Quote */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <ScrollReveal variant="scale-up" duration={0.9} className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <span className="font-display text-[120px] text-primary/10 leading-none select-none">"</span>
          <p className="font-display italic text-2xl sm:text-3xl lg:text-4xl leading-snug -mt-16">
            You were never too much.<br />
            The world was just <span className="text-primary">too small.</span>
          </p>
          <p className="font-mono text-[11px] text-muted-foreground mt-6 tracking-wider">— The HyperAgency Principle</p>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <ScrollReveal variant="fade-in" duration={0.6}>
        <footer className="border-t border-foreground/[0.07] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
            <div>
              <p className="font-syne font-extrabold text-lg uppercase tracking-wider mb-4">
                HYPER<span className="text-primary">AGENCY</span>
              </p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{t.footer.bio}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{t.footer.workTitle}</p>
              <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                <li>SPARK (Free)</li>
                <li>HyperCompanion™ €19/mo</li>
                <li>Power Hour €197</li>
                <li>Full Build from €1,200</li>
                <li>HyperOS™ Bundle</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{t.footer.findTitle}</p>
              <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                <li><a href="https://instagram.com/hypernathy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram @hypernathy</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://hyperagency.ch" className="hover:text-primary transition-colors">hyperagency.ch</a></li>
                <li><a href="https://hypernathy.ch" className="hover:text-primary transition-colors">hypernathy.ch</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-foreground/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] text-muted-foreground">{t.footer.copy}</p>
            <div className="flex items-center gap-2">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded transition-colors ${
                    lang === l ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
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
