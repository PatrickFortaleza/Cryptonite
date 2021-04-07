import React, { useContext, useEffect, useState } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { Auth } from "aws-amplify";
import { getUser } from "../network";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useAsyncStorage("userData", null);
  const [userToken, setUserToken] = useAsyncStorage("userToken", null);
  const [profileData, setProfileData] = useState(null);
  const [isAuthenticated, setAuthentication] = useState(false);



  const value = {
    setUserData,
    userData,
    setUserToken,
    userToken,
    profileData,
    setProfileData,
    queryProfileData,
    isAuthenticated,
    
  };

  const resetAuth = async () => {
    setUserData(null);
    setUserToken(null);
    setAuthentication(false);
    setProfileData(null);
    await Auth.signOut();
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

    const accessToken = currentSession.getIdToken();
    if (!accessToken) return resetAuth();

    const jwt = accessToken.getJwtToken();
    if (!jwt) return resetAuth();
    setUserToken(jwt);
  };

  const queryProfileData = async () => {
    if (!userToken) return resetAuth();

    const result = await getUser();
    if (!result || result.error) return resetAuth();

    console.log("User Profile:");
    console.log(result);
    setProfileData(result);
  };

  useEffect(() => {
    const hasData = evaluateUserData();
    !hasData ? setAuthentication(false) : setAuthentication(true);
  }, [userData]);

  useEffect(() => {
    queryPullToken();
  }, [isAuthenticated]);

  useEffect(() => {
    queryProfileData();
  }, [userToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
