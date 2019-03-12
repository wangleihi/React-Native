/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let welcome = "welcome to wanglei"
let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

class Greeting extends Component {
  render() {
    return (
      // <View style={styles.container}>
      <Text>hello {this.props.desc}</Text>
      // {/* </View> */}
    );
  }
}

export default class awesomeRN extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //   {welcome}
      //   </Text>
      //   <Text style={[styles.instructions, {backgroundColor: 'red'}]}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>

      // 加载图片
      // <Image source={pic} style={styles.welcome}></Image>

      // 使用props
      <view>
        <Greeting desc='Rexxar' />
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    width: 200,
    height: 200,
    // backgroundColor: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('awesomeRN', () => awesomeRN);
