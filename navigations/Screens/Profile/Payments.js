import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Payments = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={{color:"#05445e",fontSize:18,fontWeight:"600"}}>  <AntDesign name="creditcard" size={18} color="#05445e"  />  Saved Cards</Text>
                <View style={styles.card}>
                    <Image source={require("../../../assets/cards/visa.png")} style={{ width: 80, height: 80, marginLeft: 10, marginRight: 10 }} />
                    <View style={styles.cardDetails}>
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 22, fontWeight: "600" }}>****  ****  ****  8756</Text>
                        </View>
                        <View style={styles.userInfo}>
                            {/* <Text>USER NAME</Text> */}
                            <Text style={{ fontSize: 14, color: "#777" }}>Expires: 11/26 </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={require("../../../assets/cards/logo.png")} style={{ width: 80, height: 80, marginLeft: 10, marginRight: 10 }} />
                    <View style={styles.cardDetails}>
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 22, fontWeight: "600" }}>****  ****  ****  4521</Text>
                        </View>
                        <View style={styles.userInfo}>
                            {/* <Text>USER NAME</Text> */}
                            <Text style={{ fontSize: 14, color: "#777" }}>Expires: 06/29 </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={require("../../../assets/cards/payment.png")} style={{ width: 80, height: 80, marginLeft: 10, marginRight: 10 }} />
                    <View style={styles.cardDetails}>
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 22, fontWeight: "600" }}>****  ****  ****  6201</Text>
                        </View>
                        <View style={styles.userInfo}>
                            {/* <Text>USER NAME</Text> */}
                            <Text style={{ fontSize: 14, color: "#777" }}>Expires: 12/28 </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:"#05445e",fontSize:18,fontWeight:"600"}}> <Image source={require("../../../assets/cards/bhim-upi (2).png")} style={{width:30,height:30}}/>Saved UPI</Text>
                <View style={styles.card}>
                    <Image source={require("../../../assets/bankicons/axis.png")} style={{ width: 40, height: 40, marginLeft: 10, marginRight: 10 }} />
                    <View style={styles.cardDetails}>
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Axis</Text>
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={{ fontSize: 14, color: "#777" ,width:"100%"}}>username123@axl</Text>
                        </View>
                    </View>
                </View>
              
                <View style={styles.card}>
                    <Image source={require("../../../assets/bankicons/icic.png")} style={{ width: 40, height: 40, marginLeft: 10, marginRight: 10 }} />
                    <View style={styles.cardDetails}>
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 22, fontWeight: "600" }}>icici</Text>
                        </View>
                        <View style={styles.userInfo}>
                            {/* <Text>USER NAME</Text> */}
                            <Text style={{ fontSize: 14, color: "#777",width:"100%" }}>username1452@ibl</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Payments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaf7f9",
        paddingHorizontal: 10,
        paddingTop: 10
    },
    card: {
        paddingHorizontal: 5,
        borderRadius: 8,
        backgroundColor: "#FFF",
        flexDirection: "row",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 8,
        alignItems: 'center', marginTop: 10
    },
    cardDetails: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: "87%"
    }
});
