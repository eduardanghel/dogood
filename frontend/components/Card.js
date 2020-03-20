import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import ClassicButton from './ClassicButton';
import COLORS from './Colors';

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
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={this.props.imageUri} style={{resizeMode: 'cover'}}></Image>
                </View>
                <View style={styles.body}>
                    <Text style={styles.questionText}>{this.props.question}</Text>
                    <Text style={styles.bodyText}>{this.props.text}</Text>
                </View>
                <ClassicButton textOnButton="Sign up"
                               lightEndColor={COLORS.lightGreen}
                               darkEndColor={COLORS.darkGreen}
                               navigation={this.props.navigation}
                               page={this.props.page}/>
            </View>
        )
    }
}


export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '95%',
        width: 250,
        borderRadius: 3,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor: COLORS.classicGreen,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    questionText: {
        paddingVertical: 5,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodyText: {
        marginVertical: 5,
    },
    buttonView: {
        width: '85%',
        marginTop: 10,
    },
    button: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
});
