import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { useState } from "react";
import SafeArrayView from "../../components/SafeArrayView";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Activity = () => {
   const navigation = useNavigation()
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const FirstRoute = () => {
    return (
      <View className="my-6 flex-1 space-y-4">
        <View className="border border-[#FFFFFF] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
          <View className="px-4">
            <Text className="text-white text-[18px] font-trap-bold">
              You have no upcoming trips
            </Text>
            <TouchableOpacity
              className="flex-row h-[40px] items-center gap-x-2"
              onPress={() => navigation.navigate("Reservation")}
            >
              <Text className="text-[15px] font-trap-regular text-[#F4E34A]">
                Reserve A trip
              </Text>
              <Image
                source={require("../../assets/memory_arrow-up.png")}
                className="w-[20px] h-[16px]"
              />
            </TouchableOpacity>
          </View>
          <View className="w-[63px] h-[67px]">
            <Image
              source={require("../../assets/3dicons.png")}
              className="w-[100%] h-[100%]"
            />
          </View>
        </View>

        <ScrollView
          className="flex gap-y-4"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center " onPress={() => navigation.navigate('Trip')}>
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05 pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center " onPress={() => navigation.navigate('Arrive')}>
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </TouchableOpacity>

   
        </ScrollView>
      </View>
    );
  };

  const SecondRoute = () => {
    return (
      <View className="my-6 flex-1 space-y-4">
        <ScrollView
          className="flex gap-y-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[76px] h-[45px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>

            <TouchableOpacity className="flex-row  gap-x-3 h-[36px] bg-white flex justify-center items-center w-[112px] rounded-[26px]">
              <Text className="text-[16px] font-trap-bold">Rebook</Text>
              <View className="w-[24px] flex justify-center items-center h-[24px] bg-[#35383F] rounded-full">
                <FontAwesome name="refresh" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[76px] h-[45px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>

            <TouchableOpacity className="flex-row  gap-x-3 h-[36px] bg-white flex justify-center items-center w-[112px] rounded-[26px]">
              <Text className="text-[16px] font-trap-bold">Rebook</Text>
              <View className="w-[24px] flex justify-center items-center h-[24px] bg-[#35383F] rounded-full">
                <FontAwesome name="refresh" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[76px] h-[45px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>

            <TouchableOpacity className="flex-row  gap-x-3 h-[36px] bg-white flex justify-center items-center w-[112px] rounded-[26px]">
              <Text className="text-[16px] font-trap-bold">Rebook</Text>
              <View className="w-[24px] flex justify-center items-center h-[24px] bg-[#35383F] rounded-full">
                <FontAwesome name="refresh" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[76px] h-[45px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>

            <TouchableOpacity className="flex-row  gap-x-3 h-[36px] bg-white flex justify-center items-center w-[112px] rounded-[26px]">
              <Text className="text-[16px] font-trap-bold">Rebook</Text>
              <View className="w-[24px] flex justify-center items-center h-[24px] bg-[#35383F] rounded-full">
                <FontAwesome name="refresh" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[76px] h-[45px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>

            <TouchableOpacity className="flex-row  gap-x-3 h-[36px] bg-white flex justify-center items-center w-[112px] rounded-[26px]">
              <Text className="text-[16px] font-trap-bold">Rebook</Text>
              <View className="w-[24px] flex justify-center items-center h-[24px] bg-[#35383F] rounded-full">
                <FontAwesome name="refresh" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  const ThirdRoute = () => {
    return (
      <View className="my-6 flex-1 space-y-4">
        <ScrollView
          className="flex gap-y-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </View>

          <View className="bg-[#35383F] rounded-[8px] h-[110px] flex justify-around flex-row items-center ">
            <View className="w-[134px] h-[80px]">
              <Image
                source={require("../../assets/car-big.png")}
                className="w-[100%] h-[100%]"
              />
            </View>

            <View className="flex gap-y-1">
              <Text className="text-[16px] font-trap-bold text-white">
                MEL24BD
              </Text>
              <View>
                <Text className="font-trap-bold text-[#B0B0B0]">
                  17:05pm | 19 Jan{" "}
                </Text>
              </View>
              <Text className="font-trap-bold text-[#B0B0B0]">£30</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  const [routes] = useState([
    { key: "first", title: "Upcoming" },
    { key: "second", title: "Completed" },
    { key: "third", title: "Cancelled" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#FFFFFF",
        height: "100%",
        borderRadius: 10,
      }}
      style={{
        backgroundColor: "#151515",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
      }}
      inactiveColor="#B4B4B4"
      activeColor="#000"
      labelStyle={{
        textTransform: "capitalize",
        fontFamily: "Trap-regular",
        fontWeight: 300,
      }}
      tabStyle={{}}
    />
  );
  return (
    <SafeArrayView>
      <View className="h-full relative p-4">
        <View className="flex-row justify-between h-[50px] bg-black p-2">
          <Text className="font-trap-bold text-white text-[20px]">
            Activity
          </Text>
          <TouchableOpacity>
            <Text className="font-trap-bold text-white text-[16px]">
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className={`relative ${
            Platform.OS == "ios" ? "h-[78vh]" : "h-[85vh] pb-4"
          }`}
        >
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={({ route }) => {
              switch (route.key) {
                case "first":
                  return FirstRoute();
                case "second":
                  return SecondRoute();
                case "third":
                  return ThirdRoute();
                default:
                  return null;
              }
            }}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Activity;
