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

const ContactUs = ({ navigation }) => {
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
            Contact Us
          </Text>
        </View>

        <View className="w-full flex-row items-center justify-center">
          <Text className="text-white text-[16px] font-trap-medium">
            Support : Support@Melvera.com
          </Text>
        </View>
        <View className="p-6 flex space-y-8">
          <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[8px]`}
              placeholder={`Name`}
            />
          </View>
         <View>
         
          <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[8px]`}
              placeholder={`Email`}
            />
          </View>
          <PhoneInput
            style={`border border-[#D1D1D6] h-[60px] rounded-[8px]`}
            placeholder={"Your Mobile number"}
          />
         </View>
         <View>
            <PrimaryInput
              style={`h-[60px] w-full border border-white rounded-[8px]`}
              placeholder={`Select your query`}
            />
          </View>
          <View>
            <PrimaryInput
              style={`h-[100px] w-full border border-white rounded-[8px]`}
              placeholder={`Write your text`}
            />
          </View>
        </View>

        <View className="p-6">
        <Button
                  text={"Contact"}
                  style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
                />
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default ContactUs;
