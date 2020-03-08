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
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}/>
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
    header: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        width: '75%',
    },
    feed: {
        backgroundColor: 'blue',
        flex: 1,
        width: '90%',
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