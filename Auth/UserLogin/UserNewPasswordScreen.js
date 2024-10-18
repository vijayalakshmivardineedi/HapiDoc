import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleCreatePassword = () => {
    // Implement logic to create a new password
    // Check if required fields are filled
    if (!newPassword) {
      setNewPasswordError('New Password is required');
      return;
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      return;
    }
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Check password strength
    const strength = checkPasswordStrength(newPassword);
    setPasswordStrength(strength);

    // You can add more validation if needed

    // If validation is successful, navigate to the login screen or another screen
    navigation.navigate('Userloginscreen');
  };

  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const minLowercase = 1;
    const minUppercase = 1;
    const minNumbers = 1;
    const minSpecialChars = 1;
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (
      password.length >= minLength &&
      password.match(/[a-z]/g).length >= minLowercase &&
      password.match(/[A-Z]/g).length >= minUppercase &&
      password.match(/[0-9]/g).length >= minNumbers &&
      password.match(specialChars) &&
      password.match(specialChars).length >= minSpecialChars
    ) {
      return 'strong';
    } else if (
      password.length >= minLength &&
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g)
    ) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* New Password Heading */}
        <Text style={styles.heading}>Create New Password Users</Text>
        <Text style={styles.subtitle}>Enter your new password</Text>
        {/* New Password Input */}
        <TextInput
          label="New Password"
          mode="outlined"
          value={newPassword}
          secureTextEntry
          onChangeText={(text) => {
            setNewPassword(text);
            setNewPasswordError('');
            setPasswordStrength(checkPasswordStrength(text));
          }}
          style={styles.input}
          error={!!newPasswordError}
        />
        {newPasswordError ? <Text style={styles.error}>{newPasswordError}</Text> : null}
        {passwordStrength === 'weak' && <Text style={styles.error}>Password is too weak</Text>}
        {passwordStrength === 'medium' && <Text style={styles.warning}>Password strength: Medium</Text>}
        {passwordStrength === 'strong' && <Text style={styles.success}>Password strength: Strong</Text>}
        {/* Confirm Password Input */}
        <TextInput
          label="Confirm Password"
          mode="outlined"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => {
            setConfirmPassword(text);
            setConfirmPasswordError('');
          }}
          style={styles.input}
          error={!!confirmPasswordError}
        />
        {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
        {/* Create Password Button */}
        <Button
          mode="contained"
          onPress={handleCreatePassword}
          style={styles.button}
        >
         Login
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
    width: '60%', // Adjusted width
    marginLeft: '20%', // Adjusted margin
    borderRadius: 5, // Adjusted border radius
  },
  error: {
    color: 'red',
    marginLeft: 12,
  },
  warning: {
    color: 'orange',
    marginLeft: 12,
  },
  success: {
    color: 'green',
    marginLeft: 12,
  },
});

export default NewPasswordScreen;
