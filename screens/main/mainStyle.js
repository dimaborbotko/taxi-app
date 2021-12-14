import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignSelf: "center",
    position: "absolute",
    width: "90%",
    
  },
  inputBox: {
    
    backgroundColor: "#cad1d9",
    borderRadius: 15,
    alignItems: "center",
    width: '100%',
    marginTop: '15%',
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
