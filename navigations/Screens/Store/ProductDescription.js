import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";


const ProductDescription = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("ProductKnowmore");
    }
    const handleReadMore = () => {
        navigation.navigate("Disclaimer");
    }
    const handleCart = () => {
        navigation.navigate("cart");
    }
    const handleAddAddress=()=>{
        navigation.navigate("Add Address")
      }
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View >
                <View style={styles.locationInfo}>
                    <View style={styles.deliveryInfo}>
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="location" size={22} color="#189ab4" />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.deliveryText}>Deliver to-Madhurawada</Text>
                        </View>
                        <TouchableOpacity style={styles.changeTextplace} onPress={handleAddAddress}>
                            <Text style={styles.changeText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Swiper style={styles.imageCarousel}>
                        <Image source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2022/7/EQ/ZG/ML/44713433/20220714-164122-500x500.jpg' }} style={styles.carouselImage} />
                        <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/GQ/KG/XR/112558477/product-jpeg-500x500.jpg' }} style={styles.carouselImage} />
                        <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2023/7/324528496/GZ/TJ/AQ/89091563/product-jpeg-500x500.jpg' }} style={styles.carouselImage} />
                        <Image source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2024/1/381487957/QC/HP/IV/2680123/apex-zincovit-tablet-500x500.jpg' }} style={styles.carouselImage} />
                    </Swiper>
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.heading}>Apex Zincovit Tablet</Text>
                    <Text style={styles.subheading}>By APEX LABORATORIES PVT LIMITED</Text>

                    <View style={styles.rowContainer1}>
                        <View >
                            <Text style={styles.cost}>109.95</Text>
                            <Text style={styles.taxInfo}>Inclusive of all taxes</Text>
                        </View>
                        <TouchableOpacity style={styles.addToCartButton} onPress={handleCart}>
                            <Ionicons name="cart" size={20} color="white" />
                            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.additionalContainer}>
                    <Text style={styles.additionalHeading}>Product Information</Text>
                    <Text style={styles.manufacturer}>Manufacturer: APEX LABORATORIES PVT LIMITED</Text>
                </View>
                <View style={styles.additionalContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.additionalHeading}>Know More</Text>
                        <Icon name="chevron-right" size={16} color="black" onPress={handlePress} style={{ marginBottom: 8 }} />
                    </View>
                    <Text style={styles.manufacturer}>View Details Related to Zincovit Tablets Covid-essntial 15's</Text>
                </View>
                <View style={styles.additionalContainer}>
                    <Text style={styles.additionalHeading}>Return Policy</Text>
                    <Text style={styles.manufacturer}>This item is not returnble</Text>
                </View>
                <View style={styles.additionalContainer}>
                    <Text style={styles.additionalHeading}>Disclaimer</Text>
                    <Text style={styles.manufacturer}>We've made all possible efforts to ensure that the information provide here
                        is accurate, up-to-date and complete, however, it should not
                        be treated as a substitute for professional medical.</Text>
                    <Text style={styles.changeText} onPress={handleReadMore}>Read More</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#eaf7f9"
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 10,
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginVertical: 10
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    deliveryText: {
        color: '#333',
        fontSize: 16,
        marginRight: 30,
        marginLeft: 5,
    },
    changeTextplace: {
        justifyContent: "center",

    },
    changeText: {
        color: '#189AB4',
        fontSize: 16,
        marginRight: 20,
    },

    imageContainer: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
    },
    imageCarousel: {
        height: 200,
    },
    carouselImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    productDetails: {
        marginHorizontal: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 12,
        marginBottom: 5,
    },
    cost: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    taxInfo: {
        fontSize: 11,
        color: '#888',
        marginTop: 5,
    },
    addToCartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#189ab4',
        padding: 12,
        borderRadius: 8,
    },
    addToCartButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 15,
    },
    additionalContainer: {
        padding: 20,
        backgroundColor: '#fff', // Background color for the additional container
        marginTop: 8, // Space between "Add to Cart" button and the additional container
        borderRadius: 8,
    },
    additionalHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    manufacturer: {
        fontSize: 13,
    },
});

export default ProductDescription;