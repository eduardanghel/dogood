import * as React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import ClassicButton from './ClassicButton';
import COLORS from './Colors';
import Store from "./store/Store";
import axios from "axios";

class Contact extends React.Component {
    state = {
        authToken: this.props.authToken.get("OAuthToken"),
        address1: '',
        address2: '',
        county: '',
        postcode: '',
    };

    onAddress1Change(text) {
        this.setState({address1: text});
    }

    onAddress2Change(text) {
        this.setState({address2: text});
    }

    onCountyChange(text) {
        this.setState({county: text});
    }

    onPostcodeChange(text) {
        this.setState({postcode: text});
    }

    handleRequest() {
        const create_user_url = 'https://karma-zomp.co.uk/users/user_profile/';

        var updateAddressForm = new FormData();
        updateAddressForm.append('address', this.state.address1.concat(", ".concat(this.state.address2)));
        updateAddressForm.append('city', this.state.county);
        updateAddressForm.append('postcode', this.state.postcode);

        const authorization = {
            headers: {
                Authorization: this.state.authToken
            }
        };

        axios
            .patch(create_user_url, updateAddressForm, authorization)
            .then(response => ({ response }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity><Icons name={'arrow-back'} size={25} color={COLORS.classicGreen}
                                             style={{marginLeft: '20%', marginTop: '25%'}}/></TouchableOpacity>
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
                <TextInput
                    style={styles.textinput}
                    onChangeText={this.onAddress1Change.bind(this)}
                    placeholder=""/>
                <Text style={styles.padding}>
                    Address Line 2
                </Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={this.onAddress2Change.bind(this)}
                    placeholder=""/>
                <Text style={styles.padding}>
                    County / State
                </Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={this.onCountyChange.bind(this)}
                    placeholder=""/>
                <Text style={styles.padding}>
                    County / State Postcode
                </Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textinput2}
                        onChangeText={this.onPostcodeChange.bind(this)}
                        placeholder="                       "/>
                </View>
                <ClassicButton
                    textOnButton="Next"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page="feed"
                ></ClassicButton>

            </View>
        );
    }
}

export default Store.withStore(Contact);

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
        //flex: 1,
        flexDirection: "row"
    },
    login: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 12,
    },
    button: {
        marginLeft: 15,
        borderRadius: 22,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 300,
        paddingHorizontal: 16,
    },
});
