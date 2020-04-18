import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import COLORS from './Colors';
import ClassicButton from './ClassicButton';

export default class ReportAProblem extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.heading}>Report a problem</Text>
        </View>
        <ScrollView>
          <Text style={styles.question}> Name:</Text>
          <TextInput style={styles.textinput} placeholder="" />

          <Text style={styles.question}> Contact email:</Text>
          <TextInput style={styles.textinput} placeholder="" />

          <Text style={styles.question}> device:</Text>
          <TextInput style={styles.textinput} placeholder="" />

          <Text style={styles.question}> IOS Version :</Text>
          <TextInput style={styles.textinput} placeholder="" />

          <Text style={styles.question}>
            {' '}
            Please describe the problem you are facing :
          </Text>
          <TextInput style={styles.textinput} placeholder="" />
          <View style={styles.buttonView}>
            <ClassicButton
              textOnButton="Submit"
              lightEndColor={COLORS.lightGreen}
              darkEndColor={COLORS.darkGreen}
              navigation={this.props.navigation}
              page="feed"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    margin: 60,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.classicGreen,
  },

  question: {
    fontSize: 14,
    margin: 25,
    marginTop: 1,
    color: 'grey',
  },

  textinput: {
    fontSize: 15,
    color: 'grey',
    paddingTop: 15,
    paddingBottom: 8,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 25,
  },

  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
});
