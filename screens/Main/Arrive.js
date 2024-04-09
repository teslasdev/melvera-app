import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import SafeArrayView from "../../components/SafeArrayView";

import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";

const Arrive = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <SafeArrayView>
      <View className="h-full relative">
        <View className="absolute w-full h-full top-0 left-0">
          <Image
            source={require("../../assets/bgLayer.png")}
            className="w-full h-full opacity-20"
            resizeMode="cover"
          />
        </View>
        <View className="absolute w-[80%] h-[44px] flex-row space-x-2 justify-center items-center bg-[#F4E34A] top-[15%] rounded-[8px] left-[10%]">
          <Image
            source={require("../../assets/fluent_alert-on-16-regular.png")}
            className="w-[15px] h-[20px]"
          />
          <Text className="text-[14px] font-trap-bold">
            Hurray!!! Your Cab has arrived
          </Text>
        </View>

        <View className="w-full py-8 text-center rounded-b-[15px] bg-[#111111] flex-row relative justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center"
          >
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </TouchableOpacity>
          <Text className="text-[#FFFFFF] text-[20px]">Arrival</Text>
        </View>

        <View className="relative p-5 flex justify-center min-h-[100px] items-center mt-10">
          <View className="absolute top-[90%] left-[20%]">
            <Image
              source={require("../../assets/car.png")}
              className="w-[80px] h-[75px]"
            />
          </View>
          <View className="absolute top-[70%] right-[20%]">
            <Image
              source={require("../../assets/car.png")}
              className="w-[80px] h-[75px]"
            />
          </View>
          <View className="absolute top-[80%] right-[40%]">
            <Image
              source={require("../../assets/car.png")}
              className="w-[80px] h-[75px]"
            />
          </View>
        </View>

        <View className="bg-[#111111] absolute bottom-0 rounded-t-[20px] flex items-center  w-full p-3 h-fit min-h-[400px]">
          <View className="h-[5px] w-[134px] rounded-full bg-[#FFFFFF] mt-5"></View>
          <View className="px-2 flex-row space-x-5 justify-center items-center h-[70px] w-full rounded-[8px] my-8">
            <View className="flex-row gap-x-4 items-center">
              <View className="gap-y-2">
                <Text className="text-white font-trap-bold text-[18px]">
                  KDFD45DS9
                </Text>
                <Text className="text-white font-trap-bold text-[12px]">
                  Toyota Camery | Black
                </Text>
              </View>
            </View>
            <View className="">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[146px] h-[86px]"
              />
            </View>
          </View>

          <View className="h-[100px] w-full p-4 flex-row space-x-4 items-center justify-between">
            <View className="flex-row items-center space-x-4">
              <View className="relative w-[50px] h-[50px] rounded-[8px]">
                <Image
                  source={require("../../assets/Rectangle 3466.png")}
                  className="w-[50px] h-[50px]"
                  resizeMode="cover"
                />
                <View className="bg-[#111111] rounded-[50px] flex-row  justify-center items-center gap-x-1 w-[38px] h-[11px] absolute -bottom-1 left-[20%]">
                  <Text className="text-[10px] font-trap-regular text-white">
                    4.9
                  </Text>
                  <AntDesign name="star" size={8} color="#FBC02D" />
                </View>
              </View>
              <View className="gap-y-2">
                <Text className="text-white font-trap-bold text-[18px]">
                  James NewTon
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-3 items-center">
              <View className="w-[30px] h-[30px] flex justify-center items-center bg-black rounded-full">
                <Image
                  source={require("../../assets/tdesign_call-1.png")}
                  className="w-[18px] h-[18px]"
                  resizeMode="cover"
                />
              </View>
              <View className="relative w-[30px] h-[30px] flex justify-center items-center bg-black rounded-full">
                <View className="w-[10px] flex justify-center items-center h-[10px] bg-[#ED4343] rounded-full absolute -top-1 -right-1">
                  <Text className="text-[10px] text-white">1</Text>
                </View>
                <Image
                  source={require("../../assets/ant-design_message-outlined.png")}
                  className="w-[18px] h-[18px]"
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>

          <View className="bg-white h-[107px] w-full rounded-[8px] px-2">
            <View className="flex-row items-center space-x-4">
              <View className="flex space-y-2 items-center">
                <View className="w-[15px] h-[15px] bg-[#000] rounded-full" />
                <View className="w-[2px] h-[25px] bg-black " />
                <Image
                  source={require("../../assets/location-pointer.png")}
                  className="w-[17.8px] h-[17.8px]"
                />
              </View>
              <View className="w-[90%]">
                <View className="border-b border-[#5d5d5d3b] py-4">
                  <Text className="text-[#5D5D5D] text-[14px] font-trap-bold">
                    Pick Up Location
                  </Text>
                  <Text className="text-[#5D5D5D] text-[14px] font-trap-medium">
                    Your current location
                  </Text>
                </View>
                <View className="py-4">
                  <Text className="text-[#5D5D5D] text-[14px] font-trap-bold">
                    Drop Off Location
                  </Text>
                  <Text className="text-[#5D5D5D] text-[14px] font-trap-medium">
                    4140 Parker, Allentown, New Maxico 31124
                  </Text>
                </View>
              </View>
            </View>
          </View>

       

          <View className="w-full h-[50px] flex-row items-center justify-around">
            
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Arrive;
