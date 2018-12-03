import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount(){
      firebase.initializeApp({
          apiKey: 'AIzaSyByw5kv8AA81cop4BhArKK_o8QF9Kjb_Xk',
          authDomain: 'authentication-6ac6d.firebaseapp.com',
          databaseURL: 'https://authentication-6ac6d.firebaseio.com',
          projectId: 'authentication-6ac6d',
          storageBucket: 'authentication-6ac6d.appspot.com',
          messagingSenderId: '670131590128'
      });
  }

  render(){
    return(
      <View>
          <Header headerText="Authentication" />
          <LoginForm />
      </View>
    )
  }
}

export default App;
