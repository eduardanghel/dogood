{/**
DetailedEventPage shows all the details of the event
It necessarily requires all the props of an Event
From here the user can:
Share the event (using IconThree)
Like the event (using HeartIcon)
Call or Email the host of the event (by pressing the according buttons)
Attend the event
*/}

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/EvilIcons';
import IconBis from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from './ClassicButton';
import COLOR from './Colors';

class DetailedEventPage extends Component {
  state = {
    iconColor: 'grey',
  };

  changeIconColor() {
    var changedColor;

    if (this.state.iconColor == 'grey') {
      changedColor = 'red';
    } else {
      changedColor = 'grey';
    }
    this.setState({ iconColor: changedColor });
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
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{this.props.eventTitle}</Text>
          <View style={styles.header}>
            <Icon name="user" size={42} />
            <View style={styles.headerCenterView}>
              <View style={styles.nameAndIcon}>
                <Text style={styles.organizationName}>
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
            <Image
              source={this.props.imageUri}
              style={styles.backgroundImage}
            />
            <View style={styles.calendarDate}>
              <Text style={styles.textInCalendar}>{this.props.dayOfEvent}</Text>
              <Text style={styles.textInCalendar}>
                {this.props.monthOfEvent}
              </Text>
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
          <View //This view is for the spots left
            style={styles.progressView}>
            <View style={styles.progressStyle}>
              <ProgressBar
                progress={this.props.progressBarProgress}
                color={COLOR.classicGreen}
                style={styles.barStyle}
              />
            </View>
            <Text>{this.props.numberOfSpotsLeft}</Text>
          </View>
          <View //This view is for the date, time and location
          >
            <View //This view is for the date and time
              style={styles.iconPlusText}>
              <Icon name="calendar" color={'grey'} size={35} />
              <View style={{ marginHorizontal: 4 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>
                  {this.props.extendedDate}
                </Text>
                <Text style={{ color: 'grey' }}>{this.props.frameOfEvent}</Text>
              </View>
            </View>
            <View //This view is for the location
              style={styles.iconPlusText}>
              <Icon name="location" color={'grey'} size={35} />
              <View style={{ marginHorizontal: 4 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {this.props.address}
                </Text>
              </View>
            </View>
          </View>
          <View // This view is for what the volunteers will do, who to contact and where
            style={styles.details}>
            <Text style={styles.categoryTitle}>
              What will the volunteers do ?
            </Text>
            <Text style={styles.titleExplanation}>
              {this.props.whatWillTheyDo}
            </Text>
            <Text style={styles.categoryTitle}>Who to contact?</Text>
            <Text style={styles.titleExplanation}>
              {this.props.whoCanTheyContact}
            </Text>
            <View //The view for the buttons
              style={styles.doubleButton}>
              <View style={styles.buttonView}>
                <Button
                  textOnButton="Call"
                  lightEndColor={COLOR.lightGreen}
                  darkEndColor={COLOR.darkGreen}
                />
              </View>
              <View style={styles.buttonView}>
                <Button
                  textOnButton="Email"
                  lightEndColor={COLOR.lightGreen}
                  darkEndColor={COLOR.darkGreen}
                />
              </View>
            </View>
            <Text style={styles.categoryTitle}>Where</Text>
            <Text style={styles.titleExplanation}>
              {this.props.whereShouldTheyGo}
            </Text>
          </View>
          <View
            style={{ flex: 1, width: '100%', height: 200 }} //This view holds the locations map
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
              region={{
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}>
              <Marker
                coordinate={{ latitude: this.props.latitude, longitude: this.props.longitude }}
              />
            </MapView>
          </View>
          <View //For any important information
            style={styles.details}>
            <Text style={styles.categoryTitle}>Important</Text>
            <Text style={{ marginBottom: 12 }}>Some important stuff ok</Text>
          </View>
          <View
            style={styles.attendAttended}>
            <Button
              textOnButton="Attend"
              lightEndColor={COLOR.lightGreen}
              darkEndColor={COLOR.darkGreen}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailedEventPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 8,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: COLOR.backgroundGrey2,
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
  progressView: {
    marginVertical: 12,
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  progressStyle: {
    flex: 1,
    marginRight: 8,
  },
  barStyle: {
    height: 15,
    borderRadius: 22,
  },
  iconPlusText: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginBottom: 12,
  },
  details: {
    backgroundColor: COLOR.backgroundGrey2,
    paddingHorizontal: 8,
    paddingBottom: 12,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 12,
  },
  titleExplanation: {
    textAlign: 'justify',
  },
  doubleButton: {
    flexDirection: 'row',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attendAttended: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 12,
    flex: 1,
  },
});
