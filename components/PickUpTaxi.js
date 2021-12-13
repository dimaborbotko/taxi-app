import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnPickUp from "../screens/main/BtnPickUp";
import { mainStyles } from "../screens/main/mainStyle";

export default function PickUpTaxi() {
  return (
    <View>
      <BtnPickUp text='Request'/>
    </View>
  );
}

const styles = StyleSheet.create({});
