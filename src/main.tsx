import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ThemeProvider from "./providers/theme-provider.tsx";
import Login from "./pages/auth/Login.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import UsersHomePage from "./pages/users/home/UsersHomePage.tsx";
import BuyTrips from "./pages/users/buy-trips/BuyTrips.tsx";
import OverviewPage from "./pages/users/overview/OverviewPage.tsx";
import TransactionHisotryPage from "./pages/users/transaction-history/TransactionHisotryPage.tsx";

const router = createBrowserRouter([
  { path: "/", index: true, element: <Login /> },
  {
    path: "users",
    element: <MainLayout />,
    children: [
      { path: "home", element: <UsersHomePage /> },
      {
        path: "buy-trips",
        element: <BuyTrips />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "transaction-history",
        element: <TransactionHisotryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
