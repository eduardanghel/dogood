{/**
A List of all the Events
It takes all of the events from each category and removes any duplicates as some events can fall under several categories.
This temporarily until backend is done, as it can be greatly simplified and improved with backend.
*/}

import allCategories from './AllCategories';

function AllEvents() {
  var allEvents = [];
  var events = [];

  for (let i = 0; i < allCategories.length; i++) {
    for (let y = 0; y < allCategories[i].length; y++) {
      allEvents.push(allCategories[i][y])
    }
  }

  allEvents.forEach(obj => {
    if (!events.some(o => o.key === obj.key)) {
      events.push(obj)
    }
  })

  return events;
}

export default AllEvents();