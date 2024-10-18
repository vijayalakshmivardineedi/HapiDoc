import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const ManageProfiles = () => {
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();
    const handleaddProfiles = () => {
        navigation.navigate('Add Profile')
    }
    return (
        <View style={styles.manageProfilesContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    All Profiles
                </Text>
            </View>
            <View style={styles.ProfileContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Avatar.Text size={45} label='U' style={{ margin: 10, backgroundColor: "#d1f1f4" }} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: "#189ab4" }}>User Name (Me)</Text>
                            <Text >Male | 32 Years | A+ Blood </Text>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text style={{ color: "#05545e", fontWeight: "500" }}>1 Record</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Edit Profile")}
                    >
                        <AntDesign name="edit" size={20} color="#189ab4" />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Text size={40} label='U' style={{ backgroundColor: "#d1f1f4" }} />
                            <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 7 }} >User Name</Text>
                        </View>
                        <TouchableOpacity style={styles.modalclose} onPress={toggleModal} >
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.recordContainer}>
                        <View style={styles.recordHeader}>
                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#05445e' }}> 1 Record</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("All Health Records")}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: '#189ab4' }}>View All </Text>
                                <AntDesign name="right" size={14} color="#189ab4" style={{ marginTop: 4, marginLeft: 2 }} />
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dashedDivider} />
                        <View style={styles.ListInrow}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 3 }}>
                                <Image style={{ width: 18, height: 18, marginRight: 3 }} source={require('../../../assets/Profile/experiment-results.png')} />
                                <Text style={{ fontSize: 12 }}>Lab Reports (1)</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={{ flexDirection: 'row', marginHorizontal: 3 }}>
                                <Image style={{ width: 18, height: 18, marginRight: 3 }} source={require('../../../assets/Profile/stethoscope-1.png')} />
                                <Text style={{ fontSize: 12 }}>Prescriptions (0)</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={{ flexDirection: 'row', marginHorizontal: 3 }}>
                                <Image style={{ width: 18, height: 18, marginRight: 3 }} source={require('../../../assets/Profile/hospital.png')} />
                                <Text style={{ fontSize: 12 }}>Others (0)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
            <View style={styles.ProfileContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Avatar.Text size={45} label='U' style={{ margin: 10, backgroundColor: "#d1f1f4" }} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#189ab4' }}>User Name 2 </Text>
                            <Text >Female | 28 Years | B+ Blood </Text>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text style={{ color: "#05545e", fontWeight: "500" }}>1 Record</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Edit Profile")}
                    ><AntDesign name="edit" size={20} color="#189ab4" /></TouchableOpacity>

                </View>
            </View>
            <View style={styles.footerSections}>
                <TouchableOpacity onPress={handleaddProfiles} style={{ width: '90%' }}>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Add Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}
export default ManageProfiles;

const styles = StyleSheet.create({
    manageProfilesContainer: {
        flex: 1,
        backgroundColor: "#eaf7f9"
    },
    header: {
        padding: 10,
        marginLeft: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500'
    },
    ProfileContainer: {
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    modalContainer: {
        backgroundColor: "#fff",
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalclose: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    footerSections: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
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
    recordContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#d1f1f4',
        borderRadius: 20,
    },
    recordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    dashedDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'dashed',
        marginVertical: 5,
    },
    ListInrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    verticalDivider: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 1
    }

})