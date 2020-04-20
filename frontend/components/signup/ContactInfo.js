import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import ClassicButton from '../reusables/ClassicButton';
import COLORS from '../reusables/Colors';

export default class Contact extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity><Icons name={'arrow-back'} size={25} color={COLORS.classicGreen}
                        style={{ marginLeft: '20%', marginTop: '25%' }} /></TouchableOpacity>
                    <Text style={styles.text}>Contact Info</Text>
                </View>
                <Text style={styles.te}>
                    Where are you located?
                </Text>
                <Text style={styles.de}>
                    Charities need to know this info, and it lets us show your local events
                </Text>
                <Text style={styles.padding}>
                    Address Line 1
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                    Address Line 2
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                    County / State
                </Text>
                <TextInput style={styles.textinput} placeholder="" />
                <Text style={styles.padding}>
                    County / State Postcode
                </Text>
                <View style={styles.row}>
                    <TextInput style={styles.textinput2} placeholder="                       " />
                    <TextInput style={styles.textinput2} placeholder="                           " />
                </View>
                <Text style={styles.padding}>
                    Phone Number
                </Text>
                <TextInput style={styles.textinput} placeholder="" />

                <View style={{alignItems: 'center', marginLeft: 30, marginRight: 30,}}>
                    <ClassicButton
                        textOnButton="Next"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        navigation={this.props.navigation}
                        page="UserCauses"
                    ></ClassicButton>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    text: {
        fontSize: 22,
        color: 'black',
        marginLeft: -40,
        marginTop: 25
    },
    te: {
        margin: 25,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: COLORS.classicGreen,
    },
    de: {
        fontSize: 14,
        margin: 25,
        marginTop: 1,
        color: 'grey',
    },
    textinput: {
        fontSize: 15,
        color: 'grey',
        paddingTop: 15,
        paddingBottom: 8,
        marginBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 25,
        marginRight: 25
    },
    textinput2: {
        fontSize: 15,
        color: 'grey',
        paddingTop: 15,
        paddingBottom: 8,
        marginBottom: 10,
        marginTop: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 25,
        marginRight: 63,
    },
    padding: {
        fontSize: 14,
        color: 'grey',
        marginLeft: 25,
    },
    row: {
        flexDirection: "row"
    },
});
