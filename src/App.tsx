import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import DashboardPage from "./routes/auth/dashboard";
import InvoicesPage from "./routes/auth/dashboard.invoices";
import ContactPage from "./routes/un-auth/contact";
import SignInPage from "./routes/un-auth/sign-in";
import SignUpPage from "./routes/un-auth/sing-up";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <DashboardPage /> },
        { path: "/dashboard/invoices", element: <InvoicesPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/sign-in/*", element: <SignInPage /> },
        { path: "/sign-up/*", element: <SignUpPage /> },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-white h-screen gradient-background">
          404 not found
          <Link to="/">Go to Home Page</Link>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
