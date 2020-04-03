{/**
EventFunction is responsible for linking an Event to an EventCard
*/}

import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';

import EventCard from './EventCard';

export default function EventFunction({
    organizationName,
    verifiedIcon,
    imageUri,
    eventLocation,
    dayOfEvent,
    monthOfEvent,
    eventTime,
    spotsLeft,
    eventTitle,
    quickDescription,
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
        <View style={styles.card}>
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
                quickDescription={quickDescription}
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
        </View>
    );
}

const screenWidth = Math.round(Dimensions.get('window').width * 0.95);

const styles = StyleSheet.create({
    card: {
        width: screenWidth,
        paddingHorizontal: 8,
        marginVertical: 8,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
        shadowOpacity: 0.26,
        elevation: 8,
    },
});