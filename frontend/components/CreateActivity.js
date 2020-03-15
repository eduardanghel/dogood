import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Picker, Image, ScrollView,Switch } from "react-native";
import Icons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
//import { DatePickerDialog } from 'react-native-datepicker-dialog'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           startDate: '',
           endDate: '',
           startTime: '',
           endTime: '',
        }
        
      }
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
           <DatePicker 
        showIcon={true}
        style={styles.dat}
        date={this.state.startDate}
        iconSource=''
        mode="date"
        placeholder="Start date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2100-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth:1,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(startDate) => {this.setState({startDate: startDate})}}
      />
      <DatePicker 
        showIcon={false}
        style={styles.dat}
        date={this.state.endDate}
        
        mode="date"
        placeholder="End date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2100-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth:1,
            
          }
          
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(endDate) => {this.setState({endDate: endDate})}}
      />
       <DatePicker
          style={styles.dat}
          date={this.state.startTime}
          mode="time"
          showIcon={false}
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          placeholder="Start time"
          minuteInterval={10}
          customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth:1,
            
          }
          }}
          onDateChange={(startTime) => {this.setState({startTime: startTime})}}
        />
        <DatePicker
          style={styles.dat}
          date={this.state.endTime}
          mode="time"
          showIcon={false}
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          placeholder="End time"
          minuteInterval={10}
          customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth:1,
            
          }
          }}
          onDateChange={(endTime) => {this.setState({endTime: endTime});}}
        />
        <Text style={styles.text2}>Address </Text>
        <Text style={styles.text3}>Please leave this blank if you will be sending this via email once a volunteer has confirm </Text>
          <View style={styles.container}>
         <TextInput style={styles.textinput} editable={false} placeholder="Make address visible" />
        <Switch
          style={styles.switc}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
      </View>
      <TextInput style={styles.textinput2} editable={true} placeholder="What will volunteers do?" />
       <TextInput style={styles.textinput2} editable={true} placeholder="Who to contact?" />
       <TextInput style={styles.textinput2} editable={true} placeholder="Where?" />
       <Text style={styles.im}>Important </Text> 
       <View style={styles.container}>
         <TextInput style={styles.textinput3} editable={false} placeholder="Minimun age is 18" />
        <Switch
          style={styles.swit}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
      </View>
      <View style={styles.container}>
         <TextInput style={styles.textinput3} editable={false} placeholder="Photo ID required" />
        <Switch
          style={styles.swit}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
      </View>
      <View style={styles.container}>
         <TextInput style={styles.textinput3} editable={false} placeholder="This is a physical activity" />
        <Switch
          style={styles.swit}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
      </View>
      <View style={styles.container}>
         <TextInput style={styles.textinput3} editable={false}  multiline ={true}placeholder="Additional information will be provided by email" />
        <Switch
          style={styles.swit}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
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
    dat: {
        showIcon: false,
        margin: 20,
        marginTop:35,
        width:300,
        height:10,
        borderWidth: 0,
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 1,
    paddingHorizontal: 1,
    },
    text2: {
        fontSize: 16,
        color: 'grey',
        marginLeft: 50,
        marginTop: 30

    },
    text3: {
        fontSize: 14,
        color: 'grey',
        marginLeft: 50,
        marginTop: 3

    },
    textinput: {
    fontSize: 16,
    color: 'grey',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth:1,
    paddingVertical: 10,
    marginVertical: 2,
    width: 250,
    marginLeft: 30,
    marginTop: 41,
    padding:1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    },
    textinput2: {
      fontSize: 16,
    color: 'grey',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 250,
    marginLeft: 51,
    paddingVertical: 10,
    marginVertical: 2,
    },
    textinput3: {
    fontSize: 16,
    color: 'grey',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    //borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 2,
    width: 250,
    marginLeft: 41,
    marginTop: 15,
    padding:1
    },
    im: {
      fontSize: 16,
      marginLeft: 51,
      color: 'black',
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 1,
    },
    swit: {
      marginTop:20,
      transform: [{ scaleX: .9 }, { scaleY: .9 }],
    },
    switc: {
      marginTop:30,
      transform: [{ scaleX: .9 }, { scaleY: .9 }],
      padding: 10,
    }
  });

  