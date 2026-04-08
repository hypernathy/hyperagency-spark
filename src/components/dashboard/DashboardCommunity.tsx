import { useLang } from '@/contexts/LanguageContext';

export default function DashboardCommunity() {
  const { t } = useLang();
  const c = t.dashboard.community;

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
      <h3 className="font-syne text-lg font-bold text-foreground mb-2">{c.title}</h3>
      <p className="text-[rgba(248,245,240,0.65)] font-syne text-sm mb-5">{c.desc}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="https://t.me/HyperYouCommunity" target="_blank" rel="noopener noreferrer"
          className="flex-1 border border-[rgba(255,255,255,0.2)] text-foreground px-5 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-center hover:border-primary hover:text-primary transition min-h-[48px] flex items-center justify-center">
          {c.telegram}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer"
          className="flex-1 border border-[rgba(255,255,255,0.2)] text-foreground px-5 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-center hover:border-primary hover:text-primary transition min-h-[48px] flex items-center justify-center">
          {c.whatsapp}
        </a>
      </div>
    </div>
  );
}
