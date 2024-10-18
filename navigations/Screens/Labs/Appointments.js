import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';


const StarRating = ({ rating }) => {
  const filledStars = '★'.repeat(Math.floor(rating));
  const halfStar = rating % 1 !== 0 ? '★' : '';
  const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
  return <Text style={{ color: 'goldenrod', fontSize: 20 }}>{filledStars}{halfStar}{emptyStars}</Text>;
};

const Appointments = () => {
  // State variables and functions
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isListVisible, setIsListVisible] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHours, setSelectedHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeBlock, setSelectedTimeBlock] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [showAllTimings, setShowAllTimings] = useState(false);
  const Timings = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
  ];



  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Fetch available time slots for the selected date from your data source
    // For example:
    const availableSlots = fetchAvailableTimeSlots(date); // Implement this function
    setAvailableTimeSlots(availableSlots);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    // Proceed with further actions (e.g., booking appointment)
  };


  const fetchAvailableTimeSlots = (date) => {
    // Implement logic to fetch available time slots for the selected date
    // Example: Return hardcoded time slots for demonstration purposes
    return ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'];
  };



  // Function to handle search input change
  const handleSearch = (text) => {
    setSearchText(text);
    setIsListVisible(text !== '');
    if (text === '') {
      setSelectedItem(null);
    }
  };

  const handleTimeBlockPress = (timeBlock) => {
    // If the clicked time block is already selected, deselect it
    if (selectedTimeBlock === timeBlock) {
      setSelectedTimeBlock(null);
    } else {
      // Otherwise, select the clicked time block
      setSelectedTimeBlock(timeBlock);
    }
  };

  const handleViewAllTimings = () => {
    setShowAllTimings(!showAllTimings);
  };

  const handleSearchPress = () => {
    setIsListVisible(true);
  };

  const handleDateClick = (date) => {
    console.log("Clicked Date:", date);
    setSelectedDate(date);
    console.log("Selected Date:", selectedDate);
  };


  const handleHoursPress = (day, hours, event) => {
    setSelectedDay(day);
    setSelectedHours(hours);
    setShowSchedule(!showSchedule);
  };

  const handleItemPress = (item) => {
    setSelectedItem(itemDetails[item]);
    setSearchText(item);
    setIsListVisible(false);
  };

  const itemList = [
    'Lakshmi clinical lab',
    'Amrutha clinic & lab',
    'Sri Sathya Diagnostic Center',
    'Sri Subha Medical center',
    'Teja Lab Dignostic Center',
  ];

  const itemDetails = {
    'Lakshmi clinical lab': {
      address: 'R984+FVJ, NH-5 Rd, Bridge Down, Krishna Nagar, \n Srinivasa Nagar, Madhurawada, Visakhapatnam, Andhra Pradesh 530041',
      contact: '077026 36266',
      areasServed: 'nearby areas',
      hours: '9am to 7pm',
      ratings: 4.5, // Example rating
      image: require('../../../assets/icons/ask.webp'),
    },
    'Amrutha clinic & lab': {
      address: 'R967+MQX, Mithilapuri Colony, Barath Nagar, Srinivasa Nagar, Madhurawada, Visakhapatnam, Andhra Pradesh 530041',
      contact: ' 099664 27913',
      areasServed: 'nearby areas',
      hours: '9am to 7pm',
      ratings: 4, // Example rating
      image: require('../../../assets/icons/ask.webp'),
    },
    'Sri Sathya Diagnostic Center': {
      address: 'Pothinamallayya Palem Rd, Madhurawada, Visakhapatnam, Andhra Pradesh 530041',
      contact: ' 099125 61422',
      areasServed: 'nearby areas',
      hours: '9am to 7pm ',
      ratings: 2.5, // Example rating
      image: require('../../../assets/icons/ask.webp'),
    },
    'Sri Subha Medical center': {
      address: ' 25-90/3,Ground Floor, Amrutha Arcade National Highway 16 Carshed Junction,Opposite Chaitanya Girls Residential College, Pothinamallayya Palem, Visakhapatnam, Andhra Pradesh 530041',
      contact: ' 073961 31000',
      areasServed: 'nearby areas',
      hours: '9am to 7pm ',
      ratings: 4.5, // Example rating
      image: require('../../../assets/icons/ask.webp'),
    },
    'Teja Lab Dignostic Center': {
      address: ' Main Road, Srinivasa Nagar, Madhurawada, Visakhapatam, Andhra Pradesh 530048',
      contact: ' 094403 32248',
      areasServed: 'nearby areas',
      hours: '7am to 9pm',
      ratings: 2, // Example rating
      image: require('../../../assets/icons/ask.webp'),
    },
  };
  const slots = {
    'Mon': ['9:00 AM - 7:00 PM'],
    'Tue': ['9:00 AM - 7:00 PM'],
    'Wed': ['9:00 AM - 7:00 PM'],
    'Thu': ['9:00 AM - 7:00 PM'],
    'Fri': ['9:00 AM - 7:00 PM'],
    'Sat': ['9:00 AM - 12:00 PM'],
    'Sun': ['Closed'],
  };

  // Get current day and month
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDay = today.toLocaleDateString('en-US', options);

  const handleContinuePress = () => {
    // Your logic for continuing with the appointment
    console.log('Continue pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.containerContainer}>
      <View style={styles.container}>
        <View style={styles.searchBlock}>
          <TextInput
            style={styles.input1}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
        {isListVisible && (
          <View style={styles.listContainer}>
            {itemList.map((item, index) => (
              <TouchableOpacity key={index} style={styles.listItem} onPress={() => handleItemPress(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {selectedItem && (
          <>
            <View style={styles.cardContainer1}>
              <Image source={selectedItem.image} style={styles.cardImage} />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{searchText}</Text>
                <Text style={styles.cardText}><StarRating rating={selectedItem.ratings} /></Text>
                <Text style={styles.cardText}>
                  <Text style={styles.subHeadingSpan}>Address:</Text> {selectedItem.address}
                </Text>
                <Text style={styles.cardText}><Text style={styles.subHeadingSpan}>Contact:</Text> {selectedItem.contact}</Text>
                <Text style={styles.cardText}><Text style={styles.subHeadingSpan}>Areas Served:</Text> {selectedItem.areasServed}</Text>
                <TouchableOpacity onPress={(event) => handleHoursPress(selectedDay, selectedHours, event)}>
                  <Text style={styles.cardText}>
                    <Text style={styles.subHeadingSpan}>Hours:</Text>
                    <Text>{selectedItem.hours}</Text>
                    <Text style={styles.openText}>Open</Text>
                  </Text>
                </TouchableOpacity>
                {showSchedule && (
                  <View style={styles.scheduleContainer}>
                    {Object.entries(slots).map(([day, hours]) => (
                      <View key={day} style={styles.scheduleItem}>
                        <Text>{day}: {hours.join(', ')}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
            <View style={styles.cardContainer}>
              {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[...Array(365)].map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() + index);
                  const isFutureDate = true; // Allow selection for all future dates
                  const isDateSelected = selectedDate && date.getTime() === selectedDate.getTime();
                  const isToday = date.toDateString() === new Date().toDateString();

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dateItem,
                        isDateSelected && styles.selectedDate,
                        !isFutureDate && styles.disabledDate,
                        isToday && styles.selectedToday
                      ]}
                      onPress={() => handleDateClick(date)} // Pass the date object to the function
                      disabled={!isFutureDate}
                    >
                      <Text style={[styles.weekday, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </Text>
                      <Text style={[styles.dateText, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.getDate()}
                      </Text>
                      <Text style={[styles.month, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView> */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[...Array(365)].map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() + index);
                  const isFutureDate = date > new Date(); // Check if date is in the future
                  const isDateSelected = selectedDate && date.getTime() === selectedDate.getTime();
                  const isToday = date.toDateString() === new Date().toDateString();

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dateItem,
                        isDateSelected && styles.selectedDate,
                        !isFutureDate && styles.disabledDate,
                        isToday && styles.selectedToday
                      ]}
                      onPress={() => handleDateClick(date)} // Pass the date object to the function
                      disabled={!isFutureDate}
                    >
                      {/* Date item content */}
                      <Text style={[styles.weekday, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </Text>
                      <Text style={[styles.dateText, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.getDate()}
                      </Text>
                      <Text style={[styles.month, isDateSelected && styles.selectedText, isToday && styles.selectedText]}>
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.cardContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>Remaining Timings</Text>
                  <View style={styles.timeBlocksContainer}>
                    {/* Render time blocks in 3 columns */}
                    {showAllTimings ? (
                      // Show all time blocks
                      Timings.map((time, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.timeBlock,
                            selectedTimeBlock === time && styles.selectedTimeBlock
                          ]}
                          onPress={() => handleTimeBlockPress(time)}
                        >
                          <Text style={styles.timeBlockTitle}>{time}</Text>
                        </TouchableOpacity>
                      ))
                    ) : (
                      // Show only one row of time blocks
                      Timings.slice(0, 6).map((time, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.timeBlock,
                            selectedTimeBlock === time && styles.selectedTimeBlock
                          ]}
                          onPress={() => handleTimeBlockPress(time)}
                        >
                          <Text style={styles.timeBlockTitle}>{time}</Text>
                        </TouchableOpacity>



                      ))
                    )}
                  </View>
                  <TouchableOpacity onPress={handleViewAllTimings}>
                    <Text style={{ color: '#189AB4', marginTop: 10 }}>
                      {showAllTimings ? 'View Less' : 'View All'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <TouchableOpacity
              style={[styles.bottomCardContainer, !selectedTimeBlock && styles.disabledButton]}
              onPress={handleContinuePress}
              disabled={!selectedTimeBlock} // Disable the button if no time slot is selected
            >
              <Text style={styles.bottomCardText}>Continue</Text>
            </TouchableOpacity>

          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: '#ccc', // Define the background color for disabled button
  },

  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#eaf7f4',
  },
  containerContainer: {
    height: "130%",
  },
  searchBlock: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '95%',
    marginTop: 25,
    marginLeft: 10,
  },
  input1: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  listContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardContainer1: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  cardDetails: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    marginBottom: 5,
    marginRight: 80,
  },
  subHeadingSpan: {
    fontWeight: 'bold',
  },
  openText: {
    fontWeight: 'bold',
    color: 'green',
  },
  scheduleContainer: {
    marginTop: 10,
  },
  scheduleItem: {
    marginBottom: 5,
  },
  cardContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
  },
  dateItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  // disabledDate: {
  //   opacity: 2,
  // },
  // selectedDate: {
  //   backgroundColor: '#189AB4', // Change background color for selected date
  // },

  selectedToday: {
    backgroundColor: '#189AB4', // Define the background color for today's date
  },

  // selectedText: {
  //   color: '#ffffff', // Change text color for selected date
  // },

  weekday: {
    fontSize: 14,
    marginBottom: 5,
    color: 'grey',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  month: {
    fontSize: 14,
    color: 'grey',
  },
  timeBlocksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure time blocks wrap to the next row
    justifyContent: 'space-between', // Space evenly between time blocks
  },
  timeBlock: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10, // Add margin to create space between time blocks
    width: '30%', // Set width to 30% for 3 columns
    alignItems: 'center',
  },
  selectedTimeBlock: {
    backgroundColor: '#189AB4',
  },
  timeBlockTitle: {
    fontSize: 16,
  },
  bottomCardContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#189AB4',
    paddingVertical: 15,
    alignItems: 'center',
  },
  bottomCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  selectedDate: {
    backgroundColor: '#189ab4',

  },
  selectedText: {
    color: '#fff',
  },
});

export default Appointments;