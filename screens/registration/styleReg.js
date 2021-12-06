import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const rStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  btns: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  shadow: {
    elevation: 20,
    shadowColor: '#000',
    opacity: 0.6
  },


  box: {
    backgroundColor: "#cad1d9",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: "90%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 30,
  },


  form: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
  formTwo: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },


  inputInfo: {
    backgroundColor: "#ecf0f9",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 3
  },
  infoSignUp: {
    padding: 10,
    marginBottom: 15
  },
  textSignUp: {
    fontFamily: 'qsb',
    fontSize: 13,
    color: '#414560'
  }
});
