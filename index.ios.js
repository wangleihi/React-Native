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
  Image,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
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
  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }

  constructor(props) {
    super(props);
    this.state={isLoading: true}
  }

  // 获取电影列表
  getMovies () {
  return fetch ('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

  render() {
    // 展示loading
    if(this.state.isLoading) {
      return (
        <View style={{flex:1, padding:20}}>
        <ActivityIndicator></ActivityIndicator>
        </View>
      );
    }

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

      // 按钮使用
      // <View style={styles.container}>
      //   {/* <Button onPress={this._onPressButton}
      //   title="fefef"
      //   >
      //   </Button> */}
      //   <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
      //   <View style={styles.button}>
      //   <Text>fwefwe</Text>
      //   </View>
      //   </TouchableHighlight>

      //   <TouchableOpacity onPress={this._onPressButton}>
      //     <View style={styles.button}>
      //       <Text>TouchableOpacity</Text>
      //     </View>
      //   </TouchableOpacity>
      // </View>

      // 构造listView展示电影列表
      <View style={{flex:1, padding:20}}>
        <FlatList 
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
        keyExtractor={(item, index) => item.id}
        ></FlatList>
      </View>
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
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});

AppRegistry.registerComponent('awesomeRN', () => awesomeRN);
