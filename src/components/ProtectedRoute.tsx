import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();

  // Show loading indicator if auth state is loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-blue">
        <div className="text-xl font-bold">Loading...</div>
      </div>
    );
  }

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If allowedRoles is provided, check if user has one of the allowed roles
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // If user is logged in and has the right role, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;
