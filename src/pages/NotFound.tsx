
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-corporate-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 font-medium mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-corporate-600 hover:bg-corporate-700">
          <Link to="/" className="flex items-center">
            <Home size={18} className="mr-2" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
