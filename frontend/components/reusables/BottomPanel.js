import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BottomSheet } from 'react-native-btr';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        };
    }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        return (
            <View>

                <Button
                    onPress={this._toggleBottomNavigationView}
                    title="Bottom"
                />
                <BottomSheet
                    visible={this.state.visible}
                    onBackButtonPress={this._toggleBottomNavigationView}
                    onBackdropPress={this._toggleBottomNavigationView}

                >

                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                            }}>
                            <Text style={{ textAlign: 'left', padding: 20, fontSize: 25, color: '#01b0b0', }}>
                                Almost signed up!
                            </Text>
                            <Text style={{ textAlign: 'left', padding: 20, fontSize: 17 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Icon name='event' type='material' color='grey' />
                                <View style={{
                                    padding: 10
                                }}>
                                    <Text>Thursday, January 30th 2020</Text>
                                    <Text style={{ color: "grey" }}>4:30PM - 6:00PM</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Icon name='place' type='material' color='grey' />
                                <View style={{
                                    padding: 10
                                }}>
                                    <Text>205 N Hamilton Rd, Essex SS11 1EP</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        height: 50,
                                        width: 300,
                                        marginBottom: 20,
                                        marginTop: 10,
                                        backgroundColor: 'white',
                                        borderColor: '#01b0b0',
                                        borderWidth: 2,
                                        borderRadius: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text style={{ color: "#01b0b0", fontSize: 20, }}>Add To Calendar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        height: 50,
                                        width: 300,
                                        marginBottom: 20,
                                        marginTop: 10,
                                        backgroundColor: '#01b0b0',
                                        borderColor: '#01b0b0',
                                        borderWidth: 2,
                                        borderRadius: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text style={{ color: "white", fontSize: 20, }}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </BottomSheet>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyComponent;