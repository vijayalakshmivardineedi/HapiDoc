
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Productlist = () => {
    const navigation = useNavigation();
    const navigateToMedicineDetailsScreen = () => {
        navigation.navigate('ProductDescription');
    };
  const handleAddAddress=()=>{
    navigation.navigate("Add Address")
  }
  const handletoCart =() => {
    navigation.navigate("cart");
  }
    return (
        <View style={styles.container}>
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
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                <FontAwesome name="filter" size={18} color="white" />
                    <Text style={{color:"white", fontSize:16 , marginLeft:5}} >Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Entypo name="select-arrows" size={18} color="white" />
                    <Text style={{color:"white", fontSize:16}}>Sort</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <View style={styles.imageGrid}>
                        <View style={styles.imageRow}>
                            <TouchableOpacity
                                onPress={navigateToMedicineDetailsScreen}
                            >
                                <View style={styles.imageCard}>
                                    <Image
                                        source={{ uri: 'https://ayushcare.in/cdn/shop/products/Tiruvarur.png?crop=center&height=922&v=1672486158&width=922' }}
                                        style={styles.image}
                                        resizeMode="cover"
                                    />
                                    <View style={[styles.infoContainer, styles.rowContainer]}>
                                        <View style={styles.infoTextContainer}>
                                            <Text style={styles.vitaminName}>Apex Zincovit Tablet</Text>
                                            <Text style={styles.vitaminCost}>$109.95</Text>
                                        </View>
                                        <View style={styles.space}></View>
                                        <TouchableOpacity style={styles.addButton} onPress={handletoCart}>
                                            <Text style={styles.addButtonText}>ADD</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageRow}>
                            <View style={styles.imageCard}>
                                <Image
                                    source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2023/9/340198401/UU/WP/DX/60399515/cipcal-xt-500x500.jpg' }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <View style={[styles.infoContainer, styles.rowContainer]}>
                                    <View style={styles.infoTextContainer}>
                                        <Text style={styles.vitaminName}>Cipcal XT Calcium Vitamin D3 Tablet</Text>
                                        <Text style={styles.vitaminCost}>$200</Text>
                                    </View>
                                    <View style={styles.space}></View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>ADD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.imageRow}>
                            <View style={styles.imageCard}>
                                <Image
                                    source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2022/4/FL/ZG/TF/86150443/vitamin-c-with-zinc-chew-able-tablets-250x250.jpg' }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <View style={[styles.infoContainer, styles.rowContainer]}>
                                    <View style={styles.infoTextContainer}>
                                        <Text style={styles.vitaminName}>Vitamin C Chewable Tablets</Text>
                                        <Text style={styles.vitaminCost}>$100</Text>
                                    </View>
                                    <View style={styles.space}></View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>ADD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.imageRow}>
                            <View style={styles.imageCard}>
                                <Image
                                    source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2022/8/BZ/MB/QD/155614800/b-complex-250x250.png' }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <View style={[styles.infoContainer, styles.rowContainer]}>
                                    <View style={styles.infoTextContainer}>
                                        <Text style={styles.vitaminName}>Vitamin B Complex Tablets</Text>
                                        <Text style={styles.vitaminCost}>$71</Text>
                                    </View>
                                    <View style={styles.space}></View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>ADD</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        <View style={styles.imageRow}>
                            <View style={styles.imageCard}>
                                <Image
                                    source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2022/10/PA/VK/CN/109188001/calcium-citrate-magnesium-vitamin-d3-tablets-500x500.jpg' }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <View style={[styles.infoContainer, styles.rowContainer]}>
                                    <View style={styles.infoTextContainer}>
                                        <Text style={styles.vitaminName}>Calcium Citrate Magnesium Vitamin D3 Tablets</Text>
                                        <Text style={styles.vitaminCost}>$850</Text>
                                    </View>
                                    <View style={styles.space}></View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>ADD</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaf7f9"
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
    contentContainer: {
        flexGrow: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#189AB4',
        padding: 12,
        width: '50%',
        height: 45,
        alignItems: 'center',
    },
    imageGrid: {
        paddingHorizontal: 15,
        marginTop: 10,
    },
    imageRow: {
        marginBottom: 10,
    },
    imageCard: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 3,
        backgroundColor: "#fff"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    infoTextContainer: {
        flexDirection: 'column',
        flexShrink: 1,
        
    },
    vitaminName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        width: 200,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    space: {
        width: 70,
    },
    vitaminCost: {
        fontSize: 16,
        marginBottom: 5,
    },
    addButton: {
        backgroundColor: '#189AB4',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop:30
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default Productlist;