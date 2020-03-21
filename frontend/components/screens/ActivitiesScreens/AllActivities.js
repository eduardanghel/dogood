import React, { Component } from 'react';

import AllEvents from './Lists/AllEventsList';
import EventList from './VerticalEventList.js';

export default class AllActivities extends Component {
  render() {
    return <EventList DATA={AllEvents} />;
  }
}