import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConfirmPage = () => {
      const navigation = useNavigation();
    const handleNavigate = () => {
      // Navigate to another screen
      navigation.navigate("Doctors");
    };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="check-circle" size={70} color="white" />
        <Text style={styles.heading}>Booking Confirmed</Text>
      </View>
      <Text style={styles.subtext}>
        Confirmation email and SMS have been sent to your registration details.
      </Text>
      <View style={styles.card}>
        <View style={styles.card2}>
          <View style={styles.card3}>
            <Image
              source={require("../../../assets/doctor Images/doctorimage2.webp")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.card2Heading}>Dr John Smith</Text>
              <Text style={styles.card2Subheading}>General Physician</Text>
              <View style={styles.iconRow}>
                <FontAwesome
                  name="envelope"
                  size={20}
                  color="#189ab4"
                  style={styles.icon}
                />
                <FontAwesome
                  name="phone"
                  size={20}
                  color="#189ab4"
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          <Text style={styles.about}>About Doctor</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod risus ac semper dapibus. Nullam accumsan auctor turpis, ac
            vestibulum erat fringilla non. Mauris auctor semper magna, ac
            commodo sapien facilisis nec.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#189ab4",
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: "40%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    marginLeft: 20,
    color: "white",
  },
  card2: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    width: "100%",
    height: "40%",
    top: -90,
  },
  card3: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  card2Heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  card2Subheading: {
    fontSize: 14,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  about: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#189ab4",
    padding: 10,
    borderRadius: 5,
 bottom:20,
    alignSelf: "flex-start",
    width:"100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign:"center",
    fontSize:18,
  },
});

export default ConfirmPage;
