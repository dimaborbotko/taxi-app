import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BtnDecline({text}) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f16c63',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 10,
        paddingBottom: 1,
        width: '90%',
        alignSelf: 'center'
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