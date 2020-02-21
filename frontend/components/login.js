import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import GradientButton from 'react-native-gradient-buttons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';

export default class App extends React.Component {
  // const [value, onChangeText] = React.useState('Useless Placeholder');
    constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {password: ''};
  }
 
  render() {
    
    return (
      
      <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
                 <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0' style={{marginLeft: '20%',marginTop:'3%'}}/></TouchableOpacity>
                 
             </View>
        <Text style={styles.paragraph}>
           Login
        </Text>
        <Text style={styles.text}>
          Welcome back!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor='grey'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='grey'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
         
        <View style={{flex:1 , marginLeft:170}} >
          <Button
          title="Forgot Password?"
          fontSize='10'
          color='#01b0b0'
                   // onPress={() => }
          />
        </View>
        
        <View style={{flex: 3, justifyContent: 'space-evenly', alignItems: 'center',              marginVertical: 24}}>
          <GradientButton
            style={{ marginVertical: 7 }}
            text="Login   →"
            textStyle={{ fontSize: 20 }}
            gradientBegin= "#01b0b0"
            gradientEnd="#14cbcb"
            gradientDirection="diagonal"
            height={50}
            width={300}
            radius={15}
            impact
            impactStyle='Light'
            border-radius='10'
            //onPressAction={() => alert('You pressed me!')}
          />
         </View>
     
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    position: 'absolute',
    left: 27,
    marginLeft: 37
  },
  text: {
    margin: 25,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: '#01b0b0',
    
  },
  input: {
    height: 50,
    padding: 10,
    margin: 18,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    
  },
  
 
  
  
});
