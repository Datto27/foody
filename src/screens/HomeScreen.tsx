import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Platform, FlatList, Image, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import CountDown from "react-native-countdown-component"
// local components
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
import { filterData, restaurantsData } from '../global/data'
import FoodCard from '../components/FoodCard'


const SCREEN_WIDTH = Dimensions.get("window").width

const HomeScreen = () => {
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
                screenWidth={SCREEN_WIDTH*0.8}
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
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {

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
    height: 85,
    width: 65,
    margin: 3,
    paddingVertical: 10,
    backgroundColor: colors.grey4,
    borderRadius: 18,
  },
  selectedCategory: {
    alignItems: "center",
    height: 85,
    width: 65,
    paddingVertical: 10,
    margin: 3,
    backgroundColor: colors.mainColor,
    borderRadius: 15,
  },
  categoryImg: {
    height: 50,
    width: 54,
    borderRadius: 10,    
  },
  countdownContainer: {
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"flex-start",
    marginTop: 10,
    marginHorizontal: 5,
  }
})