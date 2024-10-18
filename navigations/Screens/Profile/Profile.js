import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
const Profile = () => {

    const navigation = useNavigation();
    const text = "User Name"; // Assuming this is your default text
    const handleMedicineOrders = () => {
        navigation.navigate("Medicine Orders")
    }
    const handleManageProfile = () => {
        navigation.navigate("Manage Profiles")
    }
    return (
        <View style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.profileContainer}>
                            <Avatar.Image size={70} style={styles.Avatar} source={require('../../../assets/Profile/man.png')} />
                            <View style={styles.Details}>
                                <Text style={{ fontSize: 18, color: "#d4f1f4", marginLeft: 3, fontWeight: "600" }}> USER NAME</Text>
                                <Text style={{ fontSize: 14, color: "#d4f1f4", letterSpacing: 0.3, marginLeft: 8, fontWeight: "500" }}>Male | 32</Text>
                                <Text style={{ fontSize: 14, color: "#fff", fontStyle: "italic", letterSpacing: 0.3, marginLeft: 3 }}> useremail@gmail.com</Text>
                                <Text style={{ fontSize: 14, color: "#fff", fontStyle: "italic", letterSpacing: 0.3, marginLeft: 3 }}> +91 1235800555</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', }}>
                            <View style={styles.bloodgroup}>
                                <Image source={require('../../../assets/Profile/blood.png')} style={styles.bloodimage} />
                                <Text>A+ Blood</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("Edit Profile")}>
                                <Feather name="edit-2" size={18} color="#eaf7f9" style={styles.editIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.SubCategory1}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 10, }}>
                            <Text style={styles.profileText}>More Profiles (2)</Text>
                            <TouchableOpacity onPress={handleManageProfile}>
                                <Text style={{ fontSize: 16, color: '#189ab4', fontWeight: '500' }}>Manage / Add</Text></TouchableOpacity>
                        </View>
                        <View style={styles.profilesContainer} >
                            <TouchableOpacity onPress={handleManageProfile}>
                                <View style={styles.profilesContainer1}>
                                    <Avatar.Image size={55} style={styles.Avatar1} source={require('../../../assets/Profile/man.png')} />
                                    <Text style={{ alignItems: 'center' }}>
                                        {text.length > 8 ? `${text.substring(0, 5)}...` : text}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleManageProfile}>
                                <View style={styles.profilesContainer1}>
                                    <Avatar.Image size={55} style={styles.Avatar1} source={require('../../../assets/Profile/woman.png')} />
                                    <Text style={{ alignItems: 'center' }}>Profile3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.DetailsContainer}>
                    {/* <Text style={{ fontSize: 18, fontWeight: "600", paddingHorizontal: 20, }}>Your Details</Text> */}
                    <TouchableOpacity onPress={handleMedicineOrders}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/shop.png')} />
                                <View>
                                    <Text style={styles.listText}>Medicine Orders</Text>
                                    <Text style={styles.listsubText}>Order history and transactions</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("My Lab Tests")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/blood-test (1).png')} />
                                <View>
                                    <Text style={styles.listText}>Lab Tests</Text>
                                    <Text style={styles.listsubText}>Order history and transactions</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ConsultDoctors")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/stethoscope.png')} />
                                <View>
                                    <Text style={styles.listText}>Doctor Consults</Text>
                                    <Text style={styles.listsubText}>Order history and transactions</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("All Health Records")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/patient.png')} />
                                <View>
                                    <Text style={styles.listText}>All Health Records</Text>
                                    <Text style={styles.listsubText}>Reports, Prescriptions, Bill & more</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Add Address')}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/address.png')} />
                                <View>
                                    <Text style={styles.listText}>Manage Address</Text>
                                    <Text style={styles.listsubText}>Your rewards and earnings</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Manage Payments')}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/credit.png')} />
                                <View>
                                    <Text style={styles.listText}>Manage Payments</Text>
                                    <Text style={styles.listsubText}>Your rewards and earnings</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Health Credit Wallet")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/wallet (1).png')} />
                                <View>
                                    <Text style={styles.listText}>Health Credit Wallet</Text>
                                    <Text style={styles.listsubText}>Your rewards and earnings</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Pill Reminder")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image} source={require('../../../assets/Profile/time.png')} />
                                <View>
                                    <Text style={styles.listText}>Pill Reminder</Text>
                                    <Text style={styles.listsubText}>Your rewards and earnings</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Membership")}>
                        <View style={{ borderWidth: 1, borderColor: "#189ab4", padding: 10, backgroundColor: '#d1f1f4', marginVertical: 10, marginHorizontal: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require("../../../assets/Profile/crown.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
                                <Text style={{ fontSize: 17, marginTop: 3, fontWeight: '500', color: '#189ab4' }}>Memebership</Text>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" style={{ marginTop: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 15, fontSize: 18, fontWeight: 600 }}>More</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("HealthInsurance")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image1} source={require('../../../assets/Profile/prevention.png')} />
                                <View>
                                    <Text style={styles.listText}>Health Insurance</Text>

                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Help")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image1} source={require('../../../assets/Profile/help.png')} />
                                <View>
                                    <Text style={styles.listText}>Help</Text>

                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("FAQs")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image1} source={require('../../../assets/Profile/faq.png')} />
                                <View>
                                    <Text style={styles.listText}>FAQ's</Text>

                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.image1} source={require('../../../assets/Profile/about.png')} />
                                <View>
                                    <Text style={styles.listText}>About Us</Text>

                                </View>
                            </View>
                            <AntDesign name="right" size={18} color="#189ab4" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AuthStack")}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
                            <AntDesign name="logout" size={24} color="#189ab4" style={{ marginRight: 10, fontWeight: 'bold' }} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#189ab4' }}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default Profile;

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#eaf7f9',
        flex: 1,
    },
    Container: {
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "#05445e",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    Avatar: {
        backgroundColor: "#eaf7f9",
    },
    Details: {
        marginLeft: 10,
        marginTop: 3,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    editIcon: {
        marginTop: 20,
        marginLeft: 50,

    },
    SubCategory1: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    profileText: {
        fontSize: 18,
        fontWeight: '600',
    },
    Avatar1: {
        backgroundColor: '#189ab4',
        margin: 0,
    },
    profilesContainer: {
        flexDirection: 'row'
    },
    profilesContainer1: {
        alignItems: 'center',
        marginRight: 20,
    }, DetailsContainer: {
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: 5
    }, listText: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 3
    },
    listsubText: {
        fontSize: 12,
    },
    bloodgroup: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width: 100,
        flexDirection: 'row',
        padding: 5,
        marginRight: -20,
        borderTopLeftRadius: 15, // Adjust this value according to your need
        borderBottomLeftRadius: 15,
    },
    bloodimage: {
        width: 22,
        height: 22,
    },
    image1: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});
