import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const AboutUs = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.arrow} onPress={() => { }}>
                    <FontAwesome5 name="arrow-left" size={24} color="#000000" />
                </TouchableOpacity> */}
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        {/* <Text style={styles.heading}>About Us</Text> */}
                        <Text style={styles.subtext}>Know more about us, We are more than a hospital</Text>
                    </View>
                </View>
                <View style={styles.centeredContainer}>
                    <View style={styles.cardContainer1}>
                        <Image
                            source={require('../../../assets/hpydoc.jpg')}
                            style={styles.topCardImage}
                        />
                        <Text style={styles.subHeading}>Who We Are?</Text>
                        <Text style={styles.content}>
                            We are an innovative online healthcare platform connecting patients with qualified doctors from various specialties.
                        </Text>
                        <Text style={styles.content}>
                            Our mission is to provide accessible and convenient healthcare services anytime, anywhere.
                        </Text>
                        <Text style={styles.content}>
                            With our app, you can consult with doctors, schedule appointments, and manage your health records seamlessly.
                        </Text>


                        <Text style={styles.subHeading}>What We Do?</Text>
                        <Text style={styles.content}>
                            Our platform, HappyDoc, revolutionizes the way patients
                            access healthcare services. With our user-friendly mobile
                            application, users can seamlessly connect with a diverse range
                            of qualified doctors from various specialties, ensuring prompt
                            and efficient medical consultations. Whether seeking immediate
                            advice or scheduling in-person appointments, HappyDoc offers
                            unparalleled convenience and accessibility. Our mission is to
                            empower individuals to take control of their health by providing
                            a comprehensive suite of features, including secure health record
                            management and seamless communication with healthcare
                            professionals. Experience the future of healthcare with
                            HappyDoc – where quality care meets technological innovation.
                        </Text>
                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Online Doctor Consultation
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Connect with qualified doctors from various
                            specialties for online consultations.Whether you need medical
                            advice, prescriptions, or follow-up appointments, our
                            platform provides a seamless experience for
                            virtual healthcare.
                        </Text>

                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Online Pharmacy
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Order prescription medications and over-the-counter products conveniently from
                            our online pharmacy. Enjoy doorstep delivery and easy refills, ensuring you
                            never run out of essential medications. Our pharmacy services complement our
                            online consultation feature, providing comprehensive healthcare solutions
                            directly to your doorstep.
                        </Text>

                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Lab Tests
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Access a wide range of lab tests and diagnostic packages through our platform.
                            From basic blood tests to comprehensive health check-ups, our curated packages
                            offer convenience and affordability. Schedule lab tests at partnered facilities
                            and receive results directly on our platform for a hassle-free experience.
                        </Text>

                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Online Disease Identification
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Use our platform for online disease identification and symptom analysis.
                            Input your symptoms, and our advanced algorithms will provide potential
                            diagnoses and recommendations for further action. Empower yourself with
                            knowledge about your health status and make informed decisions about
                            seeking medical attention.
                        </Text>

                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Pregnancy Care
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Expecting a baby? Our platform offers comprehensive pregnancy care resources
                            to guide you through every stage of your pregnancy journey. From prenatal
                            care tips to labor and delivery preparation, we provide the information
                            and support you need for a healthy pregnancy and childbirth.
                        </Text>

                        <View style={styles.bulletContainer}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletContent}>
                                Diet and Nutrition
                            </Text>
                        </View>
                        <Text style={styles.content1}>
                            Learn about proper nutrition and diet planning tailored to your health goals
                            and lifestyle. Our platform provides information on balanced diets, meal planning,
                            and nutrition tips to help you maintain a healthy lifestyle. Whether you're looking
                            to lose weight, gain muscle, or improve your overall health, we've got you covered.
                        </Text>
                        {/* <Text style={styles.subHeading}>Calculating Normal, Overweight, and Underweight</Text>
                        <Text style={styles.content1}>
                            Understand your body mass index (BMI) and how it relates to your weight status.
                            Our platform provides tools to calculate your BMI and determine whether you fall
                            within the normal weight range, are overweight, or underweight. Stay informed
                            about your weight status and make informed decisions about your diet and lifestyle
                            to achieve your health goals.
                        </Text> */}
                        <Text style={styles.subHeading}>About HapiDocs</Text>
                        <Text style={styles.content}>
                            HapiDocs is a revolutionary healthcare platform that seamlessly 
                            connects patients with qualified doctors from various specialties. 
                            Our user-friendly mobile application empowers users to access prompt 
                            and efficient medical consultations anytime, anywhere. Whether you 
                            need immediate advice or prefer to schedule in-person appointments, 
                            HapiDocs offers unparalleled convenience and accessibility. Our 
                            mission is to empower individuals to take control of their health 
                            by providing a comprehensive suite of features, including secure health 
                            record management and seamless communication with healthcare professionals. 
                            Experience the future of healthcare with HapiDocs, where quality care 
                            meets technological innovation.
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
};
 
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container: {
        // marginTop: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    backArrow: {
        fontSize: 18,
        color: '#05445E',
        marginBottom: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#05445E',
        marginBottom: 10,
    },
    cardContainer: {
       
        width: '150%',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 20,
    },
    subtext: {
        marginTop: 20,
        fontSize: 16,
        color: '#05445E',
    },
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer1: {
        marginTop: 20,
        paddingHorizontal: 4,
        backgroundColor: '#FFF',
        width: '90%',
        borderRadius: 10,
    },
    topCardImage: {
        width: 350,
        height: 180,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#05445E',
        marginTop: 20,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        color: '#05445E',
        // marginBottom: 10,
    },
    bulletContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        // marginLeft: 10,
    },
    bulletPoint: {
        color: '#05445E',
        fontSize: 45,
        marginRight: 5,
    },
    bulletContent: {
        flex: 1,
        fontSize: 16,
        color: '#05445E',

        fontSize: 20,
        fontWeight: 'bold',
        color: '#05445E',

    },
    content1: {
        fontSize: 16,
        color: '#05445E',

        marginLeft: 30,
    },
});

export default AboutUs;