import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
// navigators
import AuthNavigation from './AuthNavigator'
import HomeTabs from './HomeTabsNavigator'
import DrawerNavigator from './DrawerNavigator'


// root for all navigation component
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      {/* <HomeTabs /> */}
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default RootNavigator
