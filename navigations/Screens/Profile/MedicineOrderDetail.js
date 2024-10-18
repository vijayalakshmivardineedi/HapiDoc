import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView ,TouchableOpacity} from "react-native";
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const MedicineOrderDetail = () => {
    const navigation = useNavigation();
    const tableData = [
        { id: '1', name: 'Bevon Suspension', quantity: 2, price: '162.80' },

        // Add more data as needed
    ];

    return (
        <View style={{flex:1,backgroundColor:"#D1F1F4"}}>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.paper}>
                        <View style={styles.header1}>
                            <Text style={styles.headerText}>Shipment 1 of 1</Text>
                            <Text style={styles.headerText}>#CC0035368</Text>
                        </View>
                        <View style={styles.dashedDivider} />
                        <View style={styles.deliveryinfo}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: '600' }}> MAR 20 </Text>
                                <Text> 7:20 </Text>
                            </View>
                            <Octicons name="dot-fill" size={30} color="green" style={{ marginTop: 5, }} />
                            <View style={styles.addressblock}>
                                <Text style={styles.headerText}>
                                    Home Delivery
                                </Text>
                                <Text style={styles.address}>303, C-Block, Satya Kalyan Apartmets, Madhurawada , Visakhapatnam,Andhra Pradesh - 530048</Text>
                                <Text style={styles.address}>Phone no : 9985001923</Text>
                            </View>
                        </View>
                        <View style={styles.dashedDivider} />
                        <View style={styles.Storeaddress}>
                            <Text style={styles.headerText}>STORE ADDRESS</Text>
                            <Text style={{}}>Baccanapalem - VIZAG</Text>
                            <Text style={styles.address}>Survey No. 188/1, Baccanapalem ,Revallapalem Road, Near D-Mart , Madhurawada (Mo),Vizag Dt-530048,AP</Text>
                            <Text style={styles.address}>Phone no : 8952301923</Text>
                        </View>
                        <View style={styles.dashedDivider} />
                        <View style={styles.shippingDetails} >
                            <Text style={[styles.headerText, { marginBottom: 10 }]}>SHIPMENT DETAILS</Text>
                            
                             <View style={[styles.tableRow, { marginBottom: 10 }]}>
                                <Text style={{
                                    flex: 1,
                                    textAlign: 'left',
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    color: "#05445e",
                                    fontSize: 15,
                                }}>Name</Text>
                                <View style={{ borderRightWidth: 1, borderRightColor: "#000" }} />
                                <Text style={[styles.tableCell, styles.tableHeader]}>Qty</Text>
                                <View style={{ borderRightWidth: 1, borderRightColor: "#000" }} />
                                <Text style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    color: "#05445e",
                                    fontSize: 15,
                                }}>Price</Text>
                            </View>
                            {tableData.map((item) => (
                                <View key={item.id} style={styles.tableRow}>
                                    <Text style={{
                                        flex: 1,
                                        textAlign: 'left',
                                        marginRight: 10, 
                                        color: "#05445e",
                                        fontSize: 14,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        marginRight: 10, 
                                        color: "#05445e",
                                        fontSize: 14,
                                    }}>{item.quantity}</Text>
                                    <Text style={{
                                        flex: 1,
                                        textAlign: 'right',
                                        marginRight: 10, 
                                        color: "#05445e",
                                        fontSize: 14,
                                    }}>Rs. {item.price}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.dashedDivider} />
                        <View style={styles.payments}>
                            <Text style={[styles.headerText, { marginBottom: 10,textTransform:'uppercase' }]} >Payment Details</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>MRP Total</Text>
                                <Text>Rs. 162.80</Text></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Discount Total</Text>
                                <Text>-Rs. 22.80</Text></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Redeemed Amount</Text>
                                <Text>-Rs. 0.00</Text></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, letterSpacing: 0.5 }}>Total</Text>
                                <Text style={{ fontWeight: '600', fontSize: 16, letterSpacing: 0.5 }}>Rs. 142.00</Text></View>
                        </View>
                        <View style={[styles.dashedDivider, { marginBottom: 10 }]} />
                    </View>
                </View>

            </ScrollView>
            <View style={styles.footerSections}>
                <TouchableOpacity style={{width:'90%'}} onPress={()=>navigation.navigate("cart")}>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>RE ORDER</Text>
                </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default MedicineOrderDetail;
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#D1F1F4",
        paddingHorizontal: 10,
        paddingTop: 20,

        paddingBottom: 70,
    },
    paper: {
        backgroundColor: "#fff", paddingHorizontal: 10,
        borderTopWidth: 4,
        borderTopColor: "#D1F1F4",
        borderStyle: 'dashed',

        borderBottomWidth: 4,
        borderBottomColor: "#D1F1F4",
    },
    header1: {
        paddingVertical: 15,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.5,
        color: "#05445e"
    },
    dashedDivider: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#999"
    },
    deliveryinfo: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between', gap: 10
    },
    addressblock: {
        flex: 1,

    }, address: {
        letterSpacing: 0.2,
        fontSize: 13,
        fontWeight: "300"

    },
    Storeaddress: {
        paddingVertical: 10,
    },
    shippingDetails: {
        paddingVertical: 10,
        justifyContent: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    tableHeader: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: "#05445e",
        fontSize: 15,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        marginRight: 10,

    }, payments: {
        paddingVertical: 10,
    },
    footerSections: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
    footer: {
        backgroundColor: '#189ab4', // Example background color for the footer
        padding: 10,
        borderRadius: 8,
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff', // Example text color for the footer
        textAlign: 'center', // Example text alignment for the footer
    },

})