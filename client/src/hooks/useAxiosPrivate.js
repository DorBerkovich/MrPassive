import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          console.log("auth header added to request", auth.accessToken);
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => {
        console.log(response);
        return response;
      },
      async (err) => {
        const prevRequest = err?.config;
        if (err?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        Promise.reject(err);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
