export default function DashboardCommunity() {
  return (
    <div className="bg-card border border-foreground/[0.07] rounded-xl p-6">
      <h3 className="font-syne text-lg font-bold text-foreground mb-2">
        Join the HyperYou Community
      </h3>
      <p className="text-muted-foreground font-mono text-sm mb-5">
        Daily tips, new products, AI insights — directly on Telegram. No algorithm. No noise.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#0088cc] text-white px-5 py-3 rounded-lg font-mono text-sm font-bold text-center hover:opacity-90 transition min-h-[48px] flex items-center justify-center"
        >
          Join on Telegram
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white px-5 py-3 rounded-lg font-mono text-sm font-bold text-center hover:opacity-90 transition min-h-[48px] flex items-center justify-center"
        >
          Join on WhatsApp
        </a>
      </div>
    </div>
  );
}
