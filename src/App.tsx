import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <View>
        <Banner text="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;