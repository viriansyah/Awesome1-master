import React, { useState, useEffect, Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class logout extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            setFoundToken: '',
        };
      }
    
        
        componentDidMount(){
            this.getData()
            // this.ambilData()
        }

        getData = async () => {
            const config = {
                headers: {
                    'Authorization' : 'Bearer ' + await AsyncStorage.getItem('access_token')  
                }
            }
            // console.log(config)
            axios.get("https://sore.grob.media/api/auth/me", config)
            .then(
                res => {
                    // console.log(AsyncStorage.getItem("email", res.data.email))
                    // console.log(res.data.email)
                    this.setState({
                        name: res.data.name,
                        email: res.data.email
                    })
                },
                err => {
                    console.log(err)
                }
            )
        }
    
        doLogout = async () => {
            try {
                const a = await AsyncStorage.removeItem('access_token')
                this.props.navigation.navigate('Home')
                // console.log(a)
            } catch(e) {
                console.log(e)
            }
        }

        render() {
            const {name,email} = this.state;
            return (
                <View style={styles.container}>
                    <Text style={styles.textTitle}>
                        My Profile
                    </Text>
                    <View style={styles.subContainer}>
                        <MaterialIcons style={styles.searchIcon} name="person" size={34} color="grey"/>
                        <View style={styles.subContainer2}>
                            <Text style={styles.font}>
                                Name 
                            </Text>
                            <Text style={styles.font}>
                                {name}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                        <MaterialIcons style={styles.searchIcon} name="email" size={34} color="grey"/>
                        <View style={styles.subContainer2}>
                            <Text style={styles.font}>
                                Email 
                            </Text>
                            <Text style={styles.font}>
                                {email}
                            </Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={styles.btnLogout} onPress={() => this.doLogout() }>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )
        }  
        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
        // alignItems: 'stretch',
    },

    textTitle: {
        fontSize: 30,
        marginVertical: 10,
        // backgroundColor: 'red',
        textAlign: 'center',
    },

    btnLogout: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center',
        borderRadius: 15,
    }, 

    cekValidasi: {
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
        color: 'red',
    }, 
    
    subContainer: {
        marginLeft: 10, 
        marginRight: 10, 
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 5,
        borderColor: 'grey',
        borderRadius: 10,
    },
    subContainer2: {
        padding: 4,
        // borderWidth: 1,
        // marginVertical: 10,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    searchIcon: {
        paddingLeft: 5,
        paddingTop: 3,
        paddingBottom: 3,
        marginVertical: 5,
    },
    searchIcon2: {
        paddingLeft: 5,
        paddingTop: 3,
        paddingBottom: 5,
        flexDirection: 'row',
    },

    font: {
        color: 'black',
        width: '100%',
        fontSize: 16,
        paddingLeft: 5
    },

    UserInfo: {
        paddingLeft: 5
    }
})
