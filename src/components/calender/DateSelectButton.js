import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const DateSelectButton = ({ handleDateSelection, year, month, day }) => {
  const date = `${year}년 ${month}월 ${day}일`;
  return (
    <Pressable onPressOut={() => handleDateSelection(date)}>
      <View key={day} style={styles.buttonStyle}>
        <Text> {day} </Text>
      </View>
    </Pressable>
  );
};

DateSelectButton.propTypes = {
  handleDateSelection: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 54,
    height: 41,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DateSelectButton;
