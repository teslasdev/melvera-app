import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";
import { Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import { PrimaryInput } from "../../components/Inputs";

const Address = ({ navigation }) => {
   const [add , setAdd] = useState(false)
  return (
    <SafeArrayView>
      <View className="h-full relative">
        <View className="w-full py-10 text-center flex-row relative justify-end px-6 items-center">
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

        <View className="px-6 flex-row items-center justify-between">
          <Text className="text-white text-[20px] font-trap-bold">
            Saved Address
          </Text>
          <Pressable onPress={() => setAdd(true)} className="bg-[#F4E34A] w-[24px] flex justify-center items-center h-[24px] my-2 rounded-full">
            <Entypo name="plus" size={20} color="black" />
          </Pressable>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="p-6 flex-row space-x-6"
          >
            <View className="w-[148px] h-[147px] rounded-[8px] flex justify-between bg-black p-4">
              <View className="flex-row justify-between">
                <View className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
                  <Image
                    source={require("../../assets/home-location.png")}
                    className="w-[24px] h-[24px]"
                  />
                </View>
                <Image
                  source={require("../../assets/Mask group.png")}
                  className="w-[12.76px] h-[13.4px]"
                />
              </View>
              <View>
                <Text className="text-white font-trap-medium text-[16px]">
                  Home
                </Text>
              </View>
            </View>
            <View className="w-[148px] h-[147px] rounded-[8px] bg-white flex justify-between p-4">
              <View className="flex-row justify-between">
                <View className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
                  <Image
                    source={require("../../assets/heroicons_building-office-2-16-solid.png")}
                    className="w-[24px] h-[24px]"
                  />
                </View>
                <Image
                  source={require("../../assets/Mask group.png")}
                  className="w-[12.76px] h-[13.4px]"
                />
              </View>
              <View>
                <Text className="text-black font-trap-medium text-[16px]">
                  Office
                </Text>
              </View>
            </View>
            <View className="w-[148px] h-[147px] rounded-[8px] bg-white flex justify-between p-4">
              <View className="flex-row justify-between">
                <View className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
                  <Image
                    source={require("../../assets/heroicons_building-office-2-16-solid.png")}
                    className="w-[24px] h-[24px]"
                  />
                </View>
                <Image
                  source={require("../../assets/Mask group.png")}
                  className="w-[12.76px] h-[13.4px]"
                />
              </View>
              <View>
                <Text className="text-black font-trap-medium text-[16px]">
                  Office
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="px-6 flex-row items-center justify-between py-6">
          <Text className="text-white text-[20px] font-trap-bold">
            Recent Location
          </Text>
        </View>

        <View className="p-6">
          <View className="w-full h-[97px] p-4 bg-white rounded-[8px]">
            <View className="py-3 flex space-y-1">
              <Text className="text-[#5D5D5D] text-[14px] font-trap-bold">
                2972 westhimer Rd. Santa Ana, illionis 85496
              </Text>
              <Text className="text-[#5D5D5D] text-[14px] font-trap-medium">
                Mrred#dfewr
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={add}>
        <View className="bg-[#000000da] flex-1 justify-end items-center">
          <View className="min-h-[54%] rounded-t-[24px] bg-[#111111] w-full">
            <View className="relative flex justify-center items-center w-full">
              <View className="h-[5px] w-[134px] rounded-full bg-[#FFFFFF] mt-5"></View>
              <Pressable onPress={() => setAdd(false)} className="absolute right-3 top-3">
                <Entypo name="cross" size={24} color="gray" />
              </Pressable>
            </View>

            <View className="flex justify-center items-center w-full py-8 border-b border-white">
              <Text className="text-white text-[20px] font-trap-medium">
                Address Details
              </Text>
            </View>
            <View className="p-4 py-6 flex">
              <PrimaryInput
                style={`h-[60px] w-full border border-white rounded-[8px]`}
                placeholder={`Name of Address`}
              />
              <PrimaryInput
                style={`h-[120px] w-full border border-white rounded-[8px] mt-4`}
                placeholder={`Address details`}
              />
              <View className="w-[100%] mt-6">
                <Button
                  text={"Save Address"}
                  style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Address;
