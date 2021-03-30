import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./src/screens/Login.js";
import Register from "./src/screens/Register.js";
import Amplify from "aws-amplify";
import config from "./AWSconfig.json";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Register />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
