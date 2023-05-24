import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";
import YearDropDown from "./YearDropDown";

export default function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState("");
  const [todos, setTodos] = useState(Array(5).fill(""));
  const [updatedTodos, setUpdatedTodos] = useState([]);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1); // 해당 연도의 1월 1일로 자동 선택
    setSelectedDate("");
    setTodos(Array(5).fill(""));
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
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
    setUpdatedTodos(updatedTodos);
  };

  const handleTodoUpdate = () => {
    setTodos(updatedTodos);
    setUpdatedTodos([]);
  };

  const renderCalendar = () => {
    // 월별 일수 계산 함수
    const getDaysInMonth = (year, month) => {
      return new Date(year, month, 0).getDate();
    };

    // 요일 계산 함수 (0: 일요일 ~ 6: 토요일)
    const getDayOfWeek = (year, month, day) => {
      return new Date(year, month - 1, day).getDay();
    };

    // 선택 가능한 날짜 스타일 설정
    const getDateButtonStyle = (day) => {
      if (day === selectedDate) {
        return { backgroundColor: "#E1D5C6" }; // 포인트 색상
      }
      return {};
    };

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfWeek = getDayOfWeek(year, month, 1);

    const calendar = [];

    // 요일 헤더
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekdayHeader = weekdays.map((weekday) => (
      <Text
        key={weekday}
        style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
      >
        {weekday}
      </Text>
    ));
    calendar.push(
      <View
        key="header"
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        {weekdayHeader}
      </View>
    );

    // 날짜 출력
    let row = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      row.push(<Text key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${month}-${day}`;
      row.push(
        <Button
          key={date}
          title={day.toString()}
          onPress={() => handleDateSelection(date)}
          style={[getDateButtonStyle(date), { flex: 1, aspectRatio: 1 }]}
        />
      );

      if ((firstDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
        calendar.push(
          <View
            key={day}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            {row}
          </View>
        );
        row = [];
      }
    }

    return calendar;
  };

  const renderTodoInputs = () => {
    const todoInputs = todos.map((todo, index) => (
      <Text
        key={index}
        style={{
          marginBottom: 10,
          color: "black",
        }}
      >
        할일 {index + 1} {updatedTodos[index] || todo}
      </Text>
    ));
    return <View>{todoInputs}</View>;
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
          borderWidth: 1, // 영역 확인용
        }}
      >
        {/* <Button title="이전" onPress={() => handleYearChange(year - 1)} />
        <Text style={{ fontSize: 18, color: "black" }}>{year}년</Text>
        <Button title="다음" onPress={() => handleYearChange(year + 1)} /> */}
        <YearDropDown />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
          borderWidth: 1, // 영역 확인용
        }}
      >
        <Button title="이전" onPress={() => handleMonthChange(month - 1)} />
        <Text style={{ fontSize: 18, color: "black" }}>{month}월</Text>
        <Button title="다음" onPress={() => handleMonthChange(month + 1)} />
      </View>
      <View
        style={{
          marginBottom: 20,
          alignSelf: "center",
          borderWidth: 1, // 영역 확인용
        }}
      >
        {renderCalendar()}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          borderWidth: 1, // 영역 확인용
        }}
      >
        <Text style={{ fontSize: 16, color: "black" }}>
          선택 날짜: {selectedDate}
        </Text>
        <Button title="할일 수정" onPress={handleTodoUpdate} />
      </View>
      <View
        style={{
          borderWidth: 1, // 영역 확인용
        }}
      >
        <Text style={{ fontSize: 16, color: "black", marginBottom: 10 }}>
          할일:
        </Text>
        {renderTodoInputs()}
      </View>
    </ScrollView>
  );
}
