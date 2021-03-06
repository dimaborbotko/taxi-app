import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ButtonHello() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Let`s go!</Text>
        </View>
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
        textAlign: 'center',
        color: '#414560'
    }
})
