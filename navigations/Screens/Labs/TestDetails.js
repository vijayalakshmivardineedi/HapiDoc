import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Pressable, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const TestDetails = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showMoreText, setShowMoreText] = useState(false);
    const [showFAQAnswer, setShowFAQAnswer] = useState(false);
    const [showFAQAnswer2, setShowFAQAnswer2] = useState(false);
    const [showFAQAnswer3, setShowFAQAnswer3] = useState(false);
    const [showFAQAnswer4, setShowFAQAnswer4] = useState(false);
    const [showFAQAnswer5, setShowFAQAnswer5] = useState(false);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Test Details</Text>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.cardHeader}>Complete Blood Count (CBC)</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../assets/doctor Images/exam.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Also Known as Complete Blood Picture,
                            Complete Blood Profile, CBP, CBC, Blood-Test, complete blood count,
                            cbc, Full body count, Full blood examination, Full blood cell count,
                            FBC, FBE, TC, TLC, DC, CBC + Differential, Platelet count, CBC with
                            Differential</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.testIncludedContainer}
                        >
                            <Text style={styles.detailsText1}>29 Test(s) Included</Text>
                            <FontAwesome5 name={showText1 ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bookingContainer}>
                    <View style={styles.bookingIconContainer}>
                        <FontAwesome5 name="crown" size={14} color="#FFD700" style={styles.icon} />
                    </View>
                    <Text style={styles.bookingText}>Booked 8,792 times recently</Text>
                </View>
            </View>

            <View style={styles.cardContainer1}>
                <View style={styles.rowContainer}>
                    <FontAwesome5 name="rupee-sign" size={20} color="black" style={styles.icon} />
                    <Text style={styles.priceText}>345</Text>
                    <Text style={styles.crossText}>(460)</Text>
                    <Text style={[styles.discountText, { marginLeft: 5 }]}>25% off</Text>
                    <View style={styles.addButtonContainer}>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles.cardContainer2, { backgroundColor: '#D4F1F4', paddingHorizontal: 10, paddingVertical: 15 }]}>
                <View style={styles.rowContainer}>
                    <View style={styles.iconColumn}>
                        <FontAwesome5 name="calendar-alt" size={20} color="#189AB4" style={styles.icon} />
                        <FontAwesome5 name="file-alt" size={20} color="#189AB4" style={styles.icon} />
                        <FontAwesome5 name="comments" size={20} color="#189AB4" style={styles.icon} />
                    </View>
                    <View style={styles.textColumn}>
                        <Text style={styles.nextSlotBlackText}>Next Slot:<Text style={styles.reportsTime}>11:30 AM,Today</Text></Text>
                        <Text style={styles.reportsText}>Reports in <Text style={styles.reportsTime}>10 hours</Text></Text>
                        <Text style={styles.preparationText}>No Preparation required</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.cardContainer2, { backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 15 }]}>
                <Text style={styles.offerHeader}>Available Offers (4)</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.offerBlock}>
                        <Text style={styles.offerTitle}>100HC Cashback</Text>
                        <Text style={styles.offerSubtitle}>Cashback worth Rs 100 on all prepaid or...</Text>
                    </View>
                    <View style={styles.offerBlock}>
                        <Text style={styles.offerTitle}>50% Off</Text>
                        <Text style={styles.offerSubtitle}>Get 50% off on all health checkups</Text>
                    </View>
                    <View style={styles.offerBlock}>
                        <Text style={styles.offerTitle}>Free Home Delivery</Text>
                        <Text style={styles.offerSubtitle}>Enjoy free home delivery on all orders</Text>
                    </View>
                    <View style={styles.offerBlock}>
                        <Text style={styles.offerTitle}>First Appointment Free</Text>
                        <Text style={styles.offerSubtitle}>Book your first appointment for free</Text>
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Total Tests Included (29)</Text>
                        <View style={styles.countBlood}>
                            <TouchableOpacity style={styles.modalArrow} onPress={() => setShowText1(!showText1)}>
                                <Text style={styles.modalText}>COMPLETE BLOOD COUNT (CBC)</Text>
                                <FontAwesome5 name={showText1 ? "angle-up" : "angle-down"} size={30} color="#666" />
                            </TouchableOpacity>
                            <Text style={styles.subText1}>29 Tests Included</Text>
                            {showText1 && (
                                <>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>HEMOGLOBIN</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>PCV</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>RBC COUNT</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>MCV</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>MCH</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>MCHC</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>R.D.W*</Text>
                                    </View>
                                    <View style={styles.bulletPoint}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.subText2}>TOTAL LEUCOCYTE COUNT (TLC)</Text>
                                    </View>
                                </>
                            )}
                        </View>
                        <Pressable
                            style={styles.modalCloseButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.modalCloseButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.cardContainer3}>
                <Text style={styles.aboutTestHeader}>About This Test</Text>
                <View style={styles.imageRow}>
                    <Image     source={require('../../../assets/doctor Images/exam.png')} style={styles.aboutTestImage} />
                    <Image     source={require('../../../assets/doctor Images/exam.png')} style={styles.aboutTestImage} />
                    <Image     source={require('../../../assets/doctor Images/exam.png')} style={styles.aboutTestImage} />
                </View>
                <View style={styles.imageNames}>
                    <Text style={styles.imageNameText}>Blood</Text>
                    <Text style={styles.imageNameText}>Male,Female</Text>
                    <Text style={styles.imageNameText}>7 Years & above</Text>
                </View>
                <Text style={styles.aboutTestDetails1}>
                    Curated by Dr Sudeep, Apollo Thyroid Assessment - Basic package
                    consists of tests like TSH, T3, T4, and CBC, which are essential
                    to identify the levels of thyroid hormones in the body. These
                    tests are recommended for people suffering from or with a
                    family history of hypothyroidism or hyperthyroidism. People
                    experiencing unexplained weight gain or loss should also take this test.
                </Text>
                {!showMoreText && (
                    <TouchableOpacity onPress={() => setShowMoreText(true)} style={[styles.readMoreButton, styles.leftAligned]}>
                        <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                )}
                {showMoreText && (
                    <>
                        <Text style={styles.aboutTestDetails}>
                            The thyroid is a gland present in the lower front of
                            the neck. It regulates several biological processes,
                            including energy generation, metabolism and mood/mental disposition.
                        </Text>
                        <Text style={styles.aboutTestDetails}>
                            Often, an individual's thyroid may not produce enough
                            thyroxine (T4) and triiodothyronine (T3). When this
                            happens, the person in question may experience
                            significant weight gain, depression or a general
                            lack of physical energy. This condition is clinically
                            termed hypothyroidism.


                        </Text>
                        <Text style={styles.aboutTestDetails}>
                            Conversely, if the thyroid produces elevated
                            levels of the two mentioned hormones, affected
                            individuals may experience weight loss, tremors,
                            and increased anxiety levels. This is known as
                            hyperthyroidism.
                        </Text>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.subText2}>Thyroid Stimulating Hormone (TSH)</Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.subText2}>Thyroxine (T4) </Text>
                        </View>

                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.subText2}>Triiodothyronine (T3)</Text>
                        </View>
                        <Text style={styles.aboutTestDetails}>
                            Now, the hosted thyroid function test involves
                            a preliminary examination of the TSH. This is
                            done primarily to determine if a person suffers
                            from hypothyroidism or hyperthyroidism.
                        </Text>
                        <TouchableOpacity onPress={() => setShowMoreText(false)} style={styles.readLessButton}>
                            <Text style={styles.readLessText}>Read Less</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            <View style={styles.modalContent1}>
                <Text style={styles.modalHeader1}>Total Tests Included (29)</Text>
                <View style={styles.countBlood1}>
                    <TouchableOpacity style={styles.modalArrow1} onPress={() => setShowText1(!showText1)}>
                        <Text style={styles.modalText1}>COMPLETE BLOOD COUNT (CBC)</Text>
                        <FontAwesome5 name={showText1 ? "angle-up" : "angle-down"} size={30} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.subText1}>29 Tests Included</Text>
                    {showText1 && (
                        <>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>HEMOGLOBIN</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>PCV</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>RBC COUNT</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>MCV</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>MCH</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>MCHC</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>R.D.W*</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.subText2}>TOTAL LEUCOCYTE COUNT (TLC)</Text>
                            </View>
                        </>
                    )}
                </View>

            </View>



            <View style={styles.container9}>
            <View style={styles.cardContainer9}>
                <Text style={styles.boldHeading}>Frequently Booked Together (5)</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent1} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => handleCardPress(/* pass any necessary data or action */)}>
                        <View style={styles.container10}>
                            <View style={[styles.cardContainer91, styles.cardBorder]}>
                                <View style={styles.rowContainer9}>
                                    <Image
                                           source={require('../../../assets/doctor Images/exam.png')}
                                        style={styles.image}
                                    />
                                    <View style={styles.textContainer9}>
                                        <Text style={styles.heading}>Complete Blood Count (CBC)</Text>
                                        <View style={styles.subDescription9}>
                                            <Text style={styles.subText9}>Includes 83 Tests worth ₹3365</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rowContainer9}>
                                    <Text style={styles.cashback9}>₹105 cashback</Text>
                                    <View style={styles.addContainer9}>
                                        <TouchableOpacity style={styles.addButton}>
                                            <Text style={styles.addButtonText}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.offer9}>₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25% off</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Second Card */}
                    <TouchableOpacity onPress={() => handleCardPress(/* pass any necessary data or action */)}>
                        <View style={styles.container10}>
                            <View style={[styles.cardContainer91, styles.cardBorder]}>
                                <View style={styles.rowContainer9}>
                                    <Image
                                           source={require('../../../assets/doctor Images/exam.png')}
                                        style={styles.image}
                                    />
                                    <View style={styles.textContainer9}>
                                        <Text style={styles.heading}>Liver Function Test (LFT)</Text>
                                        <View style={styles.subDescription9}>
                                            <Text style={styles.subText9}>Includes 83 Tests worth ₹3365</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rowContainer9}>
                                    <Text style={styles.cashback9}>₹105 cashback</Text>
                                    <View style={styles.addContainer9}>
                                        <TouchableOpacity style={styles.addButton}>
                                            <Text style={styles.addButtonText}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.offer9}>₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25% off</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Third Card */}
                    <TouchableOpacity onPress={() => handleCardPress(/* pass any necessary data or action */)}>
                        <View style={styles.container10}>
                            <View style={[styles.cardContainer91, styles.cardBorder]}>
                                <View style={styles.rowContainer9}>
                                    <Image
                                          source={require('../../../assets/doctor Images/exam.png')}
                                        style={styles.image}
                                    />
                                    <View style={styles.textContainer9}>
                                        <Text style={styles.heading}>Vitamin D Female - 25 Hydroxy (D2+D3)</Text>
                                        <View style={styles.subDescription9}>
                                            <Text style={styles.subText9}>Includes 83 Tests worth ₹3365</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rowContainer9}>
                                    <Text style={styles.cashback9}>₹105 cashback</Text>
                                    <View style={styles.addContainer9}>
                                        <TouchableOpacity style={styles.addButton}>
                                            <Text style={styles.addButtonText}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.offer9}>₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25% off</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Fourth Card */}
                    <TouchableOpacity onPress={() => handleCardPress(/* pass any necessary data or action */)}>
                        <View style={styles.container10}>
                            <View style={[styles.cardContainer91, styles.cardBorder]}>
                                <View style={styles.rowContainer9}>
                                    <Image
                                           source={require('../../../assets/doctor Images/exam.png')}
                                        style={styles.image}
                                    />
                                    <View style={styles.textContainer9}>
                                        <Text style={styles.heading}>Creatinine, Serum</Text>
                                        <View style={styles.subDescription9}>
                                            <Text style={styles.subText9}>Includes 83 Tests worth ₹3365</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rowContainer9}>
                                    <Text style={styles.cashback9}>₹105 cashback</Text>
                                    <View style={styles.addContainer9}>
                                        <TouchableOpacity style={styles.addButton}>
                                            <Text style={styles.addButtonText}>ADD</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.offer9}>₹1499 <Text style={styles.offerCross9}>(₹1999)</Text> 25% off</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* End of Fourth Card */}
                </ScrollView>
            </View>
        </View>


            <View style={styles.container11}>
            <View style={styles.cardCardContainer11}>
                <Text style={styles.boldHeading11}>Recently Viewed by You(4)</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent11} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity onPress={() => console.log('Card 1 pressed')}>
                        <View style={[styles.cardContainer11, styles.cardBorder11]}>
                            <TouchableOpacity style={styles.plusSymbol} onPress={() => console.log('Plus pressed')}>
                                <Text style={styles.plusText}>+</Text>
                            </TouchableOpacity>
                            <View style={styles.rowContainer11}>
                                <View style={styles.textContainer11}>
                                    <View style={styles.testContainer11}>
                                        <Text style={styles.heading11}>TEST</Text>
                                    </View>
                                    <View style={styles.subDescription11}>
                                        <Text style={styles.subText11}>Complete Blood Count (CBC)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Card 2 pressed')}>
                        <View style={[styles.cardContainer11, styles.cardBorder11]}>
                            <TouchableOpacity style={styles.plusSymbol} onPress={() => console.log('Plus pressed')}>
                                <Text style={styles.plusText}>+</Text>
                            </TouchableOpacity>
                            <View style={styles.rowContainer11}>
                                <View style={styles.textContainer11}>
                                    <View style={styles.packageContainer11}>
                                        <Text style={styles.heading112}>PACKAGE</Text>
                                    </View>
                                    <View style={styles.subDescription11}>
                                        <Text style={styles.subText11}>HbA1c, Glycated Hemoglobin </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Card 3 pressed')}>
                        <View style={[styles.cardContainer11, styles.cardBorder11]}>
                            <TouchableOpacity style={styles.plusSymbol} onPress={() => console.log('Plus pressed')}>
                                <Text style={styles.plusText}>+</Text>
                            </TouchableOpacity>
                            <View style={styles.rowContainer11}>
                                <View style={styles.textContainer11}>
                                    <View style={styles.testContainer11}>
                                        <Text style={styles.heading11}>TEST</Text>
                                    </View>
                                    <View style={styles.subDescription11}>
                                        <Text style={styles.subText11}>Complete Blood Count (CBC)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Card 4 pressed')}>
                        <View style={[styles.cardContainer11, styles.cardBorder11]}>
                            <TouchableOpacity style={styles.plusSymbol} onPress={() => console.log('Plus pressed')}>
                                <Text style={styles.plusText}>+</Text>
                            </TouchableOpacity>
                            <View style={styles.rowContainer11}>
                                <View style={styles.textContainer11}>
                                    <View style={styles.packageContainer11}>
                                        <Text style={styles.heading112}>PACKAGE</Text>
                                    </View>
                                    <View style={styles.subDescription11}>
                                        <Text style={styles.subText11}>HbA1c, Glycated Hemoglobin</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>

            <View style={styles.container12}>
                <Image
                        source={require('../../../assets/doctor Images/exam.png')}
                    style={styles.image12}
                />
            </View>



            <View style={styles.cardContainer13}>
                <View style={styles.rowContainer13}>
                    <View style={styles.imageContainer13}>
                        <Image
                               source={require('../../../assets/doctor Images/exam.png')}
                            style={styles.image13}
                        />
                    </View>
                    <View style={styles.detailsContainer13}>
                        <Text style={styles.detailsText13}>RECOMMENDED BY:</Text>
                        <Text style={styles.detailsHead13}>Dr.Shakti</Text>
                        <Text style={styles.detailsSubText13}>General Physician/Internal medicine</Text>
                    </View>
                </View>
            </View>


            <View style={[styles.cardContainer, { backgroundColor: 'white', padding: 15 }]}>
            <Text style={styles.faqHeader}>FAQs</Text>

            <TouchableOpacity style={styles.faqQuestion} onPress={() => {
                setShowFAQAnswer(!showFAQAnswer);
                setShowFAQAnswer2(false);
                setShowFAQAnswer3(false);
                setShowFAQAnswer4(false);
                setShowFAQAnswer5(false);
            }}>
                <Text style={styles.faqText}>Can specific conditions or medications affect CBC results?</Text>
                <FontAwesome5 name={showFAQAnswer ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
            </TouchableOpacity>
            {showFAQAnswer && (
                <>
                    <View style={styles.faqAnswerContainer}>
                        <Text style={styles.faqAnswerText}>
                            Yes, certain medical conditions and medications can affect CBC results.
                            Conditions such as anemia, infections, inflammatory diseases,
                            and leukemia can alter CBC parameters. Medications like chemotherapy
                            drugs, corticosteroids, and antibiotics can also influence CBC results.
                            It's essential to consult with a healthcare provider for interpretation
                            and further evaluation.
                        </Text>
                    </View>
                    <View style={styles.divider} />
                </>
            )}
            {!showFAQAnswer && <View style={styles.divider} />}

            <TouchableOpacity style={styles.faqQuestion} onPress={() => {
                setShowFAQAnswer2(!showFAQAnswer2);
                setShowFAQAnswer(false);
                setShowFAQAnswer3(false);
                setShowFAQAnswer4(false);
                setShowFAQAnswer5(false);
            }}>
                <Text style={styles.faqText}>What should I do if my CBC results are abnormal?</Text>
                <FontAwesome5 name={showFAQAnswer2 ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
            </TouchableOpacity>
            {showFAQAnswer2 && (
                <>
                    <View style={styles.faqAnswerContainer}>
                        <Text style={styles.faqAnswerText}>
                            If your CBC results are abnormal, it's crucial to follow up 
                            with your healthcare provider. They will interpret the results 
                            in the context of your medical history, symptoms, and other 
                            diagnostic tests. Further evaluation may be necessary to determine 
                            the underlying cause of the abnormal results and develop an appropriate 
                            treatment plan.
                        </Text>
                    </View>
                    <View style={styles.divider} />
                </>
            )}
            {!showFAQAnswer2 && <View style={styles.divider} />}

            <TouchableOpacity style={styles.faqQuestion} onPress={() => {
                setShowFAQAnswer3(!showFAQAnswer3);
                setShowFAQAnswer(false);
                setShowFAQAnswer2(false);
                setShowFAQAnswer4(false);
                setShowFAQAnswer5(false);
            }}>
                <Text style={styles.faqText}>What does a high or low CBC count indicate?</Text>
                <FontAwesome5 name={showFAQAnswer3 ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
            </TouchableOpacity>
            {showFAQAnswer3 && (
                <>
                    <View style={styles.faqAnswerContainer}>
                        <Text style={styles.faqAnswerText}>
                            A high or low CBC count can indicate various health conditions.
                            For example, a high white blood cell count may indicate an infection
                            or inflammation, while a low red blood cell count could signify anemia.
                            It's essential to consult with a healthcare provider for proper diagnosis
                            and treatment if your CBC count is abnormal.
                        </Text>
                    </View>
                    <View style={styles.divider} />
                </>
            )}
            {!showFAQAnswer3 && <View style={styles.divider} />}

            <TouchableOpacity style={styles.faqQuestion} onPress={() => {
                setShowFAQAnswer4(!showFAQAnswer4);
                setShowFAQAnswer(false);
                setShowFAQAnswer2(false);
                setShowFAQAnswer3(false);
                setShowFAQAnswer5(false);
            }}>
                <Text style={styles.faqText}>How often should I get a CBC test?</Text>
                <FontAwesome5 name={showFAQAnswer4 ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
            </TouchableOpacity>
            {showFAQAnswer4 && (
                <>
                    <View style={styles.faqAnswerContainer}>
                        <Text style={styles.faqAnswerText}>
                            The frequency of CBC testing depends on various factors, including your
                            overall health, medical history, and any underlying conditions. Your
                            healthcare provider will determine how often you need a CBC test based
                            on these factors. It's essential to follow your provider's recommendations
                            for routine testing and monitoring.
                        </Text>
                    </View>
                    <View style={styles.divider} />
                </>
            )}
            {!showFAQAnswer4 && <View style={styles.divider} />}

            <TouchableOpacity style={styles.faqQuestion} onPress={() => {
                setShowFAQAnswer5(!showFAQAnswer5);
                setShowFAQAnswer(false);
                setShowFAQAnswer2(false);
                setShowFAQAnswer3(false);
                setShowFAQAnswer4(false);
            }}>
                <Text style={styles.faqText}>Is fasting required before a CBC test?</Text>
                <FontAwesome5 name={showFAQAnswer5 ? "angle-up" : "angle-down"} size={24} color="#189AB4" style={styles.icon} />
            </TouchableOpacity>
            {showFAQAnswer5 && (
                <>
                    <View style={styles.faqAnswerContainer}>
                        <Text style={styles.faqAnswerText}>
                            In most cases, fasting is not required before a CBC test.
                            However, your healthcare provider may provide specific instructions
                            if fasting is necessary for your particular situation. It's essential
                            to follow any pre-test instructions provided by your provider to ensure
                            accurate results.
                        </Text>
                    </View>
                  
                </>
            )}
            {!showFAQAnswer5 && <View style={styles.divider} />}
        </View>
            <View style={styles.container15}></View>
            <View style={[ styles.bottomContainer15]}>
                <View style={styles.column15}>
                    <Text style={styles.price15}>₹345</Text>
                </View>
                <TouchableOpacity style={styles.addToCart15}>
                    <Text style={styles.addToCartText15}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf7f9',
        marginTop: 30,
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,

    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    cardContainer: {
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    detailsContainer: {
        flex: 1,
    },
    detailsText: {
        fontSize: 10,
        marginBottom: 5,
    },
    testIncludedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greaterThan: {
        fontSize: 24,
        marginLeft: 5,
        color: '#189AB4',
    },
    detailsText1: {
        color: '#189AB4',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: 200,
        maxHeight: '70%',
        width: '100%',
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 5,
    },
    countBlood: {
        borderWidth: 1,
        borderColor: '#BFC9CA',
        padding: 10,
    },
    modalCloseButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    modalCloseButtonText: {
        fontSize: 16,
        color: '#189AB4',
    },
    icon: {
        marginLeft: 5,
    },
    modalArrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bullet: {
        marginRight: 5,
        fontSize: 16,
        color: '#189AB4',
    },
    bookingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    bookingIconContainer: {
        marginRight: 5,
    },
    bookingText: {
        fontSize: 14,
    },
    cardContainer1: {
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    crossText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
        textDecorationLine: 'line-through',
        marginRight: 5,
    },
    discountText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
    addButtonContainer: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#189AB4',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 5,

    }, 
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardContainer2: {
        backgroundColor: 'white',
        paddingVertical: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,
    },
    iconColumn: {
        marginRight: 20,
        borderRightWidth: 1,
        borderColor: '#189AB4',
        paddingRight: 10,
    },
    textColumn: {
        flex: 1,
        paddingLeft: 10,
    },
    nextSlotBlackText: {
        fontSize: 16,
        color: 'black',
    },
    reportsText: {
        fontSize: 16,
        color: 'black',
    },
    reportsTime: {
        color: '#189AB4',
    },
    preparationText: {
        fontSize: 16,
        color: 'black',
    },
    offerHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    offerBlock: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        minWidth: 150,
        borderColor: '#189AB4',
        borderWidth: 1,
        marginLeft: 10,
    },
    offerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    offerSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    cardContainer3: {
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    aboutTestHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    aboutTestImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    imageNames: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    imageNameText: {
        fontWeight: 'bold',
        color: 'black',
    },
    boldText: {
        fontWeight: 'bold',
    },
    aboutTestDetails: {
        fontSize: 14,
        marginBottom: 10,
    },
    aboutTestDetails1: {
        fontSize: 14,
        marginTop: 10,
    },
    readMoreButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    readMoreText: {
        fontWeight: 'bold',
        color: '#189AB4',
        marginRight: '80%',
    },
    readLessButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    readLessText: {
        fontWeight: 'bold',
        color: '#189AB4',
        marginRight: '80%',
    },
    modalContent1: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        minHeight: 200,
        maxHeight: '70%',
        width: '100%',
        marginTop: 10,
    },
    modalHeader1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText1: {
        fontSize: 16,
        marginBottom: 5,
    },
    countBlood1: {
        borderWidth: 1,
        borderColor: '#BFC9CA',
        padding: 10,
    },
    modalArrow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    scrollViewContent1: {
        flexGrow: 1,
    },

    container9: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
    },
    cardContainer9: {
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    rowContainer9: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    image9: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    textContainer9: {
        marginLeft: 10,
    },
    cardBorder: {
        borderColor: '#189AB4',
        borderWidth: 1,
    },
    boldHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subDescription9: {
        marginTop: 5,
    },
    subText9: {
        fontSize: 14,
        color: '#666',
    },
    cashback9: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#189AB4',
    },
    addContainer9: {
        marginLeft: 'auto',
    },
    addText9: {
        color: '#189AB4',
        fontWeight: 'bold',
    },
    offer9: {
        fontSize: 16,
        marginTop: 5,
    },
    offerCross9: {
        textDecorationLine: 'line-through',
        color: 'grey',
    },

    cardSpace: {
        marginRight: 10,
    },
    cardContainer91: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },

    container11: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
    },
    cardCardContainer11: {
        margin: 10,
        borderRadius: 10,
    },
    boldHeading11: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    scrollViewContent11: {
        flexGrow: 1,
    },
    cardContainer11: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        width: 150, 
        height: 90, 
        position: 'relative', 
        overflow: 'hidden', 
    },
    cardBorder11: {
        borderColor: '#189AB4',
        borderWidth: 0.5,
    },
    rowContainer11: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    textContainer11: {
        marginLeft: 10,
    },
    heading11: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    heading112: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },

    packageContainer11: {
        backgroundColor: '#05445E',
        borderRadius: 10,
        alignItems: 'center',

    },
    testContainer11: {
        backgroundColor: '#D4F1F4',
        borderRadius: 10,
        alignItems: 'center',
    },
    subDescription11: {
        marginTop: 5,
    },
    subText11: {
        fontSize: 12,
        color: '#666',
    },
    plusSymbol: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#189AB4',
        width: 30,
        height: 30,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    container12: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        height: 160,
        width: '100%',
        marginBottom: 10,

    },
    image12: {
        width: '100%',

    },
    rowContainer13: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    cardContainer13: {

        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailsText13: {
        color: '#189AB4',
        marginBottom: 10,

    },
    detailsHead13: {

        fontWeight: 'bold',
        fontSize: 18,

    },
    detailsSubText13: {

        color: 'grey',
    },
    image13: {
        width: 80,
        height: 80,
    },
    detailsContainer13: {
        marginBottom: 10,
        marginLeft: 20,

    },
    imageContainer13: {
        marginBottom: 20,
    },
    faqHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    faqQuestion: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    faqText: {
        flex: 1,
        fontSize: 16,
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
        marginBottom: 20,
    },
    divider: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    bottomContainer15: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        padding: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    column15: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price15: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',

    },
    addToCart15: {
        backgroundColor: '#189AB4',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    addToCartText15: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    container15: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        height: 60,
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',

    },

});

export default TestDetails;