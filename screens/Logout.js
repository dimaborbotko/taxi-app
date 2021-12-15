import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mainStyles } from './main/mainStyle'

export default function Logout() {
    return (
        <View style={mainStyles.otherScreens}>
            <Text style={mainStyles.otherText}>Logout</Text>
        </View>
    )
}

