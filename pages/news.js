import React from 'react'
import { ImageBackground } from 'react-native';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function news({ route }) {
  const {title,content,img_url}=route.params;
  return (
  <SafeAreaView >
    <ScrollView>
    <View style={styles.thumbContainer}>
        <ImageBackground source={img_url ? { uri: img_url } : null} style={styles.thumbnail}></ImageBackground>
     </View> 
      <View>
        <Text style={styles.textStyle}>
        {title}
        </Text>
        <Text style={styles.textStyle}>
        -
        </Text>
        <Text style={styles.textStyle}>
        {content} 
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft:15,
    marginRight:15,
    fontSize: 20,
    textAlign: 'justify',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  cardImage: { 
    width: 400,
    height: 250 ,
    margin:5,
    marginLeft: 5,
    borderRadius : 10
    },
  thumbContainer: {
    width: '100%',
    height: 300,
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  },
});