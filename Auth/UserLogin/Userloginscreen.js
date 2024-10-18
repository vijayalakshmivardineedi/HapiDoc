import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserLoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleLogin = () => {
    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    
    // Check if all fields are filled
    if (phoneNumber && password) {
      // Navigate to the "Main" screen
      navigation.navigate('Manage Address');
    }
  };
  

  const handleForgotPassword = () => {
    navigation.navigate('UserForgotPasswordScreen');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://t4.ftcdn.net/jpg/05/15/21/59/240_F_515215989_eRzULAypeaXXmpMhp90cz9kaZgwqDKgv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>User Login</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call" size={24} color="#05445E" style={styles.icon} />
          <TextInput
            label="Phone Number"
            keyboardType="phone-pad"
            mode="outlined"
            style={[styles.input, { backgroundColor: 'white' }]}
            theme={{ colors: { primary: '#05445E' } }}
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setPhoneNumberError(null);
            }}
            outlineColor="#05445E"
          />
        </View>
        {phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color="#05445E" style={styles.icon} />
          <TextInput
            label="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            style={[styles.input, { backgroundColor: 'white' }]}
            theme={{ colors: { primary: '#05445E' } }}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError(null);
            }}
            mode="outlined"
            outlineColor="#05445E"
          />
        </View>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={{ color: 'pink' }}
        >
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('UserRegister')}>
          <Text style={styles.signupLink}> SignUp As a User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signupLink}>If you are a partner?</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#05445E',
    fontFamily: 'System',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontFamily: 'System',
  },
  forgotPassword: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    color: '#05445E',
    fontFamily: 'System',
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
  signupLink: {
    textAlign: 'center',
    marginTop: 15,
    color: '#05445E',
    fontFamily: 'System',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'System',
  },
});

export default UserLoginScreen;
