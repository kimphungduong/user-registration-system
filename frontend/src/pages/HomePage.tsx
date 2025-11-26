import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
          <CardDescription>
            User Registration System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link to="/signup" className="block">
            <Button className="w-full" size="lg">
              Sign Up
            </Button>
          </Link>
          <Link to="/login" className="block">
            <Button className="w-full" variant="outline" size="lg">
              Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}