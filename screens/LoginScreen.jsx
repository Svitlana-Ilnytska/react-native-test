import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Увійшли", email, password);
  };

  return (
    <View style={[styles.containerMain, { flexGrow: 1 }]}>
      <KeyboardAvoidingView
        style={styles.block}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.containerMidddle}>
              <View style={styles.avatar}>
                <Image source={require("../assets/avatar-temp.png")} />
              </View>

              <Text style={styles.title}>Увійти</Text>

              <Input
                placeholder="Адреса електронної пошти"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
              />
              <PasswordInput
                placeholder="Пароль"
                onChangeText={setPassword}
                value={password}
              />
            </View>
            <View style={styles.containerBack}></View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View style={styles.containerMidddle}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  containerBack: {
    backgroundColor: "#FFF",
    height: 505,
    position: "absolute",
    bottom: -210,
    width: "100%",
    right: "0%",
    zIndex: -10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerMidddle: {
    paddingHorizontal: 16,
    width: "100%",
  },
  block: {
    flex: 1,
  },
  avatar: {
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 14,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    marginTop: 43,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  link: {
    marginBottom: 66,
    alignItems: "center",
    textAlign: "center",
  },
});

export default LoginScreen;
