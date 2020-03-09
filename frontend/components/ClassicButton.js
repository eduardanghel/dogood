import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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
                <TouchableOpacity onPress={() => this.navigate(this.props.page)}
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
        justifyContent:'center',
        paddingVertical:10,
    },
})