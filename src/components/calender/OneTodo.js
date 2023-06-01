/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import TodoOneInput from "./TodoOneInput";

const OneTodo = ({ item, deleteTodo, editTodo, index }) => {
  useEffect(() => {
    console.log("item Selecting " + item.isEditing + ", " + item.id);
    setIsEditing(item.isEditing);
  }, []);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);
  const _deleteTodo = () => {
    deleteTodo(item.id);
  };
  const _editTodo = () => {
    // 여기가 펜 버튼 눌렀을 때 실행되는 부분
    // ㄴ setEditing도 바뀌고 input에 포커스도 되었으면 좋겠음
    setIsEditing(true);
  };
  const _handleTodoChange = (text) => {
    setText(text);
  };
  const _onSubmitEditing = () => {
    if (isEditing) {
      if (text.length == 0) {
        alert("최소 한 글자 입력해 주세요");
        item.isEditing = true;
        setIsEditing(item.isEditing);
        console.log(isEditing);
      } else {
        const editedItem = Object.assign({}, item, { text });
        item.isEditing = false;
        setIsEditing(item.isEditing);
        editTodo(editedItem);
      }
    }
  };
  const _onBlur = () => {
    if (isEditing) {
      setIsEditing(false);
      setText(item.text);
    }
  };
  return isEditing ? (
    <TodoOneInput
      item={item}
      handleTodoChange={_handleTodoChange}
      onSubmitEditing={_onSubmitEditing}
      onBlur={_onBlur}
    />
  ) : (
    <View style={styles.todoView}>
      <Text style={styles.todoTexts}>
        할일 {index + 1} : {item.text}
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
  item: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  todoView: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoTexts: {
    marginLeft: 10,
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
