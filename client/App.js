import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./src/screens/Login.js";
import Register from "./src/screens/Register.js";
import Amplify from "aws-amplify";
import config from "./AWSconfig.json";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

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
        <AuthProvider>
          <Navigation />
        </AuthProvider>
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


// //===== ForTesting AJP
// import React from 'react';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import List from './src/screens/List'
// import Detail from './src/screens/Detail'


// const Stack = createStackNavigator()

// export default function App() {
//   return (

//    <NavigationContainer>
//      <Stack.Navigator>
//         <Stack.Screen name="Companies" component={List} />
//         <Stack.Screen name="DetailScreen" component={Detail}/>
//      </Stack.Navigator>
//    </NavigationContainer>
//     );
  

// };
