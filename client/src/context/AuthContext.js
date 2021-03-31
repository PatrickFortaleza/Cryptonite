import React, { useContext, useEffect, useState } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { Auth } from "aws-amplify";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useAsyncStorage("userData", null);
  const [userToken, setUserToken] = useAsyncStorage("userToken", null);
  const [isAuthenticated, setAuthentication] = useState(false);

  const value = {
    setUserData,
    userData,
    setUserToken,
    userToken,
    isAuthenticated,
  };

  const resetAuth = () => {
    setUserData(null);
    setUserToken(null);
    setAuthentication(false);
  };

  const evaluateUserData = () => {
    return (
      userData &&
      Object.keys(userData).length > 0 &&
      userData.constructor === Object
    );
  };

  const queryPullToken = async () => {
    if (!isAuthenticated) return resetAuth();

    const currentSession = await Auth.currentSession();
    if (!currentSession) return resetAuth();

    const accessToken = currentSession.getAccessToken();
    if (!accessToken) return resetAuth();

    const jwt = accessToken.getJwtToken();
    if (!jwt) return resetAuth();

    setUserToken(jwt);
  };

  useEffect(() => {
    const hasData = evaluateUserData();
    !hasData ? setAuthentication(false) : setAuthentication(true);
  }, [userData]);

  useEffect(() => {
    queryPullToken();
  }, [isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
