import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const InputType = {
  NAME: "이름",
  NickName: "닉네임",
  AGE: "나이",
  ID: "ID",
  PW: "PW",
};

const Input = (props) => {
  const getMessage = () => {
    let value = "";
    if (props.inputType == InputType.ID) value = "아이디";
    else if (props.inputType == InputType.PW) value = "비밀번호";
    else if (props.inputType == InputType.NAME) value = "이름";
    else if (props.inputType == InputType.NickName) value = "닉네임";
    else if (props.inputType == InputType.AGE) value = "나이";
    return "(" + value + " 입력)";
  };
  return (
    <View style={[styles.InputContainer]}>
      <Text>{props.inputType} : </Text>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => {
          props.operate(text);
        }}
        placeholder={getMessage()}
        keyboardType={
          props.inputType == InputType.AGE ? "number-pad" : "default"
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
  },
  InputText: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
  },
});

Input.propTypes = {
  inputType: PropTypes.oneOf(Object.values(InputType)).isRequired,
  operate: PropTypes.func.isRequired,
};

export default Input;
