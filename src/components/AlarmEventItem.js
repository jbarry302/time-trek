import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwitchButton from "./SwitchButton";

export function AlarmEventItem({
  title,
  time,
  frequency,
  switchValue,
  onSwitchChange,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.frequency}>{frequency}</Text>
        </View>
        <SwitchButton value={switchValue} onValueChange={onSwitchChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    elevation: 4,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 16,
    color: "#777",
  },
  frequency: {
    fontSize: 16,
    color: "#777",
  },
});

export default AlarmEventItem;
