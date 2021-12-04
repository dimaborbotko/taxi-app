import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const hStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    resizeMode: "contain",
    height: "25%",
    width: "50%",
  },
  boxText: {
      width: '75%',
      marginTop: '20%',
  },
  text: {
      fontSize: 28,
      marginBottom: 15,
      fontFamily: 'qb',
      textAlign: "center",
      color: '#414560'
  },
  subText: {
    fontSize: 16,
    fontFamily: 'qsb',
    textAlign: "center",
    color: '#414560'
  }
});
