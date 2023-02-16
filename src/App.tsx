import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';
import { firebase } from '@react-native-firebase/auth';
import {Spinner, MyButton } from './components/common/index';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state ={
    loggedIn: null
    };

    this.renderContent = this.renderContent.bind(this);
  }


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
    };

    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }

    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      console.log(loggedIn);
      this.setState({
        loggedIn: loggedIn
      })
    });
  }


  renderContent (){
    const {loggedIn} =  this.state;

    switch(loggedIn) {
      
      case true: 
      return (
        <MyButton spinner={false} 
          title='Logout' 
          onPress={() => firebase.auth().signOut()} 
          color='#E87B79'/>
      )
      case false:
        return (
          <LoginForm />
        )
      default: {
        return (
          <Spinner />
        )
      }
    }


  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Banner text='Authentication' />
        {this.renderContent()}
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