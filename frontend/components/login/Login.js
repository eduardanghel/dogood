import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';
import axios from 'axios';
import { URLS } from '../constants';

export default class Login extends Component {
  storeRefreshToken(string) {
    AsyncStorage.setItem('refreshToken', string);
    console.log(AsyncStorage.getItem('refreshToken'));
  }

  storeAccessToken(string) {
    AsyncStorage.setItem('accessToken', string);
    console.log(AsyncStorage.getItem('accessToken'));
  }

  storeTokenTimeout(value) {
    AsyncStorage.setItem('expiresIn', value);
    console.log(AsyncStorage.getItem('expiresIn'));
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      accessTok: '',
      refreshTok: '',
      expiry: '',
    };
  }

  logIn = async () => {
    const baseUrl = URLS.logIn;
    console.log(baseUrl);

    const data = {
      grant_type: 'password',
      client_id: 'karma',
      username: this.state.email,
      password: this.state.password,
    };

    axios
      .post(baseUrl, qs.stringify(data))
      .then((response) => {
        this.setState({ accessTok: response.data['access_token'] });
        this.setState({ refreshTok: response.data['refresh_token'] });
        this.setState({ expiry: response.data['expires_in'] });
      })
      .catch((error) => Alert.alert(error.message));
  };

  handleRequest = async () => {
    await this.signUp();

    await this.logIn();

    this.storeAccessToken(this.state.accessTok);
    this.storeRefreshToken(this.state.refreshTok);
    this.storeTokenTimeout(this.state.expiry);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          {}
          <Text style={styles.text}>Welcome back!</Text>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="grey"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.text}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 170 }}>
          <Button
            title="Forgot Password?"
            fontSize="10"
            color={COLORS.classicGreen}
            onPress={() => navigate('ForgotPass')}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <ClassicButton
            textOnButton="Login"
            lightEndColor={COLORS.lightGreen}
            darkEndColor={COLORS.darkGreen}
            page="Feed"
            navigation={this.props.navigation}
          />
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
    left: 27,
    marginLeft: -60,
    marginBottom: 10,
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
  },
});
