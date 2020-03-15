import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import Icon from 'react-native-vector-icons/EvilIcons';
import IconBis from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddUser from 'react-native-vector-icons/Entypo';

import TimeAndSpots from './TimeOrSpots.js';
import COLOR from '../../Colors.js';


class EventCard extends Component {

  state={
    iconColor: 'grey',
  };

  changeIconColor(){
    var changedColor;

    if (this.state.iconColor=='grey') {
       changedColor='red'
    }
    else {
      changedColor='grey'
    }
    this.setState({iconColor:changedColor});
  }

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
        VIEW MORE
      </Text>
    );
  }

  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
        VIEW LESS
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="user" size={42} />
          <View style={styles.headerCenterView}>
            <View style={styles.nameAndIcon}>
              <Text style={styles.organizationName}>{this.props.organizationName}</Text>
              <IconBis name={this.props.verifiedIcon} color={COLOR.classicGreen} size={20} /> 
            </View>
            <Text style={styles.eventLocationText}>{this.props.eventLocation}</Text>
          </View>
          <IconThree
            name="ios-share"
            color={COLOR.classicGreen}
            size={30}
            style={styles.thirdHeaderIcon}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Image source={this.props.imageUri} style={styles.backgroundImage} />
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
              <TimeAndSpots time={this.props.eventTime}/>
              <TimeAndSpots spotsLeft={this.props.spotsLeft} />
            </View>
          </View>
          <View style={{ margin: 8 }}>
            <Text style={styles.organizationName}>
              {this.props.eventTitle}
            </Text>
            <View style={styles.moreInfo}>
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={this.renderViewMore}
                renderRevealedFooter={this.renderViewLess}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
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
  container: {},
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
  organizationName: {
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
    alignItem: 'center',
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
