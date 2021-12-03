import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { hStyle } from '../../components/firstStart/styleHello'
import BtnLoading from './BtnLoading'

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/helloScreens/taxi-stop.png')}/>
            <BtnLoading />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dec640',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'contain',
        height: '40%'
    }
})
