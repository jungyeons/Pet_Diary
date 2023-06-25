import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CatScreen from "./CatScreen";
import NoteDetail from "../components/community/NoteDetail";
import NoteProvider from "../components/community/contexts/NoteProvider";
const Stack = createStackNavigator();

const Community = () => {
  return (
    <NavigationContainer independent={true}>
      <NoteProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "커뮤니티" }}
          />
          <Stack.Screen
            name="Cat"
            component={CatScreen}
            options={{ title: "고양이 게시판" }}
          />
          <Stack.Screen
            name="NoteDetail"
            component={NoteDetail}
            options={{ title: "글 내용" }}
          />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
};

export default Community;
