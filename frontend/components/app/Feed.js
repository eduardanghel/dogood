{/**
The Feed is the app's main screen, from here the user can browse all the events (and categories of events) and access his profile screen
and settings
*/}

import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';

import Activities from './Activities';
import Notifications from './Notifications';
import ProfileScreen from './profile/EditProfile';
import MyCauses from './MyCauses'

import COLORS from '../reusables/Colors';

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
                        } else if (route.name === 'My Causes') {
                            iconName = focused
                                ? 'heart'
                                : 'heart';
                        } else if (route.name === 'Notification') {
                            iconName = focused
                                ? 'bell'
                                : 'bell';
                        } else if (route.name === 'Profile') {
                            iconName = focused
                                ? 'user'
                                : 'user';
                        }
                        return <Icon name={iconName} color={color} size={size} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: COLORS.classicGreen,
                }}>
                <Tab.Screen name="Activities" component={Activities} />
                <Tab.Screen name="My Causes" component={MyCauses} />
                <Tab.Screen name="Notification" component={Notifications} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        );
    }
}