import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Home, LogIn } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // If user is already logged in, redirect to dashboard
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) return;
    
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90 animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
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

        {/* Login Card */}
        <Card className="w-full max-w-md bg-card border-4 border-border shadow-large rounded-2xl p-8 mb-8">
          <div className="bg-primary rounded-xl p-4 mb-6">
            <h2 className="text-2xl font-bold text-primary-foreground text-center">
              LOGIN
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-border rounded-xl h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-border rounded-xl h-12"
              />
            </div>
            
            <Button 
              type="submit"
              variant="default" 
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Logging in...' : 'Login'}
              <LogIn className="ml-2" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-bold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </Card>

        {/* Home button */}
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/')}
          className="mt-4"
        >
          <Home className="mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Login;
