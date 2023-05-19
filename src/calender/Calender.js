import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Calender = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>캘린더s</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  styledText: {
    fontSize: 30,
  },
});

export default Calender;
