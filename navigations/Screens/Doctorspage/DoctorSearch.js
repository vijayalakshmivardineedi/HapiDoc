import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image, 
  ScrollView, 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  const data = [
    "",
    {
      name: "General Physician",
      image: require("../../../assets/doctor Images/Dermatology.jpg"),
    },
    { name: "Cardiology", image: require("../../../assets/doctor Images/Cardiology.jpg") },
    { name: "Neurology", image: require("../../../assets/doctor Images/Neurology.jpg") },
    {
      name: "Orthopedics",
      image: require("../../../assets/doctor Images/orthopedics.jpg"),
    },
    { name: "Cough", image: require("../../../assets/doctor Images/cough.png") },
    { name: "Runnynose", image: require("../../../assets/doctor Images/Runnynose1.png") },
    { name: "Stress", image: require("../../../assets/doctor Images/Stress3.png") },
    {
      name: "Throat-Pain",
      image: require("../../../assets/doctor Images/throat1.png"),
    },
    { name: "Fever", image: require("../../../assets/doctor Images/sick.png") },
    {
      name: "Irregular Periods",
      image: require("../../../assets/doctor Images/schedule.png"),
    },
    { name: "Hair Fall", image: require("../../../assets/doctor Images/hair-loss.png") },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter(
      (item) => item && item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const navigateToAnotherPage = () => {
   
    navigation.navigate("DoctorList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={24}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#999"
          onChangeText={handleSearch}
          value={searchQuery}
        />
        {searchQuery !== "" && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={24} color="#999" />
          </TouchableOpacity>
        )}
      </View>
      {searchQuery !== "" && (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.listContainer}>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.itemContainer}
                  onPress={navigateToAnotherPage}
                >
                  <Image source={item.image} style={styles.itemImage} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noResults}>No results found</Text>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f4",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 85,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50, // Increased height
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  listContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius:5,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  noResults: {
    paddingVertical: 10,
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
});
