import React from "react";
import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

import COLORS from '../reusables/Colors';
import Button from '../reusables/ClassicButton';

export default class ForgotPass extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', alignContent: 'center' }}>
                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, }}>
                    <Text></Text>
                    <Text style={styles.tex}>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed to
                        eiusmod. </Text>
                    <Text></Text>

                    <TextInput

                        style={{ borderBottomWidth: 1, borderColor: 'grey', paddingBottom: 7, }}
                        onChangeText={(Email) => this.setState({ Email })}
                        keyboardType='email-address'
                        value={null} placeholder='Email address'
                    />
                </View>
                <Button style={styles.button} textOnButton="Reset Password"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page="OpenEmail"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: 22,
        color: 'black',
        marginLeft: -60,

    },
    tex: {
        color: 'grey',

    },
    te: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        height: 45,
        paddingTop: 12,


    },
    sty: {
        borderRadius: 22,
        marginTop: 320,
    },
    button: {}
});