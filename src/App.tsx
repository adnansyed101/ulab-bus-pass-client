import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import UsersHomePage from "./pages/users/home/UsersHomePage";
import AdminHomePage from "./pages/admin/AdminHomePage";

const App = () => {
  const role: "user" | "admin" | "conductors" = "user";

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={role === "user" ? <UsersHomePage /> : <AdminHomePage />}
      />
    </Routes>
  );
};

export default App;
