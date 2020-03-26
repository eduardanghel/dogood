import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../../../reusables/Colors';
import ClassicButton from '../../../reusables/ClassicButton';
import EmailInput from '../../../reusables/EmailInput';
import Constants from 'expo-constants';



export default class EmailSetting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.heading}>Email Setting</Text>

        <View style={styles.emailContainer}>

          <View style={styles.emailTitle}>
            <Text style={styles.emailFront}>Current Email:</Text>
            <Text style={styles.email}> Karma@karma.com </Text>
          </View>

          <EmailInput title="Email address" hint="Enter your email" />

          <EmailInput title="Confirm email address" hint="Re enter email address " />

        </View>




        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <ClassicButton textOnButton="Save Changes"
            lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
            page='Feed'
            navigation={this.props.navigation} />

        </View>

      </View>

    )
  }
}



const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginTop: Constants.statusBarHeight,
    marginBottom: 12,
    flex: 1,

  },
  heading: {
    margin: 8,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: COLORS.classicGreen
  },
  emailFront: {
    fontSize: 17,
    color: COLORS.classicGreen
  },

  email: {
    marginHorizontal: 8,
    marginVertical: 12,

  },
  emailTitle: {
    marginHorizontal: 8,
    marginVertical: 12,


  },

  emailContainer: {
    marginHorizontal: 8,
    marginVertical: 12,
    flex: 1,

  },




});
