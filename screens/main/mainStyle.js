import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignItems: "center",
    
  },
  inputBox: {
    width: "90%",
    backgroundColor: "#cad1d9",
    borderRadius: 15,
    alignItems: "center",
    marginTop: '15%',
    position: "absolute"
  },
  textBox: {
    width: '90%',
    marginVertical: 20
  },
  greeting: {
      fontFamily: 'qsb',
      fontSize: 16,
      
  },
  title: {
      fontFamily: 'qb',
      fontSize: 23
  }
});
