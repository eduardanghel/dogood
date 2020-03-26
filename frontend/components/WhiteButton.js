import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import COLORS from '../reusables/Colors';


export default class ClassicButton extends Component {
    constructor(props) {
        super(props);
        this.navigate.bind(this);
    }

    navigate(txt) {
        this.props.navigation.navigate(txt);
    }

    render() {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => this.navigate(this.props.page)}
                >
                    <LinearGradient
                        style={styles.button}
                        colors={[COLORS.lightGreen, COLORS.darkGreen]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>{this.props.textOnButton}</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        width: '85%',
        marginTop: 10,
        justifyContent: 'center',
        marginLeft: '7.5%',
        marginRight: '7.5%'
    },
    button: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonContent: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '98.5%',
        height: 44,
        margin: 2,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'left',
    },
});