import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Pressable} from 'react-native';

const Button = ({text , style , onPress , textColor}) => {
   return (
      <View className={`${style} w-full`}>
         <Pressable onPress={onPress} className="w-full h-full flex justify-center items-center">
            <Text className={`text-xl ${textColor} font-trap-bold`}>{text}</Text>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({})

export default Button;
