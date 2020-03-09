/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import passport from '../assets/passport.png';

export default class UserRegistration2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={passport} />
          <Text style={styles.title}>Verify your account</Text>
          <Text />
          <Text style={styles.paragraph}>
            We need you to verify who you are for your safety and the safety of others.
            It’s quick, easy and totally secure.
          </Text>
          <Text />
          <Text />
          <Text style={styles.paragraph}>
            You will be asked to verify
            using photo ID and your phone number.
          </Text>
        </View>
        <View>
          <LinearGradient
            style={styles.buttonView}
            colors={['#00c5c4', '#01a7a6']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <TouchableOpacity onPress={() => navigate('UserRegistration2')}>
              <Text style={styles.buttonText}>Verify now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#01b0b0',
    fontWeight: '600', // semibold
    textAlignVertical: 'top',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 16,
    color: '#3e3e3e',
    textAlignVertical: 'top',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonView: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView1: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
});
