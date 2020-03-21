import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import ActivityCard from './ActivityCard.js';

export default class VerticalEventList extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.feed}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.props.DATA}
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