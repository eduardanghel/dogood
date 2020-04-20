import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Header, Picker, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import { CheckBox } from 'react-native-elements'  
import Icons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
export default class OrgSignUp extends Component {
  constructor(){
    super();
    this.state={orgType:'', name:'',orgNum:'',date:'',
      test1:false,test2:false,image:null
  }
  }
  chooseLogo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
 render(){
    return (
      
      <View style={styles.container}> 
      
        <Text style={{color:'#01b0b0',fontSize:20,fontWeight:'bold',marginTop:15}}> Create a new account </Text>
        <Text style={{marginTop:15,marginLeft:5}}> Are you a:</Text>
        <RNPickerSelect
             useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            onValueChange={value => {this.setState({orgType: value});}}
            placeholder={{}}
                items={[
                { label: 'NGO(Non Government Organisation)', value: 'NGO' }, 
                { label: 'NFP(Not For Profit)', value: 'NFP' },
                { label: 'Charity', value: 'Charity' }
            ]}
            Icon={()=>{ return <Icon name="caretdown" size={12} color="#01b0b0"/>;}}
        />
        <TextInput
        style={{height: 40,width: 300, borderBottomWidth:1, borderBottomColor:'#d3d3d3',marginLeft:8}}
        placeholder='Charity or Organisation name*'
        value = {this.state.name}
        onChangeText={value => {this.setState({name : value});}}
        />
         <TextInput
        style={{height: 40,width: 300, borderBottomWidth:1, borderBottomColor:'#d3d3d3',marginLeft:8}}
        placeholder='Charity number*'
        value = {this.state.orgNum}
        onChangeText={value => {this.setState({orgNum : value});}}
        keyboardType= 'numeric'
        />
         <DatePicker
        style={{width: 300,marginLeft:8}}
        date={this.state.date}
        mode="date"
        placeholder="Date of Registration*"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth:0,
            borderBottomWidth:1,
            borderBottomColor:'#d3d3d3',
            alignItems:'flex-start'
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <Text style={{marginTop:25}}> Exemptions</Text>
      <Text> Please select why you are not registered</Text>
      <CheckBox
  containerStyle={{backgroundColor: '#ffffff',borderWidth:0}}
  title="Your income is below £5,000 or are 'excepted' "
  alignItems='flex-start'
  checked={this.state.test1}
  onPress={() =>{this.state.test1=!this.state.test1; this.setState({checked: this.state.test1})}}

/>
<CheckBox
  containerStyle={{backgroundColor: '#ffffff',borderWidth:0}}
  title="You are exempt from regulation by the Charity Commission"
  alignItems='flex-start'
  checked={this.state.test2}
  onPress={() =>{this.state.test2=!this.state.test2; this.setState({checked: this.state.test2})}}

/>
<View style={{flexDirection:'row'}}>
<Text  style={{ color:'#d3d3d3',fontSize:19,fontWeight:'bold'}}> Organisation Logo</Text>
<TouchableOpacity><Icon name={'pluscircleo'} size={30} onPress={this.chooseLogo} color='#d3d3d3' style={{marginLeft:"50%",marginTop:"10%"}}/></TouchableOpacity>

</View>
<Image
          style={{width: 100, height: 100,}}
          source={{uri:this.state.image}}
        />

      </View>
      
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginTop:30,
    
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingHorizontal: 8,
    color: '#d3d3d3',
    paddingRight: 30, 
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 8,
    color: '#d3d3d3',
    paddingRight: 30, 
  },
  iconContainer: {
    top:8,
    right:-10
  }
});

