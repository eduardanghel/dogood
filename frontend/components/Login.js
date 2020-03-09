import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import COLORS from './Colors.js';
import ClassicButton from './ClassicButton.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.state = { password: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          {/*<Text style={styles.paragraph}>
            Login
            </Text>
    */}
          <Text style={styles.text}>
            Welcome back!
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor='grey'
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='grey'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 170 }} >
          <Button
            title="Forgot Password?"
            fontSize='10'
            color={COLORS.classicGreen}
            onPress={() => navigate('ForgotPass')}
          />
        </View>

        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
        <ClassicButton textOnButton="Login"
          lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
          page='Feed'
          navigation={this.props.navigation}></ClassicButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: '500',
    //textAlign: 'left',
    //position: 'absolute',
    left: 27,
    marginLeft: -60,
    marginBottom: 10
  },
  text: {
    margin: 25,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: COLORS.classicGreen,

  },
  input: {
    height: 50,
    padding: 10,
    margin: 18,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

  },
  button: {
    marginLeft: 15,
    borderRadius: 22,
    //borderTopRightRadius: 30,
    //borderBottomRightRadius: 30,
    //borderTopLeftRadius: 30,
    //borderBottomLeftRadius: 30,
    width: 300,
    paddingHorizontal: 16,
  },
  loginButton: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
  }
});
