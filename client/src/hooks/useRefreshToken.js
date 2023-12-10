import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", { withCredentials: true });
      console.log(response);
      const accessToken = response.data.accessToken;
      setAuth((prev) => {
        return { ...prev, accessToken };
      });
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  };
  return refresh;
};

export default useRefreshToken;
