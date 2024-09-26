import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

export default function Forgot_pass() {
  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />

      <Text style={{ marginLeft: -13,marginBottom:20 }}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
      <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 34, color: 'black', marginBottom: 50 }}>Forgot Password </Text>
      <Text style={{color:'black',fontSize:17,marginTop:45,marginBottom:20,lineHeight:25}}>Please, enter your email address. You wil receive a link to create a new password via email.</Text>
      <View>

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#9B9B9B'
        />

        <TouchableOpacity style={{
          width: '100%',
          backgroundColor: '#DB3022',
          marginVertical: 10,
          paddingVertical: 16,
          color: 'white',
          borderRadius: 50,
          fontWeight: '500',
          alignItems: 'center',
          marginTop: 70
        }}><Text style={{ color: 'white', fontSize: 17, fontFamily: 'Metropolis-Medium' }}>SEND</Text></TouchableOpacity>
   
    </View>
        </View>

  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,

  }
})


