{/**
VerticalEventList is the class responsible to handle any vertical list of events
It imports the function EventFunction
And requires a props DATA for the data it shows (aka the list of event that needs to be shown)
*/}

import * as React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';

import Event from './EventFunction';

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
      </SafeAreaView>
    );
  }
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