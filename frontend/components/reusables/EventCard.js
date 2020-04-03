{/**
The EventCard is the GUI representation of an Event
It requires all the props of the Event
The user can press:
The share icon, to share the event
The heart icon, to like the event
The add icon, to join the event
The VIEW MORE/VIEW LESS text to see more of the quick description of the event
The image to see all the details of the event (shown on a Modal using DetailedEventPage)
*/}

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Modal, Alert, TouchableOpacity } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import Icon from 'react-native-vector-icons/EvilIcons';
import IconBis from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddUser from 'react-native-vector-icons/Entypo';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

import TimeAndSpots from './TimeOrSpots';
import COLOR from './Colors';
import DetailedEventPage from './DetailedEventPage';

class EventCard extends Component {

  state = {
    iconColor: 'grey',
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  changeIconColor() {
    var changedColor;

    if (this.state.iconColor == 'grey') {
      changedColor = 'red'
    }
    else {
      changedColor = 'grey'
    }
    this.setState({ iconColor: changedColor });
  }

  renderViewMore(onPress) {
    return (
      <TouchableOpacity>
        <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
          VIEW MORE
      </Text>
      </TouchableOpacity>

    );
  }

  renderViewLess(onPress) {
    return (
      <TouchableOpacity>
        <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
          VIEW LESS
      </Text>
      </TouchableOpacity>

    );
  }

  handleTextReady() {

  }

  render() {
    return (
      <View >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ArrowIcon
            name="arrowleft"
            color={COLOR.classicGreen}
            size={20}
            style={{ margin: 12 }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
          <DetailedEventPage
            organizationName={this.props.organizationName}
            eventTitle={this.props.eventTitle}
            verifiedIcon={this.props.verifiedIcon}
            imageUri={this.props.imageUri}
            eventLocation={this.props.eventLocation}
            dayOfEvent={this.props.dayOfEvent}
            monthOfEvent={this.props.monthOfEvent}
            progressBarProgress={this.props.progressBarProgress}
            numberOfSpotsLeft={this.props.numberOfSpotsLeft}
            extendedDate={this.props.extendedDate}
            frameOfEvent={this.props.frameOfEvent}
            address={this.props.address}
            whatWillTheyDo={this.props.whatWillTheyDo}
            whoCanTheyContact={this.props.whoCanTheyContact}
            whereShouldTheyGo={this.props.whereShouldTheyGo}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        </Modal>

        <View style={styles.header}>
          <Icon name="user" size={42} />
          <View style={styles.headerCenterView}>
            <View style={styles.nameAndIcon}>
              <Text style={styles.organizationNameStyle}>
                {this.props.organizationName}
              </Text>
              <IconBis
                name={this.props.verifiedIcon}
                color={COLOR.classicGreen}
                size={20}
              />
            </View>
            <Text style={styles.eventLocationText}>
              {this.props.eventLocation}
            </Text>
          </View>
          <IconThree
            name="ios-share"
            color={COLOR.classicGreen}
            size={30}
            style={styles.thirdHeaderIcon}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image
              source={this.props.imageUri}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>
          <View style={styles.calendarDate}>
            <Text style={styles.textInCalendar}>{this.props.dayOfEvent}</Text>
            <Text style={styles.textInCalendar}>{this.props.monthOfEvent}</Text>
          </View>
          <View style={styles.heartIconStyle}>
            <HeartIcon
              raised
              name="heart-circle-outline"
              color={this.state.iconColor}
              size={40}
              onPress={() => this.changeIconColor()}
            />
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.quickInfo}>
              <TimeAndSpots textInput={this.props.eventTime} />
              <TimeAndSpots textInput={this.props.spotsLeft} />
            </View>
          </View>
          <View style={{ margin: 8 }}>
            <Text style={styles.organizationNameStyle}>{this.props.eventTitle}</Text>
            <View style={styles.moreInfo}>
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={this.renderViewMore}
                renderRevealedFooter={this.renderViewLess}
                onReady={this.handleTextReady}>
                <Text>
                  {this.props.quickDescription}
                </Text>
              </ReadMore>
            </View>
          </View>
        </View>
        <View style={styles.userStyle}>
          <AddUser name="add-user" color={'white'} size={20} />
        </View>
      </View>
    );
  }
}

export default EventCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLOR.backgroundGrey,
    padding: 8,
  },
  headerCenterView: {
    flex: 1,
  },
  nameAndIcon: {
    flexDirection: 'row',
    paddingTop: 3,
  },
  organizationNameStyle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 3,
  },
  eventLocationText: {
    color: 'grey',
  },
  thirdHeaderIcon: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
  calendarDate: {
    backgroundColor: COLOR.classicGreen,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    position: 'absolute',
    left: 5,
    top: 5,
    width: 50,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
  },
  textInCalendar: {
    color: 'white',
    fontSize: 20,
  },
  heartIconStyle: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 4,
    backgroundColor: 'transparent',
  },
  quickInfo: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  userStyle: {
    position: 'absolute',
    right: 5,
    top: 250,
    padding: 10,
    backgroundColor: COLOR.classicGreen,
    borderRadius: 42,
    borderColor: 'white',
    borderWidth: 4,
  },
  moreInfo: {
    marginTop: 8,
  },
});
