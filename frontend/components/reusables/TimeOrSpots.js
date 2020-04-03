{/**
TimeOrSpots is used to show the time and the spots left on an EventCard
*/}

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ClockIcon from './ClockIcon'
import COLOR from './Colors';

export default class TimeAndSpots extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.timeAndSpots}>
                <ClockIcon />
                <Text style={styles.whiteText}>{this.props.textInput}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    timeAndSpots: {
        flexDirection: 'row',
        backgroundColor: COLOR.classicGreen,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 22,
        marginRight: 8,
    },
    whiteText: {
        color: 'white',
        fontSize: 12,
    },
});