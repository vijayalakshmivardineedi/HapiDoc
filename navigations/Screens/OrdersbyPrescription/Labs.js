import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Labs = () => {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.prescriptionText}>
                    Have a Prescription? Upload here
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="camera" size={24} color="#fff" />
                        <Text style={{ color: "#fff" }}>Camera</Text>
                    </TouchableOpacity>
                    <View style={styles.Verticaldivider} />
                    <TouchableOpacity style={styles.button}>
                        <Icon name="image" size={24} color="#fff" />
                        <Text style={{ color: "#fff" }}>Gallery</Text>
                    </TouchableOpacity>
                    <View style={styles.Verticaldivider} />
                    <TouchableOpacity style={styles.button} >
                        <Icon name="log-in" size={24} color="#fff" />
                        <Text style={{ color: "#fff" }}>My Prescription </Text>
                    </TouchableOpacity>
                </View></View>
            <View style={styles.securityContainer}>
                <Icon name="shield-checkmark" size={50} color="#189AB4" />
                <Text style={styles.securityText}>
                    Your attached Prescription will be secure and Private
                </Text>
            </View>
            <TouchableOpacity onPress={toggleDetails} style={styles.detailsToggle}>
                <Text style={styles.detailsToggleText}>
                    Why upload a prescription?
                </Text>
                {showDetails ? (
                    <Icon name="chevron-up" size={18} color="#189AB4" style={styles.Icon} />
                ) : (
                    <Icon name="chevron-down" size={18} color="#189AB4" />
                )}
            </TouchableOpacity>
            {showDetails && (
                <View style={styles.detailsContainer}>
                    <View style={styles.documentRow}>
                        <Icon name="document" size={24} color="#189AB4" />
                        <Text style={styles.documentText}>
                            Our team will verify your prescription and call back to confirm
                            your lab test order.
                        </Text>
                    </View>
                    <View style={styles.documentRow}>
                        <Icon name="call" size={24} color="#189AB4" />
                        <Text style={styles.documentText}>
                            Your prescription will always available in your accounts so that
                            you can access it anytime anywhere.
                        </Text>
                    </View>
                    <View style={styles.documentRow}>
                        <Icon name="lock-closed" size={24} color="#189AB4" />
                        <Text style={styles.documentText}>
                            Details from your prescription are only visible to our team of
                            specialists.
                        </Text>
                    </View>
                </View>
            )}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: "#eaf7f9",
    },
    container: {
        padding: 20,
    },
    prescriptionText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonsContainer: {
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#189AB4',
        width: "90%",
        borderRadius: 30,
    },
    button: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20, marginRight: 20
    },
    Verticaldivider: {
        borderWidth: 1,
        borderColor: "#fff",
    },
    securityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        marginRight: 40,
        paddingHorizontal: 20,
    },
    securityText: {
        fontSize: 14,
        marginLeft: 10,
        color: "black",
    },
    detailsToggle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eaf7f9",
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        marginTop: 10
    },
    detailsToggleText: {
        fontSize: 16,
        color: "#189AB4",
        fontWeight: "500"
    },

    detailsContainer: {
        paddingHorizontal: 20,
    },
    documentRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    documentText: {
        color: "black",
        paddingHorizontal: 20,
    },
    footer:{
        alignItems:"center",
        position: "absolute",
        bottom: 10,
        width: "100%",
    },
    footerButton: {
        backgroundColor: "#189ab4", padding: 15, width: "90%", borderRadius: 30, marginTop: 20, alignItems: "center", justifyContent: "center"
    },
    footerText:{
        fontSize:18,
        color:"#fff"
    }
});

export default Labs;