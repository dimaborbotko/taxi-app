import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BtnValidNum() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Send code</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#414560',
        borderRadius: 10,
        marginTop: 10,
        width: '40%',
        alignSelf: 'center'
    },
    text: {
        fontFamily: 'qb',
        fontSize: 15,
        paddingHorizontal: 20,
        paddingVertical: 6,
        textAlign: 'center',
        color: '#fff'
    }
})
