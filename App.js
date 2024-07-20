import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './src/SignUpForm'
import SignInForm from './src/SignInForm'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
});
