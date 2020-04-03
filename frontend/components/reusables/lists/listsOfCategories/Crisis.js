import IMAGE from '../../../../assets/AllImages';
import Event from '../../Event';

const list = [];

var event = new Event('LW806H-0N5HR9-12V0ZN-W5ZWU4-OYX8A9',
  'The P.E.E.R. Center',
  'check-circle',
  IMAGE.crisis,
  'Essex',
  '30',
  'JAN',
  '4:30PM',
  'Event for Crisis',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  4,
  3,
  'Thursday, January 30th 2020',
  '4:30 PM - 6:00 PM',
  '205 N Hamilton Rd, Essex SS11 1EP',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  47.191567,
  -52.837118
);

var demoEvent1 = new Event('F2Z5RC-1C7C3S-5NCLBG-AXSEVQ-WV4N8T',
  'The P.E.E.R. Center',
  'check-circle',
  IMAGE.shark,
  'Essex',
  '30',
  'JAN',
  '4:30PM',
  'The P.E.E.R. Center Community Help',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  4,
  3,
  'Thursday, January 30th 2020',
  '4:30 PM - 6:00 PM',
  '205 N Hamilton Rd, Essex SS11 1EP',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  47.191567,
  -52.837118
);

list.push({event: event, key: event.key()})
list.push({event: demoEvent1, key: demoEvent1.key()})

export default list;


