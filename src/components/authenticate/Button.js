import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPressOut={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

Button.proptypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
