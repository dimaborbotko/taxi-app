import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const mStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    box: {
        backgroundColor: '#cad1d9',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    enterNum: {
        alignItems: 'center'
    },
    title: {
        fontFamily: 'qb',
        fontSize: 16,
        color: '#414560'
    },
    subTitle: {
        fontFamily: 'qb',
        fontSize: 24,
        marginBottom: 25,
        color: '#414560'
    },
    textValid: {
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'qsb',
        color: '#8a8a8a'
    },



    boxCode: {
        width: '100%'
    },
    enterNum: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 3
    },

    enterCode: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 3
    },
    againCode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    codeReg: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    quest: {
        fontFamily: 'qsb',
        color: '#8a8a8a'
    },
    send: {
        fontFamily: 'qb',
        fontSize: 14,
        color: '#414560'
    },
    done: {
        marginRight: 15
    }

})
