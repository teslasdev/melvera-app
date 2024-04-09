import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  Image,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";
import { TouchableOpacity } from "react-native-gesture-handler";

const Services = ({navigation}) => {
  return (
    <SafeArrayView>
      <View className="h-full">
        <View className="w-full py-8 text-center flex justify-center items-center">
          <Text className="text-[#FFFFFF] text-[20px]">Services</Text>
        </View>

        <View>
          <View className="flex-row justify-between p-4">
            <View className="w-[137px] h-[71px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>
            <View className="w-[60%] flex gap-y-2">
              <Text className="font-trap-bold text-[20px] text-white">
                Trip
              </Text>
              <Text className="font-trap-regular text-[12px] text-white">
                Embark on a journey to remember with melavera
              </Text>
              <TouchableOpacity className="border border-[#F4E34A] rounded-[8px]  flex-row h-[32px] justify-center items-center" onPress={() => navigation.navigate('Book')}>
                <Text className="text-[12px] font-trap-medium text-[#F4E34A]">
                  Book A trip
                </Text>
                <Image
                  source={require("../../assets/memory_arrow-up.png")}
                  className="w-[20px] h-[16px]"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between items-center p-4">
          <View className="w-[116px] h-[124px]">
            <Image
              source={require("../../assets/3dicons.png")}
              className="w-[100%] h-[100%]"
            />
          </View>
          <View className="w-[60%] flex gap-y-4">
            <Text className="font-trap-bold text-[20px] text-white">Reservation</Text>
            <Text className="font-trap-regular text-[12px] text-white">
              Reserve your trip today
            </Text>
            <TouchableOpacity className="border border-[#F4E34A] rounded-[8px]  flex-row h-[32px] justify-center items-center" onPress={() => navigation.navigate('Reservation')}>
              <Text className="text-[12px] font-trap-medium text-[#F4E34A]">Reserve A trip</Text>
              <Image
                source={require("../../assets/memory_arrow-up.png")}
                className="w-[20px] h-[16px]"
              />
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Services;
