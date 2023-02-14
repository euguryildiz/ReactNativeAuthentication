import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Input } from './common/index';
import { firebase } from '@react-native-firebase/auth';

export class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: 'tst@gmail.com',
    password: 'test123',
    error: ''
  };

}

onButtonClicked(){
  const { email, password } = this.state;
  this.setState({
    error: ''
  })

  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .then((loggedInUser) =>{
    console.log(loggedInUser);
  }).catch((err) => {
    console.error(err.toString());
    this.setState({
      error: error
    });
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch((error) => {
      this.setState({
        error: error.toString()
      });
    })
  });



  // firebase.auth().signInWithEmailAndPassword(email,password)
  // .catch((err) => {
  //   debugger;
  //   this.setState({
  //     error: err
  //   });
  //   firebase.auth().createUserWithEmailAndPassword(email,password)
  //   .catch((error) => {
  //     debugger;
  //     this.setState({
  //       error: error
  //     });
  //   })
  // });

}

  render() {
    const { error } = this.state;
    const errorMsg = error ? (
      <Text style={styles.errorMsg}>
        {error}
      </Text>
    ) :
    null;

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
        {errorMsg}
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
  },
  errorMsg: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
})

export default LoginForm;