import React, { useState, useEffect } from "react";
import Profile from "../../components/profile/Profile";
import { Auth } from "aws-amplify";

export default function ProfileCtrl() {
  const fetchSessionData = async () => {
    const currentSession = await Auth.currentSession();
    const accessToken = currentSession.getAccessToken();
    const jwt = accessToken.getJwtToken();
    console.log(jwt);
  };

  useEffect(() => {
    console.log("profile comp mounted");
    fetchSessionData();
  }, []);
  return <Profile />;
}
