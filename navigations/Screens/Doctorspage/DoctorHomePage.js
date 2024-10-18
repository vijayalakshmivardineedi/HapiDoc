import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Appbar, Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

const DoctorHomePage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleContainerPress = () => {
    navigation.navigate("SymptomsPage");
  };
  const handlePress = () => {
    navigation.navigate("DoctorList");
  };
  const handleContainerPress1 = () => {
    navigation.navigate("DoctorList");
  };
  const handleSearchbarPress = () => {
    navigation.navigate("DoctorSearch"); // Replace "YourNextPage" with the name of the page you want to navigate to
  };
   const handleDropQuery = () => {
     navigation.navigate("DentalPage"); // Replace "QueryScreen" with the name of your screen component
   };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
   const onViewAllPress = () => {
     navigation.navigate("SymptomsViewAll"); // Navigate to your next screen
   };
    const handlenearbyclinicPress = () => {
      navigation.navigate("Clinics");
    };
    const   handleDigitalConsultPress = () => {
      navigation.navigate("DigitalConsult");
    
    };
     const handleViewPlan = () => {
       // Navigate to another screen when "View Plan" is clicked
       navigation.navigate("HealthPackages");
     };
  return (
    <View style={styles.container}>
     
      <TouchableOpacity onPress={handleSearchbarPress}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search Doctors, Specialties & Symptoms"
          placeholderTextColor="gray"
          inputStyle={{ color: "black", fontSize: 14 }}
          theme={{
            colors: { primary: "black", underlineColor: "transparent" },
          }}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.innerContainer}
            onPress={handlenearbyclinicPress}
          >
            <View>
              <Image
                source={require("../../../assets/doctor Images/location (1).png")}
                style={styles.image}
              />
              <Text style={styles.text}>Nearby Clinics</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerContainer2}
            onPress={handleDigitalConsultPress}
          >
            <View>
              <Image
                source={require("../../../assets/doctor Images/medical-services.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Digital Consult</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>General Physician @99</Text>
        <TouchableOpacity
          style={styles.GenaralContainer}
          onPress={handleContainerPress1}
        >
          <View style={styles.GenaralContent}>
            <View style={styles.GenaralContent1}>
              <Text style={styles.GenaralText1}> Especially for you!</Text>
            </View>
            <Text style={styles.GeneralText}>
              Consult General Physician Online
            </Text>

            <View style={styles.Generalcontainer2}>
              <Text style={styles.oldPrice1}>@just</Text>
              <Text style={styles.oldPrice}> ₹599</Text>
              <Text style={styles.newPrice}>₹99</Text>
            </View>

            <View style={styles.GeneraladditionalInfo}>
              <View style={styles.GeneraladditionalInfoItem}>
                <Text style={styles.GeneraladditionalInfoText}>
                  Code:FLAT99
                </Text>
              </View>
              <View style={styles.GeneraladditionalInfoLine}></View>

              <View style={styles.GeneraladditionalInfoItem}>
                <Text style={styles.GeneraladditionalInfoText}>
                  Tap to Book
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/home-patient-with-tablet-consulting-doctor-support-help-assistance-medical-problem-telehealth-communication-online-consultation-with-medicine-healthcare-expert-talking-sick-client_590464-84817.jpg",
            }}
            style={styles.GeneralImage}
          />
        </TouchableOpacity>

        <View style={styles.topSpecialtiesContainer}>
          <Text style={styles.topSpecialtiesText}>Top Specialties</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>More</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Ionicons name="close" size={24} color="#999" />
              </TouchableOpacity>
              <View style={styles.bottomModalContent}>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={handleContainerPress1}
                >
                  <View style={styles.containerBox}>
                    <Text style={styles.modalheading}>Covid Consultation</Text>
                    <Text style={styles.modalsubheading}>
                      Treatment of Covid-19
                    </Text>
                    <Image
                      source={require("../../../assets/doctor Images/ENT.jpg")}
                      style={styles.rightCornerImage}
                    />
                    <View style={styles.marginLine}></View>
                    <Text style={styles.bottomText}>
                      Cough, Fever, Breathlessness
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={handleContainerPress1}
                >
                  <View style={styles.containerBox}>
                    <Text style={styles.modalheading}>Counseling</Text>
                    <Text style={styles.modalsubheading}>
                      Emotional and mental health
                    </Text>
                    <Image
                      source={require("../../../assets/doctor Images/ENT.jpg")}
                      style={styles.rightCornerImage}
                    />
                    <View style={styles.marginLine}></View>
                    <Text style={styles.bottomText}>
                      Depression, Anxiety, Mental Stress
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={handleContainerPress1}
                >
                  <View style={styles.containerBox}>
                    <Text style={styles.modalheading}>Critical Care</Text>
                    <Text style={styles.modalsubheading}>
                      For life-threatening conditions
                    </Text>
                    <Image
                      source={require("../../../assets/doctor Images/ENT.jpg")}
                      style={styles.rightCornerImage}
                    />
                    <View style={styles.marginLine}></View>
                    <Text style={styles.bottomText}>
                      ICU related, High-risk patients,
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={handleContainerPress1}
                >
                  <View style={styles.containerBox}>
                    <Text style={styles.modalheading}>Haematology</Text>
                    <Text style={styles.modalsubheading}>
                      For diseases related to blood
                    </Text>
                    <Image
                      source={require("../../../assets/doctor Images/ENT.jpg")}
                      style={styles.rightCornerImage}
                    />
                    <View style={styles.marginLine}></View>
                    <Text style={styles.bottomText}>Blood diseases</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.containerRow}>
          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/Cardiology.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Cardiology</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/Dermatology.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Dermatology</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/ENT.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>ENT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/Neurology.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Neurology</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/orthopedics.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Orthopedics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/pediatric.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Pediatrics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/psychologist.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Psychiatry</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/Pulmonology(1).jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Pulmonology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
              source={require("../../../assets/doctor Images/Urology.jpg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Urology</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.browseBySymptomsContainer}>
          <Text style={styles.browseBySymptomsText}>Browse by Symptoms</Text>
          <TouchableOpacity onPress={onViewAllPress}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.symptomContainerRow}>
          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/cough.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Cough</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/Runnynose1.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Runny Nose</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/Stress3.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Stress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/throat1.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Throat Pain</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/sick.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Fever</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/schedule.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Irregular Periods</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/hair-loss.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Hair Fall</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.symptomContainer}
            onPress={handleContainerPress}
          >
            <Image
              source={require("../../../assets/doctor Images/acne1.png")}
              style={styles.symptomImage}
            />
            <Text style={styles.symptomText}>Acne</Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.heading2}>HapiDoc Health Insurance</Text>
        <View style={styles.InsuranceContainer}>
          <View style={styles.InsuranceContent}>
            <Image
              source={require("../../../assets/doctor Images/nl (1).png")}
              style={styles.InsuranceImage2}
            />
            <Text style={styles.InsuranceText}>
              HapiDoc Smart Health Insurance
            </Text>
            <View style={styles.InsuranceadditionalInfo}>
              <View style={styles.InsuranceadditionalInfoItem}>
                <Text style={styles.InsuranceadditionalInfoText}>
                  ₹1Cr Cover
                </Text>
              </View>
              <View style={styles.InsuranceadditionalInfoLine}></View>

              <View style={styles.InsuranceadditionalInfoItem}>
                <Text style={styles.InsuranceadditionalInfoText}>
                  Starting @₹76/Month
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.InsuranceButton}>
              <Text style={styles.InsuranceButtonText}>Know More</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/doctor Images/file (1).png")}
            style={styles.InsuranceImage}
          />
        </View> */}

        <View style={styles.WellnessContainer}>
          <Text style={styles.WellnessText}>Personal Wellness</Text>

          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.WellnessviewAllText}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.additionalInfoContainer}>
          <TouchableOpacity
            style={styles.infoItem}
            onPress={handleContainerPress1}
          >
            <Image
              source={require("../../../assets/doctor Images/psychiatry1.png")}
              style={styles.infoImage}
            />
            <Text style={styles.infoText}>Psychiatry</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoItem}
            onPress={handleContainerPress1}
          >
            <Image
              source={require("../../../assets/doctor Images/Sexual Health.png")}
              style={styles.infoImage}
            />
            <Text style={styles.infoText}>Sexual Health</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.hospitalheading}>
            Hospitals and clinics near you
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={20}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={20}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={20}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={20}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={20}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={handleContainerPress1}
              >
                <Image
                  source={require("../../../assets/doctor Images/hospital  (1).jpg")}
                  style={styles.cardImage2}
                  resizeMode="cover"
                />
                <View style={styles.Hospitalinfo}>
                  <Text style={styles.Hoapitalname}>VITALS SPECIALITY</Text>
                  <Text style={styles.Address1}>
                    Flat no 302.3rd floor, venk...
                  </Text>
                  <View style={styles.infoRow}>
                    <Icon
                      name="location-on"
                      size={24}
                      color="#189AB4"
                     
                    />
                    <Text style={styles.address2}>1km away</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={styles.hospitalheading}>Dental Care</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.dentalContainer}>
              <View style={styles.dentalContent}>
                <Text style={styles.dentalText}>Specialized Root Canal</Text>
                <View style={styles.additionalInfo}>
                  <View style={styles.additionalInfoItem}>
                    <Text style={styles.additionalInfoText}>
                      2.5m+ happy customers
                    </Text>
                  </View>
                  <View style={styles.additionalInfoLine}></View>

                  <View style={styles.additionalInfoItem}>
                    <Text style={styles.additionalInfoText}>500+ dentists</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.dentalButton}
                  onPress={handleDropQuery}
                >
                  <Text style={styles.dentalButtonText}>Drop a Query</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/doctor Images/dental-teeth-health-care-3d-icon-png.webp")}
                style={styles.dentalImage}
              />
            </View>

            <View style={styles.dentalContainer}>
              <View style={styles.dentalContent}>
                <Text style={styles.dentalText}>Specialized Root Canal</Text>
                <View style={styles.additionalInfo}>
                  <View style={styles.additionalInfoItem}>
                    <Text style={styles.additionalInfoText}>
                      2.5m+ happy customers
                    </Text>
                  </View>
                  <View style={styles.additionalInfoLine}></View>

                  <View style={styles.additionalInfoItem}>
                    <Text style={styles.additionalInfoText}>500+ dentists</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.dentalButton}
                  onPress={handleDropQuery}
                >
                  <Text style={styles.dentalButtonText}>Drop a Query</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../../assets/doctor Images/Tooth.png")}
                style={styles.dentalImage}
              />
            </View>
          </ScrollView>

          <View style={styles.additionalTextContainer}>
            <Text style={styles.bookConsultText}>Book Consult with Expert</Text>

            <TouchableOpacity onPress={toggleModal} style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerRow2}>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/cardiothoracic.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>
                Cardiothoracic{"\n"}& Vascular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/neck.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>ENT,Head &{"\n"}Neck Surgery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/gastroenterology.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>
                Surgical Gastro{"\n"}enterology
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/broken-bone.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>Knee{"\n"}Replace....</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/oncology.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>Surgical{"\n"}Oncology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/neurosurgery.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>Neurosurgery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/Endocrine.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>Endocrine{"\n"}Surgery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/generalsurgery.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>General{"\n"}Surgery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardContainer2}
              onPress={handleContainerPress1}
            >
              <Image
                source={require("../../../assets/doctor Images/dorsal.png")}
                style={styles.cardImage3}
              />
              <Text style={styles.cardText2}>Spine{"\n"}Sugery</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.FinalContainer}>
            <View style={styles.additionalContainer}>
              <Image
                source={require("../../../assets/doctor Images/doctors1.png")}
                style={styles.additionalImage4}
              />

              <Text style={styles.additionalText}>
                Feeling unwell? Check your symptoms with this assessment in less
                than 3 min and consult a doctor.
              </Text>
            </View>
            <View style={styles.customContainer}>
              <View
                style={[
                  styles.customSubContainer,
                  { backgroundColor: "#75e6da" },
                ]}
              >
                <Image
                  source={require("../../../assets/doctor Images/enter.png")}
                  style={styles.customImageSubContainer}
                />
                <Text style={styles.customTextSubContainer}>
                  Enter{"\n"}Symptoms
                </Text>
              </View>

              <View
                style={[
                  styles.customSubContainer,
                  { backgroundColor: "#d4f1f4" },
                ]}
              >
                <Image
                  source={require("../../../assets/doctor Images/hand.png")}
                  style={styles.customImageSubContainer}
                />
                <Text style={styles.customTextSubContainer}>
                  Understand{"\n"}Causes
                </Text>
              </View>

              <View
                style={[
                  styles.customSubContainer,
                  { backgroundColor: "#189ab4" },
                ]}
              >
                <Image
                  source={require("../../../assets/doctor Images/consultant-services.png")}
                  style={styles.customImageSubContainer}
                />
                <Text style={styles.customTextSubContainer}>
                  Book{"\n"}Consult
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.FinalButton}>
              <Text style={styles.finalButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HealthTextContainer}>
            <Text style={styles.Healthheading}>Health Plans For You </Text>

            <TouchableOpacity onPress={handleViewPlan}>
              <Text style={styles.viewplan}>View Plan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HealthContent}>
            <Image
              source={require("../../../assets/doctor Images/what-are-family-health-insurance-plans.jpg")}
              style={styles.HealthImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
  },
  icon: {
    marginHorizontal: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#189AB4",
    width: "90%",
    marginLeft: 20,
    backgroundColor: "#ffffff",
  },
  separator: {
    height: 1,
    backgroundColor: "#333",
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  innerContainer2: {
    backgroundColor: "#d4f1f4",
    width: "45%",
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginLeft: 60,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: "#d4f1f4",
    width: "45%",
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginRight: "42%",
  },

  topSpecialtiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topSpecialtiesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: -10,
  },
  viewAllText: {
    fontSize: 18,

    color: "#189AB4",
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  cardContainer: {
    width: "30%",
    height: "30%",
    alignItems: "center",
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "#189AB4",
    // borderRadius: 5,
  },
  cardImage: {
    width: 97,
    height: 70,
    borderRadius: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  browseBySymptomsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  browseBySymptomsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 20,
  },
  symptomContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  symptomContainer: {
    width: "23%",
    height: 90,
    alignItems: "center",
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "#189AB4",
    borderRadius: 10,
  },
  symptomImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginTop: 5,
  },
  symptomText: {
    marginTop: 10,
    fontSize: 10,
    textAlign: "center",
  },
  // heading2: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginLeft: 20,
  // },
  // InsuranceContainer: {
  //   backgroundColor: "#189ab4",
  //   marginLeft: 17,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   borderRadius: 10,
  //   padding: 10,
  //   width: 320,
  //   marginTop: 10,
  // },
  // InsuranceImage: {
  //   width: 150,
  //   height: 120,
  //   borderRadius: 10,
  // },
  // InsuranceImage2: {
  //   width: 90,
  //   height: 40,
  // },
  // InsuranceContent: {
  //   flex: 1,
  // },
  // InsuranceText: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginBottom: 5,
  //   color: "white",
  // },

  // InsuranceButton: {
  //   backgroundColor: "#05445e",
  //   padding: 8,
  //   borderRadius: 5,
  //   alignSelf: "flex-start",
  //   marginTop: 10,
  // },
  // InsuranceButtonText: {
  //   color: "white",
  //   fontWeight: "bold",
  // },
  // InsuranceadditionalInfo: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 5,
  //   borderWidth: 1,
  //   padding: 5,
  //   borderRadius: 5,
  //   borderColor: "#fff",
  // },
  // InsuranceadditionalInfoItem: {
  //   flex: 1,
  //   alignItems: "center",
  // },
  // InsuranceadditionalInfoLine: {
  //   width: 1,
  //   height: "100%",
  //   backgroundColor: "#ccc",
  //   marginHorizontal: 10,
  // },
  // InsuranceadditionalInfoText: {
  //   fontSize: 10,
  //   color: "#fff",
  // },
  // InsuranceadditionalTextContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 20,
  //   marginTop: 10,
  // },
  WellnessContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  WellnessText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  WellnessviewAllText: {
    fontSize: 18,

    color: "#189AB4",
  },
  additionalInfoContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 10,
    marginLeft:20,
  },
  infoItem: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#189ab4",
    padding: 10,
    borderRadius: 5,
    height: 100,
    width: 165,
    marginRight:10,
  },
  infoImage: {
    width: 50,
    height: 50,
  },
  infoText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },

  hospitalheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 17,
    marginTop: 10,
  },
  cardContent: {
    flexDirection: "row",
    borderWidth: 1,
    marginLeft: 15,
    borderColor: "#189ab4",
    borderRadius: 5,
    marginTop: 10,
  },
  Hospitalinfo: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  Hoapitalname: {
    fontSize: 14,
    fontWeight: "bold",
  },

  cardImage2: {
    width: 70,
    height: 80,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  row: {
    flexDirection: "row",
  },
  address2: {
    color: "#189ab4",
    marginRight:20,
  },
  // imageContainer: {
  //   marginLeft: 10,
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  //   borderRadius: 8,
  //   overflow: "hidden",
  //   width: "93%",
  //   marginTop: 5,
  // },

  dentalContainer: {
    backgroundColor: "#189ab4",
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 300,
    marginTop: 10,
  },
  dentalImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  dentalContent: {
    flex: 1,
  },
  dentalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  // dentalSubtext: {
  //   fontSize: 10,
  //   color: "#fff",
  //   marginBottom: 5,
  // },
  dentalButton: {
    backgroundColor: "#05445e",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  dentalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  additionalInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#fff",
  },
  additionalInfoItem: {
    flex: 1,
    alignItems: "center",
  },
  additionalInfoLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  additionalInfoText: {
    fontSize: 10,
    color: "#fff",
  },
  additionalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  bookConsultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: -5,
  },
  viewAllText2: {
    fontSize: 18,

    color: "#189AB4",
  },
  containerRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 20,
    marginLeft: 5,
    marginHorizontal: 5,
  },
  cardContainer2: {
    width: "30%",
    height: "30%",
    alignItems: "center",
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "#189AB4",
    borderRadius: 10,
  },
  cardImage3: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
  },
  cardText2: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  additionalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  additionalImage4: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
  },
  additionalText: {
    flexShrink: 1,
    fontSize: 14,
    marginLeft: 10,
  },
  customContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    width: "100%",
  },
  customSubContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
    margin: 5,
    height: "80%",
  },
  customImageSubContainer: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  customTextSubContainer: {
    fontSize: 14,
    textAlign: "center",
  },
  FinalButton: {
    backgroundColor: "#05445e",
    padding: 8,
    borderRadius: 3,
    alignSelf: "flex-start",
    marginTop: 10,
    width: "93%",
    marginLeft: 15,
    marginBottom: 10,
  },
  finalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  FinalContainer: {
    borderWidth: 1,
    borderColor: "#189ab4",
    marginTop: 20,
    width: "95%",
    marginLeft: 10,
    borderRadius: 20,
  },

  GenaralContainer: {
    backgroundColor: "#189ab4",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: "94%",
    marginTop: 10,
  },
  GeneralImage: {
    width: 90,
    height: 140,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 10,
  },
  GenaralContent: {
    flex: 1,
  },
  GenaralContent1: {
    backgroundColor: "#eaf7f4",
    marginLeft: -10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 70,
    padding: 3,
  },
  GeneralText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
    marginTop: 5,
  },

  GeneraladditionalInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#fff",
  },
  GeneraladditionalInfoItem: {
    flex: 1,
    alignItems: "center",
  },
  GeneraladditionalInfoLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  GeneraladditionalInfoText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  GeneraladditionalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  Generalcontainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "50%",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    marginRight: 5,
    color: "white",
  },
  oldPrice1: {
    marginRight: 5,
    color: "white",
  },
  newPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  moreButtonText: {
    fontSize: 18,

    color: "#189AB4",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  bottomModalContent: {
    backgroundColor: "#eaf7f9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalItem: {
    marginBottom: 10,
  },
  containerBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  modalheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalsubheading: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  rightCornerImage: {
    position: "absolute",
    top: 0,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: "orange",
    borderRadius: 5,
    marginTop: 10,
  },
  marginLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 12,
    color: "#666",
  },
  Healthheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: -5,
  },
  // HealthContainer: {
  //   backgroundColor: "#fff",
  //   marginLeft: 15,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   borderRadius: 10,
  //   padding: 30,
  //   width: 300,
  // },
  HealthContent: {
    flex: 1,
    padding:20,
  },
  HealthText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  HealthSubText: {
    fontSize: 16,

    marginBottom: 5,
    color: "white",
  },
  HealthButton: {
    backgroundColor: "#05445e",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: "60%",
  },
  HealthButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  HealthImage: {
    width: "100%",
    height: 170,

   
   
  },
  HealthTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  viewplan: {
    fontSize: 18,
    color: "#189AB4",
  },
});

export default DoctorHomePage;
