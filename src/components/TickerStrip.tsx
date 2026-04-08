const items = [
  'AI that sounds like you',
  '3 countries, 4 languages',
  'Systems that run while you sleep',
  '€19/month HyperCompanion',
  'ADHD = superpower',
  'Cross-border by design',
];

export default function TickerStrip() {
  const content = [...items, ...items].map((item, i) => (
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
