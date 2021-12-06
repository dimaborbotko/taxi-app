import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BtnSubmit({text}) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fad312',
        borderRadius: 30,
        marginTop: 10,
    },
    text: {
        fontFamily: 'qb',
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 13,
        textAlign: 'center',
        color: '#414560'
    }
})
