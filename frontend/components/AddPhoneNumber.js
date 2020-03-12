/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, TextInput
} from 'react-native';
import COLORS from "./Colors";
import ClassicButton from "./ClassicButton";

export default class AddPhoneNumber extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    // style={styles.form}
                >
                    <Text style={styles.title}>Verify your phone number</Text>
                    <Text />
                    <Text style={styles.text}>
                        We will send you a verification code to verify your phone.
                    </Text>
                    <Text />
                    <View style={styles.input}>
                        <Text style={styles.phonetxt}>+44</Text>
                        <TextInput style={styles.textInput} placeholder="                                                                          " />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <ClassicButton
                        textOnButton="Next"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        page='VerifyPhoneNumber'
                        navigation={this.props.navigation}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    form: {
        flex: 5,

    },
    title: {
        fontSize: 24,
        color: '#01a7a6',
        fontWeight: '500', // semibold
        textAlignVertical: 'top',
        // textAlign: 'center',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 16,
        color: '#3e3e3e',
        textAlignVertical: 'top',
        // textAlign: 'center',
        marginHorizontal: 20,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    textInput: {
        fontSize: 16,
        color: 'grey',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 30,
        // paddingVertical: 10,
        marginVertical: 2,
    },
    fields: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingBottom: 30,
    width: '95%',
    },
    input: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    phonetxt: {
        marginTop: 2,
        fontSize: 16,
        color: 'grey',
    }
});
