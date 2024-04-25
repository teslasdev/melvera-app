import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";

const Terms = ({ navigation }) => {
  const [rememberMe, setRemember] = useState(false);
  const handleClick = () => {
    navigation.navigate("BottomTabNavigator");
  };
  return (
    <View className="bg-black h-screen relative">
      <SafeAreaView>
        <TouchableOpacity
          className="flex-row items-center justify-between p-4"
          onPress={() => navigation.goBack()}
        >
          <View className="w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center">
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </View>
        </TouchableOpacity>
        <View className="h-[50vh] flex justify-center items-center w-full">
          <View className="h-[40%] flex items-center  w-full">
            <Image
              source={require("../../assets/Logo.png")}
              className="w-[75px] h-[57px]"
            />
          </View>
        </View>
        <View className="relative bottom-0 w-full h-[50vh]">
          <View
            className={`bg-white rounded-[30px] h-fit ${
              Platform.OS == "android" ? "min-h-[450px]" : "min-h-[600px]"
            }  absolute bottom-0 w-full p-3 items-center flex  gap-y-8`}
          >
            <Text className="text-2xl font-trap-bold">
              Terms and Privacy Notice
            </Text>

            <Image
              className="h-[117px] w-[148px]"
              source={require("../../assets/frame.png")}
            />

            <View className="flex-row items-center gap-x-1 mt-3 w-full p-4">
              <TouchableOpacity
                className="w-[10%]"
                onPress={() => setRemember(!rememberMe)}
              >
                {rememberMe ? (
                  <Image
                    source={require("../../assets/on.png")}
                    className="w-[20px] h-[20px]"
                  />
                ) : (
                  <View className="w-[20px] h-[20px] border border-[#F4E34A] rounded-full"></View>
                )}
              </TouchableOpacity>
              <View className="w-[90%]">
                <View className="w-full flex-row gap-x-2 flex-wrap">
                  <Text className="text-[#2A2A2A] font-trap-medium">
                    By Signing up.you agree to the
                  </Text>
                  <Text className="underline font-trap-medium">
                    Terms of service
                  </Text>
                  <Text className="text-[#2A2A2A] font-trap-medium">and</Text>
                  <Text className="underline font-trap-medium">
                    Privacy policy
                  </Text>
                </View>
              </View>
            </View>
            <View className="mt-10 w-full">
              {rememberMe ? (
                <Button
                  text={"Done"}
                  style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
                  onPress={handleClick}
                />
              ) : (
                <Button
                  text={"Done"}
                  style={`bg-[#F4E34A] opacity-40 h-[54px] rounded-[24px] flex justify-center items-center`}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Terms;
