import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Amplify from "aws-amplify";
import config from "./AWSconfig.json";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import{ WatchListProvider} from "./src/context/WatchListContext";

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
    <NavigationContainer styles={styles.container}>
      <SafeAreaView style={styles.container}>
      <WatchListProvider>
        <AuthProvider>
            <Navigation />
        </AuthProvider>
        </WatchListProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
});
