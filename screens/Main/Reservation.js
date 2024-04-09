import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Platform,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import SafeArrayView from "../../components/SafeArrayView";
import { DateFormat, Secondaryinput } from "../../components/Inputs";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Button from "../../components/Button";

const Reservation = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <SafeArrayView>
      <View className="h-full relative">
        <View className="w-full py-8 text-center flex-row relative justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center"
          >
            <Image
              source={require("../../assets/arrow-back.png")}
              className="w-[15px] h-[20px]"
            />
          </TouchableOpacity>
          <Text className="text-[#FFFFFF] text-[20px]">Trip Reservation</Text>
        </View>

        <View className="p-4">
          <Text className="text-[#FFFFFF] text-[20px]">Select Your Ride</Text>
          <View className="py-3">
            <ScrollView horizontal={true} className="gap-x-6">
              <View className="w-[164px] h-[131px] flex justify-center items-center gap-y-1 my-3 bg-[#FFD8D8] rounded-[8px]">
                <View className="w-[137px] h-[88px]">
                  <Image
                    source={require("../../assets/car-big.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View>
                  <Text className="font-trap-bold">Melvera X | 👤 4</Text>
                </View>
              </View>

              <View className="w-[164px] h-[131px] flex justify-center items-center gap-y-1 my-3 bg-[#D8FFDC] rounded-[8px]">
                <View className="w-[137px] h-[88px]">
                  <Image
                    source={require("../../assets/car-big.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View>
                  <Text className="font-trap-bold">Melvera X | 👤 4</Text>
                </View>
              </View>

              <View className="w-[164px] h-[131px] flex justify-center items-center gap-y-1 my-3 bg-[#D8E3FF] rounded-[8px]">
                <View className="w-[137px] h-[88px]">
                  <Image
                    source={require("../../assets/car-big.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View>
                  <Text className="font-trap-bold">Melvera X | 👤 4</Text>
                </View>
              </View>

              <View className="w-[164px] h-[131px] flex justify-center items-center gap-y-1 my-3 bg-[#F7FFD8] rounded-[8px]">
                <View className="w-[137px] h-[88px]">
                  <Image
                    source={require("../../assets/car-big.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View>
                  <Text className="font-trap-bold">Melvera X | 👤 4</Text>
                </View>
              </View>
            </ScrollView>

            <View className="my-3">
              <DateFormat
                onPress={() => setShowDatePicker(true)}
                date={date}
                style={`bg-[#F6F6F6] h-[48px] rounded-[8px]`}
                placeholder={"Select Date"}
                onChange={onChange}
                iconLeft={
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                }
              />
            </View>

            <View className="my-3">
              <DateFormat
                onPress={() => setShowDatePicker(true)}
                date={date}
                style={`bg-[#F6F6F6] h-[48px] rounded-[8px]`}
                placeholder={"Select Time"}
                onChange={onChange}
                iconLeft={
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                }
              />
            </View>

            <View className="my-3">
              <DateFormat
                onPress={() => setShowDatePicker(true)}
                date={date}
                style={`bg-[#F6F6F6] h-[48px] rounded-[8px]`}
                placeholder={"Pick Up Location"}
                onChange={onChange}
                iconRight={
                  <EvilIcons name="location" size={20} color="black" />
                }
              />
            </View>

            <View className="my-5">
              <DateFormat
                onPress={() => setShowDatePicker(true)}
                date={date}
                style={`bg-[#F6F6F6] h-[48px] rounded-[8px]`}
                placeholder={"Drop off Location"}
                onChange={onChange}
                iconRight={
                  <EvilIcons name="location" size={20} color="black" />
                }
              />
            </View>
          </View>

          <Modal
            visible={showDatePicker}
            animationType="slide"
            transparent={true}
          >
            <View className="bg-transparent flex-1 w-full flex justify-end h-full">
              <View className="bg-[#111111]">
                <View className="w-full items-end p-4">
                  <Pressable
                    className="bg-[#F4E34A] flex w-[50px] justify-center items-center py-2 rounded-[4px]"
                    onPress={() => setShowDatePicker(false)}
                  >
                    <Text>Select</Text>
                  </Pressable>
                </View>
                <View>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    onChange={onChange}
                    className="bg-transparent"
                    display="spinner"
                    positiveButton={{ label: "OK", textColor: "green" }}
                    themeVariant="dark"
                    minimumDate={new Date(moment().format("YYYY-MM-DD"))}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View className="absolute bottom-0 w-full  h-[100px] px-3 flex-row justify-between">
          <View className="w-[45%]">
            <Button
              text={"Cancel"}
              textColor={`text-white`}
              style={`border border-[#FFFFFF] h-[54px] rounded-[24px] flex justify-center items-center`}
            />
          </View>
          <View className="w-[45%]">
            <Button
              text={"Save"}
              style={`bg-[#F4E34A] h-[54px] rounded-[24px] flex justify-center items-center`}
            />
          </View>
        </View>
      </View>
    </SafeArrayView>
  );
};

const styles = StyleSheet.create({});

export default Reservation;
