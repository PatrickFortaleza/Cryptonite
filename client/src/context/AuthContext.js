import React, { useContext, useEffect, useState } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useAsyncStorage("userData", null);
  const [isAuthenticated, setAuthentication] = useState(false);

  const value = {
    setUserData,
    userData,
    isAuthenticated,
  };

  const evaluateUserData = () => {
    return (
      userData &&
      Object.keys(userData).length > 0 &&
      userData.constructor === Object
    );
  };

  useEffect(() => {
    const hasData = evaluateUserData();
    !hasData ? setAuthentication(false) : setAuthentication(true);
  }, [userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
