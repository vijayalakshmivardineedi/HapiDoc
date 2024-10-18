import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
  Alert,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";

const DentalPage = () => {
  const navigation = useNavigation();

  const [checked1, setChecked1] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress1 = () => {
    setChecked1(!checked1);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEstimateNow = () => {
    if (!fullName || !phoneNumber || !city) {
      Alert.alert("Please fill in all required fields.");
      return;
    }
    setModalVisible(true);
    // Proceed with estimating cost
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.headingText}>
          Not Sure Which Dentist to Consult?
        </Text>
        <Text style={styles.subHeadingText}>We Are Here to Help!</Text>
        <Text style={styles.descriptionText}>
          Safest Dental Care By Expert Dentists.
        </Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Fill the form*</Text>
          <Text style={styles.subTextLabel}>Get an instant call back</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name*"
            placeholderTextColor="#333"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number*"
            placeholderTextColor="#333"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="City*"
            placeholderTextColor="#333"
            value={city}
            onChangeText={setCity}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked1 ? "checked" : "unchecked"}
              onPress={handlePress1}
              color="#189AB4"
              uncheckedColor="#189AB4"
            />
            <Text style={styles.label}>*T&C Apply</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleEstimateNow}>
            <Text style={styles.buttonText}>GET COST ESTIMATE NOW</Text>
          </TouchableOpacity>
          <Image
            source={require("../../../assets/doctor Images/female.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={[styles.bottomItem]}>
            {/* dentist */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.bottomImage}
            />
            <Text style={styles.bottomText}>
              Select the best doctor for you
            </Text>
          </View>
          <View style={[styles.bottomItem]}>
            {/* //save-money */}
            <Image
              source={require("../../../assets/doctor Images/salary.png")}
              style={styles.bottomImage}
            />
            <Text style={styles.bottomText}>
              Know the Treatment Cost Instantly
            </Text>
          </View>
          <View style={[styles.bottomItem]}>
            {/* //guarantee */}
            <Image
              source={require("../../../assets/doctor Images/shield.png")}
              style={styles.bottomImage}
            />
            <Text style={styles.bottomText}>Doctors With Credibility</Text>
          </View>
        </View>
        <View style={styles.additionalContainer}>
          <Text style={styles.additionalHeading}>
            3 Simple Steps For Safest Treatment
          </Text>
          <View style={styles.additionalContent}>
            <Image
              source={require("../../../assets/doctor Images/exam.png")}
              style={styles.additionalImage}
            />
            <Text style={styles.additionalText}>Fill the form or call us</Text>
          </View>
          <View style={styles.additionalContent}>
            {/* dentist */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.additionalImage}
            />
            <Text style={styles.additionalText}>
              Will help you choose the best dentist
            </Text>
          </View>
          <View style={styles.additionalContent}>
            {/* stethoscope-medical-tool */}
            <Image
              source={require("../../../assets/doctor Images/stethoscope.png")}
              style={styles.additionalImage}
            />
            <Text style={styles.additionalText}>
              Online/Physical consultation best dental services
            </Text>
          </View>
        </View>
        <Text style={styles.heading2}> Why Dental Clinics</Text>
        <View style={styles.additionalRow2}>
          <View style={styles.additionalItem2}>
            {/* consultation (1) */}
            <Image
              source={require("../../../assets/doctor Images/consultant-services.png")}
              style={styles.additionalImage2}
            />
            <Text style={styles.additionalText2}>Consultation</Text>
            <Text style={styles.additionalSubText2}>25L+</Text>
          </View>
          <View style={styles.additionalItem2}>
            {/* dentist */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.additionalImage2}
            />
            <Text style={styles.additionalText2}>Specialties</Text>
            <Text style={styles.additionalSubText2}>500+</Text>
          </View>
          <View style={styles.additionalItem2}>
            {/* buildings */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.additionalImage2}
            />
            <Text style={styles.additionalText2}>Cities</Text>
            <Text style={styles.additionalSubText2}>29+</Text>
          </View>
        </View>
        <View style={styles.additionalContainer3}>
          {/* medical-surgical-devices-instruments-sterile */}
          <Image
            source={require("../../../assets/doctor Images/exam.png")}
            style={styles.additionalImage3} // Define additionalImage3 style in your StyleSheet
          />
          <Text style={styles.additionalHeading3}>
            Sterilized and Advanced Medical Equipment
          </Text>
          <Text style={styles.additionalText3}>
            We use advanced medical equipment that is sterilized regularly to
            reduce the risk of infection.
          </Text>
        </View>
        <View style={styles.newContainer}>
          <Text style={styles.newHeading}>
            Best Dental Cavity Treatment-Fillings
          </Text>
          <View style={styles.imageCard}>
            <Image
              source={require("../../../assets/doctor Images/dentalcativy2.jpg")}
              style={styles.cardImage}
            />
          </View>

          <Text style={styles.newParagraph}>
            Cavities are permanently damaged areas on the hard surface of teeth.
            This is one of the most common dental problems faced by youth and
            adults. One of the main reasons why an individual develops cavities
            is overexposure of tooth enamel to acids through food.
          </Text>
          <Text style={styles.newParagraph}>
            Filling the cavity is the best way to treat dental caries
            (cavities). Usually, the filling procedure can take around an hour
            to complete. If you doubt having cavities or dental caries, fill the
            form and consult our dentists.
          </Text>
          <View style={styles.marginLine} />
        </View>

        <View style={styles.newContainer4}>
          <Text style={styles.newHeading4}>
            Safest Teeth Discoloration Treatment: Teeth cleaning and Teeth
            Whitening
          </Text>
          <View style={styles.imageCard4}>
            {/*teethcleaning.jpg  */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.cardImage4}
            />
          </View>

          <Text style={styles.newParagraph4}>
            One of the common reasons why an individual visits the dentist is to
            get their teeth cleaned or for theeth whitening. Our dentist
            recommend teeth cleaning once every six months or once a year based
            on the diagnosis snd the severity of tooth discolouration.
            Undergoing this procedure helps in improving oral health as well.
          </Text>
          <Text style={styles.newParagraph4}>
            Filling the cavity is the best way to treat dental caries
            (cavities). Usually, the filling procedure can take around an hour
            to complete. If you doubt having cavities or dental caries, fill the
            form and consult our dentists.
          </Text>
          <View style={styles.marginLine} />
        </View>

        <View style={styles.newContainer5}>
          <Text style={styles.newHeading5}>
            Teeth bondingRepair damaged or chipped teeth
          </Text>
          <View style={styles.imageCard5}>
            {/* dental-bonding */}
            <Image
              source={require("../../../assets/doctor Images/dental-care.png")}
              style={styles.cardImage5}
            />
          </View>

          <Text style={styles.newParagraph5}>
            Bonding is one of the many methods used to treat or repair chipped
            or damaged teeth. In this , a resin-like plastic is tinted to match
            the natural shade of tour teeth. it is less invasive and requires
            many layers to secure the resin
          </Text>

          <View style={styles.marginLine} />
          <Text style={styles.additionalHeading4}>Our Patients Say</Text>
          <View style={styles.additionalContainer4}>
            {/* quote */}
            <Image
              source={require("../../../assets/doctor Images/exam.png")}
              style={styles.additionalImage4}
            />
            <Text style={styles.additionalParagraph4}>
              Very good and experienced dentist. My 10 years old daughter was so
              comfortable with the dentist. Dr Ambuja Lakshmi has done her
              restoration. She was so friendly. The place was very well
              hygiencally maintained.
            </Text>
            <Text style={styles.additionalText4}>-Preety Kwatra</Text>
            <Text style={styles.additionalText4}>
              Gurgaon for Dr.Lakshmi Ambuja
            </Text>
          </View>
          <View style={styles.additionalContainer4}>
            {/* quote */}
            <Image
              source={require("../../../assets/doctor Images/exam.png")}
              style={styles.additionalImage4}
            />
            <Text style={styles.additionalParagraph4}>
              Very good and experienced dentist. My 10 years old daughter was so
              comfortable with the dentist. Dr Ambuja Lakshmi has done her
              restoration. She was so friendly. The place was very well
              hygiencally maintained.
            </Text>
            <Text style={styles.additionalText4}>-Preety Kwatra</Text>
            <Text style={styles.additionalText4}>
              Gurgaon for Dr.Lakshmi Ambuja
            </Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>
              The Page at "https://www.HapiDoc.com" says
            </Text>
            <Text style={styles.modalSubHeading}>
              Thank you for choosing us. Our representative will call you
              shortly (number: 080-45305117).
            </Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7fa",
    paddingHorizontal: 15, // Added paddingHorizontal to container
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:10,
  },
  subHeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 150,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:3,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000", // Red color
  },
  subTextLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: "#189ab4",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    color: "#333", // Text color
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
    alignItems: "center",
  },
  label: {
    margin: 8,
  },
  button: {
    backgroundColor: "#189AB4",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: "100%", // Adjusted to 100% width
    height: 450,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 40,
    alignItems: "center",
    height: 200,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 30,
  },
  modalSubHeading: {
    fontSize: 16,
    marginBottom: 10,
  },

  okButtonText: {
    color: "#189AB4",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 60,
    marginLeft: "80%",
  },
  bottomContainer: {
    justifyContent: "space-between",
    marginTop: 20,
  },
  bottomItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "white", // Set the background color
    elevation: 2, // Add elevation for shadow effect (Android only)
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  additionalContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  additionalHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#189ab4",
  },
  additionalContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  additionalImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  additionalText: {
    flex: 1,
    fontSize: 16,
  },
  heading2: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#05445e",
    marginTop: 20,
  },
  additionalRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  additionalItem2: {
    alignItems: "center",
  },
  additionalImage2: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  additionalText2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  additionalSubText2: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  additionalContainer3: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  additionalImage3: {
    width: 250,
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  additionalHeading3: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#189ab4",
  },
  additionalText3: {
    fontSize: 16,
    marginBottom: 20,
  },
  newContainer: {
    // backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  newHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#05445e",
  },
  imageCard: {
    borderColor: "#189ab4",
    borderRadius: 10,
    marginBottom: 10,
    // borderTopRightRadius: 100,
  },
  cardImage: {
    width: 270,
    height: 200,
    borderRadius: 10,
    marginRight: 40,
    borderTopRightRadius: 90,
    marginLeft: 10,
    marginTop: 10,
  },
  marginLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  newParagraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  newContainer4: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  newHeading4: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#05445e",
  },
  imageCard4: {
    borderColor: "#189ab4",
    borderRadius: 10,
    marginBottom: 10,
    // borderTopRightRadius: 100,
  },
  cardImage4: {
    width: 270,
    height: 200,
    borderRadius: 10,
    marginRight: 40,
    borderTopLeftRadius: 90,
    marginLeft: 10,
    marginTop: 10,
  },
  marginLine4: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  newParagraph4: {
    fontSize: 16,
    marginBottom: 10,
  },
  newContainer5: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  newHeading5: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#05445e",
  },
  imageCard5: {
    borderColor: "#189ab4",
    borderRadius: 10,
    marginBottom: 10,
    // borderTopRightRadius: 100,
  },
  cardImage5: {
    width: 270,
    height: 200,
    borderRadius: 10,
    marginRight: 40,
    borderTopLeftRadius: 90,
    marginLeft: 10,
    marginTop: 10,
  },
  marginLine5: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  newParagraph5: {
    fontSize: 16,
    marginBottom: 10,
  },
  additionalContainer4: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  additionalHeading4: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#05445e", // Set the color you desire
    marginTop: 20,
    textAlign: "center",
  },
  additionalParagraph4: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333", // Set the color you desire
  },
  additionalText4: {
    fontSize: 16,

    fontWeight: "bold",
  },
  additionalImage4: {
    width: 30,
    height: 30,
  },
});

export default DentalPage;

