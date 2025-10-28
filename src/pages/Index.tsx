import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, BookOpen, Target, Settings, LogOut, UserPlus, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90 animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute top-40 left-1/4 w-36 h-22 bg-cloud-white rounded-full opacity-85" />
      <div className="absolute bottom-20 right-1/4 w-44 h-26 bg-cloud-white rounded-full opacity-75" />
      
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]" 
              style={{ 
                WebkitTextStroke: '4px rgba(0,0,0,0.3)',
                paintOrder: 'stroke fill'
              }}>
            BRAINBUILDERS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            Journey Through Time and Knowledge
          </p>
        </div>

        {/* Menu buttons */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => navigate('/quiz')}
            className="w-full"
          >
            <Play className="mr-2" />
            PLAY
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/learn')}
            className="w-full"
          >
            <BookOpen className="mr-2" />
            LEARN
          </Button>
          
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => navigate('/missions')}
            className="w-full"
          >
            <Target className="mr-2" />
            MISSIONS
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/dashboard')}
            className="w-full"
          >
            <Settings className="mr-2" />
            DASHBOARD
          </Button>
          
          {user ? (
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
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => navigate('/login')}
                className="w-full"
              >
                <LogIn className="mr-2" />
                LOGIN
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => navigate('/register')}
                className="w-full"
              >
                <UserPlus className="mr-2" />
                REGISTER
              </Button>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-40 left-10 animate-bounce">
          <div className="w-20 h-24 bg-card rounded-lg border-4 border-border shadow-medium p-2">
            <div className="text-2xl font-bold text-center">ABC</div>
          </div>
        </div>
        
        <div className="absolute bottom-40 right-10">
          <div className="w-16 h-20 bg-sun-yellow rounded-full border-4 border-border shadow-medium flex items-center justify-center">
            <div className="text-3xl">⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;