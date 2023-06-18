import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image } from "react-native";
import uuid from "react-uuid";

import CheckListWeekly from "../components/checkList/CheckListWeekly";
import AddTaskInput from "../components/checkList/AddTaskInput";
import TodoList from "../components/checkList/TodoList";
import MediumText from "../components/checkList/MediumText";
import BoldText from "../components/checkList/BoldText";

const CheckList = () => {
  const [selectedWeekly, setSelectedWeekly] = useState("목");

  const [monTodos, setMonTodos] = useState([
    { id: uuid(), textValue: "사료 사러가기", checked: false },
    { id: uuid(), textValue: "병원 진료 예약하기", checked: true },
  ]);
  const [tueTodos, setTueTodos] = useState([
    { id: uuid(), textValue: "수제 간식 만들기", checked: true },
    { id: uuid(), textValue: "강아지옷 사러가기", checked: false },
    { id: uuid(), textValue: "산책 가기", checked: true },
    { id: uuid(), textValue: "목욕시키기", checked: false },
    { id: uuid(), textValue: "발톱 깎기", checked: false },
    { id: uuid(), textValue: "알러지 약 먹이기", checked: true },
    { id: uuid(), textValue: "미용 예약하기", checked: true },
    { id: uuid(), textValue: "간식 소분하기", checked: false },
    { id: uuid(), textValue: "배변 패드 사기", checked: true },
  ]);
  const [wedTodos, setWedTodos] = useState([
    { id: uuid(), textValue: "알러지 약 먹이기", checked: true },
    { id: uuid(), textValue: "산책 가기", checked: false },
    { id: uuid(), textValue: "미용 예약 맞춰 가기", checked: true },
  ]);
  const [thuTodos, setThuTodos] = useState([]);
  const [friTodos, setFriTodos] = useState([]);
  const [satTodos, setSatTodos] = useState([]);
  const [sunTodos, setSunTodos] = useState([]);
  const [Todos, setTodos] = useState([...thuTodos]);

  const addTodo = (text, selectedWeekly) => {
    switch (selectedWeekly) {
      case "월":
        const mon = [
          { id: uuid(), textValue: text, checked: false },
          ...monTodos,
        ];
        setTodos(mon);
        setMonTodos(mon);
        break;
      case "화":
        const tue = [
          { id: uuid(), textValue: text, checked: false },
          ...tueTodos,
        ];
        setTodos(tue);
        setTueTodos(tue);
        break;
      case "수":
        const wed = [
          { id: uuid(), textValue: text, checked: false },
          ...wedTodos,
        ];
        setTodos(wed);
        setWedTodos(wed);
        break;
      case "목":
        const thu = [
          { id: uuid(), textValue: text, checked: false },
          ...thuTodos,
        ];
        setTodos(thu);
        setThuTodos(thu);
        break;
      case "금":
        const fri = [
          { id: uuid(), textValue: text, checked: false },
          ...friTodos,
        ];
        setTodos(fri);
        setFriTodos(fri);
        break;
      case "토":
        const sat = [
          { id: uuid(), textValue: text, checked: false },
          ...satTodos,
        ];
        setTodos(sat);
        setSatTodos(sat);
        break;
      case "일":
        const sun = [
          { id: uuid(), textValue: text, checked: false },
          ...sunTodos,
        ];
        setTodos(sun);
        setSunTodos(sun);
        break;
    }
  };

  const onRemove = (id, selectedWeekly) => (e) => {
    const remove = Todos.filter((Todo) => Todo.id !== id);
    setTodos(remove);
    switch (selectedWeekly) {
      case "월":
        setMonTodos(remove);
        break;
      case "화":
        setTueTodos(remove);
        break;
      case "수":
        setWedTodos(remove);
        break;
      case "목":
        setThuTodos(remove);
        break;
      case "금":
        setFriTodos(remove);
        break;
      case "토":
        setSatTodos(remove);
        break;
      case "일":
        setSunTodos(remove);
        break;
    }
  };

  const onToggle = (id, selectedWeekly) => (e) => {
    const check = Todos.map((Todo) =>
      Todo.id === id ? { ...Todo, checked: !Todo.checked } : Todo
    );
    setTodos(check);
    switch (selectedWeekly) {
      case "월":
        setMonTodos(check);
        break;
      case "화":
        setTueTodos(check);
        break;
      case "수":
        setWedTodos(check);
        break;

      case "목":
        setThuTodos(check);
        break;

      case "금":
        setFriTodos(check);
        break;

      case "토":
        setSatTodos(check);
        break;

      case "일":
        setSunTodos(check);
        break;
    }
  };

  const loadTodos = (day) => {
    switch (day) {
      case "월":
        setTodos([...monTodos]);
        break;
      case "화":
        setTodos([...tueTodos]);
        break;
      case "수":
        setTodos([...wedTodos]);
        break;
      case "목":
        setTodos([...thuTodos]);
        break;
      case "금":
        setTodos([...friTodos]);
        break;
      case "토":
        setTodos([...satTodos]);
        break;
      case "일":
        setTodos([...sunTodos]);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <BoldText style={styles.title}>CHECKLIST</BoldText>
        <View style={styles.weekly}>
          <MediumText
            style={{
              fontSize: 17,
              fontWeight: 500,
              marginBottom: 20,
              marginLeft: 5,
            }}
          >
            2023년 5월 첫째 주
          </MediumText>
          <View style={styles.weeklyButtonContainer}>
            <CheckListWeekly
              day="월"
              onPress={() => {
                setSelectedWeekly("월");
                loadTodos("월");
              }}
              date="12"
              buttonStyle={
                selectedWeekly == "월"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
            <CheckListWeekly
              day="화"
              onPress={() => {
                setSelectedWeekly("화");
                loadTodos("화");
              }}
              date="13"
              buttonStyle={
                selectedWeekly == "화"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
            <CheckListWeekly
              day="수"
              onPress={() => {
                setSelectedWeekly("수");
                loadTodos("수");
              }}
              date="14"
              buttonStyle={
                selectedWeekly == "수"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
            <CheckListWeekly
              day="목"
              onPress={() => {
                setSelectedWeekly("목");
                loadTodos("목");
              }}
              date="15"
              buttonStyle={
                selectedWeekly == "목"
                  ? styles.selectedWeeklyBtn
                  : styles.todayBtn
              }
            />
            <CheckListWeekly
              day="금"
              onPress={() => {
                setSelectedWeekly("금");
                loadTodos("금");
              }}
              date="16"
              buttonStyle={
                selectedWeekly == "금"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
            <CheckListWeekly
              day="토"
              onPress={() => {
                setSelectedWeekly("토");
                loadTodos("토");
              }}
              date="17"
              buttonStyle={
                selectedWeekly == "토"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
            <CheckListWeekly
              day="일"
              onPress={() => {
                setSelectedWeekly("일");
                loadTodos("일");
              }}
              date="18"
              buttonStyle={
                selectedWeekly == "일"
                  ? styles.selectedWeeklyBtn
                  : styles.weeklyBtn
              }
            />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingVertical: 10,
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/paw1.png")}
              style={{ width: 320, height: 30 }}
            />
          </View>
        </View>
        <View style={styles.checkList}>
          <AddTaskInput onAddTodo={addTodo} selectedWeekly={selectedWeekly} />
          <TodoList
            Todos={Todos}
            onRemove={onRemove}
            onToggle={onToggle}
            selectedWeekly={selectedWeekly}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 26,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  weekly: {
    width: "100%",
    marginHorizontal: 35,
    marginVertical: 30,
    alignItems: "flex-start",
  },
  weeklyButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedWeeklyBtn: {
    backgroundColor: "#745757",
  },
  weeklyBtn: {
    backgroundColor: "#D9D9D9",
  },
  todayBtn: {
    borderColor: "#745757",
    borderWidth: 3,
    backgroundColor: "#D9D9D9",
  },
  checkList: {
    width: "90%",
    height: "55%",
  },
});

export default CheckList;
