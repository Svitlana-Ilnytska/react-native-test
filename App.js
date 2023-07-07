import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen'

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/bg-image.png')}
      style={styles.backgroundImage}
    >
         <View style={styles.container}>
         <Text>Мій додаток React Native</Text>
         {/* <StatusBar style="auto" /> */}
          <RegistrationScreen />
         </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'url(./assets/bg-image.png)',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
