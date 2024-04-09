import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Image } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  PasswordInput,
  PhoneInput,
  PrimaryInput,
} from "../../components/Inputs";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = ({navigation}) => {
  const [rememberMe , setRemember] = useState(false)
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-black h-screen p-4 w-full flex-1" style={[{ paddingBottom: Platform.OS === 'android' ? insets.bottom : 0 }]}>
      <SafeAreaView>
        <View className=" flex gap-y-2 h-[10vh]">
          <Text className="text-[30px] text-white font-trap-bold">Sign Up</Text>
          <Text className="text-white w-[97%] font-trap-medium">
            You may receive an SMS to verify your mobile number. Message and
            data rates apply.
          </Text>
        </View>

        <View className="flex">
          <PrimaryInput
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Full Name"}
          />

          <PhoneInput
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Enter Phone Number"}
          />
          <PasswordInput
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Password"}
          />
          <PasswordInput
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Confirm Password"}
          />
        </View>
        <View className="flex-row items-center gap-x-1 mt-3 ">
          <TouchableOpacity onPress={() => setRemember(!rememberMe)}>
            {rememberMe ? <Image source={require('../../assets/on.png')} className="w-[20px] h-[20px]" /> : <View className="w-[20px] h-[20px] border border-[#F4E34A] rounded-full"></View>}
          </TouchableOpacity>
          <View className="flex-row gap-x-1">
            <Text className="text-white font-trap-medium">I accept the</Text>
            <Text className="text-[#F4E34A] font-trap-medium">Terms</Text>
            <Text className="text-white font-trap-medium">and</Text>
            <Text className="text-[#F4E34A] font-trap-medium">Conditions</Text>
          </View>
        </View>

        <View className="mt-10">
          <Button
            text={"Sign Up"}
            style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
            onPress={() => navigation.navigate("Verification")}
          />
        </View>
        <View className="flex-row gap-x-1 justify-center items-center mt-6">
          <Text className="text-white font-trap-medium">Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-[#F4E34A] font-trap-medium">Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
