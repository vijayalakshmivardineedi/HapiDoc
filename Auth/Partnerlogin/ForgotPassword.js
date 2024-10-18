import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const handleVerify = () => {
    // Implement mobile number verification logic here
    // Check if required fields are filled
    if (!mobileNumber) {
      setMobileNumberError('Mobile Number is required');
      return;
    }
    // You can add more validation if needed
    // If validation is successful, navigate to the OtpVerificationScreen
    navigation.navigate('OtpVerificationScreen');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Forgot Password Heading */}
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your Registered Mobile Number</Text>
        {/* Mobile Number Input */}
        <TextInput
          label="Mobile Number"
          mode="outlined"
          value={mobileNumber}
          onChangeText={(text) => {
            setMobileNumber(text);
            setMobileNumberError('');
          }}
          style={styles.input}
          error={!!mobileNumberError}
        />
        {mobileNumberError ? <Text style={styles.error}>{mobileNumberError}</Text> : null}
        {/* Verify Button */}
        <Button
          mode="contained"
          onPress={handleVerify}
          style={styles.button}
        >
          Send Otp
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#05445E', // Change this to your desired color
  },
  input: {
    marginVertical: 8,
    color: '#05445E', // Change this to your desired color
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#05445E',
    fontFamily: 'System',
    mode: 'contained',
    width: '40%', // Adjusted width
    marginLeft: '30%', // Adjusted margin
    borderRadius: 5, // Adjusted border radius
  },
  error: {
    color: 'red',
    marginLeft: 12,
  },
});

export default ForgotPasswordScreen;
