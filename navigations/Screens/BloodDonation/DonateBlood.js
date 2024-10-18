import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [Age, setAge] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [showBloodTypeOptions, setShowBloodTypeOptions] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Functions to handle form inputs
  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMobileChange = (text) => {
    setMobile(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleBloodTypeSelect = (type) => {
    setBloodType(type);
    setShowBloodTypeOptions(false); // Hide blood type options after selection
  };

  const toggleBloodTypeOptions = () => {
    setShowBloodTypeOptions(!showBloodTypeOptions);
  };
  const handleSave = () => {
    
    console.log("Saving data:", { name, email, mobile, Age, bloodType });
    toggleModal(); // Close the modal after saving data
  };
  const handleBloodRequest = () => {
    console.log("Blood requested!");
    navigation.navigate("RequestBlood");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Donner Blood</Text>
      </View> */}

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/doctor Images/file (3).png")}
          style={styles.image}
        />
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeading}>Donor Details</Text>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.name}>
          Name: <Text style={styles.bold}>John Doe</Text>
        </Text>
        <Text style={styles.name}>
          Email: <Text style={styles.bold}> johndoe@example.com</Text>
        </Text>
        <Text style={styles.name}>
          Mobile Number: <Text style={styles.bold}>+1234567890</Text>
        </Text>
        <Text style={styles.name}>
          Age: <Text style={styles.bold}>30</Text>
        </Text>
        <Text style={styles.name}>
          Blood Group: <Text style={styles.bold}>O+</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.requestButton}
        onPress={handleBloodRequest}
      >
        <Text style={styles.requestButtonText}>Request Blood</Text>
      </TouchableOpacity>


      <Modal visible={isModalVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.formHeading}>Blood Donation</Text>
            <View style={styles.formField}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
                placeholder="Enter your name"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.label}>Mobile Number:</Text>
              <TextInput
                style={styles.input}
                value={mobile}
                onChangeText={handleMobileChange}
                placeholder="Enter your mobile number"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.label}>Age:</Text>
              <TextInput
                style={styles.input}
                value={Age}
                onChangeText={handleAgeChange}
                placeholder="Enter your Age"
                keyboardType="numbers-and-punctuation"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.label}>Blood Type:</Text>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={toggleBloodTypeOptions}
              >
                <Text style={styles.dropdownText}>
                  {bloodType ? bloodType : "Select blood type"}
                </Text>
              </TouchableOpacity>
              {showBloodTypeOptions && (
                <ScrollView style={styles.dropdownOptions}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("A+")}
                  >
                    <Text>A+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("A-")}
                  >
                    <Text>A-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("B+")}
                  >
                    <Text>B+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("B-")}
                  >
                    <Text>B-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("AB+")}
                  >
                    <Text>AB+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("AB-")}
                  >
                    <Text>AB-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("O+")}
                  >
                    <Text>O+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleBloodTypeSelect("O-")}
                  >
                    <Text>O-</Text>
                  </TouchableOpacity>
                </ScrollView>
              )}
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7fa",
  },
  header: {
    backgroundColor: "#ff0000",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    
  },
  heading: {
    color: "white",
    fontSize: 20,
marginTop:30,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  formHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formField: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  saveButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  requestButton: {
    backgroundColor: "#ff0000", // Red color for request button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: "50%",
    alignItems: "center",
  },
  requestButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 175,
    width: "100%",
    marginTop: 20,
    
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bold: {
    fontSize: 16,
  },
});

export default Screen;
