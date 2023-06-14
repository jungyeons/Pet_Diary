/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import LoginInput, { InputType } from "../components/authenticate/LoginInput";
import Button from "../components/authenticate/Button";
import { Entypo } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding" })}
      >
        <View style={styles.container}>
          <View style={styles.titleView}>
            {/* Header(chile - Text) */}
            <Text style={styles.title}>Paw Plan</Text>
            <View style={{ height: 40 }}></View>
            <Entypo name="baidu" size={80} color="#745757" />
          </View>
          <View style={styles.content}>
            {/* Body(child - Input Id, Input Pw, buttonView) */}
            <LoginInput
              inputType={InputType.ID}
              operate={(text) => {
                setId(text);
                console.log(id);
              }}
            />
            <View style={{ height: 35 }}></View>
            <LoginInput
              inputType={InputType.PW}
              operate={(text) => {
                setPw(text);
                console.log(pw);
              }}
            />
            <View style={{ height: 50 }}></View>
            <View style={[styles.ButtonView]}>
              <Button
                title="JOIN"
                onPress={() => navigation.navigate("Membership")}
              />
              <Button
                title="LOGIN"
                onPress={() => {
                  console.log(id + ", " + pw);
                  navigation.navigate("MainTab");
                }}
              />
            </View>
            <View style={{ height: 80 }}></View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#745757",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Login;
