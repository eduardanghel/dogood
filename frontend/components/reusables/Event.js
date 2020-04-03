{/**
An Event is necessarily defined by the following:
key: a unique string to the Event used to identify it in FlatLists
organizationName: The name of the organization hosting the event
verifiedIcon: check-circle if the organization has been verified, blank if it hasn't
imageUri: the image used to represent the event
eventLocation: The region of the event (eg: Essex)
dayOfEvent: the day of the month (in numbers) the Event takes place (eg: 30)
monthOfEvent: the month (in three-letters initial) the Event takes place (eg: JAN for January)
eventTime: the time of the event (eg: 4:30PM)
eventTitle: the title of the Event
quickDescription: a quick description of the event
totalSpots: the total number of spots available
spotsTaken: the total number of spots taken
extendedDate: the detailed date of the Event (eg: Thursday, January 30th 2020)
frameOfEvent: the time frame of the Event (eg: 4:30 PM - 6:00 PM)
address: the street address of the Event
whatWillTheyDo: a description of what the attendees will do during the Event
whoCanTheyContact: a description of who the attendees can contact related to the Event
whereShouldTheyGo: a description of where the attendees should go for the Event
latitude: the geographic latitude location of the Event
longitude: the geographic longitude location of the Event
*/}

export default class Event {
    constructor(
        key,
        organizationName,
        verifiedIcon,
        imageUri,
        eventLocation,
        dayOfEvent,
        monthOfEvent,
        eventTime,
        eventTitle,
        quickDescription,
        totalSpots,
        spotsTaken,
        extendedDate,
        frameOfEvent,
        address,
        whatWillTheyDo,
        whoCanTheyContact,
        whereShouldTheyGo,
        latitude,
        longitude) {

        this._key = key;
        this._organizationName = organizationName;
        this._verifiedIcon = verifiedIcon;
        this._imageUri = imageUri;
        this._eventLocation = eventLocation;
        this._dayOfEvent = dayOfEvent;
        this._monthOfEvent = monthOfEvent;
        this._eventTime = eventTime;
        this._eventTitle = eventTitle;
        this._quickDescription = quickDescription;
        this._totalSpots = totalSpots;
        this._spotsTaken = spotsTaken;
        this._extendedDate = extendedDate;
        this._frameOfEvent = frameOfEvent;
        this._address = address;
        this._whatWillTheyDo = whatWillTheyDo;
        this._whoCanTheyContact = whoCanTheyContact;
        this._whereShouldTheyGo = whereShouldTheyGo;
        this._latitude = latitude;
        this._longitude = longitude;

        this._spotsLeft = 0;
        this._eventFullness = 0;

    }

    key() {
        return this._key;
    }

    organizationName() {
        return this._organizationName;
    }

    verifiedIcon() {
        return this._verifiedIcon;
    }

    imageUri() {
        return this._imageUri;
    }

    eventLocation() {
        return this._eventLocation;
    }

    dayOfEvent() {
        return this._dayOfEvent;
    }

    monthOfEvent() {
        return this._monthOfEvent;
    }

    eventTime() {
        return this._eventTime
    }

    spotsLeft() {
        var freeSpots = this._totalSpots - this._spotsTaken;

        return freeSpots;
    }

    eventTitle() {
        return this._eventTitle;
    }

    quickDescription() {
        return this._quickDescription;
    }

    progressBarProgress() {

        var howFull = this._spotsTaken / this._totalSpots;

        return howFull;
    }

    numberOfSpotsLeft() {
        var freeSpots = this._totalSpots - this._spotsTaken;

        return freeSpots + "/" + this._totalSpots + " SPOTS LEFT";
    }

    extendedDate() {
        return this._extendedDate;
    }

    frameOfEvent() {
        return this._frameOfEvent;
    }

    address() {
        return this._address;
    }

    whatWillTheyDo() {
        return this._whatWillTheyDo;
    }

    whoCanTheyContact() {
        return this._whoCanTheyContact;
    }

    whereShouldTheyGo() {
        return this._whereShouldTheyGo;
    }

    latitude() {
        return this._latitude;
    }

    longitude() {
        return this._longitude;
    }
}
