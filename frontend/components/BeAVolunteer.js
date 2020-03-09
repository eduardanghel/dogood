import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import VolunteerCard from "./VolunteerCard.js";
import COLORS from './Colors.js';

export default class BeAVolunteer extends Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to KARMA</Text>
          <Text style={styles.subTitle}>Hi Jane!</Text>
        </View>
        <View style={styles.scrollStyle}>
          <ScrollView
            scrollEventThrottle={16}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}>
              <VolunteerCard header="Be a volunteer" body="Browse and sign up for activities in your area." textButton="Search"
                lightColour={COLORS.lightGreen} darkColour={COLORS.darkGreen}/>
              <VolunteerCard header="Request help" body="Get help on tasks from your trusted community." textButton="Request"
                lightColour={COLORS.lightRed} darkColour={COLORS.darkRed}/>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  safeStyle:{
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor: COLORS.backgroundGrey,
  },
  container: {
    paddingHorizontal:40,
    marginTop:Constants.statusBarHeight,
  },
  title:{
    fontSize:30,
    marginBottom:20,
  },
  subTitle:{
    fontSize:15,
    marginBottom:20,
  },
 scrollStyle:{
   justifyContent:"center",
   paddingHorizontal:30,
 }
});
      

