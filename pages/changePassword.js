import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput,  TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class changePassword extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#f0f8ff'}}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode="center"
                        source={require('../assets/password.png')}
                    />
                    <Text style={styles.textTitle}>Please enter a new password</Text>
                    <View style={styles.inputItem}>
                        <MaterialIcons style={styles.searchIcon} name="lock" size={24} color="grey"/>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            placeholderTextColor="grey" 
                            secureTextEntry={true}  
                            />
                    </View>

                    <View style={styles.inputItem}>
                        <MaterialIcons style={styles.searchIcon} name="lock" size={24} color="grey"/>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="grey" 
                            secureTextEntry={true}  
                            />
                    </View>

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('loginStack1')}>
                        <Text style={styles.buttonText}>Change Password</Text>
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

    input: {
        color: 'black',
        width: '75%',
    },

    searchIcon: {
        padding: 15,
    },

    image: {
        width: 400,
        height: 190,
        marginVertical: 3,
        marginTop: '20%'
    },

    textTitle: {
        width: '90%',
        fontSize: 18,
        marginVertical: 10,
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
