import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// libreries
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { Badge } from 'react-native-elements'
import { colors, parameters } from '../global/styles'

// this component is used for home pages, like HomeScreen....
const HomeHeader = () => {

  return (
    <View style={styles.header}>
      <EvilIcons name='navicon' size={34} color="white" />
      <Text style={styles.headerTitle}>Foody</Text>
      <View>
        <EvilIcons name='cart' size={34} color="white" />
        <Badge 
          status='primary'
          value={0}
          containerStyle={styles.badge}
        />   
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: parameters.headerHeight,
    backgroundColor: colors.mainColor,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  badge: {
    position: "absolute",
    right: 0,
  }
})