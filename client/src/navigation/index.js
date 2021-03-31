import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { GraphActive, GraphDefault } from "../icons/Graph";
import { StarActive, StarDefault } from "../icons/Star";
import { UserActive, UserDefault } from "../icons/User";

// Screens - PROFILE
import Login from "../screens/Profile/Login";
import Register from "../screens/Profile/Register";
import Profile from "../screens/Profile/Profile";

// Screens - TRADE
import List from "../screens/Trade/List";
import Detail from "../screens/Trade/Detail";
import Buy from "../screens/Trade/Buy";
import Sell from "../screens/Trade/Sell";
import Confirmation from "../screens/Trade/Confirmation";

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

function TradeScreenNavigator() {
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
        component={Home}
        options={{
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function ProfileScreenNavigator() {
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
      <ScreenStack.Screen
        name="Profile"
        component={Profile}
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
        name="Trade"
        component={TradeScreenNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <GraphActive /> : <GraphDefault />}</>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreenNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => (
            <>{focused ? <UserActive /> : <UserDefault />}</>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
