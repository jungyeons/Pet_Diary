import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

const TodoOneInput = ({ index, handleTodoChange }) => {
  return (
    <View style={styles.todoInputView}>
      <Pressable>
        <AntDesign name="minuscircleo" size={15} color="red" />
      </Pressable>
      <View style={{ width: 10 }} />
      <TextInput
        onChangeText={(text) => handleTodoChange(text, index)}
        placeholder={"할일을 입력해 주세요"}
        style={styles.todoInputs}
        placeholderTextColor={"#808080"}
      />
    </View>
  );
};

TodoOneInput.propTypes = {
  index: PropTypes.number.isRequired,
  handleTodoChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoInputs: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
  todoInputView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default TodoOneInput;
