/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";
import TodoInputs from "../../components/calender/TodoInputs";
import { AntDesign } from "@expo/vector-icons";

export default function CalendarEdit({ navigation, route }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState("");
  const [todos, setTodos] = useState(Array(5).fill(""));
  const [updatedTodos, setUpdatedTodos] = useState([]);
  useEffect(() => {
    if (route.params != undefined)
      handleDateSelection(route.params.date.selectedDate);
  }, [route.params]);
  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1); // 해당 연도의 1월 1일로 자동 선택
    setSelectedDate("");
    setTodos(Array(5).fill(""));
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
    setTodos(Array(5).fill(""));
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setUpdatedTodos(Array(5).fill(""));
  };

  const handleTodoChange = (text, index) => {
    const updatedTodos = [...updatedTodos];
    updatedTodos[index] = text;
    console.log(text + ", " + index);
    setUpdatedTodos(updatedTodos);
  };
  // 조회창 전환
  const navigateBackScreen = () => {
    navigation.navigate("Retrieve", { date: { selectedDate } });
  };
  const addTodo = () => {
    console.log("할 일 추가s");
  };
  const saveTodo = () => {
    console.log("저장s");
  };
  return (
    <ScrollView>
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
          />
        </View>
        <View style={styles.contentView}>
          <ContentHeader
            selectedDate={selectedDate}
            addButtonOperate={addTodo}
            saveButtonOperate={saveTodo}
          />
          <TodoInputs
            todos={todos}
            updatedTodos={updatedTodos}
            handleTodoChange={handleTodoChange}
          />
        </View>
      </View>
    </ScrollView>
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <KeyboardAvoidingView
    //     style={{ flex: 1 }}
    //     behavior={Platform.select({ ios: "padding" })}
    //   >

    //   </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
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
  todoTitle: {
    fontWeight: "bold",
    color: "#745757",
    marginBottom: 20,
  },
});
