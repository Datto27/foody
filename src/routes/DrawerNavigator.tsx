import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeTabs from './HomeTabsNavigator'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DrawerContent from '../components/DrawerContent'


export type HomeDrawerParamList = {
  HomeTabs: undefined;
  BussinessTabs: undefined
}

const DrawerNav = createDrawerNavigator<HomeDrawerParamList>()

// this is main navigator for home screens
// used inside Auth navigator, for navigete user on main components after authentification
const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNav.Screen 
        name='HomeTabs'
        component={HomeTabs}
        options={{
          title: "Client",
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Ionicons name='home' 
              color={focused ? "#7cc":colors.grey2}
              size={size}
            />
          )
        }}
      />
      <DrawerNav.Screen 
        name='BussinessTabs'
        component={BusinessConsoleScreen}
        options={{
          title: "Business console",
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Ionicons name='pie-chart' 
              color={focused ? "#7cc":colors.grey2}
              size={size}
            />
          )
        }}
      />
    </DrawerNav.Navigator>
  )
}

export default DrawerNavigator