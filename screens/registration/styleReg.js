import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const rStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btns: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  shadow: {
    elevation: 20,
    shadowColor: '#fad312',
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
    elevation: 14,
    alignSelf: "center"
  },
frontBlock: {
  position: "absolute",
  left: 0,
  right: 0,
  
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
  },

  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
