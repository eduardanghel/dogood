import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Foundation'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Settings extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.h1}>Settings</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.options}>
                        <Icon
                            name="warning"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Report a Problem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.icontxt}>K</Text>
                        <Text style={styles.text}>About KARMA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Icon1
                            name="clipboard-notes"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Report a Problem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Icon
                            name="eye"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Community Guidelines</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Icon2
                            name="file-text"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Terms of Use</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Icon
                            name="mail"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Email Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Icon3
                            name="logout"
                            size={25}
                            color='#01b0b0'
                        />
                        <Text style={styles.text}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        textAlignVertical: 'top',
        marginBottom: 30,
    },
    options: {
        paddingTop: 20,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        marginRight: 40,
    },
    text: {
        paddingLeft: 10,
        paddingTop: 5,
        color: 'grey',
        fontSize: 16,
    },
    icontxt: {
        fontSize: 25,
        color: '#01b0b0'
    }
});