import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../pages/home';
// import ReviewDetails from '../pages/halamanDetail'
import Chats from '../pages/chats'
import Header from '../shared/header'

const Stack = createNativeStackNavigator();

export default function artikelStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="halamanChats"
                    component={Chats}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Chat'/>,
                        }
                    }}
                />
            </Stack.Navigator>
       
    );
}

