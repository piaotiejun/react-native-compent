import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet } from 'react-native';

import { MapView } from 'react-native-amap3d';

export default class GaodeMapTest extends Component {
  render() {
    return (
  		<MapView style={StyleSheet.absoluteFill}
        coordinate={{
          latitude: 37.535434,
          longitude: 122.088159,
        }}
      />
    );
  }
}
