import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// libraries
import Swiper from 'react-native-swiper/src'
import { Button } from 'react-native-elements'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
// components
import { colors, parameters } from '../../global/styles'

type Nav = {
  navigate: (value: string) => void;
}

const WelcomeScreen = () => {
  const navigation = useNavigation<Nav>()


  return (
    <View style={styles.container}>
      {/* -------------- header --------------- */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.titleText}>IN YOUR AREA</Text>
      </View>
      {/* -------------- slider ---------------- */}
      <View style={{flex:4}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image style={styles.image} 
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgllwMw1dsgkazZ_cGe0S9er74HDv1yxLQg&usqp=CAU"}}
            />
          </View>
          <View style={styles.slide2}>
            <Image style={styles.image} 
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"}}
            />
          </View>
          <View style={styles.slide3}>
            <Image style={styles.image} 
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgv_7WcHGDMSb2j_ZbjdqXWr9s0UEumDMag&usqp=CAU"}}
            />
          </View>
        </Swiper>
      </View>
      {/*  */}
      <View style={styles.btnsContainer}>
        <Button title="SIGN IN" 
          style={styles.btn}
          buttonStyle={styles.styledButton}
          titleStyle={styles.whiteTitle}
          onPress={() => {
            navigation.navigate("SignIn")
          }}
        />
        <Button title="Create an account" 
          style={styles.btn}
          buttonStyle={styles.transparentBtn}
          titleStyle={styles.coloredTitle}
        />
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.mainColor,
  },
  slide1: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
  slide2: {
    backgroundColor: "red",
    height: "100%",
  },
  slide3: {
    backgroundColor: "red",
    height: "100%",
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
  },
  btnsContainer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  btn: {
    marginVertical: 5,
  },
  styledButton: {
    backgroundColor: colors.mainColor,
  },
  whiteTitle: {
    color: "white",
    fontWeight: "bold"
  },
  transparentBtn: {
    color: colors.mainColor,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: 10,
  },
  coloredTitle: {
    color: colors.mainColor,
    fontWeight: "bold",
  }
})
