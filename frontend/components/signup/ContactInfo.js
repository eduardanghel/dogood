import * as React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { URLS } from '../constants';
import ClassicButton from '../reusables/ClassicButton';
import COLORS from '../reusables/Colors';

export default class Contact extends React.Component {
  _retrieveData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      return accessToken;
    } catch (error) {}
  };

  state = {
    line1: '',
    line2: '',
    county: '',
    postcode1: '',
    postcode2: '',
    accessToken: AsyncStorage.getItem('accessToken'),
  };

  onLine1Change(text) {
    this.setState({ line1: text });
  }

  onLine2Change(text) {
    this.setState({ line2: text });
  }

  onCountyChange(text) {
    this.setState({ county: text });
  }

  onPostcode1Change(text) {
    this.setState({ postcode1: text });
  }

  onPostcode2Change(text) {
    this.setState({ postcode2: text });
  }

  handleRequest = async () => {
    const baseUrl = URLS.userProfile;
    const token = await this._retrieveData();

    const body = new FormData();
    body.append('address', this.state.line1 + ' ' + this.state.line2);
    body.append('county', this.state.county);
    body.append('postcode', this.state.postcode1 + ' ' + this.state.postcode2);

    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .post(baseUrl, body, config)
      .then((response) => ({ response }))
      .catch((error) => Alert.alert(error.message));
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icons
              name="arrow-back"
              size={25}
              color={COLORS.classicGreen}
              style={{ marginLeft: '20%', marginTop: '25%' }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Contact Info</Text>
        </View>
        <Text style={styles.te}>Where are you located?</Text>
        <Text style={styles.de}>
          Charities need to know this info, and it lets us show your local
          events
        </Text>
        <Text style={styles.padding}>Address Line 1</Text>
        <TextInput
          style={styles.addressInputStyle}
          placeholder=""
          onChangeText={this.onLine1Change.bind(this)}
        />
        <Text style={styles.padding}>Address Line 2</Text>
        <TextInput
          style={styles.addressInputStyle}
          placeholder=""
          onChangeText={this.onLine2Change.bind(this)}
        />
        <Text style={styles.padding}>County</Text>
        <TextInput
          style={styles.addressInputStyle}
          placeholder=""
          onChangeText={this.onCountyChange.bind(this)}
        />
        <Text style={styles.padding}>Postcode</Text>
        <View style={styles.row}>
          <TextInput
            maxLength={4}
            style={styles.postcodeInputStyle}
            placeholder="                       "
            onChangeText={this.onPostcode1Change.bind(this)}
          />
          <TextInput
            maxLength={3}
            style={styles.postcodeInputStyle}
            placeholder="                           "
            onChangeText={this.onPostcode2Change.bind(this)}
          />
        </View>

        <ClassicButton
          textOnButton="Next"
          lightEndColor={COLORS.lightGreen}
          darkEndColor={COLORS.darkGreen}
          navigation={this.props.navigation}
          page="UserCauses"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'black',
    marginLeft: -40,
    marginTop: 25,
  },
  te: {
    margin: 25,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: COLORS.classicGreen,
  },
  de: {
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
  textinput2: {
    fontSize: 15,
    color: 'grey',
    paddingTop: 15,
    paddingBottom: 8,
    marginBottom: 10,
    marginTop: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 63,
  },
  padding: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 25,
  },
  row: {
    flexDirection: 'row',
  },
});
