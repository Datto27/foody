import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ResultCard from '../components/ResultCard'
import { restaurantsData } from '../global/data'


const SCREEN_WIDTH = Dimensions.get("window").width

// this screen shows after user click on component for search on SearchScreen
const SearchResultScreen = ({}:any) => {
  // const navigation = useNavigation()
  // const {title}:any = useRoute().params // this params comes from SearchScreen

  useEffect(() => {
    // navigation.setOptions({
    //   title: title
    // })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results for title</Text>
      <ResultCard
        screenWidth={SCREEN_WIDTH}
        images={restaurantsData[0].images}
        avarageReview={restaurantsData[0].averageReview}
        bussinesAddress={restaurantsData[0].businessAddress}
        farAway={restaurantsData[0].farAway}
        numberOfReview={restaurantsData[0].numberOfReview}
        productData={restaurantsData[0].productData}
        restaurantName={restaurantsData[0].restaurantName}     
      />
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    margin: 5,
  }
})