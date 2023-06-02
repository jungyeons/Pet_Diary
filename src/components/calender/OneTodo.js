/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import TodoOneInput from "./TodoOneInput";

const OneTodo = ({ item, deleteTodo, editTodo, index }) => {
  const refInput = useRef(null);
  const [isEditing, setIsEditing] = useState(true);
  useEffect(() => {
    if (isEditing && refInput.current) {
      refInput.current.focus();
    }
  }, [isEditing]);
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
      if (text.length != 0) {
        const editedItem = Object.assign({}, item, { text });
        setIsEditing(false);
        editTodo(editedItem);
      }
    }
  };
  const _onBlur = () => {
    if (isEditing) {
      // text: input에 입력된 내용
      // ㄴ 펜버튼 누르고 input 입력 안하고 blur 처리되었을 때는 이거 길이 0 아님
      // item.text: 입력하고 확인("Done") 버튼 눌러서 입력된 내용
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
