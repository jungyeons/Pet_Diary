/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
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

const Membership = ({ navigation, route }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(-1);
  const refId = useRef(null);
  const refPw = useRef(null);
  const refName = useRef(null);
  const refNickName = useRef(null);
  const refAge = useRef(null);

  const nameSubmit = () => {
    if (nickName.length == 0) refNickName.current.focus();
  };
  const nickNameSubmit = () => {
    if (age == -1) refAge.current.focus();
  };
  const ageSubmit = () => {
    if (id.length == 0) refId.current.focus();
  };
  const idSubmit = () => {
    if (pw.length == 0) refPw.current.focus();
  };
  const pwSubmit = () => {
    // 아무것도 안함(일단)
  };

  const checkName = () => {
    if (name.length == 0) {
      alert("이름이 입력되지 않았습니다.");
      return false;
    } else return true;
  };

  const checkNickName = () => {
    if (nickName.length == 0) {
      alert("닉네임이 입력되지 않았습니다.");
      return false;
    } else return true;
  };

  const checkAge = () => {
    if (age == -1) {
      alert("나이가 입력되지 않았습니다.");
      return false;
    } else return true;
  };

  const checkId = () => {
    if (id.length == 0) {
      alert("아이디가 입력되지 않았습니다.");
      return false;
    } else return true;
  };

  const checkPw = () => {
    if (pw.length == 0) {
      alert("비밀번호가 입력되지 않았습니다.");
      return false;
    } else return true;
  };

  const createNewMembership = () => {
    if (!checkName()) return;
    else if (!checkNickName()) return;
    else if (!checkAge()) return;
    else if (!checkId()) return;
    else if (!checkPw()) return;
    else {
      if (route.params.memberships[id] != undefined) {
        alert(
          "아이디가중복된 회원정보가 존재합니다.\n아이디를 다시 입력해 주세요"
        );
        refId.current.focus();
      } else {
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
        navigation.navigate("Login", { newMembership: newMembership });
      }
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
            refInput={refName}
            onSubmit={nameSubmit}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.NickName}
            operate={(text) => {
              setNickName(text);
            }}
            refInput={refNickName}
            onSubmit={nickNameSubmit}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.AGE}
            operate={(text) => {
              if (text.length == 0) setAge(-1);
              else setAge(text);
            }}
            refInput={refAge}
            onSubmit={ageSubmit}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.ID}
            operate={(text) => {
              setId(text);
            }}
            refInput={refId}
            onSubmit={idSubmit}
          />
          <View style={{ height: 10 }}></View>
          <JoinInput
            inputType={InputType.PW}
            operate={(text) => {
              setPw(text);
            }}
            refInput={refPw}
            onSubmit={pwSubmit}
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
const styles = StyleSheet.create({
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
