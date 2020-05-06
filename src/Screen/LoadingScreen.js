import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from 'firebase';


export default class LoadingScreen extends React.Component {



  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        this.props.navigation.navigate('Home')
      }else{
        this.props.navigation.navigate('LogIn')
      }
    })
  }


  render() {
    return (
      <View style={styles.container}>
       <ActivityIndicator size="large" color="#546e7a" />   
       <Text>This is the loading page ......................</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#546e7a",
    alignItems: 'center',
    justifyContent: 'center',
  },
   
});