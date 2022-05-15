import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'
import { FlatList } from 'react-native-gesture-handler'


type Props = {
  screenWidth: number;
  restaurantName: string;
  deliveryAvailable?: boolean;
  discountAvailable?: boolean;
  discountPercent?: number;
  numberOfReview: number;
  bussinesAddress: string;
  farAway: string;
  avarageReview: number;
  images: string[] | any;
  productData: any;
}

// single food card for SearchResulScreen
const ResultCard = ({
  screenWidth, restaurantName, deliveryAvailable,
  discountAvailable, discountPercent, numberOfReview,
  bussinesAddress, farAway, avarageReview, images, productData,
}:Props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground style={{height:160}}
          source={{uri:"https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600"}} >
          <View style={styles.viewsContainer}>
            <Text style={{fontSize:16, fontWeight:"600", color:"white"}}>
              {avarageReview}
            </Text>
            <Text style={{color:"white"}}>
              {numberOfReview} reviews
            </Text>
          </View>
        </ImageBackground>
        <View style={{padding:5}}>
          <Text style={styles.name}>{restaurantName}</Text>
          <View style={{flexDirection:"row", alignItems:"flex-end"}}>
            <View style={styles.distance}>
              <Ionicons name='location' size={18} color={colors.grey2} />
              <Text style={styles.secondaryText}>{farAway}min</Text>
            </View>
            <Text style={styles.secondaryText}>{bussinesAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.products}>
        <FlatList horizontal
          data={productData}
          renderItem={({item, index}) => {
            return <View key={index} style={styles.product}>
              <Image style={styles.image}
                source={{uri: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
              />
              <View style={{justifyContent:"space-between", padding:4,}}>
                <Text style={styles.primaryText}>{item.name}</Text>
                <Text style={styles.primaryText}>{item.price} L</Text>
              </View>
            </View>
          }}
        />
      </View>
    </View>
  )
}

export default ResultCard

const styles = StyleSheet.create({
  container: {

  },
  card: {
    margin: 5,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  viewsContainer: {
    alignItems: "center",
    position: "absolute",
    right: 0,
    backgroundColor: colors.transparentBlack,
    padding: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  primaryText: {
    fontWeight: "500",
  },
  secondaryText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.grey2,
  },
  distance: {
    flexDirection:"row", 
    alignItems:"flex-end",
    borderRightWidth:2,
    borderColor:colors.grey2,
    paddingRight: 10,
    marginRight: 15,
  },
  products: {
  },
  product: {
    flexDirection: "row",
    width: 180,
    padding: 4,
    margin: 5,
    borderColor: colors.grey3,
    borderBottomWidth: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 10,
  }
})