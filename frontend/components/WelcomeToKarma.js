/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import heart from '../assets/heart.png';
import earth from '../assets/earth.png';
import Card from './Card';

export default class WelcomeToKarma extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.header}>Welcome to KARMA</Text>
            <Text style={styles.text}>
              Lorem ipsum dolo sit amet,
              consectetur adip isicing elit, sed do eiusmod
            </Text>
          </View>
          <ScrollView
            scrollEventThrottle={16}
            horizontal
            alwaysBounceVertical={false}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewView}
          >
            <Card navigation={this.props.navigation} imageUri={heart} question="Are you an individual?" page="UserRegistration" />
            <Card navigation={this.props.navigation} imageUri={earth} question="Are you an organization?" page="" />
          </ScrollView>
          <View style={styles.bottomView}>
            <Text style={styles.boldText}>Already on Karma?</Text>
            <View style={styles.buttonView}>
              <LinearGradient
                style={{ borderRadius: 22, alignItems: 'center', justifyContent: 'center', }}
                colors={['#00c5c4', '#01a7a6']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
              >
                <TouchableOpacity
                  onPress={() => navigate('Loginate')}
                >
                  <View style={styles.loginButton}>
                    <Text style={styles.login}>Login</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
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
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 44,
    margin: 2,
  },
  login: {
    color: '#01b0b0',
    fontSize: 20,
    textAlign: 'left',
  },
});
