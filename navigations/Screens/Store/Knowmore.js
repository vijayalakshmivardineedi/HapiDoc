import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons'; 

const Knowmore = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={{ flex: 1 , backgroundColor:"#eaf7f9" }}>
              {/* <View style={styles.header}>
                <View style={styles.leftSection}>
                    <TouchableOpacity style={styles.backIcon}
                     onPress={handleGoBack}
                     >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headertext}>Know More</Text>
                </View>
                
            </View> */}
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>About ZINCOVIT TABLET Covid_essentials 15'S</Text>
                <Text style={styles.Title}>Highlights:</Text>
                <Text style={styles.description}>
                    - Helps increase the appetite{'\n'}
                    - Helps treat vitamin & zinc deficiency{'\n'}
                    - Helps counter fatigue and exhaustion{'\n'}
                    - Helpful for women during pregnancy and surgery{'\n'}
                    - Strengthens immunity{'\n'}
                    - Ensure speedy recovery from illness
                </Text>
                <Text style={styles.Title}>Description:</Text>
                <Text style={styles.description}>
                    Zincovit Tablet is a nutritional supplement with vitamins A, B complex, C, D, and E and minerals such as 
                    Magnesium, Manganese, Iodine, Copper, Selenium, Chromium, Zinc, and Grape seed extracts. It helps combat 
                    deficiency of vitamins and minerals and helps improve your overall health.
                </Text>
                <Text style={styles.Title}>Key Ingredients:</Text>
                <Text style={styles.description}>
                    - Vitamin A{'\n'}
                    - Vitamin B1 (Thiamine){'\n'}
                    - Vitamin B2 (Riboflavin){'\n'}
                    - Vitamin B3 (Niacin){'\n'}
                    - Vitamin B5 (Pantothenic acid){'\n'}
                    - Vitamin B6 (Pyridoxine){'\n'}
                    - Vitamin B7 (Biotin){'\n'}
                    - Vitamin B9 (Folic acid){'\n'}
                    - Vitamin B12 (Methylcobalamin){'\n'}
                    - Vitamin C{'\n'}
                    - Vitamin D3{'\n'}
                    - Vitamin E{'\n'}
                    - Zinc{'\n'}
                    - Magnesium{'\n'}
                    - Manganese{'\n'}
                    - Iodine{'\n'}
                    - Copper{'\n'}
                    - Selenium{'\n'}
                    - Chromium{'\n'}
                    - Grape seed extract.
                </Text>
                <Text style={styles.Title}>Key Features:</Text>
                <Text style={styles.description}>
                    This formulation contains vitamins and minerals essential for proper functioning of the heart,
                     nervous system, and immune systems. Grape seed extract is a potent antioxidant that repairs the 
                     damage caused by free radicals. It helps improve RBC formation and enhances nerve function.
                </Text>
                <Text style={styles.Title}>How To Use:</Text>
                <Text style={styles.description}>
                    Use Zincovit Tablet as recommended by your doctor
                </Text>
                <Text style={styles.Title}>Storage:</Text>
                <Text style={styles.description}>
                    Store it in a cool and dry place, away from sunlight and moisture
                </Text>
                <Text style={styles.Title}>Precautions:</Text>
                <Text style={styles.description}>
                    - Read and follow the instructions carefully{'\n'}
                    - Do not take more than prescribed dose{'\n'}
                    - Discard the unused medicine after the expiry date{'\n'}
                    - Keep it out of reach of children{'\n'}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#05445E',
        padding: 10,
        height: 60, // Adjust the height as needed
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        marginRight: 10,
    },
    headertext:{
        fontSize: 20,
        color:"white",
    },
    container: {
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 25,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:5
    },
    description: {
        fontSize: 16,
        marginBottom:10
    },
    
    headerLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Knowmore;