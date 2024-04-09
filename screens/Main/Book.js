import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Platform,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";
import { DateFormat, Secondaryinput } from "../../components/Inputs";
import {
  FontAwesome5,
  EvilIcons,
  Ionicons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const Book = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <SafeArrayView>
      <View className="h-full relative">
        <View className="w-full py-8 text-center flex-row relative justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center"
          >
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </TouchableOpacity>
          <Text className="text-[#FFFFFF] text-[20px]">Book A Trip</Text>
        </View>

        <View className="p-4">
          <View className="w-full flex-row justify-center space-x-4">
            <TouchableOpacity
              className="bg-[#35383F] rounded-md flex-row h-[22px] items-center space-x-1 px-2"
              onPress={() => navigation.navigate("SelectRide")}
            >
              <FontAwesome5 name="clock" size={12} color="#F4E34A" />
              <Text className="text-white p-1 text-[12px] font-trap-bold">
                Instant Ride
              </Text>
              <Ionicons name="caret-down" size={10} color="white" />
            </TouchableOpacity>
            <View className="bg-[#35383F] rounded-md flex-row items-center space-x-1 px-2">
              <FontAwesome name="arrow-right" size={12} color="#F4E34A" />
              <Text className="text-white p-1  text-[12px] font-trap-bold">
                One drop-off
              </Text>
              <Ionicons name="caret-down" size={10} color="white" />
            </View>
          </View>
          <View className="py-3 flex-row justify-center  space-x-4">
            <View className="flex justify-center items-center">
              <Image
                source={require("../../assets/fluent_my-location-20-regular (1).png")}
                className="w-[30px] h-[30px]"
              />
              <View className="w-[1.5px] h-[25px] bg-[#F4E34A] " />
              <Image
                source={require("../../assets/basil_location-solid.png")}
                className="w-[25px] h-[25px]"
              />
            </View>
            <View className="w-[70%]">
              <View className="my-2">
                <DateFormat
                  onPress={() => setShowDatePicker(true)}
                  date={date}
                  style={`bg-[#F6F6F6] h-[32px] rounded-[8px]`}
                  placeholder={"Pick Up Location"}
                  onChange={onChange}
                  iconRight={
                    <EvilIcons name="location" size={20} color="black" />
                  }
                />
              </View>

              <View className="my-2">
                <DateFormat
                  onPress={() => setShowDatePicker(true)}
                  date={date}
                  style={`bg-[#F6F6F6] h-[32px] rounded-[8px]`}
                  placeholder={"Drop off Location"}
                  onChange={onChange}
                  iconRight={
                    <EvilIcons name="location" size={20} color="black" />
                  }
                />
              </View>
            </View>

            <View className="bg-[#F4E34A] w-[24px] flex justify-center items-center h-[24px] my-2 rounded-full">
              <Entypo name="plus" size={20} color="black" />
            </View>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row space-x-2 items-center">
              <Feather name="star" size={24} color="#F4E34A" />
              <Text className="text-white font-trap-bold text-[16px]">
                Saved Places
              </Text>
            </View>
            <Feather name="arrow-right" size={24} color="white" />
          </View>

          <View className="flex-row justify-between items-center h-[50px] p-1">
            <Text className="font-trap-bold text-[16px] text-white">
              Recent Location
            </Text>
            <Text className="font-trap-bold text-[16px] text-[#F4E34A]">
              Clear all
            </Text>
          </View>

          <View className="flex space-y-3 p-2">
            <View className="flex-row space-x-4 ">
              <MaterialCommunityIcons name="history" size={24} color="white" />
              <View className="flex gap-y-2">
                <Text className="text-white text-[14px] font-trap-bold">
                  Shopping Center
                </Text>
                <Text className="text-[#B3B3B3] font-trap-light text-[12px]">
                  4140 Parker Rd
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-4 ">
              <MaterialCommunityIcons name="history" size={24} color="white" />
              <View className="flex gap-y-2">
                <Text className="text-white text-[14px] font-trap-bold">
                  Shopping Center
                </Text>
                <Text className="text-[#B3B3B3] font-trap-light text-[12px]">
                  4140 Parker Rd
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-4 ">
              <MaterialCommunityIcons name="history" size={24} color="white" />
              <View className="flex gap-y-2">
                <Text className="text-white text-[14px] font-trap-bold">
                  Shopping Center
                </Text>
                <Text className="text-[#B3B3B3] font-trap-light text-[12px]">
                  4140 Parker Rd
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Book;
