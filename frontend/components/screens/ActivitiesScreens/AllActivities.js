import React, { Component } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default class AllActivities extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.feed}>
                    <Text style={{ color: 'white' }}>The feed should display here</Text>
                    <FlatList
                        data={[{ key: 'a' }, { key: 'b' }]}
                        renderItem={({ item }) => <Text>{item.key}</Text>} />
                    {/*Here we need a way to get every single activity that this user is interested in and add them to the flatList*/}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    feed: {
        backgroundColor: 'blue',
        flex: 1,
        width: '90%',
    },
})