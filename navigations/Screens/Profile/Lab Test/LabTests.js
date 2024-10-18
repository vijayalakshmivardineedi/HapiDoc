import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Octicons } from '@expo/vector-icons';

const LabTests = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState("All");
    const patients = [
        { name: "All" },
        { name: "USER NAME", age: 30, gender: "Male" },
        { name: "USER NAME 1", age: 25, gender: "Female" }
    ];

    const [selectedPatientData, setSelectedPatientData] = useState(null);

    const handlePatientChange = (patient) => {
        setSelectedPatient(patient.name);
        setModalVisible(false); // Close the modal after selection
        setSelectedPatientData(patient);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.dropdownButtonText}>
                    {selectedPatient}
                </Text>
            </TouchableOpacity>
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
        </View>

    );
};

const RenderCard = ({ patient }) => (
    <View >
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 15, textTransform: 'uppercase', color: "#189ab4", letterSpacing: 0.8 }}> Home <Octicons name="dot-fill" size={12} color="#189ab4" /> Sample Collected</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Vitamin D Female</Text>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Rs.299/-</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text>Slot Date:</Text><Text>29-03-2024</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text>Slot Time:</Text>
            <Text>11:30 am</Text>
        </View>
        <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, borderStyle: "dashed", paddingTop: 10 }} />
        <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{patient.name}</Text>
            <Text style={{ fontSize: 14, color: "#777" }}>{patient.age} | {patient.gender}</Text>
            <Text style={{ fontSize: 15, color: "#777" }}>123, Satya Vikas, Park Street, Madhurawada, Visakhapatnam, Andhra Pradesh -530052</Text>
        </View>
        <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, borderStyle: "dashed", paddingTop: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
            <View style={{ backgroundColor: "#d1f1f4", padding: 6, borderRadius: 10 }}>
                <Text style={{ color: "#189ab4", fontWeight: "600" }}>Apollo diagnostic</Text>
            </View>
            <View style={{ backgroundColor: "#Fee8d6", padding: 6, borderRadius: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "600", color: "orange", }}>Reports By: 03-04-2024</Text>
            </View>
        </View>
    </View>
);


export default LabTests;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf7f9",
        flex: 1,
        padding: 20,
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
    },
});
