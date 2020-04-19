import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import axios from 'axios';
import ClassicButton from '../reusables/ClassicButton';
import COLORS from '../reusables/Colors';

export default class UserRegistration extends React.Component {
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

  state = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    firstName: '',
    lastName: '',
    termsChecked: true,
    accessToken: '',
    refreshToken: '',
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

  handleRequest() {
    const sign_up_url = 'http://karma-zomp.co.uk/users/';
    const login_url = 'http://karma-zomp.co.uk/o/token/';

    const signUpBodyFormData = new FormData();
    signUpBodyFormData.append('username', this.state.username);
    signUpBodyFormData.append('email', this.state.email);
    signUpBodyFormData.append('first_name', this.state.firstName);
    signUpBodyFormData.append('last_name', this.state.lastName);
    signUpBodyFormData.append('terms_consent', this.state.termsChecked);

    if (this.state.password1 == this.state.password2) {
      signUpBodyFormData.append('password', this.state.password1);
    } else {
      Alert.alert("The passwords don't match.");
      this.state.password1 = '';
      this.state.password2 = '';
    }
    axios
      .post(sign_up_url, signUpBodyFormData)
      .then((sign_up_response) => {
        const logInBodyFormData = new FormData();
        logInBodyFormData.append('username', this.state.username);
        logInBodyFormData.append('password', this.state.password1);

        axios
          .post(login_url, logInBodyFormData)
          .then((login_response) => {
            this._storeAccessToken().bind(login_response.data['access_token']);
            this._storeRefreshToken.bind(login_response.data['refresh_token']);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

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
        <Button
          style={{ fontSize: 20, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this.handleRequest()}
          title="Press Me">
          Press Me
        </Button>

        <ClassicButton
          text="Next"
          lightEndColor={COLORS.lightGreen}
          darkEndColor={COLORS.darkGreen}
          page="IDValidation"
          navigation={this.props.navigation}
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
