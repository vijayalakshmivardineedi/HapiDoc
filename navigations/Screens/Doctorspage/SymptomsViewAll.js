import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const SymptomsViewAll = () => {
  const navigation = useNavigation();

   const handleBackArrowPress = () => {
     // Handle the press event for the back arrow
     navigation.goBack();
   };

  const handleSearchBarPress = () => {
    navigation.navigate("SearchSymptoms");
  };
   const handleContainerPress = () => {
    
     navigation.navigate("SymptomsPage");
   };


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#eaf7f4" }}>
      {/* <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackArrowPress}
        >
          <Ionicons name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>SELECT SYMPTOM</Text>
      </View> */}

      <TouchableOpacity
        style={styles.searchContainer}
        onPress={handleSearchBarPress}
      >
        <Icon name="search" size={24} color="#189AB4" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your Symptoms"
        />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/doctor Images/health.png")}
          style={styles.image}
        />
        <Text style={styles.imageText}>Common Health Issues</Text>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Headache</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Hair Loss</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Sore Throat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Stomach ache</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Cough</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Sneezing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Fever</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText}>Chest Pain</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer2}>
        <Image
          source={require("../../../assets/doctor Images/skinissues.png")}
          style={styles.image2}
        />
        <Text style={styles.imageText2}>Dermatology / Skin</Text>
      </View>

      <View style={styles.rowContainer2}>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Pimple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Wrinkles on skin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer2}>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Nail Biting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Sore lip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer2}>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Hair Loss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container2}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText2}>Skin moles</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer3}>
        <Image
          source={require("../../../assets/doctor Images/throat.png")}
          style={styles.image3}
        />
        <Text style={styles.imageText3}>Ear Nose and Throat</Text>
      </View>

      <View style={styles.rowContainer3}>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Ear Swelling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Throat Swelling</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer3}>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Nose Pain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Sore Throat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer3}>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Face Pain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Swollen Tonsils</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer3}>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Sinus Headaches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container3}
          onPress={handleContainerPress}
        >
          <Text style={styles.containerText3}>Headache</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  backButton: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  imageText: {
    fontSize: 18,
    color: "#189ab4",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  containerText: {
    fontSize: 16,
    color: "black",
  },



  imageContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  image2: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  imageText2: {
    fontSize: 18,
    color: "#189ab4",
    fontWeight: "bold",
  },
  rowContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity2: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  containerText2: {
    fontSize: 16,
    color: "black",
  },


 rowContainer3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom:10,
  },
  container3: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity3: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  containerText3: {
    fontSize: 16,
    color: "black",
  },

  imageContainer3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  image3: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  imageText3: {
    fontSize: 18,
    color: "#189ab4",
    fontWeight: "bold",
  },
 
  
});

export default SymptomsViewAll;
