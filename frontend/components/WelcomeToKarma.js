import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import COLORS from './Colors.js';

import heartHands from '../assets/heartHands.png';
import earth from '../assets/peopleGlobe.png';
import Card from './Card.js';

export default class WelcomeToKarma extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeText}>
          <Text style={styles.header}>Welcome to KARMA</Text>
          <Text style={styles.text}>Lorem ipsum dolo sit amet, consectetur adip isicing elit, sed do eiusmod</Text>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          horizontal={true}
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewView}>
          <Card
            imageUri={heartHands} question="Are you an individual?"
            text="Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusm ut labore et dolore magna aliqua"
            navigation={this.props.navigation}
            page="UserRegistration"
          />
          <Card
            imageUri={earth} question="Are you an organization?"
            text="Lorem ipsum dolor sit amet, consectetur adip isicing elit,sed do eiusm ut labore et dolore magna aliqua"
            navigation={this.props.navigation}
            page=""
          />
        </ScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.boldText}>Already on Karma?</Text>
          <View style={styles.buttonView}>
            <LinearGradient
              style={styles.buttonContainer}
              colors={[COLORS.lightGreen, COLORS.darkGreen]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}>
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
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGrey,
    marginTop: Constants.statusBarHeight,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginBottom: 10,
  },
  header: {
    fontSize: 30,
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
  scrollViewView: {
    marginBottom: 20,
  },
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  boldText: {
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  buttonView: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 44,
    margin: 2,
  },
  login: {
    color: COLORS.classicGreen,
    fontSize: 20,
    textAlign: 'left',
  },
});
