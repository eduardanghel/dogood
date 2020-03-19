import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import Icon from 'react-native-vector-icons/EvilIcons';
import IconBis from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddUser from 'react-native-vector-icons/Entypo';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

import TimeAndSpots from './TimeOrSpots.js';
import COLOR from '../../Colors.js';
import DetailedEventPage from './DetailedEventPage.js';



{/** When using an EventCard do the following:
First import it:
import EventCard from 'wherever the location is compared to your file';

Then just use it like this:
You will need to specify each of the props stated under
If you want an example on how to use it in a FlatList (a list where there's an unknown potentially big number of items) check  AllActivities.js
If you want to use it in a ListView (a list where we know how many items there are, and the number isn't too big) then just add them manually with hard-coded values as under

<EventCard 
  organizationName='the name'                           //This is the name of the organization - eg: The P.E.E.R. Center Community Help
  eventTitle='the title'                                //The title of the event - eg: The P.E.E.R. Center
  verifiedIcon='check-circle'                           //This is the icon to show if the organization is verified or not. Put 'check-circle' if it is verified, or '' if it is not
  imageUri='shark.png'                                  //The image associated with the event - eg: the image of the shark
  eventLocation='the location'                          //The city/region of the event - eg: Essex
  dayOfEvent='the number of the day'                    //The day of the event - eg: 30 - This is the number that appears on the calendar above the image
  monthOfEvent='the 3 letter month'                     //The month of the event eg: - JAN This is the 3 letter month that appears under the number above on the calendar above the image
  //All of the under are exclusively for the detailed event of the page and are shown when you press in the image, you still need to specify them
  progressBarProgress=0.75                              //The progress bar shows how much the event is full, it should be a number between 0 and 1 - eg: 0.75
  numberOfSpotsLeft='3/4 SPOTS LEFT'                    //The number of sports left in the event - eg: 3/4 SPOTS LEFT
  extendedDate='Thursday, January 30th 2020'            //This is the date of the event under the format Day, Month day th Year - eg: Thursday, January 30th 2020
  frameOfEvent='4:30 PM - 6:30 PM'                      //The time frame of the event - eg: 4:30 PM - 6:30 PM
  address='205 N Hamilton Rd, Essex SS11 1EP'           //The full address of the event - eg: 205 N Hamilton Rd, Essex SS11 1EP
  whatWillTheyDo='what will the volunteers do'          //The description of the event aka the text under 'What will the volunteers do'
  whoCanTheyContact='who can the volunteers contact'    //The text under 'Who to contact'
  whereShouldTheyGo='where should the volunteers go'    //The text under 'Where'
  latitude=47.191567                                    //The latitude coordinates of the event used for the map - eg: 47.191567
  longitude=-52.837118                                  //The longitude coordinate of the event - eg: -52.837118
  />
*/}


class EventCard extends Component {

  state={
    iconColor: 'grey',
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  changeIconColor(){
    var changedColor;

    if (this.state.iconColor=='grey') {
       changedColor='red'
    }
    else {
      changedColor='grey'
    }
    this.setState({iconColor:changedColor});
  }

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
        VIEW MORE
      </Text>
    );
  }

  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{ color: COLOR.classicGreen }}>
        VIEW LESS
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ArrowIcon
            name="arrowleft"
            color={COLOR.classicGreen}
            size={20}
            style={{ margin: 12 }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
          <DetailedEventPage
            organizationName={this.props.organizationName}       //This is the name of the organization - eg: The P.E.E.R. Center Community Help
            eventTitle={this.props.eventTitle}                   //The title of the event - eg: The P.E.E.R. Center
            verifiedIcon={this.props.verifiedIcon}               //This is the icon to show if the organization is verified or not. Put 'check-circle' if it is verified, or '' if it is not
            imageUri={this.props.imageUri}                       //The image associated with the event - eg: the image of the shark
            eventLocation={this.props.eventLocation}             //The city/region of the event - eg: Essex
            dayOfEvent={this.props.dayOfEvent}                   //The day of the event - eg: 30 - This is the number that appears on the calendar above the image
            monthOfEvent={this.props.monthOfEvent}               //The month of the event eg: - JAN This is the 3 letter month that appears under the number above on the calendar above the image
            //All of the under are exclusively for the detailed event of the page and are shown when you press in the image, but you still need to specify them
            progressBarProgress={this.props.progressBarProgress} //The progress bar shows how much the event is full, it should be a number between 0 and 1 - eg: 0.75
            numberOfSpotsLeft={this.props.numberOfSpotsLeft}     //The number of sports left in the event - eg: 3/4 SPOTS LEFT
            extendedDate={this.props.extendedDate}               //This is the date of the event under the format Day, Month day th Year - eg: Thursday, January 30th 2020
            frameOfEvent={this.props.frameOfEvent}               //The time frame of the event - eg: 4:30 PM - 6:30 PM
            address={this.props.address}                         //The full address of the event - eg: 205 N Hamilton Rd, Essex SS11 1EP
            whatWillTheyDo={this.props.whatWillTheyDo}           //The description of the event aka the text under 'What will the volunteers do'
            whoCanTheyContact={this.props.whoCanTheyContact}     //The text under 'Who to contact'
            whereShouldTheyGo={this.props.whereShouldTheyGo}     //The text under 'Where'
            latitude={this.props.latitude}                       //The latitude coordinates of the event used for the map - eg: 47.191567
            longitude={this.props.longitude}                     //The longitude coordinate of the event - eg: -52.837118
          />
        </Modal>

        <View style={styles.header}>
          <Icon name="user" size={42} />
          <View style={styles.headerCenterView}>
            <View style={styles.nameAndIcon}>
              <Text style={styles.organizationName}>
                {this.props.organizationName}
              </Text>
              <IconBis
                name={this.props.verifiedIcon}
                color={COLOR.classicGreen}
                size={20}
              />
            </View>
            <Text style={styles.eventLocationText}>
              {this.props.eventLocation}
            </Text>
          </View>
          <IconThree
            name="ios-share"
            color={COLOR.classicGreen}
            size={30}
            style={styles.thirdHeaderIcon}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image
              source={this.props.imageUri}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>
          <View style={styles.calendarDate}>
            <Text style={styles.textInCalendar}>{this.props.dayOfEvent}</Text>
            <Text style={styles.textInCalendar}>{this.props.monthOfEvent}</Text>
          </View>
          <View style={styles.heartIconStyle}>
            <HeartIcon
              raised
              name="heart-circle-outline"
              color={this.state.iconColor}
              size={40}
              onPress={() => this.changeIconColor()}
            />
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.quickInfo}>
              <TimeAndSpots time={this.props.eventTime} />
              <TimeAndSpots spotsLeft={this.props.spotsLeft} />
            </View>
          </View>
          <View style={{ margin: 8 }}>
            <Text style={styles.organizationName}>{this.props.eventTitle}</Text>
            <View style={styles.moreInfo}>
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={this.renderViewMore}
                renderRevealedFooter={this.renderViewLess}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Text>
              </ReadMore>
            </View>
          </View>
        </View>
        <View style={styles.userStyle}>
          <AddUser name="add-user" color={'white'} size={20} />
        </View>
      </View>
    );
  }
}

export default EventCard;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    backgroundColor: COLOR.backgroundGrey2,
    padding: 8,
  },
  headerCenterView: {
    flex: 1,
  },
  nameAndIcon: {
    flexDirection: 'row',
    paddingTop: 3,
  },
  organizationName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 3,
  },
  eventLocationText: {
    color: 'grey',
  },
  thirdHeaderIcon: {
    margin: 8,
    justifyContent: 'center',
    alignItem: 'center',
  },
  backgroundImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
  calendarDate: {
    backgroundColor: COLOR.classicGreen,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    position: 'absolute',
    left: 5,
    top: 5,
    width: 50,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
  },
  textInCalendar: {
    color: 'white',
    fontSize: 20,
  },
  heartIconStyle: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 4,
    backgroundColor: 'transparent',
  },
  quickInfo: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  userStyle: {
    position: 'absolute',
    right: 5,
    top: 250,
    padding: 10,
    backgroundColor: COLOR.classicGreen,
    borderRadius: 42,
    borderColor: 'white',
    borderWidth: 4,
  },
  moreInfo: {
    marginTop: 8,
  },
});
