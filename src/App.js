import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle = "dark-content"/>
      </SafeAreaView>
    );
  }
}
