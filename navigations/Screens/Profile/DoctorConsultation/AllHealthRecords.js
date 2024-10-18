import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Octicons } from '@expo/vector-icons';

const AllHealthRecords = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const healthRecords = {
        'All': [], // Initialize with an empty array for the "All" tab
        'Prescription': [
            {
                title: 'Prescription 1',
                details: 'Details of prescription 1',
            },
            {
                title: 'Prescription 2',
                details: 'Details of prescription 2',
            }
        ],
        'Lab Tests': [
            {
                title: 'Lab Test 1',
                details: 'Details of lab test 1',
            },
            {
                title: 'Lab Test 2',
                details: 'Details of lab test 2',
            }
        ],
        'Vaccinations': [
            {
                title: 'Vaccination 1',
                details: 'Details of vaccination 1',
            },
            {
                title: 'Vaccination 2',
                details: 'Details of vaccination 2',
            }
        ],
        'AI Reports': [], // Empty array for "AI Reports" tab
        'Insurances': [], // Empty array for "Insurances" tab
        'Others': [], // Empty array for "Others" tab
    };

    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };

    const handleAddRecord = () => {
        // Add your logic for adding a new health record here
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#eaf7f9" }}>
            <View>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={true}
                >
                    <View style={styles.row}>
                        {["All", "Prescription", "Lab Tests", "Vaccinations", "AI Reports", "Insurances", "Others"].map(tab => (
                            <TouchableOpacity
                                key={tab}
                                style={[
                                    styles.buttonTabs,
                                    selectedTab === tab && styles.selectedButton,
                                ]}
                                onPress={() => handleTabPress(tab)}
                            >
                                <Text style={[styles.scrollText, selectedTab === tab && styles.selectedText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View style={{ marginTop: 10 ,paddingHorizontal:10}}>
                    {/* Render health records based on selected tab */}
                    {selectedTab === 'All' && (
                        Object.keys(healthRecords).map(tab => (
                            <View key={tab}>
                                {healthRecords[tab].map((record, index) => (
                                    <View key={index} style={styles.recordContainer}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{record.title}</Text>
                                        <Text>{record.details}</Text>
                                    </View>
                                ))}
                            </View>
                        ))
                    )}
                    {selectedTab !== 'All' && (
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{selectedTab}</Text>
                            {healthRecords[selectedTab].map((record, index) => (
                                <View key={index} style={styles.recordContainer}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{record.title}</Text>
                                    <Text>{record.details}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
            {/* Plus icon at the bottom */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddRecord}>
                <Octicons name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}
export default AllHealthRecords;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttonTabs: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: '#fff', // Default background color
    },
    scrollText: {
        color: 'black', // Default text color
    },
    selectedButton: {
        backgroundColor: '#189ab4',
    },
    selectedText: {
        color: 'white',
    },
    recordContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#189ab4',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
