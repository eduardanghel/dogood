import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import WelcomeToKarma from "./components/WelcomeToKarma.js";
import Login from "./components/Login.js";
import ForgotPass from "./components/ForgotPass.js";
import UserRegistration from "./components/UserRegistration.js";
import OpenEmail from "./components/OpenEmail.js";
import Card from "./components/Card.js";
import Feed from "./components/Feed.js";

function InitialScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <LinearGradient
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}
        colors={['#00c5c4', '#01a7a6']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}>
        <Text style={styles.textHeader}>KARMA</Text>
        <Text style={styles.text}>Lorem ipsum dolo ecte </Text>
        <Text style={styles.text}>adipisicing elit sed do</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Back')}
        >
          <Text style={{ color: "white", fontSize: 20, }}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Loginate')}
        >
          Already have an account? Login
            </Text>
      </LinearGradient>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Back" component={WelcomeToKarma} options={{ headerShown: false }} />
        <Stack.Screen name="UserRegistration"
          component={UserRegistration}
          options={{
            headerTintColor: '#01b0b0',
            title: 'Sign up',
            headerTitleStyle: {
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 22,
              color: 'black',
            }
          }} />
        <Stack.Screen name="Loginate" component={Login}
          options={{
            headerTintColor: '#01b0b0',
            title: 'Login',
            headerTitleStyle: {
              textAlign: 'left',
              color: 'black',
              fontSize: 22,
            }
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
        <Stack.Screen name="OpenEmail" component={OpenEmail}
          options={{
            headerTintColor: '#01b0b0',
            title: "Forgot Password",
            headerTitleStyle: {
              textAlign: 'left',
              color: 'black',
              fontSize: 22,
            }
          }} />
          <Stack.Screen name="Card" component={Card}/>
          <Stack.Screen name="Feed" component={Feed} options={{headerShown: false}}/></Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginText: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    bottom: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
