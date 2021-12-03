import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'


export default class forgotPassword extends Component {
    state = {
        username1: '',
        loading: false,
        erorValidation: '',
    }

    onChangeHandle(state, value) {
        this.setState({
            [state]: value
        })
    }

    doLogin() {
        const {username1} = this.state;
        if(username1) {
            const req = {
                "email": username1
            }
    
            this.setState({
                loading: true
            })
            axios.post("https://sore.grob.media/api/auth/login", req)
                .then(
                    res => {
                        // this.setState({
                        //     loading: false
                        // })
                        // console.log(res.data.access_token)
                        // AsyncStorage.setItem("access_token", res.data.access_token)
                        // this.props.navigation.navigate('Logout')
                        console.log(res,'email ada')
                            // .then(
                            //     res => {
                            //     }
                            // )
                        // console.log(res)
                        // this.setState({erorValidation: ''})
                    },
                    Error => {
                        this.setState({
                            loading: false
                        })
                        console.log(Error,username1)
                        // this.setState({erorValidation: 'Username and password is wrong'})
                    }
                )
                    
        } else {
            // alert('enter username and password')
            // this.setState({erorValidation: 'Enter username and password'})
            console.log('Enter email')
        }
    }

    
    render(){
        const {username1} = this.state;
        return (
            <ScrollView style={{backgroundColor: '#f0f8ff'}}>
    
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="center"
                    source={require('../assets/forgot.png')}
                 />
                <Text style={styles.textTitle}>Please enter your registered email ID</Text>
                <Text style={styles.textSubTitle}>We will send a verification code to your registered email ID</Text>
                <View style={styles.inputItem}>
                    <MaterialIcons style={styles.searchIcon} name="email" size={24} color="grey"/>
                    <TextInput
                        style={styles.input}
                        placeholder="example@gmail.com"
                        placeholderTextColor="grey" 
                        keyboardType='email-address'
                        onChangeText={(value) => this.onChangeHandle('username1', value)}
                        value={username1}
                        />
                </View>
    
                <TouchableOpacity style={styles.buttonLogin} onPress={() => this.doLogin()}>
                    <Text style={styles.buttonText}>Next</Text>
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

    input: {
        color: 'black',
        width: '75%',
    },

    image: {
        width: 400,
        height: 190,
        marginVertical: 3,
        marginTop: '20%'
        // backgroundColor: 'red'
    },

    textTitle: {
        width: '90%',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold'
        // backgroundColor: 'yellow'
    },

    textSubTitle: {
        width: '90%',
        fontSize: 12.3,
        marginVertical: 10,
        // backgroundColor: 'yellow'
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

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10,
        color: 'white'
    },

    
})


