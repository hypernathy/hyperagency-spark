import CupidoTopbar from '@/components/cupido/CupidoTopbar';
import CupidoIntroScreen from '@/components/cupido/CupidoIntroScreen';
import CupidoIntakeScreen from '@/components/cupido/CupidoIntakeScreen';
import CupidoQuizScreen from '@/components/cupido/CupidoQuizScreen';
import CupidoLoadingScreen from '@/components/cupido/CupidoLoadingScreen';
import CupidoEmailScreen from '@/components/cupido/CupidoEmailScreen';
import CupidoResultScreen from '@/components/cupido/CupidoResultScreen';
import { useCupidoQuiz } from '@/hooks/useCupidoQuiz';

const CupidoIndex = () => {
  const quiz = useCupidoQuiz();

  return (
    <div className="min-h-screen">
      <CupidoTopbar />
      {quiz.screen === 'intro' && <CupidoIntroScreen onStart={quiz.startQuiz} />}
      {quiz.screen === 'intake' && <CupidoIntakeScreen onComplete={quiz.completeIntake} />}
      {quiz.screen === 'quiz' && (
        <CupidoQuizScreen
          currentQ={quiz.currentQ}
          question={quiz.question}
          totalQuestions={quiz.totalQuestions}
          progress={quiz.progress}
          picks={quiz.picks}
          onTogglePick={quiz.togglePick}
          onNext={quiz.nextQuestion}
        />
      )}
      {quiz.screen === 'loading' && <CupidoLoadingScreen onComplete={() => quiz.goToScreen('email')} />}
      {quiz.screen === 'email' && <CupidoEmailScreen onSubmit={quiz.submitEmail} />}
      {quiz.screen === 'result' && quiz.result && (
        <CupidoResultScreen result={quiz.result} userName={quiz.userName} intake={quiz.intake} onRetake={quiz.retake} />
      )}
    </div>
  );
};

export default CupidoIndex;
