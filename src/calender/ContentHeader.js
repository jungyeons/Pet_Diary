import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import FeelSelector from "./FeelSelector";

const ContentHeader = ({
  year,
  month,
  day,
  setFeelCondition,
  selectedFeel,
}) => {
  const yearNow = new Date().getFullYear(); // 선택 년도
  const monthNow = new Date().getMonth() + 1; // 선택 월
  const dayNow = new Date().getDate(); // 선택 일
  const isNow = () => {
    return year == yearNow && month == monthNow && day == dayNow;
  };
  const getFeelSelector = () => {
    if (year > yearNow) return;
    if (month > monthNow) return;
    if (day > dayNow) return;
    return (
      <View style={styles.feelView}>
        <Text style={styles.todayFeel}>오늘 기분은?</Text>
        <FeelSelector
          isNow={isNow}
          setFeelCondition={setFeelCondition}
          selectedFeel={selectedFeel}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>
          선택 날짜 : {year}년 {month}월 {day}일
        </Text>
      </View>
      {getFeelSelector()}
    </View>
  );
};

ContentHeader.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  setFeelCondition: PropTypes.func.isRequired,
  selectedFeel: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  dateView: {
    flex: 1,
  },
  dateText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
  },
  todayFeel: {
    color: "#000000",
    fontWeight: "bold",
  },
  feelView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ContentHeader;
