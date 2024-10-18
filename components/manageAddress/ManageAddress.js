
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
// import * as Location from 'expo-location';

const ManageAddress = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch the user's current location when the component mounts
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please enable location services to detect your location.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };
  const handleAddAddress = () => {
        navigation.navigate('Add Address');
      };

  const handleDetectLocation = () => {
    if (userLocation) {
      // Display the pin code in the search text field
      setSearchQuery(userLocation.coords.latitude + ',' + userLocation.coords.longitude);
    } else {
      Alert.alert('Location Not Found', 'Unable to detect your current location.');
    }
  };

  const handleNext = () => {
    navigation.navigate({
      name: 'MainComponent',
      replace: true,
    });
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.darkSide}>
        <Image
          source={require('../../assets/icons/location.gif')}
          style={styles.image}
        />
        <Text style={styles.darkText}>Add Address</Text>
      </View>
      <View style={styles.lightSide}>
        <Text style={styles.lightHeaderText}>Choose Your Location</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your location"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detectContainer}>
          <FontAwesome6 name="location-crosshairs" size={22} color="#d4f1f4" style={{ marginRight: 10 }} />
          <TouchableOpacity onPress={handleDetectLocation}>
            <Text style={styles.detectText}>Detect My Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={handleAddAddress}>
            <Text style={styles.buttonContent}>+ Add Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonContent}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkSide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  lightSide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#189ab4',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  darkText: {
    color: '#05445E',
    fontSize: 30,
    marginTop: 10,
  },
  lightHeaderText: {
    color: '#d4f1f4',
    
    fontSize: 25,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    width: '70%',
  },
  searchButton: {
    backgroundColor: '#d4f1f4',
    borderRadius: 8,
    marginLeft: 5,
    width: '20%',
  },
  searchButtonText: {
    color: 'gray',
    textAlign: 'center',
    paddingVertical: 10,
  },
  detectContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginLeft:40,
  },
  detectText: {
    color: '#d4f1f4',
    fontSize: 15,
    textAlign: 'left',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 60,
  },
  button1: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#d4f1f4',
    marginRight: 8,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#d4f1f4',
  },
  buttonContent: {
    color: '#05445e',
    textAlign: 'center',
    paddingVertical: 12,
  },
});

export default ManageAddress;
