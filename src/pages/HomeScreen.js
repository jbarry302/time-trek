import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import FloatingActionButton from "../components/FloatingActionButton";
import AlarmEventItem from "../components/AlarmEventItem";

const HomeScreen = ({ navigation }) => {
  const [alarms, setAlarms] = React.useState([
    {
      id: 1,
      title: "Morning Alarm",
      time: "07:00 AM",
      frequency: "Everyday",
      enabled: true,
    },
    {
      id: 2,
      title: "Workout Reminder",
      time: "05:30 PM",
      frequency: "Mon, Wed, Fri",
      enabled: false,
    },
    {
      id: 3,
      title: "Medication Alert",
      time: "10:00 AM",
      frequency: "Daily",
      enabled: true,
    },
    {
      id: 4,
      title: "Meeting Reminder",
      time: "02:00 PM",
      frequency: "Today",
      enabled: true,
    },
    {
      id: 5,
      title: "Bedtime Alarm",
      time: "10:30 PM",
      frequency: "Everyday",
      enabled: false,
    },
  ]);

  const handleAlarmSwitchChange = (alarmId, newValue) => {
    const updatedAlarms = alarms.map((alarm) =>
      alarm.id === alarmId ? { ...alarm, enabled: newValue } : alarm
    );
    setAlarms(updatedAlarms);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ScrollView contentContainerStyle={styles.container}>
            {alarms.map((alarm) => (
              <AlarmEventItem
                key={alarm.id}
                title={alarm.title}
                time={alarm.time}
                frequency={alarm.frequency}
                switchValue={alarm.enabled}
                onSwitchChange={(newValue) =>
                  handleAlarmSwitchChange(alarm.id, newValue)
                }
              />
            ))}
          </ScrollView>
        </View>
        <FloatingActionButton
          icon="plus"
          onPress={() => alert("Add button pressed")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
