import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class Feed extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Activities
                </Text>
                <View style={styles.filterActivities}>
                    <View style={styles.textView}>
                        <TouchableOpacity>
                            <Text style={styles.textFilter}>All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textView}>
                        <TouchableOpacity >
                            <Text style={styles.textFilter}>Causes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textView}>
                        <TouchableOpacity >
                            <Text style={styles.textFilter}>Going</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textView}>
                        <TouchableOpacity >
                            <Text style={styles.favorites}>Favorites</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.feed}>
                {/*Here we need a way to get every single activity that this user is interested in and add them to the flatList*/}
            </View>
            <View style={styles.bottom}>
            </View>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
    },
    header: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        width: '75%',
    },
    feed: {

    },
    bottom: {

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterActivities: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 10,
    },
    textView: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01b0b0',
        marginHorizontal: 5,
    },
    textFilter: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    favorites: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
})