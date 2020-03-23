import * as React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';

// import ActivityCard from './ActivityCard.js';
import ActivityCard from "./DetailedEventPage";
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import VerticalList from './VerticalEventList.js';

const screenWidth = Math.round(Dimensions.get('window').width * 0.95);

export default class HorizontalEventsList extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed');
          }}>
          <ArrowIcon
            name="arrowleft"
            color="#01b0b0"
            size={20}
            style={{ margin: 12 }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
          <VerticalList DATA={this.props.DATA} />
        </Modal>

        <View style={styles.topFilter}>
          <Text style={styles.category}>{this.props.categoryTitle}</Text>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.seeMore}>{this.props.expandList}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.props.DATA}
          renderItem={({ item }) => (
            <Event
              organizationName={item.organizationName}
              verifiedIcon={item.verifiedIcon}
              imageUri={item.imageUri}
              eventLocation={item.eventLocation}
              dayOfEvent={item.dayOfEvent}
              monthOfEvent={item.monthOfEvent}
              eventTime={item.eventTime}
              spotsLeft={item.spotsLeft}
              eventTitle={item.eventTitle}
              progressBarProgress={item.progressBarProgress}
              numberOfSpotsLeft={item.numberOfSpotsLeft}
              extendedDate={item.extendedDate}
              frameOfEvent={item.frameOfEvent}
              address={item.address}
              whatWillTheyDo={item.whatWillTheyDo}
              whoCanTheyContact={item.whoCanTheyContact}
              whereShouldTheyGo={item.whereShouldTheyGo}
              latitude={item.latitude}
              longitude={item.longitude}
            />
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

function Event({
  organizationName,
  verifiedIcon,
  imageUri,
  eventLocation,
  dayOfEvent,
  monthOfEvent,
  eventTime,
  spotsLeft,
  eventTitle,
  progressBarProgress,
  numberOfSpotsLeft,
  extendedDate,
  frameOfEvent,
  address,
  whatWillTheyDo,
  whoCanTheyContact,
  whereShouldTheyGo,
  latitude,
  longitude,
}) {
  return (
    <View style={styles.card}>
      <ActivityCard
        organizationName={organizationName}
        verifiedIcon={verifiedIcon}
        imageUri={imageUri}
        eventLocation={eventLocation}
        dayOfEvent={dayOfEvent}
        monthOfEvent={monthOfEvent}
        eventTime={eventTime}
        spotsLeft={spotsLeft}
        eventTitle={eventTitle}
        progressBarProgress={progressBarProgress}
        numberOfSpotsLeft={numberOfSpotsLeft}
        extendedDate={extendedDate}
        frameOfEvent={frameOfEvent}
        address={address}
        whatWillTheyDo={whatWillTheyDo}
        whoCanTheyContact={whoCanTheyContact}
        whereShouldTheyGo={whereShouldTheyGo}
        latitude={latitude}
        longitude={longitude}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  topFilter: {
    flexDirection: 'row',
    marginBottom: 8,
    marginHorizontal: 12,
  },
  category: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
  seeMore: {
    color: '#01b0b0',
  },
  card: {
    width: screenWidth,
    paddingHorizontal: 8,
    marginVertical: 8,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
  },
});
