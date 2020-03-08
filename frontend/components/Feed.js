import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, TabBarIOS } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';

import Activities from './screens/Activities.js';

//The following functions are just temporary as the screens haven't been coded yet

function MyCausesScreen() {
    return (
        <View style={styles.tabContainer}>
            <Text>My Causes!</Text>
        </View>
    );
}

function NotificationScreen() {
    return (
        <View style={styles.tabContainer}>
            <Text>Notification!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.tabContainer}>
            <Text>Profile!</Text>
        </View>
    );
}

//End of temporary functions


const Tab = createBottomTabNavigator();

export default class Feed extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Activities"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Activities') {
                            iconName = focused
                                ? 'trophy'
                                : 'trophy';
                        }
                        else if (route.name === 'My Causes') {
                            iconName = focused
                                ? 'heart'
                                : 'heart';
                        }
                        else if (route.name === 'Notification') {
                            iconName = focused
                                ? 'bell'
                                : 'bell';
                        }
                        else if (route.name === 'Profile') {
                            iconName = focused
                                ? 'user'
                                : 'user';
                        }
                        return <Icon name={iconName} color={color} size={size} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#01b0b0',
                }}>
                <Tab.Screen name="Activities" component={Activities} />
                <Tab.Screen name="My Causes" component={MyCausesScreen} />
                <Tab.Screen name="Notification" component={NotificationScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})