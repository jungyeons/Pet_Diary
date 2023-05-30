/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";
import TodoInputs from "../../components/calender/TodoInputs";
import { AntDesign } from "@expo/vector-icons";
import TodoOneInput from "../../components/calender/TodoOneInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CalendarEdit({ navigation, route }) {
  let now = new Date();
  const [indexes, setIndexes] = useState([0]);
  const [todoInputs, setTodoInputs] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(
    now.getFullYear() +
      "년 " +
      (now.getMonth() + 1) +
      "월 " +
      now.getDate() +
      "일"
  );
  useEffect(() => {
    if (route.params != undefined) {
      handleYearChange(route.params.year.year);
      handleMonthChange(route.params.month.month);
      handleDateSelection(route.params.date.selectedDate);
    }
  }, [route.params]);
  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1); // 해당 연도의 1월 1일로 자동 선택
    setSelectedDate("");
  };

  const handleMonthChange = (newMonth) => {
    if (newMonth == 0) {
      setYear(year - 1);
      setMonth(12);
    } else if (newMonth == 13) {
      setYear(year + 1);
      setMonth(1);
    } else setMonth(newMonth);
    setSelectedDate("");
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTodoChange = (text, index) => {
    console.log(text + ", " + index);
  };
  // 조회창 전환
  const navigateBackScreen = () => {
    navigation.navigate("Retrieve", {
      year: { year },
      month: { month },
      date: { selectedDate },
    });
  };
  const addTodoInput = () => {
    if (todoInputs.length == 5) alert("할일 입력은 5개까지 가능합니다.");
    else {
      setIndexes([...indexes, todoInputs.length + 1]);
      console.log(indexes);
      setTodoInputs([
        ...todoInputs,
        <TodoOneInput
          key={todoInputs.length}
          index={indexes[indexes.length - 1]}
          handleTodoChange={handleTodoChange}
          deleteTodoInput={deleteTodoInput}
        />,
      ]);
      console.log(indexes.length + ", " + todoInputs.length);
    }
  };
  let j = 0;
  const deleteTodoInput = (index) => {
    let newInputs = [];
    setTodoInputs((todoInputs) => {
      // console.log("87줄 : 삭제 : " + index + ", " + inputLen);
      // 왜그런진 모르겠는데 todoInputs.length가 -누른 위치에 따라서
      // 그 값이 계속 바뀌니까 다음 위치가 새 배열에 들어가지 않는듯??
      // 근디 어떻게 -눌린 위치랑 배열 길이가 계속 똑같게 나오지..??
      // ㄴ 함수형 업데이트로 해결
      for (let i = 0; i < todoInputs.length; i++) {
        if (i != index) {
          console.log(
            "95줄 : " +
              i +
              " =========> " +
              todoInputs[i] +
              ", " +
              todoInputs[i + 1]
          );
          // 근디 이번엔 왜 todoInputs가 undefined가 뜨지..??
          // ㄴ 일단 알아낸건 index 위치에 todoInput이 이미 undefined 상태였다는 거임
          // ㄴ 이거도 todoInputs 함수형 업뎃 쓰니까 일단 해결된듯??
          newInputs[j] = todoInputs[i];
          j++;
        }
      }
      // 여기서 인덱스 초기화도 같이 해줘야 함
      // 새로 나온 배열 안에 있는 각 TodoOneInput들이 갖는 index 값을 바꿔줘야 하는디.. 어캐하누??
      console.log("=========================");
      let newIndexes = [];
      for (let i = 0; i < newInputs.length; i++) {
        newIndexes[i] = i;
      }
      console.log(newIndexes);
      setIndexes(newIndexes);
      console.log(indexes);
      return newInputs;
    });
  };
  const saveTodo = () => {
    console.log("저장s");
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{ marginBottom: 40 }}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPressOut={navigateBackScreen} hitSlop={15}>
            <View style={{ width: 20, marginLeft: 5 }}>
              <AntDesign name="left" size={30} color="black" />
            </View>
          </Pressable>
          <Text style={styles.headerTitle}>Calender</Text>
          <View style={{ width: 20, marginRight: 5 }}></View>
        </View>
        <View style={styles.calView}>
          <GridCalender
            selectedDate={selectedDate}
            year={year}
            month={month}
            handleDateSelection={handleDateSelection}
            handleMonthChange={handleMonthChange}
            handleYearChange={handleYearChange}
            now={now}
          />
        </View>
        <View style={styles.contentView}>
          <ContentHeader
            selectedDate={selectedDate}
            addButtonOperate={addTodoInput}
            saveButtonOperate={saveTodo}
          />
          <TodoInputs inputs={todoInputs} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000000",
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calView: {
    flex: 3,
    marginBottom: 5,
    alignSelf: "center",
  },
  contentView: {
    flex: 3,
  },
  todoTitle: {
    fontWeight: "bold",
    color: "#745757",
    marginBottom: 20,
  },
});
