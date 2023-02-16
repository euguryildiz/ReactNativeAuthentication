import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, MyButton } from './common/index';
import { firebase } from '@react-native-firebase/auth';

export class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: 'yldz2534@gmail.com',
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
  .catch((err) => {
    console.log(err["message"]);
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch((error) => {
      this.setState({
        error: error["message"],
        loading: false
      });
    })
  });

}

  render() {
    const { error, loading } = this.state;
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
        <MyButton spinner={loading} 
          title='Login' 
          onPress={this.onButtonClicked.bind(this)} 
          color='#E87B79'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  errorMsg: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
})

export default LoginForm;