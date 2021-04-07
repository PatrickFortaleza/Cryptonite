import React from "react";
import Signout from "../../components/auth/Signout";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";
import errorAlert from '../../utility/alert';

export default function SignoutCtrl({ navigation }) {
  const authContext = useAuth();
  const { setUserData } = authContext;

  const handleSignout = async () => {
    try {
      const result = await Auth.signOut();
      console.log(result);
      setUserData(null);
    } catch (error) {
      errorAlert({error});
    }
  };

  const handleReturn = () => {
    navigation.navigate("Profile");
  };

  return <Signout handleReturn={handleReturn} handleSignout={handleSignout} />;
}
