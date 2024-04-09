import React from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";

const SafeArrayView = ({ children }) => {
  return (
    <View
      className="relative h-screen  bg-[#111111] flex-1"
      style={{
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SafeArrayView;
