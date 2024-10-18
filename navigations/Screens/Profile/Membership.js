import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { DataTable } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
const Membership = () => {
    const [selectedDuration, setSelectedDuration] = useState(2);

    const membershipOptions = [
        { months: "3", price: "149", originalPrice: "499" },
        { months: "6", price: "249", originalPrice: "999" },
        { months: "12", price: "499", originalPrice: "1999" }
    ];

    const handleSelectDuration = (index) => {
        setSelectedDuration(index);
    };
    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={{ paddingVertical: 10 }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../../../assets/Profile/crown.png")} style={{ height: 80, width: 80 }} />
                        <Text style={{ color: "#ffd700", fontWeight: "600", fontSize: 20 }}>HapiDoc First Membership</Text>
                        <Text style={{ fontSize: 12, color: "white", marginTop: 3 }}>Unlock greater savings with our exclusive membership!</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: 20, paddingHorizontal: 15, paddingBottom: 10 }}>
                        {membershipOptions.map((option, index) => (
                            <TouchableOpacity key={index} onPress={() => handleSelectDuration(index)} activeOpacity={1}>
                                <View style={{
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: selectedDuration === index ? '#05445e' : '#d3d3d3',
                                    width: 110
                                }}>
                                    <LinearGradient
                                        colors={selectedDuration === index ? ['#daa520', '#e5e063'] : ['#d3d3d3', '#d3d3d3']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{
                                            borderTopRightRadius: 8,
                                            borderTopLeftRadius: 8,
                                            padding: 15,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: selectedDuration === index ? '#000' : '#7d7d7d' }}>{option.months} months</Text>
                                        <Text style={{ fontSize: 12, color: selectedDuration === index ? '#000' : '#7d7d7d' }}>membership</Text>
                                    </LinearGradient>
                                    <View style={{ backgroundColor: selectedDuration === index ? "#fff" : "#d3d3d3", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, padding: 10, alignItems: "center" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "600", color: selectedDuration === index ? '#000' : '#7d7d7d' }}>₹ {option.price}</Text>
                                        <Text style={{ fontSize: 12, textDecorationLine: "line-through", color: selectedDuration === index ? '#000' : '#7d7d7d' }}>₹ {option.originalPrice}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                <View style={{ flex: 1 ,paddingTop:10}}>
                    <DataTable >
                        <DataTable.Header >
                            <DataTable.Title></DataTable.Title>
                            <DataTable.Title numeric><Text style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d',fontSize:selectedDuration ===0 ? 16 :14,fontWeight: selectedDuration === 0 ? 600 : 400}}>3mo</Text></DataTable.Title>
                            <DataTable.Title numeric ><Text style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===1 ? 16 :14,fontWeight: selectedDuration === 1 ? 600 : 400}}>6mo </Text></DataTable.Title>
                            <DataTable.Title numeric ><Text style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===2 ? 16 :14,fontWeight: selectedDuration === 2 ? 600 : 400}}>12mo</Text></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Additional 2% OHC points</Text>
                                    {/* <Text style={{ fontSize: 10 }}>Max ₹100 on prepaid medicine</Text> */}
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===0 ? 22 :14,fontWeight: selectedDuration === 0 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d',fontSize:selectedDuration ===1 ? 22 :14,fontWeight: selectedDuration === 1 ? 600 : 400 }} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d',fontSize:selectedDuration ===2 ? 22 :14,fontWeight: selectedDuration === 2 ? 600 : 400 }} /></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Additional 10% off on Lab Tests</Text>
                                    {/* <Text>Existing Offer + max ₹100 on lab tests</Text> */}
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check"  style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===0 ? 22 :14,fontWeight: selectedDuration === 0 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===1 ? 22 :14,fontWeight: selectedDuration === 1 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===2 ? 22 :14,fontWeight: selectedDuration === 2 ? 600 : 400}} /></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Unlimited Free Delivery</Text>
                                    {/* <Text>Free delivery onorders above ₹99</Text> */}
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===0 ? 22 :14,fontWeight: selectedDuration === 0 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===1 ? 22 :14,fontWeight: selectedDuration === 1 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===2 ? 22 :14,fontWeight: selectedDuration === 2 ? 600 : 400}} /></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Free Consultations</Text>
                                    {/* <Text>Talk to any specialist doctor for free</Text> */}
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric><Text style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===0 ? 22 :14,fontWeight: selectedDuration === 0 ? 600 : 400,marginRight:4}}>0</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d',fontSize:selectedDuration ===1 ? 22 :14,fontWeight: selectedDuration === 1 ? 600 : 400 ,marginRight:4}}>3</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d',fontSize:selectedDuration ===2 ? 22 :14,fontWeight: selectedDuration === 2 ? 600 : 400 ,marginRight:4}}>6</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Superfast delivery</Text>
                                    {/* <Text>High priority delivery for all orders</Text> */}
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 0 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===0 ? 22 :14,fontWeight: selectedDuration === 0 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 1 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===1 ? 22 :14,fontWeight: selectedDuration === 1 ? 600 : 400}} /></DataTable.Cell>
                            <DataTable.Cell numeric><Entypo name="check" size={16} style={{ color: selectedDuration === 2 ? '#daa520' : '#7d7d7d' ,fontSize:selectedDuration ===2 ? 22 :14,fontWeight: selectedDuration === 2 ? 600 : 400}} /></DataTable.Cell>
                        </DataTable.Row>


                    </DataTable>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topHalf: {
        flex: 1.4,
        backgroundColor: '#05445e',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    bottomHalf: {
        flex: 2,
        backgroundColor: 'white', // Assuming white background for bottom half
    },
});

export default Membership;
