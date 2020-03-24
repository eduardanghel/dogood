import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';
//import COLORS from './Colors.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navigate.bind(this);
  }

  navigate(txt) {
    this.props.navigation.navigate(txt); //This allows use to use the navigation, you will usually have to write navigation={this.props.navigation}
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 300,
            marginBottom: 20,
            marginTop: 10,
            backgroundColor: 'white',
            borderColor: '#01b0b0',
            borderWidth: 2,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.navigate(this.props.page)}>
          <Text style={{ color: '#01b0b0', fontSize: 20 }}>
            {this.props.textOnButton}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
