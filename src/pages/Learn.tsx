import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, BookOpen, AlertCircle } from 'lucide-react';
import { useWordChallenges } from '@/hooks/useWordChallenges';

const Learn = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<string>('Vocabulary');
  
  // Use the hook with debugging logs
  const { data: wordChallenges, isLoading, error } = useWordChallenges({ type });
  
  console.log("Learn page data:", { wordChallenges, isLoading, error });
  
  // Handle a development/coming soon state
  const [comingSoon] = useState(true); // Set to false when ready to implement fully

  if (comingSoon) {
    return (
      <div className="min-h-screen bg-sky-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
        <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
        
        <Card className="relative z-10 w-full max-w-2xl mx-4 bg-card border-4 border-border shadow-large rounded-2xl p-8">
          <div className="flex flex-col items-center">
            <BookOpen className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold text-center text-primary mb-2">Coming Soon!</h2>
            <p className="text-xl text-center text-muted-foreground mb-8">
              The Learn mode is currently under development. Check back soon for exciting word challenges!
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                onClick={() => navigate('/')}
              >
                <Home className="mr-2" />
                Back to Home
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => navigate('/quiz')}
              >
                Try Quizzes Instead
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

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
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Standard content would go here */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90 animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]" 
              style={{ 
                WebkitTextStroke: '3px rgba(0,0,0,0.3)',
                paintOrder: 'stroke fill'
              }}>
            WORD CHALLENGES
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            Build your vocabulary and language skills!
          </p>
        </div>
        
        {/* Word Challenge options would go here */}
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/')}
          className="mt-6"
        >
          <Home className="mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Learn;
