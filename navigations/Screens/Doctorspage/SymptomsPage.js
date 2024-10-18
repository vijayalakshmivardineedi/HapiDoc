import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
import { useNavigation } from '@react-navigation/native';


const SymptomsPage = () => {
const navigation = useNavigation(); 

const handleSearchBarPress = () => {
 
  navigation.navigate("SearchSymptoms");
};
 const goBack = () => {
   navigation.goBack(); 
 };
  const handleContainerPress = () => {
   
    navigation.navigate("DoctorList");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>CHOOSE OTHER SYMPTOM</Text>
      </View> */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cough</Text>
      </TouchableOpacity>
      <Text style={styles.helperText}>
        Help us find a doctor by sharing if you are experiencing any other
        symptoms in addition to cough
      </Text>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={24}
            color="#189ab4"
          />
          <Text style={styles.iconText}>No other symptoms</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.searchContainer}
        onPress={handleSearchBarPress}
      >
        <Icon name="search" size={24} color="#189AB4" />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </TouchableOpacity>
      <Text style={styles.additionalText}>Others</Text>
      <View style={styles.centeredRowContainer}>
        <View style={styles.columnContainer}>
        
            <TouchableOpacity
              style={styles.innerContainer}
              onPress={handleContainerPress}
            >
              <Text style={styles.containerText}>Fever</Text>
            </TouchableOpacity>
         
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Eyes pain</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Stuffuy nose</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Sore throat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centeredRowContainer}>
        <View style={styles.columnContainer}>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Headache</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Ear pain</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Tiredness</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}onPress={handleContainerPress}>
            <Text style={styles.containerText}>Vomtimg</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7F4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#189AB4",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    margin: 20,
    width: 100,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  helperText: {
    marginLeft: 20,
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  additionalText: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
  centeredRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  columnContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    justifyContent: "center",
    width: "40%",
  },
  innerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerText: {
    textAlign: "center",
  },
});
export default SymptomsPage;
