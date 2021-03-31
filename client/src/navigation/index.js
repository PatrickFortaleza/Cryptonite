import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { GraphActive, GraphDefault } from "../icons/Graph";
import { StarActive, StarDefault } from "../icons/Star";

// Screens
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

import List from "../screens/List"
import Detail from "../screens/Detail"

const BottomTab = createMaterialBottomTabNavigator();
const ScreenStack = createStackNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: "#191919",
    elevation: 0,
    shadowColor: "#333",
  },
  headerTintColor: "#ccc",
  headerTitleStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
};

function ScreenOneNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Index"
        component={List}
        options={{
          headerTitle: "Index",
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="CryptoDetail"
        component={Detail}
        options={{
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function ScreenTwoNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Login"
        component={Login}
        options={{
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="Sign-up"
        component={Register}
        options={{
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

export default function Index() {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: "#1A1A1A",
        paddingBottom: 5,
        paddingTop: 5,
        borderTopColor: "#333",
        borderWidth: 1,
      }}
      activeColor="#3273ff"
    >
      <BottomTab.Screen
        name="Home"
        component={ScreenOneNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <GraphActive /> : <GraphDefault />}</>
          ),
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={ScreenTwoNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <StarActive /> : <StarDefault />}</>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
