import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditAddress = () => {

  const navigation = useNavigation();


  // Separate state for each field in the form
  const [flatNo, setFlatNo] = useState('');
  const [street, setStreet] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [district, setDistrict] = useState('');

  // State for checkboxes
  const [isHomeChecked, setIsHomeChecked] = useState(false);
  const [isOfficeChecked, setIsOfficeChecked] = useState(false);
  const [isHomeSelected, setIsHomeSelected] = useState(false);
  const [isOfficeSelected, setIsOfficeSelected] = useState(false);
  
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditPress = () => {
    setIsEditMode(true);
  };

  const handleSavePress = () => {
    setIsEditMode(false);
    navigation.navigate({
      name: 'MainComponent',
      replace: true,
    });
  };
  const handleHomePress = () => {
    setIsHomeSelected(!isHomeSelected);
    setIsOfficeSelected(false);
  };

  const handleOfficePress = () => {
    setIsHomeSelected(false);
    setIsOfficeSelected(!isOfficeSelected);
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Flat No"
        value={flatNo}
        onChangeText={(text) => setFlatNo(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
        theme={{ colors: { primary: '#189AB4' } }}
      />
      <TextInput
        label="Street"
        value={street}
        
        onChangeText={(text) => setStreet(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
        theme={{ colors: { primary: '#189AB4' } }}
      />
      <TextInput
        label="Locality"
        value={locality}
        
        onChangeText={(text) => setLocality(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
        theme={{ colors: { primary: '#189AB4' } }}
      />
      <TextInput
        label="City"
        value={city}
        
        onChangeText={(text) => setCity(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
        theme={{ colors: { primary: '#189AB4' } }}
      />
      <TextInput
        label="District"
        value={district}
        
        onChangeText={(text) => setDistrict(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
            theme={{ colors: { primary: '#189AB4' } }}
      />
      <TextInput
        label="Pincode"
        value={pincode}
        
        onChangeText={(text) => setPincode(text)}
        mode="outlined"
        style={[styles.input, { backgroundColor: 'white' }]}
            theme={{ colors: { primary: '#189AB4' } }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isHomeSelected && styles.selectedButton]}
          onPress={handleHomePress}
          disabled={isHomeSelected}
        >
          <Text style={[styles.buttonText, isHomeSelected && styles.selectedButtonText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isOfficeSelected && styles.selectedButton]}
          onPress={handleOfficePress}
          disabled={isOfficeSelected}
        >
          <Text style={[styles.buttonText, isOfficeSelected && styles.selectedButtonText]}>Office</Text>
        </TouchableOpacity>
       
      </View>
      <View style={styles.saveButtonContainer}>
        <Button mode="contained" onPress={handleSavePress} style={styles.saveButton}>
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor:"#fff",
  },
  input: {
    marginBottom: 16,
    borderColor: '#189ab4',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    borderWidth: 2, // Border width
    borderColor: '#189ab4', // Border color
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    margin:4
  },
  selectedButton: {
    backgroundColor: '#189ab4',
  },
  selectedButtonText:{
    color: '#ffffff',
  },
  buttonText: {
    color: '#189ab4',
  },
  saveButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#189ab4',
    width: '98%',
    borderRadius: 8,
  },
});


export default EditAddress;
