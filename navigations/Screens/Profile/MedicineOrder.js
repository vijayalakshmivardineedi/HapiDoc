import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper';

const MedicineOrder = () => {
    const navigation = useNavigation();
    const handleOrderDetails = () =>{
        navigation.navigate('Medicine Orders Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Swiper style={styles.swiperWrapper} showsButtons={false}>
                    <Image source={{ uri: 'https://images.apollo247.in/pub/media/magestore/bannerslider/images/c/e/centrum_824x400.jpg?tr=w-400,q-80,f-webp,dpr-1,c-at_max' }} style={styles.carouselImage} />
                    <Image source={{ uri: 'https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400nivea16mar24.jpg?tr=w-400,q-80,f-webp,dpr-2,c-at_max' }} style={styles.carouselImage} />
                    <Image source={{ uri: 'https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400_isopure_1.jpg?tr=w-400,q-100,f-webp,c-at_max' }} style={styles.carouselImage} />
                </Swiper>
            </View>
            <View style={styles.ordersContainer}>
                <View style={styles.CardContainer}>
                    <View style={styles.Header}>
                        <View style={styles.firstRow}>
                            <Text style={styles.orderType}>OFFLINE ORDER </Text>
                            <Text style={styles.orderStatus}>Delivered</Text>
                        </View>
                        <View style={styles.secondRow}>
                            <Text style={styles.orderDate}>Purchased on 14-11-2023</Text>
                            <Text style={styles.orderBillId}>Bill Number CC0035368</Text>
                        </View>

                    </View>
                    <View style={styles.Divider} />
                    <View style={styles.productDetails}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/web/1.webp')} style={styles.image} />
                            <View style={{ paddingHorizontal: 10, paddingVertical: 10, }}>
                                <Text style={styles.productText}>
                                    Bevon Suspension 200 ml
                                </Text>
                                <Text>
                                    Quantity: 2
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleOrderDetails}>
                            <View style={{ borderColor: '#189ab4', borderWidth: 2, padding: 10, borderRadius: 8, }}>
                                <Text
                                >View Order</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate("cart")}>
                            <View style={{ backgroundColor: '#189ab4', borderColor: '#189ab4', borderWidth: 2, padding: 10, borderRadius: 8, }}>
                                <Text style={{color:'white'}}>Order again</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.CardContainer}>
                    <View style={styles.Header}>
                        <View style={styles.firstRow}>
                            <Text style={styles.orderType}>ONLINE ORDER </Text>
                            <Text style={{  backgroundColor: "orange",
        padding: 5,
        fontSize: 12,}}>Pending</Text>
                        </View>
                        <View style={styles.secondRow}>
                            <Text style={styles.orderDate}>Purchased on 21-03-2024</Text>
                            <Text style={styles.orderBillId}>Bill Number CC00458721</Text>
                        </View>

                    </View>
                    <View style={styles.Divider} />
                    <View style={styles.productDetails}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/web/1.webp')} style={styles.image} />
                            <View style={{ paddingHorizontal: 10, paddingVertical: 10}}>
                                <Text style={styles.productText}>
                                    Bevon Suspension 200 ml
                                </Text>
                                <Text>
                                    Quantity: 2
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity>
                            <View style={{ borderColor: '#189ab4', borderWidth: 2, padding: 10, borderRadius: 8 }}>
                                <Text
                                >View Order</Text>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("cart")}>
                            <View style={{ backgroundColor: '#189ab4', borderColor: '#189ab4', borderWidth: 2, padding: 10, borderRadius: 8, }}>
                                <Text style={{color:'white'}}>Order again</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf7f9'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
        width: '100%',
        height: 200,
    },
    swiperWrapper: {
        height: '100%',
    },
    carouselImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    ordersContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    CardContainer: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        backgroundColor: "#fff",
        marginBottom:10
    },
    Divider: {
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    Header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2,
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderType: {
        fontSize: 14,
        letterSpacing: 0.7,
        color: '#189ab4'
    },
    orderStatus: {
        backgroundColor: "lightgreen",
        padding: 5,
        fontSize: 12,
    },
    orderDate: {
        fontSize: 12,
        color: "#888",
    },
    orderBillId: {
        fontSize: 12,
        color: "#888"
    },
    image: {
        width: 70,
        height: 70,
    },
    productDetails: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    productText: {
        fontSize: 15,
        letterSpacing: 0.3,
        fontWeight: '600'
    }

});

export default MedicineOrder;
