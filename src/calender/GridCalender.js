import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import DateSelectHeader from "../components/calender/DateSelectHeader";
import DateSelectButton from "../components/calender/DateSelectButton";

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
  calendar.push(<DateSelectHeader key={"weekDayView"} />);

  // 날짜 출력
  let row = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    row.push(<Text key={`empty-${i}`} />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${month}-${day}`;
    row.push(
      <DateSelectButton
        key={date}
        year={year}
        month={month}
        day={day}
        handleDateSelection={handleDateSelection}
      />
    );

    if ((firstDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
      calendar.push(
        <View
          key={day}
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {row}
        </View>
      );
      row = [];
    }
  }

  return (
    <View>
      <View style={{ marginBottom: 7 }}></View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text>년도지정</Text>
        <Text>월지정</Text>
      </View>
      <View style={{ marginBottom: 7 }}></View>
      <View>{calendar}</View>
    </View>
  );
};

GridCalender.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  handleDateSelection: PropTypes.func.isRequired,
};

export default GridCalender;
