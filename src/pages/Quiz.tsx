import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { archetypes, quizQuestions } from '@/constants/archetypes';
import { quizTranslations } from '@/constants/quizTranslations';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useLang } from '@/contexts/LanguageContext';
import PostQuizProfile from '@/components/PostQuizProfile';

export default function Quiz() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [result, setResult] = useState<typeof archetypes[0] | null>(null);
  const [saving, setSaving] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const qt = quizTranslations[lang];
  const questions = qt.questions;

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading]);

  const handleAnswer = (archetypeId: number) => {
    const newScores = { ...scores, [archetypeId]: (scores[archetypeId] || 0) + 1 };
    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const winnerId = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      const winner = archetypes.find(a => a.id === Number(winnerId))!;
      setResult(winner);
      saveResult(winner);
    }
  };

  const saveResult = async (archetype: typeof archetypes[0]) => {
    if (!user) return;
    setSaving(true);
    await supabase
      .from('profiles')
      .update({ archetype_id: archetype.id, archetype_name: archetype.name })
      .eq('user_id', user.id);

    const steps = archetype.roadmap.map((_, i) => ({
      user_id: user.id,
      step_index: i,
      completed: false,
    }));
    await supabase.from('roadmap_progress').insert(steps);
    setSaving(false);
  };

  const handleProfileSave = async (data: Record<string, string | null>) => {
    if (!user) return;
    await supabase.from('profiles').update(data as any).eq('user_id', user.id);
    navigate('/dashboard');
  };

  if (authLoading) return <div className="min-h-screen bg-background" />;

  const q = questions[current];
  const resultArchetype = result
    ? qt.archetypeNames[result.id]
    : null;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                <p className="text-primary font-mono text-[0.65rem] uppercase tracking-[0.18em] mb-2">
                  {qt.ui.questionOf.replace('{0}', String(current + 1)).replace('{1}', String(questions.length))}
                </p>
                <div className="w-full bg-[rgba(255,255,255,0.06)] h-[2px] mb-6">
                  <div
                    className="bg-primary h-[2px] transition-all"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground font-bold">
                  {q.question}
                </h2>
              </div>

              <div className="space-y-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.archetype)}
                    className="w-full text-left bg-card border border-[rgba(255,255,255,0.07)] px-5 py-4 font-syne text-sm text-foreground hover:border-[rgba(0,196,180,0.35)] transition-all min-h-[48px]"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-5xl bg-card border border-[rgba(255,255,255,0.07)]"
              >
                {result.emoji}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {qt.ui.youAre}
              </h2>
              <h3 className="font-syne text-2xl font-bold mb-2" style={{ color: result.color }}>
                {resultArchetype?.name ?? result.name}
              </h3>
              <p className="text-[rgba(248,245,240,0.65)] font-syne text-sm mb-6">
                "{resultArchetype?.tagline ?? result.tagline}"
              </p>

              {!showProfile ? (
                <div className="space-y-3">
                  <button
                    onClick={() => navigate('/dashboard')}
                    disabled={saving}
                    className="bg-primary text-primary-foreground px-8 py-4 font-mono uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors min-h-[48px]"
                  >
                    {saving ? qt.ui.saving : qt.ui.goToDashboard}
                  </button>
                  <div>
                    <button
                      onClick={() => setShowProfile(true)}
                      className="text-sm font-syne text-[rgba(248,245,240,0.35)] hover:text-foreground mt-2"
                    >
                      {qt.ui.helpSpark}
                    </button>
                  </div>
                </div>
              ) : (
                <PostQuizProfile
                  onSave={handleProfileSave}
                  onSkip={() => navigate('/dashboard')}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
