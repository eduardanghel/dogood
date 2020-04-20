import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Cube from "../reusables/Cube";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements'
export default class Grid extends Component {
  constructor(props) {
    super(props);
 
  }
  render() {
    return (
        
        <View style={{}}>
      
        <View style={{ flexDirection: "row",  }}>
          <Cube iconName="users" iconType="font-awesome5" text="Community" changeState={this.props.changeState} cause="community" />
          <Cube iconName="coins" iconType="font-awesome5" text="Poverty" changeState={this.props.changeState} cause="poverty"/>
          <Cube iconName="paw" iconType="font-awesome" text="Animals" changeState={this.props.changeState} cause="animals"/>
        </View>

        <View style={{ flexDirection: "row",  }}>
        <Cube iconName="home" iconType="font-awesome5" text="Homeless" changeState={this.props.changeState} cause="homeless"/>
        <Cube iconName="hamburger" iconType="font-awesome5" text="Food" changeState={this.props.changeState} cause="food"/>
        <Cube iconName="graduation-cap" iconType="font-awesome5" text="Education" changeState={this.props.changeState} cause="education"/>
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="heart" iconType="font-awesome" text="Health" changeState={this.props.changeState} cause="health"/>
        <Cube iconName="equals" iconType="font-awesome5" text="Equality" changeState={this.props.changeState} cause="equality"/>
        <Cube iconName="praying-hands" iconType="font-awesome5" text="Religious" changeState={this.props.changeState} cause="religious"/>
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="exclamation-triangle" iconType="font-awesome5" text="Crisis" changeState={this.props.changeState} cause="crisis"/>
        <Cube iconName="palette" iconType="font-awesome5" text="Arts and Culture" changeState={this.props.changeState} cause="arts"/>
        <Cube iconName="md-battery-charging" iconType="ionicon" text="Energy" changeState={this.props.changeState} cause="energy"/>
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="leaf" iconType="font-awesome5" text="Conservation" changeState={this.props.changeState} cause="conservation"/>
        <Cube iconName="peace" iconType="material-community" text="Peace and Justice" changeState={this.props.changeState} cause="peace"/>
        <Cube iconName="location-arrow" iconType="font-awesome5" text="Refugees" changeState={this.props.changeState} cause="refugees"/>
        </View>
    
      </View>
    );
  }
}
