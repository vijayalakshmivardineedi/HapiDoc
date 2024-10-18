import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Icon from "react-native-vector-icons/Ionicons";
// import {
//   faPencilAlt,
//   faArrowUp,
//   faArrowDown,
//   faFilter,
//   faEdit,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const doctorsData = [
  {
    id: 1,
    name: "Dr. S Lakshmi Sowjanya",
    specialization: "General Physician/ Internal Medicine ",
    experience: "15 years.MBBS, MD General Medicine",
    location: "Visakhapatnam",
    rating: 4.5,
    image: require("../../../assets/doctor Images/doctorimage2.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 2,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "9 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage3.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 5 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult in 2 Days",
  },
  {
    id: 3,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage10.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 4,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage4.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 5,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage6.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 6,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage7.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 7,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage8.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 8,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage9.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 9,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage10.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
  {
    id: 10,
    name: "Dr. S. Pranavendra Nath",
    specialization: "General Physician/ Internal Medicine",
    experience: "8 years.MBBS , MD (General medicine)",
    location: "Visakhapatnam",
    rating: 4.8,
    image: require("../../../assets/doctor Images/doctorimage7.webp"),
    leftColumnText: "Book Digital Consult",
    leftColumnSubText: "Consult in 2 min",
    rightColumnText: "Book Clinic Visit",
    rightColumnSubText: "Consult Tomorrow",
  },
];

const DoctorList = () => {
  const navigation = useNavigation();
  const [sortedBy, setSortedBy] = useState("rating");
  const [filteredSpecialization, setFilteredSpecialization] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [consultModalVisible, setConsultModalVisible] = useState(false);
  const [selectedModalOption, setSelectedModalOption] = useState(null);

  const filterDoctors = (specialization) => {
    setFilteredSpecialization(specialization);
  };

  const toggleModal = (type) => {
    if (type === "consult") {
      setConsultModalVisible(!consultModalVisible);
    } else {
      setModalVisible(!modalVisible);
    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  const handleContainerPress = () => {
    navigation.navigate("DoctorProfileScreen");
  };

  const renderDoctorCard = ({ item, index }) => (
    <TouchableOpacity style={styles.doctorCard} onPress={handleContainerPress}>
      <View style={styles.doctorRow}>
        <Image source={item.image} style={styles.doctorImage} />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialization}>{item.specialization}</Text>
          <Text style={styles.doctorExperience}>{item.experience}</Text>
          <Text style={styles.doctorLocation}>{item.location}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: </Text>
            <Text style={styles.doctorRating}>
              {generateGoldStars(item.rating)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.additionalInfoRow}>
        {(index === 3 || index === 7) && (
          <TouchableOpacity
            style={[
              styles.additionalInfoColumn,
              styles.centeredColumn,
              {
                backgroundColor: "#189AB4",
                width: "90%",
              },
            ]}
          >
            <Text style={[styles.additionalInfoText, { color: "#FFFFFF" }]}>
              {item.leftColumnText || item.rightColumnText}
            </Text>
            <Text style={[styles.additionalInfoSubText, { color: "#FFFFFF" }]}>
              {item.leftColumnSubText || item.rightColumnSubText}
            </Text>
          </TouchableOpacity>
        )}
        {!(index === 3 || index === 7) && item.leftColumnText && (
          <TouchableOpacity
            style={[
              styles.additionalInfoColumn,
              { backgroundColor: "#189AB4" },
            ]}
            onPress={() => navigation.navigate("ViewAllSlots")}
          >
            <Text style={styles.additionalInfoText}>{item.leftColumnText}</Text>
            <Text style={styles.additionalInfoSubText}>
              {item.leftColumnSubText}
            </Text>
          </TouchableOpacity>
        )}
        {!(index === 3 || index === 7) && item.rightColumnText && (
          <TouchableOpacity
            style={[
              styles.additionalInfoColumn,
              { borderColor: "#189AB4", borderWidth: 1 },
            ]}
            onPress={() => navigation.navigate("ViewAllSlots")}
          >
            <Text style={[styles.additionalInfoText, { color: "#189AB4" }]}>
              {item.rightColumnText}
            </Text>
            <Text style={[styles.additionalInfoSubText, { color: "#189AB4" }]}>
              {item.rightColumnSubText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  const generateGoldStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Text key={i} style={{ color: "#FFD700", fontSize: 20 }}>
          ★
        </Text>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Text key={i + fullStars} style={{ color: "#FFD700", fontSize: 20 }}>
          ☆
        </Text>
      );
    }

    return <View style={{ flexDirection: "row" }}>{stars}</View>; // Return the array of stars
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Doctor's List</Text>
      </View> */}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.button, styles.sortFilterButton]}
        >
          {/* <FontAwesomeIcon icon={faArrowUp} style={styles.arrowIcon} />
          <FontAwesomeIcon icon={faArrowDown} style={styles.arrowIcon} /> */}
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Filterpage"); 
            filterDoctors(null); 
          }}
          style={[styles.button, styles.sortFilterButton1]}
        >
          {/* <FontAwesomeIcon icon={faFilter} style={styles.arrowIcon} /> */}
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => toggleModal("consult")}
          style={[styles.button, styles.consultButton]}
        >
          <View style={styles.consultContent}>
            <Text style={styles.buttonText1}>Doctor Consult</Text>
            {/* <FontAwesomeIcon
              icon={faPencilAlt}
              style={[styles.editIcon, { color: "#189AB4", marginLeft: 5 }]}
            /> */}
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={doctorsData}
        renderItem={renderDoctorCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.sortByText}>Sort By</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                {/* <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.sortOptions}>
              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("relevant");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton selected={selectedModalOption === "relevant"} />
                  <Text style={styles.optionText}>Relevant</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("availability");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton
                    selected={selectedModalOption === "availability"}
                  />
                  <Text style={styles.optionText}>Availability</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("nearby");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton selected={selectedModalOption === "nearby"} />
                  <Text style={styles.optionText}>Nearby</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("priceLowToHigh");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton
                    selected={selectedModalOption === "priceLowToHigh"}
                  />
                  <Text style={styles.optionText}>Price Low to High</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("priceHighToLow");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton
                    selected={selectedModalOption === "priceHighToLow"}
                  />
                  <Text style={styles.optionText}>Price High to Low</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.optionTouchable}
                  onPress={() => {
                    setSelectedModalOption("yearsOfExperience");
                    setModalVisible(false);
                  }}
                >
                  <RadioButton
                    selected={selectedModalOption === "yearsOfExperience"}
                  />
                  <Text style={styles.optionText}>Years of Experience</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={consultModalVisible}
        onRequestClose={() => setConsultModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Consult Mode</Text>
              <TouchableOpacity onPress={() => setConsultModalVisible(false)}>
                {/* <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.consultOptions}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  setConsultModalVisible(false);
                }}
              >
                <RadioButton />
                <Text style={styles.optionText}>Digital Consult</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  setConsultModalVisible(false);
                }}
              >
                <RadioButton />
                <Text style={styles.optionText}>Hospital Visit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const RadioButton = ({ selected }) => {
  return <View style={[styles.radio, selected && styles.radioSelected]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7F4",
    padding: 5,
   
  },
  optionTouchable: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  arrowIcon: {
    fontSize: 16,
    color: "#189ab4",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    flexDirection: "row",
  },
  sortFilterButton: {
    justifyContent: "space-between",
    flex: 0.3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderColor: "#189AB4",
    backgroundColor: "#f9f9f9",
  },
  sortFilterButton1: {
    justifyContent: "space-between",
    flex: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 20,
    borderColor: "#189AB4",
    backgroundColor: "#f9f9f9",
  },
  consultButton: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 20,
    marginHorizontal: 5,
    marginLeft: 20,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
  },
  consultContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },

  buttonText1: {
    color: "#189AB4",
    fontSize: 16,
    marginLeft: 5,
  },

  editIcon: {
    color: "#189AB4",
  },
  buttonIcon: {
    color: "#189AB4",
    marginRight: 5,
  },
  doctorCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    width: "100%",
    elevation: 3,
  },
  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doctorSpecialization: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  doctorExperience: {
    fontSize: 12,
    marginBottom: 5,
    color: "#189AB4",
  },
  subHeadingSpan: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  doctorLanguage: {
    fontSize: 16,
    marginBottom: 5,
  },
  doctorLocation: {
    fontSize: 12,
    marginBottom: 5,
  },
  doctorRating: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  additionalInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  additionalInfoColumn: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  additionalInfoText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  additionalInfoSubText: {
    fontSize: 10,
    color: "white",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sortByText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeIcon: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
  },
  sortOptions: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  option: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  consultOptions: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#189AB4",
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: "#189AB4",
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredColumn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});

export default DoctorList;
