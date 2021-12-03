import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { Button } from 'react-native-elements/dist/buttons/Button';

export default class autTokenArtikel extends Component {


    // cekTokenArtikel = async () => {
    //     const token = await AsyncStorage.getItem('access_token')
    //         if(token) {
    //             // setTimeout(() => {
    //                 // this.props.navigation.navigate("Artikel2")
    //                 console.log('di menu artikel')
    //             // }, 2000);
    //             // console.log(token)
    //         } else {
    //             // setTimeout(() => {
    //                 // this.props.navigation.navigate("comingSoon")
    //                 console.log('di menu comming soon')
    //             // }, 2000);
    //             // console.log(token)
    //         } 
    //     return token  
    // }

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity>
                    <Text>
                        Loading...
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
      },
});
