import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'


export type HomeStackParamList = {
  Home: undefined;
  RestaurantsMap: undefined;
}

const StackNav = createStackNavigator<HomeStackParamList>()

// this navigator is used insde HomeTabs.tsx
// this is created for navigate between ReastaurantsMap and Home screens
const HomeStack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="RestaurantsMap"
        component={RestaurantsMapScreen}
      />
    </StackNav.Navigator>
  )
}

export default HomeStack
