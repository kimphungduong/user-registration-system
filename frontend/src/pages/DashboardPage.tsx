import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const navigate = useNavigate();

  // Lấy email từ localStorage (đã lưu khi login)
  const userEmail = localStorage.getItem('userEmail') || 'User';

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Welcome! 🎉</h1>
            <p className="text-gray-600 mt-2">You have successfully logged in</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* User Info Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold w-32">Email:</span>
                <span className="text-gray-700">{userEmail}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Status:</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Login Time:</span>
                <span className="text-gray-700">
                  {new Date().toLocaleString('vi-VN')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">📊 Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                View your activity and statistics
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">⚙️ Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Manage your account settings
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">👤 Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Update your profile information
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <Card className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-2">
              🚀 Welcome to User Registration System
            </h2>
            <p className="text-blue-100">
              You have successfully logged in to your account. Explore the features and manage your profile.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}