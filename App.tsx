import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export class App extends Component {

  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBVXZxEJBEffOMUIRiUBaM08_-1-xNVI94",
      authDomain: "authentication-53d24.firebaseapp.com",
      projectId: "authentication-53d24",
      storageBucket: "authentication-53d24.appspot.com",
      messagingSenderId: "55690661923",
      appId: "1:55690661923:web:841cd2e36528ff0223e196",
      measurementId: "G-ZNQH5JVFT2"
    });
  }


  render() {
    return (
      <View>
        <Text> Test </Text>
      </View>
    )
  }
}

export default App;