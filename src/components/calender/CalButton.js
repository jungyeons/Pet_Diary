import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

export const ButtonType = {
  EDIT: "할 일 수정",
  BACK: "back",
  ADD: "할 일 추가(최대 5개)",
  SAVE: "저장",
};

const CalButton = ({ buttonType, operate }) => {
  return (
    <Pressable onPressOut={operate}>
      <Text>{buttonType}</Text>
    </Pressable>
  );
};

CalButton.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(ButtonType)).isRequired,
  operate: PropTypes.func.isRequired,
};

export default CalButton;
