import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/pages/HomeScreen'
import SettingScreen from './src/pages/SettingScreen';
import SocialScreen from './src/pages/SocialScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import ExportScheduleScreen from './src/pages/ExportScheduleScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SocialScreen"
        component={SocialScreen}
        options={{
          tabBarLabel: 'Social',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};


const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const ExportScheduleScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExportScheduleScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExportScheduleScreen" component={ExportScheduleScreen} />
    </Stack.Navigator>
  )
}

const SettingScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="ProfileScreenStack"
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
          }}
          component={ProfileScreenStack}
        />
        <Drawer.Screen
          name="ExportScheduleScreenStack"
          options={{
            drawerLabel: 'Export Schedule',
            title: 'Export Schedule',
          }}
          component={ExportScheduleScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;