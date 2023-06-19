import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.boardContainer}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              메인 게시판
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.navigate("Cat")}
            >
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>고양이 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>강아지 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>조류 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>양서류 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>파충류 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="paw" size={24} color="#745454" />
              <Text style={styles.board}>분양 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons
                name="heart-plus"
                size={24}
                color="#745454"
              />
              <Text style={styles.board}>의료 정보 게시판</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boardContainer}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              기타 게시판
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons
                name="cart-heart"
                size={24}
                color="#745454"
              />
              <Text style={styles.board}>핫딜 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons
                name="wallet-travel"
                size={24}
                color="#745454"
              />
              <Text style={styles.board}>여행 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="dice-3" size={24} color="#745454" />
              <Text style={styles.board}>취미 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="food" size={24} color="#745454" />
              <Text style={styles.board}>음식 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons name="cart" size={24} color="#745454" />
              <Text style={styles.board}>중고장터</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons
                name="format-wrap-square"
                size={24}
                color="#745454"
              />
              <Text style={styles.board}>사진 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <MaterialCommunityIcons
                name="campfire"
                size={24}
                color="#745454"
              />
              <Text style={styles.board}>일상 게시판</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  board: {
    fontSize: 12,
    margin: 5,
    marginLeft: 12,
  },
  boardContainer: {
    margin: 10,
    borderRadius: 10,
    alignItems: "left",
    justifyContent: "top",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    padding: 20,
  },
});

export default HomeScreen;
