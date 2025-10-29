import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, BookOpen, AlertCircle, Check, X, Trophy } from 'lucide-react';
import { useWordChallenges } from '@/hooks/useWordChallenges';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Learn = () => {
  const navigate = useNavigate();
  const { user, updateProgress } = useAuth();
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string>('Spelling');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState<any>(null);

  // Fetch word challenges from API
  const { data: allWordChallenges, isLoading, error } = useWordChallenges({ type: selectedType });
  
  // Filter word challenges by user's grade level
  const wordChallenges = allWordChallenges?.filter((challenge: any) => {
    // If no user or no grade, show all challenges
    if (!user || !user.grade) return true;
    
    // Match grade level
    return challenge.gradeLevel === user.grade || challenge.gradeLevel === user.grade.toString();
  });

  console.log("Learn page data:", { wordChallenges, allWordChallenges, userGrade: user?.grade, isLoading, error });

  // Set a default challenge when challenges are loaded
  useEffect(() => {
    if (wordChallenges && Array.isArray(wordChallenges) && wordChallenges.length > 0) {
      setCurrentChallenge(wordChallenges[0]);
      setCurrentChallengeIndex(0);
    } else if (wordChallenges && wordChallenges.length === 0) {
      console.log("No word challenges found for type:", selectedType);
    }
  }, [wordChallenges, selectedType]);

  // Handle answer submission
  const handleCheckAnswer = () => {
    if (!currentChallenge || !userAnswer.trim()) return;

    const currentWord = currentChallenge.words[currentWordIndex];
    const correct = userAnswer.toLowerCase().trim() === currentWord.word.toLowerCase().trim();
    
    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      setScore(score + currentWord.points);
      toast({
        title: '✅ Correct!',
        description: `Great job! +${currentWord.points} points`,
      });
    } else {
      toast({
        title: '❌ Incorrect',
        description: `The correct answer is: ${currentWord.word}`,
        variant: 'destructive',
      });
    }
  };

  // Handle moving to next word
  const handleNext = () => {
    if (currentWordIndex < currentChallenge.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserAnswer('');
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else {
      // Calculate final score (score state already includes current word if correct)
      const finalScore = isCorrect ? score + currentChallenge.words[currentWordIndex].points : score;
      setShowResult(true);
      
      // Save user progress if logged in - ONLY SAVE ONCE at the end
      if (user && currentChallenge._id) {
        updateProgress({
          type: 'wordChallenge',
          itemId: currentChallenge._id,
          data: {
            score: finalScore,
          },
        }).catch(error => {
          console.error('Failed to save word challenge progress:', error);
        });
      }
    }
  };

  // Handle switching challenge types
  const handleSwitchType = (newType: string) => {
    setSelectedType(newType);
    setCurrentWordIndex(0);
    setUserAnswer('');
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setScore(0);
    setShowResult(false);
    setCurrentChallenge(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Loading Word Challenges...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent mx-auto"></div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <div className="flex flex-col items-center">
            <AlertCircle className="w-12 h-12 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Error Loading Challenges</h2>
            <p className="text-center mb-6">
              {error instanceof Error ? error.message : 'Failed to load word challenges. Please try again.'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="default" onClick={() => window.location.reload()}>
                Retry
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                <Home className="mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!wordChallenges || wordChallenges.length === 0) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <div className="flex flex-col items-center">
            <BookOpen className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">No Word Challenges Available</h2>
            <p className="text-center mb-6">
              There are no {selectedType} challenges available at this time.
            </p>
            <div className="flex gap-2 mb-4">
              <Button variant="secondary" onClick={() => handleSwitchType('Vocabulary')}>
                Try Vocabulary
              </Button>
              <Button variant="accent" onClick={() => handleSwitchType('Grammar')}>
                Try Grammar
              </Button>
            </div>
            <Button variant="default" onClick={() => navigate('/')}>
              <Home className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!currentChallenge) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Preparing Challenge...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent mx-auto"></div>
        </Card>
      </div>
    );
  }

  // Show results screen
  if (showResult) {
    const totalPossibleScore = currentChallenge.words.reduce(
      (total: number, word: any) => total + (word.points || 1),
      0
    );

    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />

        <Card className="relative z-10 w-full max-w-2xl mx-4 bg-card border-4 border-border shadow-large rounded-2xl p-8">
          <div className="flex flex-col items-center">
            <Trophy className="w-16 h-16 text-sun-yellow mb-4" />
            <h2 className="text-4xl font-bold text-center text-primary mb-4">Challenge Complete!</h2>
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
          </div>
        </Card>
      </div>
    );
  }

  const currentWord = currentChallenge.words[currentWordIndex];

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90 animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />

      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]"
            style={{
              WebkitTextStroke: '3px rgba(0,0,0,0.3)',
              paintOrder: 'stroke fill'
            }}>
            WORD CHALLENGES
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            {currentChallenge.title}
          </p>
        </div>

        {/* Challenge Card */}
        <Card className="w-full max-w-2xl bg-card border-4 border-border shadow-large rounded-2xl p-6 mb-6">
          {/* Word and Hint */}
          <div className="mb-6">
            <div className="bg-primary rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-primary-foreground text-center">
                Word {currentWordIndex + 1} of {currentChallenge.words.length}
              </h3>
            </div>

            {currentWord.hint && (
              <div className="bg-muted rounded-xl p-4 mb-4">
                <p className="text-lg font-semibold mb-2">Hint:</p>
                <p className="text-foreground">{currentWord.hint}</p>
              </div>
            )}

            {currentWord.sentence && !isAnswerChecked && (
              <div className="bg-muted rounded-xl p-4 mb-4">
                <p className="text-lg font-semibold mb-2">Example Sentence:</p>
                <p className="text-foreground italic">"{currentWord.sentence}"</p>
              </div>
            )}
          </div>

          {/* Answer Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-bold text-foreground">Your Answer:</label>
              <Input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isAnswerChecked) {
                    handleCheckAnswer();
                  }
                }}
                placeholder="Type the word here..."
                disabled={isAnswerChecked}
                className="text-xl h-14 border-2 border-border rounded-xl"
              />
            </div>

            {/* Feedback */}
            {isAnswerChecked && (
              <div className={`rounded-xl p-4 ${isCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <Check className="w-6 h-6 text-green-600" />
                      <p className="text-green-800 font-bold text-lg">Correct! Well done!</p>
                    </>
                  ) : (
                    <>
                      <X className="w-6 h-6 text-red-600" />
                      <p className="text-red-800 font-bold text-lg">
                        Incorrect. The correct answer is: <span className="underline">{currentWord.word}</span>
                      </p>
                    </>
                  )}
                </div>
                {currentWord.definition && (
                  <p className="text-sm text-foreground mt-2">
                    <strong>Definition:</strong> {currentWord.definition}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {!isAnswerChecked ? (
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleCheckAnswer}
                  disabled={!userAnswer.trim()}
                  className="w-full text-xl"
                >
                  Check Answer
                </Button>
              ) : (
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleNext}
                  className="w-full text-xl"
                >
                  {currentWordIndex < currentChallenge.words.length - 1 ? 'Next Word' : 'Finish Challenge'}
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Type Selector and Score */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
          <div className="flex gap-2">
            <Button
              variant={selectedType === 'Spelling' ? 'default' : 'secondary'}
              size="default"
              onClick={() => handleSwitchType('Spelling')}
            >
              Spelling
            </Button>
            <Button
              variant={selectedType === 'Vocabulary' ? 'default' : 'secondary'}
              size="default"
              onClick={() => handleSwitchType('Vocabulary')}
            >
              Vocabulary
            </Button>
            <Button
              variant={selectedType === 'Grammar' ? 'default' : 'secondary'}
              size="default"
              onClick={() => handleSwitchType('Grammar')}
            >
              Grammar
            </Button>
          </div>

          {/* Score Display */}
          <div className="bg-card rounded-2xl px-8 py-4 border-4 border-border shadow-medium">
            <p className="text-xl font-bold text-foreground">
              Score: <span className="text-primary">{score}</span>
            </p>
          </div>
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

export default Learn;