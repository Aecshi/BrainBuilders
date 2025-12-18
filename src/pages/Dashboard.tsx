import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Star, BookCheck, BookText } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SubscriptionButton from "@/components/SubscriptionButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  // Calculate total quizzes completed
  const quizzesCompleted = user?.progress?.quizzes?.length || 0;
  
  // Calculate total score across all activities
  const totalScore = user?.progress?.quizzes?.reduce(
    (total, quiz) => total + (quiz.score || 0), 0
  ) || 0;
  
  // Calculate total words found
  const wordsFound = user?.progress?.wordChallenges?.reduce(
    (total, challenge) => {
      // Assuming each challenge completed counts as words found
      // This could be more specific based on your app's logic
      return total + (challenge.score || 0);
    }, 0
  ) || 0;

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
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
            Journey Through Time and Knowledge
          </p>
        </div>

        {/* Dashboard Card */}
        <Card className="w-full max-w-2xl bg-card border-4 border-border shadow-large rounded-2xl p-8 mb-8">
          <div className="bg-primary rounded-xl p-4 mb-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-center">
              DASHBOARD
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Welcome message */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                Welcome, {user?.username || 'Explorer'}!
              </h3>
              {user?.grade && (
                <p className="text-muted-foreground">
                  Grade {user.grade === 'K' ? 'Kindergarten' : user.grade}
                </p>
              )}
            </div>
            
            {/* Quests */}
            <div className="flex items-center justify-between bg-muted rounded-xl p-4 border-b-4 border-border">
              <div className="flex items-center gap-4">
                <div className="bg-card rounded-lg p-3 border-2 border-border">
                  <BookCheck className="w-8 h-8 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">QUESTS</span>
              </div>
              <span className="text-3xl font-bold text-foreground">{quizzesCompleted}/10</span>
            </div>

            {/* Score */}
            <div className="flex items-center justify-between bg-muted rounded-xl p-4 border-b-4 border-border">
              <div className="flex items-center gap-4">
                <div className="bg-sun-yellow rounded-full p-3 border-2 border-border">
                  <Star className="w-8 h-8 text-primary-foreground fill-current" />
                </div>
                <span className="text-2xl font-bold text-foreground">SCORE</span>
              </div>
              <span className="text-3xl font-bold text-foreground">{totalScore}</span>
            </div>

            {/* Words Found */}
            <div className="flex items-center justify-between bg-muted rounded-xl p-4 border-b-4 border-border">
              <div className="flex items-center gap-4">
                <div className="bg-card rounded-lg p-3 border-2 border-border">
                  <BookText className="w-8 h-8 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">WORDS FOUND</span>
              </div>
              <span className="text-3xl font-bold text-foreground">{wordsFound}</span>
            </div>
          </div>

          {/* Character Avatar */}
          <div className="flex justify-center mt-8">
            <div className="bg-muted rounded-2xl p-6 border-4 border-border shadow-medium">
              <User className="w-32 h-32 text-primary" strokeWidth={2.5} />
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <SubscriptionButton 
            variant="default" 
            size="lg"
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold"
          />
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/profile')}
            className="w-full"
          >
            <User className="mr-2" />
            PROFILE
          </Button>
          
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => navigate('/')}
            className="w-full"
          >
            <LogOut className="mr-2" />
            HOME
          </Button>
          
          <Button 
            variant="destructive" 
            size="lg"
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="w-full"
          >
            <LogOut className="mr-2" />
            LOG OUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;