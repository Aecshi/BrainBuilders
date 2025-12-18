import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { wordChallengeAPI } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';

export interface WordChallenge {
  _id: string;
  title: string;
  description: string;
  gradeLevel: string;
  difficulty: string;
  type: string;
  timeLimit: number;
  words: {
    word: string;
    definition?: string;
    sentence?: string;
    hint?: string;
    points: number;
    imageUrl?: string;
  }[];
  instructions: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Hook to fetch all word challenges or filtered word challenges
export function useWordChallenges(params = {}) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['wordChallenges', params],
    queryFn: async () => {
      try {
        const { data } = await wordChallengeAPI.getWordChallenges(params);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading word challenges',
          description: error.response?.data?.message || 'Failed to load word challenges',
          variant: 'destructive',
        });
        throw new Error('Failed to load word challenges');
      }
    },
  });
}

// Hook to fetch a single word challenge by ID
export function useWordChallenge(id: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['wordChallenge', id],
    queryFn: async () => {
      if (!id) return null;
      
      try {
        const { data } = await wordChallengeAPI.getWordChallenge(id);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading word challenge',
          description: error.response?.data?.message || 'Failed to load word challenge',
          variant: 'destructive',
        });
        throw new Error('Failed to load word challenge');
      }
    },
    enabled: !!id,
  });
}

// Hook to fetch word challenges by type
export function useWordChallengesByType(type: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['wordChallenges', 'type', type],
    queryFn: async () => {
      if (!type) return [];
      
      try {
        const { data } = await wordChallengeAPI.getByType(type);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading word challenges',
          description: error.response?.data?.message || 'Failed to load word challenges by type',
          variant: 'destructive',
        });
        throw new Error('Failed to load word challenges by type');
      }
    },
    enabled: !!type,
  });
}

// Hook to fetch word challenges by grade level
export function useWordChallengesByGrade(grade: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['wordChallenges', 'grade', grade],
    queryFn: async () => {
      if (!grade) return [];
      
      try {
        const { data } = await wordChallengeAPI.getByGrade(grade);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading word challenges',
          description: error.response?.data?.message || 'Failed to load word challenges by grade',
          variant: 'destructive',
        });
        throw new Error('Failed to load word challenges by grade');
      }
    },
    enabled: !!grade,
  });
}

// Admin hooks for managing word challenges
export function useAdminWordChallenges() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  const createWordChallenge = useMutation({
    mutationFn: async (challengeData: any) => {
      const { data } = await wordChallengeAPI.createWordChallenge(challengeData);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wordChallenges'] });
      toast({
        title: 'Word challenge created',
        description: 'Word challenge has been created successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error creating word challenge',
        description: error.response?.data?.message || 'Failed to create word challenge',
        variant: 'destructive',
      });
    },
  });
  
  const updateWordChallenge = useMutation({
    mutationFn: async ({ id, challengeData }: { id: string; challengeData: any }) => {
      const { data } = await wordChallengeAPI.updateWordChallenge(id, challengeData);
      return data.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['wordChallenges'] });
      queryClient.invalidateQueries({ queryKey: ['wordChallenge', variables.id] });
      toast({
        title: 'Word challenge updated',
        description: 'Word challenge has been updated successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error updating word challenge',
        description: error.response?.data?.message || 'Failed to update word challenge',
        variant: 'destructive',
      });
    },
  });
  
  const deleteWordChallenge = useMutation({
    mutationFn: async (id: string) => {
      await wordChallengeAPI.deleteWordChallenge(id);
      return id;
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ['wordChallenges'] });
      queryClient.removeQueries({ queryKey: ['wordChallenge', id] });
      toast({
        title: 'Word challenge deleted',
        description: 'Word challenge has been deleted successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error deleting word challenge',
        description: error.response?.data?.message || 'Failed to delete word challenge',
        variant: 'destructive',
      });
    },
  });
  
  return {
    createWordChallenge,
    updateWordChallenge,
    deleteWordChallenge,
  };
}
