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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="font-syne font-extrabold text-lg uppercase tracking-wider text-foreground">
          HYPER<span className="text-primary">AGENCY</span>
        </button>

        {/* Center links - desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'services', 'products', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'about' ? 'see-you' : key === 'products' ? 'spark' : key)}
              className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[rgba(248,245,240,0.35)] hover:text-primary transition-colors no-min-tap"
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
                className={`font-mono text-[11px] uppercase px-1.5 py-0.5 transition-colors no-min-tap ${
                  lang === l ? 'text-primary' : 'text-[rgba(248,245,240,0.35)] hover:text-foreground'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-primary text-primary-foreground font-mono text-[0.65rem] uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-primary/90 transition-colors"
          >
            {t.nav.cta}
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden ml-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-[rgba(255,255,255,0.06)] px-4 py-4 space-y-4">
          {['about', 'services', 'products', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === 'about' ? 'see-you' : key === 'products' ? 'spark' : key)}
              className="block font-mono text-sm uppercase tracking-[0.15em] text-[rgba(248,245,240,0.35)] hover:text-primary"
            >
              {t.nav[key]}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`font-mono text-xs uppercase px-2 py-1 ${
                  lang === l ? 'text-primary' : 'text-[rgba(248,245,240,0.35)]'
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
