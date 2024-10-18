import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { Searchbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const LabsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleUpload = () => {
    navigation.navigate("Upload Lab Prescription");
  }
  const handleViewAllPress = () => {
    navigation.navigate("Health Checkups"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  const handleTestsViewAllPress = () => {
    navigation.navigate("Sub Categories"); // Replace 'TestsViewAll' with the name of the screen you want to navigate to
  };
  const handleCategoriesViewAllPress = () => {
    navigation.navigate("Categories"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };
  const handleGoToCartPage = () => {
    navigation.navigate("Lab Cart"); // Navigate to the "Cart" screen
  };
  const navigateToSubcategories = () => {

    navigation.navigate("Sub Categories");
  };
  const navigateToPackages = () => {
    navigation.navigate("Packages");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.heading}>Collect Sample from</Text>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>Madhurawada 530048</Text>
            <Feather name="chevron-down" size={24} color="black" />
           
          </View>
        </View>
        <View style={styles.icons}>
          <Icon
            name="shopping-cart"
            type="font-awesome"
            onPress={() => console.log("Cart icon pressed")}
            containerStyle={styles.iconContainer}
          />
          <Icon
            name="bell"
            type="font-awesome"
            onPress={() => console.log("Notification icon pressed")}
            containerStyle={styles.iconContainer}
          />
          <Icon
            name="user"
            type="font-awesome"
            onPress={() => console.log("Profile icon pressed")}
            containerStyle={styles.iconContainer}
          />
        </View>
      </View> */}
      <TouchableOpacity onPress={() => navigation.navigate("Search Labs")}>
        <Searchbar
          placeholder="Search tests & packages"
          style={styles.searchBar}
          iconColor="#189AB4"
        /></TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={styles.containerBelowSearch}>
          <Text style={styles.containerHeading}>
            Doctor Created Health Checks (31)
          </Text>
          <View style={styles.viewAllContainer}>
            <TouchableOpacity onPress={handleViewAllPress}>
              <View style={styles.viewAllContainer}>
                <Text style={styles.viewAllText}>View All</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainerMain}>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>


            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/fullbody1.webp")}
                style={{ width: 40, height: 40, alignSelf: 'center' }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Body Checkup</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/diabetes1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Diabetes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/women.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Women's Health</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainerMain}>

          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/thyroid1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Thyroid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/heart1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Heart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/fever1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Fever</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainerMain}>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/vitamin1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Vitamin</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/blood1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Blood Studies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/liver1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Liver</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainerMain}>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/harmone1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Harmone</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/hairfall1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Hairfall</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed}>
              <Image
                source={require("../../assets/Lab Icons/kidney1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer}>
              <Text>Kidney</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleUpload}>
          <View style={styles.middleContainer}>
            <Image
              source={require("../../assets/Lab Icons/submit.png")}
              style={styles.middleImage}
            />
            <Text style={styles.middleText}>Upload prescription to order</Text>
            <AntDesign name="right" size={16} color="#189ab4" style={{ fontWeight: "800" }} />
          </View>
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Top Booked Tests</Text>
          <TouchableOpacity onPress={handleTestsViewAllPress}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        {/* 
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollCards}>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <View>
                  <TouchableOpacity onPress={navigateToPackages}>
                    <Card containerStyle={styles.card}>
                      <View style={styles.cardContent}>
                        <Image
                          source={require("../../assets/Lab Icons/vitamin1.png")}
                          style={styles.cardImage}
                        />

                        <Text style={styles.cardText}>Vitamin-D female</Text>
                      </View>

                      <View style={styles.rowContainer}>
                        <View>
                          <Text style={styles.cashback}>₹17 cashback</Text>
                          <Text style={styles.offer}>
                            ₹249 <Text style={styles.offerCross}>(₹2200)</Text>{" "}
                            25% off
                          </Text>
                        </View>

                        <View style={styles.addContainer}>
                          <TouchableOpacity onPress={handleAddClick}>
                            <Text style={styles.addText}>Add</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Card>
                  </TouchableOpacity>

                </View>
              </TouchableOpacity>
              
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={showPopup}
                    onRequestClose={handleClosePopup}
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <View style={styles.rowContainer}>
                          <View style={styles.FixtextContainer}>
                            <Text> 2 tests added</Text>
                            <Text>₹2878</Text>
                          </View>
                            style={styles.Fixbutton}
                            onPress={handleGoToCartPage}
                          >
                            <Text style={styles.FixbuttonText}>Go to Cart</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/blood1.png")}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>Glucose Fasting</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹5 cashback</Text>
                      <Text style={styles.offer}>
                        ₹70 <Text style={styles.offerCross}>(₹93)</Text> 25% off
                      </Text>
                    </View>
                    <View style={styles.addContainer}>
                      <TouchableOpacity
                        onPress={() => console.log("Add clicked")}
                      >
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/vitamin1.png")}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>Vitamin-D female 1</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹105 cashback</Text>
                      <Text style={styles.offer}>
                        ₹1499 <Text style={styles.offerCross}>(₹1999)</Text> 25%
                        off
                      </Text>
                    </View>
                    <View style={styles.addContainer}>
                      <TouchableOpacity
                        onPress={() => console.log("Add clicked")}
                      >
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/blood1.png")}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>Glycated Hemoglobin</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹36 cashback</Text>
                      <Text style={styles.offer}>
                        ₹510 <Text style={styles.offerCross}>(₹680)</Text> 25%
                        off
                      </Text>
                    </View>
                    <View style={styles.addContainer}>
                      <TouchableOpacity
                        onPress={() => console.log("Add clicked")}
                      >
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/lipid1.png")}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>Lipid Profile</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹46 cashback</Text>
                      <Text style={styles.offer}>
                        ₹650 <Text style={styles.offerCross}>(₹867)</Text> 25%
                        off
                      </Text>
                    </View>
                    <View style={styles.addContainer}>
                      <Text style={styles.addText}>Add</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleViewAllPress}
              >
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/diabetes1.wepb.png")}
                      style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>Diabetes</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹6 cashback</Text>
                      <Text style={styles.offer}>
                        ₹80
                        <Text style={styles.offerCross}>(₹107)</Text> 25% off
                      </Text>
                    </View>
                    <View style={styles.addContainer}>
                      <TouchableOpacity
                        onPress={() => console.log("Add clicked")}
                      >
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView> */}
        <ScrollView
          horizontal showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.card}
            onPress={handleViewAllPress}
          >
            <View>
              <TouchableOpacity onPress={navigateToPackages}>
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/vitamin1.png")}
                      style={styles.cardImage}
                    />

                    <Text style={styles.cardText}>Vitamin-D female</Text>
                  </View>

                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹17 cashback</Text>
                      <Text style={styles.offer}>
                        ₹249 <Text style={styles.offerCross}>(₹2200)</Text>{" "}
                        25% off
                      </Text>
                    </View>

                    <View style={styles.addContainer}>
                      <TouchableOpacity onPress={handleAddClick}>
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={handleViewAllPress}
          >
            <View>
              <TouchableOpacity onPress={navigateToPackages}>
                <Card containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      source={require("../../assets/Lab Icons/vitamin1.png")}
                      style={styles.cardImage}
                    />

                    <Text style={styles.cardText}>Vitamin-D female</Text>
                  </View>

                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.cashback}>₹17 cashback</Text>
                      <Text style={styles.offer}>
                        ₹249 <Text style={styles.offerCross}>(₹2200)</Text>{" "}
                        25% off
                      </Text>
                    </View>

                    <View style={styles.addContainer}>
                      <TouchableOpacity onPress={handleAddClick}>
                        <Text style={styles.addText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Popular Health Packages
          </Text>
          <TouchableOpacity onPress={handleTestsViewAllPress}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container1}>
            <TouchableOpacity onPress={navigateToPackages}>
              <View style={styles.card1}>
                <View style={styles.rowContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/fullbody1.webp")}
                    style={styles.image1}
                  />
                  <View style={styles.textContainer1}>
                    <Text style={styles.heading1}>Health Check - Basic</Text>
                    <View style={styles.subDescription1}>
                      <Text style={styles.subText1}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer1}>
                  <View>
                    <Text style={styles.cashback1}>₹105 cashback</Text>
                    <Text style={styles.offer1}>
                      ₹1499 <Text style={styles.offerCross1}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer1}>
                    <TouchableOpacity
                      onPress={() => console.log("Add clicked")}
                    >
                      <Text style={styles.addText1}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine1} />
                <View style={styles.reportsContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon1}
                  />
                  <Text style={styles.reportsText1}>
                    Reports within 24 Hours
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPackages}>
              <View style={styles.card1}>
                <View style={styles.rowContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/thyroid1.wepb.png")}
                    style={styles.image1}
                  />
                  <View style={styles.textContainer1}>
                    <Text style={styles.heading1}>Thyroid Assessment-Basic</Text>
                    <View style={styles.subDescription1}>
                      <Text style={styles.subText1}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer1}>
                  <View>
                    <Text style={styles.cashback1}>₹105 cashback</Text>
                    <Text style={styles.offer1}>
                      ₹1499 <Text style={styles.offerCross1}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer1}>
                    <TouchableOpacity onPress={() => console.log("Add clicked")}>
                      <Text style={styles.addText1}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine1} />
                <View style={styles.reportsContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon1}
                  />
                  <Text style={styles.reportsText1}>Reports within 24 Hours</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPackages}>
              <View style={styles.card1}>
                <View style={styles.rowContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/vitamin1.png")}
                    style={styles.image1}
                  />
                  <View style={styles.textContainer1}>
                    <Text style={styles.heading1}>Vitamin Check - Basic</Text>
                    <View style={styles.subDescription1}>
                      <Text style={styles.subText1}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer1}>
                  <View>
                    <Text style={styles.cashback1}>₹105 cashback</Text>
                    <Text style={styles.offer1}>
                      ₹1499 <Text style={styles.offerCross1}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer1}>
                    <TouchableOpacity onPress={() => console.log("Add clicked")}>
                      <Text style={styles.addText1}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine1} />
                <View style={styles.reportsContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon1}
                  />
                  <Text style={styles.reportsText1}>Reports within 24 Hours</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPackages}>
              <View style={styles.card1}>
                <View style={styles.rowContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/blood1.png")}
                    style={styles.image1}
                  />
                  <View style={styles.textContainer1}>
                    <Text style={styles.heading1}>Complete Blood Count</Text>
                    <View style={styles.subDescription1}>
                      <Text style={styles.subText1}>
                        Includes 28 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer1}>
                  <View>
                    <Text style={styles.cashback1}>₹105 cashback</Text>
                    <Text style={styles.offer1}>
                      ₹1499 <Text style={styles.offerCross1}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer1}>
                    <TouchableOpacity onPress={() => console.log("Add clicked")}>
                      <Text style={styles.addText1}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine1} />
                <View style={styles.reportsContainer1}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon1}
                  />
                  <Text style={styles.reportsText1}>Reports within 24 Hours</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.mainContainer2}>
          <View style={styles.textContainer2}>
            <Text style={styles.mainText2}>New On</Text>
            <TouchableOpacity>
              <View style={styles.subTextContainer2}>
                <TouchableOpacity onPress={handleCategoriesViewAllPress}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../assets/Lab Icons/diabetes1.wepb.png")}
                style={styles.image2}
              />
              <Text style={styles.text2}>Diabetes</Text>
            </View>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../assets/Lab Icons/insurance1.png")}
                style={styles.image2}
              />
              <Text style={styles.text2}>Insurance</Text>
            </View>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../assets/Lab Icons/medicine1.png")}
                style={styles.image2}
              />
              <Text style={styles.text2}>My Medicine</Text>
            </View>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../assets/Lab Icons/doctors1.png")}
                style={styles.image2}
              />
              <Text style={styles.text2}>Ask doctors</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainRowContainer2}>
          <Text style={styles.bookHeading2}>Book Lab Test With Us</Text>
          <View style={styles.rowContainer2}>
            <View style={styles.secondContainer2}>
              <Image
                source={require("../../assets/Lab Icons/reports1.png")}
                style={styles.image31}
              />
              <View>
                <Text style={styles.textPercentage2}>98%</Text>
                <Text style={styles.textDescription2}>
                  On-time report {"\n"}delivery
                </Text>
              </View>
            </View>
            <View style={styles.secondContainer2}>
              <Image
                source={require("../../assets/Lab Icons/reviews1.png")}
                style={styles.image31}
              />
              <View>
                <Text style={styles.textPercentage2}>99%</Text>
                <Text style={styles.textDescription2}>
                  Positive Customer {"\n"}reviews
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rowContainerSecond2}>
            <View style={styles.secondContainer2}>
              <Image
                source={require("../../assets/Lab Icons/sample1.png")}
                style={styles.image31}
              />
              <View>
                <Text style={styles.textPercentage2}>97%</Text>
                <Text style={styles.textDescription2}>
                  Timely sample {"\n"}collections
                </Text>
              </View>
            </View>
            <View style={styles.secondContainer2}>
              <Image
                source={require("../../assets/Lab Icons/assurance1.png")}
                style={styles.image31}
              />
              <View>
                <Text style={styles.textPercentage2}>Medicine Assurance</Text>
                <Text style={styles.textDescription2}>
                  Prestagious Certifications: {"\n"}NABL,CAP, and UKAS
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.textContainer3}>
          <Text style={styles.mainText3}>Health Packages(13)</Text>
          <TouchableOpacity>
            <View style={styles.subTextContainer3}>
              <Text style={styles.subText3}>View All</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity onPress={navigateToSubcategories}>
            <View style={styles.imageContainer3}>
              <Image
                source={require("../../assets/Lab Icons/fullbody1.webp")}
                style={styles.image3}
              />

              <Text style={styles.text3}>Full Body {"\n"}Checkup</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSubcategories}>
            <View style={styles.imageContainer3}>
              <Image
                source={require("../../assets/Lab Icons/women.png")}
                style={styles.image3}
              />
              <Text style={styles.text3}>Women's {"\n"}Wellness</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSubcategories}>
            <View style={styles.imageContainer3}>
              <Image
                source={require("../../assets/Lab Icons/men1.png")}
                style={styles.image3}
              />
              <Text style={styles.text3}>Men's {"\n"}Wellness</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSubcategories}>
            <View style={styles.imageContainer3}>
              <Image
                source={require("../../assets/Lab Icons/diabetes1.wepb.png")}
                style={styles.image3}
              />
              <Text style={styles.text3}>Diabetes {"\n"}Packages</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer4}>
          <Text style={styles.mainText4}>Vital Organs </Text>
        </View>
        <View style={styles.textContainer41}>
          <View style={styles.cardContainerMain2}>
            <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>

              <View style={styles.cardImageNeed2}>
                <Image
                  source={require("../../assets/Lab Icons/liver1.png")}
                  style={{ width: 40, height: 40 }}
                />
              </View>

              <View style={styles.CardTextContainer2}>
                <Text>Liver</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>
              <View style={styles.cardImageNeed2}>
                <Image
                  source={require("../../assets/Lab Icons/bone1.png")}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.CardTextContainer2}>
                <Text>Bone</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>
              <View style={styles.cardImageNeed2}>
                <Image
                  source={require("../../assets/Lab Icons/jointpain1.png")}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.CardTextContainer2}>
                <Text>Joint Pain</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainerMain2}>
          <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed2}>
              <Image
                source={require("../../assets/Lab Icons/thyroid1.wepb.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer2}>
              <Text>Thyroid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed2}>
              <Image
                source={require("../../assets/Lab Icons/heart1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer2}>
              <Text>Heart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardConfirmation2} onPress={navigateToSubcategories}>
            <View style={styles.cardImageNeed2}>
              <Image
                source={require("../../assets/Lab Icons/kidney1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.CardTextContainer2}>
              <Text>Kidney</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.textContainer5}>
              <Image
                source={require("../../assets/Lab Icons/steps1.png")}
                style={styles.image5}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.mainText5}>How to Book a Lab Test</Text>
                {/* <AntDesign name="right" size={18} color="black" style={{fontWeight:"800"}} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalContainer1}>
              <View style={styles.modalContent1}>
                <View style={styles.headingRow}>
                  <Text style={styles.BottomHeading}>How does it work?</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.BottomContainer}>
                  <Image
                    source={require("../../assets/Lab Icons/appointment1.png")}
                    style={styles.BottomImage}
                  />
                  <View style={styles.textColumn}>
                    <Text style={styles.BottomContainerText}>
                      Book Appointment
                    </Text>
                    <Text style={styles.BottomSubText}>
                      Select a Test/Package and book an appointment
                    </Text>
                  </View>
                </View>
                <View style={styles.BottomContainer}>
                  <Image
                    source={require("../../assets/Lab Icons/sample21.png")}
                    style={styles.BottomImage}
                  />
                  <View style={styles.textColumn}>
                    <Text style={styles.BottomContainerText}>
                      Home Sample Collection
                    </Text>
                    <Text style={styles.BottomSubText}>
                      A certificate agent visits you for sample collection at
                      your selected time slot.
                    </Text>
                  </View>
                </View>
                <View style={styles.BottomContainer}>
                  <Image
                    source={require("../../assets/Lab Icons/results1.png")}
                    style={styles.BottomImage}
                  />
                  <View style={styles.textColumn}>
                    <Text style={styles.BottomContainerText}>
                      Fast & Accurate Results
                    </Text>
                    <Text style={styles.BottomSubText}>
                      Get reports in 12-24 hrs. View and download from the app
                      anytime
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.textContainer6}>
          <Text style={styles.mainText6}>Popular Categories (35)</Text>
          <TouchableOpacity onPress={handleViewAllPress}>
            <View style={styles.subTextContainer6}>
              <Text style={styles.subText6}>View All</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container6}>
          <ScrollView horizontal={true}>
            <View style={styles.cardContainer6}>
              <TouchableOpacity onPress={handleTestsViewAllPress}>
                <View style={styles.card6}>
                  <Image
                    source={require("../../assets/Lab Icons/pregency1.png")}
                    style={styles.icon6}
                  />
                  <Text style={styles.cardText6}>Pregnancy</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer6}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.card6}>
                <Image
                  source={require("../../assets/Lab Icons/allergy1.png")}
                  style={styles.icon6}
                />
                <Text style={styles.cardText6}>Allergy</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer6}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.card6}>
                <Image
                  source={require("../../assets/Lab Icons/heart1.png")}
                  style={styles.icon6}
                />
                <Text style={styles.cardText6}>Heart</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer6}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.card6}>
                <Image
                  source={require("../../assets/Lab Icons/covid1.png")}
                  style={styles.icon6}
                />
                <Text style={styles.cardText6}>Covid 19</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer6}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.card6}>
                <Image
                  source={require("../../assets/Lab Icons/stress1.png")}
                  style={styles.icon6}
                />
                <Text style={styles.cardText6}>Stress</Text>
              </View>
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer6}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.card6}>
                <Image
                  source={require("../../assets/Lab Icons/thyroid1.wepb.png")}
                  style={styles.icon6}
                />
                <Text style={styles.cardText6}>Thyroid</Text>
              </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.textContainer7}>
            <Text style={styles.mainText7}>Women Care(5)</Text>
            <TouchableOpacity>
              <View style={styles.subTextContainer7}>
                <Text style={styles.subText7}>View All</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container7}>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <View style={styles.imageContainer7}>
                <Image
                  source={require("../../assets/Lab Icons/pcod1.png")}
                  style={styles.image7}
                />
                <Text style={styles.text7}>PCOD</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.imageContainer7}>
              <Image
                source={require("../../assets/Lab Icons/blood12.png")}
                style={styles.image7}
              />
              <Text style={styles.text7}>Blood</Text>
            </View>
            <View style={styles.imageContainer7}>
              <Image
                source={require("../../assets/Lab Icons/pregency1.png")}
                style={styles.image7}
              />
              <Text style={styles.text7}>Pregnancy</Text>
            </View>
            <View style={styles.imageContainer7}>
              <Image
                source={require("../../assets/Lab Icons/ironstudies1.png")}
                style={styles.image7}
              />
              <Text style={styles.text7}>Iron Studies</Text>
            </View>
          </View>

          <View style={styles.mainRowContainer8}>
            <Text style={styles.bookHeading8}>
              Your Trusted Lab-Test Partner
            </Text>
            <View style={styles.rowContainer8}>
              <View style={styles.secondContainer8}>
                <Image
                  source={require("../../assets/Lab Icons/sample1.png")}
                  style={styles.image8}
                />
                <View>
                  <Text style={styles.textPercentage8}>10 Million</Text>
                  <Text style={styles.textDescription8}>
                    high quality annual {"\n"}diagnostics tests
                  </Text>
                </View>
              </View>
              <View style={styles.secondContainer8}>
                <Image
                  source={require("../../assets/Lab Icons/lab1.png")}
                  style={styles.image8}
                />
                <View>
                  <Text style={styles.textPercentage8}>140+</Text>
                  <Text style={styles.textDescription8}>
                    Laboratories {"\n"}across the country
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.rowContainerSecond8}>
              <View style={styles.secondContainer8}>
                <Image
                  source={require("../../assets/Lab Icons/healthcare1.png")}
                  style={styles.image8}
                />
                <View>
                  <Text style={styles.textPercentage8}>40 Years</Text>
                  <Text style={styles.textDescription8}>
                    of Medicine {"\n"}healthcare legacy
                  </Text>
                </View>
              </View>
              <View style={styles.secondContainer8}>
                <Image
                  source={require("../../assets/Lab Icons/location12.png")}
                  style={styles.image8}
                />
                <View>
                  <Text style={styles.textPercentage8}>2000+</Text>
                  <Text style={styles.textDescription8}>
                    Collection centres {"\n"}across 80+ cities
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.headingContainer9}>
            <Text style={styles.headingText9}>Women Wellness (18)</Text>
            <TouchableOpacity onPress={handleTestsViewAllPress}>
              <Text style={styles.viewAllText9}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollViewContent9}
          >
            <View style={styles.container9}>
              <TouchableOpacity onPress={navigateToPackages}>
                <View style={styles.card9}>
                  <View style={styles.rowContainer9}>
                    <Image
                      source={require("../../assets/Lab Icons/vitamin1.png")}
                      style={styles.image9}
                    />
                    <View style={styles.textContainer9}>
                      <Text style={styles.heading9}>Vitamin-D Female</Text>
                      <View style={styles.subDescription9}>
                        <Text style={styles.subText9}>
                          Includes 83 Tests worth ₹3365
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.rowContainer9}>
                    <View>
                      <Text style={styles.cashback9}>₹105 cashback</Text>
                      <Text style={styles.offer9}>
                        ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text>{" "}
                        25% off
                      </Text>
                    </View>
                    <View style={styles.addContainer9}>
                      <TouchableOpacity
                        onPress={() => console.log("Add clicked")}
                      >
                        <Text style={styles.addText9}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.marginLine9} />
                  <View style={styles.reportsContainer9}>
                    <Image
                      source={require("../../assets/Lab Icons/reports1.png")}
                      style={styles.reportIcon9}
                    />
                    <Text style={styles.reportsText9}>
                      Reports within 24 Hours
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.card9}>
                <View style={styles.rowContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/vitamin1.png")}
                    style={styles.image9}
                  />
                  <View style={styles.textContainer9}>
                    <Text style={styles.heading9}>Women Health-Essential</Text>
                    <View style={styles.subDescription9}>
                      <Text style={styles.subText9}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer9}>
                  <View>
                    <Text style={styles.cashback9}>₹105 cashback</Text>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer9}>
                    <TouchableOpacity
                      onPress={() => console.log("Add clicked")}
                    >
                      <Text style={styles.addText9}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine9} />
                <View style={styles.reportsContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon9}
                  />
                  <Text style={styles.reportsText9}>
                    Reports within 24 Hours
                  </Text>
                </View>
              </View>
              <View style={styles.card9}>
                <View style={styles.rowContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/vitamin1.png")}
                    style={styles.image9}
                  />
                  <View style={styles.textContainer9}>
                    <Text style={styles.heading9}>Women Health-Advance</Text>
                    <View style={styles.subDescription9}>
                      <Text style={styles.subText9}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer9}>
                  <View>
                    <Text style={styles.cashback9}>₹105 cashback</Text>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer9}>
                    <TouchableOpacity
                      onPress={() => console.log("Add clicked")}
                    >
                      <Text style={styles.addText9}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine9} />
                <View style={styles.reportsContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon9}
                  />
                  <Text style={styles.reportsText9}>
                    Reports within 24 Hours
                  </Text>
                </View>
              </View>
              <View style={styles.card9}>
                <View style={styles.rowContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/thyroid1.wepb.png")}
                    style={styles.image9}
                  />
                  <View style={styles.textContainer9}>
                    <Text style={styles.heading9}>
                      Women Health Check - Basic
                    </Text>
                    <View style={styles.subDescription9}>
                      <Text style={styles.subText9}>
                        Includes 83 Tests worth ₹3365
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowContainer9}>
                  <View>
                    <Text style={styles.cashback9}>₹105 cashback</Text>
                    <Text style={styles.offer9}>
                      ₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25%
                      off
                    </Text>
                  </View>
                  <View style={styles.addContainer9}>
                    <TouchableOpacity
                      onPress={() => console.log("Add clicked")}
                    >
                      <Text style={styles.addText9}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.marginLine9} />
                <View style={styles.reportsContainer9}>
                  <Image
                    source={require("../../assets/Lab Icons/reports1.png")}
                    style={styles.reportIcon9}
                  />
                  <Text style={styles.reportsText9}>
                    Reports within 24 Hours
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 70,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  heading: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
  subHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subHeading: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
  iconContainer: {
    marginRight: 15,
  },
  containerBelowSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 18
  },
  containerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  viewAllContainer: {
    borderRadius: 5,
  },
  viewAllText: {
    color: "#189AB4",
    fontWeight: "bold",
  },
  cardContainerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center align items horizontally
  },
  cardConfirmation: {
    width: "28%",
    borderRadius: 10,
    height: 93,
    borderWidth: 1,
    borderColor: "#189ab4",
    alignItems: "center",
    justifyContent: "center", // Center align items vertically
    margin: 5,
    padding: 3
  },
  CardTextContainer: {
    marginTop: 5,
    textAlign: "center",
  },
  cardImageNeed: {
    height: 40,
    width: 40,
  },

  middleContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    backgroundColor: "#d1f1f4",
    borderRadius: 5,
    borderColor: "#189AB4",
    borderWidth: 1,
    width: "90%",
    marginLeft: "auto", // Push the container to the right
    marginRight: "auto", // Push the container to the left
    marginTop: 20,
    padding: 5,
  },
  middleText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    marginRight: 70,
  },
  arrowIcon: {
    fontSize: 5,
  },

  middleImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    padding: 10,
  },

  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 18,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  viewAllText: {
    color: "#189AB4",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  scrollCards: {
    marginBottom: 10,
  },
  card: {
    width: 250, // Adjust the width of each card as needed
    borderRadius: 5,
    marginRight: 10,
    height: 130,
    marginBottom: 10,
  },
  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  cardText: {
    textAlign: "center",
    marginTop: 5,
    marginLeft: 20,
  },
  cashback: {
    color: "red",
    fontSize: 10,
  },
  offer: {
    color: "gray",
    fontSize: 12,
  },
  offerCross: {
    textDecorationLine: "line-through",
  },
  addContainer: {
    backgroundColor: "#189AB4",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    marginLeft: 50,
  },
  addText: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    fontSize: 14,
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  container1: {
    flexDirection: "row",
  },
  card1: {
    width: 300,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 170,
  },
  rowContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image1: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer1: {
    flex: 1,
  },
  heading1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subDescription1: {
    marginRight: 60,
    backgroundColor: "#D4F1F4",
    borderRadius: 5,
    marginTop: 5,
    width: 170,
  },
  subText1: {
    fontSize: 12,
    color: "black",
    padding: 5,
    width: 250,
  },
  cashback1: {
    color: "red",
    fontSize: 10,
  },
  offer1: {
    color: "gray",
    fontSize: 12,
  },
  offerCross1: {
    textDecorationLine: "line-through",
  },
  addContainer1: {
    backgroundColor: "#189AB4",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  addText1: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    fontSize: 14,
  },
  marginLine1: {
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 5,
  },
  reportsContainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reportIcon1: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  reportsText1: {
    color: "gray",
    fontWeight: "bold",
  },
  mainContainer2: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  mainText2: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  subTextContainer2: {
    flex: 1,
    alignItems: "flex-end",

  },
  subText2: {
    color: "#189AB4",
    fontSize: 16,
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer2: {
    alignItems: "center",
    marginTop: 20,
  },

  text2: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    marginRight: 15,
  },
  mainRowContainer2: {
    backgroundColor: "#D4F1F4",
    width: "100%",
    height: 200,
    alignItems: "center",
    marginTop: 10,
  },
  bookHeading2: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
    color: "#05445e",
  },
  rowContainer2: {
    flexDirection: "row",
    marginBottom: "5%",
    marginRight: 10,
  },
  secondContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  image2: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 20,
  },
  image31: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginRight: 20,
  },
  textPercentage2: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#05445e"
  },
  textDescription2: {
    fontSize: 10,
  },
  rowContainerSecond2: {
    flexDirection: "row",
    marginBottom: "10%",
    marginLeft: "12%",
  },

  textContainer3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 15,
  },
  mainText3: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  subTextContainer3: {
    flex: 1,
    marginTop: 5,
  },
  subText3: {
    color: "#189AB4",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    marginTop: 10,
  },
  imageContainer3: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignItems: "center",
  },
  text3: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  image3: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  textContainer4: {
    flexDirection: "row",
    marginTop: 5,
  },
  mainText4: {
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 18,
  },
  subTextContainer4: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginLeft: 130,
    marginTop: 5,
  },
  subText4: {
    color: "#189AB4",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  textContainer41: {
    marginTop: 10,
  },
  cardContainerMain2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center align items horizontally
  },
  cardConfirmation2: {
    width: "28%",
    borderRadius: 10,
    height: 93,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center", // Center align items vertically
    margin: 6,
  },
  CardTextContainer2: {
    marginTop: 5,
    textAlign: "center",
  },
  cardImageNeed2: {
    height: 40,
    width: 40,
  },
  textContainer5: {
    flexDirection: "row",
    backgroundColor: "#eaf7f9",
    borderRadius: 5,
    borderColor: "#189AB4",
    borderWidth: 1,
    width: "90%",
    marginLeft: "auto", // Push the container to the right
    marginRight: "auto", // Push the container to the left
    marginTop: 10,
    padding: 5
  },
  mainText5: {
    fontWeight: "bold",
    marginHorizontal: 10,
    fontSize: 16,
    marginTop: 5
  },
  image5: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  icon5: {
    marginLeft: 200,
  },

  textContainer6: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal:15,
  },
  subTextContainer6: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 15,
  },
  mainText6: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom:10,
    marginTop: 10,
  },
  subText6: {
    marginBottom: 20,
    color: "#189AB4",
    fontSize: 14,
    fontWeight: "bold",
  },
  container6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  cardContainer6: {
    marginRight: 10,
  },
  card6: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    height: 70,
    width: 170,
  },
  icon6: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginRight: 10,
  },
  cardText6: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  textContainer7: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop: 10,
  },
  mainText7: {
    fontWeight: "bold",
    marginHorizontal: 10,
    fontSize: 18,
  },
  subTextContainer7: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 30,
  },
  subText7: {
    color: "#189AB4",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  container7: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 3,
    marginTop: 10,
    marginRight: 10,
  },
  imageContainer7: {
    padding: 10,

    alignItems: "center",
    margin: 5,
    height: 90,
    width: 80,
    marginRight: 15,
    paddingHorizontal: 5,
  },
  image7: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  text7: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  mainRowContainer8: {
    backgroundColor: "#D4F1F4",
    width: "120%",
    height: 200,
    alignItems: "center",
    marginRight: 40,
  },

  bookHeading8: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    margin: 15,
    marginLeft: 40,
  },
  rowContainer8: {
    flexDirection: "row",
    marginBottom: "5%",
    marginLeft: 30,
  },
  secondContainer8: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  image8: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginRight: 20,
  },
  textPercentage8: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  textDescription8: {
    fontSize: 10,
  },
  rowContainerSecond8: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 30,
  },
  scrollViewContent9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  container9: {
    flexDirection: "row",
    marginLeft: -20,
  },
  card9: {
    width: 300,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  rowContainer9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image9: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer9: {
    flex: 1,
  },
  heading9: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subDescription9: {
    marginRight: 60,
    backgroundColor: "#D4F1F4",
    borderRadius: 5,
    marginTop: 5,
    width: 170,
  },
  subText9: {
    fontSize: 12,
    color: "black",
    padding: 5,
  },
  cashback9: {
    color: "red",
    fontSize: 10,
  },
  offer9: {
    color: "gray",
    fontSize: 12,
  },
  offerCross9: {
    textDecorationLine: "line-through",
  },
  addContainer9: {
    backgroundColor: "#189AB4",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  addText9: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    fontSize: 14,
  },
  marginLine9: {
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 5,
  },
  reportsContainer9: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reportIcon9: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  reportsText9: {
    color: "gray",
    fontWeight: "bold",
  },
  headingContainer9: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 90,
    marginTop: 10,
  },
  headingText9: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 75,
  },
  viewAllText9: {
    color: "#189AB4",
    fontWeight: "bold",
    marginLeft: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent1: {
    backgroundColor: "#fff",
    padding: 20,

    width: "100%",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,

    width: "100%",
  },
  BottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  BottomImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  BottomContainerText: {
    fontSize: 16,
    color: "#189AB4",
  },
  BottomHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BottomSubText: {
    fontSize: 14,
    color: "black",
    marginRight: 50,
  },
  textColumn: {
    flexDirection: "column",
  },
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  Fixcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    margin: 20,
  },
  FixtextContainer: {
    flex: 1,
  },
  Fixbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#189AB4",
    borderRadius: 5,
  },
  FixbuttonText: {
    color: "white",
  },
  searchBar: {
    marginBottom: 10,
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#189AB4",
    marginLeft: 20,
  },
});

export default LabsScreen;