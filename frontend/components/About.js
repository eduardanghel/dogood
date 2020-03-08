import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Picker, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class About extends React.Component {
    static defaultProps = {
        selectedYear: (new Date()).getFullYear(),
        selectedMonth: (new Date()).getMonth(),
        selectedDay: (new Date()).getDate(),

        onValueChange: function (year, month, date) { }
    }
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.selectedYear,
            month: this.props.selectedMonth,
            day: this.props.selectedDay,
            disease: '',
            radioBtnsData: ['Male', 'Female', 'Non-Binary'],
            checked: 0
        }
    }
    componentDidMount() {

        console.disableYellowBox = true;
        StatusBar.setHidden(true);
    }

    getMonth() {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames;
    }

    getNumDaysInMonth(year, month) {

        if (year == 0 && month == 1) { return 29; }
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

        var days = []
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
        years.push(<Picker.Item label={"-------"} value={i} />)
        return years;
    }

    onMonthValueChanged = (month) => {
        var maxDays = this.getNumDaysInMonth(this.state.year, month);
        var day = (this.state.day > maxDays) ? maxDays : this.state.day;

        this.setState({ month: month, day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day);
        });
    }

    onDayValueChanged = (day) => {
        this.setState({ day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day)
        })
    }

    onYearValueChanged = (year) => {
        var maxDays = this.getNumDaysInMonth(year, this.state.month);
        var day = (this.state.day > maxDays) ? maxDays : this.state.day;

        this.setState({ year: year, day: day }, () => {
            this.props.onValueChange(this.state.year, this.state.month, this.state.day);
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0' style={{ marginLeft: '20%', marginTop: '3%' }} /></TouchableOpacity>
                        <Text style={styles.text}>    About</Text>
                    </View>
                    <View style={{ marginLeft: 23, marginRight: 23, }}>
                        <Text></Text>
                        <Text style={styles.test}>Tell us about yourself</Text>
                        <Text></Text>
                        <Text style={styles.tex}>Charities need to know this information about volunteers. </Text>
                        <Text></Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <TouchableOpacity style={styles.fles}><Icons name={'camera-alt'} size={20} color='white' /></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.uplo}>Upload Photo</Text></TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 23, marginRight: 23, }}>
                        <Text></Text>
                        <Text style={styles.tests}>When is your birthday?</Text>
                    </View>
                    <View style={styles.container}>
                        <Picker style={styles.picks} onValueChange={this.onDayValueChanged} selectedValue={this.state.day}>
                            {this.renderDay()}
                        </Picker>
                        <Picker style={styles.pick} onValueChange={this.onMonthValueChanged} selectedValue={this.state.month}>
                            {this.renderMonth()}
                        </Picker>

                        <Picker style={styles.pickes} onValueChange={this.onYearValueChanged} selectedValue={this.state.year}>
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
                                        <View key={key} >
                                            {this.state.checked == key ?
                                                <TouchableOpacity style={styles.btns}>
                                                    <Image style={styles.img} source={require("../assets/rad.png")} />
                                                    <Text style={styles.testtt}>{data}</Text>
                                                </TouchableOpacity>
                                                :

                                                <TouchableOpacity onPress={() => { this.setState({ checked: key }) }} style={styles.btn}>
                                                    <Image style={styles.img} source={require("../assets/rads.png")} />
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
                        <Text></Text>
                        <LinearGradient
                            style={styles.sty}
                            colors={['#00c5c4', '#01a7a6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity><Text style={styles.te}>Next</Text></TouchableOpacity>
                        </LinearGradient>
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
        // textAlign:'center',
        color: '#666666',

    },
    tests: {
        // textAlign:'center',
        color: '#01a7a6',
        fontSize: 18,

    },
    test: {
        // textAlign:'center',
        color: '#01a7a6',
        fontSize: 22,

    },
    te: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        height: 45,
        paddingTop: 12,


    },
    uplo: {

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
    sty: {
        borderRadius: 25,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        //   position:'relative',
        //   marginTop:320,


    },
    fle: {
        flex: 1,
        justifyContent: "flex-end",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 40,
    },
    fles: {
        backgroundColor: '#01a7a6',
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
        color: 'gray',
        alignSelf: 'center',
        paddingTop: 11,
        // textAlign:'center'
    },
    btn: {
        // flexDirection: 'row',
        borderWidth: 1,
        width: 150,
        height: 42,
        borderRadius: 50,
        borderColor: 'gray',
        marginBottom: 20,

    },
    btns: {
        // flexDirection: 'row',
        width: 150,
        height: 42,
        backgroundColor: '#01a7a6',
        borderRadius: 50,
        marginBottom: 20,
    },
})