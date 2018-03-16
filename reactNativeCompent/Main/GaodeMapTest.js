import React, { Component } from 'react';
import { 
	View, 
	Text,
	StyleSheet } from 'react-native';

import { MapView } from 'react-native-amap3d';

export default class GaodeMapTest extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.inner}>
      		<MapView
            coordinate={{
              latitude: 37.535434,
              longitude: 122.088159,
            }}
          />
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inner: {
    width: 150,
    height: 400,
  },
});
