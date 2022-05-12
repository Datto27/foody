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
      <DrawerContentScrollView {...props}>
        {/* Drawer content above navigators */}
        <View style={styles.contentHeader}>
          <View style={{flexDirection:"row", alignItems:"center", marginBottom:15}}>
            <Avatar rounded size="large" 
              avatarStyle={styles.avatar} 
              source={{uri:"data:image/jpeg;base64,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"}} 
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