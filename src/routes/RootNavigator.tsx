import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
// navigators
import AuthNavigation from './AuthNavigator'
import HomeTabs from './HomeTabs'


// root for all navigation component
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <HomeTabs />
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})