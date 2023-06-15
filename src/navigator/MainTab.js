/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Community from "../community/Community";
import Calender from "../calender/Calender";
import CheckList from "../checkList/CheckList";
import PropTypes from "prop-types";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name }) => {
  return <Ionicons name={name} size={24} color="black" />;
};

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

const TabNavigator = ({ route }) => {
  const [loginClient, setLoginClient] = useState({});
  useEffect(() => {
    if (route.params != undefined) {
      const client = route.params.membership;
      alert(client.name + "님 환영합니다");
      setLoginClient(client);
      console.log(client);
    }
  }, [route.params]);
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
        component={Calender}
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

TabNavigator.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TabNavigator;
