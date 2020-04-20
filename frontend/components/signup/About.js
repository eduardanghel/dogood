import React from 'react';
import {
  Image,
  Picker,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';

import { URLS } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export default class About extends React.Component {
  _retrieveData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      return accessToken;
    } catch (error) {}
  };

  handleRequest = async () => {
    const baseUrl = URLS.userProfile;
    const token = await this._retrieveData();
    const body = new FormData();
    body.append(
      'dob',
      this.state.year + '-' + this.state.month + '-' + this.state.day
    );
    body.append('gender', this.state.genderID);

    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .post(baseUrl, body, config)
      .then((response) => {
        this.props.navigation.navigate('Feed');
      })
      .catch((error) => console.log(error));
  };

  static defaultProps = {
    selectedYear: new Date().getFullYear() - 18,
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDate(),

    onValueChange(year, month, date) {},
  };

  constructor(props) {
    super(props);
    this.state = {
      year: this.props.selectedYear,
      month: this.props.selectedMonth,
      day: this.props.selectedDay,
      radioBtnsData: ['Male', 'Female', 'Non-Binary'],
      genderID: 0,
      image: null,
      accessToken: AsyncStorage.getItem('accessToken'),
    };
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    StatusBar.setHidden(true);
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _openImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  getMonth() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames;
  }

  getNumDaysInMonth(year, month) {
    if (year == 0 && month == 1) {
      return 29;
    }
    return new Date(year, month + 1, 0).getDate();
  }

  renderMonth() {
    const monthNames = this.getMonth();
    return monthNames.map(function (month, index) {
      return <Picker.Item label={month} value={index} />;
    });
  }

  renderDay() {
    const numDays = this.getNumDaysInMonth(this.state.year, this.state.month);

    const days = [];
    for (let i = 1; i <= numDays; i++) {
      days.push(<Picker.Item label={i.toLocaleString()} value={i} />);
    }
    return days;
  }

  renderYear() {
    const minYear = 1900;
    const maxYear = new Date().getFullYear();
    const years = [];
    for (var i = minYear; i <= maxYear; i++) {
      years.push(<Picker.Item label={i.toLocaleString()} value={i} />);
    }
    return years;
  }

  onMonthValueChanged = (month) => {
    const maxDays = this.getNumDaysInMonth(this.state.year, month);
    const day = this.state.day > maxDays ? maxDays : this.state.day;

    this.setState({ month, day }, () => {
      this.props.onValueChange(
        this.state.year,
        this.state.month,
        this.state.day
      );
    });
  };

  onDayValueChanged = (day) => {
    this.setState({ day }, () => {
      this.props.onValueChange(
        this.state.year,
        this.state.month,
        this.state.day
      );
    });
  };

  onYearValueChanged = (year) => {
    const maxDays = this.getNumDaysInMonth(year, this.state.month);
    const day = this.state.day > maxDays ? maxDays : this.state.day;

    this.setState({ year, day }, () => {
      this.props.onValueChange(
        this.state.year,
        this.state.month,
        this.state.day
      );
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View>
            <Text />
          </View>
          <View style={{ marginLeft: 23, marginRight: 23 }}>
            <Text />
            <Text style={styles.bigGreenText}>Tell us about yourself</Text>
            <Text />
            <Text style={styles.greyText}>
              Charities need to know this information about volunteers.{' '}
            </Text>
            <Text />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.addImage} onPress={this._openImage}>
              <Icons name="camera-alt" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImage}>
              <Text style={styles.photoUpload}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 23, marginRight: 23 }}>
            <Text />
            <Text style={styles.greenText}>When is your birthday?</Text>
          </View>
          <View style={styles.container}>
            <Picker
              style={styles.pick}
              onValueChange={this.onDayValueChanged}
              selectedValue={this.state.day}>
              {this.renderDay()}
            </Picker>
            <Picker
              style={styles.pick}
              onValueChange={this.onMonthValueChanged}
              selectedValue={this.state.month}>
              {this.renderMonth()}
            </Picker>

            <Picker
              style={styles.pick}
              onValueChange={this.onYearValueChanged}
              selectedValue={this.state.year}>
              {this.renderYear()}
            </Picker>
          </View>
          <View style={{ marginLeft: 23, marginRight: 23 }}>
            <Text style={styles.greenText}>Choose your gender</Text>
            <Text />
            <View>
              {this.state.radioBtnsData.map((data, key) => {
                return (
                  <View>
                    <View key={key}>
                      {this.state.genderID == key ? (
                        <TouchableOpacity style={styles.buttons}>
                          <Image
                            style={styles.image}
                            source={require('../../assets/Images/rad.png')}
                          />
                          <Text style={styles.whiteText}>{data}</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ genderID: key });
                          }}
                          style={styles.button}>
                          <Image
                            style={styles.image}
                            source={require('../../assets/Images/rads.png')}
                          />
                          <Text style={styles.smallGreyText}>{data}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.buttonView}>
            <ClassicButton
              textOnButton="Next"
              lightEndColor={COLORS.lightGreen}
              darkEndColor={COLORS.darkGreen}
              onPress={() => this.handleRequest()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 23,
    marginRight: 23,
  },
  pick: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    color: 'black',
    marginLeft: -60,
  },
  greyText: {
    color: 'grey',
  },
  greenText: {
    color: COLORS.classicGreen,
    fontSize: 18,
  },
  bigGreenText: {
    color: COLORS.classicGreen,
    fontSize: 22,
  },
  photoUpload: {
    borderWidth: 1,
    color: 'grey',
    borderColor: 'grey',
    width: 200,
    height: 42,
    borderRadius: 22,
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  addImage: {
    backgroundColor: COLORS.classicGreen,
    borderWidth: 0,
    width: 45,
    height: 45,
    borderRadius: 30,
    padding: 12,
    marginLeft: -22,
  },
  image: {
    height: 0.1,
    width: 0.1,
  },
  whiteText: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 12,
  },
  smallGreyText: {
    color: 'grey',
    alignSelf: 'center',
    paddingTop: 11,
  },
  button: {
    borderWidth: 1,
    width: 150,
    height: 42,
    borderRadius: 50,
    borderColor: 'grey',
    marginBottom: 20,
  },
  buttons: {
    width: 150,
    height: 42,
    backgroundColor: COLORS.classicGreen,
    borderRadius: 50,
    marginBottom: 20,
  },
});
