import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import COLORS from '../reusables/Colors';
import Button from '../reusables/ClassicButton';

import AsyncStorage from '@react-native-community/async-storage';

export default class OpenEmail extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  state = {
    email: AsyncStorage.getItem('email'),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <Text />
          <Text style={styles.tex}>
            We have sent an email to {this.state.email}. Please check your mail.
          </Text>
          <Text />
        </View>
        <Button
          textOnButton="Open Inbox"
          lightEndColor={COLORS.lightGreen}
          darkEndColor={COLORS.darkGreen}
          navigation={this.props.navigation}
          page=""
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'black',
    marginLeft: -60,
  },
  tex: {
    color: 'grey',
  },
  te: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    height: 45,
    paddingTop: 12,
  },
  sty: {
    borderRadius: 25,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 357,
  },
});
