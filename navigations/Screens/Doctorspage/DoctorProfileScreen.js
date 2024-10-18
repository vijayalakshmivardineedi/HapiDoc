import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DoctorProfileScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Today"); // Track selected day
  const [selectedTime, setSelectedTime] = useState(null); // Track selected time slot

  const [modalVisible, setModalVisible] = useState(false);
  const [showAllAboutDoctor, setShowAllAboutDoctor] = useState(false);
  const [showClinicVisit, setShowClinicVisit] = useState(false);
  const [showDigitalConsult, setShowDigitalConsult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === "clinicVisit") {
      setShowClinicVisit(true);
      setShowDigitalConsult(false);
    } else if (option === "digitalConsult") {
      setShowDigitalConsult(true);
      setShowClinicVisit(false);
    }
  };

 

  const handleBack = () => {
    setModalVisible(false); // Close the modal
    // Additional action you may want to perform upon pressing "Back"
  };

  const toggleAboutDoctorText = () => {
    setShowAllAboutDoctor(!showAllAboutDoctor);
  };
   const [clinicVisitDetails, setClinicVisitDetails] = useState({
     title: "Hospital Visit",
     price: "599",
   });
   const [digitalConsultDetails, setDigitalConsultDetails] = useState({
     title: "Digital Consult",
     price: "800",
   });

   const handleOptionSelect2 = (option) => {
     setSelectedOption(option);
   };

   const handleDaySelect = (day) => {
     setSelectedDay(day);
     setSelectedTime(null); // Reset selected time slot when day changes
   };

   const handleTimeSelect = (time) => {
     setSelectedTime(time);
      navigation.navigate("CheckoutPage");
   };
   
   const handleNavigate = () => {
     // Navigate to another screen
     navigation.navigate("ViewAllSlots");
   };

   const generateTimeSlots = () => {
     // Generate time slots based on the selected day
     // You can implement your own logic here
     // For demonstration, returning a fixed set of time slots
     return [
       "11:10 AM",
       "11:20 AM",
       "11:30 AM",
       "11:40 AM",
       "11:50 AM",
       "12:00 PM",
       "12:10 PM",
       "12:20 PM",
       "12:30 PM",
       "12:40 PM",
     ];
   };
   

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
       

        <View style={styles.card}>
          <Image
            source={require("../../../assets/doctor Images/Dermatology.jpg")}
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.cardTitle}>Dr. S. Pranavendra Nath</Text>
            <Text style={styles.cardSubText}>
              General Physician/ Internal Medicine
            </Text>
            <Text style={styles.cardSubText}>
              9 years. MBBS, MD (General medicine)
            </Text>
            <View style={styles.locationContainer}>
              <Ionicons
                name="location-outline"
                size={16}
                color="black"
                style={styles.locationIcon}
              />
              <Text style={styles.cardSubText1}>Visakhapatnam</Text>
            </View>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionBlock}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "clinicVisit" && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect2("clinicVisit")}
            >
              <View style={styles.row}>
                <FontAwesome5
                  name="clinic-medical"
                  size={24}
                  color={selectedOption === "clinicVisit" ? "white" : "#189AB4"}
                />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOption === "clinicVisit" &&
                        styles.selectedOptionText,
                    ]}
                  >
                    Clinic Visit
                  </Text>
                  <Text
                    style={[
                      styles.subText,
                      selectedOption === "clinicVisit" &&
                        styles.selectedOptionText,
                    ]}
                  >
                    Consult today
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === "digitalConsult" && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect("digitalConsult")}
            >
              <View style={styles.row}>
                <Ionicons
                  name="videocam"
                  size={24}
                  color={
                    selectedOption === "digitalConsult" ? "white" : "#189AB4"
                  }
                />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOption === "digitalConsult" &&
                        styles.selectedOptionText,
                    ]}
                  >
                    Digital Consult
                  </Text>
                  <Text
                    style={[
                      styles.subText,
                      selectedOption === "digitalConsult" &&
                        styles.selectedOptionText,
                    ]}
                  >
                    Available after a month
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Render Clinic Visit Card if selectedOption is 'clinicVisit' */}
        {selectedOption === "clinicVisit" && (
          <View style={styles.treatmentContainer1}>
            <View style={[styles.row, styles.priceContainer]}>
              <Text style={styles.aboutDoctorText}>
                {clinicVisitDetails.title}
              </Text>
              <View style={styles.row}>
                <MaterialIcons name="attach-money" size={20} color="black" />
                <Text style={styles.price}>{clinicVisitDetails.price}</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.dayContainer}>
                <TouchableOpacity onPress={() => handleDaySelect("Today")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "Today" && styles.selectedDayText,
                    ]}
                  >
                    Today
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("Tomorrow")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "Tomorrow" && styles.selectedDayText,
                    ]}
                  >
                    Tomorrow
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("05 Apr")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "05 Apr" && styles.selectedDayText,
                    ]}
                  >
                    05 Apr
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("06 Apr")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "06 Apr" && styles.selectedDayText,
                    ]}
                  >
                    06 Apr
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.divider}></View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.timeContainer}>
                {generateTimeSlots().map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeSlot,
                      selectedTime === time && styles.selectedTimeSlot,
                    ]}
                    onPress={() => handleTimeSelect(time)}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        selectedTime === time && styles.selectedTimeText,
                      ]}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={handleNavigate}
            >
              <Text style={styles.viewAllText}>View All Slots</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* Render Digital Consult Card if selectedOption is 'digitalConsult' */}
        {selectedOption === "digitalConsult" && (
          <View style={styles.treatmentContainer1}>
            <View style={[styles.row, styles.priceContainer]}>
              <Text style={styles.aboutDoctorText}>
                {digitalConsultDetails.title}
              </Text>
              <View style={styles.row}>
                <MaterialIcons name="attach-money" size={20} color="black" />
                <Text style={styles.price}>{digitalConsultDetails.price}</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.dayContainer}>
                <TouchableOpacity onPress={() => handleDaySelect("Today")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "Today" && styles.selectedDayText,
                    ]}
                  >
                    Today
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("Tomorrow")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "Tomorrow" && styles.selectedDayText,
                    ]}
                  >
                    Tomorrow
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("05 Apr")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "05 Apr" && styles.selectedDayText,
                    ]}
                  >
                    05 Apr
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDaySelect("06 Apr")}>
                  <Text
                    style={[
                      styles.dayText,
                      selectedDay === "06 Apr" && styles.selectedDayText,
                    ]}
                  >
                    06 Apr
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.divider}></View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.timeContainer}>
                {generateTimeSlots().map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeSlot,
                      selectedTime === time && styles.selectedTimeSlot,
                    ]}
                    onPress={() => handleTimeSelect(time)}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        selectedTime === time && styles.selectedTimeText,
                      ]}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => {
                /* Handle onPress event */
              }}
            >
              <Text style={styles.viewAllText}>View All Slots</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* About Doctor */}
        <View style={styles.aboutDoctorContainer}>
          <Text style={styles.aboutDoctorText}>About Doctor</Text>

          <Text style={styles.additionalText}>
            Dr. S. Pranavendra Nath, an esteemed General Physician/Internal
            Medicine specialist with three years of experience, practices at
            Surya's Clinic in Visakhapatnam. Dr. S. Pranavendra Nath holds an
            MBBS and MD in General Medicine. He offers a comprehensive range of
            services
          </Text>

          {!showAllAboutDoctor && (
            <TouchableOpacity
              onPress={toggleAboutDoctorText}
              style={styles.readMoreContainer}
            >
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          )}

          {showAllAboutDoctor && (
            <>
              <Text style={styles.additionalText}>
                addressing various General Physician/Internal Medicine
                conditions, including but not limited to Acute Pancreatitis,
                Abdominal Pain Treatment, Alcohol Addiction, Anxiety Disorders,
                Chronic Pain, Diabetes Management, Heart Conditions, Infectious
                Diseases, Nutritional Counseling, Obesity Management,
                Respiratory Infections, Thyroid Disorders, Travel Vaccinations,
                and Viral Infections, among others. If you're seeking General
                Physician/ Internal Medicine in visakhapatnam amalapuram ,
                visakhapatnam gajuwaka , visakhapatnam murudeshwar ,
                visakhapatnam sriharipuram , visakhapatnam venkoji-palam ,
                visakhapatnam vizianagaram , visakhapatnam gajuwaka ,
                visakhapatnam guntur , visakhapatnam murudeshwar , visakhapatnam
                sriharipuram , visakhapatnam vizianagaram Dr. S. Pranavendra
                Nath is the right choice for expert care and treatment of your
                General Physician/ Internal Medicine needs. Book an appointment
                today and experience top-notch medical care.
              </Text>
              <TouchableOpacity onPress={toggleAboutDoctorText}>
                <Text style={styles.readLess}>Read Less</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Treatment and Procedures */}
        <View style={styles.treatmentContainer}>
          <View style={styles.titleContainer}>
            <FontAwesome5
              name="heartbeat"
              size={24}
              color="red"
              style={styles.icon}
            />
            <Text style={styles.treatmentTitle}>Treatment and Procedures</Text>
          </View>
          <Text style={styles.subText2}>
            Explore various treatments and procedures provided by the doctor
          </Text>
        </View>

        {/* Specialized Services */}
        <View style={styles.subSubTextContainer}>
          <FontAwesome5
            name="check-circle"
            size={12}
            color="green"
            style={styles.tickIcon}
          />
          <Text style={styles.subSubText}>Specialized Services</Text>
        </View>

        {/* Horizontal ScrollView for 5 boxes */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.contentContainerStyle}
        >
          <View style={styles.rowContainer}>
            {/* Column Blocks */}
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Acute Pancreatitis
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Brucellosis
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Chickenpox
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Chikungunya
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Dengue
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Familial Mediterranean fever
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Hay fever
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                irritation
              </Text>
            </View>
            <View style={[styles.columnBox, styles.columnBoxWithBorder]}>
              <Text style={[styles.columnText, styles.columnTextWithColor]}>
                Jaundice
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
          >
            <View style={styles.modalContent}>
              {/* Doctor Card */}
              <View style={styles.card}>
                <Image
                  source={require("../../../assets/doctor Images/doctorimage2.webp")}
                  style={styles.image}
                />

                <View style={styles.content}>
                  <Text style={styles.cardTitle}>Dr. S. Pranavendra Nath</Text>
                  <Text style={styles.cardSubText}>
                    General Physician/ Internal Medicine
                  </Text>
                  <Text style={styles.cardSubText}>
                    9 years. MBBS, MD (General medicine)
                  </Text>
                  <View style={styles.locationContainer}>
                    <Ionicons
                      name="location-outline"
                      size={16}
                      color="black"
                      style={styles.locationIcon}
                    />
                    <Text style={styles.cardSubText1}>Visakhapatnam</Text>
                  </View>
                </View>
              </View>

              {/* Additional Text */}
              <Text style={styles.additionalText}>
                Dr. S. Pranavendra Nath, an esteemed General Physician/Internal
                Medicine specialist with three years of experience, practices at
                Surya's Clinic in Visakhapatnam. Dr. S. Pranavendra Nath holds
                an MBBS and MD in General Medicine.
              </Text>

              {/* Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.backButtonModal}
                  onPress={handleBack}
                >
                  <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareProfileButton}>
                  <Text style={styles.shareProfileText}>Share Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <View style={styles.treatmentContainer}>
          <View style={styles.titleContainer}>
            <MaterialIcons
              name="emoji-events"
              size={24}
              color="black"
              style={styles.crownIcon}
            />
            <Text style={styles.treatmentTitle}>Membership</Text>
          </View>
          <Text style={styles.subText2}>- Medical Council of India</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7F9",
    marginTop: 30,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
  },
  cardSubText1: {
    fontSize: 12,
    marginTop: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 4,
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  optionBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  optionButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    width: "48%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EAF7F9",
  },
  selectedOption: {
    backgroundColor: "#189AB4",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  optionText: {
    color: "#189AB4",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedOptionText: {
    color: "white",
  },
  subText: {
    color: "#189AB4",
    fontSize: 12,
  },

  treatmentContainer1: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    flexDirection: "column",
  },
  aboutDoctorText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align items with space between
    marginBottom: 10, // Add margin to separate from other elements
  },
  price: {
    fontWeight: "bold",
    marginLeft: 5, // Adjusted marginLeft for spacing
  },
  dayContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dayText: {
    fontSize: 18,
    color: "#999999",
    marginRight: 40,
    fontWeight: "bold",
  },
  today: {
    color: "black",
  },
  selectedDayText: {
    color: "black", // Change selected day text color to black
    fontWeight: "bold", // Make selected day text bold
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginTop: 10,
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  timeText: {
    color: "#189AB4",
    fontWeight: "bold",
  },

  timeSlot: {
    paddingHorizontal: 12,
    paddingVertical: 8,

    borderWidth: 1,
    borderColor: "#189AB4",
    marginRight: 10,
  },
  selectedTimeSlot: {
    backgroundColor: "#189AB4",
  },
  selectedTimeText: {
    color: "white",
    fontWeight: "bold",
  },
  viewAllButton: {
    alignItems: "center",
    marginTop: 10,
  },
  viewAllText: {
    color: "#189AB4",
    fontSize: 16,
    fontWeight: "bold",
  },
  aboutDoctorContainer: {
    paddingHorizontal: 16,
  },
  aboutDoctorText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  additionalText: {
    color: "grey",
  },
  readMore: {
    color: "#189AB4",
    fontWeight: "bold",
  },
  readLess: {
    color: "#189AB4",
    fontWeight: "bold",
    textAlign: "right",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButtonModal: {
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 5,
    padding: 10,
    width: "45%",
    alignItems: "center",
  },
  backButtonText: {
    color: "#189AB4",
    fontWeight: "bold",
  },
  shareProfileButton: {
    backgroundColor: "#189AB4",
    borderRadius: 5,
    padding: 10,
    width: "45%",
    alignItems: "center",
  },
  shareProfileText: {
    color: "white",
    fontWeight: "bold",
  },

  bottomOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#D4F1F4",
    bottom: 0,

    paddingHorizontal: 8,
  },
  bottomOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopStartRadius: 20,
    borderStartStartRadius: 20,
    backgroundColor: "yellow",
  },
  bottomOptionRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopRightRadius: 20,
    borderStartEndRadius: 20,
    backgroundColor: "#189AB4",
    // marginLeft: 5,
  },
  bottomOptionText: {
    marginLeft: 10,
    color: "#189AB4",
    fontWeight: "bold",
    fontSize: 13,
  },
  bottomOptionTextWhite: {
    color: "white",
   
  },
  subText1: {
    color: "white",
    fontSize: 10,
  },
  treatmentContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  treatmentContainer1: {
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    marginRight: 8,
  },
  treatmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    color: "grey",
    fontSize: 12,
  },
  subText2: {
    color: "grey",
    fontSize: 12,
    marginTop: 10,
  },
  subSubTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  tickIcon: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 2,

    marginLeft: 20,
  },
  subSubText: {
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
    marginLeft: 5,
  },
  columnContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  columnBox: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  columnText: {
    fontWeight: "bold",
  },
  contentContainerStyle: {
    paddingVertical: 0,
    flexGrow: 0,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
  },
  columnBox: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  columnBoxWithBorder: {
    borderWidth: 1,
    borderColor: "#189AB4",
  },
  columnText: {
    color: "#fff",
  },
  columnTextWithColor: {
    color: "#189AB4",
  },
  crownIcon: {
    marginRight: 8,
  },
});

export default DoctorProfileScreen;
