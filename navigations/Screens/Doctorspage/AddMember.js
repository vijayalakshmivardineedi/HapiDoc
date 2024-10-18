import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from @expo/vector-icons

const AddMember = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleDateChange = (date) => {
    setDob(date);
    setDatePickerVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={32}
            color="black"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.addNew}>ADD NEW FAMILY MEMBER</Text>
      </View> */}
      <Text style={styles.termsConditions}>
        Important: You will not be able to edit these details once you have
        saved them
      </Text>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Full Name</Text>
          <View style={styles.nameContainer}>
            <TextInput
              style={[styles.input, styles.firstNameInput]}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={[styles.input, styles.lastNameInput]}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <Text style={styles.cardHeader}>Date of Birth</Text>
          <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
            <View style={styles.input}>
              <TextInput
                style={styles.birthDateText}
                placeholder="dd/mm/yyyy"
                value={dob}
                onChangeText={setDob}
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.cardHeader}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              onPress={() => setGender("Female")}
              style={[
                styles.genderButton,
                gender === "Female" && { backgroundColor: "#189AB4" },
              ]}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === "Female" && { color: "#fff" },
                ]}
              >
                Female
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender("Male")}
              style={[
                styles.genderButton,
                gender === "Male" && { backgroundColor: "#189AB4" },
              ]}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === "Male" && { color: "#fff" },
                ]}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender("Other")}
              style={[
                styles.genderButton,
                gender === "Other" && { backgroundColor: "#189AB4" },
              ]}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === "Other" && { color: "#fff" },
                ]}
              >
                Other
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardHeader1}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="name@email.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f9",
  },
  termsConditions: {
    color: "#189AB4",
    marginLeft:20,
    marginTop:20,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backArrow: {
    marginRight: 16,
  },
  addNew: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20,
  },
  card: {
    marginBottom: 150,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  cardHeader1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  firstNameInput: {
    flex: 1,
    marginRight: 5,
  },
  lastNameInput: {
    flex: 1,
    marginLeft: 5,
  },
  birthDateText: {
    fontSize: 16,
    color: "#000",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  genderText: {
    fontSize: 16,
    color: "#189AB4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 5,
    paddingVertical: 10,
    marginRight: 10,
  },
  cancelButtonText: {
    color: "#189AB4",
    fontSize: 16,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#189AB4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginLeft: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AddMember;
