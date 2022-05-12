import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'
import SearchComponent from '../components/SearchComponent'


const SearchScreen = () => {

  return (
    <View style={styles.container}>
      <SearchComponent />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})