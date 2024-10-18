import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const navigation = useNavigation();
  const handleDropQuery = () => {
    navigation.navigate("Checkout"); // Replace "QueryScreen" with the name of your screen component
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Main content */}
        <View style={styles.cardContainer}>
          <View style={styles.anotherContainer}>
            <View style={styles.rightContent}>
              <Text style={styles.leftText}>Family doctor plans</Text>
              <Image
                source={require("../../../assets/doctor Images/family-2073604_1280-1200x675.webp")}
                style={styles.image}
              />
            </View>
            <View style={styles.Dottedline}></View>
            {/* Right side text */}
            <View style={styles.rightTextContainer}>
              <Text style={styles.rightText}>
                Unlimited Consultations for Entire Family
              </Text>
              <View style={styles.SubcardContainer}>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.totalChargeText}>Total Charge</Text>

        <View style={styles.divider}></View>

        <View style={styles.planContainer}>
          <Text style={styles.planText}>
            Family Doctor Plan - 12 Months ₹2999
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText1}>₹6999</Text>
            <Text style={styles.priceText}>₹2999</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.priceContainer2}>
            <Text style={styles.leftSideText}>To Pay</Text>
            <Text style={styles.rightSideText}>₹2999</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>How Does It Work</Text>
          <Image
            source={require("../../../assets/doctor Images/nutritionist.png")}
            style={styles.rowImage}
          />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/user.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            Select the patient's profile for consultation and complete your
            booking.
          </Text>
        </View>
        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/video-camera.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            An HapiDoc doctor will be assigned to you in the next 15 minutes.
          </Text>
        </View>
        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/user.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            View your booked appointment in the 'My Appointment' section on your
            app.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.procedButton} onPress={handleDropQuery}>
        <Text style={styles.procedButtonText}>PROCEED TO PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f4",
    padding: 20,
    paddingHorizontal: 5,
  },
  cardContainer: {
    backgroundColor: "#189ab4",
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 345,
    marginTop: 50,
  },
  anotherContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 1,
  },
  leftText: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  rightTextContainer: {
    flex: 1,
    marginTop: 10,
  },
  rightText: {
    color: "#000",
    fontSize: 14,
  },
  subText: {
    color: "#000",
    fontSize: 10,
  },
  Dottedline: {
    height: 1,
    borderRightWidth: 1,
    borderRightColor: "#000",
    height: 100,
    borderStyle: "dashed",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  SubcardContainer: {
    backgroundColor: "#eaf7f4",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 120,
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 70,
    marginRight: 10,
    marginTop: 10,
  },
  totalChargeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
  planContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "93%",
    marginLeft: 10,
  },
  planText: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    marginLeft: "70%",
    marginBottom: 10,
  },
  priceContainer2: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  priceText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  priceText1: {
    textDecorationLine: "line-through",
  },
  rightSideText: {
    textAlign: "right",
    color: "#000",
    fontSize: 14,
  },
  leftSideText: {
    color: "#000",
    fontSize: 14,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 80,
  },
  rowImage: {
    width: 40,
    height: 40,
    marginRight: 100,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },

  rowContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  rowImage2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rowText2: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  procedButton: {
    backgroundColor: "#05445e",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
    width: 345,
    marginLeft: 15,
  },
  procedButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Checkout;
