import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Title, Text, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const UserRegister = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSignup = () => {
    // Validation logic here...
    // Check if required fields are filled
    if (!username) {
      setUsernameError('Username is required');
      return;
    }
    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    // Navigate to another screen if all validations pass
    navigation.navigate('UserOtpVerification');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Title style={styles.heading}>User Signup</Title>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="#05445E" style={styles.icon} />
          <TextInput
            label="Username*"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError(null);
            }}
            style={[styles.input, styles.inputWithIcon, { borderColor: usernameError ? 'red' : '#E8F0FE' }]}
            mode="outlined"
            theme={{ colors: { primary: '#05445E' } }}
          />
        </View>
        {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

        <View style={styles.inputContainer}>
          <Ionicons name="call" size={24} color="#05445E" style={styles.icon} />
          <TextInput
            label="Phone Number*"
            keyboardType="phone-pad"
            autoCapitalize="none"
            style={[styles.input, styles.inputWithIcon, { borderColor: phoneNumberError ? 'red' : '#E8F0FE' }]}
            theme={{ colors: { primary: '#05445E' } }}
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setPhoneNumberError(null);
            }}
            mode="outlined"
          />
        </View>
        {phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color="#05445E" style={styles.icon} />
          <TextInput
            label="Create Password*"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError(null);
            }}
            secureTextEntry
            style={[styles.input, styles.inputWithIcon, { borderColor: passwordError ? 'red' : '#E8F0FE' }]}
            mode="outlined"
            theme={{ colors: { primary: '#05445E' } }}
          />
        </View>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <Button mode="contained" onPress={handleSignup} style={styles.signupButton}>
          VERIFY OTP
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
    flexDirection: 'column',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#05445E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10, // Adjusted border radius
    marginLeft: 10,
    borderColor: '#05445E',
  },
  inputWithIcon: {
    paddingLeft: 10,
  },
  signupButton: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#05445E',
    fontFamily: 'System',
    mode: 'contained',
    width: '40%',
    marginLeft: '30%',
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  icon: {
    marginLeft: 13,
    height: 24,
    marginRight: 10,
  }
});

export default UserRegister;
