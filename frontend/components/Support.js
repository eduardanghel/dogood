import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import Card from './card.js';


export default class App extends Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.header}>Welcome to KARMA</Text>
            <Text style={styles.text}>Hi !</Text>
          </View>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewView}>
            <Card question="browse and sign up for activities in your area. "></Card>
            <Card question="Get help on tasks from your trusted community. "></Card>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginBottom: 10,
  },
  scrollViewView: {
    //alignItems: 'center',
    //pagingEnabled: 'true',
    //showPageIndicator: 'true',
    marginBottom: 20,
  },
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  buttonView: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'left'
  },
  text: {
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'left'
  },
  boldText: {
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  loginButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 44,
    width: '85%',
    padding: 20,
    backgroundColor: 'white',
    margin: 2,
  },
  login: {
    color: '#01b0b0',
    textAlign: 'center',
    fontSize: 20,
  },
});
      

