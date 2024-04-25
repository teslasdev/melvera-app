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
import { PhoneInput, PrimaryInput } from "../../components/Inputs";

const AddMoney = ({ navigation }) => {
  const [add, setAdd] = useState(false);
  return (
    <SafeArrayView>
      <View className="h-full relative">
        <View className="w-full py-10 text-center flex-row relative justify-center px-6 items-center">
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

        <View className="w-full flex-row items-center justify-center"></View>
        <View className="p-6 flex space-y-8 h-[450px]">
          <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[10px]`}
              placeholder={`Enter Amount`}
            />
          </View>
          <View>
            <Text className="text-white font-trap-bold text-[18px]">
              Select Card
            </Text>
            <View className="w-full">
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
          </View>
        </View>

        <View className="p-6">
          <Button
            text={"Confirm"}
            style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
          />
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default AddMoney;
