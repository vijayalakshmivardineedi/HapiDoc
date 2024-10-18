// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// import { Card } from 'react-native-paper';


// import { useNavigation } from '@react-navigation/native'; // Import useNavigation


// const HomeScreen = () => {
//   

//   const navigation = useNavigation(); // Initialize useNavigation





  


//   return (
//     <View style={styles.container}>
//      
//       <View style={styles.space} />
//       <Searchbar
//         placeholder="Search..."
//         style={styles.searchBar}
//         iconColor="#189AB4"
//       />
//       <ScrollView
//         stickyHeaderIndices={[1]}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.cardContainer}>
//           <TouchableOpacity 
//           // onPress={()=>navigation.navigate("Doctors")}
//           >
//           <View style={styles.card}>
//             <Image source={require("../../assets/gif/consultation.gif")} style={styles.cardCover} />
//             <Text> Consult Now</Text>
//           </View>
//           </TouchableOpacity>
//           <View style={styles.card}>
//             <Image source={require("../../assets/gif/blood-donation.gif")} style={styles.cardCover} />
//             <Text>Donate Blood</Text>
//           </View>
//         </View>
        // <View style={styles.cardContainer1}>
        //   <View style={{flexDirection:"row", borderWidth: 1,borderColor: "#189ab4",borderRadius: 10,}}>
        //     <View style={styles.card1}>
        //     <Image source={require("../../assets/gif/prescription.png")} style={styles.cardCover1} />
        //     <View style={{marginLeft:10}}>
        //       <Text style={{fontSize:16,fontWeight:'500',}}>Order with Prescription</Text>
        //       <Text style={{fontSize:14,fontWeight:'400' , color:"green"}}>Save up to 20%</Text>
        //     </View>
        //     </View>
        //     <TouchableOpacity style={styles.orderButtonContainer} onPress={toggleModal}>
        //     <Text style={{color:"#fff", fontSize:18 ,alignItems:"center", justifyContent:"center"}} >Order</Text>
        //     </TouchableOpacity>
        //   </View>
        // </View>
        // <Modal isVisible={isModalVisible} style={styles.bottomModal}>
        //   <View style={styles.modalContent}>
        //     <View style={styles.headerContainer}>
        //       <Text style={styles.modalHeader}>Order With Prescription</Text>
        //       <TouchableOpacity
        //         onPress={toggleModal}
        //         style={styles.closeButton}
        //       >
        //         <Icon name="clear" size={24} color="#000" />
        //       </TouchableOpacity>
        //     </View>
        //     <View style={styles.itemContainer}>
        //       <Image
        //         source={require("../../assets/gif/medicine.png")}
        //         style={styles.containerImage}
        //       />
        //       <View style={styles.textContainer}>
        //       <View>
        //         <Text style={{fontSize:18,fontWeight:'500' ,marginBottom:5
        //       }}>Order Medicines</Text>
        //         <Text style={{color:"#777"}}>
        //           Get Upto 20% Discount
        //         </Text>
        //         </View>
        //         <TouchableOpacity onPress={navigateToAnotherPage}>
        //           <Icon name="keyboard-arrow-right" size={30} color="#189AB4" style={{marginLeft:40}} />
        //         </TouchableOpacity>
        //       </View>
        //     </View>
        //     <TouchableOpacity onPress={handleorderbyPrescriptions}>
        //       <View style={styles.itemContainer}>
        //         <Image
        //           source={require("../../assets/gif/test-tube.png")}
        //           style={styles.containerImage}
        //         />
        //         <View style={styles.textContainer}>
        //           <View>
        //           <Text  style={{fontSize:18,fontWeight:'500' ,marginBottom:5}}>Book lab tests</Text>
        //           <Text  style={{color:"#777"}}>
        //             Get Upto 50% Discount
        //           </Text>
        //           </View>
        //           <TouchableOpacity >
        //             <Icon name="keyboard-arrow-right" size={30} color="#189AB4" style={{marginLeft:40}}/>
        //           </TouchableOpacity>
        //         </View>
        //       </View>
        //     </TouchableOpacity>
        //   </View>
        // </Modal>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
 
//   space: {
//     height: 10,
//   },
//   
//   cardContainer: {
//     flexDirection: 'row', // Make cards side by side
//     justifyContent: 'space-around', 
//     marginHorizontal: 10
//   },
//   card: {
//     flexDirection: 'row',
//     justifyContent: "center",
//     alignItems: 'center',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: "#189ab4",
//     borderRadius: 10,
//     padding: 10,
//   },
  // cardContainer1: {
  //   flexDirection: 'row', // Make cards side by side
  //   justifyContent: 'space-around', // Adjust as needed
  //   marginHorizontal: 10,
  //   paddingHorizontal: 10,

  // },
  // card1: {
  //   flex:1,
  //   flexDirection: 'row',
  //   padding: 10,
  // },
  // cardCover1: {
  //   width: 60,
  //   height: 60,
  //   justifyContent: "flex-start"
  // },
  // orderButtonContainer:{
  //   backgroundColor:"#189ab4",
  //   alignItems: "center",
  //   paddingLeft:10,
  //   paddingRight:10,
  //   paddingTop:10,
  //   paddingBottom:10,
  //   borderRadius:8,
  //   width: 80,
  //   height:45,
  //   marginTop: 10,
  //   marginRight:10
  // },
  // cardCover: {
  //   width: 60,
  //   height: 60,
  // },
  // cardText: {
  //   fontSize: 16, // Adjust font size as needed
  // },

  // bottomModal: {
  //   justifyContent: "flex-end",
  //   margin: 0,
  // },
  // modalContent: {
  //   backgroundColor: "white",
  //   padding: 22,
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   borderColor: "rgba(0, 0, 0, 0.1)",
  // },
  // headerContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 10,
  // },
  // modalHeader: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  // },
  // closeButton: {
  //   alignSelf: "flex-end",
  // },
  // containerImage: {
  //   width: 80, // Adjust the width as needed
  //   height: 80, // Adjust the height as needed
  //   marginRight: 10, // Adjust the spacing between the image and text
  // },
  // itemContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 20,
  //   borderWidth: 1, // Add border width
  //   borderColor: "#ccc", // Add border color
  //   borderRadius: 5, // Add border radius for rounded corners
  //   padding: 10, // Add padding to the container
  // },
  // textContainer: {
  //   flex: 1,
  //   flexDirection:'row'
  // },
  // arrowIcon: {
  //   marginRight: 10,
  // },
  // textWithArrow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },



  // OrderbyPrescription: {
  //   flexDirection: 'row', // Set the direction to row
  //   justifyContent: 'space-between', // Align items with space between
  //   alignItems: 'center', // Align items vertically in the center
  //   marginTop: 20,
  // },
  // textContainter: {
  //   flex: 1, // Take up remaining space
  // },
  // orderButton: {
  //   marginLeft: 10, // Add some space between the two views
  // },
// });

// export default HomeScreen;





import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
  Linking,

} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const address = '303, Anandapuram, 530052';
  const handleContainerPress1 = () => {
    console.log("Container Pressed");
  };
  const handleNotifications = () => {
    navigation.navigate("Notifications");

  }
  const handlePress = () => {
    // Navigate to another screen here
    // For example:
    navigation.navigate("BlogContent");
  };
  const handlePress1 = () => {
    navigation.navigate("PregnancyCare");
  };
  const handleconatinerpress = () => {
    navigation.navigate("Doctors");
  };
  const handlecontainerpress2 = () => {
    navigation.navigate("Store");
  };
  const handleContainerPress3 = () => {
    navigation.navigate("Labs");
  };
  const handleContainerPress4 = () => {
    navigation.navigate("DonateBlood");
  };
  const handleContainerPress5 = () => {
    navigation.navigate("BMICalculator");
  };
  const handleCardPress1 = () => {
    navigation.navigate("DoctorProfileScreen");
  };
  const handleProfile = () => {
    navigation.navigate("Profile")
  }
  const handlePackagePress = () => {
    navigation.navigate("Packages");
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigateToAnotherPage = () => {
    // Navigate to the desired screen
    navigation.navigate('Upload Medicines Prescription');
  };

  const handleorderbyPrescriptions = () => {
    navigation.navigate("Upload Lab Prescription");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={24} color="black" />
          <View style={styles.addressContainer}>
            <Text style={styles.addressHeaderText}>Home</Text>
            <Text style={styles.addressText}>{address}</Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Feather name="bell" size={24} color="black" onPress={handleNotifications} style={{ marginRight: 20, }} />
          <Feather name="user" size={24} color="black" style={styles.headericon} onPress={handleProfile} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search..."
          style={styles.searchBar}
          iconColor="#189AB4"
        />
      </View>
      <ScrollView>
        <View style={styles.blocksContainer}>
          {/* First row of blocks */}
          <View style={styles.blockRow}>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handleconatinerpress}
              >
                <Image
                  source={require("../../assets/doctor Images/consult1.png")}
                  style={styles.image1}
                />
              </TouchableOpacity>

              <Text style={styles.blockText}>Doctor Consult</Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handlecontainerpress2}
              >
                {/* medicine1 */}
                <Image
                  source={require("../../assets/doctor Images/medicine1.png")}
                  style={styles.image1}
                />
              </TouchableOpacity>
              <Text style={styles.blockText}>Medicine</Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handleContainerPress3}
              >
                {/* lab1 */}
                <Image
                  source={require("../../assets/doctor Images/lab1.png")}
                  style={styles.image1}
                />
              </TouchableOpacity>
              <Text style={styles.blockText}>Labs</Text>
            </View>
          </View>
          {/* Second row of blocks */}
          <View style={styles.blockRow}>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handleContainerPress4}
              >
                {/* blood12 */}
                <Image
                  source={require("../../assets/doctor Images/blood12.png")}
                  style={styles.image11}
                />
              </TouchableOpacity>
              <Text style={styles.blockText}>Blood Donation</Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handleContainerPress5}
              >
                {/* diet_and_nutrition_160 */}
                <Image
                  source={require("../../assets/doctor Images/diet_and_nutrition_160.png")}
                  style={styles.image1}
                />
              </TouchableOpacity>
              <Text style={styles.blockText}>Diet & Nutrition</Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageBlock}
                onPress={handlePress1}
              >
                {/* /pregency1 */}
                <Image
                  source={require("../../assets/doctor Images/pregency1.png")}
                  style={styles.image1}
                />
              </TouchableOpacity>
              <Text style={styles.blockText}>Pregnancy Care</Text>
            </View>
          </View>
        </View>




        <View style={{paddingHorizontal:15}}>
          <View style={{flexDirection:"row", borderWidth: 1,borderColor: "#189ab4",borderRadius: 10,}}>
            <View style={styles.card1}>
            <Image source={require("../../assets/gif/prescription.png")} style={styles.cardCover1} />
            <View style={{marginLeft:10}}>
              <Text style={{fontSize:16,fontWeight:'500',}}>Order with Prescription</Text>
              <Text style={{fontSize:14,fontWeight:'400' , color:"green"}}>Save up to 20%</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.orderButtonContainer} onPress={toggleModal}>
            <Text style={{color:"#fff", fontSize:18 ,alignItems:"center", justifyContent:"center"}} >Order</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal isVisible={isModalVisible} style={styles.bottomModal}>
          <View style={styles.modalContent}>
            <View style={styles.headerContainer}>
              <Text style={styles.modalHeader}>Order With Prescription</Text>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}
              >
                <Icon name="clear" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require("../../assets/gif/medicine.png")}
                style={styles.containerImage}
              />
              <View style={styles.textContainer11}>
              <View>
                <Text style={{fontSize:18,fontWeight:'500' ,marginBottom:5
              }}>Order Medicines</Text>
                <Text style={{color:"#777"}}>
                  Get Upto 20% Discount
                </Text>
                </View>
                <TouchableOpacity onPress={navigateToAnotherPage}>
                  <Icon name="keyboard-arrow-right" size={30} color="#189AB4" style={{marginLeft:40}} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={handleorderbyPrescriptions}>
              <View style={styles.itemContainer}>
                <Image
                  source={require("../../assets/gif/test-tube.png")}
                  style={styles.containerImage}
                />
                <View style={styles.textContainer11}>
                  <View>
                  <Text  style={{fontSize:18,fontWeight:'500' ,marginBottom:5}}>Book lab tests</Text>
                  <Text  style={{color:"#777"}}>
                    Get Upto 50% Discount
                  </Text>
                  </View>
                  <TouchableOpacity >
                    <Icon name="keyboard-arrow-right" size={30} color="#189AB4" style={{marginLeft:40}}/>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
<View style={styles.imageContainer2}>
          {/*image_480  */}
          <Image
            source={require("../../assets/doctor Images/image_480.png")}
            style={styles.image2}
          />
          <TouchableOpacity
            style={styles.getStartedButton2}
            onPress={() => console.log("Get Started pressed")}
          >
            <Text style={styles.buttonText2}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container4}>
          <Text style={styles.heading4}>Top Categories</Text>
          <View style={styles.row4}>
            <Image
              source={require("../../assets/doctor Images/ayurvedic.png")}
              style={styles.image4}
            />
            <Image
              source={require("../../assets/doctor Images/face_wash_cleansers.png")}
              style={styles.image4}
            />
            <Image
              source={require("../../assets/doctor Images/petfood_3.png")}
              style={styles.image4}
            />
          </View>
          <View style={styles.row4}>
            <Image
              source={require("../../assets/doctor Images/feminine_hygiene_2 (1).png")}
              style={styles.image4}
            />
            <Image
              source={require("../../assets/doctor Images/fitness.png")}
              style={styles.image4}
            />
            <Image
              source={require("../../assets/doctor Images/pain_relief_application.png")}
              style={styles.image4}
            />
          </View>
        </View>

        <View style={styles.content3}>
          <Text style={styles.heading3}>Top Doctors</Text>
          <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity
              style={styles.container3}
              onPress={handleCardPress1}
            >
              <View style={styles.imageContainer3}>
                <Image
                  source={require("../../assets/doctor Images/doctorimage2.webp")}
                  style={styles.image3}
                />
                <View style={styles.locationContainer3}>
                  <MaterialIcons name="access-time" size={16} color="#189AB4" />
                  <Text style={styles.location3}>3 min</Text>
                </View>
              </View>
              <View style={styles.contentContainer3}>
                <View style={styles.textContainer3}>
                  <Text style={styles.heading31}>Dr. Ekta Pandey</Text>
                  <Text style={styles.subHeading3}>General Physician</Text>
                  <Text style={styles.subHeading3}>10 yrs Experience</Text>
                  <Text style={styles.cost3}>₹999</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={handleCardPress1}
            >
              <View style={styles.imageContainer3}>
                <Image
                  ssource={require("../../assets/doctor Images/doctorimage3.webp")}
                  style={styles.image3}
                />
                <View style={styles.locationContainer3}>
                  <MaterialIcons name="access-time" size={16} color="#189AB4" />
                  <Text style={styles.location3}>3 min</Text>
                </View>
              </View>
              <View style={styles.contentContainer3}>
                <View style={styles.textContainer3}>
                  <Text style={styles.heading31}>Dr. Ekta Pandey</Text>
                  <Text style={styles.subHeading3}>General Physician</Text>
                  <Text style={styles.subHeading3}>10 yrs Experience</Text>
                  <Text style={styles.cost3}>₹999</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={handleCardPress1}
            >
              <View style={styles.imageContainer3}>
                <Image
                  source={require("../../assets/doctor Images/doctorimage4.webp")}
                  style={styles.image3}
                />
                <View style={styles.locationContainer3}>
                  <MaterialIcons name="access-time" size={16} color="#189AB4" />
                  <Text style={styles.location3}>3 min</Text>
                </View>
              </View>
              <View style={styles.contentContainer3}>
                <View style={styles.textContainer3}>
                  <Text style={styles.heading31}>Dr. Ekta Pandey</Text>
                  <Text style={styles.subHeading3}>General Physician</Text>
                  <Text style={styles.subHeading3}>10 yrs Experience</Text>
                  <Text style={styles.cost3}>₹999</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container3}
              onPress={handleCardPress1}
            >
              <View style={styles.imageContainer3}>
                <Image
                  source={require("../../assets/doctor Images/doctorimage6.webp")}
                  style={styles.image3}
                />
                <View style={styles.locationContainer3}>
                  <MaterialIcons name="access-time" size={16} color="#189AB4" />
                  <Text style={styles.location3}>3 min</Text>
                </View>
              </View>
              <View style={styles.contentContainer3}>
                <View style={styles.textContainer3}>
                  <Text style={styles.heading31}>Dr. Ekta Pandey</Text>

                  <Text style={styles.subHeading3}>General Physician</Text>
                  <Text style={styles.subHeading3}>10 yrs Experience</Text>
                  <Text style={styles.cost3}>₹999</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Repeat this block for each doctor */}
          </ScrollView>
        </View>

        <View style={styles.container5}>
          <Text style={styles.header5}>Shop by Brands</Text>
          <ScrollView horizontal={true} style={styles.scrollView5}>
            <View style={styles.imageContainer5}>
              <TouchableOpacity style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/ampers_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>Upto 36% off</Text>
                  <Text style={styles.subTextInsideBlock}>Pampers</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.imageContainer5}>
              <View style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/candid_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>Upto 10% off</Text>
                  <Text style={styles.subTextInsideBlock}>Candid</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer5}>
              <View style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/minimalist_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>New Launch</Text>
                  <Text style={styles.subTextInsideBlock}>Minimalist</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer5}>
              <View style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/wellbeing_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>Upto 20% off</Text>
                  <Text style={styles.subTextInsideBlock}>
                    Wellbeing Nutrition
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer5}>
              <View style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/gerber_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>New Launch</Text>
                  <Text style={styles.subTextInsideBlock}>Gerber</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer5}>
              <View style={styles.imageBlock5}>
                <Image
                  source={require("../../assets/doctor Images/derma_160.png")}
                  style={styles.image5}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textInsideBlock}>Upto 10% off</Text>
                  <Text style={styles.subTextInsideBlock}>THE DERMA CO</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* Add more image containers as needed */}
          </ScrollView>
        </View>
        <View style={styles.container9}>
          <View style={styles.cardContainer9}>
            <Text style={styles.boldHeading9}>
              Frequently Booked Together (5)
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollViewContent9}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity onPress={() => handlePackagePress}>
                <View style={styles.container9}>
                  <View style={[styles.cardContainer91, styles.cardBorder9]}>
                    <View style={styles.rowContainer9}>
                      <Image
                        source={require("../../assets/doctor Images/studies_160.png")}
                        style={styles.image9}
                      />
                      <View style={styles.textContainer9}>
                        <Text style={styles.heading9}>
                          Complete Blood Count (CBC)
                        </Text>
                        <View style={styles.subDescription9}>
                          <Text style={styles.subText9}>
                            Includes 83 Tests worth ₹3365
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rowContainer9}>
                      <Text style={styles.cashback9}>₹105 cashback</Text>
                      <View style={styles.addContainer9}>
                        <TouchableOpacity style={styles.addButton9}>
                          <Text style={styles.addButtonText9}>ADD</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePackagePress}>
                <View style={styles.container9}>
                  <View style={[styles.cardContainer91, styles.cardBorder9]}>
                    <View style={styles.rowContainer9}>
                      <Image
                        source={require("../../assets/doctor Images/studies_160.png")}
                        style={styles.image9}
                      />
                      <View style={styles.textContainer9}>
                        <Text style={styles.heading9}>
                          Liver Function Test (LFT)
                        </Text>
                        <View style={styles.subDescription9}>
                          <Text style={styles.subText9}>
                            Includes 83 Tests worth ₹3365
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rowContainer9}>
                      <Text style={styles.cashback9}>₹105 cashback</Text>
                      <View style={styles.addContainer9}>
                        <TouchableOpacity style={styles.addButton9}>
                          <Text style={styles.addButtonText9}>ADD</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePackagePress}>
                <View style={styles.container9}>
                  <View style={[styles.cardContainer91, styles.cardBorder9]}>
                    <View style={styles.rowContainer9}>
                      <Image
                        source={require("../../assets/doctor Images/studies_160.png")}
                        style={styles.image9}
                      />
                      <View style={styles.textContainer9}>
                        <Text style={styles.heading}>
                          Vitamin D Female - 25 Hydroxy (D2+D3)
                        </Text>
                        <View style={styles.subDescription9}>
                          <Text style={styles.subText9}>
                            Includes 83 Tests worth ₹3365
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rowContainer9}>
                      <Text style={styles.cashback9}>₹105 cashback</Text>
                      <View style={styles.addContainer9}>
                        <TouchableOpacity style={styles.addButton9}>
                          <Text style={styles.addButtonText9}>ADD</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePackagePress}>
                <View style={styles.container9}>
                  <View style={[styles.cardContainer91, styles.cardBorder9]}>
                    <View style={styles.rowContainer9}>
                      <Image
                        source={require("../../assets/doctor Images/studies_160.png")}
                        style={styles.image9}
                      />
                      <View style={styles.textContainer9}>
                        <Text style={styles.heading}>Creatinine, Serum</Text>
                        <View style={styles.subDescription9}>
                          <Text style={styles.subText9}>
                            Includes 83 Tests worth ₹3365
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rowContainer9}>
                      <Text style={styles.cashback9}>₹105 cashback</Text>
                      <View style={styles.addContainer9}>
                        <TouchableOpacity style={styles.addButton9}>
                          <Text style={styles.addButtonText9}>ADD</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <Text style={styles.header6}>Articles</Text>

        <ScrollView horizontal style={styles.container6}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.card6}>
              <Image
                source={require("../../assets/doctor Images/blog6.png")}
                style={styles.cardImage6}
              />
              <View style={styles.cardContent6}>
                <Text style={styles.cardText6}>
                  10 Things To Include In Your Winter Skincare Routine
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.card6}>
              <Image
                source={require("../../assets/doctor Images/blog2.png")}
                style={styles.cardImage6}
              />
              <View style={styles.cardContent6}>
                <Text style={styles.cardText6}>
                  Ingredients To Look For While Buying Skincare Products?
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.card6}>
              <Image
                source={require("../../assets/doctor Images/blog3.png")}
                style={styles.cardImage6}
              />
              <View style={styles.cardContent6}>
                <Text style={styles.cardText6}>
                  Step-by-step Skincare Routine
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.card6}>
              <Image
                source={require("../../assets/doctor Images/blog4.png")}
                style={styles.cardImage6}
              />
              <View style={styles.cardContent6}>
                <Text style={styles.cardText6}>
                  Vitamin B12: Uses, Benefits
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.card6}>
              <Image
                source={require("../../assets/doctor Images/blog5.png")}
                style={styles.cardImage6}
              />
              <View style={styles.cardContent6}>
                <Text style={styles.cardText6}>10-Minute Skincare Routine</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 28,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressContainer: {
    flexDirection: "column",
    marginLeft: 8,
  },
  addressHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  blocksContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 5,
  },
  blockRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageBlock: {
    width: 110,
    height: 90,
    // borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 5, // Add margin-right for spacing
    backgroundColor: "#D4F1F4",
  },
  imageContainer: {
    alignItems: "center",
  },
  blockText: {
    marginTop: 5,
    textAlign: "center",
  },
  image1: {
    width: "100%",
    height: "60%",
    resizeMode: "center", // Adjust the image's size to fit within the container
    marginTop: 20,
  },
  image11: {
    width: "100%",
    height: "60%",
    resizeMode: "center", // Adjust the image's size to fit within the container
    marginTop: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer2: {
    position: "relative",
    width: "93%", // Set the width and height of the container as needed
    height: 200,
    marginBottom: 20, // Adjust spacing between the image and button
  },
  image2: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust the resizeMode as needed
    marginLeft: 10,
    borderRadius: 10, // Adjust border radius if needed
  },
  getStartedButton2: {
    position: "absolute",
    bottom: 10,
    marginLeft: 120,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText2: {
    color: "#333", // Adjust text color as needed
    fontSize: 18,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconContainer: {
    alignItems: "center",
  },
  sosContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  sosButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 25,
  },
  sosText: {
    color: "white",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content3: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  heading3: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  moreButtonText3: {
    fontSize: 18,
    color: "#189AB4",
  },
  container3: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#189AB4",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 270,
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
  heading31: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeading3: {
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
    color: "#189AB4",
  },
  cost3: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  row4: {
    flexDirection: "row",
    marginTop: 10,
  },
  image4: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: "cover",
  },
  container4: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading4: {
    fontSize: 20,
    marginRight: "58%",
    fontWeight: "bold",
  },

  container5: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  header5: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    marginRight: "58%",
  },
  scrollView5: {
    flex: 1,
  },
  imageContainer5: {
    marginHorizontal: 5,
    alignItems: "center",
  },
  imageBlock5: {
    width: 150,
    height: 150,
    backgroundColor: "#D4F1F4",
    marginBottom: 5,
    borderTopEndRadius: 70,
    borderTopLeftRadius: 70,
    alignItems: "center",
  },
  image5: {
    width: 100,
    height: 50,
    borderRadius: 60,
    marginTop: 40,
  },
  textContainer: {
    alignItems: "center",
  },
  textInsideBlock: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  subTextInsideBlock: {
    textAlign: "center",
    marginTop: 5,
    color: "gray",
  },

  container6: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  card6: {
    width: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginLeft: 10,
  },
  cardImage6: {
    width: "90%",
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent6: {
    padding: 10,
  },
  cardText6: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  header6: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  container9: {
    flex: 1,

    marginTop: 10,

  },
  cardContainer9: {
    borderRadius: 10,

  },
  rowContainer9: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  image9: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  },
  textContainer9: {
    marginLeft: 10,
  },
  cardBorder9: {
    borderColor: "#189AB4",
    borderWidth: 1,
    borderRadius: 20,
  },
  boldHeading9: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 15,
  },
  heading9: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subDescription9: {
    marginTop: 5,
  },
  subText9: {
    fontSize: 14,
    color: "#666",
  },
  cashback9: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#189AB4",
  },
  addContainer9: {
    marginLeft: "auto",
  },
  addText9: {
    color: "#189AB4",
    fontWeight: "bold",
  },
  offer9: {
    fontSize: 16,
    marginTop: 5,
  },
  offerCross9: {
    textDecorationLine: "line-through",
    color: "grey",
  },
  cardSpace9: {
    marginRight: 10,
  },
  cardContainer91: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  addButton9: {
    backgroundColor: "#189AB4",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  addButtonText9: {
    color: "white",
    fontWeight: "bold",
  },
  searchBar: {
    marginBottom: 10,
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#189AB4",
    marginLeft: 20,
  },
  cardContainer1: {
    flexDirection: 'row', // Make cards side by side
    justifyContent: 'space-around', // Adjust as needed
    marginHorizontal: 10,
    paddingHorizontal: 10,
    width:"100%",

  },
  card1: {
    flex:1,
    flexDirection: 'row',
    padding: 10,
    
  },
  cardCover1: {
    width: 60,
    height: 60,
    justifyContent: "flex-start"
  },
  orderButtonContainer:{
    backgroundColor:"#189ab4",
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:8,
    width: 80,
    height:45,
    marginTop: 10,
    marginRight:10
  },
  cardCover: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 16, // Adjust font size as needed
  },

  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  containerImage: {
    width: 80, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    marginRight: 10, // Adjust the spacing between the image and text
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1, // Add border width
    borderColor: "#ccc", // Add border color
    borderRadius: 5, // Add border radius for rounded corners
    padding: 10, // Add padding to the container
  },
  textContainer: {
    flex: 1,
    flexDirection:'row'
  },
  arrowIcon: {
    marginRight: 10,
  },
  textWithArrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  OrderbyPrescription: {
    flexDirection: 'row', // Set the direction to row
    justifyContent: 'space-between', // Align items with space between
    alignItems: 'center', // Align items vertically in the center
    marginTop: 20,
  },
  textContainer11: {
    flex: 1, // Take up remaining space
    flexDirection:"row",
  },
  orderButton: {
    marginLeft: 10, // Add some space between the two views
  },
});

export default HomeScreen;