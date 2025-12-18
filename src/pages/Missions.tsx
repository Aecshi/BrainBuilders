import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, Target, AlertCircle, RefreshCw, Scroll, BookOpen, Lightbulb } from 'lucide-react';
import { useHistoricalAdventures } from '@/hooks/useHistoricalAdventures';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Missions = () => {
  const navigate = useNavigate();
  const { user, updateProgress } = useAuth();
  const { toast } = useToast();
  const [era, setEra] = useState<string>('Ancient');
  const [currentAdventure, setCurrentAdventure] = useState<any>(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<any>(null);
  const [showLearningPoint, setShowLearningPoint] = useState(false);
  
  const { data: allHistoricalAdventures, isLoading, error } = useHistoricalAdventures({ era });
  
  // Filter historical adventures by user's grade level
  const historicalAdventures = allHistoricalAdventures?.filter((adventure: any) => {
    // If no user or no grade, show all adventures
    if (!user || !user.grade) return true;
    
    // Match grade level
    return adventure.gradeLevel === user.grade || adventure.gradeLevel === user.grade.toString();
  });

  useEffect(() => {
    if (historicalAdventures && historicalAdventures.length > 0) {
      // Always set first adventure when data changes or era changes
      if (!currentAdventure || currentAdventure.era !== era) {
        setCurrentAdventure(historicalAdventures[0]);
      }
    }
  }, [historicalAdventures, era]);

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error loading historical adventures',
        description: 'Failed to load adventure data. Please try again later.',
        variant: 'destructive',
      });
    }
  }, [error]);

  const handleChoice = (choice: any) => {
    setSelectedChoice(choice);
    setShowLearningPoint(true);

    setTimeout(() => {
      const newProgress = progress + (choice.isHistoricallyAccurate ? 1 : 0);
      setProgress(newProgress);

      if (currentScenarioIndex < currentAdventure.scenarios.length - 1) {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        setSelectedChoice(null);
        setShowLearningPoint(false);
      } else {
        setShowResult(true);
        // Save progress ONLY when adventure is truly complete
        if (user && currentAdventure._id) {
          updateProgress({
            type: 'historicalAdventure',
            itemId: currentAdventure._id,
            data: { progress: newProgress, completed: true },
          }).catch(error => {
            console.error('Failed to save historical adventure progress:', error);
          });
        }
      }
    }, 3000);
  };

  const handleSwitchEra = (newEra: string) => {
    setEra(newEra);
    setCurrentScenarioIndex(0);
    setProgress(0);
    setShowResult(false);
    setSelectedChoice(null);
    setShowLearningPoint(false);
    setCurrentAdventure(null);
  };

  const handleRestartAdventure = () => {
    setCurrentScenarioIndex(0);
    setProgress(0);
    setShowResult(false);
    setSelectedChoice(null);
    setShowLearningPoint(false);
    setCurrentAdventure(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
        
        <Card className="relative z-10 p-8 bg-card border-4 border-border shadow-large rounded-2xl">
          <div className="flex flex-col items-center">
            <Target className="w-16 h-16 text-primary mb-4 animate-pulse" />
            <h2 className="text-2xl font-bold text-center mb-4">Loading Historical Adventures...</h2>
            <div className="animate-spin h-12 w-12 border-4 border-primary rounded-full border-t-transparent"></div>
          </div>
        </Card>
      </div>
    );
  }

  if (!currentAdventure && !isLoading) {
    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
        
        <Card className="relative z-10 w-full max-w-2xl mx-4 bg-card border-4 border-border shadow-large rounded-2xl p-8">
          <div className="flex flex-col items-center">
            <AlertCircle className="w-16 h-16 text-amber-500 mb-4" />
            <h2 className="text-2xl font-bold text-center mb-4">Loading Adventures...</h2>
            <p className="text-center text-muted-foreground mb-6">
              Please wait while we load your historical adventures...
            </p>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Home className="mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!historicalAdventures || historicalAdventures.length === 0) {
    return (
      <div className="min-h-screen bg-sky-blue flex items-center justify-center">
        <Card className="p-8 bg-card border-4 border-border shadow-large rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">No Historical Adventures Available</h2>
          <p className="text-muted-foreground mb-4">
            There are no adventures for the era "{era}" yet.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <Button onClick={() => handleSwitchEra('Ancient')}>Ancient Times</Button>
            <Button onClick={() => handleSwitchEra('Industrial Revolution')}>Industrial Revolution</Button>
            <Button onClick={() => handleSwitchEra('Modern')}>Modern Era</Button>
            <Button variant="outline" onClick={() => navigate('/')}>Back to Menu</Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentScenario = currentAdventure.scenarios[currentScenarioIndex];

  if (showResult) {
    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
        
        <Card className="relative z-10 w-full max-w-2xl mx-4 bg-card border-4 border-border shadow-large rounded-2xl p-8 text-center">
          <Target className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-primary mb-4">Adventure Complete!</h2>
          <p className="text-3xl font-bold text-foreground mb-8">
            Historical Accuracy: {progress}/{currentAdventure.scenarios.length}
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            You've completed: {currentAdventure.title}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="secondary" size="lg" onClick={() => navigate('/dashboard')}>
              View Dashboard
            </Button>
            <Button variant="default" size="lg" onClick={handleRestartAdventure}>
              <RefreshCw className="mr-2" />
              Play Again
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/')}>
              <Home className="mr-2" />
              Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]" 
              style={{ 
                WebkitTextStroke: '3px rgba(0,0,0,0.3)',
                paintOrder: 'stroke fill'
              }}>
            MISSIONS
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            {currentAdventure.title}
          </p>
        </div>

        <Card className="w-full max-w-3xl bg-card border-4 border-border shadow-large rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {currentScenario.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {currentScenario.description}
              </p>
            </div>
            <div className="bg-primary rounded-xl px-6 py-3 border-2 border-border ml-4">
              <span className="text-2xl font-bold text-primary-foreground">
                {currentScenarioIndex + 1}/{currentAdventure.scenarios.length}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {currentScenario.choices && currentScenario.choices.map((choice: any, index: number) => (
              <Button
                key={index}
                variant={selectedChoice === choice ? (choice.isHistoricallyAccurate ? 'default' : 'destructive') : 'outline'}
                size="lg"
                onClick={() => !selectedChoice && handleChoice(choice)}
                disabled={!!selectedChoice}
                className="w-full text-left text-lg h-auto py-4 px-6"
              >
                <div className="flex items-start gap-3">
                  <Scroll className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>{choice.text}</span>
                </div>
              </Button>
            ))}
          </div>

          {showLearningPoint && selectedChoice && (
            <Card className={`mt-6 p-4 border-2 ${selectedChoice.isHistoricallyAccurate ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <p className="font-bold mb-2">{selectedChoice.outcome}</p>
                  <p className="text-sm text-foreground">{selectedChoice.learningPoint}</p>
                </div>
              </div>
            </Card>
          )}

          {currentScenario.historicalFacts && currentScenario.historicalFacts.length > 0 && (
            <Card className="mt-6 p-4 bg-muted border-2 border-border">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold mb-2">Historical Fact:</p>
                  <p className="text-sm text-foreground">{currentScenario.historicalFacts[0].fact}</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">
                    Source: {currentScenario.historicalFacts[0].source}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </Card>

        <div className="flex flex-col gap-4 w-full max-w-3xl">
          <div className="flex gap-2 justify-center flex-wrap">
            <Button
              variant={era === 'Ancient' ? 'default' : 'secondary'}
              onClick={() => handleSwitchEra('Ancient')}
            >
              Ancient Times
            </Button>
            <Button
              variant={era === 'Industrial Revolution' ? 'default' : 'secondary'}
              onClick={() => handleSwitchEra('Industrial Revolution')}
            >
              Industrial Revolution
            </Button>
            <Button
              variant={era === 'Modern' ? 'default' : 'secondary'}
              onClick={() => handleSwitchEra('Modern')}
            >
              Modern Era
            </Button>
          </div>

          <div className="bg-card rounded-2xl px-8 py-4 border-4 border-border shadow-medium text-center">
            <p className="text-xl font-bold text-foreground">
              Progress: <span className="text-primary">{progress} correct choices</span>
            </p>
          </div>
        </div>

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

export default Missions;
