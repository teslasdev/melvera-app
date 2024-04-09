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

const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [rememberMe , setRemember] = useState(false)
  return (
    <View className="bg-black h-screen p-4 w-full flex-1" style={[{ paddingBottom: Platform.OS === 'android' ? insets.bottom : 0 }]}>
      <SafeAreaView>
        <View className=" flex gap-y-2 h-[10vh]">
          <Text className="text-[30px] text-white font-trap-bold">Sign In</Text>
          <Text className="text-white font-trap-regular">
            Sign in now and enjoy seamless rides
          </Text>
        </View>

        <View className="flex">
          <PhoneInput
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Enter Phone Number"}
          />
          <PasswordInput
            secureTextEntry={true}
            style={`border border-[#D1D1D6] h-[54px] rounded-[24px] my-2`}
            placeholder={"Password"}
          />
        </View>
        <View className="flex-row items-center gap-x-1 mt-3  w-full">
          <TouchableOpacity onPress={() => setRemember(!rememberMe)}>
            {rememberMe ? <Image source={require('../../assets/on.png')} className="w-[20px] h-[20px]" /> : <View className="w-[20px] h-[20px] border border-[#F4E34A] rounded-full"></View>}
          </TouchableOpacity>
          <View className="flex-row  justify-between w-[90%]">
            <Text className="text-white font-trap-medium">Remember Me</Text>
            <TouchableOpacity className="">
              <Text className="text-[#F4E34A] font-trap-medium underline">Forgot Password</Text>
            </TouchableOpacity>
            {/*<Text className="text-white">and</Text>
            <Text className="text-[#F4E34A]">Conditions</Text> */}
          </View>
        </View>

        <View className="mt-10">
          <Button
            text={"Sign In"}
            style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
            onPress={() => navigation.navigate("Verification")}
          />
        </View>
        <View className="flex-row gap-x-1 justify-center items-center mt-6">
          <Text className="text-white font-trap-medium">Do not have any account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-[#F4E34A] font-trap-medium">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
