import React, { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterFormCtrl() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_, setPassword_] = useState("");

  const submitForm = async () => {
    const passwordsMatch = matchedStrings(password, password_);
    if (!passwordsMatch) return console.log("passwords don't match");
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
      // PROPERTIES
      username={username}
      email={email}
      password={password}
      password_={password_}
    />
  );
}
