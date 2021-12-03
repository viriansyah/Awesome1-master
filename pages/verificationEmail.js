import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
// import { TextInput } from 'react-native-paper';

export default class verificationEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          pin1 : "",
          pin2 : "",
          pin3 : "",
          pin4 : "",
          pin5 : ""
        }
    }

    componentDidMount=()=>{
        this.refs.pin1ref.focus()
    }
    render() {
        const {pin1, pin2, pin3, pin4, pin5} = this.state
        return (
        <ScrollView style={{backgroundColor: '#f0f8ff'}}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="center"
                    source={require('../assets/mail.png')}
                />
                <Text style={styles.textTitle}>Please enter your verification code</Text>
                <Text style={styles.textSubTitle}>We will send a verification code to your registered email ID</Text>
                <View style={styles.verification}>
                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        maxLength={1}

                        ref={"pin1ref"}
                        onChangeText={(pin1) => {
                            this.setState({pin1 : pin1})
                            if(pin1 != "") {
                                this.refs.pin2ref.focus();
                            }
                        }}
                        value={pin1}
                    />

                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        maxLength={1}

                        ref={"pin2ref"}
                        onChangeText={(pin2) => {
                            this.setState({pin2 : pin2})
                            if(pin2 != "") {
                                this.refs.pin3ref.focus();
                            }
                        }}
                        value={pin2}
                    />

                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        maxLength={1}

                        ref={"pin3ref"}
                        onChangeText={(pin3) => {
                            this.setState({pin3 : pin3})
                            if(pin3 != "") {
                                this.refs.pin4ref.focus();
                            }
                        }}
                        value={pin3}
                    />
                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        maxLength={1}

                        ref={"pin4ref"}
                        onChangeText={(pin4) => {
                            this.setState({pin4 : pin4})
                            if(pin4 != "") {
                                this.refs.pin5ref.focus();
                            }
                        }}
                        value={pin4}
                    />
                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        maxLength={1}

                        ref={"pin5ref"}
                        onChangeText={(pin5) => {
                            this.setState({pin5 : pin5})
                            
                        }}
                        value={pin5}
                    />
                    
                </View>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('changePassword')}>
                    <Text style={styles.buttonText}>Done</Text>
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

    image: {
        width: 400,
        height: 190,
        marginVertical: 3,
        marginTop: '20%',  
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

    verification: {
        flex: 0.6,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    input: {
        marginRight: 8,
        marginLeft: 8,
        width: '14.3%',
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        color: 'black',
    },

    buttonLogin: {
        width: '90%',
        height: 50,
        marginVertical: 10,
        backgroundColor: 'skyblue',
        borderRadius: 15,
        marginTop: 13
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10,
        color: 'white'
    },
})
