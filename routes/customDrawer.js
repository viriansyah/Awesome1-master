import React from 'react'
import { View, Text } from 'react-native'
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

export default function customDrawer(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
