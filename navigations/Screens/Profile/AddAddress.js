import React, { useState } from "react";
import { StyleSheet, Text, View ,TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const AddAddress = () => {
    const [selectedValue, setSelectedValue] = useState("checked");
    const navigation = useNavigation();
    const handleContinue = () => {
        // Check if radio button is checked
        if (selectedValue === 'option1') {
            // Navigate back
            navigation.goBack();
        }
    };
    const handlecurrentLocation = () => {
        navigation.navigate('Confirm Location')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlecurrentLocation}>
            <View style={styles.AddAddresscontainer}>
                <View style={styles.addButton}>
                    <Text style={styles.addAddressText}>Add Address</Text>
                </View>
            </View>
            </TouchableOpacity>
            <View style={styles.savedAddressContainer}>
                <Text style={styles.detailsheading}>Recent addresses</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton
                            value="option1"
                            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('option1')}
                            color="#189ab4" // Change color here
                        />
                        <View style={styles.detailsContent}>
                            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 3 }}>Home</Text>
                            <Text style={{ fontSize: 13, letterSpacing: 0.2, marginBottom: 8 }}>303 ,C-Block , Satya Kalyan Appartments, Madhurawada, Visakhapatnam, Andhra Pradesh - 530052</Text>
                            <Text style={{ fontSize: 13, letterSpacing: 0.2 }}>Jhansi</Text>
                            <Text style={{ fontSize: 13, }}>+91 7997148737</Text>
                        </View>

                    </View>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity onPress={handlecurrentLocation}>
                        <Text style={styles.EditButton}>Edit</Text></TouchableOpacity>
                        <Text style={styles.RemoveButton}>Remove</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleContinue}>
                <View style={styles.ContinueButton}>
                    <Text style={styles.ContinueText}>Continue</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default AddAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaf7f9",
        paddingHorizontal: 15
    },
    AddAddresscontainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 30
    },
    addButton: {
        borderWidth: 1,
        width: '95%',
        padding: 10,
        borderRadius: 8,
        borderColor: "#189ab4",
    },
    addAddressText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#189ab4",
        textAlign: "center",
    },
    savedAddressContainer: {
        padddingHorizontal: 10,
    },
    detailsheading: {
        fontSize: 16,
        fontWeight: "500"
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsContainer: {
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginTop: 20
    },
    detailsContent: {
        flex: 1,
        marginLeft: 10
    },
    actionButtons: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 10
    }, EditButton: {
        marginLeft: 30,
        marginRight: 30,
        fontSize: 16,
        fontWeight: "500",
        color: "#189ab4",
    },
    RemoveButton: {
        marginLeft: 30,
        fontSize: 16,
        fontWeight: "500",
        color: "#189ab4",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
    },
    ContinueButton: {
        backgroundColor: "#189ab4",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    ContinueText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: "500"
    }
})
