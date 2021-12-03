import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ToastAndroid, TouchableOpacity, TextInput  } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logout from '../pages/logout'
import Drawer from '../routes/drawer'
import drawer from '../routes/drawer';


export default class login extends Component {
    state = {
        username: '',
        password: '',
        loading: false,
        erorValidation: '',
    }

    onChangeHandle(state, value) {
        this.setState({
            [state]: value
        })
    }

    onSubmit = async (access_token) => {
        try {
            // this.setState({access_token, 'access_token'})
            let a = await AsyncStorage.setItem('access_token', access_token)
            alert(a)
        } catch(e) {
          // read error
          console.log(e)
        }
      
        // console.log(a)
    }
    
    getData = async () => {
        try {
            // const jsonValue = JSON.stringify(value)
           let a = await AsyncStorage.getItem('access_token')
            console.log(a)
            // return jsonValue != null ? JSON.parse(jsonValue) : null
            // if(access_token !== null) {
            // }
            // console.log(a)
          } catch(e) {
            // save error
          }
        console.log('berhasil')
      
      }

    doLogin() {
        const {username, password} = this.state;
        if(username && password) {
            const req = {
                "email": username,
                "password": password
            }
    
            this.setState({
                loading: true
            })

            
            axios.post("https://sore.grob.media/api/auth/login", req)
                .then(
                    res => {
                        this.setState({
                            loading: false
                        })
                        AsyncStorage.setItem("access_token", res.data.access_token)
                        .then(
                            res => {
                                this.props.navigation.navigate('Home')
                                alert('login success')
                            }
                        )
                        // console.log(username)
                        this.setState({erorValidation: ''})
                    },
                    Error => {
                        this.setState({
                            loading: false
                        })
                        // alert('username and password is wrong')
                        this.setState({erorValidation: 'email and password is wrong'})
                    }
                    )
                    
        } else {
            // alert('enter username and password')
            this.setState({erorValidation: 'Enter email and password'})
        }
    }

    handeSubmit = async () => {
        const {username, password} = this.state;
        if(username && password) {
            const req = {
                "email": username,
                "password": password
            }

            this.setState({
                loading: true
            })

            axios.post("https://sore.grob.media/api/auth/login", req)
                .then(
                    res => {
                        // console.log(res)
                        this.setState({
                            loading: false
                        })
                        AsyncStorage.setItem("access_token", res.data.access_token)
                        .then(
                            res => {
                                this.props.navigation.navigate('Home')
                                // {drawer}
                                alert('login success')
                            }
                        )
                        // console.log(username)
                        this.setState({erorValidation: ''})
                    },
                    Error => {
                        this.setState({
                            loading: false
                        })
                        console.log(Error)
                        this.setState({erorValidation: 'Incorrect email or password'})
                    }
                )
                    
        } else {
            // alert('enter username and password')
            this.setState({erorValidation: 'Enter email and password'})
        }
    }

    render(){
        const {username, password, loading} = this.state;
        return (
            <ScrollView style={{backgroundColor: '#f0f8ff'}}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Login</Text>
                <View style={{width: '90%'}}>
                    <Text style={styles.cekValidasi}>{this.state.erorValidation}</Text>
                </View>
                <View style={styles.inputItem}>
                    <MaterialIcons style={styles.searchIcon} name="email" size={24} color="grey"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="grey" 
                        onChangeText={(value) => this.onChangeHandle('username', value)}
                        value={username}
                        />
                </View>

                <View style={styles.inputItem}>
                    <MaterialIcons style={styles.searchIcon} name="lock" size={24} color="grey"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="grey" 
                        secureTextEntry={true}  
                        onChangeText={(value) => this.onChangeHandle('password', value)}
                        value={password}
                        />
                </View>

                <View style={{width: '90%'}}>
                    <Text style={styles.forgotPassword} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot password?</Text>
                </View>
    
                <TouchableOpacity 
                    style={styles.buttonLogin} 
                    onPress={() => this.handeSubmit() }
                    disabled={loading}    
                >
                    <Text style={styles.buttonTextLogin}>{loading ? "loading..." : "Log in"}</Text>
                </TouchableOpacity>
    
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 21, marginLeft: 21,  }}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                        <View>
                            <Text style={{width: 20, textAlign: 'center', color: 'grey', fontSize: 16.5}}>or</Text>
                        </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                </View>
                
                <TouchableOpacity style={styles.buttonSignup} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
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

    buttonLogin: {
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'skyblue',
        borderRadius: 15,
        marginBottom: 15,
    },

    buttonSignup: {
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderColor: 'grey',
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10,
        color: '#808080'
    },

    buttonTextLogin: {
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
        fontSize: 15,
        alignSelf: 'flex-end'
    },

    cekValidasi: {
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
        color: 'red',
    }
})
