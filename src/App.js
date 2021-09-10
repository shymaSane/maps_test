import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Style';

const App = () => {
  return (
    <SafeAreaView style={styles.mapContainer}>
      <StatusBar barStyle="light-content" />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 31.85083048650159,
          longitude: 36.031689212485695,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
