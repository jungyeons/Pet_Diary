import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import Input, { InputType } from "../components/authenticate/Input";
import Button from "../components/authenticate/Button";

const Login = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.title}>
          {/* Header(chile - Text) */}
          <Text>반려동물 커뮤니티 어플리케이션</Text>
        </View>
        <View style={styles.content}>
          {/* Body(child - Input Id, Input Pw, buttonView) */}
          <Input
            inputType={InputType.ID}
            operate={(text) => {
              setId(text);
              console.log(id);
            }}
          />
          <Input
            inputType={InputType.PW}
            operate={(text) => {
              setPw(text);
              console.log(pw);
            }}
          />
          <View style={[styles.ButtonView]}>
            <Button
              title="회원가입"
              onPress={() => navigation.navigate("Membership")}
            />
            <Button
              title="로그인"
              onPress={() => navigation.navigate("MainTab")}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
