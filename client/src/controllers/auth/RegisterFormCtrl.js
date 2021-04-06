import React, { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";

export default function RegisterFormCtrl({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_, setPassword_] = useState("");
  const authContext = useAuth();
  const { setUserData, userData } = authContext;

  const submitForm = async () => {
    console.log("attempt submit");
    const passwordsMatch = matchedStrings(password, password_);
    if (!passwordsMatch) return console.log("passwords don't match");
    try {
      const response = await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
        },
      });
      if (!response) return console.log("registration failed");
      const signInResponse = await Auth.signIn({
        username: username,
        password: password,
      });
      if (!signInResponse)
        return console.log("unable to authenticate registration");
      console.log(response);
      setUserData({ username: response.user.username });
    } catch (error) {
      console.log(error);
    }
  };

  const matchedStrings = (string1, string2) => {
    if (typeof string1 !== "string" || typeof string2 !== "string")
      return false;
    return string1 === string2;
  };

  return (
    <RegisterForm
      // METHODS
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      setPassword_={setPassword_}
      submitForm={submitForm}
      // PROPERTIES
      username={username}
      email={email}
      password={password}
      password_={password_}
      navigation={navigation}
    />
  );
}
