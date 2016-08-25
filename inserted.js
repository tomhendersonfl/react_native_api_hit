import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class Inserted extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={button_styles.button}>
          <Text> {this.props.customText} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const button_styles = StyleSheet.create({
    button: {
      backgroundColor: '#aaa',
      padding: 10,
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Inserted.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  customText: React.PropTypes.string
};
