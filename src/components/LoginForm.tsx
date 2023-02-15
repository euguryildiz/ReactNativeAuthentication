import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Input } from './common/index';
import { Spinner } from './common/index';
import { firebase } from '@react-native-firebase/auth';

export class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: 'tst@gmail.com',
    password: 'test123',
    error: '',
    loading: false
  };

}

onButtonClicked(){
  const { email, password } = this.state;
  this.setState({
    error: '',
    loading: true
  })

  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .then((loggedInUser) =>{
    console.log(loggedInUser);
  }).catch((err) => {
    // console.error(err["message"]);
    // this.setState({
    //   error: err["message"],
    // });
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((loggedInUser) =>{
      console.log(loggedInUser);
      this.setState({
        loading: false
      })
    }).catch((error) => {
      this.setState({
        error: error["message"],
        loading: false
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
    const { error, loading } = this.state;
    const errorMsg = error ? (
      <Text style={styles.errorMsg}>
        {error}
      </Text>
    ) :
    null;


    const loginButton = loading ? (
      <Spinner />
    ) : (
      <Button onPress={this.onButtonClicked.bind(this)} color='#E87B79' title='Login' />
    )

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
            {loginButton}
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