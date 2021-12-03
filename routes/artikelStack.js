import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { View, Text } from 'react-native'

import Artikel from '../pages/artikel'
import Header from '../shared/header'
import cekTokenArtikel from '../pages/autTokenArtikel'
import comingSoon from '../pages/comingSoon'
import token from '../pages/autTokenArtikel'
import news from '../pages/news'

const Stack = createNativeStackNavigator();

export default function artikelStack() {

    return (
        
            <Stack.Navigator>
                <Stack.Screen
                        name="cekTokenArtikel"
                        component={cekTokenArtikel}
                        options={({navigation}) =>  {
                            return{
                                headerTitle: () => <Header navigation={navigation} title='Artikel'/>
                            }
                        }}
                    />
            </Stack.Navigator>
    );
}

