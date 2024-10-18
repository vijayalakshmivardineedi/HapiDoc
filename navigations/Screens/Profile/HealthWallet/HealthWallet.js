import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
const HealthWallet = () => {
    const images = [
        require('../../../../assets/cards/Ad1.png'),
        require('../../../../assets/cards/Ad2.png'),
        require('../../../../assets/cards/Ad3.png'),
    ];
    const cardsData = [
        {
            id: 1,
            title: 'Flat 12% off on medicines',
            description: 'Check all conditions on cart page'
        },
        {
            id: 2,
            title: 'Special Offer',
            description: 'Limited time only!'
        },

    ];
    return (
        <View style={styles.Container}>
            <View style={{ paddingVertical: 10 }}>
                <Image
                    source={require('../../../../assets/cards/card1.png')}
                    style={{ width: 365, height: 180, borderRadius: 10 }}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, marginTop: 20, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: "600" }}>
                        ₹ 30
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: "300", textTransform: "uppercase" }}>
                        OHC Available
                    </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, marginBottom: 20, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: "600" }}>
                        ₹ 30
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: "300", textTransform: "uppercase" }}>
                        OHC Earned
                    </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 0, top: 0, left: 0, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: "400", textTransform: "uppercase", letterSpacing: 0.9 }}>
                        Jhansi Devi Telu
                    </Text>

                </View>
                <View style={{ position: 'absolute', bottom: 0, right: 0, marginBottom: 20, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: "600" }}>
                        ₹ 30
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: "300", textTransform: "uppercase" }}>
                        OHC Redeem
                    </Text>
                </View>
            </View>

            <View>
                <View style={{ borderWidth: 1, borderColor: "#189ab4", backgroundColor: "#d1f1f4", padding: 10, borderRadius: 8 }}>
                    <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: "600", color: "#05445e", marginBottom: 5 }}>How it Works?</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Octicons name="dot-fill" size={12} color="#189ab4" style={{ marginRight: 10, marginTop: 5 }} /><Text style={{ color: "#777", fontSize: 12 }}>This is OHC points can be redeem during your Online Medicine Purchase</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Octicons name="dot-fill" size={12} color="#189ab4" style={{ marginRight: 10, marginTop: 5 }} /><Text style={{ color: "#777", fontSize: 12 }}>Just select the Apply Health Credit Wallet in Cart to redeem your points </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Octicons name="dot-fill" size={12} color="#189ab4" style={{ marginRight: 10, marginTop: 5 }} /><Text style={{ color: "#777", fontSize: 12 }}>The points will refresh after every transaction</Text>
                    </View>
                </View>
            </View>
            <View >
                <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10, color: "#05445e" }}>Transaction History</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8 }}>
                    <View><Text>Redeemed Points</Text></View>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialIcons name="arrow-upward" size={18} color="red" /><Text> - 10.00</Text></View>

                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8 }}>
                    <View ><Text>Redeemed Points</Text></View>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialIcons name="arrow-downward" size={18} color="green" /><Text> + 10.00</Text></View>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8 }}>
                    <View ><Text>Redeemed Points</Text></View>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialIcons name="arrow-downward" size={18} color="green" /><Text> + 10.00</Text></View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 18, color: "#05445e", marginTop: 5, fontWeight: "600", marginBottom: 10 }}>Offers for You</Text>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                    {cardsData.map(card => (
                        <View key={card.id} style={{ marginHorizontal: 10 }}>
                            <LinearGradient
                                colors={['#05445e', '#189ab4']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: 60,
                                    width: 250,
                                    flexDirection: "row",
                                }}>
                                <View>
                                    <Octicons name="dot-fill" size={30} color="#eaf7f9" style={{ marginLeft: -7 }} />
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', marginLeft: 10 }}>
                                    <Text style={{ color: 'white' }}>{card.title}</Text>
                                    <Text style={{ color: 'white' }}>{card.description}</Text>
                                </View>
                                <View>
                                    <Octicons name="dot-fill" size={30} color="#eaf7f9" style={{ marginRight: -7 }} />
                                </View>
                            </LinearGradient>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.imagecontainer}>
                <Swiper
                    style={styles.swiper}
                    horizontal={true}
                    showsPagination={true}
                >
                    {images.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image source={image} style={styles.image} />
                        </View>
                    ))}
                </Swiper>
            </View>
        </View>

    )
}
export default HealthWallet;

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: "#eaf7f9",
        paddingHorizontal: 10,
        paddingBottom:10
    },
    imagecontainer: {
        flex: 1,
        marginTop: 10,
        
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 365,
        height: 180,
        borderRadius: 10,
        
    },

})