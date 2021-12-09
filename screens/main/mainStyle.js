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
    position: "absolute",
    zIndex: 10
  },
  textBox: {
    width: '90%',
    marginVertical: 20
  },
  greeting: {
      fontFamily: 'qsb',
      fontSize: 16,
      color: '#414560'
      
  },
  title: {
      fontFamily: 'qb',
      fontSize: 23,
      color: '#414560'
  },
  
});
