import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";
import {
  selectedDate,
  setSelectedDate,
} from "../../components/calender/DateStateManager";

export default function Calendar({ navigation }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [todos, setTodos] = useState(Array(5).fill(""));
  const [updatedTodos, setUpdatedTodos] = useState([]);

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
    navigation.navigate("Edit");
  };

  const renderTodoInputs = () => {
    const todoInputs = todos.map((todo, index) => (
      <Text key={index} style={styles.todoTexts}>
        할일 {index + 1} {updatedTodos[index] || todo}
      </Text>
    ));
    return (
      <View style={{ flex: 5 }}>
        <Text style={styles.todoTitle}>할 일들</Text>
        {todoInputs}
      </View>
    );
  };

  return (
    <ScrollView>
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
  container: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 35,
    color: "#745757",
  },
  header: {
    height: 65,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calView: {
    flex: 3,
    marginBottom: 20,
    alignSelf: "center",
  },
  contentView: {
    flex: 3,
    borderWidth: 1,
  },
  todoTitle: {
    fontWeight: "bold",
    color: "#745757",
    marginBottom: 20,
  },
  todoTexts: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
});
