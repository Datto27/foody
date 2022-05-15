import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import HomeHeader from './src/components/HomeHeader';
// navigators
import RootNavigator from './src/routes/RootNavigator';
import HomeScreen from './src/screens/HomeScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import SearchScreen from './src/screens/SearchScreen';


export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <RootNavigator /> */}
      <SearchResultScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
