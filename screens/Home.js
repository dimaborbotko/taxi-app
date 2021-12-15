import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { mainStyles } from './main/mainStyle'

export default function Home() {
    return (
        <View style={mainStyles.otherScreens}>
            <Text style={mainStyles.otherText}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
