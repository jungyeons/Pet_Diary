import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";

const TodoOneInput = ({
  item,
  handleTodoChange,
  onSubmitEditing,
  onBlur,
  refInput,
}) => {
  return (
    <View style={styles.todoInputView}>
      <View style={{ width: 10 }} />
      <TextInput
        ref={refInput}
        onChangeText={(text) => {
          handleTodoChange(text);
        }}
        placeholder={item.text == "" ? "(할 일을 입력해 주세요)" : item.text}
        style={styles.todoInputs}
        placeholderTextColor={"#808080"}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        returnKeyType="done"
      />
    </View>
  );
};

TodoOneInput.propTypes = {
  item: PropTypes.object.isRequired,
  handleTodoChange: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  refInput: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  todoInputs: {
    marginBottom: 30,
    color: "#745757",
    fontSize: 20,
    fontWeight: "bold",
  },
  todoInputView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default TodoOneInput;
