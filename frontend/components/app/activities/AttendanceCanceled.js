import * as React from 'react';
import { List } from 'react-native-paper';
import { Header, Icon } from 'react-native-elements';
import { StyleSheet, View, Button, Text, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';

import { BottomSheet } from 'react-native-btr';

class AttendanceCanceled extends React.Component {
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
      <View >

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
              <Text style={{ marginTop: 20, textAlign: 'left', padding: 20, fontSize: 20, color: '#01b0b0', }}>
                Event attendance has been canceled
         </Text>
              <Text style={{ textAlign: 'left', padding: 20, fontSize: 17 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </Text>

              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={this._toggleBottomNavigationView}
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
                  <Text style={{ color: "white", fontSize: 20, }}>Close</Text>
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
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default AttendanceCanceled;
