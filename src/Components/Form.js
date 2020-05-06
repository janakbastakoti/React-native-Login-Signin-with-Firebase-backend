import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Form extends Component {
  
  render() {
    return (
      <View >
      <TextInput
        style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter Email '
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        onSubmitEditing ={() => this.password.focus()}
        />
      <TextInput
        style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter password'
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
        secureTextEntry={true}
        ref={(input) => this.password = input}
        />   
     
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttontext}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputbox: {
    fontSize: 15,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal: 16,
    marginVertical:10,
  },
  buttontext: {
    fontSize:16,
    fontWeight:'500',
    color: '#ffffff',
    textAlign:'center',
  },
  button: {
    fontSize: 15,
    height: 30,
    color: '#1b0000',
    borderRadius:25,
    paddingHorizontal: 16,
    marginVertical:10,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign:'center',
  }
  });

 