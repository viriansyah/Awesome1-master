import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home'
import halamanDetail from '../pages/details';
import Header from '../shared/header'
import Login from '../pages/login'
import SignUp from '../pages/signup'
import ForgotPassword from '../pages/forgotPassword'
import Verification from '../pages/verificationEmail'
import ChangePassword from '../pages/changePassword'
import Logout from '../pages/logout'
import Token from '../pages/autToken'
import comingSoon from '../pages/comingSoon'
import Artikel from '../pages/artikel'
import news from '../pages/news'
import ResepNew from '../pages/ResepNew'
import RecipeDetail from '../pages/RecipeDetail'
import RecipeStep from '../pages/RecipeStep'

const Stack = createNativeStackNavigator();


export default function homeStack() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Home'/>,
                        }
                    }}
                    
                />
                <Stack.Screen
                    name="Detail"
                    component={halamanDetail}
                    options={{ title: 'Details', headerTitleAlign: 'center' }}
                    
                />
                <Stack.Screen
                    name="loginStack1"
                    component={Login}
                    options={{ 
                        // headerShown: false,
                        title: 'Login',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ 
                        title: 'Sign Up',
                        headerTitleAlign: 'center',
                        
                    }}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ 
                        title: 'Forgot Password',
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="verification"
                    component={Verification}
                    options={{ 
                        title: 'Verification Email',
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="changePassword"
                    component={ChangePassword}
                    options={{ 
                        title: 'Change Password',
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="Logout"
                    component={Logout}
                    options={{ 
                        // headerShown: false,
                        title: 'My Profile',
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="AutToken"
                    component={Token}
                    options={{ 
                        headerShown: false,
                        title: 'AutToken',
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="Artikel2"
                    component={Artikel}
                    options={({navigation}) =>  {
                        return{
                            headerBackVisible: false,
                            headerTitle: () => <Header navigation={navigation} title='Article'/>,
                        }
                    }}
                />

                <Stack.Screen
                    name="comingSoon23"
                    component={comingSoon}
                    options={({navigation}) =>  {
                        return{
                            headerBackVisible: false,
                            headerTitle: () => <Header navigation={navigation} title='Validation Login'/>,
                        }
                    }}
                />

                <Stack.Screen
                        name="news"
                        component={news}
                        options={{title: 'news', headerTitleAlign: 'center'}}
                    />
                <Stack.Screen
                        name="resepList1"
                        component={ResepNew}
                        options={({navigation}) =>  {
                            return{
                                headerBackVisible: false,
                                headerTitle: () => <Header navigation={navigation} title='Recipe List'/>,
                            }
                        }}
                    />

                <Stack.Screen
                        name="RecipeDetail"
                        component={RecipeDetail}
                        options={{title: 'Recipe Detail', headerTitleAlign: 'center'}}
                    />

                <Stack.Screen
                        name="RecipeStep"
                        component={RecipeStep}
                        options={{title: 'Recipe Step', headerTitleAlign: 'center'}}
                    />

            </Stack.Navigator>
        
    );
}

