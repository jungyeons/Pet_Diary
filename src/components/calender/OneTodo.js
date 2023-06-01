import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const OneTodo = ({ text, id, deleteTodo, editTodo, getIndex }) => {
  const _deleteTodo = () => {
    deleteTodo(id);
  };
  const _editTodo = () => {
    editTodo(id);
  };
  const _getIndex = () => {
    return getIndex();
  };
  return (
    <View style={styles.todoView}>
      <Text style={styles.todoTexts}>
        할일 {_getIndex()} : {text}
      </Text>
      <View style={styles.buttonView}>
        <Pressable onPressIn={_deleteTodo}>
          <AntDesign name="minuscircleo" size={24} color="red" />
        </Pressable>
        <Pressable onPressIn={_editTodo}>
          <FontAwesome name="pencil" size={24} color="blue" />
        </Pressable>
      </View>
    </View>
  );
};

OneTodo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  getIndex: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoView: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoTexts: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
  buttonView: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
});

export default OneTodo;
