import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const dStyles = StyleSheet.create({
    driver: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      },
      name: {
        fontFamily: "qb",
        fontSize: 24,
        marginLeft: 10,
        color: "#414560",
      },
      car: {
        fontFamily: "qb",
        fontSize: 14,
        marginLeft: 10,
        color: "#414560",
      },
      imgDriver: {
        width: 90,
        height: 90,
        borderRadius: 50,
      },
      cost: {
        fontFamily: "qb",
        fontSize: 18,
        marginLeft: 10,
        color: "#414560",
        textAlign: "right",
      },
      boxDriver: {
        flexDirection: "row",
      },
      info: {
        alignItems: "flex-start",
      },
      menu: {
        backgroundColor: "#f0f5f9",
        borderRadius: 4,
        paddingHorizontal: 3,
        paddingVertical: 2,
        paddingLeft: 4.5,
        marginBottom: 10,
      },
})
