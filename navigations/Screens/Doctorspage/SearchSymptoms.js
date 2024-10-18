import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchSymptoms = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = (text) => {
    setSearchText(text);
   
    const filteredResults = mockSymptoms.filter((symptom) =>
      symptom.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

 
  const clearSearchQuery = () => {
    setSearchText("");
  };

 
  const goBack = () => {
    navigation.goBack(); 
  };

 
  const handleSymptomClick = (symptom) => {
   
    navigation.navigate("DoctorList", { symptom });
  };
 
  const mockSymptoms = [
    "Fever",
    "Cough",
    "Headache",
    "Fatigue",
    "Shortness of breath",
    "Sore throat",
    "Loss of taste or smell",
    "Feeling cold",
    "Feeling weak",
    "Acid reflux",
    "Anal bleeading",
    "Backache",
    "Blocked nose",
    "Burping",
    "Burning eyes",
    "Chills",
    "Chest pain",
    "Common cold",
    "Dry cough",
    "Dry Tongue",
    "Dry throat",
    "Dandruff",
    "Knee pain",
    "Muscle pain",
    "Ear pain",
    "Chest pain",
    "Gum pain",
    "Stomach pain",
    "Heartburn",
    "Seizure",
    "Sweating",
  ];

 const renderSearchResults = () => {
   const rows = [];
   for (let i = 0; i < searchResults.length; i += 2) {
     const symptom1 = searchResults[i];
     const symptom2 = searchResults[i + 1];
     const row = (
       <View key={i / 2} style={styles.rowContainer}>
         <TouchableOpacity
           style={styles.itemContainer}
           onPress={() => handleSymptomClick(symptom1)}
         >
           <Text style={styles.itemText}>{symptom1}</Text>
         </TouchableOpacity>
         {symptom2 && (
           <TouchableOpacity
             style={styles.itemContainer}
             onPress={() => handleSymptomClick(symptom2)}
           >
             <Text style={styles.itemText}>{symptom2}</Text>
           </TouchableOpacity>
         )}
       </View>
     );
     rows.push(row);
   }
   return rows;
 };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#189ab4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>SELECT SYMPTOM</Text>
      </View> */}

      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#189ab4"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your symptoms"
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearSearchQuery}
          >
            <Icon name="close-circle" size={20} color="#189ab4" />
          </TouchableOpacity>
        )}
      </View>
      {searchText.length > 0 && (
        <ScrollView style={styles.resultsContainer}>
          {searchResults.length > 0 ? (
            renderSearchResults()
          ) : (
            <Text style={styles.noResultsText}>No results found</Text>
          )}
        </ScrollView>
      )}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#189ab4",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    position: "relative",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  clearButton: {
    position: "absolute",
    right: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    textAlign: "center",
  },
  resultsContainer: {
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 20,
  },
  noResultsText: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
});

export default SearchSymptoms;
