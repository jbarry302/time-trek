import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const CreateAlarmScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Create Alarm Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};

export default CreateAlarmScreen;
