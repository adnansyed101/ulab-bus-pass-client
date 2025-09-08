import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ThemeProvider from "./providers/theme-provider.tsx";
import Login from "./pages/auth/Login.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import UsersHomePage from "./pages/users/home/UsersHomePage.tsx";
import BuyTrips from "./pages/users/buy-trips/BuyTrips.tsx";

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
        element: <div>HOverview</div>,
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
