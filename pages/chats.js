import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'


export default class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone: '',
            email: '',
            password1: '',
            listData:[],
        };
        this.url="http://192.168.1.4/rest_api/phprestapi2.php";
    }

    componentDidMount(){
        this.ambilListData()
    }

    async ambilListData(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
            // console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
            // console.log('Hasilnya : '+json.data.result);
            this.setState({listData:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    klikSimpan(){
        
                var urlAksi = this.url+"/?op=create";
      
                fetch(urlAksi,{
                    method:'post',
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body:"username="+this.state.username+"&phone="+this.state.phone+"&email="+this.state.email+"&password1="+this.state.password1
                })
                .then((response)=>response.json())
                .then((json)=>{
                    this.setState({username:''});
                    this.setState({phone:''});
                    this.setState({email:''});
                    this.setState({password1:''});
                    this.ambilListData();
                })
            this.showToast()
        
    }

    render() {
    
    return (
      <Formik
        initialValues={{ 
          username: '',
          phone: '',
          email: '', 
          password1: '' 
        }}
        onSubmit={() => this.klikSimpan()}

        validationSchema={yup.object().shape({
          username: yup
            .string()
            .min(4)
            .required('Please, provide your username!'),
          phone: yup
            .string()
            .max(12, 'tidak boleh dari 12 kars')
            .required(),
          email: yup
            .string()
            .email('Invalid email format')
            .required(),
          password1: yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}
       >
         
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              placeholderTextColor="blue"
              // value={this.state.username}
              value={values.username}
              style={styles.inputStyle}
              onChangeText={handleChange('username')}
              onBlur={() => setFieldTouched('username')}
              placeholder="username"
            />
            {touched.username && errors.username &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.username}</Text>
            }            
            <TextInput
            placeholderTextColor="blue"
              // value={this.state.phone}
              value={values.phone}
              style={styles.inputStyle}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              placeholder="Phone"
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.phone}</Text>
            }
            <TextInput
            placeholderTextColor="blue"
              // value={this.state.email}
              value={values.email}
              style={styles.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              placeholderTextColor="blue"
              // value={this.state.password1}
              value={values.password1}
              style={styles.inputStyle}
              onChangeText={handleChange('password1')}
              placeholder="password1"
              onBlur={() => setFieldTouched('password1')}
              secureTextEntry={true}
            />
            {touched.password1 && errors.password1 &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password1}</Text>
            }

            <TouchableOpacity style={styles.buttonSignUp} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            {/* <Button
              color="green"
              title='Submit'
            //   disabled={!isValid}
              onPress={handleSubmit}
            /> */}
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },

  inputStyle: {
    borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 12,
      color: 'black'
  },

  buttonSignUp: {
    marginTop: 12,
    alignSelf: 'center',
    width: '50%',
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

});

// console.disableYellowBox = true;