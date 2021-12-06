import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BtnReg from "./BtnReg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { rStyle } from "./styleReg";

export default function Form() {
  const [switchOn, setSwitchOn] = useState(0);
  if (switchOn === 0) {
    return (
      <View style={rStyle.container}>
        <View style={rStyle.btns}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(1)}>
            <BtnReg text="Sign Up" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(0)}>
            <BtnReg text="Sign In" />
          </TouchableOpacity>
        </View>
        <SignUp />
      </View>
    );
  }
  return (
    <View style={rStyle.container}>
      <View style={rStyle.btns}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(1)}>
          <BtnReg text="Sign Up" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSwitchOn(0)}>
          <BtnReg text="Sign In" />
        </TouchableOpacity>
      </View>
      <SignIn />
    </View>
  );
}
