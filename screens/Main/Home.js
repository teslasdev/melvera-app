import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Secondaryinput } from "../../components/Inputs";

const Home = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <View
      className="relative h-screen  bg-[#000] flex-1"
      style={{
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
      }}
    >
      <View className="absolute w-full h-full top-0 left-0">
        <Image
          source={require("../../assets/bgLayer.png")}
          className="w-full h-full opacity-20"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1">
        <View className="h-screen flex-1 z-50 relative">
          <View className="mt-5">
            <View className="w-full bg-[#3b393941] h-[118px] flex justify-between  p-3">
              <Secondaryinput
                style={`bg-[#F6F6F6]  h-[35px] rounded-[8px]`}
                placeholder={"Enter Pickup Location"}
                imageLeft={require("../../assets/micspark.png")}
                imageRight={require("../../assets/majesticons_search.png")}
              />
              <Secondaryinput
                style={`bg-[#F6F6F6] h-[35px] rounded-[8px]`}
                placeholder={"Enter Drop off location"}
                imageRight={require("../../assets/majesticons_search.png")}
              />
            </View>
          </View>

          <View className="relative p-5 flex justify-center items-center mt-10">
            <Image
              source={require("../../assets/place.png")}
              className="w-[156px] h-[158px]"
            />
            <View className="absolute top-[30%] left-[20%]">
              <Image
                source={require("../../assets/car.png")}
                className="w-[80px] h-[75px]"
              />
            </View>
            <View className="absolute top-1 right-[30%]">
              <Image
                source={require("../../assets/car.png")}
                className="w-[80px] h-[75px]"
              />
            </View>
            <View className="absolute top-[80%] right-[40%]">
              <Image
                source={require("../../assets/car.png")}
                className="w-[80px] h-[75px]"
              />
            </View>
          </View>

          <View className="bg-[#111111] absolute bottom-0 rounded-t-[20px] flex items-center p-3 px-5 h-fit min-h-[100px]">
            <View className="h-[5px] w-[134px] rounded-full bg-[#FFFFFF] mt-5"></View>
            <View className="flex-row py-5 items-center justify-between  w-full">
              <View className="w-[199px]">
                <Text className="text-[#FFFFFF] leading-7 text-[22px] font-trap-light">
                  Hello, I'm Melvera.
                </Text>
                <Text className="text-[#FFFFFF] leading-7 text-[22px] font-trap-light">
                  Let me book you a cab.
                </Text>
                <Text className="text-[#FFFFFF] leading-7 text-[22px] font-trap-light">
                  Speak Now
                </Text>
              </View>
              <View className="border-[5px] flex justify-center items-center rounded-full border-[#ffed4756] w-[99px] h-[99px]">
                <Image
                  source={require("../../assets/eva_mic-outline.png")}
                  className="w-[60px] h-[60px]"
                />
              </View>
            </View>

            <View className="relative flex-row justify-between  w-full bg-[#F4E34A] h-[127px] rounded-[8px] my-4">
              <View className="h-full flex justify-center px-4 gap-y-1">
                <Text className="text-[16px] font-trap-bold">
                  How to request a ride
                </Text>
                <TouchableOpacity className="flex-row gap-x-3 items-center">
                  <Text className="font-trap-bold">Request a ride</Text>
                  <Image
                    source={require("../../assets/arrow-right.png")}
                    className="w-[20px] h-[16px]"
                  />
                </TouchableOpacity>
              </View>
              <View className="w-[124px] h-full">
                <Image
                  source={require("../../assets/place2.png")}
                  className="w-[100%] h-[100%] object-cntain"
                />
              </View>

              <View className="absolute -right-5 w-[130px] h-[86px] top-[20%]">
                <Image
                  source={require("../../assets/car-big.png")}
                  className="w-[100%] h-[100%]"
                />
              </View>
            </View>
            <View className="pb-1 flex-row justify-between w-full">
              <Text className="text-white font-trap-bold text-xl">
                Recent Location
              </Text>
              <TouchableOpacity
                onPress={() => setDropDown(!dropdown)}
                className="w-[24px] h-[24px] flex justify-center items-center"
              >
                {!dropdown ? (
                  <Image
                    source={require("../../assets/caret-right.png")}
                    className="w-[7px] h-[9px]"
                  />
                ) : (
                  <Image
                    source={require("../../assets/caret-down.png")}
                    className="w-[15px] h-[15px]"
                  />
                )}
              </TouchableOpacity>
            </View>
            {dropdown && (
              <View className="w-full m-2 flex gap-y-3">
                <View>
                  <View className="flex gap-y-1">
                    <Text className="text-white text-[14px] font-trap-bold">
                      Shopping Center
                    </Text>
                    <Text className="text-[#B3B3B3] font-trap-light text-[12px]">
                      4140 Parker Rd
                    </Text>
                  </View>
                </View>
                <View>
                  <View className="flex gap-y-1">
                    <Text className="text-white text-[14px] font-trap-bold">
                      Shopping Center
                    </Text>
                    <Text className="text-[#B3B3B3] font-trap-light text-[12px]">
                      4140 Parker Rd
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
