import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class UserRegistration extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <View>
          <Text style={styles.h1}>Create a new account</Text>
        </View>
        <View style={styles.fields}>
          <TextInput style={styles.textinput} placeholder="First Name" />
          <TextInput style={styles.textinput} placeholder="Last Name" />
          <TextInput style={styles.textinput} placeholder="Email" />
          <TextInput style={styles.textinput} placeholder="Choose a username" />
          <TextInput style={styles.textinput} placeholder="Password" />
          <TextInput style={styles.textinput} placeholder="Confirm Password" />
        </View>
        <View>
          <LinearGradient
            style={styles.buttonView}
            colors={['#00c5c4', '#01a7a6']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <TouchableOpacity>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
    color: '#01b0b0',
    fontWeight: 'bold',
    textAlignVertical: 'top',
    marginHorizontal: 20,
  },
  fields: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingBottom: 30,
  },
  buttonView: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    fontSize: 16,
    color: 'grey',
    //paddingTop: 20,
    //paddingBottom: 10,
    //marginBottom: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    //marginRight: 40,
    paddingVertical: 10,
    marginVertical:2,
  },
  button: {
    //marginLeft: 15,
    borderRadius: 30,
    //borderTopRightRadius: 30,
    //borderBottomRightRadius: 30,
    //borderTopLeftRadius: 30,
    //borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
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
    alignItems: 'center'
  },
});