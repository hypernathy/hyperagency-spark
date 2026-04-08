import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';

const langs: Lang[] = ['en', 'fr', 'pt', 'it'];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="font-syne font-extrabold text-lg uppercase tracking-wider">
          HYPER<span className="text-primary">AGENCY</span>
        </button>

        {/* Center links - desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'services', 'products', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'about' ? 'see-you' : key === 'products' ? 'spark' : key)}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-1">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded transition-colors ${
                  lang === l ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-wider px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
          >
            {t.nav.cta}
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden ml-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-foreground/[0.07] px-4 py-4 space-y-3">
          {['about', 'services', 'products', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'about' ? 'see-you' : key === 'products' ? 'spark' : key)}
              className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`font-mono text-[10px] uppercase px-2 py-1 rounded ${
                  lang === l ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
