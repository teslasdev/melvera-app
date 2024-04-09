import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../components/Button";

const SelectRide = ({ navigation }) => {
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

        <View className="w-full py-8 text-center rounded-b-[15px] bg-transparent flex-row relative justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center"
          >
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </TouchableOpacity>
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

        <View className="bg-[#111111] absolute bottom-0 rounded-t-[20px] flex items-center  w-full  h-fit min-h-[400px]">
          <View className="h-[5px] w-[134px] rounded-full bg-[#FFFFFF] mt-5"></View>
          <View className="flex w-full p-5 pt-6">
            <Text className="text-white font-trap-bold text-[20px] text-start">
              Select Ride
            </Text>
          </View>

          <ScrollView className="w-full px-5 space-y-5 h-[450px]">
            <TouchableOpacity
              className="border-2 border-[#F4E34A] bg-white  rounded-[16px] h-[112px] flex justify-around flex-row items-center "
              onPress={() => navigation.navigate("Trip")}
            >
              <View className="w-[134px] h-[80px]">
                <Image
                  source={require("../../assets/car-big.png")}
                  className="w-[100%] h-[100%]"
                />
              </View>

              <View className="flex gap-y-2 justify-center items-center">
                <Text className="font-trap-bold text-[#000] text-[34px]">
                  £30.00
                </Text>
                <Text className="text-[18px] font-trap-bold text-black">
                  melavera X | (4)
                </Text>
                <View className="flex-row items-center space-x-1">
                  <MaterialCommunityIcons
                    name="history"
                    size={18}
                    color="black"
                  />
                  <Text className="font-trap-bold text-[12px] text-[#000]">
                    17: 05pm | 5 mins away
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#FFFFFF]  rounded-[16px] h-[112px] flex justify-around flex-row items-center "
              onPress={() => navigation.navigate("Trip")}
            >
              <View className="w-[134px] h-[80px]">
                <Image
                  source={require("../../assets/car-big.png")}
                  className="w-[100%] h-[100%]"
                />
              </View>

              <View className="flex gap-y-2 justify-center items-center">
                <Text className="font-trap-bold text-[#B0B0B0] text-[34px]">
                  £30.00
                </Text>
                <Text className="text-[18px] font-trap-bold text-white">
                  melavera X | (4)
                </Text>
                <View className="flex-row items-center space-x-1">
                  <MaterialCommunityIcons
                    name="history"
                    size={18}
                    color="white"
                  />
                  <Text className="font-trap-bold text-[12px] text-[#B0B0B0]">
                    17: 05pm | 5 mins away
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#FFFFFF]  rounded-[16px] h-[112px] flex justify-around flex-row items-center "
              onPress={() => navigation.navigate("Trip")}
            >
              <View className="w-[134px] h-[80px]">
                <Image
                  source={require("../../assets/car-big.png")}
                  className="w-[100%] h-[100%]"
                />
              </View>

              <View className="flex gap-y-2 justify-center items-center">
                <Text className="font-trap-bold text-[#B0B0B0] text-[34px]">
                  £30.00
                </Text>
                <Text className="text-[18px] font-trap-bold text-white">
                  melavera X | (4)
                </Text>
                <View className="flex-row items-center space-x-1">
                  <MaterialCommunityIcons
                    name="history"
                    size={18}
                    color="white"
                  />
                  <Text className="font-trap-bold text-[12px] text-[#B0B0B0]">
                    17: 05pm | 5 mins away
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <View className="w-full min-h-[180px] rounded-t-[16px] border-t border-[#F4E34A]  bg-black absolute left-0 bottom-0">
            <View className="pb-4 flex-row justify-between border-b border-[#777] m-5">
              <Text className="text-white text-[24px] font-trap-bold">
                ***2345
              </Text>
              <TouchableOpacity
                onPress={() => setDropDown(!dropdown)}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
                <Image
                  source={require("../../assets/caret-right.png")}
                  className="w-[7px] h-[9px]"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-around">
              <View className="w-[70%]">
                <Button
                  text={"Book Melvera X"}
                  style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
                  onPress={() => navigation.navigate('Trip')}
                />
              </View>
              <TouchableOpacity className="border-[3px] border-[#F4E34A] rounded-[10px] w-[71px] h-[54px] bg-black flex justify-center items-center">
                <Image
                  source={require("../../assets/carbon_flight-schedule.png")}
                  className="w-[32px] h-[32px]"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default SelectRide;
