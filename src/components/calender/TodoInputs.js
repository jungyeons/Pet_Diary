import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";

const TodoInputs = ({ todos, updatedTodos, handleTodoChange }) => {
  const todoInputs = todos.map((todo, index) => (
    <TextInput
      key={index}
      value={updatedTodos[index] || todo}
      onChangeText={(text) => handleTodoChange(text, index)}
      placeholder={`(할일 ${index + 1} 입력)`}
      style={styles.todoInputs}
      placeholderTextColor={"#D2B48C"}
    />
  ));
  return (
    <View style={{ flex: 5 }}>
      <Text style={styles.todoTitle}>할 일들</Text>
      {todoInputs}
    </View>
  );
};

TodoInputs.propTypes = {
  todos: PropTypes.array.isRequired,
  updatedTodos: PropTypes.array.isRequired,
  handleTodoChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoTitle: {
    fontWeight: "bold",
    color: "#745757",
    marginBottom: 20,
  },
  todoInputs: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
    color: "#745757",
  },
});

export default TodoInputs;
