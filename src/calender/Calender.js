/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "./GridCalender";
import TodosComp from "./TodosComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderComp from "../header/HeaderComp";

const Calendar = ({ navigation }) => {
  let now = new Date();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  const [todosOfDates, setTodosOfDates] = useState({}); // [DATE]: {date: DATE, todos: {todos}}형 객체
  const [feelOfDates, setFeelOfDates] = useState({});
  const [currentTodos, setCurrentTodos] = useState({}); // 할 일 목록(날짜 선택 시 여기에 todos가 들어감)
  const [currentFeelsIdx, setCurrentFeelsIdx] = useState(0);

  const setFeelCondition = (idx) => {
    // 그날 기분 선택
    const dateID = year + "" + month + "" + day;
    const feelOfDate = feelOfDates[dateID];
    if (feelOfDate == undefined) {
      const newFeelOfDate = {
        [dateID]: {
          date: dateID,
          feelIdx: idx,
        },
      };
      setFeelOfDates({ ...feelOfDates, ...newFeelOfDate });
    } else {
      const currentFeelOfDate = Object.assign({}, feelOfDates);
      currentFeelOfDate[dateID].feelIdx = idx;
      setFeelOfDates(currentFeelOfDate);
    }
    setCurrentFeelsIdx(idx);
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
    // 날짜 선택 시 날짜 변경
    setYear(year);
    setMonth(month);
    setDay(day);
    changeSelectedDateInfo(year, month, day);
  };
  const changeSelectedDateInfo = (year, month, day) => {
    // 현재 할 일 및 기분 변경
    if (todosOfDates[year + "" + month + "" + day] == undefined)
      setCurrentTodos({});
    else setCurrentTodos(todosOfDates[year + "" + month + "" + day].todos);

    if (feelOfDates[year + "" + month + "" + day] == undefined)
      setCurrentFeelsIdx(0);
    else setCurrentFeelsIdx(feelOfDates[year + "" + month + "" + day].feelIdx);
  };
  const addTodo = () => {
    // 할 일 추가
    const dateID = year + "" + month + "" + day;
    const ID = Date.now().toString();

    if (Object.values(currentTodos).length == 0) {
      const newTodosOfDate = {
        [dateID]: {
          dateId: dateID,
          todos: {
            [ID]: { id: ID, text: "" },
          },
        },
      };
      setTodosOfDates({ ...todosOfDates, ...newTodosOfDate });
      setCurrentTodos({ ...currentTodos, ...newTodosOfDate[dateID].todos });
    } else {
      const currentTodosOfDates = Object.assign({}, todosOfDates);
      const newTodoObject = {
        [ID]: { id: ID, text: "" },
      };
      setCurrentTodos({ ...currentTodos, ...newTodoObject });
      currentTodosOfDates[dateID].todos = currentTodos;
      setTodosOfDates(currentTodosOfDates);
    }
  };
  const deleteTodo = (id) => {
    // 할 일 삭제
    const dateID = year + "" + month + "" + day;
    const currentTodosOfDates = Object.assign({}, todosOfDates);
    const assignTodos = Object.assign({}, currentTodos);
    delete assignTodos[id];
    setCurrentTodos(assignTodos);
    if (Object.values(currentTodos).length == 1)
      delete currentTodosOfDates[dateID];
    else currentTodosOfDates[dateID].todos = assignTodos;
    setTodosOfDates(currentTodosOfDates);
  };
  const editTodo = (item) => {
    // 할 일 수정
    const dateID = year + "" + month + "" + day;
    const currentTodosOfDates = Object.assign({}, todosOfDates);
    const assignTodos = Object.assign({}, currentTodos);
    assignTodos[item.id] = item;
    setCurrentTodos(assignTodos);
    currentTodosOfDates[dateID].todos = assignTodos;
    setTodosOfDates(currentTodosOfDates);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: 40 }} />
        <HeaderComp navigation={navigation} title={"Calender"} />
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
            feelsIdx={currentFeelsIdx}
          />
          <TodosComp
            todos={currentTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            addTodo={addTodo}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default Calendar;
