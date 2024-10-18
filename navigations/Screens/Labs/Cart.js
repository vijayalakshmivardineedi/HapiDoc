import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for vector icons
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Home"); // Replace 'Home' with the name of your home screen
  };  

  return (
    <View style={styles.screen}>
      {/* <View style={styles.container}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Cart</Text>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
      </View> */}
      {/* <View style={styles.marginLine} /> */}
      <View style={styles.rowContainer}>
        <Image
          source={require("../../../assets/Lab Icons/12953993.png")} // Provide the correct image path
          style={styles.image}
        />
        <Text style={styles.rowText}>Apply cupon</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View style={styles.subContainer}>
            <Text style={styles.subHeading}>2 Tests added</Text>
            <Text style={styles.subText}>Conducted by our labs</Text>
            <View style={styles.rowContainer}>
              <Image
                source={require("../../../assets/Lab Icons/lipid1.png")}
                style={styles.smallImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.smallText}>
                  Lipid and Diabetes Monitoring
                </Text>
                <Text style={styles.offer}>
                  ₹249 <Text style={styles.offerCross}>(₹2200)</Text> 25% off{" "}
                </Text>
              </View>
              <TouchableOpacity style={styles.deleteIcon}>
                <Ionicons name="trash" size={24} color="#189AB4" />
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <Image
                source={require("../../../assets/Lab Icons/pcod1.png")}
                style={styles.smallImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.smallText}>Pcod Compreehensive</Text>
                <Text style={styles.offer}>
                  ₹249 <Text style={styles.offerCross}>(₹2200)</Text> 25% off{" "}
                </Text>
              </View>
              <TouchableOpacity style={styles.deleteIcon}>
                <Ionicons name="trash" size={24} color="#189AB4" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.billSummaryContainer}>
            <Text style={styles.billSummaryText}>Bill Summary</Text>
            <View style={styles.billSummaryRow}>
              <View style={styles.billSummaryColumn}>
                <Text style={styles.billSummaryLeftText}>Cart MRP</Text>
                <Text style={styles.billSummaryRightText}>₹5077</Text>
              </View>
            </View>
            <View style={styles.billSummaryRow}>
              <View style={styles.billSummaryColumn}>
                <Text style={styles.billSummaryLeftText}>Total Discounts</Text>
                <Text style={styles.billSummaryRightTextt}>-₹2200</Text>
              </View>
            </View>
            <View style={styles.marginLine} />
            <View style={styles.billSummaryRow}>
              <View style={styles.billSummaryColumn}>
                <Text style={styles.billSummaryLeftText}>To be paid</Text>
                <Text style={styles.billSummaryRightTexttt}>-₹2878</Text>
              </View>
            </View>
          </View>
        </View>

        
        <View style={styles.card}>
          <View style={styles.additionalContainer}>
            <Text style={styles.additionalHeading}>Order details</Text>
            <Text style={styles.additionalParagraph}>
              is a technology platform to facilitate transaction of business.
              The products and services are offered for sale by the sellers. The
              user authorizes the delivery personal to be his agent for delivery
              of the goods.
            </Text>
          </View>
        </View>

        {/* <View style={styles.additionalRowContainer}>
        <Image
          source={require("../../assets/Lab Icons/2544087.png")}
          style={styles.additionalImage}
        />
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>
            Sample Collection from Visakhapatanm
          </Text>
        </View>
        <Text style={styles.additionalAddress}>Add Address</Text>
      </View> */}
        <View style={styles.card}>
          <Text style={styles.costText}>Total Cost: -₹2878</Text>
          <Text style={styles.additionalInfoText}>
            Estimated Delivery Time: 2-3 days
          </Text>
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity style={styles.leftButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity> */}
            <TouchableOpacity style={styles.rightButton}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#eaf7f4",
  },
  screen: {
    flex: 1,
    backgroundColor: "#eaf7f4",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,

    marginTop: 40,
  },
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 16,
  },
  icon: {
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  rowText: {
    marginLeft: 20,
    fontSize: 18,
    color: "#666666",
  },
  iconContainer: {
    marginLeft: 150,
  },
  marginLine: {
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 10,
  },

  subContainer: {
    padding: 10,
    borderRadius: 5,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 7,
  },
  subText: {
    fontSize: 16,
    marginLeft: 6,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 5,
  },
  smallImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  smallText: {
    fontSize: 16,
  },
  rowContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  rowText2: {
    marginLeft: 10,
    marginRight: 20,
    fontSize: 16,
    color: "#666666",
  },
  iconContainer2: {
    marginLeft: "auto", // Changed to 'auto' to properly align with the text
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
  },
  billSummaryContainer: {
    padding: 10,
  },
  billSummaryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
   
  },
  billSummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  billSummaryColumn: {
    flexDirection: "row",
    flex: 8, // This will make the left text take up all available space
    justifyContent: "flex-start", // Aligns the left text to the start of the column
  },
  billSummaryLeftText: {
    fontSize: 16,
   
  },
  billSummaryRightText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 185,
  },
  billSummaryRightTextt: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 140,
  },
  billSummaryRightTexttt: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 160,
  },
  space2: {
    marginTop: 10,
    height: 5,
    backgroundColor: "#eaf7f4",
  },
  additionalContainer: {
    padding: 10,
    marginTop: 10,
  },
  additionalHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  additionalParagraph: {
    fontSize: 16,
    lineHeight: 24, // Adjust line height as needed
  },
  additionalRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  additionalImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  additionalTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  additionalText: {
    fontSize: 16,
  },
  additionalAddress: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#189AB4",
  },
  additionalInfoText: {
    fontSize: 16,
    marginTop: 10,
  },
  costText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  additionalInfoText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  // leftButton: {
  //   backgroundColor: "#189AB4",
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  //   marginLeft: 10,
  // },
  rightButton: {
    backgroundColor: "#189AB4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 210,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  offer: {
    color: "gray",
    fontSize: 12,
  },
  offerCross: {
    textDecorationLine: "line-through",
  },
});

export default Cart;