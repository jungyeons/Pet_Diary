/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";
import TodoInputs from "../../components/calender/TodoInputs";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CalendarEdit({ navigation, route }) {
  let now = new Date();
  const [todos, setTodos] = useState({
    // 1: { id: "1" },
    // 2: { id: "2" },
  });
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
  useEffect(() => {
    if (route.params != undefined) {
      handleYearChange(route.params.year.year);
      handleMonthChange(route.params.month.month);
      handleDateSelection(route.params.date.selectedDate);
    }
  }, [route.params]);
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
  };

  const handleTodoChange = (text, id) => {
    console.log(text + ", " + id);
  };
  // 조회창 전환
  const navigateBackScreen = () => {
    navigation.navigate("Retrieve", {
      year: { year },
      month: { month },
      date: { selectedDate },
    });
  };
  const addTodoInput = () => {
    const ID = Date.now().toString();
    if (Object.values(todos).length == 5)
      alert("할일 입력은 5개까지 가능합니다.");
    else {
      const newTodoObject = {
        [ID]: { id: ID },
      };
      setTodos({ ...todos, ...newTodoObject });
    }
  };
  const deleteTodoInput = (id) => {
    const currentTodos = Object.assign({}, todos);
    delete currentTodos[id];
    setTodos(currentTodos);
  };
  const saveTodo = () => {
    console.log("저장s");
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{ marginBottom: 40 }}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPressOut={navigateBackScreen} hitSlop={15}>
            <View style={{ width: 20, marginLeft: 5 }}>
              <AntDesign name="left" size={30} color="black" />
            </View>
          </Pressable>
          <Text style={styles.headerTitle}>Calender</Text>
          <View style={{ width: 20, marginRight: 5 }}></View>
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
            addButtonOperate={addTodoInput}
            saveButtonOperate={saveTodo}
          />
          <TodoInputs
            todos={todos}
            handleTodoChange={handleTodoChange}
            deleteTodoInput={deleteTodoInput}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000000",
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
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
});
