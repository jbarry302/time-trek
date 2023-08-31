import { TouchableOpacity, StyleSheet, Text } from "react-native";
import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FloatingActionButton = ({ onPress, title, icon, styles }) => {
  const defaultStyle = {
    backgroundColor: "#007bff",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    elevation: 8,
  };

  const fabStyle = StyleSheet.flatten([defaultStyle, styles]);

  return (
    <TouchableOpacity style={fabStyle} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={24} color="white" />
      {title && <Text style={{ color: "white" }}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
