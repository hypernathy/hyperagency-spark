import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Archetype } from '@/constants/archetypes';
import { motion } from 'framer-motion';

interface Props {
  archetype: Archetype;
  userId: string;
}

interface Step {
  step_index: number;
  completed: boolean;
}

export default function DashboardRoadmap({ archetype, userId }: Props) {
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    supabase
      .from('roadmap_progress')
      .select('step_index, completed')
      .eq('user_id', userId)
      .order('step_index')
      .then(({ data }) => {
        if (data) setSteps(data as Step[]);
      });
  }, [userId]);

  const toggleStep = async (stepIndex: number) => {
    const step = steps.find(s => s.step_index === stepIndex);
    const newCompleted = !step?.completed;

    setSteps(prev =>
      prev.map(s =>
        s.step_index === stepIndex ? { ...s, completed: newCompleted } : s
      )
    );

    await supabase
      .from('roadmap_progress')
      .update({
        completed: newCompleted,
        completed_at: newCompleted ? new Date().toISOString() : null,
      })
      .eq('user_id', userId)
      .eq('step_index', stepIndex);
  };

  const completedCount = steps.filter(s => s.completed).length;

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-syne text-lg font-bold text-foreground">Your Roadmap</h3>
        <span className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider">
          {completedCount}/{archetype.roadmap.length} done
        </span>
      </div>
      <div className="w-full bg-[rgba(255,255,255,0.06)] h-[2px] mb-5">
        <motion.div
          className="h-[2px] bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${(completedCount / archetype.roadmap.length) * 100}%` }}
        />
      </div>
      <div className="space-y-3">
        {archetype.roadmap.map((text, i) => {
          const step = steps.find(s => s.step_index === i);
          const done = step?.completed || false;
          return (
            <button
              key={i}
              onClick={() => toggleStep(i)}
              className="w-full flex items-start gap-3 text-left min-h-[48px] py-2"
            >
              <div
                className={`w-6 h-6 border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  done ? 'border-primary bg-primary' : 'border-[rgba(255,255,255,0.2)]'
                }`}
              >
                {done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <span
                className={`font-syne text-sm leading-relaxed transition-all ${
                  done ? 'text-[rgba(248,245,240,0.35)] line-through' : 'text-foreground'
                }`}
              >
                {text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
