import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

import ActivityCard from './ActivityCard.js';
import IMAGE from '../assets/AllImages';
import DetailedEventPage from './DetailedEventPage.js';
import AllEvents from './Lists/AllEventsList.js';

export default class AllActivities extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.feed}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={AllEvents}
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
    <ActivityCard
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
