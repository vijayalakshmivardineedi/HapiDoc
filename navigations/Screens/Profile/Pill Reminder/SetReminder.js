import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Picker } from "react-native";
import { Checkbox, RadioButton } from 'react-native-paper'; // Import RadioButton
import { AntDesign } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';

const SetReminder = () => {
    const [reminderText, setReminderText] = useState("");
    const [checkboxStates, setCheckboxStates] = useState([false, false, false]);
    const [isEditExpanded, setIsEditExpanded] = useState([false, false, false]);
    const [selectedOption, setSelectedOption] = useState(""); // State for selected radio button

    const handleReminderChange = (text) => {
        setReminderText(text);
    };
    const routines = [
        { time: "9:00 AM", details: "1 tablet with Breakfast" },
        { time: "12:00 PM", details: "1 tablet with Lunch" },
        { time: "6:00 PM", details: "1 tablet with Dinner" }
    ];
    const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);
    };

    const toggleEditExpand = (index) => {
        const newIsEditExpanded = [...isEditExpanded];
        newIsEditExpanded[index] = !newIsEditExpanded[index];
        setIsEditExpanded(newIsEditExpanded);
    };
    const [selectedDosage, setSelectedDosage] = useState('');
    const [selectedDosage1, setSelectedDosage1] = useState('');

    const dosageOptions = [
        '1',
        '2',
        '3',
        // Add more options as needed
    ];

    const drugtype = [
        'Tablet',
        'Capsule',
        'Injection',
        'Table Spoon',
        'Drop',
        'Lotion',
        'Gel',
        'Spray',
        'Cream',
        'Powder',
        'Infusion',
        'Solution',
        'Inhaler',
        'Suppository',
        'Patch',
        'Baccal',
        'Suspension',
    ];

    const handleDosageSelect1 = (index, value) => {
        setSelectedDosage1(value);
    };
    const handleDosageSelect = (index, value) => {
        setSelectedDosage(value);
    };

    return (
        <View style={styles.container}>
            <Text style={{fontSize:16,fontWeight:"600"}}>Enter Medicine Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleReminderChange}
                value={reminderText}
                placeholder="Enter Medicine Name"
                
            />
            <Text style={{fontSize:16,fontWeight:"600",marginTop:10}}>Schedule</Text>
            <View style={styles.schedule}>
                <View>
                    <Text>Daily</Text>
                    <Text>Until I stop</Text>
                </View>
                <AntDesign name="edit" size={20} color="#000" />
            </View>
            <Text style={{fontSize:16,fontWeight:"600",marginTop:10}}>Set Routine</Text>
            {routines.map((routine, index) => (<>
                <TouchableOpacity key={index} onPress={() => toggleEditExpand(index)}>
                    <View style={styles.setroutine}>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checkboxStates[index] ? 'checked' : 'unchecked'}
                                onPress={() => handleCheckboxChange(index)}
                            />
                            <View style={{ marginLeft: 7 }}>
                                <Text>{routine.time}</Text>
                                <Text>{routine.details}</Text>
                            </View>
                        </View>
                        <AntDesign name="edit" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
                {isEditExpanded[index] && (
                    <>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: "#777" }} />
                        <View style={styles.expandedText}>
                            <Text>Breakfast</Text>
                            <View style={styles.radioButtonGroup}>
                                <View style={styles.radioButtonContainer}>
                                    <Text>Before</Text>
                                    <RadioButton
                                        value="before"
                                        color="#000" // You can change the color to match your design
                                        uncheckedColor="#000" // You can change the unchecked color to match your design
                                    />
                                </View>
                                <View style={styles.radioButtonContainer}>
                                    <Text>After</Text>
                                    <RadioButton
                                        value="after"
                                        color="#000" // You can change the color to match your design
                                        uncheckedColor="#000" // You can change the unchecked color to match your design
                                    />
                                </View>
                                <View style={styles.radioButtonContainer}>
                                    <Text>With</Text>
                                    <RadioButton
                                        value="with"
                                        color="#000" // You can change the color to match your design
                                        uncheckedColor="#000" // You can change the unchecked color to match your design
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>Dosage</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <ModalDropdown
                                    options={dosageOptions}
                                    onSelect={handleDosageSelect}
                                    defaultValue="Select Dosage"
                                    textStyle={{ fontSize: 16 }}
                                    dropdownTextStyle={{ fontSize: 16 }}
                                    dropdownStyle={{ width: 30 }}
                                    key="1"
                                />
                                <ModalDropdown
                                    options={drugtype}
                                    onSelect={handleDosageSelect1}
                                    defaultValue="Select type"
                                    textStyle={{ fontSize: 16 }}
                                    dropdownTextStyle={{ fontSize: 16 }}
                                    dropdownStyle={{ width: 100 }}
                                    key="2"
                                />
                            </View>
                        </View>
                    </>
                )}
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#777" }} />
            </>))}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#eaf7f9"
    },
    input: {
        height: 40,
        width: 372,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 10,
        marginTop:5,
        marginBottom:10
    },
    schedule: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#777",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    setroutine: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    expandedText: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    radioButtonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SetReminder;
