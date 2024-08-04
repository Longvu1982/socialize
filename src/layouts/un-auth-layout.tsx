import LayoutLoading from "@/components/layouts/page-loading";
import { useAuth } from "@clerk/clerk-react";
import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const unAuthRoutes = ["/sing-in", "/sign-up"];

export default function UnAuthLayout() {
  const { isLoaded } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isLoaded && !unAuthRoutes.includes(location.pathname))
      navigate("/sign-in");
  }, [isLoaded, location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center gradient-background">
      {isLoaded ? <Outlet /> : <LayoutLoading />}
    </main>
  );
}
