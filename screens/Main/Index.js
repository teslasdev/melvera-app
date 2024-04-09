import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image, Platform } from "react-native";
import Home from "./Home";
import Services from "./Services";
import Profile from "./Profile";
import Activity from "./Activity";

const Tab = createBottomTabNavigator();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({ route, focused }) {
  let iconSource;

  // Check the route name and set the appropriate icon
  if (route.name === "Home") {
    iconSource = focused
      ? require("../../assets/home.png")
      : require("../../assets/home1.png");
  } else if (route.name === "Services") {
    iconSource = focused
      ? require("../../assets/service.png")
      : require("../../assets/service1.png");
  } else if (route.name === "Activity") {
    iconSource = focused
      ? require("../../assets/activity.png")
      : require("../../assets/activity1.png");
  } else if (route.name === "Profile") {
    iconSource = focused
      ? require("../../assets/profile.png")
      : require("../../assets/profile1.png");
  }

  return <Image source={iconSource} style={{ width: 16, height: 16 }} />;
}

const BottomTabNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <TabBarIcon route={route} focused={focused} />;
          },
          tabBarActiveTintColor: "#F4E34A",
          tabBarStyle: {
            backgroundColor: "#111111", // Background color of the tab bar
            borderTopWidth: 2,
            borderTopColor : '#F4E34A',
            overflow: "hidden",
            height: Platform.OS === 'ios' ? 90 : 70,
          },
          tabBarLabelStyle: {
            fontSize: 12, // Font size of tab labels
          },
          tabBarTabStyle: {
            paddingTop: 5, // Padding at the top of each tab
            paddingBottom: 25, // Padding at the bottom of each tab
            height: "100%",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigator;
