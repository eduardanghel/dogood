import React, {Component} from 'react';
import { StyleSheet, Text , View , TextInput} from 'react-native';
import COLORS from './Colors';

export default class EmailInput extends Component {
  
      constructor(props) {
        super(props);
    }

    state = {
    textEmail: '',
    
    }
    
    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.emailFront}>{this.props.title} </Text>
                <TextInput
                style={styles.input}
                placeholder={this.props.hint}
                placeholderTextColor='grey'
                onChangeText={(text) => this.setState({textEmail: text})}
                value={this.state.textEmail}
                  /> 
            </View>
        )   
    }
}

const styles = StyleSheet.create({
  container:{
  marginHorizontal:8,
  marginVertical:12,

  
   },
    emailFront:{
        fontSize: 17,
        color: COLORS.classicGreen
      },
      input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding:8,
        paddingTop:12,

      },
    




})