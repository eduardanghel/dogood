import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';

export default class Contact extends React.Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0'                   style={{marginLeft: '20%',marginTop:'25%'}}/></TouchableOpacity>
                 <Text style={styles.text}>Contact Info</Text>
                </View>
                <Text style={styles.te}>
                 Where are you located?
                </Text>
                <Text style={styles.de}>
                 Charities need to know this info, and it lets us show your local events
                </Text>
                <Text style={styles.padding}>
                Address Line 1
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                Address Line 2
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                County / State
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                County / State                        Postcode
                </Text>
                <View style={styles.row}>
                 <TextInput style={styles.textinput2} placeholder="                       " />
                 <TextInput style={styles.textinput2} placeholder="                           " />
                </View>
                <Text style={styles.padding}>
                Phone Number
                </Text>
                <TextInput style={styles.textinput} placeholder="" />

                <View style={{flex: 3, justifyContent: 'space-evenly', alignItems:                          'center',marginVertical: 24}}>
                 <LinearGradient
                  style={styles.button}
                  colors={['#00c5c4', '#01a7a6']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                 >
                  <TouchableOpacity>
                   <Text style={styles.login}>Next</Text>
                  </TouchableOpacity>
                 </LinearGradient>
                </View>
     
            </View>


        );




        
    }
   
}
const styles = StyleSheet.create({

    text:{
        fontSize:22,
        color: 'black',
        marginLeft:-40,
        marginTop:25
    },
    te:{
        margin: 25,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: '#01b0b0',
    },
    de:{
        fontSize: 14,
        margin: 25,
        marginTop: 1,
        color: '#666666',
    },
    textinput:{
        fontSize: 15,
        color: 'grey',
        paddingTop: 15,
        paddingBottom: 8,
        marginBottom: 10,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        marginLeft: 25,
        marginRight: 25
    },
    textinput2:{
        fontSize: 15,
        color: 'grey',
        paddingTop: 15,
        paddingBottom: 8,
        marginBottom: 10,
        marginTop: 1,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        marginLeft: 25,
        marginRight: 63,
    },
    padding:{
        fontSize: 14,
        color: 'grey',
        marginLeft: 25,
    },
    row: {
        //flex: 1,
        flexDirection: "row"
    },
    login: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 12,
    },
    button:{
        marginLeft: 15,
        borderRadius:22,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 300,
        paddingHorizontal: 16,
    },

})