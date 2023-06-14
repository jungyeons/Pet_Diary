/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
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

  const createNewMembership = () => {
    if (name.length == 0) alert("이름이 입력되지 않았습니다.");
    else if (nickName.length == 0) alert("닉네임이 입력되지 않았습니다.");
    else if (age == -1) alert("나이가 입력되지 않았습니다.");
    else if (id.length == 0) alert("아이디가 입력되지 않았습니다.");
    else if (pw.length == 0) alert("비밀번호가 입력되지 않았습니다.");
    else {
      const newMembership = {
        [id]: {
          id: id,
          pw: pw,
          name: name,
          nickName: nickName,
          age: age,
        },
      };
      alert("등록 완료");
      console.log(newMembership);
    }
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
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.NickName}
            operate={(text) => {
              setNickName(text);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.AGE}
            operate={(text) => {
              if (text.length == 0) setAge(-1);
              else setAge(text);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.ID}
            operate={(text) => {
              setId(text);
            }}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.PW}
            operate={(text) => {
              setPw(text);
            }}
          />
          <View style={{ height: 60 }}></View>
          <Entypo name="emoji-happy" size={140} color="black" />
        </View>
        <View style={styles.footer}>
          {/* Footer(chile - Button, Button) */}
          <Button title="BACK" onPress={() => navigation.navigate("Login")} />
          <Button title="JOIN" onPress={() => createNewMembership()} />
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
