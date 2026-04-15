import { useState, useCallback } from 'react';
import { QUESTIONS, RESULT_DATA, type ResultType } from '@/data/quizData';
import { QUESTIONS_IT, RESULT_DATA_IT } from '@/data/quizData.it';
import { QUESTIONS_PT, RESULT_DATA_PT } from '@/data/quizData.pt';
import { QUESTIONS_FR, RESULT_DATA_FR } from '@/data/quizData.fr';
import { useLanguage } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';

export type Screen = 'intro' | 'quiz' | 'loading' | 'email' | 'result';

function getQuizData(lang: string) {
  switch (lang) {
    case 'it': return { questions: QUESTIONS_IT, results: RESULT_DATA_IT };
    case 'pt': return { questions: QUESTIONS_PT, results: RESULT_DATA_PT };
    case 'fr': return { questions: QUESTIONS_FR, results: RESULT_DATA_FR };
    default: return { questions: QUESTIONS, results: RESULT_DATA };
  }
}

export function useQuiz() {
  const { language } = useLanguage();
  const [screen, setScreen] = useState<Screen>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ V: 0, K: 0, C: 0, D: 0, S: 0 });
  const [picks, setPicks] = useState<number[]>([]);
  const [userName, setUserName] = useState('');
  const [result, setResult] = useState<ResultType | null>(null);

  const { questions, results } = getQuizData(language);
  const question = questions[currentQ];
  const totalQuestions = questions.length;
  const progress = ((currentQ + 1) / totalQuestions) * 100;

  const goToScreen = useCallback((s: Screen) => {
    setScreen(s);
    window.scrollTo(0, 0);
  }, []);

  const startQuiz = useCallback(() => goToScreen('quiz'), [goToScreen]);

  const togglePick = useCallback((index: number) => {
    setPicks(prev => {
      if (prev.includes(index)) return prev.filter(p => p !== index);
      if (prev.length >= 2) return prev;
      return [...prev, index];
    });
  }, []);

  const nextQuestion = useCallback(() => {
    const q = questions[currentQ];
    const newScores = { ...scores };
    picks.forEach((pi, rank) => {
      newScores[q.a[pi].t] += rank === 0 ? 2 : 1;
    });
    setScores(newScores);
    setPicks([]);

    if (currentQ + 1 < totalQuestions) {
      setCurrentQ(currentQ + 1);
    } else {
      setScores(newScores);
      goToScreen('loading');
    }
  }, [currentQ, picks, scores, totalQuestions, goToScreen, questions]);

  const submitEmail = useCallback((name: string, email: string) => {
    if (!email || !email.includes('@')) return false;
    setUserName(name || 'Friend');
    const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const rd = results[dominant];
    setResult(rd);

    (supabase.from('quiz_submissions' as any) as any).insert([{
      quiz_type: 'neuryou' as const,
      email,
      name: name || null,
      result_key: dominant,
      result_label: rd.name,
      scores: JSON.parse(JSON.stringify(scores)),
    }]).then(() => {
      supabase.functions.invoke('sync-submissions').then();
    });

    goToScreen('result');
    return true;
  }, [scores, results, goToScreen]);

  const retake = useCallback(() => {
    setCurrentQ(0);
    setScores({ V: 0, K: 0, C: 0, D: 0, S: 0 });
    setPicks([]);
    setResult(null);
    setUserName('');
    goToScreen('intro');
  }, [goToScreen]);

  return {
    screen, currentQ, question, totalQuestions, progress, picks,
    scores, userName, result, startQuiz, togglePick, nextQuestion,
    submitEmail, retake, goToScreen,
  };
}
