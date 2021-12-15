import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <Image style={styles.profImg} source={require('../assets/user.png')} />
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {

    },
    profImg: {
        width: 100,
        height: 100,
        margin: 20
    },
})
