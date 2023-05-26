import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";

const TodoInputs = ({ todos, updatedTodos, handleTodoChange }) => {
  const todoInputs = todos.map((todo, index) => (
    <TextInput
      key={index}
      value={updatedTodos[index] || todo}
      onChangeText={(text) => handleTodoChange(text, index)}
      placeholder={"할일을 입력해 주세요"}
      style={styles.todoInputs}
      placeholderTextColor={"#808080"}
    />
  ));
  return (
    <View style={{ flex: 5 }}>
      <View style={styles.todoTitleView}>
        <View style={{ marginBottom: 5 }}></View>
        <Text style={styles.todoTitle}>Things to do</Text>
      </View>
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
  todoTitleView: {
    width: 100,
    height: 30,
    marginBottom: 10,
    marginTop: 2,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#745757",
    marginLeft: 3,
  },
  todoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  todoInputs: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
});

export default TodoInputs;
