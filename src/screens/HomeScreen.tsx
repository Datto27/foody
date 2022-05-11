import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Platform, FlatList, Image, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import CountDown from "react-native-countdown-component"
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
// local components
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
import { filterData, restaurantsData } from '../global/data'
import FoodCard from '../components/FoodCard'
import { HomeStackParamList } from '../routes/HomeStackNavigator'


const SCREEN_WIDTH = Dimensions.get("window").width

type Nav = StackNavigationProp<HomeStackParamList>

const HomeScreen = () => {
  const navigation = useNavigation<Nav>()
  // local states
  const [delivery, setDelivery] = useState(true)
  const [checkedIndex, setCheckedIndex] = useState(1)

  return (
    <View style={styles.container}>
      <HomeHeader />
      {/* ----------- delivery / pick-up buttons -------- */}
      <ScrollView>
        <View style={styles.contentControll}>
          <TouchableOpacity onPress={() => setDelivery(!delivery)}>
            <View style={[
                styles.btn, 
                {backgroundColor:delivery?colors.mainColor:"white"}
            ]}>
              <Text>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDelivery(!delivery)}>
            <View style={[
                styles.btn, 
                {backgroundColor:delivery?"white":colors.mainColor}
            ]}>
              <Text>Pick-up</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* ----------------- search form --------------- */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons name='location' size={24} color={colors.grey1} />
            <TextInput style={styles.input} placeholder="location" />
          </View>
          <TouchableOpacity>
            <Ionicons name='filter' size={24} color={colors.grey1} />
          </TouchableOpacity>
        </View>
        {/* ------------------ categories -------------- */}
        <View style={styles.categoriesSection}>
          <Text style={styles.headerText}>Categories</Text>
          <View style={styles.categories}>
            <FlatList horizontal
              showsHorizontalScrollIndicator={false}
              data={filterData}
              extraData={checkedIndex}
              renderItem={({item}) => {
                return <TouchableOpacity onPress={() => setCheckedIndex(item.id)}>
                  <View key={item.id} 
                    style={item.id===checkedIndex ? styles.selectedCategory:styles.category}
                  >
                    <Image style={styles.categoryImg}
                      source={item.image}
                    />
                    <Text style={{color: item.id===checkedIndex ? "white":"black"}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              }}
            />
          </View>
        </View>
        {/* ------------- free delivery now section -------------- */}
        <View style={styles.categoriesSection}>
          <Text style={styles.headerText}>Free Delivery now</Text>
          <View style={styles.countdownContainer}>
            <Text style={{fontSize:16, paddingBottom:10, fontWeight:"500"}}>
              Options changing in
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor:"limegreen"}}
              digitTxtStyle={{color:colors.grey1}}
              timeToShow={["M", "S"]}
              timeLabels={{m:"Min", s:"Sec"}}
            />
          </View>
          <FlatList horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            renderItem={({item}) => {
              return <FoodCard 
                restaurantName={item.restaurantName} 
                images={item.images}
                avarageReview={item.averageReview}
                businessAddress={item.businessAddress}
                discountPercent={item.discount}
                farAway={item.farAway}
                numberOfReview={item.numberOfReview}
                screenWidth={SCREEN_WIDTH*0.9}
                onFoodCardPress={()=>{}}
              />
            }}
          />
        </View>
        {/* ---------- restaurants in your area ------------ */}
        <View style={styles.categoriesSection}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            renderItem={({item}) => {
              return <FoodCard 
                restaurantName={item.restaurantName} 
                images={item.images}
                avarageReview={item.averageReview}
                businessAddress={item.businessAddress}
                discountPercent={item.discount}
                farAway={item.farAway}
                numberOfReview={item.numberOfReview}
                screenWidth={SCREEN_WIDTH}
                onFoodCardPress={()=>{}}
              />
            }}
          />
        </View>
      </ScrollView>
      {delivery && (
        <TouchableOpacity style={styles.floatButton}
          onPress={() => navigation.navigate("RestaurantsMap")}
        >
          <Ionicons name='location' size={32} color={colors.mainColor} />
          <Text style={{color:colors.mainColor}}>Map</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentControll: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    width: 100,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 10,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey4,
    paddingHorizontal: 12,
    marginRight: 5,
    borderRadius: 15,
  },
  input: {
    flex: 1,
    padding: 8,    
    outlineStyle: Platform.OS === "web" && "none",
  },
  categoriesSection: {
    // paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: colors.grey2,
    backgroundColor: colors.grey4,
    padding: 3,
    marginTop: 5,
  },
  categories: {
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
  category: {
    alignItems: "center",
    height: 95,
    width: 75,
    margin: 3,
    paddingVertical: 8,
    backgroundColor: colors.grey4,
    borderRadius: 18,
  },
  selectedCategory: {
    alignItems: "center",
    height: 95,
    width: 75,
    paddingVertical: 8,
    margin: 3,
    backgroundColor: colors.mainColor,
    borderRadius: 15,
  },
  categoryImg: {
    height: 65,
    width: 67,
    borderRadius: 20,    
  },
  countdownContainer: {
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"flex-start",
    marginTop: 10,
    marginHorizontal: 5,
  },
  floatButton: {
    alignItems: "center",
    position: "absolute",
    right: 30,
    bottom: 10,
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  }
})