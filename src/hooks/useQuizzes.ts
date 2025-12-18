import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quizAPI } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  difficulty: string;
  timeLimit: number;
  questions: {
    questionText: string;
    options: {
      text: string;
      isCorrect: boolean;
    }[];
    explanation?: string;
    points: number;
    imageUrl?: string;
  }[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Hook to fetch all quizzes or filtered quizzes
export function useQuizzes(params = {}) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['quizzes', params],
    queryFn: async () => {
      try {
        const { data } = await quizAPI.getQuizzes(params);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading quizzes',
          description: error.response?.data?.message || 'Failed to load quizzes',
          variant: 'destructive',
        });
        throw new Error('Failed to load quizzes');
      }
    },
  });
}

// Hook to fetch a single quiz by ID
export function useQuiz(id: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['quiz', id],
    queryFn: async () => {
      if (!id) return null;
      
      try {
        const { data } = await quizAPI.getQuiz(id);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading quiz',
          description: error.response?.data?.message || 'Failed to load quiz',
          variant: 'destructive',
        });
        throw new Error('Failed to load quiz');
      }
    },
    enabled: !!id,
  });
}

// Hook to fetch quizzes by subject
export function useQuizzesBySubject(subject: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['quizzes', 'subject', subject],
    queryFn: async () => {
      if (!subject) return [];
      
      try {
        const { data } = await quizAPI.getBySubject(subject);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading quizzes',
          description: error.response?.data?.message || 'Failed to load quizzes by subject',
          variant: 'destructive',
        });
        throw new Error('Failed to load quizzes by subject');
      }
    },
    enabled: !!subject,
  });
}

// Hook to fetch quizzes by grade level
export function useQuizzesByGrade(grade: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['quizzes', 'grade', grade],
    queryFn: async () => {
      if (!grade) return [];
      
      try {
        const { data } = await quizAPI.getByGrade(grade);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading quizzes',
          description: error.response?.data?.message || 'Failed to load quizzes by grade',
          variant: 'destructive',
        });
        throw new Error('Failed to load quizzes by grade');
      }
    },
    enabled: !!grade,
  });
}

// Admin hooks for managing quizzes
export function useAdminQuizzes() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  const createQuiz = useMutation({
    mutationFn: async (quizData: any) => {
      const { data } = await quizAPI.createQuiz(quizData);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      toast({
        title: 'Quiz created',
        description: 'Quiz has been created successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error creating quiz',
        description: error.response?.data?.message || 'Failed to create quiz',
        variant: 'destructive',
      });
    },
  });
  
  const updateQuiz = useMutation({
    mutationFn: async ({ id, quizData }: { id: string; quizData: any }) => {
      const { data } = await quizAPI.updateQuiz(id, quizData);
      return data.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      queryClient.invalidateQueries({ queryKey: ['quiz', variables.id] });
      toast({
        title: 'Quiz updated',
        description: 'Quiz has been updated successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error updating quiz',
        description: error.response?.data?.message || 'Failed to update quiz',
        variant: 'destructive',
      });
    },
  });
  
  const deleteQuiz = useMutation({
    mutationFn: async (id: string) => {
      await quizAPI.deleteQuiz(id);
      return id;
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
      queryClient.removeQueries({ queryKey: ['quiz', id] });
      toast({
        title: 'Quiz deleted',
        description: 'Quiz has been deleted successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error deleting quiz',
        description: error.response?.data?.message || 'Failed to delete quiz',
        variant: 'destructive',
      });
    },
  });
  
  return {
    createQuiz,
    updateQuiz,
    deleteQuiz,
  };
}
