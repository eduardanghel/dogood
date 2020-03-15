import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import EventCard from './EventCard';
import shark from '../../../assets/promo_5.png';
import garden from '../../../assets/garden.png';

export default class AllActivities extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.feed}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <Event
                organizationName={item.organizationName}
                verifiedIcon={item.verifiedIcon}
                imageUri={item.imageUri}
                eventLocation={item.eventLocation}
                dayOfEvent={item.dayOfEvent}
                monthOfEvent={item.monthOfEvent}
                eventTime={item.eventTime}
                spotsLeft={item.spotsLeft}
                eventTitle={item.eventTitle}
                progressBarProgress={item.progressBarProgress}
                numberOfSpotsLeft={item.numberOfSpotsLeft}
                extendedDate={item.extendedDate}
                frameOfEvent={item.frameOfEvent}
                address={item.address}
                whatWillTheyDo={item.whatWillTheyDo}
                whoCanTheyContact={item.whoCanTheyContact}
                whereShouldTheyGo={item.whereShouldTheyGo}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            )}
            keyExtractor={item => item.key}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function Event({
  organizationName,
  verifiedIcon,
  imageUri,
  eventLocation,
  dayOfEvent,
  monthOfEvent,
  eventTime,
  spotsLeft,
  eventTitle,
  progressBarProgress,
  numberOfSpotsLeft,
  extendedDate,
  frameOfEvent,
  address,
  whatWillTheyDo,
  whoCanTheyContact,
  whereShouldTheyGo,
  latitude,
  longitude,
}) {
  return (
    <EventCard
      organizationName={organizationName}
      verifiedIcon={verifiedIcon}
      imageUri={imageUri}
      eventLocation={eventLocation}
      dayOfEvent={dayOfEvent}
      monthOfEvent={monthOfEvent}
      eventTime={eventTime}
      spotsLeft={spotsLeft}
      eventTitle={eventTitle}
      progressBarProgress={progressBarProgress}
      numberOfSpotsLeft={numberOfSpotsLeft}
      extendedDate={extendedDate}
      frameOfEvent={frameOfEvent}
      address={address}
      whatWillTheyDo={whatWillTheyDo}
      whoCanTheyContact={whoCanTheyContact}
      whereShouldTheyGo={whereShouldTheyGo}
      latitude={latitude}
      longitude={longitude}
    />
  );
}

const DATA = [
  {
    key: 'a',
    organizationName: 'The P.E.E.R. Center',
    verifiedIcon: 'check-circle',
    imageUri: shark,
    eventLocation: 'Essex',
    dayOfEvent: '30',
    monthOfEvent: 'JAN',
    eventTime: '4:30PM',
    spotsLeft: '3 SPOTS LEFT',
    eventTitle: 'The P.E.E.R. Center Community Help',
    progressBarProgress: 0.75,
    numberOfSpotsLeft: '3/4 SPOTS LEFT',
    extendedDate: 'Thursday, January 30th 2020',
    frameOfEvent: '4:30 PM - 6:00 PM',
    address: '205 N Hamilton Rd, Essex SS11 1EP',
    whatWillTheyDo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    whoCanTheyContact:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whereShouldTheyGo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    latitude: 47.191567,
    longitude: -52.837118,
  },

  {
    key: 'b',
    organizationName: "Alzheimer's Association",
    verifiedIcon: '',
    imageUri: garden,
    eventLocation: 'Not Essex?',
    dayOfEvent: '13',
    monthOfEvent: 'MAR',
    eventTime: '10:00AM',
    spotsLeft: '60 SPOTS LEFT',
    eventTitle: 'Spring Nature Project',
    progressBarProgress: 0.75,
    numberOfSpotsLeft: '3/4 SPOTS LEFT',
    extendedDate: 'Thursday, January 30th 2020',
    frameOfEvent: '4:30 PM - 6:00 PM',
    address: '205 N Hamilton Rd, Essex SS11 1EP',
    whatWillTheyDo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    whoCanTheyContact:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whereShouldTheyGo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    latitude: 47.191567,
    longitude: -52.837118,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  feed: {
    flex: 1,
    marginHorizontal: 8,
  },
});
