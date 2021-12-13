import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function BtnCard({ text }) {
  return (
    <View style={styles.box}>
      <View style={styles.cardInfo}>
        <FontAwesome name="credit-card-alt" size={24} color="#fff" />
        <Text style={styles.text}>***3657</Text>
      </View>

      <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#2a71c9",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 10,
    paddingBottom: 1,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: -35,
    paddingBottom: 20
  },
  text: {
    fontFamily: "qb",
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 13,
    textAlign: "center",
    color: "#fff",
  },
  cardInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10
  }
});
