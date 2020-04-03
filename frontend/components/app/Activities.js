import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllActivities from './activities/AllActivities';
import ActivitiesGoing from './activities/ActivitiesGoing';
import Causes from './activities/Causes';

import COLORS from '../reusables/Colors';

//The following are temporary functions as the screens they should represent aren't done yet

function ActivitiesFavorites() {
    return (
        <View style={styles.container}>
            <Text>Activities Favorites!</Text>
        </View>
    );
}

// End of temporary functions

const Tab = createMaterialTopTabNavigator();

class Activities extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='All'
                style={{
                    marginTop: Constants.statusBarHeight, backgroundColor: 'white',
                }}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'grey',
                    indicatorStyle: { backgroundColor: COLORS.classicGreen, height: '100%', borderRadius: 30 },
                    labelStyle: {
                        fontSize: 12,
                    }
                }}>
                <Tab.Screen name='All' component={AllActivities} />
                <Tab.Screen name='Causes' component={Causes} />
                <Tab.Screen name='Going' component={ActivitiesGoing} />
                <Tab.Screen name='Favorites' component={ActivitiesFavorites} />
            </Tab.Navigator >
        )
    }
}

export default Activities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});