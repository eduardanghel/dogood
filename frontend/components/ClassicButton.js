import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class ClassicButton extends Component {
    constructor(props) {
        super(props);
        this.navigate.bind(this);
    }

    navigate(txt) {
        this.props.navigation.navigate(txt); //This allows use to use the navigation, you will usually have to write navigation={this.props.navigation}
    }

    render() {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => this.navigate(this.props.page)} //This here is to use the navigation, page is the name of the page you want to navigate to
                >
                    <LinearGradient
                        style={styles.button}
                        colors={[this.props.lightEndColor, this.props.darkEndColor]} //lightEndColor is the lighter color in the gradient //darkEndColor is the darker color in the gradient
                        start={{x: 1, y: 0}}
                        end={{x: 0, y: 1}}
                    >
                        <Text style={styles.buttonText}>{this.props.textOnButton}</Text>
                        {/* textOnButton is the text you want to display on the button */}
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        width: '85%',
        marginTop: 10,
    },
    button: {
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
});

{/** In order to use this button, follow the instructions bellow:
 In the imports section add:
 import Button from './ClassicButton.js';
 *If the name 'Button' is already used in the file, change it to something else, like 'ClassicButton' and write ClassicButton instead of Button
 *Make sure you import the file from the correct location

 Now to use it:
 Where you want to add it write:
 <Button textOnButton="The text you want to display"
 lightEndColor="The lighter color for the gradient" I strongly recommend using the colors from the Color.js file (I've explained how to do it in that file)
 darkEndColor="The darker color for the gradient"
 page="The name of the file you want to go to"
 navigation={this.props.navigation} *Most of the time
 ></Button>

 Here is an example (In a file named ExampleForButton.js):

 import React, {Component) from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from './ClassicButton.js';
import COLORS from './Colors.js';


export default class ExampleForButton extends Component {
  render()
    return (
        <View style={styles.Container}>
            <Text>This is an example to use the button</Text>
            <Button textOnButton="This is a Button"
              lightEndColor={COLORS.lightGreen}
              darkEndColor={COLORS.darkGreen}
              page="Another Page"
              navigation={this.props.navigation}/>
        </View>
    );
}
 */
}