import React from "react";
import { Button, Text, View } from "react-native";
import PropTypes from "prop-types";

const GridCalender = ({ selectedDate, year, month, handleDateSelection }) => {
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
    const date = `${year}년 ${month}월 ${day}일`;
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
            borderWidth: 1,
            borderColor: "red",
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

GridCalender.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  handleDateSelection: PropTypes.func.isRequired,
};

export default GridCalender;
