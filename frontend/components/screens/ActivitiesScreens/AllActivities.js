import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import EventCard from './EventCard.js';
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
