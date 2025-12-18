import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSubscriptions, SubscriptionPlan } from '@/hooks/useSubscriptions';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Crown, BookOpen, Brain, Clock, Check, Loader2 } from 'lucide-react';

interface SubscriptionButtonProps {
  variant?: 'default' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const planIcons = {
  word_builders: BookOpen,
  quizlet: Brain,
  time_travellers: Clock,
};

const planDescriptions = {
  word_builders: 'Build your vocabulary with fun word challenges and games!',
  quizlet: 'Test your knowledge with interactive quizzes across all subjects!',
  time_travellers: 'Journey through history with exciting time travel adventures!',
};

const planColors = {
  word_builders: 'bg-blue-500 hover:bg-blue-600',
  quizlet: 'bg-purple-500 hover:bg-purple-600',
  time_travellers: 'bg-amber-500 hover:bg-amber-600',
};

export const SubscriptionButton = ({ 
  variant = 'default', 
  size = 'lg',
  className = ''
}: SubscriptionButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'word_builders' | 'quizlet' | 'time_travellers' | null>(null);
  const [subscribing, setSubscribing] = useState(false);
  
  const { plans, loading, subscribe, hasActivePlan, fetchMySubscriptions, activeSubscriptions } = useSubscriptions();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Fetch user's subscriptions when dialog opens
  useEffect(() => {
    if (open && isAuthenticated) {
      fetchMySubscriptions();
    }
  }, [open, isAuthenticated, fetchMySubscriptions]);

  const handleSubscribe = async (planId: 'word_builders' | 'quizlet' | 'time_travellers') => {
    if (!isAuthenticated) {
      toast({
        title: 'Login Required',
        description: 'Please login to subscribe to a plan.',
        variant: 'destructive',
      });
      return;
    }

    setSelectedPlan(planId);
    setSubscribing(true);

    try {
      const result = await subscribe(planId);
      
      if (result.success) {
        toast({
          title: 'Subscription Successful! 🎉',
          description: result.message,
        });
        setOpen(false);
      } else {
        toast({
          title: 'Subscription Failed',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSubscribing(false);
      setSelectedPlan(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Crown className="mr-2 h-5 w-5" />
          SUBSCRIBE
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Crown className="h-6 w-6 text-yellow-500" />
            Premium Subscriptions
          </DialogTitle>
          <DialogDescription className="text-center">
            Unlock amazing features for just ₱50 per plan!
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            plans.map((plan: SubscriptionPlan) => {
              const Icon = planIcons[plan.id];
              const isSubscribed = hasActivePlan(plan.id);
              const isCurrentlySubscribing = subscribing && selectedPlan === plan.id;

              return (
                <Card 
                  key={plan.id} 
                  className={`p-4 border-2 transition-all duration-200 ${
                    isSubscribed 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-border hover:border-primary hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${planColors[plan.id]} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{plan.planName}</h3>
                        {isSubscribed && (
                          <Badge className="bg-green-500 text-white">
                            <Check className="h-3 w-3 mr-1" />
                            Subscribed
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-1">
                        {planDescriptions[plan.id]}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="text-2xl font-bold text-primary">
                          ₱{plan.price}
                          <span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                        
                        <Button
                          onClick={() => handleSubscribe(plan.id)}
                          disabled={isSubscribed || subscribing}
                          className={isSubscribed ? 'bg-green-500' : planColors[plan.id]}
                          size="sm"
                        >
                          {isCurrentlySubscribing ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : isSubscribed ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Active
                            </>
                          ) : (
                            'Subscribe Now'
                          )}
                        </Button>
                      </div>

                      {plan.features && plan.features.length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-xs font-medium text-muted-foreground mb-2">Features:</p>
                          <ul className="text-sm space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="h-3 w-3 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(!plan.features || plan.features.length === 0) && (
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          ✨ More features coming soon!
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>

        {!isAuthenticated && (
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              Please <strong>login</strong> or <strong>register</strong> to subscribe to a plan.
            </p>
          </div>
        )}

        {activeSubscriptions.length > 0 && (
          <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              You have <strong>{activeSubscriptions.length}</strong> active subscription(s)
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionButton;
