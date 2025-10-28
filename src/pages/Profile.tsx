import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { User, Home, Edit, Save, X, Mail, GraduationCap, Shield } from 'lucide-react';
import { api } from '@/lib/api';

const Profile = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    grade: user?.grade || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      // Validate password change if user is trying to change it
      if (formData.newPassword || formData.confirmPassword || formData.currentPassword) {
        if (!formData.currentPassword) {
          toast({
            title: 'Current Password Required',
            description: 'Please enter your current password to change your password.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
          toast({
            title: 'Passwords Do Not Match',
            description: 'New password and confirm password must match.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }

        if (formData.newPassword.length < 6) {
          toast({
            title: 'Password Too Short',
            description: 'New password must be at least 6 characters long.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }
      }

      // Prepare update data
      const updateData: any = {
        username: formData.username,
        email: formData.email,
        grade: formData.grade,
      };

      // Only include password fields if user is changing password
      if (formData.currentPassword && formData.newPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.password = formData.newPassword;
      }

      // Update user profile
      const response = await api.put('/users/profile', updateData);

      // Update the auth context with new user data
      if (response.data.token) {
        login(response.data.token, response.data.user);
      }

      toast({
        title: 'Profile Updated!',
        description: 'Your profile has been successfully updated.',
      });

      // Reset password fields
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

      setIsEditing(false);
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Update Failed',
        description: error.response?.data?.message || 'Failed to update profile. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      grade: user?.grade || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-sky-blue relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-cloud-white rounded-full opacity-90" />
      <div className="absolute top-20 right-20 w-40 h-24 bg-cloud-white rounded-full opacity-80" />
      <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-cloud-white rounded-full opacity-85" />
      
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-grass-green" />
      
      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen">
        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-sun-yellow mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]" 
              style={{ 
                WebkitTextStroke: '3px rgba(0,0,0,0.3)',
                paintOrder: 'stroke fill'
              }}>
            MY PROFILE
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            Manage Your Account
          </p>
        </div>

        {/* Profile Card */}
        <Card className="w-full max-w-2xl bg-card border-4 border-border shadow-large rounded-2xl p-8 mb-8">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-2xl p-8 border-4 border-border shadow-medium">
              <User className="w-32 h-32 text-primary" strokeWidth={2.5} />
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-lg font-bold flex items-center gap-2">
                <User className="w-5 h-5" />
                Username
              </Label>
              {isEditing ? (
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="text-lg p-3 border-2"
                  placeholder="Enter username"
                />
              ) : (
                <div className="bg-muted rounded-lg p-3 border-2 border-border text-lg font-semibold">
                  {user?.username}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </Label>
              {isEditing ? (
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-lg p-3 border-2"
                  placeholder="Enter email"
                />
              ) : (
                <div className="bg-muted rounded-lg p-3 border-2 border-border text-lg font-semibold">
                  {user?.email}
                </div>
              )}
            </div>

            {/* Grade */}
            <div className="space-y-2">
              <Label htmlFor="grade" className="text-lg font-bold flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Grade Level
              </Label>
              {isEditing ? (
                <Input
                  id="grade"
                  name="grade"
                  type="text"
                  value={formData.grade}
                  onChange={handleChange}
                  className="text-lg p-3 border-2"
                  placeholder="e.g., 3, 4, 5, K"
                />
              ) : (
                <div className="bg-muted rounded-lg p-3 border-2 border-border text-lg font-semibold">
                  {user?.grade ? (user.grade === 'K' ? 'Kindergarten' : `Grade ${user.grade}`) : 'Not Set'}
                </div>
              )}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label className="text-lg font-bold flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Role
              </Label>
              <div className="bg-muted rounded-lg p-3 border-2 border-border text-lg font-semibold capitalize">
                {user?.role || 'Student'}
              </div>
            </div>

            {/* Password Change (Only in Edit Mode) */}
            {isEditing && (
              <>
                <div className="border-t-2 border-border pt-6 mt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Change Password (Optional)</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword" className="text-lg font-bold">
                        Current Password
                      </Label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="text-lg p-3 border-2"
                        placeholder="Enter current password"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-lg font-bold">
                        New Password
                      </Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="text-lg p-3 border-2"
                        placeholder="Enter new password"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-lg font-bold">
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="text-lg p-3 border-2"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            {isEditing ? (
              <>
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Save className="mr-2" />
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="w-full"
                >
                  <X className="mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsEditing(true)}
                className="w-full"
              >
                <Edit className="mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Button
            variant="accent"
            size="lg"
            onClick={() => navigate('/dashboard')}
            className="w-full"
          >
            Back to Dashboard
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/')}
            className="w-full"
          >
            <Home className="mr-2" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

