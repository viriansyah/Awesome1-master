import React, { useEffect } from 'react'
import { View, Image, Text, StyleSheet, Modal, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Drawer from '../routes/drawer'


export default function header({ navigation, title }) {

    

    const cekToken = async () => {
        const token = await AsyncStorage.getItem('access_token')
        if(token) {
            navigation.navigate("Logout")
        } else {
            navigation.navigate("loginStack1")
        }
      
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={() => navigation.openDrawer()} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>  
            <MaterialIcons name="person" size={28} style={styles.icon2} onPress={() => cekToken()}></MaterialIcons>     
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "red"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        // backgroundColor: "blue",
        right: 15
    },
    icon: {
        position: 'absolute',
        left: 6,
    },
    icon2: {
        position: 'absolute',
        right: 30
    }
});



