import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BtnReg({text}) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#cad1d9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 10,
        paddingBottom: 1
    },
    text: {
        fontFamily: 'qb',
        fontSize: 18,
        paddingHorizontal: 45,
        paddingVertical: 13,
        textAlign: 'center',
        color: '#414560'
    }
})
