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
import Button from "../../components/Button";

const Wallet = ({ navigation }) => {
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
          <View className="w-[97px]">
            <Button
              style={`border border-[#F4E34A] h-[41px] rounded-[8px] flex justify-center items-center`}
              text={"Add Money"}
              textColor={"text-[#F4E34A] text-sm"}
              onPress={() => navigation.navigate('AddMoney')}
            />
          </View>
        </View>
        <View className="py-10 w-full flex justify-center items-center">
          <View className="flex space-y-2">
            <Text className="text-white font-trap-bold text-[20px]">
              Wallet Balance
            </Text>
            <Text className="text-white font-trap-bold text-[32px] text-center">
              £20,000
            </Text>
          </View>
        </View>

        <View className="px-6 flex-row items-center justify-between">
          <Text className="text-white text-[20px] font-trap-bold">
            Payment Method
          </Text>
          <Pressable onPress={() => navigation.navigate('PaymentMethod')} className="bg-[#F4E34A] w-[24px] flex justify-center items-center h-[24px] my-2 rounded-full">
            <Entypo name="plus" size={20} color="black" />
          </Pressable>
        </View>
        <View className="w-full px-6">
              <ScrollView
                horizontal={true}
                className="py-4 space-x-4"
                showsHorizontalScrollIndicator={false}
              >
                <View className="relative flex items-center justify-center ">
                  <View className="absolute flex justify-between z-30 h-[70px] w-[80%]">
                    <View className="flex-row justify-between items-center">
                      <Text className="text-white font-trap-bold text-sm">
                        No Card Added
                      </Text>
                      <Image
                        source={require("../../assets/Logo.png")}
                        className="w-[20px] h-[20px]"
                      />
                    </View>
                    <View>
                      <Text className="text-white text-xs">****</Text>
                      <Text className="text-white text-xs">****-****-****-****</Text>
                    </View>
                  </View>
                  <Image
                    source={require("../../assets/Card surface.png")}
                    className="w-[163px] h-[89px]"
                  />
                  
                </View>
              </ScrollView>
            </View>
        <View className="px-6 flex-row items-center justify-between py-6">
          <Text className="text-white text-[20px] font-trap-bold">
            Transaction
          </Text>
          <Text className="text-white text-[20px] font-trap-bold">
            View All
          </Text>
        </View>

        <View className="flex space-y-3">
          <View className="px-6 flex-row items-center justify-between">
            <Text className="text-white text-[20px] font-trap-bold">
              MEL24BD
            </Text>
            <Text className="text-[#B0B0B0] text-[14px] font-trap-bold">
              17:05pm | 19 Jan
            </Text>
            <Text className="text-white text-[20px] font-trap-bold">
              £20.00
            </Text>
          </View>

          <View className="px-6 flex-row items-center justify-between">
            <Text className="text-white text-[20px] font-trap-bold">
              MEL24BD
            </Text>
            <Text className="text-[#B0B0B0] text-[14px] font-trap-bold">
              17:05pm | 19 Jan
            </Text>
            <Text className="text-white text-[20px] font-trap-bold">
              £20.00
            </Text>
          </View>

          <View className="px-6 flex-row items-center justify-between">
            <Text className="text-white text-[20px] font-trap-bold">
              MEL24BD
            </Text>
            <Text className="text-[#B0B0B0] text-[14px] font-trap-bold">
              17:05pm | 19 Jan
            </Text>
            <Text className="text-white text-[20px] font-trap-bold">
              £20.00
            </Text>
          </View>

          <View className="px-6 flex-row items-center justify-between">
            <Text className="text-white text-[20px] font-trap-bold">
              MEL24BD
            </Text>
            <Text className="text-[#B0B0B0] text-[14px] font-trap-bold">
              17:05pm | 19 Jan
            </Text>
            <Text className="text-white text-[20px] font-trap-bold">
              £20.00
            </Text>
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Wallet;
