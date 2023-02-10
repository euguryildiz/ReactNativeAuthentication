import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Input } from './common/index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
  };

}

onButtonClicked(){
  const { email, password } = this.state;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .catch(() => {

  })

}

  render() {
    return (
      <View style={{ padding: 30 }}>
        <View>
          <Input text="Email" inputPlaceHolder="Enter Email"
          onChangeText={(text) => {
            this.setState({
              email: text
            });
          }}
          value={this.state.email} />
        </View>
        <View>
        <Input text="Password" inputPlaceHolder="Enter Password" 
        secureTextEntry
        onChangeText={(text) => {
          this.setState({
            password: text
          });
        }}
        value={this.state.password} />
        </View>
        <View style={styles.buttonWrapper}>
            <Button onPress={this.onButtonClicked.bind(this)} color='#E87B79' title='Login' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 49,
    justifyContent: 'center',
    fontSize: 17,
  }
})

export default LoginForm;