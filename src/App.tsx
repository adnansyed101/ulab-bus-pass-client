import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Home from "./pages/student/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
