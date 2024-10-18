import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const BlogPage = () => {
    const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("BlogContent");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerBlog}>
        {/* <Text style={styles.header1}>Categories</Text> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/ayurveda_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Ayurveda</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/health___nutrition_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Health & Nutrition</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/women-health0_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Women Care</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/health_devices0_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Health Devices</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/personalcare_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Personal Care</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/baby-care_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Mom & BabyCare</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/health_days_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Special Days</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/doctor Images/mens-grooming_720.png")}
              style={styles.image1}
            />
            <Text style={styles.text}>Men's Grooming</Text>
          </View>
          {/* Repeat the above View for each category */}
        </ScrollView>
      </View>

      <Text style={styles.header6}>Latest Articles</Text>
      <ScrollView style={styles.container6}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.card6}>
            <Image
              source={require("../../../assets/doctor Images/blog1.png")}
              style={styles.cardImage6}
            />
            <View style={styles.cardContent6}>
              <Text style={styles.cardText6}>
                Don't Buy Glucose Test Strips: Upgrade To A Smart Glucometer
              </Text>
              <Text style={styles.subText}>25.04.24</Text>
              <Text style={styles.relatedText}>
                Regular blood sugar monitoring with glucometers enables you to
                make informed decisions on diabetes management and lifestyle
                adjustments ...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Repeat the above TouchableOpacity for each article */}
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.card6}>
            <Image
              source={require("../../../assets/doctor Images/blog2.png")}
              style={styles.cardImage6}
            />
            <View style={styles.cardContent6}>
              <Text style={styles.cardText6}>
                Ingredients To Look For While Buying Skincare Products?
              </Text>
              <Text style={styles.subText}>25.04.24</Text>
              <Text style={styles.relatedText}>
                Discover the key ingredients to look for in skincare products
                for a healthy and radiant complexion...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Repeat the above TouchableOpacity for each article */}
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.card6}>
            <Image
              source={require("../../../assets/doctor Images/blog3.png")}
              style={styles.cardImage6}
            />
            <View style={styles.cardContent6}>
              <Text style={styles.cardText6}>
                Step-by-step Skincare Routine
              </Text>
              <Text style={styles.subText}>26.04.24</Text>
              <Text style={styles.relatedText}>
                Follow this step-by-step guide for a glowing and healthy skin...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.card6}>
            <Image
              source={require("../../../assets/doctor Images/blog4.png")}
              style={styles.cardImage6}
            />
            <View style={styles.cardContent6}>
              <Text style={styles.cardText6}>Vitamin B12: Uses, Benefits</Text>
              <Text style={styles.subText}>25.04.24</Text>
              <Text style={styles.relatedText}>
                Follow this step-by-step guide for a glowing and healthy skin...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.card6}>
            <Image
              source={require("../../../assets/doctor Images/blog5.png")}
              style={styles.cardImage6}
            />
            <View style={styles.cardContent6}>
              <Text style={styles.cardText6}>10-Minute Skincare Routine</Text>
              <Text style={styles.subText}>24.04.24</Text>
              <Text style={styles.relatedText}>
                Follow this step-by-step guide for a glowing and healthy skin...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Repeat the above TouchableOpacity for each article */}
        {/* Repeat the above TouchableOpacity for each article */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7F9",
  },
  headerBlog: {
    padding: 20,
    // marginTop: 40,
  },
  imageContainer: {
    marginRight: 10,
    marginTop: 20,
    alignItems: "center",
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 10,
  },
  header1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container6: {
    flex: 1,
    backgroundColor: "#EAF7F9",
    paddingTop: 20,
  },
  card6: {
    width: "95%", // Adjusted width to take up 90% of the screen width
    alignSelf: "center", // Center the card horizontally
    height: 350,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    
    overflow: "hidden", // Ensure image corners don't protrude
  },
  cardImage6: {
    width: "120%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent6: {
    padding: 10,
  },
  cardText6: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  header6: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  subText: {
    color: "#808080",
    fontSize: 12,
    marginTop: 5,
  },
  relatedText: {
    color: "#189AB4",
    fontSize: 14,
    marginTop: 5,
  },
});

export default BlogPage;
