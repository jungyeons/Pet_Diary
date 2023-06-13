/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "./GridCalender";
import TodosComp from "./TodosComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feels } from "./FeelSelector";

export default function Calendar() {
  let now = new Date();
  const feelsArr = Object.values(Feels);
  const [year, setYear] = useState(new Date().getFullYear()); // 선택 년도
  const [month, setMonth] = useState(new Date().getMonth() + 1); // 선택 월
  const [day, setDay] = useState(new Date().getDate()); // 선택 일

  const [todosOfDates, setTodosOfDates] = useState({}); // [DATE]: {date: DATE, todos: {todos}}형 객체
  const [feelOfDates, setFeelOfDates] = useState({});
  const [selectedTodos, setSelectedTodos] = useState({}); // 할 일 목록(날짜 선택 시 여기에 todos가 들어감)
  const [selectedFeel, setSelectedFeel] = useState(feelsArr[0]);
  const setFeelCondition = (idx) => {
    // 그날 기분 선택
    const selectedFeel = feelsArr[idx];
    const dateID = year + "" + month + "" + day;
    const feelOfDate = feelOfDates[dateID];
    if (feelOfDate == undefined) {
      // 그날의 기분 하나 추가
      const newFeelOfDate = {
        [dateID]: {
          date: dateID,
          feel: selectedFeel,
        },
      };
      setFeelOfDates({ ...feelOfDates, ...newFeelOfDate });
    } else {
      const currentFeelOfDate = Object.assign({}, feelOfDates);
      currentFeelOfDate[dateID].feel = selectedFeel;
      setFeelOfDates(currentFeelOfDate);
    }
    setSelectedFeel(feelsArr[idx]);
  };
  const handleYearChange = (newYear) => {
    // 년도 변경시 변경 년도 지정
    setYear(newYear);
    setMonth(1);
    setDay(1);
    changeSelectedDateInfo(newYear, 1, 1);
  };

  const handleMonthChange = (newMonth) => {
    // 월 변경시 변경 월 지정
    if (newMonth == 0) {
      setYear(year - 1);
      setMonth(12);
      setDay(1);
      changeSelectedDateInfo(year - 1, 12, 1);
    } else if (newMonth == 13) {
      setYear(year + 1);
      setMonth(1);
      setDay(1);
      changeSelectedDateInfo(year + 1, 1, 1);
    } else {
      setMonth(newMonth);
      setDay(1);
      changeSelectedDateInfo(year, newMonth, 1);
    }
  };

  const handleDateSelection = (year, month, day) => {
    setYear(year);
    setMonth(month);
    setDay(day);
    changeSelectedDateInfo(year, month, day);
  };
  const changeSelectedDateInfo = (year, month, day) => {
    if (todosOfDates[year + "" + month + "" + day] == undefined)
      setSelectedTodos({});
    else setSelectedTodos(todosOfDates[year + "" + month + "" + day].todos);
    if (feelOfDates[year + "" + month + "" + day] == undefined)
      setSelectedFeel(feelsArr[0]);
    else setSelectedFeel(feelOfDates[year + "" + month + "" + day].feel);
  };
  const addTodo = () => {
    const dateID = year + "" + month + "" + day;
    const ID = Date.now().toString();

    if (Object.values(selectedTodos).length == 0) {
      const newTodosOfDate = {
        [dateID]: {
          dateId: dateID,
          todos: {
            [ID]: { id: ID, text: "" },
          },
        },
      };
      setTodosOfDates({ ...todosOfDates, ...newTodosOfDate });
      setSelectedTodos({ ...selectedTodos, ...newTodosOfDate[dateID].todos });
    } else {
      const currentTodosOfDates = Object.assign({}, todosOfDates);
      const newTodoObject = {
        [ID]: { id: ID, text: "" },
      };
      setSelectedTodos({ ...selectedTodos, ...newTodoObject });
      currentTodosOfDates[dateID].todos = selectedTodos;
      setTodosOfDates(currentTodosOfDates);
    }
  };
  const deleteTodo = (id) => {
    // 할 일 삭제(id값을 받고 입력 id에 맞는 객체 삭제(delete) 이후 todos 재지정)
    const dateID = year + "" + month + "" + day;
    const currentTodosOfDates = Object.assign({}, todosOfDates);
    const currentTodos = Object.assign({}, selectedTodos);
    delete currentTodos[id];
    setSelectedTodos(currentTodos);
    if (Object.values(selectedTodos).length == 1) {
      delete currentTodosOfDates[dateID];
      setTodosOfDates(currentTodosOfDates);
    } else {
      currentTodosOfDates[dateID].todos = currentTodos;
      setTodosOfDates(currentTodosOfDates);
    }
  };
  const editTodo = (item) => {
    const dateID = year + "" + month + "" + day;
    const currentTodosOfDates = Object.assign({}, todosOfDates);
    const currentTodos = Object.assign({}, selectedTodos);
    currentTodos[item.id] = item;
    setSelectedTodos(currentTodos);
    currentTodosOfDates[dateID].todos = currentTodos;
    setTodosOfDates(currentTodosOfDates);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{ marginBottom: 40 }}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calender</Text>
        </View>
        <View style={styles.calView}>
          <GridCalender
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
            year={year}
            month={month}
            day={day}
            setFeelCondition={setFeelCondition}
            selectedFeel={selectedFeel}
          />
          <TodosComp
            todos={selectedTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            addTodo={addTodo}
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
});
