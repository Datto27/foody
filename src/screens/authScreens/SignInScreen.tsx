import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
// libraries
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { Button, SocialIcon } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'
// components
import Header from '../../components/Header'
import { colors, parameters } from '../../global/styles'
import { AuthStackParamList } from '../../routes/AuthNavigator'


type Nav = StackNavigationProp<AuthStackParamList>

const SignInScreen = () => {
  const navigation = useNavigation<Nav>()
  // states
  const [showPassword, setShowPassword] = useState(false) // for password input
  const lockRef = useRef<any>(null)



  const toggleVisibility = () => {
    // toggle password visibility
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <Header title='My Account' type='arrowleft' />
      <Text style={styles.title}>Sign-In</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>Please enter email and paswrod</Text>
        <Text style={styles.infoText}>registered with your account</Text>
      </View>
      {/* ---------------- Email / Password section -------------- */}
      <View style={{marginTop:20}}>
        <View style={styles.inputContainer}>
          <Entypo name='mail' size={18} />
          <TextInput 
            style={styles.input}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name='lock' size={18}
            ref={lockRef}
          />
          <TextInput 
            style={styles.input}
            secureTextEntry={showPassword ? false : true}
            placeholder="Password"
          />
          {showPassword ? (
            <Entypo name='eye' size={20} onPress={toggleVisibility} />
          ) : (
            <Entypo name='eye-with-line' size={20}  onPress={toggleVisibility} />
          )}
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button title="SIGN IN" 
            buttonStyle={styles.styledButton} 
            titleStyle={styles.buttonTitle}  
            onPress={() => navigation.navigate("HomeDrawer")}
          />
        </View>
        <View style={{alignItems: "center", marginVertical:15}}>
          <Text style={styles.link}>Forgot Password?</Text>
        </View>
      </View>
      {/* ----------------- line ------------------ */}
      <View style={{alignItems:"center", marginVertical:10}}>
        <Text style={{fontWeight:"bold"}}>OR</Text>
      </View>
      {/* --------------- Facebook / Gmail section -------------- */}
      <View style={{marginBottom:10, paddingHorizontal:20}}>
        <SocialIcon button
          title='Sign in With Facebook'
          type='facebook'
          style={styles.socialIcon}
          onPress={() => {

          }}
        />
        <SocialIcon button
          title='Sign in With Google'
          type='google'
          style={styles.socialIcon}
          onPress={() => {
          }}
        />
      </View>
      {/* ---------------- create account ---------------- */}
      <View style={styles.createSection}>
        <Text style={{width:"100%", color:colors.grey1}}>
          New on Foody?
        </Text>
        <Button
          title={"Create an account"}
          buttonStyle={styles.transparentButton}
          titleStyle={styles.coloredTitle}
        />
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: colors.mainColor,
    margin: 10,
  },
  info: {
    alignItems: "center",
  },
  infoText: {
    color: colors.grey1
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.grey2,
    marginHorizontal: 20,
    paddingHorizontal: 6,
    marginBottom: 20,
    borderRadius: 10
  },
  input: {
    flex: 1,
    padding: 8,    
    backgroundColor: "white",
    outlineStyle: Platform.OS === "web" && "none",
  },
  styledButton: {
    backgroundColor: colors.mainColor,
    borderRadius: 10,
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
  },
  coloredTitle: {
    color: colors.mainColor,
    fontSize: 16,
    fontWeight: "bold"
  },
  link: {
    color: colors.grey1,
    textDecorationLine: "underline",
  },
  socialIcon: {
    height: 50, 
    borderRadius: 10,
  },
  createSection: {
    alignItems: "flex-end",
    padding: 10,
  },
  transparentButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: 5,
  }
})