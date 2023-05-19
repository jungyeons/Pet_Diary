import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CheckList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>체크리스트s</Text>
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

export default CheckList;
