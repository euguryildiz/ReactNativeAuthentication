import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Input } from './common/input';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <View>
          <Input text="Email" inputPlaceHolder="Enter Email"/>
            <Text>Email</Text>
        </View>
        <View>
            <Text>Password</Text>
        </View>
        <View>
            <Button title='Login' />
        </View>
      </View>
    )
  }
}

export default LoginForm;