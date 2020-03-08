import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={{ marginVertical: 5, fontWeight: 'bold' }}>{this.props.question}</Text>
                    <View style={styles.signupButtonView}>
                        <LinearGradient
                            style={{ borderRadius: 30, }}
                            colors={['#00c5c4', '#01a7a6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity style={styles.signupButton}>
                                <Text style={styles.signup}>Sign up</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }
}

export default Card;

const styles = StyleSheet.create({
    container: {
        height: '95%',
        width: 250,
        borderRadius: 20,
        borderBottomWidth: 10,
        borderBottomColor: '#01b0b0',
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 20,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        backgroundColor: 'white'
    },
    signupButtonView: {
        alignItems: 'center'
    },
    signupButton: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        height: 44,
        width: 200,
    },
    signup: {
        color: 'white',
        fontSize: 20
    },
    sty: {
        borderRadius: 30,
    }
});

