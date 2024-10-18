import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Filterpage = () => {
      const navigation = useNavigation();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [filters, setFilters] = useState({
    experience: {},
    availability: null,
    fees: null,
    areaOfExpertise: null,
    gender: null,
    language: null,
    city: null,
    facility: null,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const clearFilters = () => {
    setFilters({
      experience: {},
      availability: null,
      fees: null,
      areaOfExpertise: null,
      gender: null,
      language: null,
      city: null,
      facility: null,
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    });
  };

  const [showApplyButton, setShowApplyButton] = useState(false);

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

  const applyFilters = () => {
    // console.log("Applied Filters:", filters);
    navigation.navigate("DoctorList");
  };
 const handleGoBack = () => {
   navigation.goBack();
 };

 

  const refreshFilters = () => {
    setFilters({
      experience: {},
      availability: null,
      fees: null,
      areaOfExpertise: null,
      gender: null,
      language: null,
      city: null,
      facility: null,
    });
  };

  const handleFilterSelection = (filter) => {
    setFilters((prevFilters) => {
      const updatedFilters = {};
      Object.keys(prevFilters).forEach((key) => {
        updatedFilters[key] = key === filter ? !prevFilters[key] : null;
      });
      return updatedFilters;
    });
  };

  const toggleFilterOption = (option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [option]: !prevFilters[option],
    }));
  };

  const handleExperienceSelection = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      experience: {
        ...prevFilters.experience,
        [value]: !prevFilters.experience[value],
      },
    }));
  };

  const handleAvailabilitySelection = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: prevFilters.availability === value ? null : value,
    }));
  };

  const handleFeesSelection = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      fees: prevFilters.fees === value ? null : value,
    }));
  };

  const handleLanguageSelection = (language) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      language: prevFilters.language === language ? null : language,
    }));
  };

  const handleFacilitySelection = (facilityType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      facility: facilityType,
    }));
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={[styles.closeButton]} onPress={handleGoBack}>
          <Icon name="close-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={refreshFilters} style={styles.iconContainer}>
          <Icon name="refresh-outline" size={24} color="black" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.filtersContainer}>
        <View style={styles.leftColumn}>
          <TouchableOpacity
            onPress={() => handleFilterSelection("experience")}
            style={[
              styles.filterRow,
              !!filters.experience && styles.selectedFilter,
              styles.firstRow,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.experience && styles.selectedText,
              ]}
            >
              Experience
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("availability")}
            style={[
              styles.filterRow,
              !!filters.availability && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.availability && styles.selectedText,
              ]}
            >
              Availability
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("fees")}
            style={[styles.filterRow, !!filters.fees && styles.selectedFilter]}
          >
            <Text
              style={[styles.filterText, !!filters.fees && styles.selectedText]}
            >
              Fees
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("areaOfExpertise")}
            style={[
              styles.filterRow,
              !!filters.areaOfExpertise && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.areaOfExpertise && styles.selectedText,
              ]}
            >
              Area of Expertise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("gender")}
            style={[
              styles.filterRow,
              !!filters.gender && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.gender && styles.selectedText,
              ]}
            >
              Gender
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("language")}
            style={[
              styles.filterRow,
              !!filters.language && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.language && styles.selectedText,
              ]}
            >
              Language
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("city")}
            style={[styles.filterRow, !!filters.city && styles.selectedFilter]}
          >
            <Text
              style={[styles.filterText, !!filters.city && styles.selectedText]}
            >
              City
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFilterSelection("facility")}
            style={[
              styles.filterRow,
              !!filters.facility && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                !!filters.facility && styles.selectedText,
              ]}
            >
              Facility
            </Text>
          </TouchableOpacity>
          <View style={styles.constantBlock} />
        </View>
        <View style={styles.rightColumn}>
          {filters.experience && (
            <View style={styles.experienceCard}>
              <Text style={styles.experienceHeader}>Experience</Text>
              <View style={styles.experienceBlockRow}>
                <TouchableOpacity
                  style={[
                    styles.experienceBlock,
                    filters.experience &&
                      filters.experience["0-5"] &&
                      styles.selectedExperience,
                  ]}
                  onPress={() => handleExperienceSelection("0-5")}
                >
                  <Text
                    style={[
                      styles.experienceText,
                      filters.experience &&
                        filters.experience["0-5"] &&
                        styles.selectedExperienceText,
                    ]}
                  >
                    0-5
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.experienceBlock,
                    filters.experience &&
                      filters.experience["6-10"] &&
                      styles.selectedExperience,
                  ]}
                  onPress={() => handleExperienceSelection("6-10")}
                >
                  <Text
                    style={[
                      styles.experienceText,
                      filters.experience &&
                        filters.experience["6-10"] &&
                        styles.selectedExperienceText,
                    ]}
                  >
                    6-10
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.experienceBlock,
                    filters.experience &&
                      filters.experience["11-15"] &&
                      styles.selectedExperience,
                  ]}
                  onPress={() => handleExperienceSelection("11-15")}
                >
                  <Text
                    style={[
                      styles.experienceText,
                      filters.experience &&
                        filters.experience["11-15"] &&
                        styles.selectedExperienceText,
                    ]}
                  >
                    11-15
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.experienceBlockRow}>
                <TouchableOpacity
                  style={[
                    styles.experienceBlock,
                    filters.experience &&
                      filters.experience["16+"] &&
                      styles.selectedExperience,
                  ]}
                  onPress={() => handleExperienceSelection("16+")}
                >
                  <Text
                    style={[
                      styles.experienceText,
                      filters.experience &&
                        filters.experience["16+"] &&
                        styles.selectedExperienceText,
                    ]}
                  >
                    16+
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.availabilityCard}>
            {filters.availability && (
              <>
                <Text style={styles.availabilityHeader}>Availability</Text>
                <View style={styles.availabilityRow}>
                  <TouchableOpacity
                    onPress={() => handleAvailabilitySelection("Now")}
                    style={[
                      styles.availabilityOption,
                      filters.availability === "Now" &&
                        styles.selectedAvailability,
                    ]}
                  >
                    <Text
                      style={[
                        styles.availabilityText,
                        filters.availability === "Now" &&
                          styles.selectedAvailabilityText,
                      ]}
                    >
                      Now
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleAvailabilitySelection("Today")}
                    style={[
                      styles.availabilityOption,
                      filters.availability === "Today" &&
                        styles.selectedAvailability,
                    ]}
                  >
                    <Text
                      style={[
                        styles.availabilityText,
                        filters.availability === "Today" &&
                          styles.selectedAvailabilityText,
                      ]}
                    >
                      Today
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.availabilityRow}>
                  <TouchableOpacity
                    onPress={() => handleAvailabilitySelection("Tomorrow")}
                    style={[
                      styles.availabilityOption,
                      filters.availability === "Tomorrow" &&
                        styles.selectedAvailability,
                    ]}
                  >
                    <Text
                      style={[
                        styles.availabilityText,
                        filters.availability === "Tomorrow" &&
                          styles.selectedAvailabilityText,
                      ]}
                    >
                      Tomorrow
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.availabilityRow}>
                  <TouchableOpacity
                    onPress={() => handleAvailabilitySelection("Next 3 Days")}
                    style={[
                      styles.availabilityOption,
                      filters.availability === "Next 3 Days" &&
                        styles.selectedAvailability,
                    ]}
                  >
                    <Text
                      style={[
                        styles.availabilityText,
                        filters.availability === "Next 3 Days" &&
                          styles.selectedAvailabilityText,
                      ]}
                    >
                      Next 3 Days
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          <View style={styles.feesCard}>
            {filters.fees && (
              <>
                <Text style={styles.feesHeader}>Fees</Text>
                <TouchableOpacity
                  onPress={() => handleFeesSelection("100-500")}
                  style={[
                    styles.feesOption,
                    filters.fees === "100-500" && styles.selectedFees,
                  ]}
                >
                  <Text
                    style={[
                      styles.feesText,
                      filters.fees === "100-500" && styles.selectedFeesText,
                    ]}
                  >
                    100-500
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFeesSelection("500-1000")}
                  style={[
                    styles.feesOption,
                    filters.fees === "500-1000" && styles.selectedFees,
                  ]}
                >
                  <Text
                    style={[
                      styles.feesText,
                      filters.fees === "500-1000" && styles.selectedFeesText,
                    ]}
                  >
                    500-1000
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFeesSelection("1000+")}
                  style={[
                    styles.feesOption,
                    filters.fees === "1000+" && styles.selectedFees,
                  ]}
                >
                  <Text
                    style={[
                      styles.feesText,
                      filters.fees === "1000+" && styles.selectedFeesText,
                    ]}
                  >
                    1000+
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <View>
            {filters.areaOfExpertise && (
              <View style={styles.areaOfExpertiseCard}>
                <View style={styles.areaOfExpertiseHeader}>
                  <Icon name="search" size={20} color="#189AB4" />
                  <TextInput style={styles.searchText} placeholder="Search" />
                </View>
                <View style={styles.divider} />
                <Text style={styles.categoryText}>Cardiology</Text>
                <View style={styles.divider} />
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkbox}>
                    <Checkbox
                      status={checked1 ? "checked" : "unchecked"}
                      onPress={handlePress1}
                      color="#189AB4"
                      uncheckedColor="#189AB4"
                    />
                    <Text style={styles.checkboxText}>
                      Allergy and Immunology Nur Practitioner
                    </Text>
                  </View>
                  <View style={styles.checkbox}>
                    <Checkbox
                      status={checked2 ? "checked" : "unchecked"}
                      onPress={handlePress2}
                      color="#189AB4"
                      uncheckedColor="#189AB4"
                    />
                    <Text style={styles.checkboxText}>
                      Allergy and Immunology Specialist
                    </Text>
                  </View>
                  <View style={styles.checkbox}>
                    <Checkbox
                      status={checked3 ? "checked" : "unchecked"}
                      onPress={handlePress3}
                      color="#189AB4"
                      uncheckedColor="#189AB4"
                    />
                    <Text style={styles.checkboxText}>Bariatric Dietitian</Text>
                  </View>
                  <View style={styles.checkbox}>
                    <Checkbox
                      status={checked4 ? "checked" : "unchecked"}
                      onPress={handlePress4}
                      color="#189AB4"
                      uncheckedColor="#189AB4"
                    />
                    <Text style={styles.checkboxText}>Clinical Dietetics</Text>
                  </View>
                  <View style={styles.checkbox}>
                    <Checkbox
                      status={checked5 ? "checked" : "unchecked"}
                      onPress={handlePress5}
                      color="#189AB4"
                      uncheckedColor="#189AB4"
                    />
                    <Text style={styles.checkboxText}>
                      Critical Care Specialist
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
          {filters.gender && (
            <View style={styles.genderCard}>
              <Text style={styles.genderHeader}>Gender</Text>
              <View style={styles.genderRow}>
                <TouchableOpacity
                  onPress={() =>
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      gender: "Female",
                    }))
                  }
                  style={[
                    styles.genderOption,
                    filters.gender === "Female" && styles.selectedGender,
                  ]}
                >
                  <Text
                    style={[
                      styles.genderText,
                      filters.gender === "Female" && styles.selectedGenderText,
                    ]}
                  >
                    Female
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      gender: "Male",
                    }))
                  }
                  style={[
                    styles.genderOption,
                    filters.gender === "Male" && styles.selectedGender,
                  ]}
                >
                  <Text
                    style={[
                      styles.genderText,
                      filters.gender === "Male" && styles.selectedGenderText,
                    ]}
                  >
                    Male
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {filters.language && (
            <View style={styles.container}>
              {/* Existing code for header */}
              <View style={styles.rightColumn}>
                {/* Other existing filter cards */}

                {/* Language card */}
                <View style={styles.languageCard}>
                  <Text style={styles.languageHeader}>Language</Text>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("English")}
                      style={[
                        styles.languageOption,
                        filters.language === "English" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "English" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        English
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Hindi")}
                      style={[
                        styles.languageOption,
                        filters.language === "Hindi" && styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Hindi" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Hindi
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Telugu")}
                      style={[
                        styles.languageOption,
                        filters.language === "Telugu" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Telugu" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Telugu
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Punjabi")}
                      style={[
                        styles.languageOption,
                        filters.language === "Punjabi" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Punjabi" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Punjabi
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Urdu")}
                      style={[
                        styles.languageOption,
                        filters.language === "Urdu" && styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Urdu" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Urdu
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Kannada")}
                      style={[
                        styles.languageOption,
                        filters.language === "Kannada" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Kannada" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Kannada
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Bengali")}
                      style={[
                        styles.languageOption,
                        filters.language === "Bengali" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Bengali" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Bengali
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Marathi")}
                      style={[
                        styles.languageOption,
                        filters.language === "Marathi" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Marathi" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Marathi
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Gujarati")}
                      style={[
                        styles.languageOption,
                        filters.language === "Gujarati" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Gujarati" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Gujarati
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Tamil")}
                      style={[
                        styles.languageOption,
                        filters.language === "Tamil" && styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Tamil" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Tamil
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Oriya")}
                      style={[
                        styles.languageOption,
                        filters.language === "Oriya" && styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Oriya" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Oriya
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Persian")}
                      style={[
                        styles.languageOption,
                        filters.language === "Persian" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Persian" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Persian
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.languageRow}>
                    <TouchableOpacity
                      onPress={() => handleLanguageSelection("Assamese")}
                      style={[
                        styles.languageOption,
                        filters.language === "Assamese" &&
                          styles.selectedLanguage,
                      ]}
                    >
                      <Text
                        style={[
                          styles.languageText,
                          filters.language === "Assamese" &&
                            styles.selectedLanguageText,
                        ]}
                      >
                        Assamese
                      </Text>
                    </TouchableOpacity>
                    {/* Add more language options as needed */}
                  </View>
                </View>
              </View>
            </View>
          )}

          {filters.city && (
            <View style={styles.cityCard}>
              <View style={styles.cityHeader}>
                <Icon name="search" size={20} color="#189AB4" />
                <TextInput style={styles.searchText} placeholder="Search" />
              </View>
              <View style={styles.divider} />
              <Text style={styles.cityCategoryText}>Andhra Pradesh</Text>
              <View style={styles.divider} />
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked1 ? "checked" : "unchecked"}
                    onPress={handlePress1}
                    color="#189AB4"
                    uncheckedColor="#189AB4"
                  />
                  <Text style={styles.checkboxText}>Visakhapatnam</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked2 ? "checked" : "unchecked"}
                    onPress={handlePress2}
                    color="#189AB4"
                    uncheckedColor="#189AB4"
                  />
                  <Text style={styles.checkboxText}>Vijayawada</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked3 ? "checked" : "unchecked"}
                    onPress={handlePress3}
                    color="#189AB4"
                    uncheckedColor="#189AB4"
                  />
                  <Text style={styles.checkboxText}>Kadapa</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked4 ? "checked" : "unchecked"}
                    onPress={handlePress4}
                    color="#189AB4"
                    uncheckedColor="#189AB4"
                  />
                  <Text style={styles.checkboxText}>Guntur</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked5 ? "checked" : "unchecked"}
                    onPress={handlePress5}
                    color="#189AB4"
                    uncheckedColor="#189AB4"
                  />
                  <Text style={styles.checkboxText}>Srikakulam</Text>
                </View>
              </View>
            </View>
          )}

          {filters.facility && (
            <View style={styles.facilityCard}>
              <Text style={styles.facilityHeader}>Facility</Text>
              <View style={styles.facilityRow}>
                <TouchableOpacity
                  onPress={() => handleFacilitySelection("Hospital")}
                  style={[
                    styles.facilityOption,
                    filters.facility === "Hospital" && styles.selectedFacility,
                  ]}
                >
                  <Text
                    style={[
                      styles.facilityText,
                      filters.facility === "Hospital" &&
                        styles.selectedFacilityText,
                    ]}
                  >
                    Hospital
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFacilitySelection("Outpatient Clinics")}
                  style={[
                    styles.facilityOption,
                    filters.facility === "Outpatient Clinics" &&
                      styles.selectedFacility,
                  ]}
                >
                  <Text
                    style={[
                      styles.facilityText,
                      filters.facility === "Outpatient Clinics" &&
                        styles.selectedFacilityText,
                    ]}
                  >
                    Outpatient Clinics
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 40,
  },
  closeButton: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filtersContainer: {
    flexDirection: "row",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 8,
  },
  filterRow: {
    backgroundColor: "#EAF7F4",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  selectedFilter: {
    backgroundColor: "#fff",
  },
  firstRow: {
    borderTopWidth: 0,
  },
  filterText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedText: {
    color: "#189AB4",
  },

  constantBlock: {
    backgroundColor: "#EAF7F4",
    height: 48,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  applyButton: {
    backgroundColor: "#189AB4",
    padding: 16,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  applyText: {
    color: "white",
    fontSize: 20,
  },
  experienceCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  experienceHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  experienceBlockRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  experienceBlock: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "30%",
  },
  selectedExperience: {
    backgroundColor: "#189AB4",
  },
  experienceText: {
    color: "#189AB4",
    textAlign: "center",
  },
  selectedExperienceText: {
    color: "#fff",
  },
  availabilityCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  availabilityHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  availabilityRow: {
    flexDirection: "row",

    marginBottom: 10,
  },
  availabilityOption: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "48%",
  },
  selectedAvailability: {
    backgroundColor: "#189AB4",
  },
  availabilityText: {
    color: "#189AB4",
    textAlign: "center",
  },
  selectedAvailabilityText: {
    color: "#fff",
  },
  feesCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: -50,
  },
  feesHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  feesOption: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedFees: {
    backgroundColor: "#189AB4",
  },
  feesText: {
    color: "#189AB4",
    textAlign: "center",
  },
  selectedFeesText: {
    color: "#fff",
  },
  areaOfExpertiseCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: -50,
  },
  areaOfExpertiseHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    fontSize: 18,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#189AB4",
  },
  checkboxContainer: {
    marginTop: 8,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkboxText: {
    marginLeft: 10,
    color: "#000",
  },
  genderCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: -40,
  },
  genderHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  genderRow: {
    flexDirection: "row",
  },
  genderOption: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedGender: {
    backgroundColor: "#189AB4",
  },
  genderText: {
    color: "#189AB4",
    textAlign: "center",
  },
  selectedGenderText: {
    color: "#fff",
  },

  languageCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: -90,
  },
  languageHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  languageOption: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "48%",
  },
  selectedLanguage: {
    backgroundColor: "#189AB4",
  },
  languageText: {
    color: "#189AB4",
  },
  selectedLanguageText: {
    color: "#fff",
  },
  facilityCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: -40,
  },
  facilityHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  facilityRow: {
    flexDirection: "row",
  },
  facilityOption: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedFacility: {
    backgroundColor: "#189AB4",
  },
  facilityText: {
    color: "#189AB4",
  },
  selectedFacilityText: {
    color: "#fff",
  },
  cityHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default Filterpage;
