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
    <div className="bg-card border border-foreground/[0.07] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-syne text-lg font-bold text-foreground">Your Roadmap</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {completedCount}/{archetype.roadmap.length} done
        </span>
      </div>
      <div className="w-full bg-foreground/10 rounded-full h-1.5 mb-5">
        <motion.div
          className="h-1.5 rounded-full"
          style={{ backgroundColor: archetype.color }}
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
                className={`w-6 h-6 rounded-md border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  done ? 'border-transparent' : 'border-foreground/20'
                }`}
                style={done ? { backgroundColor: archetype.color } : {}}
              >
                {done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <span
                className={`font-mono text-sm leading-relaxed transition-all ${
                  done ? 'text-muted-foreground line-through' : 'text-foreground'
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
