import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ThemeProvider from "./providers/theme-provider.tsx";
import UserLogin from "./pages/auth/user-login/UserLogin.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import UsersHomePage from "./pages/users/home/UsersHomePage.tsx";
import BuyTripsPage from "./pages/users/buy-trips/BuyTripsPage.tsx";
import OverviewPage from "./pages/users/overview/OverviewPage.tsx";
import TransactionHisotryPage from "./pages/users/transaction-history/TransactionHisotryPage.tsx";
import AllLocationsPage from "./pages/users/location-details/AllLocationsPage.tsx";
import LocationDetailsPage from "./pages/users/location-details/individual-locations/LocationDetailsPage.tsx";
import CartPage from "./pages/users/cart/CartPage.tsx";
import AdminLogin from "./pages/auth/admin-login/AdminLogin.tsx";
import AdminHomePage from "./pages/admin/home/AdminHomePage.tsx";

const router = createBrowserRouter([
  // User Links
  { path: "/", index: true, element: <UserLogin /> },
  {
    path: "user",
    element: <MainLayout />,
    children: [
      { path: "home", element: <UsersHomePage /> },
      {
        path: "buy-trips",
        element: <BuyTripsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "transaction-history",
        element: <TransactionHisotryPage />,
      },
      {
        path: "location-details",
        element: <AllLocationsPage />,
      },
      {
        path: "location-details/:id",
        element: <LocationDetailsPage />,
      },
    ],
  },
  // Admin Links
  {
    path: "admin-login",
    element: <AdminLogin />,
  },
  {
    path: "admin",
    element: <MainLayout />,
    children: [{ path: "home", element: <AdminHomePage /> }],
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
