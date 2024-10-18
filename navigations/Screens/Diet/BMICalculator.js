import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
} from "react-native";

const BmiCalculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [caloriesPerServing, setCaloriesPerServing] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [nutritionalFacts, setNutritionalFacts] = useState({
    calories: "",
    protein: "",
    totalFat: "",
    vitaminD: "",
    calcium: "",
    iron: "",
    potassium: "",
  });

  const calculateTotalCalories = () => {
    const total =
      (parseFloat(caloriesPerServing) * parseFloat(servingSize)) / 100; // Assuming serving size is in grams
    const facts = {
      calories: total.toString(),
      protein: "10",
      totalFat: "5",
      vitaminD: "20",
      calcium: "100",
      iron: "2",
      potassium: "150",
    };
    setNutritionalFacts(facts);
  };

  const renderNutritionalFact = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{item.title}</Text>
      <Text>{item.value}</Text>
    </View>
  );

  const nutritionalFactsData = [
    { title: "Calories", value: `${nutritionalFacts.calories} (kcal)` },
    { title: "Protein", value: `${nutritionalFacts.protein} (g)` },
    { title: "Total Fat", value: `${nutritionalFacts.totalFat} (g)` },
    { title: "Vitamin D", value: `${nutritionalFacts.vitaminD} (g)` },
    { title: "Calcium", value: `${nutritionalFacts.calcium} (mg)` },
    { title: "Iron", value: `${nutritionalFacts.iron} (mg)` },
    { title: "Potassium", value: `${nutritionalFacts.potassium} (mg)` },
  ];

  const foodSuggestions = {
    Underweight:
      "Increase intake of high-calorie foods like nuts, avocados, and whole milk.",
    Healthy:
      "Maintain a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains.",
    Overweight:
      "Reduce portion sizes and opt for lower-calorie, nutrient-dense foods like salads, grilled vegetables, and lean proteins.",
    Obese:
      "Focus on portion control and incorporate more exercise into your daily routine. Eat plenty of fruits, vegetables, and lean proteins while limiting processed foods and sugary snacks.",
    "Extremely obese":
      "Seek guidance from a healthcare professional for a personalized diet and exercise plan. Focus on gradual weight loss through portion control, regular exercise, and a balanced diet.",
  };

  const validateForm = () => {
    if (!age || !height || !weight || !gender) {
      alert("All fields are required!");
    } else {
      countBmi();
    }
  };

  const renderBMIStatus = () => {
    let color = "";

    if (bmiResult && bmiResult.result) {
      const bmi = parseFloat(bmiResult.bmi);

      if (bmi < 18.5) {
        color = "blue"; // Underweight
      } else if (bmi >= 18.5 && bmi < 24.9) {
        color = "green"; // Normal weight
      } else if (bmi >= 25 && bmi < 29.9) {
        color = "orange"; // Overweight
      } else {
        color = "red"; // Obese
      }
    }

    return (
      <View style={styles.meterContainer}>
        <View
          style={[
            styles.meter,
            {
              width: `${parseFloat(bmiResult.bmi) * 2}%`,
              backgroundColor: color,
            },
          ]}
        ></View>
      </View>
    );
  };

  const countBmi = () => {
    const bmi = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(
      2
    );

    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
      result = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      result = "Obese";
    } else if (bmi >= 35) {
      result = "Extremely obese";
    }

    setBmiResult({ bmi, result });

    setAge("");
    setHeight("");
    setWeight("");
    setGender("");
  };

  const DailyCalorieTable = ({ bmiResult }) => {
    let tableData = null;

    switch (bmiResult?.result) {
      case "Underweight":
        tableData = [
          { goal: "Maintain weight", calories: "2,425", percentage: "50%" },
          {
            goal: "Mild weight loss",
            perweek: " (0.25 kg/week)",
            calories: "2,175",
            percentage: "90%",
          },
          {
            goal: "Weight loss ",
            perweek: " (0.5 kg/week)",
            calories: "1,925",
            percentage: "79%",
          },
          {
            goal: "Extreme weight loss ",
            perweek: " (1 kg/week)",
            calories: "1,425",
            percentage: "59%",
          },
        ];
        break;
      case "Healthy":
        tableData = [
          { goal: "Maintain weight", calories: "2,425", percentage: "60%" },
          {
            goal: "Mild weight loss",
            perweek: " (0.25 kg/week)",
            calories: "2,175",
            percentage: "90%",
          },
          {
            goal: "Weight loss ",
            perweek: " (0.5 kg/week)",
            calories: "1,925",
            percentage: "79%",
          },
          {
            goal: "Extreme weight loss ",
            perweek: " (1 kg/week)",
            calories: "1,425",
            percentage: "59%",
          },
        ];
        break;
      case "Overweight":
        tableData = [
          { goal: "Maintain weight", calories: "2,425", percentage: "70%" },
          {
            goal: "Mild weight loss ",
            perweek: " (0.25 kg/week)",
            calories: "2,175",
            percentage: "90%",
          },
          {
            goal: "Weight loss",
            perweek: " (0.5 kg/week)",
            calories: "1,925",
            percentage: "79%",
          },
          {
            goal: "Extreme weight loss ",
            perweek: " (1 kg/week)",
            calories: "1,425",
            percentage: "59%",
          },
        ];
        break;
      case "Obese":
        tableData = [
          { goal: "Maintain weight", calories: "2,425", percentage: "80%" },
          {
            goal: "Mild weight loss ",
            perweek: "(0.25 kg/week)",
            calories: "2,175",
            percentage: "90%",
          },
          {
            goal: "Weight loss ",
            perweek: "(0.5 kg/week)",
            calories: "1,925",
            percentage: "79%",
          },
          {
            goal: "Extreme weight loss",
            perweek: " (1 kg/week)",
            calories: "1,425",
            percentage: "59%",
          },
        ];
        break;
      case "Extremely obese":
        tableData = [
          { goal: "Maintain weight", calories: "2,425", percentage: "90%" },
          {
            goal: "Mild weight loss",
            perweek: "(0.25 kg/week)",
            calories: "2,175",
            percentage: "90%",
          },
          {
            goal: "Weight loss",
            perweek: "(0.5 kg/week)",
            calories: "1,925",
            percentage: "79%",
          },
          {
            goal: "Extreme weight loss",
            perweek: "(1 kg/week)",
            calories: "1,425",
            percentage: "59%",
          },
        ];
        break;
      default:
        break;
    }

    if (!tableData) return null;

    return (
      <View style={styles.Container1}>
        <View style={styles.calorieTable}>
          <Text style={styles.tableHeader}>Daily Calorie Estimates</Text>
          {tableData.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View>
                <Text style={styles.tableCell}>{item.goal}</Text>
                <Text style={styles.perweek}>{item.perweek}</Text>
              </View>
              <View style={styles.tableCell2}>
                <Text style={styles.mainText}>{item.calories}</Text>
                <Text style={styles.subText}>
                 {item.percentage}
                </Text>
                <Text style={styles.subText}>calories per day</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Text style={styles.headerText}>BMI Calculator</Text>
        </View> */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/doctor Images/bmi_calculator__1__720.png")}
            style={styles.image}
          />
        </View>
       
        <View style={styles.form}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your age"
              onChangeText={setAge}
              value={age}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your height"
              onChangeText={setHeight}
              value={height}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your weight"
              onChangeText={setWeight}
              value={weight}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "male" && styles.selectedGender,
              ]}
              onPress={() => setGender("male")}
            >
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "female" && styles.selectedGender,
              ]}
              onPress={() => setGender("female")}
            >
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={validateForm}>
            <Text style={styles.submitButtonText}>Calculate BMI</Text>
          </TouchableOpacity>
          {bmiResult && (
            <View style={styles.resultContainer}>
              {renderBMIStatus()}

              <Text style={styles.resultLabel}>BMI:</Text>
              <Text style={styles.resultText}>{bmiResult.bmi}</Text>

              <Text style={styles.resultLabel}>Result:</Text>
              <Text style={styles.resultText}>{bmiResult.result}</Text>

              <Text style={styles.resultLabel}>Food Suggestions:</Text>
              <Text style={styles.resultText}>
                {foodSuggestions[bmiResult.result]}
              </Text>

              <DailyCalorieTable bmiResult={bmiResult} />
            </View>
          )}
        </View>
        <View style={styles.imageContainer2}>
          <Image
            source={require("../../../assets/doctor Images/image_720.png")}
            style={styles.image}
          />
        </View>
       
        <View style={styles.container2}>
          <Text style={styles.facts}>Nutritional Facts:</Text>

          <Text style={styles.label}>Food Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFoodName(text)}
            value={foodName}
          />
          <Text style={styles.label}>Calories per Serving:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCaloriesPerServing(text)}
            value={caloriesPerServing}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Serving Size (g):</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setServingSize(text)}
            value={servingSize}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={calculateTotalCalories}
          >
            <Text style={styles.buttonText}>Calculate Total Calories</Text>
          </TouchableOpacity>
          <FlatList
            data={nutritionalFactsData}
            renderItem={renderNutritionalFact}
            keyExtractor={(item, index) => index.toString()}
            style={styles.nutritionalFacts}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#189ab4",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
  },
  imageContainer2: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    elevation: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  textInput: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf7f4",
    padding: 10,
    margin: 10,
  },
  selectedGender: {
    backgroundColor: "#189ab4",
  },
  genderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#189ab4",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  resultContainer: {
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
  },
  meterContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginTop: 10,
  },
  meter: {
    height: "100%",
    borderRadius: 10,
  },
  container2: {
    flex: 1,
    width: "90%",
    // paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  facts: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#189ab4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  calorieTable: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",

    backgroundColor: "white",
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#189ab4",
    paddingVertical: 10,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  tableCell: {
    fontWeight: "bold",
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    fontStyle: "italic",
  },
  tableCell2: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  tableCell12: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  Container1: {
    width: "100%",
    marginTop: 20,
  },
  perweek: {
    color: "#ccc",
  },
  nutritionalFacts: {},
});

export default BmiCalculator;
