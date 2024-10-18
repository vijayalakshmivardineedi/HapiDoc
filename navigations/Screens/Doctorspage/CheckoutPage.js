import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CheckoutPage = () => {
  const navigation = useNavigation();
  const handleAddMember = () => {
    navigation.navigate("AddMember");
  };
   const handlebutton = () => {
     navigation.navigate("ConfirmPage");
   };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>CHECKOUT</Text>
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.marginContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.doctorName}>Dr. John Doe</Text>
              <Text style={styles.doctorSpecialization}>
                General Physician/ Internal Medicine 3+ years experience
              </Text>
              <View style={styles.rowContainer}>
                <Icon
                  name="local-hospital"
                  size={18}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.doctorLocation}>Hospital Visit</Text>
              </View>
              <View style={styles.rowContainer}>
                <Icon
                  name="event"
                  size={18}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.doctorLocation}>Today, 11:40 AM</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/doctor Images/doctorimage7.webp")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.locationHeading}>
            <Text style={styles.locationText}>LOCATION</Text>
          </View>
          <Text style={styles.subtitle}>Near, Madhurawada, Visakhapatnam.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>PATIENT DETAILS</Text>
          <View style={styles.divider} />
          <Text style={styles.cardSubTitle}>
            Prescription to be generated in the name of ?
          </Text>
          <View style={styles.patientBlock}>
            <Text style={[styles.patientInfoText, { color: "black" }]}>
              SAHASHRA 22, FEMALE
            </Text>
            <TouchableOpacity
              style={styles.addMemberButton}
              onPress={handleAddMember}
            >
              <Text style={styles.addMemberText}>Add member</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.card, { marginTop: 20 }]}>
          <Text style={styles.cardHeading1}>TOTAL CHARGES</Text>
          <View style={styles.divider} />
          <View style={styles.chargeRow}>
            <Text style={styles.chargeText}>Consultation Fee</Text>
            <View style={styles.payAtClinic}>
              <Text style={styles.payAtClinicText}>Pay at Clinic</Text>
            </View>
            <Icon name="attach-money" size={18} color="#189AB4" />
            <Text style={styles.rupeeText}>850</Text>
          </View>
          <View style={styles.chargeRow}>
            <Text style={styles.chargeText}>Booking Fee</Text>
            <View style={styles.payNow}>
              <Text style={styles.payNowText}>Pay now to confirm slot</Text>
            </View>
            <Icon name="attach-money" size={18} color="#189AB4" />
            <Text style={styles.rupeeText}>29</Text>
          </View>
          <View style={styles.marginLine} />
          <View style={styles.subTextRow}>
            <Icon name="done" size={18} color="black" />
            <Text style={styles.subText}>
              One-time Clinic Registration Charges might be applicable for new
              users.
            </Text>
          </View>
          <View style={styles.subTextRow}>
            <Icon name="done" size={18} color="black" />
            <Text style={styles.subText}>Booking fee is non-refundable.</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.termsConditions}>
            Terms & Conditions
            <Text style={styles.subHeadingSpan1}>Privacy Policy.</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.bookAppointmentButton}
        onPress={handlebutton}
      >
        <Text style={styles.bookAppointmentText}>Pay and Confirm (pay ₹29) </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7F9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
  },
  marginContainer: {
    marginVertical: 20,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  backArrow: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  termsConditions: {
    fontSize: 16,
    color: "#189AB4",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subHeadingSpan1: {
    fontSize: 12,
    fontWeight: "normal",
  },
  cardContainer: {
    flexDirection: "row",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  doctorSpecialization: {
    fontSize: 10,
  },
  doctorLocation: {
    fontSize: 14,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  imageContainer: {
    width: 70,
    height: 70,
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  locationHeading: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    marginLeft: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardHeading1: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#189AB4",
    padding: 10,
    color: "white",
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
  },
  cardSubTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  patientBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  patientInfo: {
    flex: 1,
  },
  patientInfoText: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addMemberButton: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  addMemberText: {
    color: "#189AB4",
    marginRight: 30,
  },
  chargeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  chargeText: {
    fontSize: 12,
  },
  payAtClinic: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 80,
  },
  payAtClinicText: {
    color: "#189AB4",
    marginRight: 5,
  },
  payNow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaf7f4",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 40,
  },
  payNowText: {
    color: "#189AB4",
    marginRight: 5,
  },
  marginLine: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginTop: 10,
    marginBottom: 20,
  },
  subTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  subText: {
    marginLeft: 5,
    color: "black",
    fontSize: 12,
  },
  rupeeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rupeeText: {
   
    color: "#189AB4",
    fontWeight: "bold",
  },
  bookAppointmentButton: {
    backgroundColor: "#189AB4",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bookAppointmentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default CheckoutPage;
