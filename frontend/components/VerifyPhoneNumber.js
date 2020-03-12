/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, TextInput
} from 'react-native';
import COLORS from "./Colors";
import ClassicButton from "./ClassicButton";

export default class VerifyPhoneNumber extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    // style={styles.form}
                >
                    <Text style={styles.title}>Verify your phone number</Text>
                    <Text />
                    <Text />
                    <Text />
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod.
                    </Text>
                    <TextInput style={styles.textInput} A/>
                    <Text />
                </View>
                <View style={styles.buttonView}>
                    <ClassicButton
                        textOnButton="Next"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        page='About'
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
        color: 'grey',
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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    fields: {
        marginVertical: 10,
        paddingVertical: 10,
        paddingBottom: 30,
        width: '95%',
    },
});
