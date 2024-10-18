import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import { useNavigation } from "@react-navigation/native";

const TestsViewAll = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={{flex:1,backgroundColor:"#eaf7f9"}}>
      <View style={styles.screen}>
      {/* <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Doctor Created Health Checks</Text>
        </View>
        <View style={styles.right}>
          <Ionicons name="search" size={24} color="black" />
          <Ionicons name="cart" size={24} color="black" />
        </View>
      </View> */}


      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/fullbody1.webp")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text> Body{"\n"}Checkup</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/diabetes1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Diabetes</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/women.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Women's Health</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/thyroid1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Thyroid</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/Tax Saver.webp")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Tax Saver</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/pcod1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>PCOD</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/pregency1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Pregnancy</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/liver1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Liver</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/bone1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Bone</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/heart1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Heart</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/jointpain1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Joint Pain</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/infection1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Infection</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/lungs1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Lungs</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/stress1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Stress</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/covid1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Covid-19</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainerMain}>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/immunity1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Immunity</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/kidney1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Kidney</Text>
            </View>
          </View>
          <View style={styles.cardConfirmation}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../../assets/Lab Icons/vitamin1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Vitamin</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    
    backgroundColor:"#eaf7f4",
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
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
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
  scrollView: {
    paddingHorizontal: 1,
    paddingVertical: 3, // Adjust vertical padding as needed
  },
});

export default TestsViewAll;