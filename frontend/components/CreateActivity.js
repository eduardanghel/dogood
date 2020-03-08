import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Picker, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
    render() {
      return (
        <ScrollView>
         <View>    
            <Text style={styles.text}>Create Activity</Text>
            <Text style={styles.de}>
                    Lorem ipsum dolor sit amet, conse ct etur adip isicing do eiut, sunt in culpa
            </Text>
            <Text style={styles.add}>
            Add photo
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
              <TouchableOpacity style={styles.cam}><Icons name={'camera-alt'} size={20} color='white' /></TouchableOpacity>
              <TouchableOpacity><Text style={styles.upload}>Upload Photo</Text></TouchableOpacity>
            </View>

         </View>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: 'black',
        marginLeft: 20,
        marginTop: 30

    },
    de: {
        fontSize: 15,
        margin: 25,
        marginTop: 30,
        color: '#666666',
    },
    add: {
        fontSize: 17,
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 15,
        color: '#666666',
    },
    cam: {
        backgroundColor: '#01a7a6',
        borderWidth: 0,
        width: 45,
        height: 45,
        borderRadius: 30,
        padding: 12,
        marginLeft: -22,
    },
    upload: {

        borderWidth: 1,
        color: 'gray',
        borderColor: 'gray',
        width: 200,
        height: 42,
        borderRadius: 22,
        textAlign: 'center',
        paddingTop: 10,
        // marginLeft:10,

    },
  });
  