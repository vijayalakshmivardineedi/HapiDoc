import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SearchLabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  const data = [
    "aPTT",
    "Appearance RANDOM-URINE",
    "aPTT test",
    "Lipid Profile with Apolipo",
    "APL Antibodies",
    "APL Panel",
    "APT Downey Test Stool",
    "Boh Panel",
    "Ketone Bodies",
    "Amylase Body-FLUID",
    "Albumin BODY-FLUID",
    "Sodium BODY-FLUID",
    "cll Blood",
    "Clostridium Difficile",
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const navigateToAnotherPage = () => {
    // Navigate to another page when a list container is clicked
    navigation.navigate("Packages");
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
        <View style={styles.listContainer}>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemContainer}
                onPress={navigateToAnotherPage}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResults}>No results found</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f4",
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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