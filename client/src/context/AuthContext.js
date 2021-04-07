import React, { useContext, useEffect, useState } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { Auth } from "aws-amplify";
import { getUser, getPortfolio } from "../network";
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

    const generalData = await getUser();
    if (!generalData || generalData.error) return resetAuth();

    const portfolioData = await getPortfolio();
    if (!portfolioData || portfolioData.error) return resetAuth();

    const profile = {
      ...generalData,
      ...portfolioData,
    };

    setProfileData(profile);
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
