import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Image, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

export const PrimaryInput = ({ style, placeholder }) => {
  return (
    <View className={`${style}`}>
      <TextInput
        className="w-full h-full border-none rounded-[26px] text-white px-4 font-trap-regular"
        placeholder={placeholder}
        placeholderTextColor={"#D1D1D6"}
      />
    </View>
  );
};

export const PasswordInput = ({ style, placeholder }) => {
  const [visible, setVisible] = useState(true);
  return (
    <View className={`${style} px-4 flex-row items-center justify-between`}>
      <View className="w-[10%]">
        <Image
          className="w-[24px] h-[24px]"
          source={require("../assets/lock.png")}
        />
      </View>
      <TextInput
        className="w-[80%] h-full border-none rounded-[26px] text-white px-1 font-trap-regular"
        placeholder={placeholder}
        placeholderTextColor={"#D1D1D6"}
        secureTextEntry={visible}
      />
      <TouchableOpacity
        className="w-[10%]"
        onPress={() => setVisible(!visible)}
      >
        <Image
          className="w-[24px] h-[24px]"
          source={require("../assets/eye.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export const PhoneInput = ({ style, placeholder }) => {
  return (
    <View className={`${style} px-4 flex-row items-center justify-between`}>
      <View className="w-[18%] border-r border-[#FFFFFF] flex-row items-center gap-x-1 pr-1">
        <Image
          className="w-[32px] h-[24px]"
          source={require("../assets/flagpack_gb-ukm.png")}
        />
        <Image
          className="w-[13.6px] h-[5.76px]"
          source={require("../assets/arrow-down.png")}
        />
      </View>
      <View className="px-2">
        <Text className="text-white">+44</Text>
      </View>
      <TextInput
        className="w-[80%] h-full border-none rounded-[26px] text-white px-1 font-trap-regular"
        placeholder={placeholder}
        placeholderTextColor={"#D1D1D6"}
      />
    </View>
  );
};

export const OtpInputs = ({ setModal, navigation }) => {
  const [isWrong, setIsWrong] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const handleChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      switch (index) {
        case 0:
          inputRef2.current.focus();
          break;
        case 1:
          inputRef3.current.focus();
          break;
        case 2:
          inputRef4.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      switch (index) {
        case 1:
          inputRef1.current.focus();
          break;
        case 2:
          inputRef2.current.focus();
          break;
        case 3:
          inputRef3.current.focus();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const otpValue = otp.join("");

    if (otpValue.length === 4) {
      if (otpValue == "1234") {
        setModal(true);
        setOtp(["", "", "", ""]);
        setTimeout(() => {
          setModal(false);
          navigation.navigate("Terms");
        }, 2000);
      } else {
        setIsWrong(true);
      }
    } else {
      setIsWrong(false);
    }
  }, [otp]);
  return (
    <View>
      <View style={styles.otpContainer} className="mt-6">
        {otp.map((value, index) => (
          <TextInput
            key={index.toString()}
            style={styles.input}
            value={value}
            keyboardType="numeric"
            maxLength={1}
            className="font-trap-bold"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent: { key } }) => {
              handleKeyPress(index, key);
            }}
            ref={(ref) => {
              switch (index) {
                case 0:
                  inputRef1.current = ref;
                  break;
                case 1:
                  inputRef2.current = ref;
                  break;
                case 2:
                  inputRef3.current = ref;
                  break;
                case 3:
                  inputRef4.current = ref;
                  break;
                default:
                  break;
              }
            }}
          />
        ))}
      </View>
      {isWrong && (
        <View>
          <Text className="text-[#F80C0C] mt-7">
            The sms Password you've entered is incorrect. Check and try again
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    height: 67,
    width: 71,
    backgroundColor: "white",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 30,
    borderRadius: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export const Secondaryinput = ({
  style,
  placeholder,
  imageRight,
  imageLeft,
  iconLeft,
  iconRight,
}) => {
  return (
    <View className={`${style} flex-row`}>
      <View className="w-[10%] flex justify-center items-center">
        {imageRight && (
          <Image
            className="w-[24px] h-[24px]"
            source={require("../assets/majesticons_search.png")}
          />
        )}
        {iconRight}
      </View>
      <TextInput
        className="w-[80%] h-full border-none rounded-[26px] font-trap-medium text-black px-1"
        placeholder={placeholder}
        placeholderTextColor={"#BDBABA"}
      />

      <View className="w-[10%] flex justify-center items-center">
        {imageLeft && (
          <View className="bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
            <Image className="w-[24px] h-[24px]" source={imageLeft} />
          </View>
        )}
        {iconLeft}
      </View>
    </View>
  );
};

export const DateFormat = ({
  style,
  placeholder,
  imageRight,
  imageLeft,
  iconLeft,
  iconRight,
  onPress,
  date,
  onChange,
}) => {
  return (
    <TouchableOpacity className={`${style} flex-row`} onPress={onPress}>
      <View className="w-[10%] flex justify-center items-center">
        {imageRight && (
          <Image
            className="w-[24px] h-[24px]"
            source={require("../assets/majesticons_search.png")}
          />
        )}
        {iconRight}
      </View>
      <View className="w-[80%] flex items-start">
        <TextInput
          className="w-[100%] h-full border-none rounded-[26px] font-trap-regular text-white px-1"
          placeholder={placeholder}
          placeholderTextColor={"#BDBABA"}
          value={date}
          editable={false}
          onChangeText={onChange}
        />
      </View>

      <View className="w-[10%] flex justify-center items-center">
        {imageLeft && (
          <View className="bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
            <Image className="w-[24px] h-[24px]" source={imageLeft} />
          </View>
        )}
        {iconLeft}
      </View>
    </TouchableOpacity>
  );
};
