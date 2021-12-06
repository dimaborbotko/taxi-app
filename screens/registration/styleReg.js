import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const rStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    btns: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
    },
    form: {
        backgroundColor: 'blue',
        width: 100,
        height: 100
    },
    formTwo: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    }
})
