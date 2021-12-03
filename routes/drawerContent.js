import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar, Caption, Title, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper'

export default function drawerContent(props) {
    const cek = () => {
        alert('tess')
    }

    const cekTokenArtikel = async () => {
        const token = await AsyncStorage.getItem('access_token')
        if(token) {
            props.navigation.navigate("Artikel2")
            // console.log('di menu artikel')
        } else {
            // props.navigation.navigate("cekTokenArtikel")
            props.navigation.navigate('comingSoon23')
            // console.log('di menu comming soon')
        }
      
    }
    const cekTokenResepNew = async () => {
        const token = await AsyncStorage.getItem('access_token')
        if(token) {
            props.navigation.navigate("resepList1")
            // console.log('di menu artikel')
        } else {
            // props.navigation.navigate("cekTokenArtikel")
            props.navigation.navigate('comingSoon23')
            // console.log('di menu comming soon')
        }
      
    }

    return (
        <View style={{flex: 1}}>
                <DrawerContentScrollView>
                    <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Home"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <DrawerItem
                            label="Recipe List"
                            onPress={() => cekTokenResepNew()}
                        />
                        <DrawerItem
                            label="Article"
                            onPress={() => cekTokenArtikel()}
                        />
                    </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    drawerSection: {
        marginTop: 15,
    },
})
