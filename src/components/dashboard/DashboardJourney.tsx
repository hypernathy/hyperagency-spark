import { motion } from 'framer-motion';
import { Milestone } from '@/hooks/useMilestones';
import { useLang } from '@/contexts/LanguageContext';

interface Props {
  milestones: Milestone[];
}

export default function DashboardJourney({ milestones }: Props) {
  const { t } = useLang();
  const d = t.dashboard;
  const ml = d.milestones;

  const getLabel = (key: string, fallback: string) => ml?.[key] || fallback;

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
      <h3 className="font-syne text-lg font-bold text-foreground mb-5">{d.yourJourney}</h3>

      <div className="hidden md:block overflow-x-auto">
        <div className="flex items-start gap-0 min-w-max">
          {milestones.map((m, i) => (
            <div key={m.key} className="flex items-start">
              <div className="flex flex-col items-center w-28">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: m.completed ? 1.1 : 1 }}
                  className={`w-12 h-12 flex items-center justify-center text-xl transition-all ${
                    m.completed
                      ? 'bg-primary/20 shadow-[0_0_16px_rgba(0,196,180,0.3)]'
                      : 'bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {m.completed ? m.emoji : '🔒'}
                </motion.div>
                <p className={`font-mono text-[10px] text-center mt-2 leading-tight max-w-[100px] ${
                  m.completed ? 'text-foreground' : 'text-[rgba(248,245,240,0.35)]'
                }`}>
                  {getLabel(m.key, m.label)}
                </p>
                {m.completed && m.completed_at && (
                  <p className="font-mono text-[9px] text-[rgba(248,245,240,0.35)] mt-0.5">
                    {new Date(m.completed_at).toLocaleDateString()}
                  </p>
                )}
              </div>
              {i < milestones.length - 1 && (
                <div className={`h-px w-6 mt-6 ${m.completed ? 'bg-primary/40' : 'bg-[rgba(255,255,255,0.06)]'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-0">
        {milestones.map((m, i) => (
          <div key={m.key} className="flex gap-3">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: m.completed ? 1.05 : 1 }}
                className={`w-10 h-10 flex items-center justify-center text-lg shrink-0 ${
                  m.completed
                    ? 'bg-primary/20 shadow-[0_0_12px_rgba(0,196,180,0.25)]'
                    : 'bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                {m.completed ? m.emoji : '🔒'}
              </motion.div>
              {i < milestones.length - 1 && (
                <div className={`w-px flex-1 min-h-[24px] ${m.completed ? 'bg-primary/30' : 'bg-[rgba(255,255,255,0.06)]'}`} />
              )}
            </div>
            <div className="pb-4">
              <p className={`font-mono text-xs leading-tight ${m.completed ? 'text-foreground' : 'text-[rgba(248,245,240,0.35)]'}`}>
                {getLabel(m.key, m.label)}
              </p>
              {m.completed && m.completed_at && (
                <p className="font-mono text-[10px] text-[rgba(248,245,240,0.35)] mt-0.5">
                  {new Date(m.completed_at).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
