import React, { Component } from 'react';

import allEvents from '../../Lists/AllEventsList.js';
import EventList from './VerticalEventList.js';

export default class AllActivities extends Component {
  render() {
    return <EventList DATA={allEvents} />;
  }
}