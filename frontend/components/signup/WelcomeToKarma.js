{/**
 WelcomeToKarma is where the person signing up in the app chooses if he/she signs up as regular user (who will attend events)
 Or as an organization (which will host events)
 */
}

import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';

import COLORS from '../reusables/Colors.js';
import IMAGE from '../../assets/AllImages';
import Card from '../reusables/Card';
import WhiteButton from '../reusables/WhiteButton';

export default class WelcomeToKarma extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.welcomeText}>
                    <Text style={styles.header}>Welcome to KARMA</Text>
                    <Text style={styles.text}>Lorem ipsum dolo sit amet, consectetur adip isicing elit, sed do
                        eiusmod</Text>
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                    horizontal={true}
                    alwaysBounceVertical={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewView}>
                    <Card
                        imageUri={IMAGE.heartHands} question="Are you an individual?"
                        text="Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusm ut labore et dolore magna aliqua"
                        navigation={this.props.navigation}
                        page="UserRegistration"
                    />
                    <Card
                        imageUri={IMAGE.earth} question="Are you an organization?"
                        text="Lorem ipsum dolor sit amet, consectetur adip isicing elit,sed do eiusm ut labore et dolore magna aliqua"
                        navigation={this.props.navigation}
                        page=""
                    />
                </ScrollView>
                <View style={styles.bottomView}>
                    <Text style={styles.boldText}>Already on Karma?</Text>
                    <WhiteButton
                        textOnButton="Login"
                        page="Loginate"
                        navigation={this.props.navigation}/>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundGrey,
        marginTop: Constants.statusBarHeight,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        marginBottom: 10,
    },
    header: {
        fontSize: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'left'
    },
    text: {
        fontSize: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'left'
    },
    scrollViewView: {
        marginBottom: 20,
    },
    bottomView: {
        backgroundColor: 'white',
        width: '100%',
        marginHorizontal: 20,
        paddingBottom: 30,
    },
    boldText: {
        fontSize: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'left',
        fontWeight: 'bold'
    },
});
