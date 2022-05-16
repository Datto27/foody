import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-elements'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'


// drawer content, used in DrawerNavigator as its 
const DrawerContent = (props:any) => { // props coming from DrawerNavigator
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        {/* Drawer content above navigators */}
        <View style={styles.contentHeader}>
          <View style={{flexDirection:"row", alignItems:"center", marginBottom:15}}>
            <Avatar rounded size="large" 
              avatarStyle={styles.avatar} 
              source={{uri:""}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.boldText}>Username</Text>
              <Text style={styles.mediumText}>email@gmail.com</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
            <View style={{alignItems:"center"}}>
              <Text style={styles.boldText}>1</Text>
              <Text style={styles.mediumText}>My Favorites</Text>
            </View>
            <View style={{alignItems:"center"}}>
              <Text style={styles.boldText}>0</Text>
              <Text style={styles.mediumText}>My Cart</Text>
            </View>
          </View>
        </View>
        {/* this line of code will render drawer navigators, which are written insede DrawerNavigator */}
        <DrawerItemList {...props} />
        {/* add new drawer item which isn't inside DrawerNavigator */}
        <DrawerItem
          label="Payment"
          icon={({color, size}) => (  // color and size comes from Drawer.Navigator
            <FontAwesome name='credit-card-alt'
              color={color} size={size-2}
            />
          )}
          onPress={()=>{}}
        />
        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (  // color and size comes from Drawer.Navigator
            <Ionicons name='md-pricetags'
              color={color} size={size+1}
            />
          )}
          onPress={()=>{}}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (  // color and size comes from Drawer.Navigator
            <Ionicons name='settings'
              color={color} size={size+2}
            />
          )}
          onPress={()=>{}}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (  // color and size comes from Drawer.Navigator
            <Ionicons name='help-buoy'
              color={color} size={size+2}
            />
          )}
          onPress={()=>{}}
        />
        {/* --------------- preferences section ---------- */}
        <View style={styles.preferences}>
          <Text style={[styles.boldText, {color:colors.grey2}]}>Preferences</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text>Dark Theme</Text>
            <Switch trackColor={{false:"grey", true:colors.mainColor}}
              value={darkTheme}
              onValueChange={() => setDarkTheme(!darkTheme)}
            />
          </View>
        </View>
        {/* sign out */}
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (  // color and size comes from Drawer.Navigator
            <FontAwesome name='sign-out'
              color={color} size={size+4}
            />
          )}
          onPress={()=>{}}
        />
      </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentHeader: {
    // alignItems: "center",
    backgroundColor: colors.mainColor,
    padding: 5,
  },
  avatar: {
    // marginRight: 10,
  },
  boldText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  mediumText: {
    color: "white"
  },
  preferences: {
    margin: 8,
    borderTopColor: colors.grey3,
    borderTopWidth: 1,
  }
})