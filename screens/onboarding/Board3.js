import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Board3 = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View className="relative h-screen bg-black flex-1" style={[{ paddingBottom: Platform.OS === 'android' ? insets.bottom : 0 }]}>
      <View className="absolute w-full h-full top-0 left-0">
        <Image
          source={require("../../assets/map.png")}
          className="w-full h-full opacity-30"
          resizeMode="cover"
        />
      </View>
      <SafeAreaView>
        <View className="w-full h-[20vh] flex flex-row justify-end z-30 pr-5 pt-5">
          <TouchableOpacity onPress={() => navigation.navigate("Board2")}>
            <Text className="text-white text-xl">{""}</Text>
          </TouchableOpacity>
        </View>
        <View className="flex justify-start items-center h-[50vh]">
          <Text className="text-[#F4E34A] text-[26px] text-center w-[60%] max-w-[70%] min-w-[50%] font-trap-bold">
            Tailored for you
          </Text>
          <Text className="text-white text-center mt-3 text-[18px] w-[90%] font-trap-medium">
            We definitely had you in mind while creating this. Booking a ride
            has never been this smooth.
          </Text>
        </View>

        <View className="flex items-center h-[10vh]">
          <View className="flex-row gap-x-1 items-center">
            <View className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-[8px]" />
            <View className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-[8px]" />
            <View className="w-[17px] h-[7px] bg-[#F4E34A] rounded-[8px]"/>
          </View>
        </View>

        <View className="flex justify-center items-center">
          <View className="w-[80%]">
            <Button
              style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
              text={"Let's get started"}
              onPress={() => navigation.navigate("Board")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Board3;
