import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'


const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text>BusinessConsoleScreen</Text>
    </View>
  )
}

export default BusinessConsoleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})