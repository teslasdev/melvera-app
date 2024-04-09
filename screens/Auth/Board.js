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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Board = ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-white text-xl font-trap-medium">Skip</Text>
          </TouchableOpacity>
        </View>

        <View className="flex justify-start items-center h-[50vh]">
          <Text className="text-white text-center mt-3 text-[18px] w-[90%] uppercase font-trap-bold">
            We can add the illustration here
          </Text>
        </View>

        <View className="flex justify-center items-center gap-y-4">
          <View className="w-[80%]">
            <Button
              style={`border border-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
              text={"Sign In"}
              onPress={() => navigation.navigate("Login")}
              textColor={"text-[#F4E34A]"}
            />
          </View>
          <View className="w-[80%]">
            <Button
              style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
              text={"Sign Up"}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Board;
