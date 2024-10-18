import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faHospital } from "@fortawesome/free-solid-svg-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const NUM_SLOTS_PER_ROW = 4;

const ViewAllSlots = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState("digital");
  const [selectedDay, setSelectedDay] = useState("Today");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDigitalSlots, setShowDigitalSlots] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDigitalSlots(false);
    setSelectedDay("Today");
  };

  const handleDaySelect = (day) => {
    if (selectedOption === "digital" || new Date(day).getDay() !== 0) {
      setSelectedDay(day);
      setShowDigitalSlots(false);
      setSelectedSlot(null);
    }
  };

  const handleSlotSelect = (index) => {
    setSelectedSlot(index);
  };
  const handleProceed = () => {
    if (selectedSlot === null) {
      // Show a popup or alert prompting the user to select a time slot
      alert("Please select a time slot");
    } else {
      navigation.navigate("CheckoutPage");
    }
  };
  const handleViewProfile = () => {
    // Navigate to the profile screen
    navigation.navigate("DoctorProfileScreen");
  };

  const generateSlots = () => {
    const slotStartTime = selectedOption === "digital" ? 6 : 12;
    const selectedDate =
      selectedDay === "Today"
        ? currentDate
        : new Date(
            currentDate.getFullYear(),

            
            currentDate.getMonth(),
            currentDate.getDate() + 1
          );
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTime = currentHour + currentMinute / 60;

    const slots = [];

    for (let i = 0; i < 14; i++) {
      const hour = slotStartTime + Math.floor(i / 2);
      const minute = i % 2 === 0 ? 0 : 30;
      const slotTime = hour + minute / 60;

      if (currentTime <= slotTime || selectedDay !== "Today") {
        const time = `${hour}:${minute < 10 ? "0" + minute : minute} ${
          hour < 12 ? "AM" : "PM"
        }`;
        slots.push(time);
      }
    }
    setSlots(slots);
  };

  const renderSlots = () => {
    return (
      <View style={styles.slotRow}>
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.slot, selectedSlot === index && styles.selectedSlot]}
            onPress={() => handleSlotSelect(index)}
          >
            <Text
              style={[
                styles.slotText,
                selectedSlot === index && styles.selectedSlotText,
              ]}
            >
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  useEffect(() => {
    generateSlots();
  }, [selectedOption, selectedDay]);

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 14; i++) {
      const nextDate = getNextDate(currentDate, i);
      const formattedDate = formatDate(nextDate);
      const dayOfWeek = nextDate.getDay();
      const isAvailable =
        i >= 7 ||
        selectedOption === "digital" ||
        (selectedOption === "clinic" && dayOfWeek !== 0);
      const isSunday = dayOfWeek === 0;
      days.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleDaySelect(formattedDate)}
          disabled={!isAvailable}
        >
          <View
            style={[
              styles.dayBlock,
              selectedDay === formattedDate && styles.selectedDayBlock,
              isSunday &&
                selectedOption === "digital" &&
                styles.availableDayBlock,
              isSunday &&
                selectedOption === "clinic" &&
                styles.disabledDayBlock,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                selectedDay === formattedDate && styles.selectedDayText,
                isSunday &&
                  selectedOption === "digital" &&
                  styles.availableDayText,
                isSunday &&
                  selectedOption === "clinic" &&
                  styles.disabledDayText,
              ]}
            >
              {formattedDate}
            </Text>
            {isAvailable ? (
              <Text style={styles.availableText}>Available</Text>
            ) : (
              <Text style={styles.notAvailableText}>Not Available</Text>
            )}
          </View>
        </TouchableOpacity>
      );
    }
    return days;
  };

  const getNextDate = (date, daysToAdd) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + daysToAdd);
    return nextDate;
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    if (formattedDate.toDateString() === currentDate.toDateString()) {
      return "Today";
    } else if (formattedDate.getDate() === currentDate.getDate() + 1) {
      const tomorrowDate = new Date(currentDate);
      tomorrowDate.setDate(currentDate.getDate() + 1);
      return `Tomorrow, ${tomorrowDate.getDate()} ${tomorrowDate.toLocaleString(
        "default",
        { month: "short" }
      )}`;
    } else {
      return `${formattedDate.getDate()} ${formattedDate.toLocaleString(
        "default",
        { month: "short" }
      )}`;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.backButton}>
            <Icon name="arrow-back" size={30} color="#05445E" />
          </TouchableOpacity>
          <Text style={styles.header}>SELECT TIME SLOT</Text>
        </View> */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.leftColumn}>
              <Image
                source={require("../../../assets/doctor Images/doctorimage2.webp")}
                style={styles.image}
              />
              <TouchableOpacity
                onPress={handleViewProfile}
                style={styles.viewProfileButton}
              >
                <Text style={styles.viewProfileText}>View Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.name}>Dr. Chandini shaik</Text>
              <Text style={styles.specialization}>
               Mental/Phyco doctor| 10 YRS Exp.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.firstCard}>
            <View style={styles.optionCard}>
              <TouchableOpacity
                onPress={() => handleOptionSelect("digital")}
                style={[
                  styles.optionButton,
                  selectedOption === "digital" && styles.selectedOption,
                ]}
              >
                <Icon
                  name="videocam"
                  size={24}
                  color={selectedOption === "digital" ? "#189AB4" : "#808080"}
                />
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === "digital" && styles.selectedText,
                  ]}
                >
                  Digital Consult
                </Text>
              </TouchableOpacity>
              <View style={styles.divider}></View>
              <TouchableOpacity
                onPress={() => handleOptionSelect("clinic")}
                style={[
                  styles.optionButton,
                  selectedOption === "clinic" && styles.selectedOption,
                ]}
              >
                {/* <FontAwesomeIcon
                  icon={faHospital}
                  size={24}
                  color={selectedOption === "clinic" ? "#189AB4" : "#808080"}
                /> */}
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === "clinic" && styles.selectedText,
                  ]}
                >
                  Clinic Visit
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.dayContainer}>{renderDays()}</View>
            </ScrollView>
          </View>
        </View>
        {selectedOption === "digital" && (
          <View style={[styles.cardContainer, styles.timeSlotContainer]}>
            <View style={styles.todayContainer}>
              <Text style={styles.todayText}>
                {selectedDay !== "Today" && selectedDay !== "Tomorrow"
                  ? selectedDay
                  : `${selectedDay}, ${currentDate.getDate()} ${currentDate.toLocaleString(
                      "default",
                      { month: "short" }
                    )}`}
              </Text>
            </View>
            <View style={styles.textsContainer}>
              <Text style={styles.timeRange}>6AM - 12PM</Text>
              <Text style={styles.slotsAvailable}>
                {slots.length} Slots Available
              </Text>
              <TouchableOpacity
                onPress={() => setShowDigitalSlots(!showDigitalSlots)}
                style={styles.viewAllButton}
              >
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.slotsContainer}>{renderSlots()}</View>
          </View>
        )}
        {selectedOption === "clinic" && (
          <View style={styles.cardContainer}>
            <View style={styles.todayContainer}>
              <Text style={styles.todayText}>
                {selectedDay !== "Today" && selectedDay !== "Tomorrow"
                  ? selectedDay
                  : `${selectedDay}, ${currentDate.getDate()} ${currentDate.toLocaleString(
                      "default",
                      { month: "short" }
                    )}`}
              </Text>
            </View>
            <View style={styles.textsContainer}>
              <Text style={styles.timeRange}>12PM - 6PM</Text>
              <Text style={styles.slotsAvailable}>
                {slots.length} Slots Available
              </Text>
              <TouchableOpacity
                onPress={() => setShowDigitalSlots(!showDigitalSlots)}
                style={styles.viewAllButton}
              >
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            {showDigitalSlots && (
              <View style={styles.slotsContainer}>{renderSlots()}</View>
            )}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity onPress={handleProceed}>
        <View style={styles.bottomContainer}>
          <Text style={styles.proceedText}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f9",
    marginTop: 40,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
    borderRadius: 10,
  },
  firstCard: {
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    marginBottom: 20,
  },
  leftColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightColumn: {
    flex: 2,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 20,
  },
  viewProfileButton: {
    marginBottom: 10,
  },
  viewProfileText: {
    color: "#05445E",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  specialization: {
    color: "#189AB4",
    fontSize: 12,
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 5,
    fontSize: 18,
    color: "#808080",
  },
  selectedOption: {
    fontWeight: "bold",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#05445E",
  },
  divider: {
    width: 1,
    backgroundColor: "#808080",
    marginHorizontal: 20,
  },
  dayContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dayBlock: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dayText: {
    fontSize: 14,
    color: "#999999",
    fontWeight: "bold",
  },
  selectedDayBlock: {
    backgroundColor: "#189AB4",
    borderWidth: 0,
  },
  selectedDayText: {
    color: "white",
  },
  disabledDayBlock: {
    backgroundColor: "#E0E0E0",
  },
  disabledDayText: {
    color: "#9E9E9E",
  },
  availableText: {
    fontSize: 12,
    color: "green",
    textAlign: "center",
  },
  notAvailableText: {
    fontSize: 12,
    color: "red",
    textAlign: "center",
  },
  todayContainer: {
    backgroundColor: "white",
  },
  todayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#05445E",
  },
  timeRange: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  slotsAvailable: {
    fontSize: 14,
    color: "#666666",
    // marginRight: 70,
  },
  viewAllButton: {
    backgroundColor: "#189AB4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  slotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  slotRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  slot: {
    width: width / NUM_SLOTS_PER_ROW - 10,
    margin: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedSlot: {
    backgroundColor: "#189AB4",
  },
  selectedSlotText: {
    color: "white",
  },
  bottomContainer: {
    backgroundColor: "#189AB4",
    paddingVertical: 15,
    alignItems: "center",
  },
  proceedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  textsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    marginBottom: 10,
  },
  fixedSlot: {
    width: "30%",
    height: 60,
  },
});

export default ViewAllSlots;
