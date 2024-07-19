import { useAuth } from "@clerk/clerk-react";
import DashboardLayout from "./dashboard-layout";
import UnAuthLayout from "./un-auth-layout";

export default function RootLayout() {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <DashboardLayout /> : <UnAuthLayout />;
}
