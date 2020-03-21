import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";

import COLORS from './Colors';
import Button from './ClassicButton';

export default class OpenEmail extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                {/*<View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Icons name={'arrow-back'} size={25} color='#01b0b0' style={{marginLeft: '20%',marginTop:'3%'}}/></TouchableOpacity>
                <Text style={styles.text}>    Forgot Password</Text>
            </View>
            */}
                <View style={{marginLeft: 30, marginRight: 30,}}>
                    <Text></Text>
                    <Text style={styles.tex}>We have sent an email to janedoe@gmail.com please check your mail.</Text>
                    <Text></Text>
                </View>
                <Button textOnButton="Open Inbox"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        navigation={this.props.navigation}
                        page=""></Button>
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
        borderRadius: 25,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 357,
    }
});
