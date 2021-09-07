import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> hello this is react app </Text>
      </View>
    );
  }
}
