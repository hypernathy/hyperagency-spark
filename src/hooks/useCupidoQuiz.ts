import { useState, useCallback } from 'react';
import { CUPIDO_QUESTIONS, CUPIDO_RESULT_DATA, type CupidoResultType } from '@/data/cupidoQuizData';
import { CUPIDO_QUESTIONS_IT, CUPIDO_RESULT_DATA_IT } from '@/data/cupidoQuizData.it';
import { CUPIDO_QUESTIONS_PT, CUPIDO_RESULT_DATA_PT } from '@/data/cupidoQuizData.pt';
import { CUPIDO_QUESTIONS_FR, CUPIDO_RESULT_DATA_FR } from '@/data/cupidoQuizData.fr';
import { CUPIDO_GENDER_OVERLAYS } from '@/data/cupidoGenderOverlays';
import { CUPIDO_GENDER_OVERLAYS_IT } from '@/data/cupidoGenderOverlays.it';
import { CUPIDO_GENDER_OVERLAYS_PT } from '@/data/cupidoGenderOverlays.pt';
import { CUPIDO_GENDER_OVERLAYS_FR } from '@/data/cupidoGenderOverlays.fr';
import { useLanguage } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';
import type { IntakeData } from '@/components/cupido/CupidoIntakeScreen';

export type CupidoScreen = 'intro' | 'intake' | 'quiz' | 'loading' | 'email' | 'result';

function getCupidoData(lang: string) {
  switch (lang) {
    case 'it': return { questions: CUPIDO_QUESTIONS_IT, results: CUPIDO_RESULT_DATA_IT, overlays: CUPIDO_GENDER_OVERLAYS_IT };
    case 'pt': return { questions: CUPIDO_QUESTIONS_PT, results: CUPIDO_RESULT_DATA_PT, overlays: CUPIDO_GENDER_OVERLAYS_PT };
    case 'fr': return { questions: CUPIDO_QUESTIONS_FR, results: CUPIDO_RESULT_DATA_FR, overlays: CUPIDO_GENDER_OVERLAYS_FR };
    default: return { questions: CUPIDO_QUESTIONS, results: CUPIDO_RESULT_DATA, overlays: CUPIDO_GENDER_OVERLAYS };
  }
}

export function useCupidoQuiz() {
  const { language } = useLanguage();
  const [screen, setScreen] = useState<CupidoScreen>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ P: 0, I: 0, F: 0, L: 0, S: 0 });
  const [picks, setPicks] = useState<number[]>([]);
  const [userName, setUserName] = useState('');
  const [result, setResult] = useState<CupidoResultType | null>(null);
  const [intake, setIntake] = useState<IntakeData>({ intent: '', gender: '', status: '', dob: '' });

  const { questions, results, overlays } = getCupidoData(language);
  const question = questions[currentQ];
  const totalQuestions = questions.length;
  const progress = ((currentQ + 1) / totalQuestions) * 100;

  const goToScreen = useCallback((s: CupidoScreen) => {
    setScreen(s);
    window.scrollTo(0, 0);
  }, []);

  const startQuiz = useCallback(() => goToScreen('intake'), [goToScreen]);

  const completeIntake = useCallback((data: IntakeData) => {
    setIntake(data);
    goToScreen('quiz');
  }, [goToScreen]);

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
      newScores[q.a[pi].t] += rank === 0 ? 3 : 1;
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
    setUserName(name || 'Heart');
    const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    
    let rd = { ...results[dominant] };
    const genderMap: Record<string, string> = { feminine: 'donna', masculine: 'uomo' };
    const g = genderMap[intake.gender] || intake.gender;
    if (g && g !== 'other' && overlays[dominant]?.[g]) {
      const ov = overlays[dominant][g];
      rd = { ...rd, ...ov };
    }
    
    setResult(rd);

    supabase.from('quiz_submissions').insert([{
      quiz_type: 'cupidyou' as const,
      email,
      name: name || null,
      result_key: dominant,
      result_label: rd.name,
      scores: JSON.parse(JSON.stringify(scores)),
      intake: JSON.parse(JSON.stringify(intake)),
    }]).then(() => {
      supabase.functions.invoke('sync-submissions').then();
    });

    goToScreen('result');
    return true;
  }, [scores, intake, results, overlays, goToScreen]);

  const retake = useCallback(() => {
    setCurrentQ(0);
    setScores({ P: 0, I: 0, F: 0, L: 0, S: 0 });
    setPicks([]);
    setResult(null);
    setUserName('');
    setIntake({ intent: '', gender: '', status: '', dob: '' });
    goToScreen('intro');
  }, [goToScreen]);

  return {
    screen, currentQ, question, totalQuestions, progress, picks,
    scores, userName, result, intake, startQuiz, completeIntake, togglePick, nextQuestion,
    submitEmail, retake, goToScreen,
  };
}
