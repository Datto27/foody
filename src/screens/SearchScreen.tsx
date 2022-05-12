import { FlatList, ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'
import SearchComponent from '../components/SearchComponent'
import { filterData, filterData2 } from '../global/data'


const SearchScreen = () => {

  return (
    <View style={styles.container}>
      <SearchComponent />
      <Text style={styles.title}>
        Top Categories
      </Text>
      <View style={styles.categoriesGrid}>
        <FlatList
          data={filterData2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return <TouchableOpacity style={styles.categoryItem}>
              <ImageBackground source={{uri:item.image}}
                  resizeMode='cover' style={styles.bgImage} >
                <View style={styles.textContainer}>
                  <Text style={styles.foodName}>{item.name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          }}
          numColumns={2}
        />
      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight:"500",
    color:colors.grey2,
    margin: 4,
  },
  categoriesGrid: {
    flex: 1,
    flexDirection: "row",    
    padding: 1,
  },
  categoryItem: {
    flex:1,
    // width: "40%",
    height: 150,
    backgroundColor: "grey",
    margin: 3,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.transparentBlack,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }
})