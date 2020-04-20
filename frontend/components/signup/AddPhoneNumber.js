import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';
import { URLS } from '../constants';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

export default class AddPhoneNumber extends React.Component {
  _retrieveData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      return accessToken;
    } catch (error) {}
  };

  state = {
    phoneNumber: '',
  };

  onPhoneNumberChange(text) {
    this.setState({ phoneNumber: text });
  }

  handleRequest = async () => {
    const baseUrl = URLS.userProfile;
    const token = await this._retrieveData();

    const body = new FormData();
    body.append('telephone', this.state.phoneNumber);

    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .post(baseUrl, body, config)
      .then((response) => {
        this.props.navigation.navigate('VerifyPhoneNumber');
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.form}>
          <Text style={styles.title}>Verify your phone number</Text>
          <Text />
          <Text style={styles.text}>
            We will send you a verification code to verify your phone.
          </Text>
          <Text />
          <View style={styles.input}>
            <Text style={styles.phoneTextStyle}>+44</Text>
            <TextInput
              style={styles.textInput}
              placeholder="                                                                          "
              // space in the placeholder only for correct look
              onChangeText={this.onPhoneNumberChange.bind(this)}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <ClassicButton
            textOnButton="Next"
            lightEndColor={COLORS.lightGreen}
            darkEndColor={COLORS.darkGreen}
            onPress={() => this.handleRequest()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flex: 5,
  },
  title: {
    fontSize: 24,
    color: '#01a7a6',
    fontWeight: '500', // semibold
    textAlignVertical: 'top',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#3e3e3e',
    textAlignVertical: 'top',
    marginHorizontal: 20,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  textInput: {
    fontSize: 16,
    color: 'grey',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 30,
    marginVertical: 2,
  },
  fields: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingBottom: 30,
    width: '95%',
  },
  input: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
  },
  phoneTextStyle: {
    marginTop: 2,
    fontSize: 16,
    color: 'grey',
  },
});
