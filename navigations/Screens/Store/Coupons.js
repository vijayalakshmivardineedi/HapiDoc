import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Modal, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';
const FirstRoute = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const handleApplyCoupon = () => {
        // Your logic for applying coupon here
        // For demonstration purposes, let's set showPopup to true
        setShowPopup(true);
    };

    const handleOk = () => {
        setShowPopup(false);
    };

    const handleShowTerms = () => {
        setShowTermsModal(true);
    };

    const handleCloseTerms = () => {
        setShowTermsModal(false);
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#eaf7f9', paddingHorizontal: 15 }}>
            <View style={styles.couponBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter coupon code"
                />
                <TouchableOpacity
                    style={styles.applyButton}
                    onPress={handleApplyCoupon}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.availableCoupons}>Available Coupons</Text>

            <View style={[styles.block, { backgroundColor: '#fff' }]}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleApplyCoupon()}>
                    <View style={styles.subHeadingContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../../../assets/icons/myntra.png')}
                                style={styles.image2}
                            />
                            <Text style={[styles.subHeading, { color: '#004225' }]}>Medicine Offer</Text>

                        </View>
                        <Text style={[styles.applyButtonText, { fontSize: 16, color: '#189ab4', marginRight: 10 }]}>Apply</Text>
                    </View>
                    <Text style={styles.itemTitle}>Get up to 8% off + extra 15% on your 1st allopathy medicine order.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShowTerms}>
                    <Text style={styles.termsConditionsLink}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.block, { backgroundColor: '#fff' }]}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleApplyCoupon()}>
                    <View style={styles.subHeadingContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../../../assets/icons/myntra.png')}
                                style={styles.image2}
                            />
                            <Text style={[styles.subHeading, { color: '#004225' }]}>Medicine Offer</Text>

                        </View>
                        <Text style={[styles.applyButtonText, { fontSize: 16, color: '#189ab4', marginRight: 10 }]}>Apply</Text>
                    </View>
                    <Text style={styles.itemTitle}>Get up to 8% off + extra 15% on your 1st allopathy medicine order.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShowTerms}>
                    <Text style={styles.termsConditionsLink}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.block, { backgroundColor: '#fff' }]}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleApplyCoupon()}>
                    <View style={styles.subHeadingContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../../../assets/icons/myntra.png')}
                                style={styles.image2}
                            />
                            <Text style={[styles.subHeading, { color: '#004225' }]}>Medicine Offer</Text>

                        </View>
                        <Text style={[styles.applyButtonText, { fontSize: 16, color: '#189ab4', marginRight: 10 }]}>Apply</Text>
                    </View>
                    <Text style={styles.itemTitle}>Get up to 8% off + extra 15% on your 1st allopathy medicine order.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShowTerms}>
                    <Text style={styles.termsConditionsLink}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.block, { backgroundColor: '#fff' }]}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleApplyCoupon()}>
                    <View style={styles.subHeadingContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../../../assets/icons/myntra.png')}
                                style={styles.image2}
                            />
                            <Text style={[styles.subHeading, { color: '#004225' }]}>Medicine Offer</Text>

                        </View>
                        <Text style={[styles.applyButtonText, { fontSize: 16, color: '#189ab4', marginRight: 10 }]}>Apply</Text>
                    </View>
                    <Text style={styles.itemTitle}>Get up to 8% off + extra 15% on your 1st allopathy medicine order.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShowTerms}>
                    <Text style={styles.termsConditionsLink}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.block, { backgroundColor: '#fff' }]}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleApplyCoupon()}>
                    <View style={styles.subHeadingContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../../../assets/icons/myntra.png')}
                                style={styles.image2}
                            />
                            <Text style={[styles.subHeading, { color: '#004225' }]}>Medicine Offer</Text>

                        </View>
                        <Text style={[styles.applyButtonText, { fontSize: 16, color: '#189ab4', marginRight: 10 }]}>Apply</Text>
                    </View>
                    <Text style={styles.itemTitle}>Get up to 8% off + extra 15% on your 1st allopathy medicine order.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShowTerms}>
                    <Text style={styles.termsConditionsLink}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={showPopup} transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Coupon code not applicable on the current cart.</Text>
                        <TouchableOpacity onPress={handleOk} style={styles.okButton}>
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal visible={showTermsModal} transparent={true} >
                <View style={styles.termsModalContainer}>
                    <View style={styles.termsModalContent}>
                        <TouchableOpacity onPress={handleCloseTerms} >
                            <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={styles.termsModalHeading}>Offer Details</Text>
                                <AntDesign name="close" size={18} color="black" style={styles.closeButton} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Image
                                    source={require('../../../assets/icons/myntra.png')}
                                    style={styles.image2}
                                />
                                <Text style={styles.subHeading}>Medicine Offer</Text>
                            </View>
                            <View style={styles.offerTextContainer}>

                                <Text style={styles.itemTitle}>Get up to 8% off (no limit)+ extra 15% on your first allopathy medicine order .</Text>

                                <Text style={styles.termsConditionsLink3}>Terms & Conditions</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 7 }}>

                            <Text style={styles.bullet}>• Get up to 8% off (no limit) + extra 15% coupon discount (up to ₹280) on your first allopathy medicine order of ₹999 & above.</Text>


                        </View>
                        <View style={styles.bulletPoint}>

                            <Text style={styles.bullet}>• Get up to 8% off (no limit) + extra 15% coupon discount (up to ₹280) on your first allopathy medicine order of ₹999 & above.</Text>

                        </View>

                    </View>
                </View>
            </Modal>


        </ScrollView>
    );
};


const SecondRoute = () => {
    const [showTermsModal, setShowTermsModal] = useState(false);

    const handleOpenTermsModal = () => {
        setShowTermsModal(true);
    };

    const handleCloseTermsModal = () => {
        setShowTermsModal(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#eaf7f9' }}>
            <View style={styles.block}>
                <View style={styles.offerTextContainer}>
                    <View style={styles.paytmIconContainer}>
                        <Text style={styles.itemTitle}>Payment offers </Text>
                        <Text style={styles.paytmText}>Discount auto-applies upon payment</Text>
                    </View>
                    <View style={[styles.block1]}>
                        <View style={styles.subHeadingContainer1}>
                            <View style={styles.subHeadingTextContainer1}>
                                <Image source={require('../../../assets/bankicons/verify.png')} style={styles.image4} />
                            </View>
                            <Text style={styles.itemTitle1}>Pay with the payment method associated with{'\n'}one of the below offers, and the offer will be available automatically.</Text>
                        </View>
                    </View>
                   
                        <View style={styles.paymentofferContainer}>
                            <Image source={require('../../../assets/bankicons/paytm.png')} style={styles.image3} />
                            <Text style={styles.itemDescription}>Get 4000 cashback points</Text>
                            <Text style={styles.itemDescription1}>on orders of Rs 999 and above</Text>
                            <TouchableOpacity onPress={handleOpenTermsModal}>
                            <Text style={styles.termsConditionsLink1}>Terms & Conditions</Text>
                            </TouchableOpacity>
                        </View>
                    
                </View>
            </View>
            <Modal visible={showTermsModal} transparent={true} >
                <View style={styles.termsModalContainer}>
                    <View style={styles.termsModalContent}>
                    <TouchableOpacity onPress={handleCloseTermsModal} >
                        
                        <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                                <Text style={styles.termsModalHeading}>Offer Details</Text>
                                <AntDesign name="close" size={18} color="black" style={styles.closeButton} />
                            </View>
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/bankicons/paytm.png')}
                            style={styles.image5}
                        />
                        <Text style={styles.itemTitle}>Get 400 cashback points</Text>
                        <Text > On orders of  ₹999 and above</Text>
                        <Text > Normal Payment Content</Text>
                    </View>
                </View>
            </Modal>
        </View >
    );
};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function NotificationScreen() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Coupons' },
        { key: 'second', title: 'Payment Offers' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
            renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#189ab4' }} />} // <-- add this line
        />
    );
}

const styles = StyleSheet.create({
    firstRouteCard: {
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 10
    },
    CardText: {
        flex: 2,
        fontSize: 16,
        fontWeight: "600",

        letterSpacing: 0.3,
    },
    CardTime: {
        fontSize: 12,
        marginTop: 10,
        color: "#888",
    },
    CardBody: {
        fontSize: 13,
        color: "#888",
        lineHeight: 10,
        letterSpacing: 0.7,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    okButton: {
        backgroundColor: "#189ab4",
        borderRadius: 5,
        padding: 10,
        width: 100
    },
    okButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    block: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
    },

    subHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    subHeadingTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5,
    },
    itemTitle3: {
        fontSize: 16,
        marginBottom: 5,
    },
    termsConditionsLink: {
        textDecorationLine: 'underline',
        color: "#189ab4",
        display: 'flex',
        alignSelf: "flex-start"
    },
    termsConditionsLink3: {
        marginVertical: 15,
        fontSize: 16,
        fontWeight: "600",
        color: "#189ab4",
    },
    couponBox: {
        marginTop: 12,
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
    },

    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    applyButtonText: {
        fontWeight: 'bold',
        color: '#189ab4',
    },
    tickMarkContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#20B2AA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tickMark: {
        alignSelf: 'center',
    },
    itemDescription: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentofferContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    itemDescription1: {
        fontSize: 14,
    },
    itemTitle1: {
        padding: 10,
        fontSize: 13,
        marginBottom: 5,
    },
    block1: {
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    subHeadingContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d4f1f4',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#189ab4",

        paddingHorizontal: 10,
    },
    subHeadingTextContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tickMarkContainer1: {
        width: 50,
        height: 50,
        backgroundColor: '#20B2AA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tickMark1: {
        alignSelf: 'center',
    },

    image2: {
        width: 35,
        height: 35,
    },
    image5: {
        width: 60,
        height: 50,
    },
    image3: {
        width: 40,
        height: 40,
    },
    image4: {
        width: 40,
        height: 40,
    },
    termsConditionsLink1: {
        textDecorationLine: 'underline',
        marginTop:5,
        color:"#189ab4"
    },
    paytmIconContainer: {
        marginBottom: 15,
        paddingHorizontal: 10
    },
    availableCoupons: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 15,
    },
    termsModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    termsModalContent: {
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    termsModalHeading: {
        fontSize: 18,
        fontWeight: 'bold',
    },



})