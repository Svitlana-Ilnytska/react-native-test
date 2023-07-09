import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/bg-image.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
