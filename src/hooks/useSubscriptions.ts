import { useState, useEffect, useCallback } from 'react';
import { subscriptionAPI } from '@/lib/api';

export interface SubscriptionPlan {
  id: 'word_builders' | 'quizlet' | 'time_travellers';
  planName: string;
  price: number;
  currency: string;
  features: string[];
}

export interface Subscription {
  _id: string;
  userId: string;
  plan: 'word_builders' | 'quizlet' | 'time_travellers';
  planName: string;
  price: number;
  currency: string;
  status: 'active' | 'inactive' | 'cancelled' | 'expired';
  features: string[];
  startDate: string;
  endDate: string;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface SubscriptionsResponse {
  success: boolean;
  total: number;
  activeCount: number;
  subscriptions: Subscription[];
  activeSubscriptions: Subscription[];
}

export const useSubscriptions = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [activeSubscriptions, setActiveSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch available subscription plans
  const fetchPlans = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await subscriptionAPI.getPlans();
      setPlans(response.data.plans);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch plans');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch user's subscriptions
  const fetchMySubscriptions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await subscriptionAPI.getMySubscriptions();
      const data: SubscriptionsResponse = response.data;
      setSubscriptions(data.subscriptions);
      setActiveSubscriptions(data.activeSubscriptions);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch subscriptions');
    } finally {
      setLoading(false);
    }
  }, []);

  // Subscribe to a plan
  const subscribe = useCallback(async (plan: 'word_builders' | 'quizlet' | 'time_travellers') => {
    try {
      setLoading(true);
      setError(null);
      const response = await subscriptionAPI.subscribe(plan);
      // Refresh subscriptions after successful subscription
      await fetchMySubscriptions();
      return { success: true, subscription: response.data.subscription, message: response.data.message };
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to subscribe';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [fetchMySubscriptions]);

  // Cancel a subscription
  const cancelSubscription = useCallback(async (subscriptionId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await subscriptionAPI.cancelSubscription(subscriptionId);
      // Refresh subscriptions after cancellation
      await fetchMySubscriptions();
      return { success: true, message: response.data.message };
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to cancel subscription';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [fetchMySubscriptions]);

  // Check if user has an active subscription for a specific plan
  const hasActivePlan = useCallback((plan: 'word_builders' | 'quizlet' | 'time_travellers') => {
    return activeSubscriptions.some(sub => sub.plan === plan);
  }, [activeSubscriptions]);

  // Load plans on mount
  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return {
    plans,
    subscriptions,
    activeSubscriptions,
    loading,
    error,
    fetchPlans,
    fetchMySubscriptions,
    subscribe,
    cancelSubscription,
    hasActivePlan,
  };
};

export default useSubscriptions;
