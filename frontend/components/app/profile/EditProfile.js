import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../reusables/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { YellowBox } from 'react-native';
import Slider from 'react-native-slider';
import SwitchToggle from "react-native-switch-toggle";
import Causes from './CausesSelection';


export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            imageVisible: false,
            value: 0.1,
            switchOn1: false,
            causeVisible: false,
            value: 1,
        };
    }
    componentDidMount() {


        StatusBar.setHidden(true);
    }

    showDatePicker() {
        this.setState({ isDatePickerVisible: true })
    }

    hideDatePicker() {
        this.setState({ isDatePickerVisible: false })
    }

    handleConfirm() {
        console.log('Date Confirmed')
        this.hideDatePicker();
    }
    construct() {
        console.disableYellowBox = true;
    }
    onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
    };

    render() {
        console.disableYellowBox = true
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ backgroundColor: colors.initialDarkGreen, height: 220, justifyContent: 'space-around', flexDirection: 'row', paddingTop: 60 }}>
                        <TouchableOpacity style={{ borderWidth: 0, backgroundColor: colors.darkGreen, width: 135, height: 135, borderRadius: 80, marginLeft: 20 }} onPress={() => { this.setState({ imageVisible: true }); }}><Text style={{ fontSize: 60, color: 'white', textAlign: "center", marginTop: 23 }}>+</Text></TouchableOpacity>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ fontSize: 23, color: 'white' }}>Jane Doe</Text>
                            <Text style={{ color: 'white' }}>@janedoe</Text>
                            <Text style={{ color: '#E0E0E0' }}> Essex</Text>
                            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={colors.initialDarkGreen} /></TouchableOpacity>
                            <Text style={{ backgroundColor: 'orange', width: 17, height: 18, textAlign: 'center', paddingTop: 0, borderRadius: 15, marginTop: -50, marginLeft: 35 }}>4</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginLeft: 30, marginTop: 5 }}><Icons name={'edit'} size={25} color='white' /></TouchableOpacity>
                        </View>
                        <Dialog
                            visible={this.state.imageVisible}
                            onTouchOutside={() => {
                                this.setState({ imageVisible: false });
                            }}
                            dialogStyle={{ position: 'absolute', bottom: 0, width: '100%', }}
                        >
                            <DialogContent>
                                <View>
                                    <TouchableOpacity style={{ width: 30, marginLeft: '90%', }} onPress={() => {
                                        this.setState({ imageVisible: false });
                                    }}>
                                        <Text style={{ textAlign: 'right', fontSize: 25, marginTop: 20, color: colors.darkRed, }}>x</Text></TouchableOpacity>
                                </View>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity style={styles.button1}>
                                        <Text style={styles.buttonText}>Choose From Photo Library</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity style={styles.button2}>
                                        <Text style={styles.buttonText}>Take a Photo</Text>
                                    </TouchableOpacity>
                                </View>
                            </DialogContent>
                        </Dialog>
                    </View>

                    <View style={{ marginLeft: 30, marginTop: 30, marginRight: 30 }}>
                        <View>
                            <Text style={{ fontSize: 20 }}>Activity</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Availability</Text>
                            <TouchableOpacity onPress={this.showDatePicker.bind(this)}><Icons name={'calendar'} size={25} color={'gray'} /></TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                mode="date"
                                onConfirm={this.handleConfirm.bind(this)}
                                onCancel={this.hideDatePicker.bind(this)}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 5, marginRight: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingBottom: 2 }}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Distance</Text>
                            <Text style={{ fontSize: 20, color: 'gray' }}>{this.state.value} miles</Text>
                        </View>
                        <View>
                            <Slider
                                minimumValue={1}
                                maximumValue={10}
                                step={1}
                                thumbTintColor={colors.initialDarkGreen}
                                minimumTrackTintColor={colors.initialLightGreen}
                                maximumTrackTintColor={colors.backgroundGrey}
                                value={this.state.value}
                                trackStyle={{ height: 5 }}
                                onValueChange={(value) => this.setState({ value })} />
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 0, marginRight: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Women Only Activities</Text>
                            <SwitchToggle
                                switchOn={this.state.switchOn1}
                                onPress={this.onPress1}
                                containerStyle={{
                                    width: 47,
                                    height: 25,
                                    borderRadius: 25,
                                    backgroundColor: colors.backgroundGrey,
                                    padding: 3
                                }}
                                circleStyle={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 19,
                                    backgroundColor: "white" // rgb(102,134,205)
                                }}
                                circleColorOff="gray"
                                circleColorOn={colors.initialDarkGreen}
                                backgroundColorOn={colors.initialLightGreen}
                                duration={400}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View style={{ marginTop: 10, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Placeholder</Text>
                            <TextInput></TextInput>
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 20, color: 'black' }}>Bio</Text>
                            <TextInput></TextInput>
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View style={{ marginTop: 10, paddingBottom: 10, marginBottom: 30 }}>
                            <Text style={{ fontSize: 20, color: 'black' }}>Causes</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'gray', marginTop: 10, marginRight: 10, paddingLeft: 10, paddingTop: 7, paddingBottom: 5, width: 45, borderRadius: 5 }} onPress={() => { this.setState({ causeVisible: true }); }}><Icon name={'plus'} size={28} color={"white"} /></TouchableOpacity>
                            </View>
                        </View>
                        <Dialog
                            visible={this.state.causeVisible}
                            onTouchOutside={() => {
                                this.setState({ causeVisible: false });
                            }}
                            dialogStyle={{ position: 'absolute', bottom: 0, width: '100%', height: '90%' }}
                        >
                            <DialogContent>
                                <Causes></Causes>
                            </DialogContent>
                        </Dialog>
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: 30, marginRight: 30, marginBottom: 40, }}>
                        <LinearGradient
                            style={{ borderRadius: 25, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, }}
                            colors={['#00c5c4', '#01a7a6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity><Text style={{ fontSize: 14, textAlign: 'center', color: 'white', position: 'relative', height: 45, paddingTop: 12, }}>Update</Text></TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        width: '100%',
        marginTop: 20,
    },
    button1: {
        borderWidth: 2,
        borderRadius: 30,
        width: '100%',
        height: 50,
        borderColor: colors.darkGreen,
        justifyContent: 'center',
        marginBottom: 5,
    },
    button2: {
        borderWidth: 2,
        borderRadius: 30,
        width: '100%',
        height: 50,
        borderColor: colors.darkGreen,
        justifyContent: 'center',
        marginBottom: 32,
    },
    buttonText: {
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.darkGreen,
        fontSize: 16,
    },
})
