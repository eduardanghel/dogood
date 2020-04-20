import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import axios from 'axios';
import qs from 'qs';
import ClassicButton from '../reusables/ClassicButton';
import COLORS from '../reusables/Colors';

import { URLS } from '../constants';

import AsyncStorage from '@react-native-community/async-storage';

export default class UserRegistration extends React.Component {
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

  state = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    firstName: '',
    lastName: '',
    termsChecked: true,
    accessTok: '',
    refreshTok: '',
    expiry: '',
  };

  onUsernameChange(text) {
    this.setState({
      username: text,
    });
  }

  onEmailChange(text) {
    this.setState({ email: text });
  }

  onPassword1Change(text) {
    this.setState({ password1: text });
  }

  onPassword2Change(text) {
    this.setState({ password2: text });
  }

  onFirstNameChange(text) {
    this.setState({ firstName: text });
  }

  onLastNameChange(text) {
    this.setState({ lastName: text });
  }

  // need to add checkbox (for android) and switch (for ios)
  onTermsChanged(text) {
    this.setState({ termsChecked: true });
  }

  signUp = async () => {
    const baseUrl = URLS.signUp;
    console.log(baseUrl);
    const signUpBodyFormData = new FormData();
    signUpBodyFormData.append('username', this.state.username);
    signUpBodyFormData.append('email', this.state.email);
    signUpBodyFormData.append('first_name', this.state.firstName);
    signUpBodyFormData.append('last_name', this.state.lastName);
    signUpBodyFormData.append('terms_consent', this.state.termsChecked);
    signUpBodyFormData.append('password', this.state.password1);

    axios
      .post(baseUrl, signUpBodyFormData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => Alert.alert(error.message));
    setTimeout(function () {}, 500);
  };

  logIn = async () => {
    const baseUrl = URLS.logIn;
    console.log(baseUrl);

    const data = {
      grant_type: 'password',
      client_id: 'karma',
      username: this.state.email,
      password: this.state.password1,
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
    if (this.state.password1 === this.state.password2) {
      await this.signUp();

      await this.logIn();

      this.storeAccessToken(this.state.accessTok);
      this.storeRefreshToken(this.state.refreshTok);
      this.storeTokenTimeout(this.state.expiry);
    } else {
      Alert.alert("The passwords don't match.");
      this.state.password1 = '';
      this.state.password2 = '';
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.regform} behavior="padding">
        <View>
          <Text style={styles.h1}>Create a new account</Text>
        </View>
        <View style={styles.fields}>
          <TextInput
            autoCorrect={false}
            autoCapitalize="words"
            style={styles.textinput}
            placeholder="First Name"
            onChangeText={this.onFirstNameChange.bind(this)}
          />
          <TextInput
            autoCorrect={false}
            autoCapitalize="words"
            style={styles.textinput}
            placeholder="Last Name"
            onChangeText={this.onLastNameChange.bind(this)}
          />
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textinput}
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
          />
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textinput}
            placeholder="Choose a username"
            onChangeText={this.onUsernameChange.bind(this)}
          />
          <TextInput
            secureTextEntry
            TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textinput}
            placeholder="Password"
            onChangeText={this.onPassword1Change.bind(this)}
          />
          <TextInput
            secureTextEntry
            TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textinput}
            placeholder="Confirm Password"
            onChangeText={this.onPassword2Change.bind(this)}
          />
        </View>
        <ClassicButton
          textOnButton="Next"
          lightEndColor={COLORS.lightGreen}
          darkEndColor={COLORS.darkGreen}
          page="IDValidation"
          navigation={this.props.navigation}
          onPress={() => this.handleRequest()}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundGrey,
  },
  h1: {
    fontSize: 24,
    color: COLORS.classicGreen,
    fontWeight: 'bold',
    textAlignVertical: 'top',
    marginHorizontal: 20,
  },
  fields: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingBottom: 30,
    width: '95%',
  },
  buttonView: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    fontSize: 16,
    color: 'grey',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 2,
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  signupButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '85%',
    padding: 20,
    margin: 2,
  },
  btnText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
