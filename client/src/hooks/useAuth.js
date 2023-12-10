import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";

const useAuth = () => {
  const { auth, setAuth } = useContext(authContext);

  return { auth, setAuth };
};

export default useAuth;
