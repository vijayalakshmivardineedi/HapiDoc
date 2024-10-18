import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const HealthPackages = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [showTerms, setShowTerms] = useState(false); // State to manage visibility of terms
  const [showFAQAnswer, setShowFAQAnswer] = useState([
    false,
    false,
    false,
    false,
  ]);
  const navigation = useNavigation();


   const toggleFAQAnswer = (index) => {
     setShowFAQAnswer((prevState) => {
       const updatedState = [...prevState];
       updatedState[index] = !updatedState[index];
       return updatedState;
     });
   };


  const handleContainerPress = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  const handleDropQuery = () => {
    navigation.navigate("Checkout"); // Replace "Checkout" with the name of your screen component
  };
  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };


  const renderAdditionalContent = () => {
    if (selectedCardIndex !== null) {
      switch (selectedCardIndex) {
        case 0:
          return (
            <View style={styles.additionalContainer2}>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/limited.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Limited Time Offers!
                  </Text>
                  <Text style={styles.additionalText21}>
                    Buy Family Doctor plan at just @2999 in our limited time
                    offer!
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/consultant-services.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Unlimited Consulations
                  </Text>
                  <Text style={styles.additionalText21}>
                    Unlimited consulations with trusted doctors at affordable
                    prices.
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/chat.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                   Free Chat Access
                  </Text>
                  <Text style={styles.additionalText21}>
                  7-day chat access after every consulations.
                  </Text>
                </View>
              </View>
            </View>
          );
        case 1:
          return (
            <View style={styles.additionalContainer2}>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/limited.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Limited Time Offers!
                  </Text>
                  <Text style={styles.additionalText21}>
                    Buy Family Doctor plan at just @1499 in our limited time
                    offer!
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/consultant-services.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Unlimited Consulations
                  </Text>
                  <Text style={styles.additionalText21}>
                    Unlimited consulations with trusted doctors at affordable
                    prices.
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/chat.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>Free Chat Access</Text>
                  <Text style={styles.additionalText21}>
                    7-day chat access after every consulations.
                  </Text>
                </View>
              </View>
            </View>
          );
        case 2:
          return (
            <View style={styles.additionalContainer2}>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/limited.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Limited Time Offers!
                  </Text>
                  <Text style={styles.additionalText21}>
                    Buy Family Doctor plan at just @2700 in our limited time
                    offer!
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/consultant-services.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>
                    Unlimited Consulations
                  </Text>
                  <Text style={styles.additionalText21}>
                    Unlimited consulations with trusted doctors at affordable
                    prices.
                  </Text>
                </View>
              </View>
              <View style={styles.additionalContent2}>
                <Image
                  source={require("../../../assets/doctor Images/chat.png")}
                  style={styles.additionalImage2}
                />
                <View>
                  <Text style={styles.additionalText2}>Free Chat Access</Text>
                  <Text style={styles.additionalText21}>
                    7-day chat access after every consulations.
                  </Text>
                </View>
              </View> 
            </View>
          );
     
        default:
          return null;
      }
    }
    return null;
  };

  const renderAdditionalContainers = () => {
    const additionalContainers = [
      { text: "Family doctor plan - 12 months @ ₹2999" },
      { text: "Family doctor plan - 3 months @ ₹1499" },
      { text: "Family doctor plan - 6 months @ ₹2499" },
      { text: "Family doctor plan - 24 months  @ ₹4999" },
      { text: " GP Family doctor plan - 12 months @ ₹2999" },
    ];

    return additionalContainers.map((container, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.additionalContainer,
          {
            backgroundColor: selectedCardIndex === index ? "" : "#FFFFFF",
            borderColor: selectedCardIndex === index ? "#189ab4" : "#fff",
          },
        ]}
        onPress={() => handleContainerPress(index)}
      >
        <FontAwesome
          name="check-circle"
          size={16}
          color={selectedCardIndex === index ? "#189ab4" : "#eaf7f4"}
        />
        {/* <FontAwesome name="users" size={14} color="#189ab4" /> */}
        <Text style={styles.additionalText}>{container.text}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.anotherContainer}>
            <View style={styles.rightContent}>
              <Text style={styles.leftText}>Family doctor plans</Text>
              <Image
                source={require("../../../assets/doctor Images/family-2073604_1280-1200x675.webp")}
                style={styles.image}
              />
            </View>
            <View style={styles.Dottedline}></View>
            {/* Right side text */}
            <View style={styles.rightTextContainer}>
              <Text style={styles.rightText}>
                Unlimited Consultations for Entire Family
              </Text>
              <View style={styles.SubcardContainer}>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
                <Text style={styles.subText}>@ ₹1499 for 3 Months</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText01}>
            Book online consultation with HapiDoc General Physicians,
            Nutritionists, Child Specialists, Gynaecologists, Dermatology and
            MORE.
          </Text>
        </View>
        {renderAdditionalContainers()}
        {/* Additional Content */}
        {renderAdditionalContent()}
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>How Does It Work</Text>
          <Image
            source={require("../../../assets/doctor Images/nutritionist.png")}
            style={styles.rowImage}
          />
        </View>
        <View style={styles.Line}></View>
        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/user.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            Select the patient's profile for consultation and complete your
            booking.
          </Text>
        </View>
        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/video-camera.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            An HapiDoc doctor will be assigned to you in the next 15 minutes.
          </Text>
        </View>
        <View style={styles.rowContainer2}>
          <Image
            source={require("../../../assets/doctor Images/user.png")}
            style={styles.rowImage2}
          />
          <Text style={styles.rowText2}>
            View your booked appointment in the 'My Appointment' section on your
            app.
          </Text>
        </View>

        <View style={styles.faqContainer}>
          <Text style={styles.faqHeading}>FAQs</Text>
          <View style={styles.divider} />

          {/* FAQ Questions and Answers */}
          <View>
            {/* FAQ Question 1 */}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(0)}
            >
              <Text style={styles.faqQuestionText}>
                Why Should I choose this plan?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[0] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[0] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  The HapiDoc Family Doctor plan is an affordable healthcare
                  plan that offers comprehensive care for the entire family.
                  Regular check-ups will help you keep track of your family's
                  health.
                </Text>
                <Text style={styles.faqAnswerText}>
                  Consulations With General Physicians, Dermatologists, Urology,
                  Diabetologists, ENT specialists, and Dieticians can help you
                  develop healthy routine and regimes in addition to addressing
                  any concern you many have.
                </Text>
                <Text style={styles.faqAnswerText}>
                  Highly recommended for individuals who suffer from or have a
                  family history of medical conditions such as blood pressure,
                  diabetes etc.
                </Text>
              </View>
            )}

            {/* FAQ Question 2 */}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(1)}
            >
              <Text style={styles.faqQuestionText}>
                How many peoples can avail this plan?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[1] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[1] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  The Family Doctor plan os meant for a family of up to 6
                  members you can avail this plan for 6 or fewer members.
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(2)}
            >
              <Text style={styles.faqQuestionText}>
                What is the validity/duration of this plan?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[2] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[2] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  The Family Doctor plan is valid for 12 months. All
                  appointments should be scheduled and completed within 12
                  months. The plan cannot be extended beyond this period.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(3)}
            >
              <Text style={styles.faqQuestionText}>
                Can I choose my doctor?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[3] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[3] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  No. Doctors are assigned as per the earliest available slot.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(4)}
            >
              <Text style={styles.faqQuestionText}>
                How consulations will i get?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[4] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[4] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  As a fair usage policy, you can avail up to 15 consulations in
                  a month with the doctors assigned to you. That's total of 180
                  consulations during the 12-months validity period per
                  specialty.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(5)}
            >
              <Text style={styles.faqQuestionText}>Can I cancel my plan?</Text>
              <FontAwesome5
                name={showFAQAnswer[5] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[5] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  If you are not satisfied with our services, you can cancel
                  your plan right after the first consulations but no later than
                  that.
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFAQAnswer(6)}
            >
              <Text style={styles.faqQuestionText}>
                Can I book future appointment?
              </Text>
              <FontAwesome5
                name={showFAQAnswer[6] ? "angle-up" : "angle-down"}
                size={24}
                color="#189AB4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {showFAQAnswer[6] && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswerText}>
                  No. However existing appointments can be rescheduled to a
                  future date.
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.container7}>
          <View style={styles.header7}>
            <Text style={styles.headerText7}>Terms and Conditions</Text>
            <TouchableOpacity onPress={toggleTerms} style={styles.arrowBtn}>
              <FontAwesome5
                name={showTerms ? "angle-up" : "angle-down"} // Use angle-up and angle-down icons
                size={24}
                color="#189AB4"
              />
            </TouchableOpacity>
          </View>
          {showTerms && (
            <View style={styles.content7}>
              <Text style={styles.termsText}>
                1. Family Doctor pln is a package program offered by HapiDoc, a
                digital platform managed by HapiDoc Health-Co Limited(HDHL).
              </Text>
              <Text style={styles.termsText}>
                2. The validity of the program will be as per the plan selected
                by the customer.
              </Text>

              <Text style={styles.termsText}>
                3. The discounts and cashback's offered under the program shall
                be applied at the time of payment by the customer.
              </Text>
              <Text style={styles.termsText}>
                4. The offerings under the program will differ as per the
                categories selected by the customer.
              </Text>
              <Text style={styles.termsText}>
                5. The program is non-transferable.
              </Text>
              <Text style={styles.termsText}>
                6. The program is non-transferable.
              </Text>
              <Text style={styles.termsText}>
                7. The benefits of the program will be provided within 24 hours
                of delivery /completion of the transaction.
              </Text>
              <Text style={styles.termsText}>
                8. By enrolling in the program. a member allows HDHL to use,
                disclose,store,process, review,transfer,share,etc. his/her
                personal data and other sensitive personal information, as
                provided by the HDHL or any of its subsidiaries,
                associates,affiliates or group companies.
              </Text>
              <Text style={styles.termsText}>
                9. A doctor will be assigned based on availability.
              </Text>
              <Text style={styles.termsText}>
                10. The program will be issued solely at the discretion of the
                management and the final discretion on all matters relating to
                the membership shall rest with HDHL.
              </Text>
              <Text style={styles.termsText}>
                11. HDHL reserves right to add, alter, amend, modify and revise
                the aforesaid terms and conditions at any time and on its sole
                discretion without prior notice, intimation and permission.
              </Text>
              <Text style={styles.termsText}>
                12. Benifits and offers available through the program may be
                changed or can be withdrawn/discontinued (either temporarily or
                permanently) without prior notice, intimation or permission.
                Customer agrees that HDHL will not be responsible or liable, in
                any manner, for any liability, losses, damages, injuries or
                expenses incurred by the customer,arising from such change or
                withdrawal or use of such offers.
              </Text>
              <Text style={styles.termsText}>
                13. Any disputes arising out of the program shall be governed by
                the laws of india. Any legal action or proceedings related to
                this program shall be subject to the exclusive jurisdiction of
                the courts of Chennai.All disputes subject to arbitration by a
                sole arbitration appointed by HDHL for this purpose. The
                Proceedings of the arbitration shall be conducted as per the
                provisions of Arbitration and Conciliation Act, 1996 or any
                statutory modifications and alterations thereto. The place of
                arbitration shall be Chennai and language of aribtration shall
                be English. The existence of a dispute, if at all, shall not
                constitute a claim against HDHL.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.procedButton} onPress={handleDropQuery}>
        <Text style={styles.procedButtonText}>PROCEED TO PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf7f4",
    padding: 20,
    paddingHorizontal: 5,
  },
  cardContainer: {
    backgroundColor: "#189ab4",
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 345,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  anotherContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 1,
  },
  leftText: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  rightTextContainer: {
    flex: 1,
    marginTop: 10,
  },
  rightText: {
    color: "#000",
    fontSize: 14,
  },
  subText: {
    color: "#000",
    fontSize: 10,
  },
  Dottedline: {
    height: 1,
    borderRightWidth: 1,
    borderRightColor: "#000",
    height: 100,
    borderStyle: "dashed",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  SubcardContainer: {
    backgroundColor: "#eaf7f4",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 120,
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 70,
    marginRight: 10,
    marginTop: 10,
  },
  additionalTextContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  additionalText01: {
    textAlign: "center",
    color: "#000",
    margin: 5,
  },
  additionalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 15,
  },

  additionalContainer2: {
    backgroundColor: "#fff",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-around",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 15,
  },
  additionalContent2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 15,
  },
  additionalImage2: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  additionalText2: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  additionalText21: {
    fontSize: 14,
    marginTop: 5,
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 80,
  },
  rowImage: {
    width: 40,
    height: 40,
    marginRight: 100,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },

  Line: {
    borderTopWidth: 1,
    borderColor: "gray",
    marginTop: 5,
  },
  rowContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  rowImage2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rowText2: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  procedButton: {
    backgroundColor: "#05445e",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
    width: 340,
    marginLeft: 15,
  },
  procedButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  container7: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  header7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText7: {
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowBtn7: {
    backgroundColor: "transparent",
    padding: 5,
  },
  arrowText7: {
    fontSize: 18,
  },
  termsText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  content7: {},
  faqContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    margin: 10,
    marginTop: 20,
  },
  faqHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  faqQuestion: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  faqQuestionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
  faqAnswerContainer: {
    marginTop: 5,
  },
  faqAnswerText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  additionalText: {
    marginRight: 10,
    justifyContent: "flex-start",
  },
});

export default HealthPackages;
