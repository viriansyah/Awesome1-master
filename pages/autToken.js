import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class autToken extends Component {

    constructor(){
        super();
        this.cekToken();
    }

    cekToken = async () => {
        const token = await AsyncStorage.getItem('access_token')
        if(token) {
            this.props.navigation.navigate("Logout")
        } else {
            this.props.navigation.navigate("loginStack1")
        }
      
    }

    

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
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
});
