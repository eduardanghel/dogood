import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeToKarma from "./components/WelcomeToKarma.js";
import Login from "./components/Login.js";
import ForgotPass from "./components/ForgotPass.js";
import UserRegistration from "./components/UserRegistration.js";
import Card from "./components/Card.js";
import OpenEmail from "./components/OpenEmail.js";

import { Button } from 'react-native-elements';
import styled from 'styled-components';

function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>KARMA</Text>
      <Text style={styles.text}>Lorem ipsum dolo ecte </Text>
      <Text style={styles.text}>adipisicing elit sed do</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('WelcomeToKarma')}
      >
        <Text style={{ color: "white", fontSize: 20, }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: "white", fontSize: 15, }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeToKarma" component={WelcomeToKarma} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerTintColor: '#01b0b0',
            title: ''
          }} />
        <Stack.Screen name="ForgotPass" component={ForgotPass}
          options={{
            headerTintColor: '#01b0b0',
            title: 'Forgot Password',
            headerTitleStyle: {
              textAlign: 'left',
              color: 'black',
              fontSize: 22,
            }
          }} />
        <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistration}
          options={{
            headerTintColor: '#01b0b0',
            title: 'Sign up',
            headerTitleStyle: {
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 26,
              color: 'black',
            }
          }} />
        <Stack.Screen name="OpenEmail" component={OpenEmail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01b0b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 80,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 44,
    width: 200,
    marginBottom: 20,
    marginTop: 10,
    position: 'absolute',
    bottom: 60,
  },
  button: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#01b0b0",
    position: 'absolute',
    bottom: 10,
  },
});
