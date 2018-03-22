import SplashScreen from 'react-native-splash-screen';
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

import HelloWorldApp from './Main/HelloWorld';
import MyActivityIndicator from './Main/MyActivityIndicator';
import GaodeMapTest from './Main/GaodeMapTest';
import GaodeMapTest1 from './Main/GaodeExample/index';
import ImagePickerTest from './Main/ImagePickerTest';
import ImagePickerMutiTest from './Main/ImagePicker/ImagePickerExample';
import ToastTest from './Main/ToastTest';
import SplashScreenTest from './Main/SplashScreenTest';
import tcombTest from './Main/tcombTest';
import FormTest from './Main/FormTest/app';
import TextInputLayoutDemo from './Main/TextInputTest/TextinputlayoutTest';
import TextInputEffectsExample from './Main/TextInputTest/TextInputEffectsExample';
import styleTest from './Main/styleTest/index';
import VideoPlayer from './Main/VideoTest/index.ios';
import PopupDialogExample from './Main/PopupDialog/PopupDialogExample';


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
    title: 'react native examples',
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
          {this._renderItem('HelloWorldApp', 'HelloWorldApp')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('MyActivityIndicator', 'MyActivityIndicator')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('GaodeMapTest', 'GaodeMapTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('GaodeMapTest1', 'GaodeMapTest1')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('ImagePickerTest', 'ImagePickerTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('ImagePickerMutiTest', 'ImagePickerMutiTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('ToastTest', 'ToastTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('tcombTest', 'tcombTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('FormTest', 'FormTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('TextInputLayoutDemo', 'TextInputLayoutDemo')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('TextInputEffectsExample', 'TextInputEffectsExample')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('styleTest', 'styleTest')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('VideoPlayer', 'VideoPlayer')}
          <View style={styles.separator} />
        </View>
        <View style={styles.group}>
          {this._renderItem('PopupDialogExample', 'PopupDialogExample')}
          <View style={styles.separator} />
        </View>
      </ScrollView>
    )
  }
}

const app = StackNavigator({
  Examples: { screen: Examples},
  HelloWorldApp: { screen: HelloWorldApp },
  MyActivityIndicator: { screen: MyActivityIndicator },
  GaodeMapTest: { screen: GaodeMapTest },
  GaodeMapTest1: { screen: GaodeMapTest1 },
  ImagePickerTest: { screen: ImagePickerTest },
  ImagePickerMutiTest: { screen: ImagePickerMutiTest },
  ToastTest: { screen: ToastTest },
  tcombTest: { screen: tcombTest },
  FormTest: { screen: FormTest },
  TextInputLayoutDemo: { screen: TextInputLayoutDemo },
  TextInputEffectsExample: { screen: TextInputEffectsExample },
  styleTest: { screen: styleTest },
  VideoPlayer: { screen: VideoPlayer },
  PopupDialogExample: { screen: PopupDialogExample },
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

AppRegistry.registerComponent(
  'reactNativeCompent', 
  () => {
    SplashScreen.hide();
    return app;
  }
);
