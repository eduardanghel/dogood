import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Cube extends Component{
    constructor(props) {
        super(props);
        this.state={button:false}
    }
    render() {
        if(this.props.iconType==="font-awesome5"){
            return (
                <TouchableOpacity style={this.state.button? styles.pressed : styles.unpressed}  onPress ={() => { this.setState({button: !this.state.button}); this.props.changeState(this.props.cause) } }>
                
                <FontAwesome5 size={40} color={this.state.button? 'white' : 'gray'} name={this.props.iconName} ></FontAwesome5>
                <Text style={{color:this.state.button? 'white' : 'gray', fontSize:10,marginTop:8}} > {this.props.text}</Text>
            </TouchableOpacity>
            )
        }

       else  return (
            <TouchableOpacity style={this.state.button? styles.pressed : styles.unpressed}  onPress ={() => { this.setState({button: !this.state.button}); this.props.changeState(this.props.cause) } }>
                
                <Icon size={40} color={this.state.button? 'white' : 'gray'} name={this.props.iconName} type={this.props.iconType}></Icon>
                <Text style={{color:this.state.button? 'white' : 'gray', fontSize:10,marginTop:8}} > {this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles= StyleSheet.create({
    pressed:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 10.00,
        
        elevation: 24,
        height:90,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#01b0b0',
        borderRadius:10,
        margin:8
    },
    unpressed:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 10.00,
        
        elevation: 24,
        height:90,
        width:90,
        paddingTop:17,
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        margin:8
        
      },
      iconPressed:{
          color:"white",
      },
      iconUnpressed:{
          color:'black'
      }
})