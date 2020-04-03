{/**
The HorizontalEventList is responsible for handling any horizontal list of events
It imports the function EventFunction
It requires a props DATA for the data it shows (aka the list of event that needs to be shown)
*/}

import * as React from 'react';
import { Text, FlatList, StyleSheet, View, TouchableOpacity, Modal, Alert, } from 'react-native';

import ArrowIcon from 'react-native-vector-icons/AntDesign';

import VerticalList from './VerticalEventList';
import Event from './EventFunction';
import COLORS from './Colors';

export default class HorizontalEventsList extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed');
          }}>
          <ArrowIcon
            name="arrowleft"
            color={COLORS.classicGreen}
            size={20}
            style={{ margin: 12 }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
          <VerticalList DATA={this.props.DATA} />
        </Modal>

        <View style={styles.topFilter}>
          <Text style={styles.category}>{this.props.categoryTitle}</Text>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.seeMore}>{this.props.expandList}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.props.DATA}
          renderItem={({ item }) => (
            <Event
              organizationName={item.event.organizationName()}
              verifiedIcon={item.event.verifiedIcon()}
              imageUri={item.event.imageUri()}
              eventLocation={item.event.eventLocation()}
              dayOfEvent={item.event.dayOfEvent()}
              monthOfEvent={item.event.monthOfEvent()}
              eventTime={item.event.eventTime()}
              spotsLeft={item.event.numberOfSpotsLeft()}
              eventTitle={item.event.eventTitle()}
              quickDescription={item.event.quickDescription()}
              progressBarProgress={item.event.progressBarProgress()}
              numberOfSpotsLeft={item.event.numberOfSpotsLeft()}
              extendedDate={item.event.extendedDate()}
              frameOfEvent={item.event.frameOfEvent()}
              address={item.event.address()}
              whatWillTheyDo={item.event.whatWillTheyDo()}
              whoCanTheyContact={item.event.whoCanTheyContact()}
              whereShouldTheyGo={item.event.whereShouldTheyGo()}
              latitude={item.event.latitude()}
              longitude={item.event.longitude()}
            />
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topFilter: {
    flexDirection: 'row',
    marginBottom: 8,
    marginHorizontal: 12,
  },
  category: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
  seeMore: {
    color: COLORS.classicGreen,
  },
});
