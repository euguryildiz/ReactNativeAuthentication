import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '@react-native-firebase/app';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyBVXZxEJBEffOMUIRiUBaM08_-1-xNVI94",
      authDomain: "authentication-53d24.firebaseapp.com",
      projectId: "authentication-53d24",
      storageBucket: "authentication-53d24.appspot.com",
      messagingSenderId: "55690661923",
      appId: "1:55690661923:web:50514e95e14b2c8123e196",
      measurementId: "G-Z0LXQDMESC",
      databaseURL: 'https://authentication-53d24-default-rtdb.firebaseio.com/',
    }
    
    ;
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }else {
      firebase.app(); // if already initialized, use that one
   }
   
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Banner text='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F3F3F3',
    flex: 1
  }
});

export default App;