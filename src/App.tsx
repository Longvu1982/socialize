// Import the layouts
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout";
import RootLayout from "./layouts/root-layout";

// Import the components
import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import DashboardPage from "./routes/auth/dashboard";
import InvoicesPage from "./routes/auth/dashboard.invoices";
import ContactPage from "./routes/un-auth/contact";
import SignInPage from "./routes/un-auth/sign-in";
import SignUpPage from "./routes/un-auth/sing-up";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            {/* <SignedIn>
              <Navigate to="dashboard" />
            </SignedIn> */}
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

