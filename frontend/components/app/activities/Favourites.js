import React, { Component } from 'react';

import allEvents from '../../reusables/lists/AllEventsList';
import EventList from '../../reusables/VerticalEventList';

function FilterActivities() {
  return (
    <EventList DATA={allEvents} /> 
  );
}

export default class Favourites extends Component {
  render() {
    return FilterActivities;
  }
}