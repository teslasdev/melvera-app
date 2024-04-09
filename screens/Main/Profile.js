import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import SafeArrayView from "../../components/SafeArrayView";
import Button from "../../components/Button";

const Profile = ({navigation}) => {
  return (
    <SafeArrayView>
      <View className="pt-12">
        <View className="flex-row  px-6 space-x-3 items-center">
          <View className="border border-[#F4E34A] rounded-full w-[50px] h-[50px]"></View>
          <View className="flex space-y-1">
            <View className="flex-row gap-x-2 items-center">
              <Text className="text-white text-[18px] font-trap-bold">
                John Doe
              </Text>
              <Image
                source={require("../../assets/ic_round-verified.png")}
                className="w-[18px] h-[18px]"
              />
            </View>
            <TouchableOpacity>
              <Text className="underline text-[#F4E34A] text-[16px] font-trap-bold">
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full py-16 flex justify-center items-center">
          <View className="w-[80%] flex-row items-center justify-between  h-[61px]">
            <TouchableOpacity onPress={() => navigation.navigate('Wallet')} className="flex space-y-3 items-center">
              <Image
                source={require("../../assets/Wallet.png")}
                className="w-[46px] h-[46px]"
              />
              <Text className="text-white text-[18px] font-trap-bold">
                Wallet
              </Text>
            </TouchableOpacity>
            <View className="h-full bg-[#5D5D5D] w-[1px]"></View>
            <TouchableOpacity onPress={() => navigation.navigate('Trip')} className="flex space-y-3 items-center">
              <Image
                source={require("../../assets/Map (1).png")}
                className="w-[46px] h-[46px]"
              />
              <Text className="text-white text-[18px] font-trap-bold">
                My trips
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-6 border-t-[.5px] flex space-y-10 py-6 border-[#5D5D5D]">
          <TouchableOpacity onPress={() => navigation.navigate('Address')} className="flex-row items-center space-x-3">
            <View className="w-[24px] h-[24px]">
              <Image
                source={require("../../assets/ion_location-outline.png")}
                className="w-[12px] h-[16px]"
              />
            </View>
            <Text className="text-white font-trap-bold text-[18px]">
              Address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-3">
            <View className="w-[24px] h-[24px] flex">
              <Image
                source={require("../../assets/settings.png")}
                className="w-[18.78px] h-[18.05px]"
              />
            </View>
            <Text className="text-white font-trap-bold text-[18px]">
              Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-3">
            <View className="w-[24px] h-[24px]">
              <Image
                source={require("../../assets/help.png")}
                className="w-[16.8px] h-[16.8px]"
              />
            </View>
            <Text className="text-white font-trap-bold text-[18px]">
              Help and Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-3">
            <View className="w-[24px] h-[24px]">
              <Image
                source={require("../../assets/about.png")}
                className="w-[16.8px] h-[16.8px]"
              />
            </View>
            <Text className="text-white font-trap-bold text-[18px]">About</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} className="flex-row items-center space-x-3">
            <View className="w-[24px] h-[24px]">
              <Image
                source={require("../../assets/contact.png")}
                className="w-[22.29px] h-[22.29px]"
              />
            </View>
            <Text className="text-white font-trap-bold text-[18px]">
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center my-6">
          <View className="w-[80%]">
            <Button
              text={"Switch to driver"}
              style={`bg-[#F4E34A] h-[54px] rounded-[16px] flex justify-center items-center`}
            />
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
