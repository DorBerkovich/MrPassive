import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireNotAuth = () => {
  const {auth} = useAuth();
  const location = useLocation();

  return auth?.email ? <Navigate to="/" replace /> : <Outlet />;
};

export default RequireNotAuth;
