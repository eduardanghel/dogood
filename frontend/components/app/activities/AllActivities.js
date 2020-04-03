{/**
Shows a list of all the events
*/}

import React, { Component } from 'react';

import allEvents from '../../reusables/lists/AllEventsList';
import EventList from '../../reusables/VerticalEventList';

export default class AllActivities extends Component {
  render() {
    return <EventList DATA={allEvents} />;
  }
}