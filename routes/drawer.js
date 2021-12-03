import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './homeStack'
import artikelStack from './artikelStack'
import belanjaStack from './belanjaStack'
import chatsStack from './chatsStack'
import TokenArtikel from '../pages/autTokenArtikel'
import DrawerContent from './drawerContent'


const Drawer = createDrawerNavigator();

export default function drawer() {
    return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen options={{ headerShown: false }} name="Beranda" component={HomeStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Artikel" component={artikelStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Belanja" component={belanjaStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Chats" component={chatsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}