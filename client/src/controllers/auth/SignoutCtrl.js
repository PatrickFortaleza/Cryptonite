import React from "react";
import Signout from "../../components/auth/Signout";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";

export default function SignoutCtrl({ navigation }) {
  const authContext = useAuth();
  const { setUserData } = authContext;

  const handleSignout = async () => {
    try {
      const result = await Auth.signOut();
      setUserData(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReturn = () => {
    navigation.navigate("Profile");
  };

  return <Signout handleReturn={handleReturn} handleSignout={handleSignout} />;
}
