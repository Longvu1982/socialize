import { useAuth } from "@clerk/clerk-react";
import MainLayout from "./main-layout";
import UnAuthLayout from "./un-auth-layout";

export default function RootLayout() {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <MainLayout /> : <UnAuthLayout />;
}
