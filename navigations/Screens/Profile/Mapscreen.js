import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text, Image, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import home from "../../../assets/icons/home-button.png";
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const [selectedAddressType, setSelectedAddressType] = useState(null);

  const navigation = useNavigation();
  const handleAddressTypeSelect = (addressType) => {
    setSelectedAddressType(addressType);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const markerCoords = {
    latitude: 17.822836,
    longitude: 83.362907,
  };
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer1}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: markerCoords.latitude,
            longitude: markerCoords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={markerCoords} />
        </MapView>
      </View>
      <View style={styles.halfContainer2}>
        <View style={styles.AddressContainer}>
          <Feather name="map-pin" size={22} color="black" style={{ marginTop: 3 }} />
          <View style={{ width: 260, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Madhurawada</Text>
            <Text style={{ marginTop: 8, letterSpacing: 0.3 }}>Madhurawada,Visakhapatnam, Andhra Pradesh, India (530041)</Text>
          </View>
          <TouchableOpacity style={{ marginRight: 30 }} onPress={()=>navigation.navigate("Search Location")}>
            <Text style={styles.changebutton}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Divider} />
        <View style={styles.ContinueSection}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.ConfirmContainer} >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>Confirm Location and Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.ConfirmHeader}>Add Address Details</Text>
            <TouchableOpacity style={styles.modalclose} onPress={toggleModal} >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.dashedDivider} />
          <View style={styles.AddressContainer1}>
            <Feather name="map-pin" size={22} color="black" style={{ marginTop: 3 }} />
            <View style={{ width: 260, marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Madhurawada</Text>
              <Text style={{ marginTop: 8, letterSpacing: 0.3 }}>Madhurawada, Visakhapatnam, Andhra Pradesh, India (530041)</Text>
            </View>
          </View>
          <View style={styles.dashedDivider} />
          <ScrollView>
          <View style={styles.Addressfields}>
            <Text style={styles.label}>Recipient's Name</Text>
            <View style={styles.rowContainer}>
              <TextInput
                style={styles.input}
                placeholder="Recipient's Name"
              />
            </View>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.rowContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
              />
            </View>
            <Text style={styles.label}>House Number, Street, Locality ,City</Text>
            <View style={styles.rowContainer}>
              <TextInput
                style={styles.input}
                placeholder="House Number"
              />
            </View>
            <Text style={styles.label}>Pincode</Text>
            <View style={styles.rowContainer}>
              <TextInput
                style={styles.input}
                placeholder="Pincode"
              />
            </View>
            <View>
              <Text style={styles.label}>Address name and Type</Text>
              <View style={styles.addresstype}>
                <TouchableOpacity
                  style={[
                    styles.typeContainer,
                    selectedAddressType === 'Home' && styles.selectedType,
                    selectedAddressType === 'Home' && { backgroundColor: '#189ab4' }
                  ]}
                  onPress={() => handleAddressTypeSelect('Home')}
                >
                  <Text style={[styles.typeText, selectedAddressType === 'Home' && styles.selectedText]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.typeContainer,
                    selectedAddressType === 'Office' && styles.selectedType,
                    selectedAddressType === 'Office' && { backgroundColor: '#189ab4' }
                  ]}
                  onPress={() => handleAddressTypeSelect('Office')}
                >
                  <Text style={[styles.typeText, selectedAddressType === 'Office' && styles.selectedText]}>Office</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.typeContainer,
                    selectedAddressType === 'Other' && styles.selectedType,
                    selectedAddressType === 'Other' && { backgroundColor: '#189ab4' }
                  ]}
                  onPress={() => handleAddressTypeSelect('Other')}
                >
                  <Text style={[styles.typeText, selectedAddressType === 'Other' && styles.selectedText]}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </ScrollView>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20, marginTop: 15, }}>
            <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#189ab4', padding: 10, borderRadius: 30, width: "90%" }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Save Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  halfContainer1: {
    flex: 3,
  },
  halfContainer2: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  AddressContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    flex: 1,
    height: 100,
  },
  changebutton: {
    color: "#189ab4",
    fontSize: 18,
    marginRight: 30,
    fontWeight: '500'
  },
  Divider: {
    height: 1,
    marginTop: 10,
    backgroundColor: 'gray',
  },
  ContinueSection: {
    marginTop: 10,
    marginBottom: 15
  },
  ConfirmContainer: {
    backgroundColor: "#189ab4",
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {

    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ConfirmHeader: {
    fontSize: 24,
    fontWeight: "500",
    color: "#189ab4"
  },
  modalclose: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 70,
  },
  dashedDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    width: '100%',
  },
  AddressContainer1: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  Addressfields: {
    paddingHorizontal: 20
  },
  rowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
  },
  labelContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#777'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%', // Adjust as needed
  }, addresstype: {
    flexDirection: 'row',
  },
  typeContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    margin:10
  },
  selectedType: {
    backgroundColor: '#189ab4',
  },
  typeText: {
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },



  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
