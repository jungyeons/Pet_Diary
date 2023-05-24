import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Community from "../community/Community";
import CalenderStack from "./CalenderStack";
import CheckList from "../checkList/CheckList";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name }) => {
  return <Ionicons name={name} size={24} color="black" />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Community">
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: (props) =>
            TabIcon({
              name: props.focused ? "home" : "home-outline",
            }),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderStack}
        options={{
          headerShown: false,
          tabBarIcon: (props) =>
            TabIcon({
              name: props.focused ? "calendar" : "calendar-outline",
            }),
        }}
      />
      <Tab.Screen
        name="CheckList"
        component={CheckList}
        options={{
          headerShown: false,
          tabBarIcon: (props) =>
            TabIcon({
              name: props.focused
                ? "checkmark-circle"
                : "checkmark-circle-outline",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
