import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5, Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import { View, Alert, Vibration, StyleSheet, Text } from 'react-native';

// Import your screens
import HomeScreen from './Screens/HomeScreen';
import LabsScreen from './Screens/LabsScreen';
import SosScreen from './Screens/SosScreen';
import ClinicsScreen from './Screens/ClinicsScreen';
import StoreScreen from './Screens/StoreScreen';

const Tab = createBottomTabNavigator();

function MainComponent({ navigation }) {
  const timerRef = useRef(null);
  const address = '303, Anandapuram, 530052';

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleNotifications = () => {
    navigation.navigate("Notifications");
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleSosPress = () => {
    Alert.alert('SOS Alert', 'Emergency services notified');
    Vibration.vibrate([1000, 2000, 3000], true);
    timerRef.current = setTimeout(() => {
      Vibration.cancel();
      timerRef.current = null;
    }, 5000);
  };

  const header = (
    <View style={styles.header}>
      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={24} color="black" />
        <View style={styles.addressContainer}>
          <Text style={styles.addressHeaderText}>Home</Text>
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesome
          name="bell-o"
          size={24}
          color="black"
          onPress={handleNotifications}
          style={{ marginRight: 20 }}
        />
        <FontAwesome name="user-o" size={24} color="black" style={styles.headericon} onPress={handleProfile} />
      </View>
    </View>
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;
            if (route.name === 'Home') {
              iconComponent = <FontAwesome5 name={focused ? 'home' : 'home'} size={size} color={color} />;
            } else if (route.name === 'Clinics') {
              iconComponent = <Fontisto name={focused ? 'doctor' : 'doctor'} size={size} color={color} />;
            } else if (route.name === 'SOS') {
              iconComponent = (
                <View style={{ width: size + 40, height: size + 40, borderRadius: (size + 40) / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginBottom: 25 }}>
                  <FontAwesome5 name="exclamation-triangle" size={28} color="white" onPress={handleSosPress} />
                </View>
              );
            } else if (route.name === 'Labs') {
              iconComponent = <FontAwesome5 name={focused ? 'vials' : 'vials'} size={size} color={color} />;
            } else if (route.name === 'Store') {
              iconComponent = <SimpleLineIcons name={focused ? 'basket' : 'basket'} size={size} color={color} />;
            }

            return iconComponent;
          },
          tabBarActiveTintColor: '#189AB4',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70 },
        })}
      >
        <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Tab.Screen name="Clinics" component={ClinicsScreen} />
        <Tab.Screen name="SOS" options={{ tabBarLabel: '' }} component={SosScreen} />
        <Tab.Screen name="Labs" component={LabsScreen} />
        <Tab.Screen name="Store" options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 16 }}>
              <FontAwesome5 name="shopping-basket" size={24} color="#189ab4" />
            </View>
          ),
        }} component={StoreScreen} />
      </Tab.Navigator>
    </>
  );
}

export default MainComponent;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressContainer: {
    flexDirection: "column",
    marginLeft: 8,
  },
  addressHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
});
