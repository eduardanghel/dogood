import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Clock from 'react-native-vector-icons/AntDesign';

export default class ClockIcon extends Component {
    render() {
        return (
            <Clock
                name="clockcircle"
                color={'white'}
                size={17}
                style={styles.clockStyle}
            />
        )
    }
}

const styles = StyleSheet.create({
    clockStyle: {
        marginRight: 4,
    },
});