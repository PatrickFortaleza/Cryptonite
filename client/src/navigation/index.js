import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Icons
import { GraphActive, GraphDefault } from "../icons/Graph";
import { StarActive, StarDefault } from "../icons/Star";
import { PowerActive, PowerDefault } from "../icons/Power";
import { UserActive, UserDefault } from "../icons/User";

// Auth Context
import { useAuth } from "../context/AuthContext";

// Screens - PROFILE
import Login from "../screens/Profile/Login";
import Register from "../screens/Profile/Register";
import Profile from "../screens/Profile/Profile";
import Signout from "../screens/Profile/Signout";

// Screens - TRADE
import List from "../screens/Trade/List";
import Detail from "../screens/Trade/Detail";
import Buy from "../screens/Trade/Buy";
import Sell from "../screens/Trade/Sell";
import Confirmation from "../screens/Trade/Confirmation";

// Navigation stacks
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
        component={Detail}
        options={{
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="Buy"
        component={Buy}
        options={{
          ...navOptions,
        }}
      />
      <ScreenStack.Screen
        name="Sell"
        component={Sell}
        options={{
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function ProfileScreenNavigator() {
  const AuthContext = useAuth();
  const { isAuthenticated } = AuthContext;

  return (
    <ScreenStack.Navigator>
      {isAuthenticated ? (
        <>
          <ScreenStack.Screen
            name="Profile"
            component={Profile}
            options={{
              ...navOptions,
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </ScreenStack.Navigator>
  );
}

function SignoutScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Signout"
        component={Signout}
        options={{
          ...navOptions,
        }}
      />
    </ScreenStack.Navigator>
  );
}

export default function Index() {
  const AuthContext = useAuth();
  const { isAuthenticated } = AuthContext;
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
      {isAuthenticated ? (
        <BottomTab.Screen
          name="Signout"
          component={SignoutScreenNavigator}
          options={{
            ...navOptions,
            tabBarIcon: ({ focused }) => (
              <>{focused ? <PowerActive /> : <PowerDefault />}</>
            ),
          }}
        />
      ) : null}
    </BottomTab.Navigator>
  );
}
