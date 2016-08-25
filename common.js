import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Img,
  View
} from 'react-native';

import MyButton from './inserted';
var request_url = 'https://salty-eyrie-86402.herokuapp.com/get_tip.json';
var tree_image = 'https://breezometer.com/wordpress/wp-content/uploads/2016/01/nature_big_tree_hd.jpg';


module.exports = class deco extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tip: false
    };
  }

  render() {
    if (this.state.tip){
      return (
        <View style={styles.container}>
          <Image source={{uri: this.state.tip_image}} style={{width: 200, height: 200}}/>
          <Text>Tip of the day : {this.state.tip} </Text>
          <MyButton onPress={() => {this.getTip()}} customText="Get another tip" />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <MyButton onPress={() => {this.getTip()}} customText="Get tip of the day" />
        </View>
      );
    }

  }

  fetchData(url) {
  fetch(url)
     .then((response) => response.json())
     .then((responseData) => {
       var modified_image = responseData.image.replace("http","https");
       var obj = {tip: responseData.info, tip_image: modified_image };
       this.setState(obj);
     })
     .done();
  }

  getTip(){
    console.log("getting tips now...");
    this.fetchData(request_url);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
  },
});
