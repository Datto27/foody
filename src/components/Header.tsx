import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// libraries
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
// components
import { AuthStackParamList } from '../routes/AuthNavigator'


type HeaderProps = {
  title: string,
  type: string
}
type Nav = StackNavigationProp<AuthStackParamList>

// auth screens header
const Header = ({title, type}:HeaderProps) => {
  const navigation = useNavigation<Nav>()

  return (
    <View style={styles.header}>
      <View>
        <Icon name={type} color="white" size={28} 
          onPress={() => navigation.pop()}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "orange",
    height: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "400",
    color: "white",
    marginLeft: 20,
  }
})