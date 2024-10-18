import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
const Medicines = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Upload Prescription</Text>
      <Text style={styles.subHeading}>
        and let us arrange your medicine for you
      </Text>

      {/* Image */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={apple}
          style={styles.uploadImage}
        /> */}
      </View>

      {/* Upload Prescription Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={toggleModal}>
        <Text style={styles.uploadButtonText}>Upload Prescription</Text>
      </TouchableOpacity>

      <View style={styles.additionalContainer}>
        <Text style={styles.additionalText}>
          All uploads are encrypted & visible only to our pharamacists.</Text>
          <Text style={styles.additionalText}>Any
          Prescription you upload is validated before processing the order.
        </Text>
       
      </View>

      {/* Bottom Modal */}
      <Modal isVisible={isModalVisible} style={styles.bottomModal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeader}>Select an option</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="clear" size={20} color="#189AB4" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.modalOption}>
            <Icon name="camera" size={24} color="#189AB4" />
            <Text style={styles.modalOptionText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <Icon name="photo" size={24} color="#189AB4" />
            <Text style={styles.modalOptionText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <Icon name="description" size={24} color="#189AB4" />
            <Text style={styles.modalOptionText}>Your Prescription</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"#eaf7f9"
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: -10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  subHeading: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  uploadImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  uploadButton: {
    backgroundColor: "#189AB4",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  additionalContainer: {
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  additionalText: {
    fontSize: 14,
    marginTop:5,
    color: "#333",
  },
 
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default Medicines;