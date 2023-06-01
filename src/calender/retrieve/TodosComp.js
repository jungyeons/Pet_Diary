import React from "react";
import OneTodo from "../../components/calender/OneTodo";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const TodosComp = ({ todos, deleteTodo, editTodo, getIndex }) => {
  const todoInputs = Object.values(todos).map((todo) => (
    <OneTodo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      getIndex={getIndex}
    />
  ));
  return (
    <View style={{ flex: 5, marginLeft: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.todoTitleView}>
          <View style={{ marginBottom: 5 }}></View>
          <Text style={styles.todoTitle}>Things to do</Text>
        </View>
        <View style={{ width: 15 }} />
        <View>
          <Text style={{ fontWeight: "bold" }}>
            할 일 갯수 : {Object.values(todos).length}/5
          </Text>
          <Text style={{ fontWeight: "bold" }}>5개까지 입력 가능합니다.</Text>
        </View>
      </View>
      {todoInputs}
    </View>
  );
};

TodosComp.propTypes = {
  todos: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  getIndex: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoTitleView: {
    width: 100,
    height: 30,
    marginBottom: 20,
    marginTop: 2,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#D2B48C",
    marginLeft: 3,
  },
  todoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default TodosComp;
