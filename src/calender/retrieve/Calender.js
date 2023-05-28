/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";

export default function Calendar({ navigation, route }) {
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
  const [todos, setTodos] = useState(Array(5).fill(""));
  const [updatedTodos, setUpdatedTodos] = useState([]);
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
  // 수정창 전환
  const navigateEditScreen = () => {
    navigation.navigate("Edit", {
      year: { year },
      month: { month },
      date: { selectedDate },
    });
  };

  const renderTodoInputs = () => {
    const todoInputs = todos.map((todo, index) => (
      <Text key={index} style={styles.todoTexts}>
        할일 {index + 1} {updatedTodos[index] || todo}
      </Text>
    ));
    return (
      <View style={{ flex: 5, marginLeft: 10 }}>
        <View style={styles.todoTitleView}>
          <View style={{ marginBottom: 5 }}></View>
          <Text style={styles.todoTitle}>Things to do</Text>
        </View>
        {todoInputs}
      </View>
    );
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
          {renderTodoInputs()}
        </View>
      </View>
    </ScrollView>
  );
}

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
  todoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  todoTexts: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
});
