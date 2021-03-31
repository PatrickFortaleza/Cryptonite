import React from "react";
import Signout from "../../components/auth/Signout";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";

export default function SignoutCtrl() {
  const authContext = useAuth();
  const { setUserData } = authContext;

  const handleSignout = async () => {
    try {
      const result = await Auth.signOut();
      console.log(result);
      setUserData(null);
    } catch (error) {
      console.log(error);
    }
  };

  return <Signout handleSignout={handleSignout} />;
}
