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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      accessToken: '',
      refreshToken: '',
    };
  }

  _storeRefreshToken = async () => {
    try {
      await AsyncStorage.setItem('refreshToken', this.state.refreshToken);
    } catch (error) {}
  };

  _storeAccessToken = async () => {
    try {
      await AsyncStorage.setItem('accessToken', this.state.accessToken);
    } catch (error) {}
  };

  onAccessTokenChange(text) {
    this.setState({
      accessToken: text,
    });
    this._storeAccessToken();
  }

  onRefreshTokenChange(text) {
    this.setState({
      refreshToken: text,
    });
    this._storeRefreshToken();
  }

  handleRequest() {
    const login_url = 'http://karma-zomp.co.uk/o/token/';

    const loginBodyForm = new FormData();
    loginBodyForm.append('username', this.state.username);
    loginBodyForm.append('username', this.state.password);

    axios
      .post(login_url, loginBodyForm)
      .then((login_response) => {
        this._storeAccessToken().bind(login_response.data['access_token']);
        this._storeRefreshToken.bind(login_response.data['refresh_token']);
      })
      .catch((error) => console.log(error));
  }

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
