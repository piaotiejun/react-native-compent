import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View, TouchableHighlight
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
var t = require('tcomb-form-native');
var Form = t.form.Form;
var form = null;

var options = {}; // optional rendering options (see documentation)
var options = {
  fields: {
    name: {
      // you can use strings or JSX
      help: 'Your help message here',
      placeholder: 'Your placeholder here',
      label: 'Insert your name',
      error: 'Insert a valid email'
    }
  }
};

export default class AwesomeProject extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  onPress() {
    // call getValue() to get the values of the form
    console.log(this);
    console.log(form);
    let value = form.getValue();
    // var value = this._form.getValue();
    // var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    // here we are: define your domain model
    var Person = t.struct({
      name: t.String,              // a required string
      surname: t.maybe(t.String),  // an optional string
      age: t.Number,               // a required number
      rememberMe: t.Boolean        // a boolean
    });

    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref={(form1)=>{form = form1;}}
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
