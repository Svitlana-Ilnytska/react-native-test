import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ label, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={[styles.input, isActive && styles.inputActive]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    width: "100%",
    borderRadius: 8,
  },
  inputActive: {
    borderColor: "#FF6C00",
  },
});

export default Input;
