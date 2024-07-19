import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { signOut } = useAuth();
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>

      <UserButton />
      <Button onClick={() => signOut({ redirectUrl: "/sign-in" })}>
        Sign out
      </Button>
      <ul>
        <li>
          <Link to="/dashboard/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
