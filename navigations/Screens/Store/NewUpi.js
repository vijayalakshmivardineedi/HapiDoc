import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NewUpi = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.boldGreyText}>Registered UPI id</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} />
            </View>
            <TouchableOpacity onPress={handleCheckboxPress} style={styles.checkboxContainer}>
                <View style={[styles.checkbox, { backgroundColor: isChecked ? '#189AB4' : 'white' }]}>
                    {isChecked && <Text style={styles.checkboxTick}>✓</Text>}
                </View>
                <Text style={styles.checkboxText}>Save this id for faster checkouts</Text>
            </TouchableOpacity>
            <View style={styles.Divider} />
            <View style={styles.upiContainer}>
                <Text style={styles.headText}>How UPI works</Text>
                <View style={styles.rowContainer}>
                    <Image source={require('../../../assets/icons/phone.png')} style={styles.upiLogo} />
                    <View>
                        <Text style={styles.boldText}>Payment request will be sent</Text>
                        <Text style={styles.description}>
                            You will receive a payment request by medicine. Either open your UPI app or tap on the notification of the request to open the request
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Image source={require('../../../assets/icons/accept.png')} style={styles.upiLogo} />
                <View>
                    <Text style={styles.boldText}>Accept the request will be sent</Text>
                    <Text style={styles.description}>
                        Accept the pay ment request and complete the payment on your UPI app
                    </Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Image source={require('../../../assets/icons/back.png')} style={styles.upiLogo} />
                <View>
                    <Text style={styles.boldText}>Come back here</Text>
                    <Text style={styles.description}>
                        After Completing the payment, revert bank to the paymentscreen
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.verifyContainer}>
                    <Text style={styles.verifyText}>Verify and pay ₹ 245</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaf7f9",
        paddingHorizontal: 15,
    },
    boldGreyText: {
        fontWeight: '400',
        color: 'grey',
        fontSize: 12,
        marginVertical: 10,
        marginBottom: 10,
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 5,
    },
    textInput: {
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 3
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    checkboxTick: {
        color: 'white',
        textAlign: 'center',
        marginBottom:-12
    },
    checkboxText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 12,
    },
    Divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 15,
        marginBottom: 15
    },
    upiContainer:{
        paddingHorizontal:10
    },
    greyLine: {
        marginBottom: 20,
        marginTop: 20,
        height: 1,
        backgroundColor: 'grey',
    },
    headText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginRight:20,
    },
    upiLogo: {
        width: 25,
        height: 25,
        marginTop: 15,
    },
    boldText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
    },
    description: {
        marginLeft: 10,
        marginTop: 5,
        color: 'black',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    verifyContainer: {
        backgroundColor: '#189AB4',
        padding: 10,
        borderRadius:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verifyText: {
        marginLeft: 80,
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    },

});

export default NewUpi;