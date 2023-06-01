/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";
import TodoAddButton from "../../components/calender/TodoAddButton";
import TodosComp from "./TodosComp";

export default function Calendar({ navigation }) {
  let now = new Date();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(
    now.getFullYear() +
      "년 " +
      (now.getMonth() + 1) +
      "월 " +
      now.getDate() +
      "일"
  );
  const [todos, setTodos] = useState({
    1: { id: "1", text: "패턴 숙제" },
    2: { id: "2", text: "모프 팀플" },
    3: { id: "3", text: "보안 공부" },
  });
  // const [updatedTodos, setUpdatedTodos] = useState([]);
  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1); // 해당 연도의 1월 1일로 자동 선택
    setSelectedDate("");
  };

  const handleMonthChange = (newMonth) => {
    if (newMonth == 0) {
      setYear(year - 1);
      setMonth(12);
    } else if (newMonth == 13) {
      setYear(year + 1);
      setMonth(1);
    } else setMonth(newMonth);
    setSelectedDate("");
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    // setUpdatedTodos(Array(5).fill(""));
  };
  // 수정창 전환
  const navigateEditScreen = () => {
    navigation.navigate("Edit", {
      year: { year },
      month: { month },
      date: { selectedDate },
      todos: { todos },
    });
  };
  const addTodo = () => {
    const ID = Date.now().toString();
    const newTodoObject = {
      [ID]: { id: ID, text: "일-" + ID },
    };
    setTodos({ ...todos, ...newTodoObject });
  };
  const deleteTodo = (id) => {
    const currentTodos = Object.assign({}, todos);
    delete currentTodos[id];
    setTodos(currentTodos);
  };
  const editTodo = (id) => {
    alert("수정 : " + id);
  };
  let index = 0;
  const getIndex = () => {
    index++;
    return index;
  };
  const getAddButton = () => {
    if (Object.values(todos).length != 5) {
      return (
        <View style={styles.addButton}>
          <TodoAddButton buttonOperate={addTodo} />
        </View>
      );
    }
  };
  return (
    <ScrollView>
      <View style={{ marginBottom: 40 }}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calender</Text>
        </View>
        <View style={styles.calView}>
          <GridCalender
            selectedDate={selectedDate}
            year={year}
            month={month}
            handleDateSelection={handleDateSelection}
            handleMonthChange={handleMonthChange}
            handleYearChange={handleYearChange}
            now={now}
          />
        </View>
        <View style={styles.contentView}>
          <ContentHeader
            selectedDate={selectedDate}
            buttonOperate={navigateEditScreen}
          />
          <TodosComp
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            getIndex={getIndex}
          />
          {getAddButton()}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "bold",
  },
  header: {
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  calView: {
    flex: 3,
    marginBottom: 5,
    alignSelf: "center",
  },
  contentView: {
    flex: 3,
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
