import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text , TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import Button from "../../components/Button";

const Locator = () => {
  const [isLocationPermitted, setLocationPermission] = useState(null);

  useEffect(() => {
    const checkPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === "granted") {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
    };

    checkPermission();
  }, []);
  return (
    <View className="relative h-screen flex justify-center items-center">
      <View className="absolute w-full h-full top-0 left-0">
        <Image
          source={require("../../assets/mapreal.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="bg-[#111111] border border-[#ffffffa8] flex py-5 justify-center items-center w-[90%] h-[60vh] rounded-[8px]">
        <Image
          source={require("../../assets/Location.png")}
          className="w-[110px] h-[110px] mb-5"
          resizeMode="cover"
        />
        <View className="flex justify-center items-center w-[70%] mt-5 gap-y-5">
          <Text className="text-white text-3xl">Enable Your Location</Text>
          <Text className="text-[#A0A0A0] text-center">
            Allow “Melvera” to use your Location. This improves pickups, support
            and more.
          </Text>
        </View>

        <View className="w-[90%] mt-10">
          <Button
            text={"Use my Location"}
            style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
            onPress={() => navigation.navigate("Board2")}
          />
        </View>
        <View className="mt-6">
          <TouchableOpacity>
            <Text className="text-white">Skip for now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Locator;
