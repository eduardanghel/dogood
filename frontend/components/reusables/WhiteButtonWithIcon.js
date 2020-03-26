import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';

export default class WhiteButtonWithIcon extends Component {
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
            //justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => this.navigate(this.props.page)}>
          <Icon style={styles.logo} name={this.props.iconName} />
          <Text style={styles.text}>
            {this.props.textOnButton}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 15,
    width: 15,
    alignItems: 'left',
    marginLeft: 25
  },
  text: {
    color: '#01b0b0',
    //alignItems: 'left',
    fontSize: 20,
    marginLeft: 70,
  },
});
