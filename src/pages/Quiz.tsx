import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Home } from 'lucide-react';
import { useQuizzes } from '@/hooks/useQuizzes';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Quiz = () => {
  const navigate = useNavigate();
  const { user, updateProgress } = useAuth();
  const { toast } = useToast();
  const [subject, setSubject] = useState<string>('History');
  const [quizId, setQuizId] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  
  // Add debugging logs
  console.log("Subject selected:", subject);
  console.log("User grade level:", user?.grade);
  
  // Fetch quizzes from API - filter by subject
  const { data: allQuizzes, isLoading, error } = useQuizzes({ subject });
  
  // Filter quizzes by user's grade level (client-side filtering)
  const quizzes = allQuizzes?.filter((quiz: any) => {
    // If no user or no grade, show all quizzes
    if (!user || !user.grade) return true;
    
    // Match grade level (handle both string and number comparisons)
    return quiz.gradeLevel === user.grade || quiz.gradeLevel === user.grade.toString();
  });
  
  // Log the API response
  console.log("API response:", { quizzes, isLoading, error });

  // Set a default quiz when quizzes are loaded
  useEffect(() => {
    console.log("Effect triggered, quizzes:", quizzes);
    if (quizzes && Array.isArray(quizzes) && quizzes.length > 0) {
      console.log("Setting current quiz:", quizzes[0]);
      setCurrentQuiz(quizzes[0]);
      setQuizId(quizzes[0]._id);
    } else if (quizzes && !Array.isArray(quizzes)) {
      // Handle case where data structure is different than expected
      console.error("Quizzes data is not an array:", quizzes);
      toast({
        title: 'Data format error',
        description: 'Quiz data format is incorrect. Please contact support.',
        variant: 'destructive',
      });
    } else if (quizzes && quizzes.length === 0) {
      console.log("No quizzes found for subject:", subject);
      toast({
        title: 'No quizzes found',
        description: `No quizzes available for ${subject}. Try another subject.`,
      });
    }
  }, [quizzes, toast, subject]);

  // Error handling with more detail
  useEffect(() => {
    if (error) {
      console.error("Quiz error:", error);
      toast({
        title: 'Error loading quizzes',
        description: error instanceof Error ? error.message : 'Failed to load quiz data. Please try again later.',
        variant: 'destructive',
      });
    }
  }, [error, toast]);

  // Handle answer selection
  const handleAnswer = async (answer: string, isCorrect: boolean) => {
    setSelectedAnswer(answer);
    
    // Calculate new score
    let newScore = score;
    if (isCorrect) {
      const questionPoints = currentQuiz.questions[currentQuestionIndex].points || 1;
      newScore = score + questionPoints;
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        
        // Save user progress if logged in - ONLY SAVE ONCE at the end with correct score
        if (user && quizId) {
          updateProgress({
            type: 'quiz',
            itemId: quizId,
            data: {
              score: newScore, // Use the calculated score, not score state
            },
          }).catch(error => {
            console.error('Failed to save quiz progress:', error);
          });
        }
      }
    }, 1000);
  };

  // Switch between subjects
  const handleSwitchSubject = (newSubject: string) => {
    console.log("Switching to subject:", newSubject);
    setSubject(newSubject);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setCurrentQuiz(null);
  };

  // Better loading state handling with timeout detection
  const [loadingTooLong, setLoadingTooLong] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setLoadingTooLong(true);
      }, 10000); // Show additional info if loading takes more than 10 seconds
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Loading Quiz...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent mx-auto"></div>
          
          {loadingTooLong && (
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                This is taking longer than expected.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.location.reload()}
                className="mt-2"
              >
                Refresh Page
              </Button>
            </div>
          )}
        </Card>
      </div>
    );
  }

  // Handle the case when there are no quizzes or quiz data is invalid
  if (!quizzes || (Array.isArray(quizzes) && quizzes.length === 0)) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">No Quizzes Available</h2>
          <p className="text-center mb-4">
            There are no quizzes available for {subject}. Please try another subject or come back later.
          </p>
          <div className="flex justify-center gap-2">
            <Button 
              variant="secondary" 
              onClick={() => handleSwitchSubject('English')}
            >
              Try English
            </Button>
            <Button 
              variant="accent" 
              onClick={() => handleSwitchSubject('General Knowledge')}
            >
              Try General Knowledge
            </Button>
          </div>
          <div className="mt-4 flex justify-center">
            <Button 
              variant="default"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Error state handling
  if (error) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center text-destructive mb-4">Error Loading Quiz</h2>
          <p className="text-center mb-4">
            {error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.'}
          </p>
          <div className="flex justify-center gap-2">
            <Button 
              variant="default"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Now we need a check for currentQuiz
  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Preparing Quiz...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent mx-auto"></div>
        </Card>
      </div>
    );
  }

  // Display results when quiz is complete
  if (showResult) {
    const totalPossibleScore = currentQuiz.questions.reduce(
      (total: number, q: any) => total + (q.points || 1),
      0
    );
    
    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
        
        <Card className="relative z-10 w-full max-w-2xl mx-4 bg-card border-4 border-border shadow-large rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Quiz Complete!</h2>
          <p className="text-3xl font-bold text-center text-foreground mb-3">
            Final Score: {score}
          </p>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Out of {totalPossibleScore} possible points
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={() => navigate('/dashboard')}>
              View Dashboard
            </Button>
            <Button variant="default" size="lg" onClick={() => navigate('/')}>
              <Home className="mr-2" />
              Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Check for required data before rendering question
  if (!currentQuiz.questions || !currentQuiz.questions[currentQuestionIndex]) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Invalid Quiz Data</h2>
          <p className="text-center mb-4">
            This quiz contains invalid data. Please try a different quiz.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="default"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  
  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90 animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-cloud-white rounded-full opacity-85" />
      
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]" 
              style={{ 
                WebkitTextStroke: '3px rgba(0,0,0,0.3)',
                paintOrder: 'stroke fill'
              }}>
            BRAINBUILDERS
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            {currentQuiz.title || 'Quiz Time!'}
          </p>
        </div>

        {/* Question Card */}
        <Card className="w-full max-w-2xl bg-card border-4 border-border shadow-large rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {currentQuestion.questionText}
              </p>
            </div>
            <div className="bg-primary rounded-xl px-6 py-3 border-2 border-border ml-4">
              <span className="text-2xl font-bold text-primary-foreground">{currentQuestion.points || 1}</span>
            </div>
          </div>
          
          {/* Answer Options */}
          <div className="space-y-4">
            {currentQuestion.options && Array.isArray(currentQuestion.options) ? (
              currentQuestion.options.map((option: any, index: number) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === option.text
                      ? option.isCorrect
                        ? "accent"
                        : "destructive"
                      : index === 0
                      ? "default"
                      : index === 1
                      ? "secondary"
                      : "accent"
                  }
                  size="lg"
                  onClick={() => !selectedAnswer && handleAnswer(option.text, option.isCorrect)}
                  className="w-full text-xl"
                  disabled={selectedAnswer !== null}
                >
                  {option.text}
                </Button>
              ))
            ) : (
              <p className="text-center text-destructive">No options available for this question</p>
            )}
          </div>
        </Card>

        {/* Character and Controls */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
          <div className="bg-muted rounded-2xl p-6 border-4 border-border shadow-medium">
            <User className="w-24 h-24 text-primary" strokeWidth={2.5} />
          </div>
          
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="flex gap-2">
              <Button 
                variant={subject === 'History' ? 'default' : 'secondary'} 
                size="default"
                onClick={() => handleSwitchSubject('History')}
                className="flex-1"
              >
                History
              </Button>
              
              <Button 
                variant={subject === 'English' ? 'default' : 'secondary'} 
                size="default"
                onClick={() => handleSwitchSubject('English')}
                className="flex-1"
              >
                English
              </Button>
              
              <Button 
                variant={subject === 'General Knowledge' ? 'default' : 'secondary'} 
                size="default"
                onClick={() => handleSwitchSubject('General Knowledge')}
                className="flex-1"
              >
                General
              </Button>
            </div>
            
            {/* Question progress */}
            <div className="flex gap-2 justify-center">
              <span className="text-lg font-bold">
                Question {currentQuestionIndex + 1}/{currentQuiz.questions.length}
              </span>
            </div>
          </div>
        </div>

        {/* Score Display */}
        <div className="mt-8 bg-card rounded-2xl px-8 py-4 border-4 border-border shadow-medium">
          <p className="text-xl font-bold text-foreground">
            Current Score: <span className="text-primary">{score}</span>
          </p>
        </div>

        {/* Back button */}
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/')}
          className="mt-6"
        >
          <Home className="mr-2" />
          Back to Menu
        </Button>
      </div>
    </div>
  );
};

export default Quiz;