import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export const metadata = {
  title: "404 — Irish Student Managed Fund",
  description: "Page not found. Return to the Irish Student Managed Fund homepage."
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 — Irish Student Managed Fund</title>
        <meta name="description" content="Page not found. Return to the Irish Student Managed Fund homepage." />
        <meta property="og:title" content="404 — Irish Student Managed Fund" />
        <meta property="og:description" content="Page not found. Return to the Irish Student Managed Fund homepage." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 — Irish Student Managed Fund" />
        <meta name="twitter:description" content="Page not found. Return to the Irish Student Managed Fund homepage." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
