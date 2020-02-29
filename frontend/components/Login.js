import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


import Icons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

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
        <View style={{flexDirection:'row'}}>
                 <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0'                   style={{marginLeft: '20%',marginTop:'25%'}}/></TouchableOpacity>
                 <Text style={styles.paragraph}>Login</Text>
                </View>
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
            color='#01b0b0'
            onPress={() => navigate('ForgotPass')}
          />
        </View>

        <View style={{ flex: 3, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 24 }}>
          <LinearGradient
            style={styles.button}
            colors={['#00c5c4', '#01a7a6']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <TouchableOpacity><Text style={styles.loginButton}>Login</Text></TouchableOpacity>
          </LinearGradient>
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
    color: '#01b0b0',

  },
  input: {
    height: 50,
    padding: 10,
    margin: 18,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,

  },
  button: {
    marginLeft: 15,
    borderRadius: 22,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
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
