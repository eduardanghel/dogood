import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Switch,
  Icon,
  Image,
} from 'react-native';
import COLORS from './Colors.js';

export default class WhiteButton extends Component {
  constructor(props) {
    super(props);
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
            flexDirection: "row"
          }}
          onPress={() => this.navigate(this.props.page)}>
          <Image style={styles.logo} name = {this.props.iconName}/> 
          <Text style={{ color: '#01b0b0', fontSize: 20 }}>
            {this.props.textOnButton}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 10,
    width: 10,
    alignItems: 'left'
  }
});