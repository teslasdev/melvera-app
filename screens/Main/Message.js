import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";

import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";

const Message = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <SafeArrayView>
      <View className="h-full bg-black relative">
        <View className="w-full py-4 text-center rounded-b-[15px] bg-[#111111] flex-row absolute z-50  justify-around pl-8 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center"
          >
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </TouchableOpacity>
          <View>
            <View className="flex-row justify-center items-center gap-x-2">
              <View className="relative w-[40px] h-[40px] rounded-full bg-white">
                <Image
                  source={require("../../assets/Rectangle 3466.png")}
                  className="w-[40px] h-[40px]"
                  resizeMode="cover"
                />
              </View>
              <View className="gap-y-2">
                <Text className="text-white font-trap-bold text-[14px]">
                  James NewTon
                </Text>
                <View className="flex-row gap-x-2 items-center">
                  <AntDesign name="star" size={9} color="#FBC02D" />
                  <Text className="text-white font-trap-bold text-[12px]">
                    4.9 | (459 reviews)
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="w-[10%] h-[17.39px]">
            <Image
              source={require("../../assets/Audio Call.png")}
              resizeMode="contain"
              className="h-full w-full"
            />
          </View>
        </View>
        <View className="relative flex-1 h-full w-full">
          <View className="h-[85vh] relative">
            <ScrollView
              className="h-full w-full p-4"
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-end",
                gap: 20,
              }}
            >
              <View className="w-full flex items-start">
                <View className="bg-[#FDF073] relative rounded-md p-3 w-fit max-w-[70%]">
                  <Text className="font-trap-medium">
                    Helllo , Where are you , I need you to pick me up at my
                    office now , please come over
                  </Text>
                  <View className="flex items-end mt-3">
                    <Text className="font-trap-medium">12:02</Text>
                  </View>
                  <View className="absolute -bottom-[3px] -left-[3px]">
                    <Image
                      source={require("../../assets/cutter-yellow.png")}
                      className="w-[11px] h-[20px]"
                    />
                  </View>
                </View>
              </View>

              <View className="w-full flex items-end">
                <View className="bg-[#FFFFFF] rounded-md p-3 w-fit max-w-[70%]">
                  <Text className="font-trap-medium">
                    Ok James, Coming right away
                  </Text>
                  <View className="flex items-end mt-3">
                    <Text className="font-trap-medium">12:02</Text>
                  </View>
                  <View className="absolute -bottom-[3px] -right-[3px]">
                    <Image
                      source={require("../../assets/cutter-white.png")}
                      className="w-[11px] h-[20px]"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View className="absolute flex-row justify-center gap-x-4 bottom-0 bg-[#171717] w-full h-[71px] flex  p-3">
            <View className="flex-row space-x-3 h-[27px] items-center">
              <Image
                source={require("../../assets/Plus.png")}
                className="w-[22.36px] h-[22.36px]"
              />
            </View>
            <View className="w-[70%]">
              <TextInput className="bg-[#2C2C2E] h-[27px] rounded-full" />
            </View>
            <View className="flex-row space-x-3 h-[27px] items-center">
              <Image
                source={require("../../assets/Camera.png")}
                className="w-[22.36px] h-[22.36px]"
              />
              <Image
                source={require("../../assets/Microphone-2.png")}
                className="w-[15px] h-[21.96px]"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Message;
