import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

export const Feels = {
  DEFAULT: "기분입력",
  VNICE: " 최고! ",
  NICE: "좋아요!",
  SOSO: "그럭저럭",
  BAD: "안좋아요",
  SOBAD: " 최악ㅜ ",
};

const FeelSelector = ({ isNow, setFeelCondition, selectedFeel }) => {
  const feelsArr = Object.values(Feels);
  const [feelsIdx, setFeelsIdx] = useState(0);
  const getLeft = () => {
    if (isNow()) {
      return feelsIdx == 0 ? (
        <View style={{ width: 20 }} />
      ) : (
        <Pressable
          hitSlop={4}
          onPressIn={() => {
            setFeelsIdx(feelsIdx - 1);
            setFeelCondition(feelsIdx - 1);
          }}
        >
          <AntDesign name="left" size={20} color="#745757" />
        </Pressable>
      );
    }
  };
  const getRight = () => {
    if (isNow()) {
      return feelsIdx == feelsArr.length - 1 ? (
        <View style={{ width: 20 }} />
      ) : (
        <Pressable
          hitSlop={4}
          onPressIn={() => {
            setFeelsIdx(feelsIdx + 1);
            setFeelCondition(feelsIdx + 1);
          }}
        >
          <AntDesign name="right" size={20} color="#745757" />
        </Pressable>
      );
    }
  };

  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      {getLeft()}
      <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
        {"  "}
        {selectedFeel}
        {"  "}
      </Text>
      {getRight()}
    </View>
  );
};

FeelSelector.propTypes = {
  isNow: PropTypes.func.isRequired,
  setFeelCondition: PropTypes.func.isRequired,
  selectedFeel: PropTypes.string.isRequired,
};

export default FeelSelector;
