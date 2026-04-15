import Topbar from '@/components/Topbar';
import IntroScreen from '@/components/IntroScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import EmailScreen from '@/components/EmailScreen';
import ResultScreen from '@/components/ResultScreen';
import { useQuiz } from '@/hooks/useQuiz';

const Index = () => {
  const quiz = useQuiz();

  return (
    <div className="min-h-screen">
      <Topbar />
      {quiz.screen === 'intro' && <IntroScreen onStart={quiz.startQuiz} />}
      {quiz.screen === 'quiz' && (
        <QuizScreen
          currentQ={quiz.currentQ}
          question={quiz.question}
          totalQuestions={quiz.totalQuestions}
          progress={quiz.progress}
          picks={quiz.picks}
          onTogglePick={quiz.togglePick}
          onNext={quiz.nextQuestion}
        />
      )}
      {quiz.screen === 'loading' && <LoadingScreen onComplete={() => quiz.goToScreen('email')} />}
      {quiz.screen === 'email' && <EmailScreen onSubmit={quiz.submitEmail} />}
      {quiz.screen === 'result' && quiz.result && (
        <ResultScreen result={quiz.result} userName={quiz.userName} onRetake={quiz.retake} />
      )}
    </div>
  );
};

export default Index;
