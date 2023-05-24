import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import JoinInput, { InputType } from "../components/authenticate/JoinInput";
import Button from "../components/authenticate/Button";
import { Entypo } from "@expo/vector-icons";

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
        <View style={styles.titleView}>
          {/* Header(chile - Text) */}
          <Text style={styles.title}>Paw Plan</Text>
          <View style={{ height: 15 }}></View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>회원가입</Text>
        </View>
        <View style={styles.content}>
          <JoinInput
            inputType={InputType.NAME}
            operate={(text) => {
              setName(text);
              console.log(name);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.NickName}
            operate={(text) => {
              setNickName(text);
              console.log(nickName);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.AGE}
            operate={(text) => {
              setAge(text);
              console.log(age);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.ID}
            operate={(text) => {
              setId(text);
              console.log(id);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.PW}
            operate={(text) => {
              setPw(text);
              console.log(pw);
            }}
          />
          <View style={{ height: 60 }}></View>
          <Entypo name="emoji-happy" size={140} color="black" />
        </View>
        <View style={styles.footer}>
          {/* Footer(chile - Button, Button) */}
          <Button title="BACK" onPress={() => navigation.navigate("Login")} />
          <Button
            title="JOIN"
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
    backgroundColor: "#D2B48C",
  },
  styledText: {
    fontSize: 30,
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#745757",
  },
  content: {
    flex: 3,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Membership;
