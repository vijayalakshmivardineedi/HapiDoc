import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ClinicsScreen = () => {
  
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSearchbarPress = () => {
    navigation.navigate("DoctorSearch"); // Replace "DoctorSearch" with the name of the page you want to navigate to
  };
  const handleViewAllPress = () => {
    navigation.navigate("DoctorList");
  };
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
    const handlePress = () => {
      navigation.navigate("DoctorList");
    };
     const handleContainerPress = () => {
       navigation.navigate("DoctorProfileScreen");
     };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search Doctors, Specialties & Symptoms"
          placeholderTextColor="gray"
          inputStyle={{ color: "black", fontSize: 14 }}
          theme={{
            colors: { primary: "black", underlineColor: "transparent" },
          }}
          onPress={handleSearchbarPress}
        />
      </View>

      <View style={styles.topSpecialtiesContainer}>
        <Text style={styles.topSpecialtiesText}>
          Specialties For Clinic Visit
        </Text>
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
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Ionicons name="close" size={24} color="#999" />
            </TouchableOpacity>
            <View style={styles.bottomModalContent}>
              <View style={styles.modalItem}>
                <View style={styles.containerBox}>
                  <Text style={styles.modalheading}>Covid Consultation</Text>
                  <Text style={styles.modalsubheading}>
                    Treatment of Covid-19
                  </Text>
                  {/* ENT.jpg */}
                  <Image
                    source={require("../../assets/doctor Images/audiologist.png")}
                    style={styles.rightCornerImage}
                  />
                  <View style={styles.marginLine}></View>
                  <Text style={styles.bottomText}>
                    Cough, Fever, Breathlessness
                  </Text>
                </View>
              </View>
              <View style={styles.modalItem}>
                <View style={styles.containerBox}>
                  <Text style={styles.modalheading}>Counseling</Text>
                  <Text style={styles.modalsubheading}>
                    Emotional and mental health
                  </Text>
                  <Image
                    source={require("../../assets/doctor Images/audiologist.png")}
                    style={styles.rightCornerImage}
                  />
                  <View style={styles.marginLine}></View>
                  <Text style={styles.bottomText}>
                    Depression, Anxiety, Mental Stress
                  </Text>
                </View>
              </View>
              <View style={styles.modalItem}>
                <View style={styles.containerBox}>
                  <Text style={styles.modalheading}>Critical Care</Text>
                  <Text style={styles.modalsubheading}>
                    For life-threatening conditions
                  </Text>
                  <Image
                    source={require("../../assets/doctor Images/audiologist.png")}
                    style={styles.rightCornerImage}
                  />
                  <View style={styles.marginLine}></View>
                  <Text style={styles.bottomText}>
                    ICU related, High-risk patients,
                  </Text>
                </View>
              </View>
              <View style={styles.modalItem}>
                <View style={styles.containerBox}>
                  <Text style={styles.modalheading}>Haematology</Text>
                  <Text style={styles.modalsubheading}>
                    For diseases related to blood
                  </Text>
                  <Image
                    source={require("../../assets/doctor Images/audiologist.png")}
                    style={styles.rightCornerImage}
                  />
                  <View style={styles.marginLine}></View>
                  <Text style={styles.bottomText}>Blood diseases</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/Cardiology.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Cardiology</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/Dermatology.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Dermatology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/ENT.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>ENT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/Neurology.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Neurology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/orthopedics.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Orthopedics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/pediatric.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Pediatrics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/psychologist.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Psychiatry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/Pulmonology(1).jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Pulmonology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
          <Image
            source={require("../../assets/doctor Images/Urology.jpg")}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Urology</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Clinics Near You</Text>

        <View>
          <View style={{ flexDirection: "column" }}>
            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity
                style={styles.container12}
                onPress={handlePress}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Apollo Clinic Vizag</Text>
                    <Text style={styles.subheading}>
                      Apollo Clinic 50-81-1/2, Vizag
                    </Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>1Km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container12}
                onPress={handlePress}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Apollo Hospitals Vizag</Text>
                    <Text style={styles.subheading}>Ukkunagaram, Vizag</Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>6km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container12}
                onPress={handlePress}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Srinivasa Ent Clinic</Text>
                    <Text style={styles.subheading}>General Physician</Text>
                    <Text style={styles.subheading}>
                      Flat no 302, 3rd floor, venko....
                    </Text>
                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>11km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container12}
                onPress={handlePress}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Dr.Meghanth</Text>
                    <Text style={styles.subheading}>Midhilapuri colony</Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>1km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity style={styles.container2} onPress={handlePress}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Sri Sai Chest Clinic</Text>
                    <Text style={styles.subheading}>
                      Opposite KGH clock towers
                    </Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>10km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container2} onPress={handlePress}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>
                      Anil Smile Dental Clinic
                    </Text>
                    <Text style={styles.subheading}>
                      Ayyapanagar, Visakhapatnam
                    </Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>13km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container2} onPress={handlePress}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>
                      Dr.Phanender Chest Care
                    </Text>
                    <Text style={styles.subheading}>
                      Sector-6, Visakhapatnam
                    </Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>8km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container2} onPress={handlePress}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/hospital  (1).jpg")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.heading12}>Sowmya Clinic</Text>
                    <Text style={styles.subheading}>
                      National Highway 16 Highw...
                    </Text>

                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#189ab4"
                      />
                      <Text style={styles.location}>82 km away</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeadingLeft}>
            General Physicians Near You
          </Text>

          <TouchableOpacity onPress={handleViewAllPress}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: "column" }}>
            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity
                style={styles.container31}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage10.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>1 Km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr Vvn Gotham</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>10 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container31}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage9.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>6 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. Yvl Narasimha</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>25 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container31}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage8.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>11 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. Suryakala</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>2 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container31}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage7.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>15 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. S Lakshmi</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>15 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity
                style={styles.container3}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage6.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>22 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. S Pranav</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>3 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container3}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage4.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>13 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. R Kundana</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>3 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container3}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage3.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>Location 1</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. G Harikrishna</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>16 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container3}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer3}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage2.webp")}
                    style={styles.image3}
                  />
                  <View style={styles.locationContainer3}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location3}>Location 1</Text>
                  </View>
                </View>
                <View style={styles.contentContainer3}>
                  <View style={styles.textContainer3}>
                    <Text style={styles.heading3}>Dr. Srinivasrao</Text>
                    <Text style={styles.subheading3}>General Physician</Text>
                    <Text style={styles.subheading3}>1 yrs Experience</Text>
                    <Text style={styles.Cost3}>₹999</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.section2}>
        <View style={styles.sectionHeader2}>
          <Text style={styles.sectionHeadingLeft2}>
            Gynaecologists Near You
          </Text>

          <TouchableOpacity onPress={handleViewAllPress}>
            <Text style={styles.viewAllText2}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: "column" }}>
            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity
                style={styles.container41}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage9.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>10 Km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr Krishnam</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>42 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹600</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container41}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage8.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>11 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr.Reshma</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>25 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹599</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container41}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage8.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>11 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr. Suryakala</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>4 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container41}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage7.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>15 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr. S Lakshmi</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>15 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
              <TouchableOpacity
                style={styles.container4}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage6.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>22 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr.Ramya Pabolu</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>3 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container4}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage4.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>13 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr. R Kundana</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>3 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container4}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage6.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>22 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr.Ramya Pabolu</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>3 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container4}
                onPress={handleContainerPress}
              >
                <View style={styles.imageContainer4}>
                  <Image
                    source={require("../../assets/doctor Images/doctorimage4.webp")}
                    style={styles.image4}
                  />
                  <View style={styles.locationContainer4}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="#189ab4"
                    />
                    <Text style={styles.location4}>13 km</Text>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                  <View style={styles.textContainer4}>
                    <Text style={styles.heading4}>Dr. R Kundana</Text>
                    <Text style={styles.subheading4}>
                      Obstetrics & Gynaecologist
                    </Text>
                    <Text style={styles.subheading4}>3 yrs Experience</Text>
                    <Text style={styles.Cost4}>₹500</Text>
                  </View>
                </View>
              </TouchableOpacity>
              
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.FinalContainer}>
        <View style={styles.additionalContainer}>
          <Image
            source={require("../../assets/doctor Images/doctors1.png")}
            style={styles.additionalImage4}
          />

          <Text style={styles.additionalText}>
            Feeling unwell? Check your symptoms with this assessment in less
            than 3 min and consult a doctor.
          </Text>
        </View>
        <View style={styles.customContainer}>
          <View
            style={[styles.customSubContainer, { backgroundColor: "#75e6da" }]}
          >
            <Image
              source={require("../../assets/doctor Images/enter.png")}
              style={styles.customImageSubContainer}
            />
            <Text style={styles.customTextSubContainer}>
              Enter{"\n"}Symptoms
            </Text>
          </View>

          <View
            style={[styles.customSubContainer, { backgroundColor: "#d4f1f4" }]}
          >
            <Image
              source={require("../../assets/doctor Images/hand.png")}
              style={styles.customImageSubContainer}
            />
            <Text style={styles.customTextSubContainer}>
              Understand{"\n"}Causes
            </Text>
          </View>

          <View
            style={[styles.customSubContainer, { backgroundColor: "#189ab4" }]}
          >
            {/* consult1 */}
            <Image
              source={require("../../assets/doctor Images/consultant-services.png")}
              style={styles.customImageSubContainer}
            />
            <Text style={styles.customTextSubContainer}>Book{"\n"}Consult</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.FinalButton}>
          <Text style={styles.finalButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Adjust as needed
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#189AB4",
    backgroundColor: "#eaf7f4",
    marginTop: 20,
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
  content: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",

    marginLeft: 10,
  },
  rowContainer: {
    paddingHorizontal: 10,
  },
  moreButtonText: {
    fontSize: 18,

    color: "#189AB4",
  },
  container12: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 270,
    height: 110,
    marginTop: 20,
  },
  container2: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 270, // Adjust width as needed
    height: 110,
    marginTop: 20,
  },
  imageContainer: {
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  heading12: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 14,
    color: "#666",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location: {
    marginLeft: 5,
    fontSize: 10,
    color: "#189ab4",
  },
  Cost: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeadingLeft: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: -10,
  },
  viewAllText: {
    fontSize: 18,

    color: "#189AB4",
  },
  container31: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,

    width: 270,
    height: 120,
    // marginTop: 10,
  },
  container3: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 270, // Adjust width as needed
    height: 120,
    marginTop: 20,
  },
  imageContainer3: {
    marginRight: 10,
    marginTop: 10,
  },
  image3: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  contentContainer3: {
    flex: 1,
  },
  textContainer3: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  heading3: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subheading3: {
    fontSize: 14,
    color: "#666",
  },
  locationContainer3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location3: {
    marginLeft: 5,
    fontSize: 10,
    color: "#189ab4",
  },
  Cost3: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },

  section2: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  sectionHeader2: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeadingLeft2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: -10,
  },
  viewAllText2: {
    fontSize: 18,

    color: "#189AB4",
  },
  container41: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 270,
    height: 120,
  },
  container4: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,

    width: 270, // Adjust width as needed
    height: 120,
    marginTop: 20,
  },
  imageContainer4: {
    marginRight: 10,
    marginTop: 10,
  },
  image4: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  contentContainer4: {
    flex: 1,
  },
  textContainer4: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  heading4: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subheading4: {
    fontSize: 14,
    color: "#666",
   
  },
  locationContainer4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location4: {
    marginLeft: 5,
    fontSize: 10,
    color: "#189ab4",
  },
  Cost4: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
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
});

export default ClinicsScreen;
