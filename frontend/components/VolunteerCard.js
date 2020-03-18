import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import ClassicButton from './ClassicButton';

class VolunteerCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.cardHeader}
                    colors={[this.props.lightColour, this.props.darkColour]}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}>
                    <View>
                        <Text style={styles.headerText}>{this.props.header}</Text>
                    </View>
                </LinearGradient>
                <View style={styles.body}>
                    <Text style={styles.bodyText}> {this.props.body} </Text>
                    <ClassicButton textOnButton={this.props.textButton}
                                   lightEndColor={this.props.lightColour} darkEndColor={this.props.darkColour}
                                   navigation={this.props.navigation}
                                   page={this.props.page}/>
                </View>
            </View>
        )
    }
}

export default VolunteerCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: "100%",
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
        alignItems: 'center'
    },
    cardHeader: {
        padding: 20,
        width: '100%',
    },
    headerText: {
        color: 'white',
    },
    button: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        width: '90%',
    },
    bodyText: {
        marginBottom: 30
    }
});

