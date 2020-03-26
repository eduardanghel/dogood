/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView
} from 'react-native';
import IMAGE from '../../assets/AllImages';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';

export default class IDValidation extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <Image style={styles.image} source={IMAGE.passport} />
                    <Text style={styles.title}>Verify your account</Text>
                    <Text />
                    <Text style={styles.paragraph}>
                        We need you to verify who you are for your safety and the safety of others.
                        It’s quick, easy and totally secure.
                    </Text>
                    <Text />
                    <Text />
                    <Text style={styles.paragraph}>
                        You will be asked to verify
                        using photo ID and your phone number.
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <ClassicButton
                        textOnButton="Verify now"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        page='AddPhoneNumber'
                        navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundGrey,
    },
    form: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#01a7a6',
        fontWeight: '500', // semibold
        textAlignVertical: 'top',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#3e3e3e',
        textAlignVertical: 'top',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        alignSelf: 'center',
        height: 300,
        width: 300,
    },
});
