import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';

interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  grade?: string;
  progress?: {
    quizzes: any[];
    wordChallenges: any[];
    historicalAdventures: any[];
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: any) => Promise<boolean>;
  updateProgress: (progressData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          setIsLoading(true);
          const { data } = await authAPI.getProfile();
          setUser(data.user);
        } catch (error) {
          console.error('Authentication error:', error);
          localStorage.removeItem('token');
          setToken(null);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkAuth();
  }, [token]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const { data } = await authAPI.login({ email, password });
      
      if (data.success && data.token) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        
        toast({
          title: 'Login Successful',
          description: `Welcome back, ${data.user.username}!`,
        });
        
        return true;
      }
      return false;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      setIsError(true);
      
      toast({
        title: 'Login Failed',
        description: message,
        variant: 'destructive',
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true);
      const { data } = await authAPI.register(userData);
      
      if (data.success && data.token) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        
        toast({
          title: 'Registration Successful',
          description: `Welcome to Happy Hatchery, ${data.user.username}!`,
        });
        
        return true;
      }
      return false;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      setIsError(true);
      
      toast({
        title: 'Registration Failed',
        description: message,
        variant: 'destructive',
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
  };

  const updateProfile = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true);
      const { data } = await authAPI.updateProfile(userData);
      
      if (data.success) {
        setUser(data.user);
        
        toast({
          title: 'Profile Updated',
          description: 'Your profile has been updated successfully.',
        });
        
        return true;
      }
      return false;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Profile update failed. Please try again.';
      setIsError(true);
      
      toast({
        title: 'Update Failed',
        description: message,
        variant: 'destructive',
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProgress = async (progressData: any): Promise<boolean> => {
    try {
      const { data } = await authAPI.updateProgress(progressData);
      
      if (data.success) {
        // Refetch the complete user profile to ensure accurate progress data
        try {
          const profileResponse = await authAPI.getProfile();
          setUser(profileResponse.data.user);
        } catch (error) {
          console.error('Failed to refresh user profile:', error);
          // Fallback: update locally if profile fetch fails
          setUser(prev => {
            if (!prev) return prev;
            return {
              ...prev,
              progress: {
                quizzes: prev.progress?.quizzes || [],
                wordChallenges: prev.progress?.wordChallenges || [],
                historicalAdventures: prev.progress?.historicalAdventures || [],
                ...prev.progress,
              }
            };
          });
        }
        
        return true;
      }
      return false;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to update progress. Please try again.';
      setIsError(true);
      
      toast({
        title: 'Progress Update Failed',
        description: message,
        variant: 'destructive',
      });
      
      return false;
    }
  };

  const value = {
    user,
    token,
    isLoading,
    isError,
    login,
    register,
    logout,
    updateProfile,
    updateProgress,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
