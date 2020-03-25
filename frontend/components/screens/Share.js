import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import WhiteButton from './WhiteButton';

class Share extends React.Component {
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
        <Button onPress={this._toggleBottomNavigationView} title="Button" />
        <BottomSheet
          visible={this.state.visible}
          onBackButtonPress={this._toggleBottomNavigationView}
          onBackdropPress={this._toggleBottomNavigationView}>
          <WhiteButton textOnButton="Facebook" />
          <WhiteButton textOnButton="LinkedIn">
          </WhiteButton>
          <WhiteButton textOnButton="Twitter" />
          <WhiteButton textOnButton="Copy Link" />
        </BottomSheet>
      </View>
    );
  }
}

export default Share;