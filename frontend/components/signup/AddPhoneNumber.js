import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';

export default class AddPhoneNumber extends React.Component {
  state = {
    phoneNumber: '',
  };

  onPhoneNumberChange(text) {
    this.setState({ phoneNumber: text });
  }

  handleRequest() {
    const base_url = 'http://karma-zomp.co.uk/users/user_profile/';

    const bodyFormData = new FormData();
    bodyFormData.append('telephone', this.state.phoneNumber);

    if (this.state.password1 == this.state.password2) {
      bodyFormData.append('password', this.state.password1);
    } else {
      Alert.alert("The passwords don't match.");
      this.state.password1 = '';
      this.state.password2 = '';
    }

    axios
      .post(base_url, bodyFormData)
      .then((response) => ({ response }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Verify your phone number</Text>
          <Text />
          <Text style={styles.text}>
            We will send you a verification code to verify your phone.
          </Text>
          <Text />
          <View style={styles.input}>
            <Text style={styles.phonetxt}>+44</Text>
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
            page="VerifyPhoneNumber"
            navigation={this.props.navigation}
          />
        </View>
      </SafeAreaView>
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
    // textAlign: 'center',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#3e3e3e',
    textAlignVertical: 'top',
    // textAlign: 'center',
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
    // paddingVertical: 10,
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
  phonetxt: {
    marginTop: 2,
    fontSize: 16,
    color: 'grey',
  },
});
