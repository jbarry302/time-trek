import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SwitchButton = ({ label, value, onValueChange }) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onValueChange && onValueChange(newValue);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={toggleSwitch}
    >
      <View
        style={[
          styles.switchContainer,
          isChecked ? styles.switchContainerOn : {},
        ]}
      >
        <View
          style={[
            styles.switch,
            isChecked ? styles.switchOn : styles.switchOff,
          ]}
        />
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 2,
  },
  switchContainerOn: {
    backgroundColor: "#3498db",
  },
  switch: {
    width: 24,
    height: 24,
    borderRadius: 12,
    transition: "transform 0.2s ease-in-out",
  },
  switchOn: {
    backgroundColor: "white",
    transform: [{ translateX: 20 }],
  },
  switchOff: {
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SwitchButton;
