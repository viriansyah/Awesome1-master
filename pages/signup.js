import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, ToastAndroid, TouchableOpacity, TextInput,   } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'


export default function SignUp ({ navigation }) {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");

        const showToast = () => {
            ToastAndroid.show("Success Sign Up!!!", ToastAndroid.SHORT);
        }
        
        const klikSimpan = () => {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(username == '' || email == '' || password == ''){
                // alert('enter all your data');
                setError('Enter username')
            } else if(username.length < 4) {
                setError('Enter username minimal characters 4')
            } else if(!email || regex.test(email) == false) {
                setError('Email is not valid')
            } else if(password.length < 7) {
                setError('Minimum number of password characters is 8')
            } else {
                const data = {
                    username,
                    email,
                    password,
                }
                console.log('data before', data)
    
                const params = JSON.stringify({
    
                    "name": username,
                    "email": email,
                    "password": password,
                    
                    });
                    axios.post("https://sore.grob.media/api/auth/signin", params,{
                        "headers": {
                        "content-type": "application/json",
                        },
                        
                    })
                    .then(function(response) {
                        // console.log(response);
                        // setUsername(""),
                        // setEmail(""),
                        // setPassword("")
                        // setError("")
                        navigation.navigate('loginStack1')
                        showToast()
                    })    
                    .catch(function(error) {  
                        console.log(error);
                    });
                    // alert('Success Sign Up!!!')
            }
                    
        }

            return (
                <ScrollView style={{backgroundColor: '#f0f8ff'}}>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Sign Up</Text>
                    <View style={{width: '90%'}}>
                        <Text style={styles.cekValidasi} >{error}</Text>
                    </View>
    
                    <View style={styles.inputItem}>
                        <MaterialIcons style={styles.searchIcon} name="person" size={24} color="grey"/>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="grey" 
                            maxLength={22}
                            // onChangeText={(value) => onChangeUsername(value)}
                            value={username}
                            onChangeText={(value) => setUsername(value)}
                            // onBlur={() => this.usernameValidation()}
                            />
                    </View>
    
                    <View style={styles.inputItem}>
                        <MaterialIcons style={styles.searchIcon} name="email" size={24} color="grey"/>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="grey" 
                            // onChangeText={(value) => onChangeEmail(value)}
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            // onBlur={() => this.emailValidation()}
                            />
                    </View>
                           
                    <View style={styles.inputItem}>
                        <MaterialIcons style={styles.searchIcon} name="lock" size={24} color="grey"/>
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            placeholderTextColor="grey" 
                            secureTextEntry={true}
                            maxLength={20}  
                            // onChangeText={(value) => this.passwordValidation(value)}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            // onBlur={() => this.passwordValidation()}
                            />
                    </View>
    
                    <TouchableOpacity style={styles.buttonSignUp} onPress={() => klikSimpan()}>
                        <Text style={styles.buttonText}>
                        {/* {loading ? 'Menyimpan...' : 'Sign Up'} */}
                        Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            )
        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },

    inputItem: {
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 5,
        borderColor: 'grey',
        borderRadius: 10,
    },

    searchIcon: {
        padding: 15,
    },

    textTitle: {
        fontSize: 30,
        marginVertical: 10,
        // backgroundColor: 'red',
        textAlign: 'center',
        marginTop: 90
    },

    buttonSignUp: {
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'skyblue',
        borderRadius: 15,
        marginBottom: 15,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10,
        color: 'white'
    },

    input: {
        color: 'black',
        width: '75%',
        // paddingHorizontal: 1,
    },

    forgotPassword: {
        textAlign:'right',
        marginRight: 12,
    },

    cekValidasi: {
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        color: 'red',
    }

})
