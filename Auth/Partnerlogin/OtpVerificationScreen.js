import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
    // Check if required fields are filled
    if (!otp) {
      setOtpError('OTP is required');
      return;
    }
    // You can add more validation if needed
    // If validation is successful, navigate to the home screen or another screen
    navigation.navigate('NewPasswordScreen');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* OTP Verification Heading */}
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the OTP sent to your mobile number</Text>
        {/* OTP Input */}
        <TextInput
          label="OTP"
          mode="outlined"
          value={otp}
          onChangeText={(text) => {
            setOtp(text);
            setOtpError('');
          }}
          style={styles.input}
          error={!!otpError}
        />
        {otpError ? <Text style={styles.error}>{otpError}</Text> : null}
        {/* Verify Button */}
        <Button
          mode="contained"
          onPress={handleVerifyOtp}
          style={styles.button}
        >
          Verify
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
    color: '#05445E', // Change this to your desired color
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
    backgroundColor: '#05445E', // Change this to your desired color
    width: '40%', // Adjusted width
    marginLeft: '30%', // Adjusted margin
    borderRadius: 5, // Adjusted border radius
  },
  error: {
    color: 'red',
    marginLeft: 12,
  },
});

export default OtpVerificationScreen;
