import React, { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { Auth } from "aws-amplify";
import { useAuth } from "../../context/AuthContext";
import errorAlert from "../../utility/alert";

export default function RegisterFormCtrl({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_, setPassword_] = useState("");
  const authContext = useAuth();
  const { setUserData, userData } = authContext;

  const submitForm = async () => {
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
      if (!response) {
        errorAlert({ message: "Registration failed" });
        return;
      }
      const signInResponse = await Auth.signIn({
        username: username,
        password: password,
      });
      if (!signInResponse) {
        errorAlert({ message: "Unable to authenticate after registration" });
        return;
      }
      setUserData({ username: response.user.username });
    } catch (error) {
      errorAlert({ error });
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
