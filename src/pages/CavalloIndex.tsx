import CavalloTopbar from '@/components/cavallo/CavalloTopbar';
import CavalloIntroScreen from '@/components/cavallo/CavalloIntroScreen';
import CavalloIntakeScreen from '@/components/cavallo/CavalloIntakeScreen';
import CavalloQuizScreen from '@/components/cavallo/CavalloQuizScreen';
import CavalloLoadingScreen from '@/components/cavallo/CavalloLoadingScreen';
import CavalloEmailScreen from '@/components/cavallo/CavalloEmailScreen';
import CavalloResultScreen from '@/components/cavallo/CavalloResultScreen';
import { useCavalloQuiz } from '@/hooks/useCavalloQuiz';

const CavalloIndex = () => {
  const quiz = useCavalloQuiz();

  return (
    <div className="min-h-screen">
      <CavalloTopbar />
      {quiz.screen === 'intro' && <CavalloIntroScreen onStart={quiz.startQuiz} />}
      {quiz.screen === 'intake' && <CavalloIntakeScreen onComplete={quiz.completeIntake} />}
      {quiz.screen === 'quiz' && (
        <CavalloQuizScreen
          currentQ={quiz.currentQ}
          question={quiz.question}
          totalQuestions={quiz.totalQuestions}
          progress={quiz.progress}
          picks={quiz.picks}
          onTogglePick={quiz.togglePick}
          onNext={quiz.nextQuestion}
        />
      )}
      {quiz.screen === 'loading' && <CavalloLoadingScreen onComplete={() => quiz.goToScreen('email')} />}
      {quiz.screen === 'email' && <CavalloEmailScreen onSubmit={quiz.submitEmail} />}
      {quiz.screen === 'result' && quiz.result && (
        <CavalloResultScreen result={quiz.result} userName={quiz.userName} intake={quiz.intake} scores={quiz.scores} secondaryElement={quiz.secondaryElement} onRetake={quiz.retake} />
      )}
    </div>
  );
};

export default CavalloIndex;
