import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BtnLoading() {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.box}>
            <Text style={styles.text}>Take a cab!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: '20%',
        width: '50%'
    },
    text: {
        fontFamily: 'qb',
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign: 'center'
    }
})