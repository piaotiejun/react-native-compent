import React, { Component } from 'react';
import { 
  ActivityIndicator, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text 
} from 'react-native';


export default class MyActivityIndicator extends Component {

  constructor() {
    super();
    this.state = {
      animating: true
    };
  }
  timer;
  
  componentDidMount() {
    this.timer = setInterval(()=>{
      var animating = this.state.animating;
      animating = animating ? false : true;
      this.setState({
        animating: animating
      })
    }, 5000)
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

  render() {
    let loaded = <Text>加载完毕</Text>;

    let loading = <View>
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="small"
          color='red' />
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          color="red"
          size="large" />
      </View>;

    return (
      <View style={styles.container}>
        {this.state.animating ? loading : loaded}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});