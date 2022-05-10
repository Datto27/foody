import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
// components / local data
import {colors} from "../global/styles"


type Props = {
  onFoodCardPress: () => void;
  restaurantName: string,
  deliveryAvailable?: boolean,
  discountAvailable?: boolean,
  discountPercent?: number|null,
  numberOfReview: number,
  businessAddress: string,
  farAway: any,
  avarageReview: number,
  images: any,
  screenWidth: number,
}

// this component is used into HomeScreen, Represents each food from Free Delivery now
const FoodCard = ({
  onFoodCardPress, restaurantName, deliveryAvailable,
  discountAvailable, discountPercent, numberOfReview,
  businessAddress, farAway, avarageReview, images, 
  screenWidth,
}:Props) => {
  
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardView}>
        <Image style={styles.image}
          source={{uri: "data:image/jpeg;base64,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"}}
        />
        <View style={styles.review}>
          <Text style={styles.avarage}>{avarageReview}</Text>
          <Text style={styles.reviews}>{numberOfReview} views</Text>
        </View>
      </View>
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <View style={{flexDirection:"row", alignItems:"flex-end"}}>
          <View style={styles.distance}>
            <Ionicons name='location' size={20} color={colors.grey1} />
            <Text style={{fontWeight:"500", color:colors.grey1}}>
              {farAway}
            </Text>
          </View>
          <Text style={{fontWeight:"500", fontSize:12, color:colors.grey1}}>
            {businessAddress}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  card: {
    // backgroundColor: colors.grey4,
    overflow: "hidden",
    marginBottom: 20,
    borderColor: colors.grey4,
    margin: 5,
    borderWidth: 2,
    borderRadius: 8,
  },
  cardView: {
    
  },
  image: {
    height: 135,
    width: "100%",
  },
  review: {
    alignItems: "center",
    position: "absolute",
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
  },
  avarage: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  reviews: {
    fontSize: 12,
    color: "white",
  },
  restaurantInfo: {
    padding: 4,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "600"
  },
  distance: {
    flexDirection:"row", 
    alignItems:"flex-end",
    borderRightWidth:2,
    borderColor:colors.grey1,
    paddingRight: 10,
    marginRight: 15,
  }
})