import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Header, Picker, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import { CheckBox } from 'react-native-elements'  
import Icons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {LinearGradient} from 'expo-linear-gradient';
export default class App extends Component {
  constructor(){
    super();
    this.state={ button1:false, button2:false, button3:false, button4:false, button5:false, button6:false, button7:false, button8:false, button9:false
  }
  }
  
 render(){
    return (
      
      <View style={styles.container}> 
      <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Icons name={'arrow-back'} size={30} color='#01b0b0' style={{marginLeft: '5%',marginTop:'3%'}}/></TouchableOpacity>
                <Text style={{fontSize:23}}> Causes </Text>
            </View>
            <Text style={{color:'#01b0b0',marginTop:20,fontSize:25}}>What causes do you care {"\n"} about?</Text>
            <View style= {{flexDirection:'row',marginLeft:15,marginTop:40}}>
            <TouchableOpacity  style={this.state.button1? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button1: !this.state.button1})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button2? styles.pressed : styles.unpressed} 
              onPress ={() => this.setState({button2: !this.state.button2})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity style={this.state.button3? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button3: !this.state.button3})}
              
            >
            </TouchableOpacity>
            </View>
            <View style= {{flexDirection:'row',marginLeft:15,marginTop:10}}>
            <TouchableOpacity  style={this.state.button4? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button4: !this.state.button4})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button5? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button5: !this.state.button5})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button6? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button6: !this.state.button6})}
              
            >
            </TouchableOpacity>
            </View>
            <View style= {{flexDirection:'row',marginLeft:15,marginTop:10}}>
            <TouchableOpacity  style={this.state.button7? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button7: !this.state.button7})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button8? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button8: !this.state.button8})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button9? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button9: !this.state.button9})}
              
            >
            </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignContent:'center'}}>
      
                <TouchableOpacity style={styles.next}>
               
                <Text style ={{ color: "white", fontSize: 20, }}>Next</Text> 
          
    </TouchableOpacity>
            
    </View>
    
         </View>
      
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginTop:30,
    elevation:10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image: {
    height: 300,
    width: 300,
    
  
 },
  pressed:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#01b0b0',
    borderRadius:3,
    marginLeft:10
  },
  unpressed:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:3,
    marginLeft:10
  },
  next:{
    borderRadius:20,
    backgroundColor:'#01b0b0',
    marginTop:40,marginLeft:"10%",
    width:300,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  
})



