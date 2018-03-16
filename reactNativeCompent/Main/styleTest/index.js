import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { 
	AppRegistry, 
	View,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';

import FlexDirectionBasics from './FlexDirection';
import JustifyContentBasics from './JustifyContent';
import AlignItemsBasics from './AlignItems';


const styles = StyleSheet.create({
  scrollView: {
    ...Platform.select({
      android: {
        backgroundColor: '#f5f5f5',
      },
    }),
  },
  container: {
    paddingBottom: 15,
  },
  group: {
    marginTop: 15,
  },
  item: {
    padding: 15,
    backgroundColor: '#fff',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#424242',
  },
})

let Touchable = TouchableHighlight
if (Platform.OS === 'android') {
  Touchable = TouchableNativeFeedback
}

class Examples extends Component {
  static navigationOptions = {
    title: 'style examples',
  }

  _renderItem(title, route) {
    return (
      <Touchable onPress={() => this.props.navigation.navigate(route)}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{title}</Text>
        </View>
      </Touchable>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <View style={styles.group}>
          {this._renderItem('FlexDirectionBasics', 'FlexDirectionBasics')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('JustifyContentBasics', 'JustifyContentBasics')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('AlignItemsBasics', 'AlignItemsBasics')}
        </View>
      </ScrollView>
    )
  }
}

export default StackNavigator({
  Examples: { screen: Examples},
  FlexDirectionBasics: { screen: FlexDirectionBasics },
  JustifyContentBasics: { screen: JustifyContentBasics },
  AlignItemsBasics: { screen: AlignItemsBasics },
}, {
  navigationOptions: {
    headerTintColor: '#212121',
    headerStyle: {
      ...Platform.select({
        ios: {
          backgroundColor: '#fff',
        },
        android: {
          backgroundColor: '#f5f5f5',
        },
      }),
    },
  },
})