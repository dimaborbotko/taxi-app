import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BtnLoading from './btnLoading'

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <BtnLoading />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dec640'
    }
})
