import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import the desired icon from the library
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Filters = () => {
  const navigation = useNavigation();

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [showApplyButton, setShowApplyButton] = useState(false); // State for Apply button visibility
  const [ShowCategory, setShowCategory] = useState(false); // State for showing Must Have Tests checkboxes
  
  const handlePress1 = () => {
    setChecked1(!checked1);
    setShowApplyButton(true);
  };

  const handlePress2 = () => {
    setChecked2(!checked2);
    setShowApplyButton(true);
  };
  const handlePress3 = () => {
    setChecked3(!checked3);
    setShowApplyButton(true);
  };
  const handlePress4 = () => {
    setChecked4(!checked4);
    setShowApplyButton(true);
  };
  const handlePress5 = () => {
    setChecked5(!checked5);
    setShowApplyButton(true);
  };
  const handlePress6 = () => {
    setChecked6(!checked6);
    setShowApplyButton(true);
  };
  const handlePress7 = () => {
    setChecked7(!checked7);
    setShowApplyButton(true);
  };
  const handlePress8 = () => {
    setChecked8(!checked8);
    setShowApplyButton(true);
  };
  const handleCategoryPress = () => {
    // Navigate to the desired screen
    // navigation.navigate("FilterPage");
    setShowCategory(true);
  };
 
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.heading}> Filter by</Text>
        <TouchableOpacity style={styles.clearButton1}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.text}>Must have tests</Text>
          <View style={styles.half1}>
            <TouchableOpacity
              style={styles.category}
              onPress={handleCategoryPress}
            >
              <Text style={styles.categoryText}>Category</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.half2}>
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              size={24}
              color="#333"
              style={styles.searchIcon}
            />
            <TextInput style={styles.searchInput} placeholder="Search tests" />
          </View>

          {ShowCategory && (
            <View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked1 ? "checked" : "unchecked"}
                  onPress={handlePress1}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Complete Blood count</Text>
              </View>

              
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={handlePress2}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Hiv Rapid</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked3 ? "checked" : "unchecked"}
                  onPress={handlePress3}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Glucose, Fasting</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked4 ? "checked" : "unchecked"}
                  onPress={handlePress4}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Lipid Profile</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked5 ? "checked" : "unchecked"}
                  onPress={handlePress5}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Liver Function Test</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked6 ? "checked" : "unchecked"}
                  onPress={handlePress6}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Urine Test</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked7 ? "checked" : "unchecked"}
                  onPress={handlePress7}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Thyroid Profile</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked8 ? "checked" : "unchecked"}
                  onPress={handlePress8}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>HbA1c, Glycated Hemoglobin</Text>
              </View>
            </View>
          )}

          {!ShowCategory && (
            <View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked1 ? "checked" : "unchecked"}
                  onPress={handlePress1}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Complete Blood count</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={handlePress2}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Hiv Rapid</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked3 ? "checked" : "unchecked"}
                  onPress={handlePress3}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Glucose, Fasting</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked4 ? "checked" : "unchecked"}
                  onPress={handlePress4}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Lipid Profile</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked5 ? "checked" : "unchecked"}
                  onPress={handlePress5}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Liver Function Test</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked6 ? "checked" : "unchecked"}
                  onPress={handlePress6}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Urine Test</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked7 ? "checked" : "unchecked"}
                  onPress={handlePress7}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>Thyroid Profile</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked8 ? "checked" : "unchecked"}
                  onPress={handlePress8}
                  color="#189AB4"
                  uncheckedColor="#189AB4"
                />
                <Text style={styles.label}>HbA1c, Glycated Hemoglobin</Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {showApplyButton && (
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 30,
  },
  backButton: {
    padding: 10,
  },
  buttonText: {
    color: "#333",
  },
  heading: {
    flex: 1,
    textAlign: "center",
    color: "#333",
    fontSize: 18,
    marginRight:140,
  },
  clearButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  half1: {
    flex: 1,
    backgroundColor: "#eaf7f4",
    justifyContent: "center",
    alignItems: "center",
  },
  half2: {
    flex: 2,
  },
  column: {
    flexDirection: "column",
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginLeft: 5,
    width: 190,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
    alignItems: "center",
  },
  label: {
    margin: 8,
  },
  category: {
    backgroundColor: "#eaf7f4",
    borderRadius: 5,
    marginBottom: "490%",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: "#189AB4",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1, // Equal flex for both buttons
    marginRight: 5, // Add margin to separate buttons
  },
  clearButton: {
    backgroundColor: "#eaf7f4",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1, // Equal flex for both buttons
    marginLeft: 5, // Add margin to separate buttons
  },
  clearButton1:{
marginRight:30,
  },
});

export default Filters;