import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const ContentHeader = ({ selectedDate }) => {
  return (
    <View style={styles.container}>
      {/* 자식 : dateView, feelView, editButtonView */}
      <View style={styles.dateView}>
        <Text style={styles.dateText}>선택 날짜 : {selectedDate}</Text>
      </View>
      <View style={styles.feelView}>
        <Text style={styles.todayFeel}>오늘 기분은?</Text>
        <Text>드롭 다운</Text>
      </View>
    </View>
  );
};

ContentHeader.propTypes = {
  selectedDate: PropTypes.string.isRequired,
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
