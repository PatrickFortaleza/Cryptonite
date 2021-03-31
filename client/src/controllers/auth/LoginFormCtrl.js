import React, { useState, useEffect } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";

export default function LoginFormCtrl({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();
  const { setUserData, userData } = authContext;

  const submitForm = async () => {
    console.log("attempt submit");
    try {
      const response = await Auth.signIn({
        username: username,
        password: password,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginForm
      // METHODS
      setUsername={setUsername}
      setPassword={setPassword}
      submitForm={submitForm}
      // PROPERTIES
      username={username}
      password={password}
      navigation={navigation}
    />
  );
}
