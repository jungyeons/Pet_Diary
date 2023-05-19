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

const Membership = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(0);
  const showMembershipInfo = () => {
    return id + ", " + pw + ", " + name + ", " + nickName + ", " + age;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.title}>
          {/* Header(chile - Text) */}
          <Text>가입 정보를 입력해 주세요!</Text>
        </View>
        <View style={styles.content}>
          <Input
            inputType={InputType.NAME}
            operate={(text) => {
              setName(text);
              console.log(name);
            }}
          />
          <Input
            inputType={InputType.NickName}
            operate={(text) => {
              setNickName(text);
              console.log(nickName);
            }}
          />
          <Input
            inputType={InputType.AGE}
            operate={(text) => {
              setAge(text);
              console.log(age);
            }}
          />
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
        </View>
        <View style={styles.footer}>
          {/* Footer(chile - Button, Button) */}
          <Button title="back" onPress={() => navigation.navigate("Login")} />
          <Button
            title="가입"
            onPress={() => console.log(showMembershipInfo())}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  styledText: {
    fontSize: 30,
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 3,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Membership;
