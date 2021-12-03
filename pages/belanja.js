import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Post() {
  const [user, setUser] = useState({
    name: '',
    gender: '',
    email: '',
    status: '',
  });

  const [loading, setLoading] = useState(false);

  // const onChangeName = (value) => {
  //   setUser({ ...user, name: value });
  // };

  // const onChangeGender = (value) => {
  //   setUser({ ...user, gender: value });
  // };

  const onChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeStatus = (value) => {
    setUser({ ...user, status: value });
  };

  const saveData = () => {
    if(user.name == '') {
      alert('isi terlelbih dahulu')
    }
    setLoading(true);
    var myHeaders = new Headers();

    // myHeaders.append(
    //   'Authorization',
    //   'Bearer 7fbed29b04efe4a922c079c6489b08aa813e77942563516c33f30f0773c75f5d'
    // );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        // name: user.name,
        // gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then((response) => {
        setLoading(false)
        console.log(response)
        // response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder={'Name'}
        placeholderTextColor="grey" 
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      /> */}
      {/* <TextInput
        placeholder={'Gender'}
        placeholderTextColor="grey" 
        onChangeText={(value) => onChangeGender(value)}
        style={styles.input}
      /> */}
      <TextInput
        placeholder={'Email'}
        placeholderTextColor="grey" 
        onChangeText={(value) => onChangeEmail(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Password'}
        placeholderTextColor="grey" 
        onChangeText={(value) => onChangeStatus(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'Menyimpan...' : 'Simpan'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    color: 'black'
  },
});
