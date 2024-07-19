import { authButton } from "@/lib/constants";
import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
  return <SignUp appearance={authButton} path="/sign-up" signInUrl="/sign-in" />;
}