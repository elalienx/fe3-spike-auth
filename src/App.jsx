// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
