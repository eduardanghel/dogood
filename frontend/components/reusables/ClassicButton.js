{/**
ClassicButton is the most common button (at the time of this common) in the app.
It is a button with a gradient and white text
It requires props for the navigation, the gradient color, the text displayed and the name of the page for it to navigate to.
*/}

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
                        colors={[this.props.lightEndColor, this.props.darkEndColor]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <Text style={styles.buttonText}>{this.props.textOnButton}</Text>
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
    },
    button: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
});