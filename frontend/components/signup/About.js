import React from "react";
import { Image, Picker, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../reusables/Colors';
import Button from '../reusables/ClassicButton';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class About extends React.Component {
    static defaultProps = {
        selectedYear: (new Date()).getFullYear(),
        selectedMonth: (new Date()).getMonth(),
        selectedDay: (new Date()).getDate(),

        onValueChange: function (year, month, date) {
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            year: this.props.selectedYear,
            month: this.props.selectedMonth,
            day: this.props.selectedDay,
            disease: '',
            radioBtnsData: ['Male', 'Female', 'Non-Binary'],
            checked: 0,
            image: null,
        }
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
      }


      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    _openImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    getMonth() {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames;
    }

    getNumDaysInMonth(year, month) {

        if (year == 0 && month == 1) {
            return 29;
        }
        return (new Date(year, month + 1, 0)).getDate()
    }

    renderMonth() {
        var monthNames = this.getMonth();
        return monthNames.map(function (month, index) {
            return <Picker.Item label={month} value={index} />
        })
    }

    renderDay() {
        var numDays = this.getNumDaysInMonth(this.state.year, this.state.month);

        var days = [];
        for (var i = 1; i <= numDays; i++) {
            days.push(<Picker.Item label={i.toLocaleString()} value={i} />)
        }
        return days;
    }

    renderYear() {
        var minYear = 1900;
        var maxYear = (new Date()).getFullYear();
        var years = [];
        for (var i = minYear; i <= maxYear; i++) {
            years.push(<Picker.Item label={i.toLocaleString()} value={i} />)
        }
        years.push(<Picker.Item label={"-------"} value={i} />);
        return years;
    }

    onMonthValueChanged = (month) => {
        var maxDays = this.getNumDaysInMonth(this.state.year, month);
        var day = (this.state.day > maxDays) ? maxDays : this.state.day;

        this.setState({ month: month, day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day);
        });
    };

    onDayValueChanged = (day) => {
        this.setState({ day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day)
        })
    };

    onYearValueChanged = (year) => {
        var maxDays = this.getNumDaysInMonth(year, this.state.month);
        var day = (this.state.day > maxDays) ? maxDays : this.state.day;

        this.setState({ year: year, day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day);
        });
    };

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View>
                        <Text></Text>
                    </View>
                    <View style={{ marginLeft: 23, marginRight: 23, }}>
                        <Text></Text>
                        <Text style={styles.test}>Tell us about yourself</Text>
                        <Text></Text>
                        <Text style={styles.tex}>Charities need to know this information about volunteers. </Text>
                        <Text></Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <TouchableOpacity style={styles.fles} onPress={this._openImage}><Icons name={'camera-alt'} size={20} color='white'/></TouchableOpacity>
                    <TouchableOpacity onPress={this._pickImage}><Text style={styles.uplo}>Upload Photo</Text></TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 23, marginRight: 23, }}>
                        <Text></Text>
                        <Text style={styles.tests}>When is your birthday?</Text>
                    </View>
                    <View style={styles.container}>
                        <Picker style={styles.picks} onValueChange={this.onDayValueChanged}
                            selectedValue={this.state.day}>
                            {this.renderDay()}
                        </Picker>
                        <Picker style={styles.pick} onValueChange={this.onMonthValueChanged}
                            selectedValue={this.state.month}>
                            {this.renderMonth()}
                        </Picker>

                        <Picker style={styles.pickes} onValueChange={this.onYearValueChanged}
                            selectedValue={this.state.year}>
                            {this.renderYear()}
                        </Picker>
                    </View>
                    <View style={{ marginLeft: 23, marginRight: 23 }}>
                        <Text style={styles.tests}>Choose your gender</Text>
                        <Text></Text>
                        <View>
                            {this.state.radioBtnsData.map((data, key) => {

                                return (
                                    <View>
                                        <View key={key}>
                                            {this.state.checked == key ?
                                                <TouchableOpacity style={styles.btns}>
                                                    <Image style={styles.img} source={require("../../assets/Images/rad.png")} />
                                                    <Text style={styles.testtt}>{data}</Text>
                                                </TouchableOpacity>
                                                :

                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ checked: key })
                                                }} style={styles.btn}>
                                                    <Image style={styles.img} source={require("../../assets/Images/rads.png")} />
                                                    <Text style={styles.testtts}>{data}</Text>
                                                </TouchableOpacity>

                                            }
                                        </View>

                                    </View>

                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.fle}>
                        <Button textOnButton="Next"
                            lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                            navigation={this.props.navigation}
                            page="ContactInfo"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginLeft: 23,
        marginRight: 23,
    },
    pick: {
        flex: 1
    },
    picks: {
        flex: 1
    },
    pickes: {
        flex: 1
    },

    text: {
        fontSize: 22,
        color: 'black',
        marginLeft: -60,

    },
    tex: {
        color: 'grey',

    },
    tests: {
        color: COLORS.classicGreen,
        fontSize: 18,

    },
    test: {
        color: COLORS.classicGreen,
        fontSize: 22,

    },
    uplo: {

        borderWidth: 1,
        color: 'grey',
        borderColor: 'grey',
        width: 200,
        height: 42,
        borderRadius: 22,
        textAlign: 'center',
        paddingTop: 10,
    },
    fle: {
        width: '100%',
        justifyContent:
            'center', alignItems:
            'center',
        marginBottom: 40,
    },
    fles: {
        backgroundColor: COLORS.classicGreen,
        borderWidth: 0,
        width: 45,
        height: 45,
        borderRadius: 30,
        padding: 12,
        marginLeft: -22,
    },
    img: {
        height: 0.1,
        width: 0.1
    },
    testtt: {
        color: 'white',
        alignSelf: 'center',
        paddingTop: 12,
        // textAlign:'center'
    },
    testtts: {
        color: 'grey',
        alignSelf: 'center',
        paddingTop: 11,
        // textAlign:'center'
    },
    btn: {
        borderWidth: 1,
        width: 150,
        height: 42,
        borderRadius: 50,
        borderColor: 'grey',
        marginBottom: 20,

    },
    btns: {
        width: 150,
        height: 42,
        backgroundColor: COLORS.classicGreen,
        borderRadius: 50,
        marginBottom: 20,
    },
});
