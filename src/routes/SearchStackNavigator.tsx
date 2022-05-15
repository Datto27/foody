import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import { colors } from '../global/styles'


export type SearchStackParamList = {
  SearchScreen: undefined,
  SearchResultScreen: undefined,
}

const StackNav = createStackNavigator<SearchStackParamList>()

const SearchStackNavigator = () => {


  return (
    <StackNav.Navigator>
      <StackNav.Screen 
        name='SearchScreen'
        component={SearchScreen}
        options={{
          headerShown: false
        }}
      />
      <StackNav.Screen 
        name='SearchResultScreen'
        component={SearchResultScreen}
        options={{
          // headerShown: false
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.mainColor
          }
        }}
      />
    </StackNav.Navigator>
  )
}

export default SearchStackNavigator