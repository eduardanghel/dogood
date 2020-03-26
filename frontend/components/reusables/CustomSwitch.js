import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import COLORS from './Colors.js';
import ClassicButton from './ClassicButton.js';

export default class CustomSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
  }

  render() {
    return (
      <Switch
        style={styles.switc}
        onValueChange={value => {
          this.setState({ switchValue: value });
        }}
        trackColor={{ true: COLORS.classicGreen }}
        value={this.state.switchValue}
      />
    );
  }
}
const styles = StyleSheet.create({
  switc: {
    marginTop: 2,
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    padding: 10,
    color: COLORS.classicGreen,
  },
});