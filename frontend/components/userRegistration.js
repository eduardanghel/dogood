import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class Regform extends React.Component{
  render() {
    return (
      <View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0' style={{marginLeft: '5%'}}/></TouchableOpacity>
        <Text style={styles.header}>Sign Up</Text>
      </View>

      <View style={styles.regform}>
        <Text style={styles.h1}>Create a new account</Text>

        <TextInput style={styles.textinput} placeholder="First Name" />
        <TextInput style={styles.textinput} placeholder="Last Name" />
        <TextInput style={styles.textinput} placeholder="Email" />
        <TextInput style={styles.textinput} placeholder="Choose a username" />
        <TextInput style={styles.textinput} placeholder="Password" />
        <TextInput style={styles.textinput} placeholder="Confirm Password" />

        <LinearGradient
        style={styles.button}
        colors={['#00c5c4', '#01a7a6']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        >
        <TouchableOpacity><Text style={styles.btnText}>Sign Up</Text></TouchableOpacity>
        </LinearGradient>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    
  },
  header: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  h1: {
    fontSize: 24,
    color: '#01b0b0',
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  textinput: {
    fontSize: 16,
    color: 'grey',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginRight: 40,
  },
  button:{
    marginLeft: 15,
    borderRadius:22,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    width: 300,
    paddingHorizontal: 16,
},
btnText: {
  fontSize: 16,
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: 12,
  marginBottom: 12,
}
});