import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OtpInputs } from '../../components/Inputs';

const Verification = ({navigation}) => {
   const [modal , setModal] = useState(false)
   return (
      <View className="bg-black h-screen p-4">
         <SafeAreaView>
            <View className="flex-row items-center justify-between">
               <View className="w-[35px] h-[39px] bg-white rounded-full flex justify-center items-center">
                  <Image source={require("../../assets/arrow-back.png")} className="w-[15px] h-[20px]"/>
               </View>
               <View>
                  <Text className="text-white text-[20px] font-trap-bold">Phone Number Verification</Text>
               </View>
            </View>

            <View className="flex-row w-[90%] pt-10 leading-4">
               <Text className="text-white text-lg font-trap-medium">John Doe, Enter the 4-digit code sent you at +234 800 4040 290</Text>
            </View>

            <View className="flex mt-4">
               <TouchableOpacity className="">
                  <Text className="text-white border-b border-white underline font-trap-medium">Wrong Number?</Text>
               </TouchableOpacity>
            </View>

            <View>
               <OtpInputs setModal={setModal} navigation={navigation}/>
            </View>

            <View className="mt-6 flex-row gap-x-1">
               <Text className="text-white font-trap-medium">Didn't Receive Code</Text>
               <Text className="text-[#F4E34A] font-trap-medium">Resend Code</Text>
            </View>
         </SafeAreaView>
         <Modal animationType="slide" transparent={true} visible={modal}>
          <View className="bg-[#000000da] flex-1 justify-center items-center">
            <View className="bg-[#121212] flex justify-center items-center w-[80%] h-[300px] rounded-[8px]">
              <Image
                source={require("../../assets/verify.png")}
                className="w-[124px] h-[124px]"
              />
              <Text className="text-white text-lg font-trap-bold">Phone Number Verified</Text>
            </View>
          </View>
        </Modal>
      </View>
   );
}

const styles = StyleSheet.create({})

export default Verification;
