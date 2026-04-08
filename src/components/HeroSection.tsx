import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useLang();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hero" className="min-h-screen grid-bg flex items-center pt-16">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div className="space-y-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
            You were never<br />too much.<br />The system was just<br />
            <em className="text-primary italic">too small.</em>
          </h1>

          <p className="font-mono text-sm text-muted-foreground leading-relaxed whitespace-pre-line max-w-lg">
            {t.hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-primary-foreground pulse-dot" />
              {t.hero.cta1}
            </button>
            <button
              onClick={() => document.getElementById('power')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 rounded-sm border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>

        {/* Right - portrait placeholder */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="w-full aspect-[3/4] max-w-md rounded-lg bg-gradient-to-br from-violet/30 via-card to-primary/20 flex items-center justify-center">
            <span className="font-mono text-[11px] text-muted-foreground tracking-wider">[ Your photo here ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
