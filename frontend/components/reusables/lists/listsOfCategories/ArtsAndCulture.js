import IMAGE from '../../../../assets/AllImages';
import Event from '../../Event';

const list = [];

var event = new Event('YP1YFV-47DD6Y-DJT3IC-18NQ7G-NPGMDX',
  'The P.E.E.R. Center',
  'check-circle',
  IMAGE.art,
  'Essex',
  '30',
  'JAN',
  '4:30PM',
  'Event for Art',
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

var demoEvent2 = new Event('T5M3EA-ZVPIWO-8VM98U-18LP8L-CFI82F',
  "Alzheimer's Association",
  '',
  IMAGE.garden,
  'Not Essex?',
  '13',
  'MAR',
  '10:00AM',
  'Spring Nature Project',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  60,
  18,
  'Thursday, January 30th 2020',
  '10:00 AM - 4:00 PM',
  '205 N Hamilton Rd, Essex SS11 1EP',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  47.191567,
  -52.837118
);

list.push({ event: event, key: event.key() })
list.push({ event: demoEvent2, key: demoEvent2.key() })

export default list;


