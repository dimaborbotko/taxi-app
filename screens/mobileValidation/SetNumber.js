import React, { useState, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mStyles } from "./styleMobValid";
import PhoneInput from "react-native-phone-number-input";
import BtnValidNum from "./BtnValidNum";

export default function SetNumber({ navigation }) {
  const [value, setValue] = useState("978379316");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('telNumber', value)
    } catch (e) {
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
          onPress={() => {
            if(value.length == 9){
              navigation.push("getCode");
            }
          }}
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

const styles = StyleSheet.create({});
