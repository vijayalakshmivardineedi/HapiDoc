import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'; // Import ImageBackground

const OtpVerification = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(null);

  const handleVerifyOtp = () => {
    // Validate OTP
    if (!otp) {
      setOtpError('OTP is required');
      return;
    }

    // Your logic for OTP verification
    // Replace the following logic with your actual OTP verification logic
    // For simplicity, let's assume OTP verification is successful
    const isOtpValid = true;

    if (isOtpValid) {
      // Reset errors
      setOtpError(null);
      // Navigate to the LoginScreen
      navigation.navigate('LoginScreen');
    } else {
      // Display an error message if OTP is not valid
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    // Your logic for resending OTP
    // This is a placeholder, replace it with your actual logic
    console.log('Resend OTP');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the OTP sent to your Register Mobile Number</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="ENTER OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={(text) => {
              setOtp(text);
              setOtpError(null);
            }}
            mode="outlined"
            outlineColor="#05445E"
          />
          {otpError && <Text style={styles.errorText}>{otpError}</Text>}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.resendButton} onPress={handleResendOtp}>
              <Text style={styles.buttonText}>Resend OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#05445E',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resendButton: {
    backgroundColor: '#05445E',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  verifyButton: {
    backgroundColor: '#05445E',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default OtpVerification;