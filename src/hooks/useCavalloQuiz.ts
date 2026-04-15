import { useState, useCallback } from 'react';
import { CAVALLO_QUESTIONS, CAVALLO_RESULT_DATA, type CavalloResultType } from '@/data/cavalloQuizData';
import { CAVALLO_GENDER_OVERLAYS } from '@/data/cavalloGenderOverlays';
import { supabase } from '@/integrations/supabase/client';

export interface CavalloIntakeData {
  intent: string;
  gender: string;
  phase: string;
  dob: string;
}

export type CavalloScreen = 'intro' | 'intake' | 'quiz' | 'loading' | 'email' | 'result';

export function useCavalloQuiz() {
  const [screen, setScreen] = useState<CavalloScreen>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ F: 0, T: 0, M: 0, A: 0, L: 0 });
  const [picks, setPicks] = useState<number[]>([]);
  const [userName, setUserName] = useState('');
  const [result, setResult] = useState<CavalloResultType | null>(null);
  const [secondaryElement, setSecondaryElement] = useState('');
  const [intake, setIntake] = useState<CavalloIntakeData>({ intent: '', gender: '', phase: '', dob: '' });

  const question = CAVALLO_QUESTIONS[currentQ];
  const totalQuestions = CAVALLO_QUESTIONS.length;
  const progress = ((currentQ + 1) / totalQuestions) * 100;

  const goToScreen = useCallback((s: CavalloScreen) => {
    setScreen(s);
    window.scrollTo(0, 0);
  }, []);

  const startQuiz = useCallback(() => goToScreen('intake'), [goToScreen]);

  const completeIntake = useCallback((data: CavalloIntakeData) => {
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
    const q = CAVALLO_QUESTIONS[currentQ];
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
  }, [currentQ, picks, scores, totalQuestions, goToScreen]);

  const submitEmail = useCallback((name: string, email: string) => {
    if (!email || !email.includes('@')) return false;
    setUserName(name || 'Traveler');
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const dominant = sorted[0][0];
    const secondary = sorted[1][0];
    setSecondaryElement(secondary);

    let rd = { ...CAVALLO_RESULT_DATA[dominant] };
    const genderMap: Record<string, string> = { feminine: 'donna', masculine: 'uomo' };
    const g = genderMap[intake.gender] || intake.gender;
    if (g && g !== 'other' && CAVALLO_GENDER_OVERLAYS[dominant]?.[g]) {
      const ov = CAVALLO_GENDER_OVERLAYS[dominant][g];
      rd = { ...rd, ...ov };
    }

    setResult(rd);

    // Save to database then sync to external
    supabase.from('quiz_submissions').insert([{
      quiz_type: 'horsyou' as const,
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
  }, [scores, intake, goToScreen]);

  const retake = useCallback(() => {
    setCurrentQ(0);
    setScores({ F: 0, T: 0, M: 0, A: 0, L: 0 });
    setPicks([]);
    setResult(null);
    setUserName('');
    setSecondaryElement('');
    setIntake({ intent: '', gender: '', phase: '', dob: '' });
    goToScreen('intro');
  }, [goToScreen]);

  return {
    screen, currentQ, question, totalQuestions, progress, picks, scores,
    userName, result, intake, secondaryElement, startQuiz, completeIntake,
    togglePick, nextQuestion, submitEmail, retake, goToScreen,
  };
}
