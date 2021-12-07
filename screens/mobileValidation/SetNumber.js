import React, { useState, useRef, useEffect } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mStyles } from "./styleMobValid";
import PhoneInput from "react-native-phone-number-input";
import BtnValidNum from "./BtnValidNum";

export default function SetNumber({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  
  useEffect(() => {
    getData()
  }, [])

  const storeData = async () => {
    if (value.length < 9) {
      Alert.alert("Warning!", "Enter a valid number!");
    } else {
      navigation.navigate('getCode')
      try {
        await AsyncStorage.setItem("telNumber", value);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getData = () => {
    try {
        AsyncStorage.getItem('telNumber')
          .then(value => {
            if(value >= 9) {
              navigation.replace('registration')
            }
          })
    } catch(e) {
      console.log(e)
    }
  }


  return (
    <View style={mStyles.container}>
      <View style={mStyles.box}>
        <View>
          <Text style={mStyles.title}>Hellet</Text>
          <Text style={mStyles.subTitle}>Get moving with Taxi</Text>
        </View>
        <View style={mStyles.enterNum}>
          <PhoneInput
            useRef={phoneInput}
            defaultValue={value}
            defaultCode="UA"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            autoFocus
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={storeData}
        >
          <BtnValidNum />
        </TouchableOpacity>

        <Text style={mStyles.textValid}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the
        </Text>
      </View>
    </View>
  );
}


