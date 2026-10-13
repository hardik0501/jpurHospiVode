import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Helmet>
        <title>404 - Page Not Found | Jaipur Hospital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <HospitalHeader />
      
      <main className="flex-1 flex flex-col items-center justify-center bg-surface internal-hero-pt pb-20">
        <div className="text-center px-4">
          <h1 className="mb-4 text-7xl font-display font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Oops! Page not found</h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default NotFound;
