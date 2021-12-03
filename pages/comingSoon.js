import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Artikel from '../pages/artikel'

export default function comingSoon() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Please login first</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    btnLogin: {
        marginTop: 20,
        backgroundColor: 'red',
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center'
    }, 
})
