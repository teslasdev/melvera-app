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

const PaymentMethod = ({ navigation }) => {
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
          <Text className="font-trap-bold text-white text-[20px]">
            Payment Methods
          </Text>
        </View>

        <View className="p-4 h-[400px]">
          <View className="w-full">
            <ScrollView
              horizontal={true}
              className="p-4 space-x-4"
              showsHorizontalScrollIndicator={false}
            >
              <View className="relative flex items-center justify-center ">
                <View className="absolute flex justify-between z-30 h-[130px] w-[80%]">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-white font-trap-bold">No Card Added</Text>
                    <Image
                  source={require("../../assets/Logo.png")}
                  className="w-[48px] h-[48px]"
                />
                  </View>
                  <View>
                    <Text className="text-white">****</Text>
                    <Text className="text-white">****-****-****-****</Text>
                  </View>
                </View>
                <Image
                  source={require("../../assets/Card surface.png")}
                  className="w-[335px] h-[185px]"
                />
                <Image
                  source={require("../../assets/Effect.png")}
                  className="absolute left-0 z-20 w-[240px] h-[185px]"
                />
              </View>
            </ScrollView>
          </View>
        </View>

        <View className="px-6 py-2">
          <Button
            text={"Add New Card"}
            style={`bg-[#FFFFFF] h-[54px] rounded-[16px] flex justify-center items-center`}
            onPress={() => navigation.navigate('AddCard') }
          />
        </View>

        <View className="px-6 py-2">
          <Button
            text={"Continue"}
            style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
          />
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default PaymentMethod;
