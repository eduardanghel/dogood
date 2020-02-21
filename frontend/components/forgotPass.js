import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class Index extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0' style={{marginLeft: '20%',marginTop:'3%'}}/></TouchableOpacity>
                <Text style={styles.text}>    Forgot Password</Text>
            </View>
            <View style={{marginLeft: 30,marginRight: 30,}}>
                <Text></Text>
                <Text style={styles.tex}>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed to eiusmod. </Text>
                <Text></Text>
                
                <TextInput
                
            style={{borderBottomWidth:1,borderColor:'#cccccc',paddingBottom:7,}}
                    onChangeText={(Email) => this.setState({ Email })}
                    keyboardType= 'email-address'
                    value={null} placeholder='Email address'
                />
            </View>
            <View style={{marginLeft: 30,marginRight: 30}}>
                <LinearGradient
                style={styles.sty}
                colors={['#00c5c4', '#01a7a6']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                >
                <TouchableOpacity><Text style={styles.te}>Reset Password</Text></TouchableOpacity>
                </LinearGradient>
            </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({

    text:{
        fontSize:22,
        color: 'black',
        marginLeft:-60,

    },
    tex:{
        // textAlign:'center',
        color: '#666666',

    },
    te:{
        fontSize:14,
        textAlign:'center',
        color: 'white',
        position:'relative',
        height:45,
        paddingTop:12,
        

    },
    sty:{
      borderRadius:25,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    //   position:'relative',
      marginTop:320,
        

    }
})

