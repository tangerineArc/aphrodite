import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./contexts/auth-context.jsx";

import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/profile" : "/sign-in"} />}
      />
    </Routes>
  );
}
