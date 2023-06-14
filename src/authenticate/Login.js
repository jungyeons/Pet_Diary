/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
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

const Login = ({ navigation, route }) => {
  const [memberships, setMemberships] = useState({});
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const refId = useRef(null);
  const refPw = useRef(null);
  const idSubmit = () => {
    if (pw.length == 0) refPw.current.focus();
  };
  const pwSubmit = () => {
    // 아무것도 안함(일단)
  };
  useEffect(() => {
    if (route.params != undefined) {
      setMemberships({ ...memberships, ...route.params.newMembership });
    }
  }, [route.params]);
  const autherization = () => {
    const loginClient = memberships[id];
    if (loginClient == undefined) return false;
    if (loginClient.id == id && loginClient.pw == pw) return true;
    return false;
  };
  const login = () => {
    if (autherization()) {
      navigation.navigate("MainTab", {
        membership: memberships[id],
      });
    } else {
      if (id.length == 0) {
        alert("아이디가 입력되지 않았습니다.");
        refId.current.focus();
      } else if (pw.length == 0) {
        alert("비밀번호가 입력되지 않았습니다.");
        refPw.current.focus();
      } else alert("아이디 및 비밀번호가 일치하지 않습니다.");
    }
  };
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
              operate={(text) => setId(text)}
              refInput={refId}
              onSubmit={idSubmit}
            />
            <View style={{ height: 35 }}></View>
            <LoginInput
              inputType={InputType.PW}
              operate={(text) => setPw(text)}
              refInput={refPw}
              onSubmit={pwSubmit}
            />
            <View style={{ height: 50 }}></View>
            <View style={[styles.ButtonView]}>
              <Button
                title="JOIN"
                onPress={() =>
                  navigation.navigate("Membership", {
                    memberships: memberships,
                  })
                }
              />
              <Button title="LOGIN" onPress={() => login()} />
            </View>
            <View style={{ height: 80 }} />
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
