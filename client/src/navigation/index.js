import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Login from from '../screens/Login';
import Register from from '../screens/Register';
import Home from from '../screens/Home';

const BottomTab = createMaterialBottomTabNavigator();
const ScreenStack = createStackNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: '#191919',
    elevation: 0,
    shadowColor: '#333',
  },
  headerTintColor: '#ccc',
  headerTitleStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white'
  }
}

function ScreenOneNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen 
        name="Index"
        component={Home}
        options={{
          headerTitle: 'Home',
          ...navOptions
          }} />
    </ScreenStack.Navigator>
  );
}

function ScreenTwoNavigator(){
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen 
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          ...navOptions
          }} />
      <ScreenStack.Screen 
        name="Register"
        component={Register}
        options={{
          ...navOptions
        }} />
    </ScreenStack.Navigator>
  )
}


export default function index() {
  return (
    <BottomTab.Navigator
      barStyle={{ 
        backgroundColor: '#1A1A1A', 
        paddingBottom: 5,
        paddingTop: 5,
        borderTopColor: '#333',
        borderWidth: 1
      }}
      activeColor="#3273ff"
    >
      <BottomTab.Screen 
        name="Index"
        component={ScreenOneNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => <>{ focused ? <GraphActive/> : <GraphDefault />}</>
        }}
      />
      <BottomTab.Screen 
        name="Market Movers"
        component={ScreenTwoNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => <>{ focused ? <StarActive/> : <StarDefault />}</>
        }}
      />
    </BottomTab.Navigator>
  )
}