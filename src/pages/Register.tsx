import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, UserPlus } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading, user } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // If user is already logged in, redirect to dashboard
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!username || !email || !password || !confirmPassword) return;
    
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    setPasswordError('');
    
    const userData = {
      username,
      email,
      password,
      role: 'student',
      grade: grade || null,
    };
    
    const success = await register(userData);
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

        {/* Register Card */}
        <Card className="w-full max-w-md bg-card border-4 border-border shadow-large rounded-2xl p-8 mb-8">
          <div className="bg-primary rounded-xl p-4 mb-6">
            <h2 className="text-2xl font-bold text-primary-foreground text-center">
              REGISTER
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-2 border-border rounded-xl h-12"
              />
            </div>
            
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-border rounded-xl h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`border-2 border-border rounded-xl h-12 ${passwordError ? 'border-red-500' : ''}`}
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level (Optional)</Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className="border-2 border-border rounded-xl h-12">
                  <SelectValue placeholder="Select your grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="K">Kindergarten</SelectItem>
                  <SelectItem value="1">Grade 1</SelectItem>
                  <SelectItem value="2">Grade 2</SelectItem>
                  <SelectItem value="3">Grade 3</SelectItem>
                  <SelectItem value="4">Grade 4</SelectItem>
                  <SelectItem value="5">Grade 5</SelectItem>
                  <SelectItem value="6">Grade 6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit"
              variant="accent" 
              size="lg"
              disabled={isLoading}
              className="w-full mt-6"
            >
              {isLoading ? 'Registering...' : 'Register'}
              <UserPlus className="ml-2" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline">
                Login
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

export default Register;
