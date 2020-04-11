import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Header, Picker, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import ClassicButton from '../../reusables/ClassicButton';
import COLORS from '../../reusables/Colors';
import Cube from '../../reusables/Cube';
import Grid from '../../reusables/Grid';

//todo: make reusable grid and cube.
export default class CausesSelection extends Component {
  constructor(){
    super();
    this.state={ button1:false, button2:false, button3:false, button4:false, button5:false, button6:false, button7:false, button8:false, button9:false
  }
  }
  
 render(){
    return (
      <ScrollView>
      <View style={styles.container}> 
     
            <Text style={{color:'#01b0b0',fontSize:25, marginTop: 20, textAlign: 'center'}}>What causes do you care about?</Text>
            <Grid style={{marginTop: 200}}></Grid>
            <View style={{flexDirection:'row',margin:5,marginBottom:20}}>
            <ClassicButton
                    
                    textOnButton="Update"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page="Feed"
                ></ClassicButton>
            </View>
       
         </View>
         </ScrollView>
      
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    elevation:10,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  }
 
  
})



