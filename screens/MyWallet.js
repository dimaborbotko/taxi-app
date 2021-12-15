import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mainStyles } from './main/mainStyle'

export default function MyWallet() {
    return (
        <View style={mainStyles.otherScreens}>
            <Text style={mainStyles.otherText}>My Wallet</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
