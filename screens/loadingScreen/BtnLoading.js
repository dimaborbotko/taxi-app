import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BtnLoading({ navigation }) {
    return (
        <View activeOpacity={0.7} style={styles.box} >
            <Text style={styles.text}>Take a cab!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#3894ff',
        borderRadius: 10,
        width: '50%',
        marginLeft: 17,
        marginBottom: '10%'
    },
    text: {
        fontFamily: 'qb',
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign: 'center', 
        color: '#ffe257'

    }
})