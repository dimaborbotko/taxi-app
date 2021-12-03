import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ButtonHello() {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.box}>
            <Text style={styles.text}>Let`s go!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ffc66c',
        borderRadius: 10,
        marginTop: '20%'
    },
    text: {
        fontFamily: 'qb',
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign: 'center'
    }
})
