import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const RequestBlood = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [requiredDate, setRequiredDate] = useState("");
  const [location, setLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (
      !name ||
      !phoneNumber ||
      !selectedBloodGroup ||
      !requiredDate ||
      !location
    ) {
      Alert.alert("", "Please fill out all fields.", [{ text: "OK" }]);
      return;
    }

    const formData = {
      name,
      phoneNumber,
      bloodGroup: selectedBloodGroup,
      requiredDate,
      location,
    };
    console.log("Form submitted with data:", formData);
  };

  const handleBloodGroupSelection = (group) => {
    if (selectedBloodGroup === group) {
      setSelectedBloodGroup("");
    } else {
      setSelectedBloodGroup(group);
    }
    setModalVisible(false);
  };

  return (
    <View style={[styles.container]}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Request Blood</Text>
      </View> */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/doctor Images/blood-donation-wallpaper-preview.jpg")}
          style={styles.image}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.labelBold}>Blood Group</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.inputText}>
              {selectedBloodGroup ? selectedBloodGroup : "Blood Group Type"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Required Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter required date"
            value={requiredDate}
            onChangeText={setRequiredDate}
          />
          <Text style={styles.label}>Location</Text>
          <View style={styles.locationContainer}>
            <Icon
              name="map-marker"
              size={24}
              color="#ff0000"
              style={styles.locationIcon}
            />
            <TextInput
              style={[styles.input, { flex: 1, paddingLeft: 40 }]}
              placeholder="Enter your location"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        {/* Blood Group Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Select Blood Group</Text>
            {bloodGroups.map((group, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleBloodGroupSelection(group)}
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedBloodGroup === group && {
                      backgroundColor: "#ff0000",
                    },
                  ]}
                />
                <Text style={styles.modalText}>{group}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: "center",
   
  },
  titleContainer: {
    backgroundColor: "#ff0000",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: "white",
   
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: "black",
    fontWeight: "bold",
  },
  labelBold: {
    fontSize: 20,
    marginBottom: 5,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    fontSize: 18,
    color: "grey",
  },
  inputText: {
    fontSize: 18,
    color: "grey",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  button: {
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    marginTop: "30%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    marginTop: "auto",
    marginBottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff0000",
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height:150,
    width: "100%",
    marginTop: 20,
  },
});

export default RequestBlood;
