import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAdmin = () => {
  const {auth} = useAuth();
  const location = useLocation();

  return auth?.isAdmin ? <Outlet /> : <Navigate to="/unauthorized" replace state={{from: location}}/>;
};

export default RequireAdmin;