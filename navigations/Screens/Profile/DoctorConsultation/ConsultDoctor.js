import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity, ScrollView,Image, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Octicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

const ConsultDoctors = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState("All");
    const patients = [
        { name: "All" },
        { name: "USER NAME", age: 30, gender: "Male", doctor: "Dr.Kishore", specialization: "Dermatologist", experience: 30, location: "Visakhapatnam", consultedDate: "21-03-2024", consultedTime: "11:00 AM", ConsultationType: "ONLINE", status: "Completed",issue:"Skin allery" },
        { name: "USER NAME 1", age: 38, gender: "Female", doctor: "Dr.Kishore", specialization: "Dermatologist", experience: 30, location: "Visakhapatnam", consultedDate: "21-03-2024", consultedTime: "11:00 AM", ConsultationType: "Clinic Visit", status: "Scheduled" },
        { name: "USER NAME 2", age: 10, gender: "Female", doctor: "Dr.Kishore", specialization: "Dermatologist", experience: 30, location: "Visakhapatnam", consultedDate: "21-03-2024", consultedTime: "11:00 AM", ConsultationType: "ONLINE", status: "Follow Up" },

    ];

    const [selectedPatientData, setSelectedPatientData] = useState(null);

    const handlePatientChange = (patient) => {
        setSelectedPatient(patient.name);
        setModalVisible(false); // Close the modal after selection
        setSelectedPatientData(patient);
    };

    return (

        <View style={styles.container}>
            <View style={{ paddingBottom: 10 }}>
                <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.dropdownButtonText}>
                        {selectedPatient}
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Select Patient</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        {patients.map((patient, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handlePatientChange(patient)}
                            >
                                <View style={styles.patientContainer}>
                                    <View style={styles.radioButton}>
                                        <RadioButton
                                            value={patient.name}
                                            status={selectedPatient === patient.name ? 'checked' : 'unchecked'}
                                            onPress={() => handlePatientChange(patient)}
                                            color="#189ab4"
                                        />
                                    </View>
                                    <View style={styles.patientInfoContainer}>
                                        <Text style={styles.patientName}>{patient.name}</Text>
                                        {patient.age && patient.gender && (
                                            <View style={styles.ageGenderContainer}>
                                                <Text style={styles.patientInfo}>{patient.age} |</Text>
                                                <Text style={styles.patientInfo}> {patient.gender}</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
            <ScrollView>
                {selectedPatient !== "All" && selectedPatientData && (
                    <View style={{ paddingTop: 10, paddingVertical: 5 }}>
                        <View style={{ borderWidth: 1, padding: 10, backgroundColor: "#fff", borderColor: "#fff", borderRadius: 8 }}>
                            <RenderCard patient={selectedPatientData} />
                        </View>
                    </View>
                )}
                {selectedPatient === "All" && (
                    <View style={{ paddingTop: 10, paddingVertical: 5 }}>
                        {patients.slice(1).map((patient, index) => (
                            <View key={index}>
                                <View style={{ borderWidth: 1, padding: 10, backgroundColor: "#fff", borderColor: "#fff", borderRadius: 8, marginBottom: 10 }}>
                                    <RenderCard patient={patient} />
                                </View>
                                {(index !== patients.length - 2)}
                            </View>
                        ))}
                    </View>

                )}
            </ScrollView>
        </View>

    );
};

const RenderCard = ({ patient }) => {
    const statusStyles = {
        Completed: { backgroundColor: "lightgreen", opacity: 0.6, borderRadius: 8, padding: 4 },
        Scheduled: { backgroundColor: "lightyellow", opacity: 1, borderRadius: 8, padding: 4 },
        'Follow Up': { backgroundColor: "lightblue", opacity: 0.6, borderRadius: 8, padding: 4 },
        default: { backgroundColor: "transparent" } // Default style
    };

    const statusTextColor = {
        Completed: "green",
        Scheduled: "orange",
        'Follow Up': "blue",
        default: "black" // Default text color
    };

    const getStatusStyle = (status) => statusStyles[status] || statusStyles.default;
    const getStatusTextColor = (status) => statusTextColor[status] || statusTextColor.default;

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Text style={{ fontSize: 15, textTransform: 'uppercase', color: "#189ab4", letterSpacing: 0.8 }}> {patient.ConsultationType}</Text>
                <View style={[styles.statusBadge, getStatusStyle(patient.status)]}>
                    <Text style={[styles.statusBadgeText, { color: getStatusTextColor(patient.status) }]}>{patient.status}</Text>
                </View>
            </View>
            <View >
                <Text style={{ fontSize: 16, fontWeight: "600" }}>{patient.name}</Text>
                <Text style={{ fontSize: 14, color: "#777" }}>{patient.age} | {patient.gender}</Text>
                <Text style={{ fontSize: 14, color: "#777" }}>{patient.issue}</Text>
            </View>
            <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, borderStyle: "dashed", paddingTop: 10 }} />
            <View style={{ paddingTop: 10 }}>
            <Avatar.Image size={70} style={styles.Avatar} source={require('../../../../assets/Profile/doctor (1).png')} />
            </View>
        </View>
    );
};



export default ConsultDoctors;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf7f9",
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: '#189ab4',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    dropdownButtonText: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    option: {
        paddingVertical: 10,
    },
    patientContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#d1f1f4",
        backgroundColor: "#eaf7f9",
        borderRadius: 8,
        padding: 8,
    },
    radioButton: {
        marginRight: 10,
    },
    patientInfoContainer: {
        flexDirection: 'column',
    },
    ageGenderContainer: {
        flexDirection: 'row',
        marginLeft: 0,
    },
    patientName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    patientInfo: {
        fontSize: 14,
        color: 'gray',
    }, statusBadgeText: {
        fontWeight: "600", fontSize: 13
    },Avatar:{
        backgroundColor: '#eaf7f9',
    }
});
