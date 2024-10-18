import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const SubCategories = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View>
      <View style={styles.TotalContainer}>
        {/* <View style={styles.container}>
          <View style={styles.left}>
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>FULL BODY CHECKUP</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="search" size={24} color="black" />
            <Ionicons name="cart" size={24} color="black" />
          </View>
        </View> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sort By</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Filter by")}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Top Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tests</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Full Body Checkup (5)</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/fullbody1.webp")}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.heading1}>Health Check -Basic</Text>
                  <View style={styles.subDescription}>
                    <Text style={styles.subText}>82 Tests Included</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View>
                  <Text style={styles.cashback}>₹105 cashback</Text>
                  <Text style={styles.offer}>
                    ₹1499 <Text style={styles.offerCross}>(₹1999)</Text> 25% off
                  </Text>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={() => console.log("Add clicked")}>
                    <Text style={styles.addText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.marginLine} />
              <View style={styles.reportsContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/reports1.png")}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportsText}>
                  Accurate and fast report delivery
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={()=>navigate.navigation("TestDetails")}>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/fullbody1.webp")}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.heading1}>Health Check-Master</Text>
                  <View style={styles.subDescription}>
                    <Text style={styles.subText}>88 Tests Included</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View>
                  <Text style={styles.cashback}>₹168 cashback</Text>
                  <Text style={styles.offer}>
                    ₹2400 <Text style={styles.offerCross}>(₹3200)</Text> 25% off
                  </Text>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={() => console.log("Add clicked")}>
                    <Text style={styles.addText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.marginLine} />
              <View style={styles.reportsContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/reports1.png")}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportsText}>
                  Accurate and fast report delivery
                </Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/fullbody1.webp")}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.heading1}>Basic Full Body Checkup</Text>
                  <View style={styles.subDescription}>
                    <Text style={styles.subText}>8 Test Included</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View>
                  <Text style={styles.cashback}>₹305 cashback</Text>
                  <Text style={styles.offer}>
                    ₹4299<Text style={styles.offerCross}>(₹5732)</Text> 25% off
                  </Text>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={() => console.log("Add clicked")}>
                    <Text style={styles.addText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.marginLine} />
              <View style={styles.reportsContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/reports1.png")}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportsText}>
                  Accurate and fast report delivery
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/fullbody1.webp")}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.heading1}>Health Check -Basic</Text>
                  <View style={styles.subDescription}>
                    <Text style={styles.subText}>82 Tests Included</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View>
                  <Text style={styles.cashback}>₹105 cashback</Text>
                  <Text style={styles.offer}>
                    ₹1499 <Text style={styles.offerCross}>(₹1999)</Text> 25% off
                  </Text>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={() => console.log("Add clicked")}>
                    <Text style={styles.addText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.marginLine} />
              <View style={styles.reportsContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/reports1.png")}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportsText}>
                  Accurate and fast report delivery
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/fullbody1.webp")}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.heading1}>Health Check -Basic</Text>
                  <View style={styles.subDescription}>
                    <Text style={styles.subText}>82 Tests Included</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View>
                  <Text style={styles.cashback}>₹105 cashback</Text>
                  <Text style={styles.offer}>
                    ₹1499 <Text style={styles.offerCross}>(₹1999)</Text> 25% off
                  </Text>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={() => console.log("Add clicked")}>
                    <Text style={styles.addText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.marginLine} />
              <View style={styles.reportsContainer}>
                <Image
                  source={require("../../../assets/Lab Icons/reports1.png")}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportsText}>
                  Accurate and fast report delivery
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TotalContainer: {
    backgroundColor: "#eaf7f4", // Background color for the entire screen
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eaf7f4",
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    borderColor: "#189ab4",
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 14,
    color: "#189ab4",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginRight: 190,
  },
  scrollViewContent: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginTop: -60,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  heading1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subDescription: {
    marginRight: 60,
    backgroundColor: "#d4f1f4",
    borderRadius: 5,
    marginTop: 5,
    width: 100,
  },
  subText: {
    fontSize: 12,
    color: "black",
    padding: 5,
  },
  cashback: {
    color: "red",
    fontSize: 10,
  },
  addContainer: {
    backgroundColor: "#189AB4",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    marginLeft: 120,
    marginTop: 10,
  },
  addText: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    fontSize: 14,
  },
  offer: {
    color: "gray",
    fontSize: 12,
  },
  offerCross: {
    textDecorationLine: "line-through",
    marginLeft: 5,
  },
  marginLine: {
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 10,
  },
  reportsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reportIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  reportsText: {
    color: "gray",
    fontWeight: "bold",
  },
});

export default SubCategories;