import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { user } = useAuth(); // Hook de autenticación

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
