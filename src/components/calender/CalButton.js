import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export const ButtonType = {
  EDIT: "할 일 수정",
  BACK: "Back",
  ADD: "Add",
  SAVE: "Save",
};

const CalButton = ({ buttonType, operate }) => {
  return (
    <Pressable onPressOut={operate}>
      <View style={styles.buttonView}>
        <Text style={{ fontWeight: "bold" }}>{buttonType}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    borderWidth: 1,
    marginRight: 10,
    padding: 5,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
});

CalButton.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(ButtonType)).isRequired,
  operate: PropTypes.func.isRequired,
};

export default CalButton;
