import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const Categories = () => {
  return (
    <View>
      <View style={styles.screen}>
        {/* <View style={styles.container}>
          <View style={styles.left}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.title}>Categories</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="search" size={24} color="black" />
            <Ionicons name="cart" size={24} color="black" />
          </View>
        </View> */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.textContainer1}>
              <Text style={styles.mainText1}>Medicine & Essential</Text>
            </View>
            <View style={styles.cardContainerMain}>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/medicine1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text> Buy Medicine</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/upload1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>Upload{"\n"}prescription</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/order1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>My Orders</Text>
                </View>
              </View>
            </View>

            <Text style={styles.mainText2}>Doctor Consult</Text>
            <View style={styles.cardContainerMain}>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/consult1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text> Online Consult</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/hospital1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>hospital Visit</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/symptoms.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>Check symptoms</Text>
                </View>
              </View>
            </View>
            <Text style={styles.mainText2}>Lab Tests and Radiology</Text>
            <View style={styles.cardContainerMain}>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/2544087.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text> Home Sample{"\n"}Collection</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/radilogy1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>Radiology</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/packages1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>Browse Test{"\n"}Packages</Text>
                </View>
              </View>
            </View>

            <Text style={styles.mainText2}>Manage Health</Text>
            <View style={styles.cardContainerMain}>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/upload1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text> prescription</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/medicine1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>My Medicine</Text>
                </View>
              </View>
              <View style={styles.cardConfirmation}>
                <View style={styles.cardImageNeed}>
                  <Image
                    source={require("../../../assets/Lab Icons/reports1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer}>
                  <Text>Test Reports</Text>
                </View>
              </View>
            </View>

            <View style={styles.container3}>
              <View style={styles.header3}>
                <Text style={styles.mainText3}>Insurance</Text>
              </View>

              <View style={styles.cardConfirmation2}>
                <View style={styles.cardImageNeed2}>
                  <Image
                    source={require("../../../assets/Lab Icons/insurance1.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.CardTextContainer2}>
                  <Text> Insurance</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
   
    backgroundColor: "#eaf7f4", // Change to whatever color you desire
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "3%",
    marginTop: 10,
  },
  mainText1: {
    fontWeight: "bold",
    marginHorizontal: 10,
    fontSize: 20,
    marginLeft: 23,
    marginTop: 5,
  },
  cardContainerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center align items horizontally
  },
  cardConfirmation: {
    width: "28%",
    borderRadius: 10,
    height: 93,
    borderWidth: 1,
    borderColor: "#ccc",
    
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center", // Center align items vertically
    margin: 5,
  },
  CardTextContainer: {
    marginTop: 5,
    textAlign: "center",
  },
  cardImageNeed: {
    height: 40,
    width: 40,
  },
  textContainer1: {
    flexDirection: "row",
    marginTop: 10,
  },
  container2: {
    marginTop: 10,
    flexDirection: "row",
  },
  header2: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText2: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
  },

  container3: {
    marginTop: 4,
  },
  header3: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText3: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
  },
  cardConfirmation2: {
    width: "28%",
    borderRadius: 10,
    height: 93,
    
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center", // Center align items vertically
    margin: 5,
    marginLeft: 20,
  },
  CardTextContainer2: {
    marginTop: 5,
    textAlign: "center",
  },
  cardImageNeed2: {
    height: 40,
    width: 40,
  },
});

export default Categories;