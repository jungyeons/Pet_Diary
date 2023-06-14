import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./authenticate/Login";
import Membership from "./authenticate/Join";
import MainTab from "./navigator/MainTab";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Membership"
          component={Membership}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            headerBackTitleVisible: false,
            // headerShown: true, // 임시 - 로그인 구현후 지울 예정
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
