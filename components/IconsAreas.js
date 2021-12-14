import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setbtnwaypoint } from "../slice/navSlice";

export default function IconsAreas() {
  const dispatch = useDispatch()
  return (
    <View
      style={{
        marginLeft: 20,
        marginBottom: 18,
        marginTop: -10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Fontisto name="arrow-return-right" size={20} color="#414560" />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(setbtnwaypoint(true))}
      >
        <Entypo
          style={{ marginRight: 15 }}
          name="plus"
          size={27}
          color="#414560"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
