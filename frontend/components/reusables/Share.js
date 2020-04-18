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
          <WhiteButtonWithIcon textOnButton="Facebook" iconName="facebook" />
          <WhiteButtonWithIcon textOnButton="LinkedIn" iconName="linkedin" />
          <WhiteButtonWithIcon textOnButton="Twitter" iconName="twitter" />
          <WhiteButtonWithIcon textOnButton="Copy Link" iconName="link" />
        </BottomSheet>
      </View>
    );
  }
}

export default Share;
