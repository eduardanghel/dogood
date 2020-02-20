import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>KARMA</Text>
      <Text style={styles.text}>Lorem ipsum dolo ecte </Text>
      <Text style={styles.text}>adipisicing elit sed do</Text>
      <TouchableOpacity style={styles.buttonContainer}>
      <Text style ={{ color: "white", fontSize: 20,}}>Sign Up</Text>  
    </TouchableOpacity> 
    <TouchableOpacity style={styles.button}>
                <Text style ={{ color: "white", fontSize: 15, }}>Already have an account? Login</Text> 
    </TouchableOpacity>

      </View>
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
    marginBottom:20,
    marginTop:10,
    position: 'absolute',
    bottom: 60,
  },
  button: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#01b0b0",
    position: 'absolute',
    bottom: 10,
  },
});
