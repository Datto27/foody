import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
// navigators
import RootNavigator from './src/routes/RootNavigator';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigator />
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
