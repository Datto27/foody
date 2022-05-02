import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
// navigators
import AuthNavigation from './AuthNavigator'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})