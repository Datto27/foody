import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ResultCard from '../components/ResultCard'
import { restaurantsData } from '../global/data'


const SCREEN_WIDTH = Dimensions.get("window").width

// this screen shows after user click on component for search on SearchScreen
const SearchResultScreen = ({}:any) => {
  const navigation = useNavigation()
  const {title}:any = useRoute().params // this params comes from SearchScreen

  useEffect(() => {
    navigation.setOptions({
      title: title
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results for {title}</Text>
      <FlatList
        data={restaurantsData}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => {
          return <ResultCard
            screenWidth={SCREEN_WIDTH}
            image={item.images}
            avarageReview={item.averageReview}
            bussinesAddress={item.businessAddress}
            farAway={item.farAway}
            numberOfReview={item.numberOfReview}
            productData={item.productData}
            restaurantName={item.restaurantName}     
          />
        }}
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