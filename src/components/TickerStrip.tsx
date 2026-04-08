import { useLang } from '@/contexts/LanguageContext';

export default function TickerStrip() {
  const { t } = useLang();
  const items: string[] = t.ticker;

  const content = [...items, ...items].map((item: string, i: number) => (
    <span key={i} className="flex items-center gap-4 whitespace-nowrap">
      <span className="font-mono text-base font-medium tracking-wide text-primary-foreground">{item}</span>
      <span className="text-primary-foreground/40">◆</span>
    </span>
  ));

  return (
    <div className="bg-primary overflow-hidden py-3.5">
      <div className="ticker-animate flex gap-4">
        {content}
        {content}
      </div>
    </div>
  );
}
