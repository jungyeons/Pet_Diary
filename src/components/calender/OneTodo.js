/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import TodoOneInput from "./TodoOneInput";

const OneTodo = ({ item, deleteTodo, editTodo, index }) => {
  const refInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    // isEditing이 true가 될 때 실행되는 useEffect
    // true가 되면 해당 input에 포커스(키보드 입력)가 생김
    if (isEditing) {
      // isEditing && refInput.current 원래 이랬음
      refInput.current.focus();
    }
  }, [isEditing]);
  const [text, setText] = useState(item.text);
  const _deleteTodo = () => {
    deleteTodo(item.id);
  };
  const _editTodo = () => {
    setIsEditing(true);
  };
  const _handleTodoChange = (text) => {
    setText(text);
  };
  const _onSubmitEditing = () => {
    // 등록 버튼 눌렀을 때 실행되는 코드
    if (isEditing) {
      if (text.length != 0) {
        const editedItem = Object.assign({}, item, { text });
        setIsEditing(false);
        editTodo(editedItem);
      }
    }
  };
  const _onBlur = () => {
    if (isEditing) {
      if (text.length != 0) {
        if (item.text == 0) {
          alert("내용 등록은 완료 버튼을 눌려주세요");
          refInput.current.focus();
        } else {
          setIsEditing(false);
          setText(item.text);
        }
      } else {
        alert("최소 한 글자 입력해 주세요");
        refInput.current.focus();
      }
    }
  };
  return isEditing ? (
    <TodoOneInput
      refInput={refInput}
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
