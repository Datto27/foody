import { StyleSheet, Text, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../global/styles'
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
import HomeStack from './HomeStackNavigator'
import SearchStackNavigator from './SearchStackNavigator'


const TabNav = createBottomTabNavigator()

// this is navigator is for display home tabs screens
// used inside DrawerNavigator.tsx
const HomeTabs = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.mainColor
      }}
    >
      <TabNav.Screen 
        name='HomeStack' 
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({color, size}) => ( // color and size comes from .Navigator options
            <Ionicons 
              name='home'
              color={color}
              size={size}
            />
          )
        }}
      />
      <TabNav.Screen 
        name='Search' 
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({color, size}) => ( // color and size comes from .Navigator options
            <Ionicons 
              name='search'
              color={color}
              size={size}
            />
          )
        }}
      />
      <TabNav.Screen 
        name='MyOrders' 
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          headerShown: false,
          tabBarIcon: ({color, size}) => ( // color and size comes from .Navigator options
            <Ionicons 
              name='list'
              color={color}
              size={size}
            />
          )
        }}
      />
      <TabNav.Screen 
        name='MyAccount' 
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          headerShown: false,
          tabBarIcon: ({color, size}) => ( // color and size comes from .Navigator options
            <Ionicons 
              name='person'
              color={color}
              size={size}
            />
          )
        }}
      />
    </TabNav.Navigator>
  )
}

export default HomeTabs

const styles = StyleSheet.create({})