import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../reusables/Colors';
import HorizontalEventsList from '../reusables/HorizontalEventList';
import Events from '../reusables/lists/AllEventsList';


export default class UserProfileFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            imageVisible: false,
            value: 0.1,
            switchOn1: false,
            causeVisible: false,
        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ backgroundColor: colors.initialDarkGreen, height: 220, justifyContent: 'space-around', flexDirection: 'row', paddingTop: 40 }}>
                        <TouchableOpacity style={{ borderWidth: 0, backgroundColor: colors.darkGreen, width: 135, height: 135, borderRadius: 80, marginLeft: 20 }} onPress={() => { this.setState({ imageVisible: true }); }}></TouchableOpacity>
                        <View style={{ marginLeft: 40, marginTop: 50 }}>
                            <Text style={{ fontSize: 23, color: 'white' }}>Jane Doe</Text>
                            <Text style={{ color: 'white' }}>@janedoe <Text style={{ color: '#E0E0E0' }}> Essex</Text></Text>
                            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 15, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={colors.initialDarkGreen} /></TouchableOpacity>
                            <Text style={{ backgroundColor: 'orange', width: 17, height: 18, textAlign: 'center', paddingTop: 0, borderRadius: 15, marginTop: -50, marginLeft: 35 }}>4</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginLeft: 40, marginTop: 5 }}><Icons name={'cog'} size={25} color='white' /></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('Update')} style={{ marginLeft: 20, marginTop: 5, marginRight: 20 }}><Icons name={'edit'} size={25} color='white' /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginLeft: 30, marginRight: 30, marginTop: 20 }}>
                        <LinearGradient
                            style={{ borderRadius: 25, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, }}
                            colors={['#00c5c4', '#01a7a6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity><Text style={{ fontSize: 14, textAlign: 'center', color: 'white', position: 'relative', height: 45, paddingTop: 12, }}>Create Activity</Text></TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View>
                            <Text style={{ fontSize: 18 }}>Activity</Text>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <Text>Availability: <Text style={{ color: colors.initialDarkGreen }}>23/02/20 - 23/04/20</Text></Text>
                            <Text>Activity date: <Text style={{ color: colors.initialDarkGreen }}>Expiring in the next week</Text></Text>
                            <Text>Women only: <Text style={{ color: colors.initialDarkGreen }}>Yes</Text></Text>
                            <Text>Placeholder: <Text style={{ color: colors.initialDarkGreen }}>Placeholder</Text></Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View>
                            <Text style={{ fontSize: 18 }}>Bio</Text>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua.</Text>
                            <Text></Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <View style={{ marginTop: 10, paddingBottom: 10, marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, color: 'black' }}>Causes</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.initialDarkGreen, marginTop: 10, marginRight: 10, paddingLeft: 11, paddingTop: 5, paddingBottom: 5, width: 45, borderRadius: 5 }}><Icon name={'award'} size={32} color={"white"} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.backgroundGrey, height: 350 }}>
                        <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* <TouchableOpacity><Text>Upcoming Activities</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{color: colors.initialDarkGreen}}>Past Activities</Text></TouchableOpacity> */}
                            <HorizontalEventsList categoryTitle="Upcoming Activities" expandList="Past Activities" DATA={Events}></HorizontalEventsList>
                        </View>
                    </View>
                    <Text></Text>
                </View>
            </ScrollView>
        )
    }
}
