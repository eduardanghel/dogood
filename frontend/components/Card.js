import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Card extends Component {
    constructor(props) {
        super(props);
        this.navigate.bind(this);
    }

    navigate(txt) {
        this.props.navigation.navigate(txt);
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                    <Image source={this.props.imageUri} style={{ width: '50%', height: '50%', resizeMode: 'center' }}></Image>
                </View>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={{ marginVertical: 5, fontWeight: 'bold' }}>{this.props.question}</Text>
                    <Text style={{ marginVertical: 5 }}>Lorem ipsum dolor sit amet, consectetur adip isicing elit,
                   sed do eiusm ut labore et dolore magna aliqua
                    </Text>
                    <View>
                        <LinearGradient
                            style={styles.signupButtonView}
                            colors={['#00c5c4', '#01a7a6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <TouchableOpacity
                                onPress={() => this.navigate(this.props.page)}>
                                <Text style={styles.signup} >Sign up</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }
}


export default Card;

const styles = StyleSheet.create({
    container: {
        height: '95%',
        width: 250,
        borderRadius: 20,
        borderBottomWidth: 10,
        borderBottomColor: '#01b0b0',
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        backgroundColor: 'white'
    },
    signupButtonView: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupButton: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        height: 44,
        width: 200,
    },
    signup: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sty: {
        borderRadius: 30,
    }
});

