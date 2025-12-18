import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { historicalAdventureAPI } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';

export interface HistoricalAdventure {
  _id: string;
  title: string;
  description: string;
  era: string;
  gradeLevel: string;
  difficulty: string;
  estimatedTime: number;
  scenarios: {
    title: string;
    description: string;
    backgroundImage?: string;
    choices: {
      text: string;
      nextScenarioId?: string;
      outcome?: string;
      isHistoricallyAccurate: boolean;
      learningPoint?: string;
    }[];
    characters: {
      name: string;
      role?: string;
      imageUrl?: string;
      dialogues: {
        text: string;
        order: number;
      }[];
    }[];
    isEnding: boolean;
    historicalFacts: {
      fact: string;
      source: string;
    }[];
  }[];
  learningObjectives: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Hook to fetch all historical adventures or filtered historical adventures
export function useHistoricalAdventures(params = {}) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['historicalAdventures', params],
    queryFn: async () => {
      try {
        const { data } = await historicalAdventureAPI.getHistoricalAdventures(params);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading historical adventures',
          description: error.response?.data?.message || 'Failed to load historical adventures',
          variant: 'destructive',
        });
        throw new Error('Failed to load historical adventures');
      }
    },
  });
}

// Hook to fetch a single historical adventure by ID
export function useHistoricalAdventure(id: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['historicalAdventure', id],
    queryFn: async () => {
      if (!id) return null;
      
      try {
        const { data } = await historicalAdventureAPI.getHistoricalAdventure(id);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading historical adventure',
          description: error.response?.data?.message || 'Failed to load historical adventure',
          variant: 'destructive',
        });
        throw new Error('Failed to load historical adventure');
      }
    },
    enabled: !!id,
  });
}

// Hook to fetch historical adventures by era
export function useHistoricalAdventuresByEra(era: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['historicalAdventures', 'era', era],
    queryFn: async () => {
      if (!era) return [];
      
      try {
        const { data } = await historicalAdventureAPI.getByEra(era);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading historical adventures',
          description: error.response?.data?.message || 'Failed to load historical adventures by era',
          variant: 'destructive',
        });
        throw new Error('Failed to load historical adventures by era');
      }
    },
    enabled: !!era,
  });
}

// Hook to fetch historical adventures by grade level
export function useHistoricalAdventuresByGrade(grade: string) {
  const { toast } = useToast();
  
  return useQuery({
    queryKey: ['historicalAdventures', 'grade', grade],
    queryFn: async () => {
      if (!grade) return [];
      
      try {
        const { data } = await historicalAdventureAPI.getByGrade(grade);
        return data.data;
      } catch (error: any) {
        toast({
          title: 'Error loading historical adventures',
          description: error.response?.data?.message || 'Failed to load historical adventures by grade',
          variant: 'destructive',
        });
        throw new Error('Failed to load historical adventures by grade');
      }
    },
    enabled: !!grade,
  });
}

// Admin hooks for managing historical adventures
export function useAdminHistoricalAdventures() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  const createHistoricalAdventure = useMutation({
    mutationFn: async (adventureData: any) => {
      const { data } = await historicalAdventureAPI.createHistoricalAdventure(adventureData);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['historicalAdventures'] });
      toast({
        title: 'Historical adventure created',
        description: 'Historical adventure has been created successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error creating historical adventure',
        description: error.response?.data?.message || 'Failed to create historical adventure',
        variant: 'destructive',
      });
    },
  });
  
  const updateHistoricalAdventure = useMutation({
    mutationFn: async ({ id, adventureData }: { id: string; adventureData: any }) => {
      const { data } = await historicalAdventureAPI.updateHistoricalAdventure(id, adventureData);
      return data.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['historicalAdventures'] });
      queryClient.invalidateQueries({ queryKey: ['historicalAdventure', variables.id] });
      toast({
        title: 'Historical adventure updated',
        description: 'Historical adventure has been updated successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error updating historical adventure',
        description: error.response?.data?.message || 'Failed to update historical adventure',
        variant: 'destructive',
      });
    },
  });
  
  const deleteHistoricalAdventure = useMutation({
    mutationFn: async (id: string) => {
      await historicalAdventureAPI.deleteHistoricalAdventure(id);
      return id;
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ['historicalAdventures'] });
      queryClient.removeQueries({ queryKey: ['historicalAdventure', id] });
      toast({
        title: 'Historical adventure deleted',
        description: 'Historical adventure has been deleted successfully',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error deleting historical adventure',
        description: error.response?.data?.message || 'Failed to delete historical adventure',
        variant: 'destructive',
      });
    },
  });
  
  return {
    createHistoricalAdventure,
    updateHistoricalAdventure,
    deleteHistoricalAdventure,
  };
}
