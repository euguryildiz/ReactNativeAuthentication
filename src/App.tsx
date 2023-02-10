import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
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
      appId: "1:55690661923:web:841cd2e36528ff0223e196",
      measurementId: "G-ZNQH5JVFT2"
    };
    
    const app = initializeApp(firebaseConfig);
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