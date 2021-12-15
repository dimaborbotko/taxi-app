import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mainStyles } from './main/mainStyle'

export default function Settings() {
    return (
        <View style={mainStyles.otherScreens}>
            <Text style={mainStyles.otherText}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
