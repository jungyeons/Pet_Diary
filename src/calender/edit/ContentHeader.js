import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import CalButton from "../../components/calender/CalButton";
import { ButtonType } from "../../components/calender/CalButton";

const ContentHeader = ({
  selectedDate,
  backButtonOperate,
  addButtonOperate,
  saveButtonOperate,
}) => {
  return (
    <View style={styles.container}>
      {/* 자식 : dateView, feelView, editButtonView */}
      <View style={styles.dateView}>
        <Text style={styles.dateText}>선택 날짜 : {selectedDate}</Text>
      </View>
      <View style={styles.buttonView}>
        <CalButton buttonType={ButtonType.BACK} operate={backButtonOperate} />
        <CalButton buttonType={ButtonType.ADD} operate={addButtonOperate} />
        <CalButton buttonType={ButtonType.SAVE} operate={saveButtonOperate} />
      </View>
    </View>
  );
};

ContentHeader.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  backButtonOperate: PropTypes.func.isRequired,
  addButtonOperate: PropTypes.func.isRequired,
  saveButtonOperate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#745757",
  },
  dateText: {
    color: "#FFFFFF",
  },
  dateView: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default ContentHeader;
