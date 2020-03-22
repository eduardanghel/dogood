import React, { Component } from 'react';

import allEvents from '../../Lists/AllEventsList.js';
import EventList from './VerticalEventList.js';

function FilterActivities(){
    return(
        <EventList DATA={allEvents} /> //add a "going" marker in the backend to be able to filter activities
    );
}

export default class ActivitiesGoing extends Component {
  render() {
    return FilterActivities;
  }
}