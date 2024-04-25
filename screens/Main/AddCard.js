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

const AddCard = ({ navigation }) => {
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
            Add New Card
          </Text>
        </View>

        <View className="w-full flex-row items-center justify-center"></View>
        <View className="p-6 flex space-y-8 h-[450px]">
          <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[18px]`}
              placeholder={`Name on card`}
              label={"Name on card"}
              value={"John Doe"}
            />
          </View>
          <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[18px]`}
              placeholder={`Card Number`}
              label={"Card Number"}
              value={"3423453324546422"}
            />
          </View>
          <View className="flex-row justify-between">
            <View className="w-[45%]">
              <PrimaryInput
                style={`h-[60px]  border border-white rounded-[18px]`}
                placeholder={`Card Number`}
                label={"Cvv"}
                secureTextEntry={true}
                value={"234"}
                
              />
            </View>
            <View className="w-[45%]">
              <PrimaryInput
                style={`h-[60px] border border-white rounded-[18px]`}
                placeholder={`Card Number`}
                label={"Expiry Date"}
                value={"12/24"}
              />
            </View>
          </View>
        </View>

        <View className="p-6">
          <Button
            text={"Add Card"}
            style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
          />
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default AddCard;
