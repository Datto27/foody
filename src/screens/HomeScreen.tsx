import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
// components
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'


const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true)

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
              ]}
            >
              <Text>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDelivery(!delivery)}>
            <View style={[
                styles.btn, 
                {backgroundColor:delivery?"white":colors.mainColor}
              ]}
            >
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
        <View style={styles.categories}>
          <Text style={styles.headerText}>Categories</Text>
          
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
  categories: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: colors.grey2,
    marginVertical: 10,
  }
})