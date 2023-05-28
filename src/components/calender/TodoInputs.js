import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const TodoInputs = ({ inputs }) => {
  return (
    <View style={{ flex: 5, marginLeft: 10 }}>
      <View style={styles.todoTitleView}>
        <View style={{ marginBottom: 5 }}></View>
        <Text style={styles.todoTitle}>Things to do</Text>
      </View>
      {inputs}
    </View>
  );
};

TodoInputs.propTypes = {
  inputs: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  todoTitleView: {
    width: 100,
    height: 30,
    borderRadius: 12,
    marginBottom: 18,
    marginTop: 2,
    alignItems: "center",
    backgroundColor: "#D2B48C",
    marginLeft: 3,
  },
  todoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  todoInputs: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#745757",
  },
  todoInputView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default TodoInputs;
