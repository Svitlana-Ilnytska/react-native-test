import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Input from "./Input";

const PasswordInput = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.inputPassword}>
      <Input {...rest} secureTextEntry={!showPassword} />
      <TouchableOpacity
        style={styles.buttonToShow}
        onPress={toggleShowPassword}
      >
        <Text style={styles.buttonTextToShow}>
          {showPassword ? "Приховати" : "Показати"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPassword: {
    alignItems: "center",
    width: "100%",
  },
  buttonTextToShow: {
    color: "#1B4371",
    textAlign: "right",
  },
  buttonToShow: {
    width: 100,
    height: 20,
    position: "absolute",
    right: 16,
    top: 18,
  },
});

export default PasswordInput;
