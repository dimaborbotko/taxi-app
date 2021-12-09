import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function BtnCurrLoc({ text }) {
  return (
    <View style={styles.btn}>
      <View style={styles.pos}>
        <Entypo name="direction" size={24} color="#2076db" />
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    borderColor: "#2076db",
    borderWidth: 2,
  },
  pos: {
    flexDirection: "row",
    padding:10
  },
  btnText: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    color: '#2076db'
  },
});
