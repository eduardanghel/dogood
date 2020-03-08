import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';

class Card extends Component {

    constructor(props) {
        super(props);
        this.navigate.bind(this);
    }

    navigate(txt) {
        this.props.navigation.navigate(txt);
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: 'grey' }}>
                    <Image>{/*Placing the round image here*/}</Image>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Organization name here</Text>
                            <Icon>{/*The icon we want here*/}</Icon>
                        </View>
                        <Text>The location here</Text>
                    </View>
                    <Icon>{/*The other icon we want here*/}</Icon>
                </View>
                <View>
                    {/*This one is gonna be hard */}
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
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        backgroundColor: 'white'
    },
    signupButtonView: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupButton: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        height: 44,
        width: 200,
    },
    signup: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sty: {
        borderRadius: 30,
    }
});