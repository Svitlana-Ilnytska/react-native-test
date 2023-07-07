import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    console.log("Реєстрація", email, password);
  };

  return (
    <KeyboardAvoidingView style={styles.block} behavior="height" enabled>
      <View style={styles.container}>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegistration}
        >
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text>Вже є акаунт? Увійти</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // bottom: 0,
    // left: -100,
    // right: 0,
    // justifyContent: "center",
    // alignItems: "center",
    height: 549,
    backgroundColor: "#FFF",
    // width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  block: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
    alignSelf: "center",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    width: "100%",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    marginTop: 43,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default RegistrationScreen;