import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Consult doctors at home",
    text:
      "Consult our qualified doctors from anywhere, anytime. We guarantee your privacy.",
    image: require("../assets/1.webp"),
  },
  {
    key: "two",
    title: "Lab test at home",
    text: "Book any test from any lab. we'all collect the sample and send the reports. Save up to 80% everytime.",
    image: require("../assets/6.webp"),
  },
  
  {
    key: "three",
    title: "Home delievery of medicines",
    text:
      "Order any medicines or health product at discounted prices and get tem deliverived at your doorstep.",
    image: require("../assets/5.png"),
  },
];

const OnBoardScreen = ({ navigation }) => {
    const _renderItem = ({ item }) => {
      return (
        <View style={styles.container}>
          <Image
            source={item.image}
            style={{
              resizeMode: "cover",
              height: 300, // Adjust the height as needed
              width: "100%",
            }}
          />
          <Text
            style={{
              paddingTop: 85,
              paddingBottom: 10,
              fontSize: 26,
              fontWeight: "bold",
              color: "#21465b",
              alignSelf: "center",
            }}
          >
            {item.title}
          </Text>
  
          <Text style={{
            textAlign: "center",
            color: "#808080",
            fontSize: 18,
            paddingHorizontal: 30
          }}>
            {item.text}
          </Text>
        </View>
      );
    };
  
    return (
      <View style={{ flex: 1 , backgroundColor:"#fff"}}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30,
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            // Navigate to the login screen
            navigation.navigate('AuthStack');
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#D4F1F4",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginLeft:20,
    marginRight:20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#05445E",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default OnBoardScreen;