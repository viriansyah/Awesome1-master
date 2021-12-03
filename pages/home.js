import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


export default class percobaan1 extends Component {

  

  constructor(props) {
    super(props);
        this.state = {
            name: '',
            email: '',
        };
  }

  componentDidMount() {
    // this.cekToken()
    this.getData()
  }

  getData = async () => {
    const config = {
        headers: {
            'Authorization' : 'Bearer ' + await AsyncStorage.getItem('access_token')  
        }
    }
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

  cekToken = async () => {
    const token = await AsyncStorage.getItem('access_token')
    if(token) {
        // this.props.navigation.navigate("Logout")
        console.log('sudah login')
        this.setState({cekk: 'sudah login'})
    } else {
        // this.props.navigation.navigate("loginStack1")
        console.log('belum login')
        this.setState({cekk: 'belum login'})
    }
  }

  render(){
    const {name,email} = this.state;
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>menu home</Text>
            {/* <Button title="next " onPress={() => this.props.navigation.navigate('Detail')}/> */}
           
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },

    btnLogout: {
      marginTop: 20,
      backgroundColor: 'red',
      paddingVertical: 10,
      width: 100,
      alignSelf: 'center'
    }
  });
