import { authButton } from "@/lib/constants";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return <SignIn appearance={authButton} path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl="dashboard" />;
}
