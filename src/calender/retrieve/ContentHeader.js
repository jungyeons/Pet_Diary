import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import CalButton from "../../components/calender/CalButton";
import { ButtonType } from "../../components/calender/CalButton";

const ContentHeader = ({ selectedDate, buttonOperate }) => {
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
      <View style={styles.editButtonView}>
        <CalButton buttonType={ButtonType.EDIT} operate={buttonOperate} />
      </View>
    </View>
  );
};

ContentHeader.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  buttonOperate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#745757",
  },
  dateView: {
    flex: 2,
  },
  dateText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
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
  editButtonView: {
    flex: 1,
    paddingRight: 5,
  },
});

export default ContentHeader;
