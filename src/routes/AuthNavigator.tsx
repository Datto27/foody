import { View, Text } from 'react-native'
import React from 'react'
// libraries
import { createStackNavigator } from '@react-navigation/stack'
// components
import SignInScreen from '../screens/authScreens/SignInScreen'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'
import DrawerNavigator from './DrawerNavigator'


export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  HomeDrawer: undefined;
}

const StackNav = createStackNavigator<AuthStackParamList>()

// imported inside RootNavigator.tsx
const AuthNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen 
        name='Welcome' 
        component={WelcomeScreen} 
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen 
        name='SignIn' 
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen 
        name='HomeDrawer' 
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  )
}

export default AuthNavigation