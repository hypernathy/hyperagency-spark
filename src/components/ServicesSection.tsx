import { useLang } from '@/contexts/LanguageContext';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Start Small',
    desc: "Prompt Packs, AI Starter Map, and your first Tool Audit. For people who've never done this seriously. We make sure your first step is the right one.",
    price: 'From €29',
    cta: 'Browse on Stan Store',
  },
  {
    num: '02',
    title: 'Get Optimized',
    desc: "You use AI but it's chaos. We audit your stack, eliminate the waste, build your first real automation. You go from manual to automatic.",
    price: 'From €197',
    cta: 'Book a Power Hour',
  },
  {
    num: '03',
    title: 'Full Build',
    desc: 'Done-for-you AI agents. ContentFactory, LeadQualifier, InboxZero, TenderWatch, ReportBot — or the whole HyperOS. You architect. We build it.',
    price: 'From €1,200',
    cta: 'Get in touch',
  },
];

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{t.services.label}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{t.services.h2}</h2>
          <p className="font-mono text-sm text-muted-foreground mb-12 max-w-2xl">{t.services.sub}</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {services.map((s) => (
            <StaggerItem key={s.num} variant="scale-up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-foreground/[0.07] rounded-sm p-8 flex flex-col hover:border-b-2 hover:border-b-primary transition-all group h-full"
              >
                <span className="font-mono text-[11px] text-primary mb-4">{s.num}</span>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
                <p className="font-display text-lg font-bold text-primary mb-4">{s.price}</p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-xs text-primary hover:underline text-left"
                >
                  {s.cta} →
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
