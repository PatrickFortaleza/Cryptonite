import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";
import errorAlert from '../../utility/alert';

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
      setUserData({ username: response.username });
      navigation.navigate("Profile");
    } catch (error) {
      errorAlert({title: 'Login error', message: 'Incorrect username or password'});
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
