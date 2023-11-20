import { createContext, useState } from "react";

export const authContext = createContext({});

import React from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
